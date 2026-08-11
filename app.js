const plans = {
  a: {
    title: "方案 A｜均衡分區",
    description: "前後住那霸，中段住恩納。移動最順，最後一天最從容。",
    route: [
      { nights: "2", place: "那霸市區", note: "縣廳前／國際通" },
      { nights: "2", place: "恩納西海岸", note: "萬座毛／冨著" },
      { nights: "1", place: "那霸市區", note: "縣廳前／國際通" }
    ],
    days: [
      {
        date: "11.03",
        weekday: "星期二",
        title: "抵達那霸，追上琉球盛典",
        subtitle: "機場 → 飯店寄放行李 → 首里 → 國際通",
        times: [
          ["12:25", "抵達那霸機場，預留入境與領行李時間"],
          ["14:15", "搭單軌或計程車前往那霸市區，寄放行李"],
          ["15:30", "若 2026 首里城祭涵蓋 11/3，再視官方節目與通關時間前往"],
          ["18:30", "國際通散步，晚餐品嚐沖繩麵、阿古豬或島料理"]
        ],
        tags: ["琉球文化", "單軌移動", "抵達日輕行程"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/shuri-steps.jpg",
        imageAlt: "旅人走入首里城歷史街區",
        label: "WELCOME TO OKINAWA"
      },
      {
        date: "11.04",
        weekday: "星期三",
        title: "南部海岸與地下鐘乳石世界",
        subtitle: "齋場御嶽 → 知念岬 → 沖繩世界 → 瀨長島",
        times: [
          ["08:30", "市區取車，沿南部海岸前往南城市"],
          ["10:00", "齋場御嶽，走入琉球王國的重要聖地"],
          ["11:30", "知念岬公園眺望太平洋，附近享用海景午餐"],
          ["13:30", "沖繩世界、玉泉洞與傳統工藝村"],
          ["17:00", "瀨長島 Umikaji Terrace 看夕陽與飛機起降"]
        ],
        tags: ["世界遺產", "鐘乳石洞", "海景夕陽"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/naminoue.jpg",
        imageAlt: "那霸波上宮參道",
        label: "SOUTHERN OKINAWA"
      },
      {
        date: "11.05",
        weekday: "星期四",
        title: "沿西海岸移動，住進恩納",
        subtitle: "退房 → 北谷 → 殘波岬 → 座喜味城 → 萬座毛",
        times: [
          ["09:00", "退房後出發，前往北谷美國村散步與午餐"],
          ["12:30", "殘波岬燈塔與海岸步道"],
          ["14:00", "座喜味城跡，欣賞琉球石砌城牆"],
          ["16:00", "萬座毛看象鼻岩與東海海景"],
          ["17:30", "入住恩納村海岸飯店，享受不趕行程的夜晚"]
        ],
        tags: ["海岸公路", "城跡", "度假飯店"],
        stay: "恩納村西海岸｜萬座毛／冨著",
        image: "assets/manzamo.jpg",
        imageAlt: "萬座毛海岸斷崖",
        label: "ONNA COAST"
      },
      {
        date: "11.06",
        weekday: "星期五",
        title: "北部經典，美麗海與古宇利藍",
        subtitle: "美麗海水族館 → 備瀨福木林 → 古宇利島",
        times: [
          ["08:00", "從恩納出發，避開較晚的北上車流"],
          ["09:30", "美麗海水族館，預留 2.5 至 3 小時"],
          ["12:45", "本部町午餐，品嚐沖繩麵或海葡萄料理"],
          ["14:00", "備瀨福木林道散步或租單車"],
          ["16:00", "跨越古宇利大橋，海灘與島上咖啡"],
          ["18:30", "返回恩納村"]
        ],
        tags: ["鯨鯊", "福木林", "古宇利大橋"],
        stay: "恩納村西海岸｜萬座毛／冨著",
        image: "assets/aquarium.jpg",
        imageAlt: "美麗海水族館黑潮之海",
        label: "MOTOBU & KOURI"
      },
      {
        date: "11.07",
        weekday: "星期六",
        title: "慢遊中部，回到那霸",
        subtitle: "飯店晨光 → 琉球村 → 北谷午餐 → 牧志市場",
        times: [
          ["09:30", "悠閒退房，保留海邊散步或飯店設施時間"],
          ["11:00", "琉球村，傳統家屋、工藝與表演"],
          ["13:30", "北谷海邊午餐，最後採買"],
          ["16:30", "那霸還車、入住飯店"],
          ["18:00", "牧志公設市場周邊自由晚餐"]
        ],
        tags: ["傳統聚落", "自由購物", "回那霸"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/american-depot.jpg",
        imageAlt: "北谷美國村街道與旅人",
        label: "CENTRAL TO NAHA"
      },
      {
        date: "11.08",
        weekday: "星期日",
        title: "從容收心，前往那霸機場",
        subtitle: "飯店早餐 → 機場 → 13:35 起飛",
        times: [
          ["08:00", "早餐與最後整理"],
          ["10:15", "從那霸市區出發前往機場"],
          ["10:45", "抵達機場，辦理報到與托運"],
          ["13:35", "由那霸機場起飛"]
        ],
        tags: ["免趕路", "機場購物", "旅程完成"],
        stay: "溫暖的家",
        image: "assets/naha-monorail.jpg",
        imageAlt: "那霸夕暮中的單軌電車",
        label: "SEE YOU, OKINAWA"
      }
    ]
  },
  b: {
    title: "方案 B｜只換一次",
    description: "那霸住兩晚，再連住北谷三晚。行李最輕鬆，夜間機能也完整。",
    route: [
      { nights: "2", place: "那霸市區", note: "縣廳前／國際通" },
      { nights: "3", place: "北谷美濱", note: "美國村周邊" }
    ],
    days: [
      {
        date: "11.03",
        weekday: "星期二",
        title: "抵達那霸，追上琉球盛典",
        subtitle: "機場 → 飯店寄放行李 → 首里 → 國際通",
        times: [
          ["12:25", "抵達那霸機場，預留入境與領行李時間"],
          ["14:15", "前往市區飯店寄放行李"],
          ["15:30", "若 2026 首里城祭涵蓋 11/3，再視官方節目與通關時間前往"],
          ["18:30", "國際通與屋台村自由晚餐"]
        ],
        tags: ["琉球文化", "單軌移動", "抵達日輕行程"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/shuri-steps.jpg",
        imageAlt: "旅人走入首里城歷史街區",
        label: "WELCOME TO OKINAWA"
      },
      {
        date: "11.04",
        weekday: "星期三",
        title: "那霸老城，市場與工藝散步",
        subtitle: "首里街區 → 壺屋通 → 牧志市場 → 波上宮",
        times: [
          ["09:00", "搭單軌前往首里，慢走守禮門與金城町石疊道"],
          ["12:30", "壺屋通看沖繩陶器，巷弄咖啡午餐"],
          ["15:00", "牧志公設市場與平和通商店街"],
          ["17:00", "波上宮、波之上海灘看市區夕景"],
          ["19:00", "國際通最後採買"]
        ],
        tags: ["市區散步", "陶藝", "市場美食"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/naha-night.jpg",
        imageAlt: "那霸國際通夜晚街景",
        label: "NAHA SLOW WALK"
      },
      {
        date: "11.05",
        weekday: "星期四",
        title: "南部環島後，入住北谷",
        subtitle: "取車退房 → 齋場御嶽 → 沖繩世界 → 瀨長島 → 北谷",
        times: [
          ["08:30", "取車、退房，行李留在車上並避免放置貴重物品"],
          ["10:00", "齋場御嶽與知念岬"],
          ["12:30", "南城市海景午餐"],
          ["14:00", "沖繩世界與玉泉洞"],
          ["17:00", "瀨長島夕陽，晚餐後前往北谷"],
          ["20:00", "入住北谷，開始三晚連住"]
        ],
        tags: ["只搬一次", "南部景點", "北谷連住"],
        stay: "北谷町｜美濱美國村周邊",
        image: "assets/american-depot.jpg",
        imageAlt: "北谷美國村街道與旅人",
        label: "SOUTH TO CHATAN"
      },
      {
        date: "11.06",
        weekday: "星期五",
        title: "一日北上，美麗海與古宇利島",
        subtitle: "北谷 → 美麗海水族館 → 備瀨 → 古宇利島 → 北谷",
        times: [
          ["07:30", "提早從北谷出發，北上約 1.5 至 2 小時"],
          ["09:30", "美麗海水族館與海洋博公園"],
          ["13:00", "本部町午餐、備瀨福木林道"],
          ["15:30", "古宇利大橋與島上海景"],
          ["18:30", "返回北谷，晚餐可選海邊餐廳"]
        ],
        tags: ["北部長途日", "鯨鯊", "海島公路"],
        stay: "北谷町｜美濱美國村周邊",
        image: "assets/aquarium.jpg",
        imageAlt: "美麗海水族館黑潮之海",
        label: "NORTH DAY TRIP"
      },
      {
        date: "11.07",
        weekday: "星期六",
        title: "中部海岸，留一點度假感",
        subtitle: "萬座毛 → 琉球村 → 殘波岬 → 美國村夕陽",
        times: [
          ["09:00", "前往萬座毛，避開午後人潮"],
          ["11:00", "琉球村體驗文化與傳統表演"],
          ["14:00", "座喜味城跡或讀谷陶器村二選一"],
          ["16:00", "殘波岬海岸"],
          ["17:30", "回美國村看夕陽、吃晚餐與採買"]
        ],
        tags: ["中部慢遊", "琉球文化", "夕陽晚餐"],
        stay: "北谷町｜美濱美國村周邊",
        image: "assets/manzamo.jpg",
        imageAlt: "萬座毛海岸斷崖",
        label: "CENTRAL COAST"
      },
      {
        date: "11.08",
        weekday: "星期日",
        title: "提早離開北谷，直達機場",
        subtitle: "北谷退房 → 還車 → 13:35 起飛",
        times: [
          ["08:00", "早餐、退房與行李確認"],
          ["09:15", "最晚從北谷出發，週末交通需留緩衝"],
          ["10:30", "機場周邊還車並搭接駁車"],
          ["11:15", "抵達航廈辦理報到"],
          ["13:35", "由那霸機場起飛"]
        ],
        tags: ["提早出發", "還車接駁", "預留緩衝"],
        stay: "溫暖的家",
        image: "assets/naha-monorail.jpg",
        imageAlt: "那霸夕暮中的單軌電車",
        label: "SEE YOU, OKINAWA"
      }
    ]
  },
  c: {
    title: "方案 C｜先海後城",
    description: "先住恩納三晚跑北部與中部，再回那霸連住兩晚。只換一次，回程也輕鬆。",
    route: [
      { nights: "3", place: "恩納西海岸", note: "萬座毛／冨著" },
      { nights: "2", place: "那霸市區", note: "縣廳前／國際通" }
    ],
    days: [
      {
        date: "11.03",
        weekday: "星期二",
        title: "抵達那霸，第一晚就住進海邊",
        subtitle: "那霸機場 → 取車 → 北谷夕陽 → 恩納",
        times: [
          ["12:25", "抵達那霸機場，完成入境與領行李"],
          ["14:15", "機場周邊取車，確認 ETC、保險與導航"],
          ["15:30", "北谷美國村海邊散步、咖啡與夕陽"],
          ["18:00", "在北谷用晚餐後，沿西海岸前往恩納"],
          ["20:00", "入住恩納村，開始三晚連住"]
        ],
        tags: ["抵達那霸機場", "海邊夕陽", "恩納連住"],
        stay: "恩納村西海岸｜萬座毛／冨著",
        image: "assets/american-depot.jpg",
        imageAlt: "北谷美國村街道與旅人",
        label: "NAHA AIRPORT TO ONNA"
      },
      {
        date: "11.04",
        weekday: "星期三",
        title: "從恩納北上，與鯨鯊和島嶼相遇",
        subtitle: "美麗海水族館 → 備瀨福木林 → 古宇利島",
        times: [
          ["08:00", "從恩納出發，沿西海岸北上"],
          ["09:30", "美麗海水族館，預留 2.5 至 3 小時"],
          ["12:45", "本部町午餐，品嚐沖繩麵或海葡萄料理"],
          ["14:00", "備瀨福木林道散步或租單車"],
          ["16:00", "古宇利大橋、海灘與心形岩周邊"],
          ["18:30", "返回恩納村"]
        ],
        tags: ["鯨鯊", "福木林", "古宇利島"],
        stay: "恩納村西海岸｜萬座毛／冨著",
        image: "assets/kouri-heart.jpg",
        imageAlt: "古宇利島心形岩與海岸",
        label: "MOTOBU & KOURI"
      },
      {
        date: "11.05",
        weekday: "星期四",
        title: "中部海岸，今天不急著趕路",
        subtitle: "萬座毛 → 琉球村 → 座喜味城 → 殘波岬",
        times: [
          ["09:30", "萬座毛看象鼻岩與東海海景"],
          ["11:00", "琉球村欣賞傳統家屋、工藝與表演"],
          ["13:30", "讀谷午餐與陶器工房散步"],
          ["15:00", "座喜味城跡，走上琉球石砌城牆"],
          ["16:30", "殘波岬看海，傍晚返回恩納飯店"]
        ],
        tags: ["海岸慢旅", "琉球文化", "度假飯店"],
        stay: "恩納村西海岸｜萬座毛／冨著",
        image: "assets/manzamo.jpg",
        imageAlt: "萬座毛海岸斷崖",
        label: "CENTRAL COAST"
      },
      {
        date: "11.06",
        weekday: "星期五",
        title: "穿越南部海岸，移動回那霸",
        subtitle: "退房 → 齋場御嶽 → 知念岬 → 沖繩世界 → 那霸",
        times: [
          ["08:30", "退房後南下，行李留車內但貴重物品隨身"],
          ["10:30", "齋場御嶽，走入琉球王國的重要聖地"],
          ["12:00", "知念岬海景午餐"],
          ["13:30", "沖繩世界、玉泉洞與傳統工藝村"],
          ["17:30", "那霸還車、入住飯店"],
          ["19:00", "國際通夜晚散步與島料理"]
        ],
        tags: ["南部海岸", "世界遺產", "回到那霸"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/naha-night.jpg",
        imageAlt: "那霸國際通夜晚街景",
        label: "SOUTH TO NAHA"
      },
      {
        date: "11.07",
        weekday: "星期六",
        title: "王城與市場，完整留給那霸",
        subtitle: "首里城 → 金城町石疊道 → 壺屋通 → 牧志市場",
        times: [
          ["09:00", "搭單軌前往首里城公園與守禮門"],
          ["11:30", "首里金城町石疊道與附近茶屋"],
          ["14:00", "壺屋通看沖繩陶器與巷弄咖啡"],
          ["16:00", "牧志公設市場、平和通商店街"],
          ["18:30", "國際通最後晚餐與採買"]
        ],
        tags: ["首里歷史", "陶藝街", "市場美食"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/shuri-steps.jpg",
        imageAlt: "旅人走入首里城歷史街區",
        label: "SHURI & NAHA"
      },
      {
        date: "11.08",
        weekday: "星期日",
        title: "從那霸市區，從容前往機場",
        subtitle: "飯店早餐 → 那霸機場 → 13:35 起飛",
        times: [
          ["08:00", "早餐、整理行李與退房"],
          ["10:15", "從那霸市區出發前往那霸機場"],
          ["10:45", "抵達航廈，辦理報到與托運"],
          ["13:35", "由那霸機場起飛"]
        ],
        tags: ["那霸機場起飛", "免趕路", "旅程完成"],
        stay: "溫暖的家",
        image: "assets/naha-monorail.jpg",
        imageAlt: "那霸夕暮中的單軌電車",
        label: "NAHA AIRPORT DEPARTURE"
      }
    ]
  },
  d: {
    title: "方案 D｜石垣・竹富跳島",
    description: "那霸一晚、石垣兩晚，再回那霸兩晚。用本島北部換一段真正的離島旅行。",
    route: [
      { nights: "1", place: "那霸市區", note: "縣廳前／國際通" },
      { nights: "2", place: "石垣市區", note: "離島碼頭／美崎町" },
      { nights: "2", place: "那霸市區", note: "縣廳前／國際通" }
    ],
    days: [
      {
        date: "11.03",
        weekday: "星期二",
        title: "抵達那霸，先住一晚",
        subtitle: "那霸機場 → 飯店寄放 → 首里城或國際通",
        times: [
          ["12:25", "抵達那霸機場，預留入境與領行李時間"],
          ["14:15", "前往那霸市區飯店寄放行李"],
          ["15:30", "若 2026 首里城祭涵蓋 11/3，可依體力前往；否則直接逛國際通"],
          ["18:30", "晚餐後提早休息，整理隔天國內線隨身行李"]
        ],
        tags: ["那霸進出", "抵達日輕行程", "隔日跳島"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/shuri-steps.jpg",
        imageAlt: "首里城歷史街區",
        label: "WELCOME TO NAHA"
      },
      {
        date: "11.04",
        weekday: "星期三",
        title: "飛往石垣，環島看海",
        subtitle: "那霸機場 → 石垣機場 → 川平灣 → 石垣市區",
        times: [
          ["07:00", "從那霸市區前往機場，搭上午國內線飛石垣"],
          ["09:30", "石垣機場取車，確認還車與油種"],
          ["11:00", "川平灣展望與玻璃船，海況不佳則只看景"],
          ["14:00", "米原海岸散步，保留時間慢慢看石垣北部海色"],
          ["18:00", "入住石垣市區，逛 Euglena Mall 與美崎町"]
        ],
        tags: ["國內線", "石垣租車", "川平灣"],
        stay: "石垣市區｜離島碼頭／美崎町",
        image: "assets/ishigaki-kabira.jpg",
        imageAlt: "石垣島川平灣",
        label: "FLY TO ISHIGAKI"
      },
      {
        date: "11.05",
        weekday: "星期四",
        title: "搭船去竹富島",
        subtitle: "石垣港 → 竹富島 → 紅瓦村落 → Kondoi 海灘",
        times: [
          ["08:00", "步行前往石垣港離島碼頭，依海況確認船班"],
          ["09:00", "搭船約 15 分鐘抵達竹富島"],
          ["09:30", "租自行車或搭島內巴士，走紅瓦村落與白沙路"],
          ["12:30", "島上午餐，下午前往 Kondoi 海灘與西棧橋"],
          ["16:30", "搭船返回石垣港，晚餐吃石垣牛或八重山麵"]
        ],
        tags: ["竹富島", "紅瓦聚落", "離島渡輪"],
        stay: "石垣市區｜離島碼頭／美崎町",
        image: "assets/taketomi-village.jpg",
        imageAlt: "竹富島紅瓦聚落與白沙路",
        label: "TAKETOMI ISLAND"
      },
      {
        date: "11.06",
        weekday: "星期五",
        title: "石垣晨光，飛回那霸",
        subtitle: "石垣島南部 → 還車 → 那霸 → 國際通",
        times: [
          ["08:00", "退房後走石垣島南部短線，視班機調整"],
          ["10:30", "還車、加油並前往南方之島石垣機場"],
          ["12:30", "搭國內線返回那霸，班次以訂票結果為準"],
          ["15:00", "那霸市區入住，下午安排壺屋通或購物"],
          ["18:00", "國際通晚餐與散步"]
        ],
        tags: ["石垣回那霸", "班機日", "城市散步"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/ishigaki-airport.jpg",
        imageAlt: "南方之島石垣機場",
        label: "BACK TO NAHA"
      },
      {
        date: "11.07",
        weekday: "星期六",
        title: "魚貨市場與那霸老城",
        subtitle: "泊いゆまち → 波上宮 → 牧志市場 → 國際通",
        times: [
          ["07:30", "前往泊いゆまち，看生鮪魚與當日魚貨"],
          ["09:30", "波上宮與波之上海灘"],
          ["11:30", "第一牧志公設市場、平和通與市場午餐"],
          ["14:30", "壺屋通或首里城二選一"],
          ["18:00", "最後晚餐與伴手禮採買"]
        ],
        tags: ["魚貨市場", "那霸老城", "最後採買"],
        stay: "那霸市區｜縣廳前／國際通",
        image: "assets/market-fish-3.jpg",
        imageAlt: "沖繩魚市場冰台上的鮮魚",
        label: "NAHA FISH MARKET"
      },
      {
        date: "11.08",
        weekday: "星期日",
        title: "從那霸市區，從容前往機場",
        subtitle: "飯店早餐 → 那霸機場 → 13:35 起飛",
        times: [
          ["08:00", "早餐、整理行李與退房"],
          ["10:15", "從那霸市區出發前往那霸機場"],
          ["10:45", "抵達航廈，辦理報到與托運"],
          ["13:35", "由那霸機場起飛"]
        ],
        tags: ["那霸機場起飛", "免趕路", "旅程完成"],
        stay: "溫暖的家",
        image: "assets/naha-monorail.jpg",
        imageAlt: "那霸夕暮中的單軌電車",
        label: "NAHA AIRPORT DEPARTURE"
      }
    ]
  }
};

const dayEnhancements = {
  a: [
    {
      route: ["那霸機場", "飯店寄放", "首里城", "金城町石疊道", "國際通"],
      addOns: ["時間夠再走龍潭池與首里杜館", "若通關較晚就直接改國際通，不硬追首里"],
      food: [
        ["首里そば", "沖繩麵", "人氣店常提早售完，抵達日視時間彈性"],
        ["Jack's Steak House", "美式牛排", "那霸老字號，晚餐候位可先拿號碼牌"]
      ],
      photos: [
        ["assets/naha-airport.jpg", "那霸機場", "12:25 抵達沖繩的第一站", "main"],
        ["assets/shuri-steps.jpg", "首里城", "王城與石階", "main"],
        ["assets/naha-night.jpg", "國際通", "夜晚逛街吃島料理", "main"],
        ["assets/jack-steak.png", "Jack's Steak", "那霸老字號牛排", "food"]
      ],
      drive: "第一天不建議立刻取車；市區停車與首里活動交通較複雜，搭單軌、計程車更輕鬆。"
    },
    {
      route: ["泊いゆまち", "取車", "齋場御嶽", "知念岬", "Gangala 之谷／沖繩世界", "瀨長島"],
      addOns: ["07:30 先逛泊港魚市場，再於 09:00 左右取車", "預約 Gangala 導覽可取代沖繩世界", "雨天改 DMM Kariyushi 水族館"],
      food: [
        ["Cafe Curcuma", "泰式料理＋太平洋海景", "社群常見的南城高台海景餐廳"],
        ["糸滿魚市場", "海鮮、生魚片", "想吃海鮮可在回那霸前繞入"]
      ],
      photos: [
        ["assets/market-fish-2.jpg", "泊いゆまち", "出發前先看生鮪魚與當日魚貨", "main"],
        ["assets/sefa-utaki.jpg", "齋場御嶽", "南城森林裡的琉球聖地", "main"],
        ["assets/chinen-cape.jpg", "知念岬", "面向太平洋的南部海景", "main"],
        ["assets/gyokusendo.jpg", "玉泉洞", "沖繩世界地下鐘乳石景觀", "main"],
        ["assets/umikaji.jpg", "瀨長島", "白色階梯與夕陽", "main"],
        ["assets/gangala.jpg", "Gangala 之谷", "預約導覽可取代沖繩世界", "optional"],
        ["assets/dmm-aquarium.png", "DMM 水族館", "南部雨天替代", "optional"]
      ],
      drive: "南部景點停車相對友善；齋場御嶽需從停車場步行，鞋子別穿得太難走。"
    },
    {
      route: ["退房", "港川外人住宅", "北谷美國村", "座喜味城", "BANTA CAFE", "殘波岬", "萬座毛"],
      addOns: ["港川拍彩色老屋、吃黑糖可麗露", "BANTA CAFE 建議下午保留 60–90 分鐘", "若新一季已開幕，東南植物園燈光秀或喜璃癒志百萬夢幻節二選一"],
      food: [
        ["Seaside Cafe Hanon", "海景厚鬆餅", "北谷早餐或早午餐熱門"],
        ["BANTA CAFE", "海景飲品與輕食", "讀谷海邊座敷是社群熱門畫面"]
      ],
      photos: [
        ["assets/houki-boshi.webp", "港川外人住宅", "彩色小屋與甜點", "main"],
        ["assets/american-village.jpg", "美濱美國村", "彩色街區與海景", "main"],
        ["assets/zakimi-castle.jpg", "座喜味城", "讀谷石牆與拱門", "main"],
        ["assets/banta-table.jpg", "BANTA CAFE", "海邊餐桌與彩色飲品", "food"],
        ["assets/zanpa-lighthouse.jpg", "殘波岬", "白色燈塔與海岸", "main"],
        ["assets/manzamo.jpg", "萬座毛", "入住恩納前的象鼻岩", "main"],
        ["assets/okinawa-illumination.webp", "南國燈光秀", "新一季開幕時可改排夜遊", "optional"],
        ["assets/event-kariyushi.webp", "喜璃癒志燈光", "恩納住宿夜可順路加入", "optional"]
      ],
      drive: "這天是自駕最好玩的西海岸串聯；每站保留彈性，北谷與 BANTA 擇一吃正餐即可。"
    },
    {
      route: ["美麗海水族館", "備瀨福木林", "瀨底島", "百年古家大家", "古宇利大橋", "蝦蝦飯／海膽飯"],
      addOns: ["瀨底島只拍海色可停 30–45 分鐘", "JUNGLIA 是整日替換案，不能再塞水族館", "古宇利心形岩需走沙地與階梯"],
      food: [
        ["KOURI SHRIMP", "蒜香蝦蝦飯", "古宇利島最具代表性的排隊餐車"],
        ["古宇利島 錦屋", "海膽海葡萄海鮮丼", "海膽依漁期與當日進貨，不保證供應"],
        ["百年古家 大家", "阿古豬與沖繩料理", "古宅庭園氣氛強，建議預約"]
      ],
      photos: [
        ["assets/aquarium.jpg", "美麗海水族館", "黑潮之海鯨鯊", "main"],
        ["assets/bise.jpg", "備瀨福木林", "水族館旁的綠色聚落", "main"],
        ["assets/kouri-heart.jpg", "古宇利島", "大橋、海灘與心形岩", "main"],
        ["assets/kouri-shrimp.jpg", "KOURI SHRIMP", "古宇利蝦蝦飯", "food"],
        ["assets/nishikiya.jpg", "古宇利海鮮丼", "海膽與海葡萄看當日供應", "food"],
        ["assets/sesoko.webp", "瀨底島", "時間夠再停透明海色", "optional"],
        ["assets/ufuya.png", "百年古家 大家", "阿古豬與紅瓦古宅", "optional"],
        ["assets/junglia.jpg", "JUNGLIA", "需用整天取代本日北部線", "optional"]
      ],
      drive: "北部熱門點很分散。水族館開門就進、午餐避開 12 點尖峰，古宇利島停車再留緩衝。"
    },
    {
      route: ["飯店晨光", "琉球村", "北谷午餐", "牧志市場", "那霸還車"],
      addOns: ["天氣好可預約真榮田岬青之洞窟", "道之驛嘉手納可短停看基地", "回那霸前可走港川外人住宅"],
      food: [
        ["浜屋そば", "軟骨沖繩麵", "北谷海邊的人氣老店"],
        ["A&W 牧港店", "Root Beer＋漢堡", "復古 Drive-in 很適合自駕停靠"]
      ],
      photos: [
        ["assets/ryukyu-mura.jpg", "琉球村", "傳統表演與紅瓦家屋", "main"],
        ["assets/american-depot.jpg", "北谷街景", "回那霸前的海邊午餐", "main"],
        ["assets/market-makishi.jpg", "牧志公設市場", "當天路線裡的市場晚餐", "main"],
        ["assets/maeda-cape.jpg", "真榮田岬", "天氣好可加青之洞窟", "optional"],
        ["assets/kadena-roadstation.jpg", "道之驛嘉手納", "看基地與短暫休息", "optional"],
        ["assets/houki-boshi.webp", "港川外人住宅", "回那霸前可加入的小店街", "optional"]
      ],
      drive: "這天保留彈性：前幾天沒去到的讀谷、北谷景點可補回來，下午再一路往南還車。"
    },
    {
      route: ["飯店早餐", "ポーたま", "機場伴手禮", "13:35 起飛"],
      addOns: ["最晚 10:15 離開那霸市區", "國內線商店區可買紅芋塔與黑糖"],
      food: [
        ["ポーたま", "豬肉蛋飯糰", "可當早餐，熱門時段要排隊"],
        ["機場沖繩麵", "最後一碗沖繩麵", "報到後依時間決定"]
      ],
      photos: [
        ["assets/potama.png", "ポーたま", "沖繩經典早餐", "food"],
        ["assets/naha-monorail.jpg", "那霸單軌", "市區前往機場", "main"],
        ["assets/naha-airport.jpg", "那霸機場", "13:35 由那霸機場起飛", "main"]
      ],
      drive: "A 方案前一晚已還車，回程最安心；搭單軌不必再處理還車接駁。"
    }
  ],
  b: [
    {
      route: ["那霸機場", "飯店寄放", "首里城", "金城町石疊道", "國際通"],
      addOns: ["首里城祭 2026 日期待公告，有涵蓋 11/3 才安排", "晚餐後可逛屋台村"],
      food: [["首里そば", "沖繩麵", "人氣店常提早售完"], ["Jack's Steak House", "美式牛排", "那霸老字號"]],
      photos: [["assets/naha-airport.jpg", "那霸機場", "12:25 抵達那霸", "main"], ["assets/shuri-steps.jpg", "首里城", "抵達日王城散步", "main"], ["assets/naha-night.jpg", "國際通", "夜市與島料理", "main"], ["assets/jack-steak.png", "Jack's Steak", "老字號牛排", "food"]],
      drive: "抵達日先不取車，避免市區停車與租車櫃台拖慢首里行程。"
    },
    {
      route: ["首里城", "金城町石疊道", "識名園", "壺屋通", "牧志市場", "波上宮"],
      addOns: ["識名園與首里同屬歷史線", "壺屋通可依體力縮短", "波之上海灘適合日落前抵達"],
      food: [["第一牧志公設市場", "現選海鮮料理", "先確認二樓代客料理方式"], ["ポーたま牧志店", "豬肉蛋飯糰", "邊走邊吃很方便"]],
      photos: [["assets/shuri-steps.jpg", "首里歷史區", "石階與紅瓦", "main"], ["assets/shikinaen.jpg", "識名園", "琉球王家的池泉庭園", "main"], ["assets/tsuboya-pottery.jpg", "壺屋通", "陶器與巷弄散步", "main"], ["assets/market-makishi.jpg", "第一牧志公設市場", "鮮魚、肉品與市場午餐", "main"], ["assets/naminoue.jpg", "波上宮", "市區海邊神社", "main"], ["assets/potama.png", "ポーたま", "牧志人氣早餐", "food"]],
      drive: "這天仍用單軌與計程車。隔天退房再取車，省一晚停車費。"
    },
    {
      route: ["取車退房", "齋場御嶽", "知念岬", "Gangala／沖繩世界", "瀨長島", "北谷入住"],
      addOns: ["雨天改 DMM 水族館", "想拍海中道路與濱比嘉島可取消沖繩世界", "瀨長島日落後再往北谷"],
      food: [["Cafe Curcuma", "泰式海景午餐", "南城社群熱門"], ["糸滿魚市場", "海鮮", "回程順路短停即可"]],
      photos: [["assets/sefa-utaki.jpg", "齋場御嶽", "南城琉球聖地", "main"], ["assets/chinen-cape.jpg", "知念岬", "南部太平洋景色", "main"], ["assets/gyokusendo.jpg", "玉泉洞", "沖繩世界鐘乳石洞", "main"], ["assets/umikaji.jpg", "瀨長島", "夕陽飛機景", "main"], ["assets/american-village.jpg", "北谷", "入住後夜景", "main"], ["assets/gangala.jpg", "Gangala 之谷", "預約後取代沖繩世界", "optional"], ["assets/hamahiga.webp", "濱比嘉島", "海中道路版本的東海岸加點", "optional"], ["assets/dmm-aquarium.png", "DMM 水族館", "雨天替代方案", "optional"]],
      drive: "行李留車內時貴重物品務必隨身；南部景點結束後走高速或西海岸北上。"
    },
    {
      route: ["美麗海水族館", "備瀨福木林", "瀨底島", "百年古家大家", "古宇利島", "蝦蝦飯／海膽飯"],
      addOns: ["JUNGLIA 為整日替換案", "瀨底島與心形岩依體力二選一", "古宇利大橋南端展望點可先拍全景"],
      food: [["KOURI SHRIMP", "蒜香蝦蝦飯", "古宇利必吃"], ["古宇利島 錦屋", "海膽海葡萄丼", "依漁期與進貨"], ["百年古家 大家", "阿古豬", "建議預約"]],
      photos: [["assets/aquarium.jpg", "美麗海水族館", "北谷提早出發看鯨鯊", "main"], ["assets/bise.jpg", "備瀨福木林", "水族館旁散步", "main"], ["assets/kouri-heart.jpg", "古宇利島", "大橋與島嶼海色", "main"], ["assets/kouri-shrimp.jpg", "蝦蝦飯", "古宇利人氣餐車", "food"], ["assets/nishikiya.jpg", "海膽海鮮丼", "當日供應", "food"], ["assets/sesoko.webp", "瀨底島", "時間足夠再加", "optional"], ["assets/ufuya.png", "百年古家 大家", "阿古豬古宅料理", "optional"], ["assets/junglia.jpg", "JUNGLIA", "整日替換北部線", "optional"]],
      drive: "北谷出發比恩納多約半小時，建議 07:30 前出發，古宇利回程直接走高速。"
    },
    {
      route: ["萬座毛", "真榮田岬", "琉球村", "座喜味城", "BANTA CAFE", "殘波岬", "美國村"],
      addOns: ["青之洞窟需事先預約", "BANTA 與土花土花擇一", "若新一季已開幕，東南植物園燈光秀或喜璃癒志百萬夢幻節二選一"],
      food: [["BANTA CAFE", "海景輕食", "讀谷熱門打卡"], ["Seaside Cafe Hanon", "海景厚鬆餅", "回北谷下午茶"], ["浜屋そば", "軟骨沖繩麵", "晚餐可吃"]],
      photos: [["assets/manzamo.jpg", "萬座毛", "恩納斷崖", "main"], ["assets/ryukyu-mura.jpg", "琉球村", "傳統聚落與表演", "main"], ["assets/zakimi-castle.jpg", "座喜味城", "讀谷城跡二選一", "optional"], ["assets/banta-table.jpg", "BANTA CAFE", "海景餐桌", "food"], ["assets/dokadoka.jpg", "土花土花", "與 BANTA 二選一的海景咖啡", "optional"], ["assets/zanpa-lighthouse.jpg", "殘波岬", "白色燈塔與夕陽", "main"], ["assets/american-village.jpg", "美國村", "回住宿區看夜景", "main"], ["assets/maeda-cape.jpg", "真榮田岬", "青之洞窟需看海況", "optional"], ["assets/okinawa-illumination.webp", "南國燈光秀", "新一季開幕可夜遊", "optional"], ["assets/event-kariyushi.webp", "喜璃癒志燈光", "北部回程可順看", "optional"], ["assets/hanon-pancake.png", "Hanon", "草莓厚鬆餅", "food"]],
      drive: "這天景點密集但距離短，最適合自由增減；把夕陽留給殘波岬或美國村其中一處。"
    },
    {
      route: ["北谷退房", "A&W 牧港", "還車", "那霸機場", "13:35 起飛"],
      addOns: ["09:15 前離開北谷", "還車、加油、接駁至少抓 60 分鐘"],
      food: [["A&W 牧港店", "漢堡＋Root Beer", "時間夠再停"], ["機場ポーたま", "豬肉蛋飯糰", "排隊長就直接略過"]],
      photos: [["assets/american-depot.jpg", "北谷晨光", "最後一次海邊散步", "main"], ["assets/potama.png", "ポーたま", "機場人氣小吃", "food"], ["assets/naha-airport.jpg", "那霸機場", "還車後辦理返程", "main"]],
      drive: "B 方案回程最需要時間紀律；週日路況、加油與租車接駁都要留緩衝。"
    }
  ],
  c: [
    {
      route: ["那霸機場", "取車", "DMM 水族館／瀨長島", "美國村", "恩納入住"],
      addOns: ["晴天選瀨長島，雨天選 DMM", "美國村只留晚餐與夜景", "首里改排其他日，避免抵達日過滿"],
      food: [["Seaside Cafe Hanon", "厚鬆餅", "下午抵達仍可排"], ["浜屋そば", "軟骨沖繩麵", "北谷晚餐人氣店"]],
      photos: [["assets/naha-airport.jpg", "那霸機場", "取車後直接開始海岸線", "main"], ["assets/american-village.jpg", "美國村", "晚餐與夜景", "main"], ["assets/dmm-aquarium.png", "DMM 水族館", "雨天抵達日方案", "optional"], ["assets/umikaji.jpg", "瀨長島", "晴天抵達日方案", "optional"], ["assets/hanon-pancake.png", "Hanon", "北谷海景厚鬆餅", "food"]],
      drive: "取車後直接走南部或北谷二選一；20:00 前抵達恩納，第一晚維持少點移動。"
    },
    {
      route: ["美麗海水族館", "備瀨福木林", "瀨底島", "百年古家大家", "古宇利大橋", "蝦蝦飯／海膽飯"],
      addOns: ["JUNGLIA 可整日取代本日", "古宇利海洋塔適合帶長輩", "心形岩與瀨底島依體力二選一"],
      food: [["KOURI SHRIMP", "蒜香蝦蝦飯", "古宇利人氣必吃"], ["古宇利島 錦屋", "海膽海葡萄丼", "當日有貨再點"], ["百年古家 大家", "阿古豬", "古宅庭園"]],
      photos: [["assets/aquarium.jpg", "美麗海", "鯨鯊", "main"], ["assets/bise.jpg", "備瀨福木林", "水族館旁綠色聚落", "main"], ["assets/kouri-heart.jpg", "古宇利島", "大橋、海灘與心形岩", "main"], ["assets/kouri-shrimp.jpg", "蝦蝦飯", "蒜香蝦與飯", "food"], ["assets/nishikiya.jpg", "海膽海葡萄丼", "漁期限定感", "food"], ["assets/sesoko.webp", "瀨底島", "體力足夠再加", "optional"], ["assets/ufuya.png", "百年古家 大家", "阿古豬與古宅庭園", "optional"], ["assets/junglia.jpg", "JUNGLIA", "整日取代北部線", "optional"]],
      drive: "住恩納可最早抵達北部景點；這是三個本島方案中北部日最舒服的安排。"
    },
    {
      route: ["萬座毛", "真榮田岬", "琉球村", "座喜味城", "土花土花", "BANTA CAFE", "殘波岬"],
      addOns: ["青之洞窟浮潛需預約並看海況", "咖啡店二選一即可", "若新一季已開幕，傍晚選東南植物園燈光秀或喜璃癒志百萬夢幻節"],
      food: [["土花土花", "披薩與海景甜點", "陶器系海景咖啡"], ["BANTA CAFE", "海景輕食", "下午到夕陽最有氣氛"]],
      photos: [["assets/manzamo.jpg", "萬座毛", "恩納經典海岸", "main"], ["assets/ryukyu-mura.jpg", "琉球村", "紅瓦聚落與表演", "main"], ["assets/zakimi-castle.jpg", "座喜味城", "琉球石牆與拱門", "main"], ["assets/zanpa-lighthouse.jpg", "殘波岬", "讀谷白色燈塔", "main"], ["assets/dokadoka.jpg", "土花土花", "恩納海景露台", "food"], ["assets/banta-cafe.jpg", "BANTA CAFE", "海邊飲品", "food"], ["assets/maeda-cape.jpg", "真榮田岬", "青之洞窟需預約看海況", "optional"], ["assets/okinawa-illumination.webp", "南國燈光秀", "傍晚可替換夕陽站", "optional"], ["assets/event-kariyushi.webp", "喜璃癒志燈光", "恩納住宿夜可加入", "optional"]],
      drive: "今天幾乎都在恩納與讀谷周邊，里程短，適合安排浮潛或在飯店多休息。"
    },
    {
      route: ["恩納退房", "海中道路／濱比嘉島", "齋場御嶽", "知念岬", "Gangala／沖繩世界", "瀨長島", "那霸"],
      addOns: ["東海岸版本車程較長，08:00 前出發", "不走海中道路就加 Cafe Curcuma", "雨天改 DMM Kariyushi 水族館"],
      food: [["King Tacos", "塔可飯", "走海中道路可順吃"], ["Cafe Curcuma", "泰式海景午餐", "不走東海岸版本"]],
      photos: [["assets/hamahiga.webp", "濱比嘉島", "東海岸安靜島嶼", "main"], ["assets/sefa-utaki.jpg", "齋場御嶽", "南城琉球聖地", "main"], ["assets/chinen-cape.jpg", "知念岬", "面向太平洋的海景", "main"], ["assets/gyokusendo.jpg", "玉泉洞", "沖繩世界鐘乳石洞", "main"], ["assets/umikaji.jpg", "瀨長島", "回那霸前夕陽", "main"], ["assets/gangala.jpg", "Gangala 之谷", "預約後取代沖繩世界", "optional"], ["assets/dmm-aquarium.png", "DMM 水族館", "雨天改走豐崎線", "optional"]],
      drive: "這是 C 方案最有公路旅行感的一天；若不想開太久，直接走南城線即可。"
    },
    {
      route: ["首里城", "金城町石疊道", "識名園", "壺屋通", "牧志市場", "波上宮", "國際通"],
      addOns: ["喜歡咖啡可排浮島通", "市場停留太久就縮短識名園", "最後採買集中在平和通與國際通"],
      food: [["牧志公設市場", "海鮮與島料理", "午餐主場"], ["Jack's Steak House", "美式牛排", "最後晚餐"], ["ポーたま", "豬肉蛋飯糰", "早餐或點心"]],
      photos: [["assets/shuri-steps.jpg", "首里城", "王城歷史", "main"], ["assets/shikinaen.jpg", "識名園", "琉球王家庭園", "main"], ["assets/tsuboya-pottery.jpg", "壺屋通", "陶器巷弄", "main"], ["assets/market-makishi.jpg", "牧志公設市場", "當天主線的鮮魚與市場午餐", "main"], ["assets/naminoue.jpg", "波上宮", "海邊神社", "main"], ["assets/naha-night.jpg", "國際通", "最後採買與晚餐", "main"], ["assets/jack-steak.png", "Jack's Steak", "最後晚餐", "food"]],
      drive: "這天已無需租車；用單軌＋計程車，省停車時間，也能放心在市場喝一杯。"
    },
    {
      route: ["飯店早餐", "ポーたま", "那霸機場", "13:35 起飛"],
      addOns: ["10:15 離開市區", "機場商店留 60–90 分鐘"],
      food: [["ポーたま", "豬肉蛋飯糰", "方便當早餐"], ["機場沖繩麵", "最後一餐", "看報到時間決定"]],
      photos: [["assets/potama.png", "ポーたま", "沖繩早餐", "food"], ["assets/naha-monorail.jpg", "那霸單軌", "前往機場", "main"], ["assets/naha-airport.jpg", "那霸機場", "13:35 起飛", "main"]],
      drive: "C 方案已在前兩天還車，最後一天和 A 一樣從容。"
    }
  ],
  d: [
    {
      route: ["那霸機場", "市區飯店", "首里城／國際通", "晚餐", "提早休息"],
      addOns: ["首里城祭 2026 日期待公告，有涵蓋 11/3 再看通關時間與體力", "隔天國內線只帶兩晚需要的行李更輕鬆"],
      food: [["Jack's Steak House", "那霸牛排", "抵達日晚餐備選"], ["暖暮拉麵", "拉麵", "國際通晚餐備選"]],
      photos: [["assets/naha-airport.jpg", "那霸機場", "第一晚先住那霸", "main"], ["assets/shuri-steps.jpg", "首里城", "抵達日歷史散步", "main"], ["assets/naha-night.jpg", "國際通", "夜晚逛街", "main"], ["assets/jack-steak.png", "Jack's Steak", "那霸老字號", "food"]],
      drive: "第一天不租車。隔天飛石垣，建議預留國內線報到時間並把大件行李寄放那霸飯店。"
    },
    {
      route: ["那霸機場", "石垣機場取車", "川平灣", "米原海岸", "石垣市區"],
      addOns: ["川平灣玻璃船依海況決定", "米原海岸只散步看海，不在無救生員處冒險下水", "宮古島只能整套替換 D，不與石垣同趟混搭"],
      food: [["八重山そば", "八重山麵", "石垣在地麵食"], ["石垣牛燒肉", "和牛", "熱門店建議預約"]],
      photos: [["assets/ishigaki-airport.jpg", "石垣機場", "上午國內線抵達八重山", "main"], ["assets/ishigaki-kabira.jpg", "川平灣", "石垣島代表性的藍色海灣", "main"], ["assets/ishigaki-yonehara.jpg", "米原海岸", "川平灣後的北部海岸加點", "main"], ["assets/miyako-island.webp", "宮古島", "只能整套替換 D，不和石垣混排", "optional"]],
      drive: "石垣機場取車後先走北線，晚上住離島碼頭附近，隔天搭船可直接步行。"
    },
    {
      route: ["石垣港", "竹富港", "紅瓦村落", "Kondoi 海灘", "西棧橋", "石垣港"],
      addOns: ["船班可能因風浪調整", "島上可租自行車，但長輩同行可搭巴士", "不加西表島，保留竹富的從容"],
      food: [["竹富島島料理", "沖繩家常菜", "先確認當日營業"], ["石垣牛", "晚餐", "回石垣市區後享用"]],
      photos: [["assets/taketomi-village.jpg", "竹富島村落", "紅瓦家屋與白沙路", "main"], ["assets/taketomi-kondoi.jpg", "Kondoi 海灘", "竹富島西岸的白沙與海色", "main"], ["assets/taketomi-west-pier.jpg", "西棧橋", "午後走到海上的老棧橋", "main"]],
      drive: "今天不開車。車可留飯店或租車公司，主要靠步行、船、自行車與島內巴士。"
    },
    {
      route: ["石垣市區", "南部短線", "石垣機場還車", "那霸機場", "那霸入住"],
      addOns: ["回那霸班機建議避開太晚時段，避免天候延誤壓縮後段", "下午班機順利可排壺屋通，不再跑遠程景點"],
      food: [["石垣機場餐廳", "簡單午餐", "依班機時間"], ["第一牧志公設市場周邊", "那霸晚餐", "回本島後再吃"]],
      photos: [["assets/ishigaki-airport.jpg", "石垣機場", "還車後搭國內線", "main"], ["assets/naha-airport.jpg", "那霸機場", "回到本島後入住那霸", "main"], ["assets/tsuboya-pottery.jpg", "壺屋通", "下午班機順利時可散步", "optional"], ["assets/naha-night.jpg", "國際通", "回本島後的晚餐與逛街", "main"], ["assets/potama.png", "ポーたま", "移動日簡單吃", "food"]],
      drive: "石垣還車後搭國內線回那霸；那霸後兩天不租車，避免停車與跨島租車銜接複雜。"
    },
    {
      route: ["泊いゆまち", "波上宮", "第一牧志公設市場", "壺屋通／首里城", "國際通"],
      addOns: ["泊港 07:30–10:00 魚貨最齊", "牧志市場可看鮮魚、肉品與乾貨", "若 2026 座間味粉絲感謝月撞期，只能用整日跳島取代本日，不能當加點"],
      food: [["泊いゆまち", "生鮪魚與魚貨", "上午到，熱門品項售完即收"], ["第一牧志公設市場", "市場料理", "一樓採買、二樓用餐"]],
      photos: [["assets/market-fish-2.jpg", "泊いゆまち", "鮮魚市場通道", "main"], ["assets/market-fish-3.jpg", "泊港魚貨", "彩色近海魚與鮪魚", "main"], ["assets/market-fish-4.jpg", "魚貝冰台", "當日漁獲", "main"], ["assets/naminoue.jpg", "波上宮", "市場後的海邊神社", "main"], ["assets/market-makishi.jpg", "第一牧志公設市場", "下午繼續看市場食材", "main"], ["assets/tsuboya-pottery.jpg", "壺屋通", "兩個市場後可順路散步", "optional"], ["assets/shuri-steps.jpg", "首里城", "若縮短市場時間可二選一", "optional"], ["assets/event-zamami.webp", "座間味島", "粉絲感謝月撞期時只能整日替換", "optional"]],
      drive: "泊港建議早上搭計程車；牧志市場位於步行商圈。這天不需要租車。"
    },
    {
      route: ["飯店早餐", "ポーたま", "那霸機場", "13:35 起飛"],
      addOns: ["10:15 離開市區", "機場商店留 60–90 分鐘"],
      food: [["ポーたま", "豬肉蛋飯糰", "方便當早餐"], ["機場沖繩麵", "最後一餐", "看報到時間決定"]],
      photos: [["assets/potama.png", "ポーたま", "沖繩早餐", "food"], ["assets/naha-monorail.jpg", "那霸單軌", "前往機場", "main"], ["assets/naha-airport.jpg", "那霸機場", "由那霸返程", "main"]],
      drive: "最後兩晚住那霸，回程和 A、C 一樣從容，不需要處理租車接駁。"
    }
  ]
};

if (window.extendedTripData) {
  Object.entries(window.extendedTripData.plans).forEach(([key, plan]) => {
    plans[key] = plan;
  });
  Object.entries(window.extendedTripData.enhancements).forEach(([key, enhancements]) => {
    dayEnhancements[key] = enhancements;
  });
}

const mapCatalogs = {
  spot: [
    { name: "JUNGLIA 叢林樂園", region: "north", coords: [26.654, 127.953], note: "整日主題樂園" },
    { name: "美麗海水族館", region: "north", coords: [26.6943, 127.8779], note: "黑潮之海與鯨鯊" },
    { name: "古宇利海洋塔", region: "north", coords: [26.7026, 128.0168], note: "古宇利大橋海景" },
    { name: "部瀨名海中公園", region: "north", coords: [26.5393, 127.9402], note: "海中展望塔與玻璃船" },
    { name: "名護鳳梨園", region: "north", coords: [26.6164, 127.9692], note: "親子與雨天備案" },
    { name: "萬座毛", region: "central", coords: [26.5048, 127.8503], note: "恩納海岸經典斷崖" },
    { name: "美國村", region: "central", coords: [26.3157, 127.757], note: "11/6 下午逛街、咖啡與海邊散步" },
    { name: "永旺夢樂城沖繩來客夢", region: "central", coords: [26.3146, 127.7967], note: "11/3 抵達日唯一購物站" },
    { name: "港川外人住宅", region: "central", coords: [26.253, 127.714], note: "11/6 南下那霸途中短停" },
    { name: "沖繩南國 Illumination", region: "central", coords: [26.423, 127.805], note: "東南植物樂園夜間燈光秀" },
    { name: "沖繩水果樂園", region: "north", coords: [26.6169, 127.9698], note: "熱帶水果與互動體驗" },
    { name: "沖繩兒童王國", region: "central", coords: [26.3344, 127.8057], note: "動物園與親子設施" },
    { name: "殘波岬燈塔", region: "central", coords: [26.4415, 127.7139], note: "白色燈塔與西海岸日落" },
    { name: "沖繩世界／玉泉洞", region: "south", coords: [26.1412, 127.7496], note: "鐘乳石洞與琉球文化" },
    { name: "DMM かりゆし水族館／iias 沖繩豐崎", region: "south", coords: [26.1577, 127.6467], note: "已移出主線，只作大雨替代" },
    { name: "首里城", region: "south", coords: [26.217, 127.7195], note: "琉球王國歷史地標" },
    { name: "國際通", region: "south", coords: [26.2147, 127.6847], note: "那霸逛街與晚餐主場" },
    { name: "瀨長島海風露台", region: "south", coords: [26.1747, 127.6466], note: "夕陽、白色階梯與飛機" },
    { name: "波上宮", region: "south", coords: [26.2202, 127.6716], note: "那霸海邊神社" }
  ],
  food: [
    { name: "暖暮拉麵 那霸牧志店", region: "south", coords: [26.218, 127.689], note: "11/6 22:15 後自選宵夜，平日營業到 02:00" },
    { name: "KOURI SHRIMP", region: "north", coords: [26.7015, 128.0179], note: "古宇利蝦蝦飯" },
    { name: "琉球的牛 北谷店", region: "central", coords: [26.3194, 127.7575], note: "若要北谷店，用它替換 11/3 Taco Rice" },
    { name: "百年古家 大家", region: "north", coords: [26.634, 127.982], note: "紅瓦古宅阿古豬" },
    { name: "Jack's Steak House", region: "south", coords: [26.2124, 127.6693], note: "那霸老字號牛排" },
    { name: "國際通島料理", region: "south", coords: [26.2152, 127.6849], note: "11/6 市場後彈性選餐廳" },
    { name: "沖縄そば ちむどんどん", region: "north", coords: [26.677, 127.903], note: "11/4 園區外阿古豬沖繩麵午餐" },
    { name: "Ryuya Honten 琉家", region: "south", coords: [26.214, 127.684], note: "國際通巷內拉麵" },
    { name: "Flipper 潛水員牛排", region: "north", coords: [26.5948, 127.9596], note: "名護海邊老店" },
    { name: "The Sinmay", region: "north", coords: [26.678256, 127.971184], note: "11/5 古宇利回名護途中生黑糖拿鐵" },
    { name: "一蘭拉麵 國際通店", region: "south", coords: [26.2148, 127.6848], note: "24 小時日本連鎖" },
    { name: "浜の家海鮮料理", region: "central", coords: [26.437, 127.801], note: "魚バター焼與海膽料理" },
    { name: "牛排屋 88 美麗海店", region: "north", coords: [26.688, 127.878], note: "水族館附近多人用餐" },
    { name: "JUMBO STEAK HAN'S 美濱店", region: "central", coords: [26.315, 127.757], note: "北谷份量型牛排" },
    { name: "幸福鬆餅 瀨長島店", region: "south", coords: [26.1744, 127.6469], note: "海景厚鬆餅" },
    { name: "焼肉きんぐ 那覇久茂地店", region: "south", coords: [26.2186, 127.6811], note: "國際通晚餐可改久茂燒肉" },
    { name: "Hoppepan ほっぺパン", region: "south", coords: [26.237226, 127.704748], note: "11/6 港川後順路買隔天早餐" },
    { name: "Taco Rice Cafe Kijimuna", region: "central", coords: [26.316, 127.7568], note: "11/3 美國村晚餐" },
    { name: "琉球的牛 那霸店", region: "south", coords: [26.215, 127.684], note: "11/7 那霸晚餐主線" },
    { name: "福助玉子燒", region: "south", coords: [26.2146, 127.6879], note: "11/7 牧志市場早餐點心；11/4 備瀨店也可買" }
  ]
};

const regionNames = {
  north: "北部",
  central: "中部",
  south: "那霸／南部"
};

const catalogMaps = {};

function createMapPin(region, type, index) {
  const label = type === "food" ? "食" : String(index + 1);
  return L.divIcon({
    className: "catalog-div-icon",
    html: `<div class="map-pin ${region} ${type === "food" ? "food-pin" : ""}"><span>${label}</span></div>`,
    iconSize: [32, 38],
    iconAnchor: [16, 38],
    popupAnchor: [0, -34]
  });
}

function initCatalogMap(type, elementId) {
  const mapElement = document.getElementById(elementId);
  if (!mapElement || typeof L === "undefined") return;

  const map = L.map(mapElement, {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView([26.39, 127.86], 9);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const markers = mapCatalogs[type].map((item, index) => {
    const mapQuery = encodeURIComponent(`${item.name} 沖繩`);
    const popup = `
      <div class="map-popup">
        <small>${regionNames[item.region]}</small>
        <b>${item.name}</b>
        <span>${item.note}</span>
        <a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noreferrer">開啟 Google 地圖 ↗</a>
      </div>
    `;
    const marker = L.marker(item.coords, {
      icon: createMapPin(item.region, type, index),
      title: item.name
    }).bindPopup(popup).addTo(map);
    return { ...item, marker };
  });

  catalogMaps[type] = { map, markers };
  map.fitBounds(L.latLngBounds(markers.map(item => item.coords)).pad(0.12));
  window.setTimeout(() => map.invalidateSize(), 100);
}

function applyCatalogFilter(type, region) {
  const cardSelector = type === "spot" ? ".spot-grid .catalog-card" : ".food-map-grid .food-map-card";
  const cards = document.querySelectorAll(cardSelector);
  const items = mapCatalogs[type];

  cards.forEach((card, index) => {
    const item = items[index];
    card.classList.toggle("is-filtered", region !== "all" && item?.region !== region);
  });

  const mapState = catalogMaps[type];
  if (!mapState) return;

  const visibleMarkers = [];
  mapState.markers.forEach(item => {
    const isVisible = region === "all" || item.region === region;
    if (isVisible) {
      item.marker.addTo(mapState.map);
      visibleMarkers.push(item);
    } else {
      mapState.map.removeLayer(item.marker);
    }
  });

  if (visibleMarkers.length) {
    mapState.map.fitBounds(
      L.latLngBounds(visibleMarkers.map(item => item.coords)).pad(0.18),
      { maxZoom: 11 }
    );
  }
}

function initCatalogFilters() {
  document.querySelectorAll(".catalog-filter[data-catalog]").forEach(filterGroup => {
    const type = filterGroup.dataset.catalog;
    const buttons = filterGroup.querySelectorAll("[data-filter]");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        buttons.forEach(item => item.classList.toggle("is-active", item === button));
        applyCatalogFilter(type, button.dataset.filter);
      });
    });
  });
}

const dayList = document.querySelector("#dayList");
const routeMap = document.querySelector("#routeMap");
const routeTitle = document.querySelector("#routeTitle");
const routeDescription = document.querySelector("#routeDescription");
const planButtons = document.querySelectorAll("[data-plan]");
const header = document.querySelector(".site-header");
const menuButton = document.querySelector("#menuButton");
const quickMenuButton = document.querySelector("#quickMenuButton");
const closeMenuButton = document.querySelector("#closeMenuButton");
const mobileNav = document.querySelector("#mobileNav");
const mobileNavBackdrop = document.querySelector("#mobileNavBackdrop");
const printDialog = document.querySelector("#printDialog");
const printSheet = document.querySelector("#printSheet");
const openPrintButtons = document.querySelectorAll("#openPrintDialog, #mobilePrintButton");

let currentPlan = "f";

function renderRoute(plan) {
  routeTitle.textContent = plan.title;
  routeDescription.textContent = plan.description;
  routeMap.innerHTML = plan.route.map(stop => `
    <div class="route-stop">
      <div class="route-dot">${stop.nights}</div>
      <b>${stop.place}</b>
      <small>${stop.note}</small>
    </div>
  `).join("");
}

function renderJourneyFlow(flow, printMode = false) {
  const movementLabels = {
    drive: "開車",
    walk: "步行",
    shuttle: "接駁"
  };
  const prefix = printMode ? "print-" : "";

  return `
    <section class="${prefix}journey-flow" aria-label="逐段行程與車程">
      ${printMode ? "" : `
        <div class="journey-flow-head">
          <b>逐段行程</b>
          <small>時間依一般路況估算，車程已放在前後景點之間</small>
        </div>
      `}
      <div class="${prefix}journey-flow-list">
        ${flow.map(item => {
          if (item[0] === "activity" || item[0] === "night") {
            const isNight = item[0] === "night";
            const ticketLabel = item[4]
              ? `<span class="${prefix}journey-ticket ${item[4].includes("使用") ? "is-pass" : "is-price"}">${item[4]}</span>`
              : "";
            const shopNote = item[5]
              ? `<span class="${prefix}journey-shop-note">${item[5]}</span>`
              : "";
            return `
              <article class="${prefix}journey-stop ${isNight ? `${prefix}journey-stop-night` : ""}">
                <time>${item[1]}</time>
                <div><b>${item[2]}</b>${ticketLabel}${shopNote}<small>${item[3] || ""}</small></div>
              </article>
            `;
          }
          return `
            <div class="${prefix}journey-move ${prefix}journey-move-${item[0]}">
              <span>${movementLabels[item[0]] || "移動"}</span>
              <strong>${item[1]}</strong>
              <small>${item[2]}</small>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderDays(plan) {
  const enhancements = dayEnhancements[currentPlan];
  dayList.innerHTML = plan.days.map((day, index) => {
    const extra = enhancements[index];
    const photos = extra?.photos || [[day.image, day.label, day.imageAlt]];
    const photoStatus = {
      main: ["主線", "is-main"],
      optional: ["可加", "is-optional"],
      food: ["必吃", "is-food"]
    };
    const photoGroups = [
      ["當日主線", "main", photos.filter(photo => (photo[3] || "main") === "main")],
      ["必吃料理", "food", photos.filter(photo => photo[3] === "food")],
      ["順路加點／替代方案", "optional", photos.filter(photo => photo[3] === "optional")]
    ].filter(group => group[2].length);
    return `
    <article class="day-card">
      <div class="day-number">
        <small>DAY</small>
        <strong>${String(index + 1).padStart(2, "0")}</strong>
        <span>${day.date}<br>${day.weekday}</span>
      </div>
      <div class="day-content">
        <h3>${day.title}</h3>
        <p class="day-subtitle">${day.subtitle}</p>
        ${renderJourneyFlow(extra.flow.length ? extra.flow : day.times.map(item => ["activity", item[0], item[1], ""]))}
        <div class="day-options">
          <div class="add-on-box">
            <small>自駕順路加點</small>
            ${extra.addOns.map(item => `<span>${item}</span>`).join("")}
          </div>
          <div class="food-box">
            <small>人氣餐廳與必吃</small>
            ${extra.food.map(item => `<span><b>${item[0]}</b><em>${item[1]}</em>${item[2]}</span>`).join("")}
          </div>
        </div>
        <div class="day-tags">
          ${day.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <p class="drive-note"><b>租車提醒｜</b>${extra.drive}</p>
        <p class="stay-night">今晚住宿｜<b>${day.stay}</b></p>
      </div>
      <div class="day-gallery-head">
        <span>當日對應照片</span>
        <div class="day-gallery-legend"><i>主線</i><i class="legend-food">必吃</i><i class="legend-option">可加</i></div>
      </div>
      <div class="day-photo-groups">
        ${photoGroups.map(group => `
          <section class="day-photo-group day-photo-group-${group[1]}">
            <h4>${group[0]}</h4>
            <div class="day-gallery">
              ${group[2].map(photo => {
                const status = photoStatus[photo[3] || "main"];
                return `
                <figure>
                  <img src="${photo[0]}" alt="${photo[2]}" loading="lazy">
                  <span class="photo-status ${status[1]}">${status[0]}</span>
                  <figcaption><b>${photo[1]}</b><span>${photo[2]}</span></figcaption>
                </figure>
              `}).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </article>
  `;
  }).join("");
}

function selectPlan(planKey, shouldScroll = false) {
  currentPlan = planKey;
  const plan = plans[planKey];
  renderRoute(plan);
  renderDays(plan);

  planButtons.forEach(button => {
    button.classList.toggle("is-active", button.dataset.plan === planKey);
  });
  updateMobileMatrix(planKey);

  if (shouldScroll) {
    document.querySelector("#itinerary").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

planButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectPlan(button.dataset.plan, button.classList.contains("select-plan"));
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 70);
}, { passive: true });

function setMobileMenu(isOpen) {
  document.body.classList.toggle("menu-open", isOpen);
  mobileNav.classList.toggle("is-open", isOpen);
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
  menuButton.setAttribute("aria-expanded", String(isOpen));
  mobileNavBackdrop.hidden = !isOpen;
}

[menuButton, quickMenuButton].forEach(button => {
  button?.addEventListener("click", () => setMobileMenu(true));
});

closeMenuButton?.addEventListener("click", () => setMobileMenu(false));
mobileNavBackdrop?.addEventListener("click", () => setMobileMenu(false));
mobileNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => setMobileMenu(false));
});

function setPrintDialog(isOpen) {
  if (isOpen) setMobileMenu(false);
  printDialog.hidden = !isOpen;
  document.body.classList.toggle("menu-open", isOpen);
  if (isOpen) {
    window.setTimeout(() => printDialog.querySelector("[data-print-plan]")?.focus(), 0);
  }
}

openPrintButtons.forEach(button => {
  button.addEventListener("click", () => {
    setPrintDialog(true);
  });
});

printDialog.querySelectorAll("[data-close-print]").forEach(button => {
  button.addEventListener("click", () => setPrintDialog(false));
});

function renderPrintSheet(planKey) {
  const plan = plans[planKey];
  const enhancements = dayEnhancements[planKey];
  printSheet.innerHTML = `
    <header class="print-sheet-header">
      <div class="print-brand">
        <img src="assets/chang-avatar.jpg" alt="張家旅行社大頭貼">
        <div>
          <p>張家旅行社 · CHANG FAMILY TRAVEL</p>
          <h1>${plan.title}</h1>
          <span>${plan.description}</span>
        </div>
      </div>
      <div class="print-flight">
        <b>MM922 · A320</b><small>11/03 09:45 桃園 → 12:25 那霸</small>
        <b>MM925 · A320</b><small>11/08 13:35 那霸 → 14:20 桃園</small>
      </div>
    </header>
    <section class="print-route">
      ${plan.route.map(stop => `<div><b>${stop.nights} 晚</b><span>${stop.place}</span><small>${stop.note}</small></div>`).join("")}
    </section>
    <main class="print-days">
      ${plan.days.map((day, index) => `
        <article>
          <div class="print-day-no"><small>DAY</small><b>${String(index + 1).padStart(2, "0")}</b><span>${day.date}</span></div>
          <div class="print-day-body">
            <h2>${day.title}</h2>
            <p class="print-day-route">${enhancements[index].route.join(" → ")}</p>
            ${renderJourneyFlow(
              enhancements[index].flow.length
                ? enhancements[index].flow
                : day.times.map(item => ["activity", item[0], item[1], ""]),
              true
            )}
            <p class="print-stay">住宿｜${day.stay}</p>
            <div class="print-day-photos">
              ${[
                ...enhancements[index].photos.filter(photo => (photo[3] || "main") === "main").slice(0, 3),
                ...enhancements[index].photos.filter(photo => photo[3] === "food").slice(0, 1),
                ...enhancements[index].photos.filter(photo => photo[3] === "optional").slice(0, 1)
              ].slice(0, 5).map(photo => `
                <figure>
                  <img src="${photo[0]}" alt="${photo[2]}">
                  <figcaption>${photo[1]}</figcaption>
                </figure>
              `).join("")}
            </div>
            <div class="print-flex-grid">
              <section>
                <b>順路加點／替代方案</b>
                <ul>
                  ${enhancements[index].addOns.map(item => `<li>${item}</li>`).join("")}
                </ul>
              </section>
              <section>
                <b>人氣餐廳／必吃</b>
                <ul>
                  ${enhancements[index].food.map(item => `<li><strong>${item[0]}</strong>｜${item[1]}：${item[2]}</li>`).join("")}
                </ul>
              </section>
            </div>
          </div>
        </article>
      `).join("")}
    </main>
    <footer class="print-sheet-footer">張家旅行社 · MM922 / MM925 · 行程與營業時間請於出發前再次確認</footer>
  `;
}

function matrixCellHtml(cell) {
  const [status, note] = cell;
  const symbol = status === "main" ? "✓" : status === "option" ? "◇" : "—";
  return `<td class="is-${status}">${symbol}<small>${note}</small></td>`;
}

function renderPlanMatrix() {
  const matrix = window.extendedTripData?.matrix;
  const container = document.querySelector(".matrix-scroll");
  if (!matrix || !container) return;
  const regionIds = ["matrix-north", "matrix-central", "matrix-south"];

  container.innerHTML = `
    <table class="comparison-table single-plan-table">
      <thead><tr><th scope="col">區域・景點／市場／美食</th><th scope="col">這次安排</th></tr></thead>
      <tbody>
        ${matrix.map((group, groupIndex) => `
          <tr class="matrix-region" id="${regionIds[groupIndex] || `matrix-region-${groupIndex}`}"><th colspan="2">${group.region}</th></tr>
          ${group.rows.map(row => `
            <tr>
              <th scope="row"><span class="matrix-kind is-${row[0] === "美食" ? "food" : row[0] === "市場" ? "market" : row[0] === "購物" ? "shopping" : "spot"}">${row[0]}</span>${row[1]}</th>
              ${matrixCellHtml(row[2])}
            </tr>
          `).join("")}
        `).join("")}
      </tbody>
    </table>
  `;

  let mobile = document.querySelector(".mobile-matrix");
  if (!mobile) {
    mobile = document.createElement("div");
    mobile.className = "mobile-matrix";
    container.insertAdjacentElement("afterend", mobile);
  }
  mobile.innerHTML = `
    <div class="mobile-matrix-summary">前三晚住本部美麗海、後兩晚住 ALPHABED INN 那覇国際通りEAST；✓ 是固定主線，◇ 是可替換選項。</div>
    <div class="mobile-matrix-list"></div>
  `;
  updateMobileMatrix();
}

function updateMobileMatrix() {
  const mobile = document.querySelector(".mobile-matrix");
  const matrix = window.extendedTripData?.matrix;
  if (!mobile || !matrix) return;
  mobile.querySelector(".mobile-matrix-list").innerHTML = matrix.map(group => `
    <section>
      <h3>${group.region}</h3>
      ${group.rows.map(row => {
        const cell = row[2];
        const symbol = cell[0] === "main" ? "✓" : cell[0] === "option" ? "◇" : "—";
        return `<article class="mobile-matrix-row is-${cell[0]}"><div><span>${row[0]}</span><b>${row[1]}</b></div><strong>${symbol}</strong><small>${cell[1]}</small></article>`;
      }).join("")}
    </section>
  `).join("");
}

printDialog.querySelectorAll("[data-print-plan]").forEach(button => {
  button.addEventListener("click", () => {
    renderPrintSheet(button.dataset.printPlan);
    setPrintDialog(false);
    window.setTimeout(() => window.print(), 60);
  });
});

window.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  setMobileMenu(false);
  setPrintDialog(false);
});

renderPlanMatrix();
selectPlan(currentPlan);
initCatalogMap("spot", "spotLeafletMap");
initCatalogMap("food", "foodLeafletMap");
initCatalogFilters();
