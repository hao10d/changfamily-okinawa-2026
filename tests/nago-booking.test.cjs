const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const elements = new Map();
const element = selector => {
  if (!elements.has(selector)) elements.set(selector, {
    innerHTML: '', textContent: '',
    classList: { toggle() {}, contains() { return false; } },
    addEventListener() {},
    querySelector: child => element(`${selector} ${child}`),
    querySelectorAll: () => []
  });
  return elements.get(selector);
};
const context = vm.createContext({
  window: { addEventListener() {} },
  document: {
    querySelector: element,
    querySelectorAll: () => [],
    getElementById: () => null,
    dispatchEvent() {}
  },
  CustomEvent: class CustomEvent {}
});
vm.runInContext(read('trip-data.js'), context);
vm.runInContext(read('app.js'), context);
const data = context.window.extendedTripData;
const day = data.enhancements.f[2];
const html = read('index.html');
const rendered = element('#dayList').innerHTML;
vm.runInContext("renderPrintSheet('f')", context);
const printed = element('#printSheet').innerHTML;

test('Nov 5 dinner is Nago at 18:00, with eight guests and seven courses', () => {
  assert.equal(data.plans.f.days[2].date, '11.05');
  const dinner = day.flow.find(row => row[1] === '18:00–20:00');
  assert.match(dinner[2], /ちゃぁぶ～名護店/);
  assert.match(dinner[3], /7 位成人＋1 位兒童，共 8 人/);
  assert.match(dinner[3], /コース 7 份，小孩不用點套餐/);
  assert.match(dinner[4], /¥3,980.*7.*¥27,860/);
  assert.equal(3980 * 7, 27860);
});

test('child chair and confirmation email remain pending', () => {
  for (const output of [rendered, printed]) {
    assert.match(output, /兒童椅 1 張需求待確認/);
    assert.match(output, /名護店確認信待收件/);
  }
  assert.match(html, /店家表示應不會重複收取，仍以平台實際帳單為準/);
});

test('daytime visits remain and all travel legs fit the new dinner route', () => {
  for (const name of ['古宇利海洋塔', 'KOURI SHRIMP', 'The Shinmay', '名護鳳梨園']) {
    assert.ok(day.route.includes(name), name);
  }
  assert.equal(day.travel.length, day.route.length - 1);
  assert.ok(day.flow.some(row => row[1] === '15:50–17:25' && row[2] === '名護市區自由時間'));
  assert.ok(day.route.slice(1, -1).every(stop => !stop.includes('飯店')));
  assert.ok(day.flow.filter(row => row[0] === 'drive' && row[2].includes('飯店')).length === 2);
  assert.ok(day.flow.some(row => row[1] === '17:45–18:00' && row[2].includes('名護店')));
  assert.ok(day.flow.some(row => row[1] === '20:30–20:40'));
  assert.ok(day.flow.filter(row => row[0] === 'drive').every(row => !/北谷|沖縄南|許田 IC/.test(row[2])));
});

test('Nago photo, map pin and comparison row match the restaurant', () => {
  const photo = day.photos.find(row => row[1].includes('ちゃぁぶ'));
  assert.equal(photo[0], 'assets/chabuu-nago-agu.jpg');
  assert.ok(fs.existsSync(path.join(root, photo[0])));
  const pin = vm.runInContext("mapCatalogs.food.find(row => row.name.includes('ちゃぁぶ'))", context);
  assert.equal(pin.region, 'north');
  assert.equal(pin.coords[0], 26.607214);
  assert.equal(pin.coords[1], 127.989494);
  const group = data.matrix.find(item => item.rows.some(row => row[1] === 'ちゃぁぶ～名護店'));
  assert.match(group.region, /^北部/);
  assert.match(element('.matrix-scroll').innerHTML, /ちゃぁぶ～名護店/);
  assert.match(element('.mobile-matrix .mobile-matrix-list').innerHTML, /ちゃぁぶ～名護店/);
});

test('screen and print render updated dinner details without the Chatan route', () => {
  for (const output of [html, rendered, printed, read('app.js'), read('trip-data.js')]) {
    assert.doesNotMatch(output, /ちゃぁぶ～北谷店|北谷ダイニング ちゃぁぶ|21:30–21:50|套餐未指定|chabuu-chatan-agu/);
    assert.doesNotMatch(output, /auth_key=|@gmail\.com|booking\.resty\.jp/);
  }
  assert.match(printed, /ちゃぁぶ～名護店/);
  assert.match(printed, /¥27,860/);
  assert.match(printed, /chang-avatar\.jpg/);
  assert.match(printed, /張家旅行社/);
  assert.match(printed, /順路加點／替代方案/);
});

test('costs remove only the Chatan toll detour and keep seven-paying-person allocation', () => {
  const toll = Math.round(4100 * 0.1975);
  const total = 67900 + 34621 + 20530 + toll;
  assert.equal(toll, 810);
  assert.equal(total, 123861);
  assert.equal(Math.round(total / 7), 17694);
  assert.match(html, /約 ¥4,100/);
  assert.match(html, /估 NT\$810/);
  assert.match(html, /估 NT\$123,861 ÷ 7 人/);
  assert.match(html, /約 NT\$17,694／人/);
  assert.doesNotMatch(html, /7,020|124,437|17,777/);
});

test('other confirmed family dinners and six-day travel dates remain unchanged', () => {
  assert.equal(data.plans.f.days.length, 6);
  assert.equal(data.plans.f.days[0].date, '11.03');
  assert.equal(data.plans.f.days[5].date, '11.08');
  assert.match(JSON.stringify(data.enhancements.f[1]), /燒肉五苑.*18:00/);
  const saturday = JSON.stringify(data.enhancements.f[4]);
  assert.match(saturday, /19:15/);
  assert.match(saturday, /19:30/);
  assert.match(saturday, /那霸國際通店/);
});
