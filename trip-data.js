(() => {
  const dates = [
    ["11.03", "星期二"], ["11.04", "星期三"], ["11.05", "星期四"],
    ["11.06", "星期五"], ["11.07", "星期六"], ["11.08", "星期日"]
  ];

  const templates = {
    arrivalFestival: {
      title: "抵達那霸，衝首里城復興祭最後一天",
      subtitle: "MM922 抵達 → 飯店寄放 → 首里城復興祭 → 國際通",
      times: [
        ["12:25", "MM922 抵達那霸，預留入境、領行李與進市區時間"],
        ["14:30", "先到那霸市區飯店寄放行李，不在抵達日取車"],
        ["15:15", "前往首里城公園；2026 復興祭確定 11/1–11/3，當日時刻待公告"],
        ["18:30", "國際通晚餐；若錯過祭典就改走首里城、金城町與市場夜食"]
      ],
      tags: ["11/3 最後一天", "不取車", "那霸進出"],
      route: ["那霸市區飯店", "首里城復興祭", "金城町石疊道", "國際通"],
      addOns: ["祭典詳細時刻未公布，通關太晚就改國際通", "首里城正殿預計 11/23 才公開，這趟以城郭與復興展示為主"],
      food: [["首里そば", "沖繩麵", "時間趕不上就留到那霸日"], ["Jack's Steak House", "牛排", "抵達日晚餐備選"]],
      photos: [
        ["assets/event-shuri.webp", "首里城復興祭", "2026/11/3 是祭典最後一天", "main"],
        ["assets/shuri-steps.jpg", "首里歷史區", "祭典後順走石階與城郭", "main"],
        ["assets/naha-night.jpg", "國際通", "晚餐與第一晚散步", "main"],
        ["assets/shuri-soba.jpg", "首里そば", "抵達日想吃的第一碗沖繩麵", "food"],
        ["assets/jack-steak-food.jpg", "Jack's Steak", "實際牛排套餐，不再放店家 Logo", "food"]
      ],
      drive: "抵達日不取車。A、B、D 保留祭典可能；C 直接北上恩納，明確放棄這場活動。"
    },
    arrivalOnna: {
      title: "抵達後直接北上，第一晚住恩納",
      subtitle: "MM922 抵達 → 取車 → 美國村晚餐 → 恩納入住",
      times: [
        ["12:25", "MM922 抵達那霸，入境與領行李"],
        ["14:30", "機場周邊取車，確認 ETC、保險與導航"],
        ["16:00", "北谷美國村海邊散步與早晚餐"],
        ["19:00", "沿西海岸前往恩納，入住後休息"]
      ],
      tags: ["直接北上", "只換一次", "錯過祭典"],
      route: ["機場取車", "美國村", "恩納西海岸飯店"],
      addOns: ["晴天可把美國村換成瀨長島", "雨天可把海邊散步換成 DMM 水族館"],
      food: [["Seaside Cafe Hanon", "厚鬆餅", "下午抵達仍可排"], ["浜屋そば", "軟骨沖繩麵", "北谷晚餐"]],
      photos: [
        ["assets/american-village.jpg", "美國村", "抵達日先看海邊夕色", "main"],
        ["assets/umikaji.jpg", "瀨長島", "晴天替代美國村的夕陽方案", "optional"],
        ["assets/dmm-aquarium.png", "DMM 水族館", "雨天抵達日方案", "optional"],
        ["assets/hanon-pancake.png", "Hanon 厚鬆餅", "北谷海景甜點", "food"],
        ["assets/hamaya-soba.jpg", "浜屋そば", "軟骨沖繩麵與炊飯", "food"]
      ],
      drive: "C 方案為了第一晚就住恩納，不能再繞首里，因此無法參加 11/3 最後一天的復興祭。"
    },
    nahaHistory: {
      title: "首里王城、壺屋陶器與牧志魚貨",
      subtitle: "首里城 → 識名園 → 壺屋通 → 牧志市場 → 波上宮",
      times: [
        ["08:30", "首里城公園與金城町石疊道"],
        ["11:30", "識名園或首里午餐，依步行體力調整"],
        ["14:00", "壺屋通陶器街與平和通"],
        ["16:00", "第一牧志公設市場看鮮魚、海產與市場料理"],
        ["18:00", "波上宮或國際通晚餐"]
      ],
      tags: ["王城歷史", "魚貨市場", "市區散步"],
      route: ["首里城", "識名園", "壺屋通", "第一牧志公設市場", "波上宮"],
      addOns: ["識名園與波上宮依體力擇一縮短", "喜歡咖啡可從壺屋延伸到浮島通"],
      food: [["第一牧志公設市場", "鮮魚與代客料理", "一樓看魚貨、二樓用餐"], ["ポーたま", "豬肉蛋飯糰", "早餐或點心"]],
      photos: [
        ["assets/shuri-steps.jpg", "首里城", "王城石階與城郭", "main"],
        ["assets/shikinaen.jpg", "識名園", "琉球王家的池泉庭園", "main"],
        ["assets/tsuboya-pottery.jpg", "壺屋通", "陶器與老街巷弄", "main"],
        ["assets/market-makishi.jpg", "牧志公設市場", "魚貨、龍蝦與海鮮攤位", "main"],
        ["assets/naminoue.jpg", "波上宮", "那霸海邊神社", "optional"],
        ["assets/potama.png", "ポーたま", "沖繩人氣早餐", "food"]
      ],
      drive: "那霸市區不建議開車追點，單軌加計程車更省停車時間。"
    },
    southClassic: {
      title: "南城聖地、海景與玉泉洞",
      subtitle: "齋場御嶽 → 知念岬 → Cafe Curcuma → 玉泉洞 → 瀨長島",
      times: [
        ["08:30", "取車後往南城市，先走齋場御嶽"],
        ["11:00", "知念岬看太平洋海景"],
        ["12:00", "Cafe Curcuma 泰式午餐"],
        ["14:00", "沖繩世界與玉泉洞；或預約 Gangala 之谷"],
        ["17:30", "瀨長島看夕陽與飛機起降"]
      ],
      tags: ["南部自駕", "鐘乳石洞", "海景餐廳"],
      route: ["齋場御嶽", "知念岬", "Cafe Curcuma", "玉泉洞", "瀨長島"],
      addOns: ["Gangala 之谷與沖繩世界／玉泉洞二選一", "想看魚貨可在回程加入糸滿魚市場"],
      food: [["Cafe Curcuma", "泰式咖哩", "高台海景午餐"], ["糸滿魚市場", "生魚片與海鮮", "回那霸前順吃"]],
      photos: [
        ["assets/sefa-utaki.jpg", "齋場御嶽", "南城森林裡的琉球聖地", "main"],
        ["assets/chinen-cape.jpg", "知念岬", "面向太平洋的岬角", "main"],
        ["assets/gyokusendo.jpg", "玉泉洞", "沖繩最大級鐘乳石洞", "main"],
        ["assets/umikaji.jpg", "瀨長島", "白色階梯與夕陽", "main"],
        ["assets/gangala.jpg", "Gangala 之谷", "與玉泉洞二選一的預約導覽", "optional"],
        ["assets/curcuma-curry.jpg", "Cafe Curcuma", "實際泰式綠咖哩", "food"],
        ["assets/itoman-fish-center.jpg", "糸滿魚市場", "冰台上的沖繩近海魚貨", "optional"]
      ],
      drive: "Gangala 和玉泉洞入口相近，但兩邊都完整走會太趕；表格與照片都標成明確替代。"
    },
    itomanDmm: {
      title: "糸滿魚市場、Outlet 與雨天水族館",
      subtitle: "糸滿魚市場 → ASHIBINAA → DMM 水族館 → PARCO CITY",
      times: [
        ["09:00", "糸滿魚市場看魚貨並吃海鮮早餐"],
        ["11:30", "ASHIBINAA Outlet 購物"],
        ["14:00", "DMM Kariyushi 水族館"],
        ["17:30", "PARCO CITY 看海、用餐與採買"]
      ],
      tags: ["魚貨", "購物", "雨天也能玩"],
      route: ["糸滿魚市場", "ASHIBINAA Outlet", "DMM 水族館", "PARCO CITY"],
      addOns: ["天氣很好可把 DMM 換成瀨長島", "購物不想排整天就保留一個商場即可"],
      food: [["糸滿魚市場", "生魚片與海鮮", "早上魚貨較齊"], ["Blue Seal", "沖繩冰淇淋", "商場休息點"]],
      photos: [
        ["assets/itoman-fish-center.jpg", "糸滿魚市場", "真正的魚貨冰台", "main"],
        ["assets/dmm-aquarium.png", "DMM 水族館", "室內雨天主線", "main"],
        ["assets/umikaji.jpg", "瀨長島", "晴天時取代 DMM", "optional"],
        ["assets/market-fish-4.jpg", "沖繩海鮮", "魚貝與當日漁獲", "food"],
        ["assets/blue-seal.jpg", "Blue Seal", "購物途中吃沖繩冰淇淋", "food"]
      ],
      drive: "糸滿、豐崎與機場南側在同一區，適合集中成購物與雨備日。"
    },
    transferOnna: {
      title: "港川、北谷與讀谷海岸，移動住恩納",
      subtitle: "港川外人住宅 → 美國村 → BANTA CAFE → 殘波岬 → 恩納",
      times: [
        ["09:00", "退房取車，港川彩色小屋散步"],
        ["11:00", "美國村海邊與午餐"],
        ["14:00", "BANTA CAFE 或土花土花二選一"],
        ["16:30", "殘波岬看白色燈塔與海岸"],
        ["19:00", "入住恩納西海岸飯店"]
      ],
      tags: ["換住宿", "西海岸", "海景咖啡"],
      route: ["港川外人住宅", "美國村", "BANTA CAFE", "殘波岬", "恩納"],
      addOns: ["BANTA CAFE 與土花土花二選一", "座喜味城可取代港川，不要兩邊都久留"],
      food: [["Seaside Cafe Hanon", "厚鬆餅", "北谷午餐甜點"], ["BANTA CAFE", "飲品與輕食", "讀谷海邊座敷"]],
      photos: [
        ["assets/houki-boshi.webp", "港川外人住宅", "彩色小屋街區", "main"],
        ["assets/american-village.jpg", "美國村", "海邊彩色街景", "main"],
        ["assets/banta-table.jpg", "BANTA CAFE", "海景餐桌與飲品", "food"],
        ["assets/zanpa-lighthouse.jpg", "殘波岬", "白色燈塔與海岸", "main"],
        ["assets/dokadoka.jpg", "土花土花", "與 BANTA 二選一", "optional"],
        ["assets/zakimi-castle.jpg", "座喜味城", "與港川二選一的城跡", "optional"],
        ["assets/hanon-pancake.png", "Hanon", "草莓厚鬆餅", "food"]
      ],
      drive: "這天是換飯店日，行李留車內時貴重物品務必隨身。"
    },
    transferChatan: {
      title: "搬一次飯店，從那霸移動到北谷",
      subtitle: "退房取車 → 港川 → 美國村 → 北谷連住",
      times: [
        ["09:30", "那霸退房取車，港川外人住宅"],
        ["12:00", "A&W 牧港店午餐"],
        ["14:00", "美國村辦理入住與海邊散步"],
        ["18:00", "北谷日落、晚餐與夜景"]
      ],
      tags: ["只搬一次", "北谷連住", "輕鬆日"],
      route: ["港川外人住宅", "A&W 牧港", "美國村", "北谷飯店"],
      addOns: ["想早點入住可直接略過港川", "PARCO CITY 可取代港川與 A&W"],
      food: [["A&W 牧港店", "漢堡與 Root Beer", "復古 Drive-in"], ["Seaside Cafe Hanon", "厚鬆餅", "北谷下午茶"]],
      photos: [
        ["assets/houki-boshi.webp", "港川外人住宅", "彩色小店街", "main"],
        ["assets/american-village.jpg", "美國村", "接下來七晚的住宿區", "main"],
        ["assets/aw-burger.jpg", "A&W 漢堡", "實際漢堡，不放店面 Logo", "food"],
        ["assets/hanon-pancake.png", "Hanon", "北谷海景厚鬆餅", "food"]
      ],
      drive: "B 全程只換這一次飯店，後七晚以北谷為基地。"
    },
    onnaActive: {
      title: "萬座毛、青之洞窟與琉球村",
      subtitle: "萬座毛 → 真榮田岬 → 琉球村 → 座喜味城",
      times: [
        ["08:30", "萬座毛避開午後人潮"],
        ["10:30", "真榮田岬；有預約才下水浮潛"],
        ["13:30", "琉球村看傳統家屋與表演"],
        ["16:00", "座喜味城或海景咖啡"],
        ["18:30", "恩納／北谷晚餐"]
      ],
      tags: ["海況優先", "文化體驗", "短里程"],
      route: ["萬座毛", "真榮田岬", "琉球村", "座喜味城"],
      addOns: ["青之洞窟需預約並依海況取消", "座喜味城與海景咖啡二選一"],
      food: [["浜屋そば", "軟骨沖繩麵", "北谷人氣老店"], ["浜の家", "海鮮料理", "恩納晚餐備選"]],
      photos: [
        ["assets/manzamo.jpg", "萬座毛", "象鼻岩與海岸斷崖", "main"],
        ["assets/maeda-cape.jpg", "真榮田岬", "青之洞窟集合區", "main"],
        ["assets/ryukyu-mura.jpg", "琉球村", "紅瓦聚落與表演", "main"],
        ["assets/zakimi-castle.jpg", "座喜味城", "與海景咖啡二選一", "optional"],
        ["assets/hamaya-soba.jpg", "浜屋そば", "軟骨沖繩麵實品", "food"],
        ["assets/hamanoya-food.jpg", "浜の家", "魚料理定食實品", "food"]
      ],
      drive: "海上活動先看浪況，不能下水就把時間留給琉球村與讀谷。"
    },
    centralCoast: {
      title: "讀谷陶器、BANTA 與殘波夕陽",
      subtitle: "座喜味城 → 陶器工房 → BANTA CAFE → 殘波岬",
      times: [
        ["09:30", "座喜味城與讀谷村"],
        ["11:30", "陶器工房或土花土花午餐"],
        ["14:00", "BANTA CAFE 海邊座敷"],
        ["16:30", "殘波岬看夕陽"],
        ["19:00", "東南植物園或喜璃癒志燈光二選一"]
      ],
      tags: ["讀谷慢遊", "海景咖啡", "夜間燈光"],
      route: ["座喜味城", "讀谷陶器", "BANTA CAFE", "殘波岬", "燈光秀"],
      addOns: ["BANTA CAFE 與土花土花二選一", "東南植物園與喜璃癒志燈光二選一；2026 日期需再確認"],
      food: [["BANTA CAFE", "海景輕食", "下午最有氣氛"], ["土花土花", "披薩與甜點", "陶器系海景咖啡"]],
      photos: [
        ["assets/zakimi-castle.jpg", "座喜味城", "琉球石牆與拱門", "main"],
        ["assets/dokadoka.jpg", "土花土花", "與 BANTA 二選一", "optional"],
        ["assets/banta-cafe.jpg", "BANTA CAFE", "海邊飲品與座敷", "food"],
        ["assets/zanpa-lighthouse.jpg", "殘波岬", "白色燈塔與夕陽", "main"],
        ["assets/okinawa-illumination.webp", "東南植物園燈光", "與喜璃癒志二選一", "optional"],
        ["assets/event-kariyushi.webp", "喜璃癒志燈光", "與東南植物園二選一", "optional"]
      ],
      drive: "兩間海景咖啡和兩場燈光活動都各選一個，避免名單很多但實際跑不完。"
    },
    aquarium: {
      title: "美麗海水族館與備瀨福木林",
      subtitle: "美麗海水族館 → 海洋博公園 → 備瀨 → 瀨底島",
      times: [
        ["08:00", "提早北上，水族館開門前抵達"],
        ["09:00", "黑潮之海、鯨鯊與海洋博公園"],
        ["13:00", "本部午餐"],
        ["14:30", "備瀨福木林散步"],
        ["16:30", "瀨底島看海；體力不足直接回飯店"]
      ],
      tags: ["鯨鯊", "福木林", "北部經典"],
      route: ["美麗海水族館", "海洋博公園", "備瀨福木林", "瀨底島"],
      addOns: ["瀨底島與海洋博公園植物園依體力二選一", "牛排 88 美麗海店可當午餐"],
      food: [["牛排屋 88 美麗海店", "牛排", "水族館附近午餐"], ["沖繩麵", "本部在地麵食", "排隊太長就換同區店"]],
      photos: [
        ["assets/aquarium.jpg", "美麗海水族館", "黑潮之海鯨鯊", "main"],
        ["assets/bise.jpg", "備瀨福木林", "綠色聚落林道", "main"],
        ["assets/sesoko.webp", "瀨底島", "與植物園二選一", "optional"],
        ["assets/steak88.png", "牛排屋 88", "水族館附近牛排", "food"],
        ["assets/nakamura-soba-food.jpg", "沖繩麵", "實際麵食照片", "food"]
      ],
      drive: "水族館與 JUNGLIA 都是整日主線；六天行程只能二選一。"
    },
    kouriNago: {
      title: "古宇利藍、蝦蝦飯與名護阿古豬",
      subtitle: "古宇利大橋 → 心形岩 → 蝦蝦飯 → 名護 → 百年古家大家",
      times: [
        ["08:30", "古宇利大橋南端先拍全景"],
        ["09:30", "古宇利島與心形岩"],
        ["11:30", "KOURI SHRIMP 或海膽海葡萄丼"],
        ["14:00", "名護鳳梨園或水果樂園二選一"],
        ["17:00", "百年古家大家阿古豬晚餐"]
      ],
      tags: ["古宇利島", "蝦蝦飯", "阿古豬"],
      route: ["古宇利大橋", "心形岩", "KOURI SHRIMP", "名護", "百年古家大家"],
      addOns: ["名護鳳梨園與沖繩水果樂園二選一", "海膽丼依漁期與當日供應，不保證有貨"],
      food: [["KOURI SHRIMP", "蒜香蝦蝦飯", "古宇利人氣餐車"], ["古宇利島 錦屋", "海膽海葡萄丼", "看當日漁獲"], ["百年古家 大家", "阿古豬", "建議預約"]],
      photos: [
        ["assets/kouri-heart.jpg", "古宇利島", "大橋、海灘與心形岩", "main"],
        ["assets/kouri-shrimp.jpg", "KOURI SHRIMP", "蒜香蝦蝦飯實品", "food"],
        ["assets/nishikiya.jpg", "海膽海葡萄丼", "有漁獲時再點", "food"],
        ["assets/ufuya.png", "百年古家 大家", "紅瓦古宅與庭園", "main"],
        ["assets/ufuya-agu.jpg", "阿古豬料理", "百年古家大家餐點實景", "food"]
      ],
      drive: "心形岩需走沙地與階梯；長輩不方便可改古宇利海洋塔。"
    },
    junglia: {
      title: "JUNGLIA 叢林樂園整日",
      subtitle: "開園前抵達 → 園區整日 → 北部住宿",
      times: [
        ["08:30", "依預約時段提前抵達 JUNGLIA"],
        ["09:30", "主題設施與戶外體驗"],
        ["13:00", "園區午餐與休息"],
        ["16:30", "依體力收尾，不再塞水族館"],
        ["19:00", "返回北部／中部飯店"]
      ],
      tags: ["新景點", "整日安排", "預約優先"],
      route: ["JUNGLIA 叢林樂園"],
      addOns: ["JUNGLIA 是整日主線，不與美麗海水族館同日", "不玩樂園時改名護鳳梨園＋Neo Park"],
      food: [["A&W 名護", "漢堡與 Root Beer", "離園後的北部備選"]],
      photos: [
        ["assets/junglia.jpg", "JUNGLIA", "北部新主題樂園整日遊", "main"],
        ["assets/aw-burger.jpg", "A&W 漢堡", "離園後的北部備選餐點", "food"]
      ],
      drive: "六天版若選 JUNGLIA，就要整日替換美麗海、古宇利或南部其中一天。"
    },
    busenaNorth: {
      title: "部瀨名海中公園與恩納海景公路",
      subtitle: "部瀨名海中公園 → 玻璃船 → Nakamura Soba → 海岸咖啡",
      times: [
        ["09:00", "部瀨名海中公園與海中展望塔"],
        ["10:30", "海況良好搭玻璃船"],
        ["12:30", "Nakamura Soba 午餐"],
        ["15:00", "恩納海岸咖啡或飯店休息"],
        ["18:00", "琉球的牛或浜の家晚餐"]
      ],
      tags: ["玻璃船", "海中公園", "慢旅行"],
      route: ["部瀨名海中公園", "玻璃船", "Nakamura Soba", "恩納海岸"],
      addOns: ["玻璃船與真榮田岬浮潛依海況二選一", "海況差就改飯店休息與咖啡"],
      food: [["Nakamura Soba", "沖繩麵", "恩納海岸人氣店"], ["琉球的牛", "燒肉", "晚餐需預約"]],
      photos: [
        ["assets/manzamo.jpg", "恩納海岸", "海景公路與斷崖", "main"],
        ["assets/nakamura-soba-food.jpg", "Nakamura Soba", "實際沖繩麵，不放 Logo", "food"],
        ["assets/hamanoya-food.jpg", "浜の家", "海鮮料理晚餐", "food"],
        ["assets/ryukyu-beef.jpg", "琉球的牛", "燒肉晚餐實品", "food"]
      ],
      drive: "這天故意留白，讓長輩與孩子不用連續多天趕景點。"
    },
    eastCoast: {
      title: "海中道路、濱比嘉島與塔可飯",
      subtitle: "海中道路 → 濱比嘉島 → King Tacos → 永旺來客夢",
      times: [
        ["09:00", "海中道路看東海岸海色"],
        ["10:30", "濱比嘉島聚落與海邊"],
        ["12:30", "King Tacos 塔可飯"],
        ["15:00", "永旺沖繩來客夢"],
        ["18:30", "東南植物園燈光秀；2026 場次待公告"]
      ],
      tags: ["東海岸", "塔可飯", "購物"],
      route: ["海中道路", "濱比嘉島", "King Tacos", "永旺來客夢", "東南植物園"],
      addOns: ["東南植物園與美國村夜景二選一", "不想逛商場可把永旺換成沖繩兒童王國"],
      food: [["King Tacos", "塔可飯", "金武町代表美食"], ["A&W", "漢堡與 Root Beer", "回程備選"]],
      photos: [
        ["assets/hamahiga.webp", "濱比嘉島", "東海岸安靜島嶼", "main"],
        ["assets/king-tacos.jpg", "King Tacos", "大量生菜起司塔可飯", "food"],
        ["assets/okinawa-illumination.webp", "東南植物園燈光", "2026 日期確認後再加入", "optional"],
        ["assets/aw-burger.jpg", "A&W 漢堡", "回程同區備選", "food"]
      ],
      drive: "東海岸與西海岸分開玩，避免一天橫切本島多次。"
    },
    kerama: {
      title: "慶良間跳島，座間味或渡嘉敷整日",
      subtitle: "泊港 → 高速船 → 海島散步／浮潛 → 那霸",
      times: [
        ["07:30", "前往泊港，確認海況與船班"],
        ["09:00", "搭船前往座間味或渡嘉敷"],
        ["10:30", "海灘、展望台與島上午餐"],
        ["16:00", "搭船返回那霸"],
        ["18:30", "國際通晚餐"]
      ],
      tags: ["整日跳島", "海況優先", "非賞鯨季"],
      route: ["泊港", "座間味／渡嘉敷", "海灘", "那霸"],
      addOns: ["座間味與渡嘉敷二選一，不同島不要同日硬排", "11 月初不是穩定賞鯨季，不能把賞鯨寫成主線"],
      food: [["島上午餐", "沖繩麵或定食", "依當日營業"], ["暖暮拉麵", "拉麵", "回那霸宵夜"]],
      photos: [
        ["assets/event-zamami.webp", "慶良間群島", "海況良好才出發", "main"],
        ["assets/shuri-soba.jpg", "島上沖繩麵", "依當日營業選擇", "food"],
        ["assets/danbo-ramen.png", "暖暮拉麵", "回那霸後的拉麵實品", "food"]
      ],
      drive: "這天不開車。船班取消時直接啟用那霸購物與市場備案。"
    },
    fishShopping: {
      title: "泊港魚貨、波上宮與那霸購物",
      subtitle: "泊いゆまち → 波上宮 → DFS → 國際通",
      times: [
        ["07:30", "泊いゆまち看鮪魚、近海魚與魚貝冰台"],
        ["10:00", "波上宮與波之上海灘"],
        ["12:30", "傑克牛排或市場午餐"],
        ["15:00", "DFS 免稅店與新都心"],
        ["18:00", "國際通、唐吉訶德與伴手禮"]
      ],
      tags: ["爸爸市場日", "魚貨", "那霸購物"],
      route: ["泊いゆまち", "波上宮", "Jack's Steak", "DFS", "國際通"],
      addOns: ["想再逛市場可加入牧志公設市場", "DFS 與 PARCO CITY 二選一，避免整天只在商場"],
      food: [["泊いゆまち", "鮪魚與海鮮", "早上魚貨較齊"], ["Jack's Steak House", "牛排", "老字號午餐"]],
      photos: [
        ["assets/market-fish-2.jpg", "泊いゆまち", "鮮魚市場通道", "main"],
        ["assets/market-fish-3.jpg", "泊港魚貨", "彩色近海魚與鮪魚", "main"],
        ["assets/market-fish-4.jpg", "魚貝冰台", "當日魚貨", "main"],
        ["assets/naminoue.jpg", "波上宮", "市場後的海邊神社", "main"],
        ["assets/market-makishi.jpg", "牧志公設市場", "另一個魚貨市場加點", "optional"],
        ["assets/jack-steak-food.jpg", "Jack's Steak", "牛排套餐實品", "food"]
      ],
      drive: "泊港早上最值得去；這天市區移動用計程車與單軌即可。"
    },
    outletUrban: {
      title: "Outlet、DMM 與 PARCO CITY 購物日",
      subtitle: "ASHIBINAA → DMM 水族館 → 瀨長島 → PARCO CITY",
      times: [
        ["09:30", "ASHIBINAA Outlet"],
        ["12:30", "豐崎午餐"],
        ["14:00", "DMM 水族館或瀨長島二選一"],
        ["17:00", "PARCO CITY 晚餐與採買"],
        ["20:00", "返回住宿區"]
      ],
      tags: ["購物", "雨天備案", "行程留白"],
      route: ["ASHIBINAA Outlet", "DMM 水族館／瀨長島", "PARCO CITY"],
      addOns: ["DMM 水族館與瀨長島二選一", "還想買藥妝可回國際通唐吉訶德"],
      food: [["Blue Seal", "冰淇淋", "商場休息"], ["A&W", "漢堡", "豐崎或回程備選"]],
      photos: [
        ["assets/dmm-aquarium.png", "DMM 水族館", "與瀨長島二選一", "optional"],
        ["assets/umikaji.jpg", "瀨長島", "與 DMM 二選一", "optional"],
        ["assets/blue-seal.jpg", "Blue Seal", "購物日冰淇淋", "food"],
        ["assets/aw-burger.jpg", "A&W 漢堡", "購物日簡單吃", "food"]
      ],
      drive: "購物日刻意排在後段，前幾天遇雨或累了也能和其他日互換。"
    },
    freeNaha: {
      title: "自由補點與最後採買",
      subtitle: "補前幾天沒去成的景點 → 市場 → 國際通",
      times: [
        ["09:00", "依天氣與體力選一個漏掉的景點"],
        ["12:00", "市場或沖繩麵午餐"],
        ["14:00", "首里、DMM、Outlet 三選一補點"],
        ["18:00", "最後晚餐與行李整理"]
      ],
      tags: ["機動日", "不趕路", "最後採買"],
      route: ["補點一處", "市場午餐", "國際通"],
      addOns: ["首里、DMM、Outlet 只選一個", "若前面都順利就留在飯店休息"],
      food: [["琉家拉麵", "拉麵", "國際通晚餐"], ["御菓子御殿", "紫薯塔", "伴手禮"]],
      photos: [
        ["assets/naha-night.jpg", "國際通", "最後採買與晚餐", "main"],
        ["assets/shuri-steps.jpg", "首里城", "前面錯過時的補點", "optional"],
        ["assets/dmm-aquarium.png", "DMM 水族館", "雨天補點", "optional"],
        ["assets/ryuya.jpg", "琉家拉麵", "國際通拉麵實品", "food"],
        ["assets/beniimo-tart.png", "御菓子御殿紫薯塔", "最後採買伴手禮", "food"]
      ],
      drive: "長途旅行一定要有機動日，這天不預先綁死，才不會一路補行程補到累。"
    },
    southTransfer: {
      title: "南城海景與玉泉洞，傍晚移動中部",
      subtitle: "齋場御嶽 → 知念岬 → Cafe Curcuma → 玉泉洞 → 恩納／北谷",
      times: [
        ["08:00", "那霸取車，前往齋場御嶽"],
        ["10:30", "知念岬看太平洋海景"],
        ["11:30", "Cafe Curcuma 泰式午餐"],
        ["13:30", "沖繩世界／玉泉洞；或預約 Gangala 之谷"],
        ["17:00", "沿高速公路前往恩納或北谷飯店"]
      ],
      tags: ["南部自駕", "換住宿", "玉泉洞二選一"],
      route: ["齋場御嶽", "知念岬", "Cafe Curcuma", "玉泉洞／Gangala", "中部飯店"],
      addOns: ["玉泉洞與 Gangala 之谷二選一", "這天不再塞瀨長島，避免南部結束後又繞路"],
      food: [["Cafe Curcuma", "泰式咖哩", "高台海景午餐"], ["A&W", "漢堡與 Root Beer", "高速公路移動備選"]],
      photos: [
        ["assets/sefa-utaki.jpg", "齋場御嶽", "南城森林裡的琉球聖地", "main"],
        ["assets/chinen-cape.jpg", "知念岬", "面向太平洋的岬角", "main"],
        ["assets/gyokusendo.jpg", "玉泉洞", "與 Gangala 二選一", "main"],
        ["assets/gangala.jpg", "Gangala 之谷", "預約導覽替代玉泉洞", "optional"],
        ["assets/curcuma-curry.jpg", "Cafe Curcuma", "泰式綠咖哩實品", "food"]
      ],
      drive: "南部結束後直接換到中部住宿；導航時間外再留尖峰車流緩衝。"
    },
    northHighlights: {
      title: "美麗海、備瀨與古宇利北部精華",
      subtitle: "美麗海水族館 → 備瀨福木林 → 古宇利島 → 蝦蝦飯／阿古豬",
      times: [
        ["08:00", "提早出發，水族館開門前抵達"],
        ["09:00", "黑潮之海、鯨鯊與海洋博公園"],
        ["12:30", "備瀨福木林短程散步"],
        ["14:30", "古宇利大橋、海洋塔或心形岩擇一"],
        ["16:30", "KOURI SHRIMP；或預約百年古家大家早晚餐"]
      ],
      tags: ["北部精華", "鯨鯊", "古宇利島"],
      route: ["美麗海水族館", "備瀨福木林", "古宇利大橋", "KOURI SHRIMP", "百年古家大家"],
      addOns: ["心形岩與古宇利海洋塔依長輩體力二選一", "JUNGLIA 若要玩，必須整日取代本日，不能同日硬塞"],
      food: [["KOURI SHRIMP", "蒜香蝦蝦飯", "古宇利人氣餐車"], ["古宇利海膽／海葡萄丼", "海鮮丼", "依漁獲供應"], ["百年古家 大家", "阿古豬", "有訂位再前往"]],
      photos: [
        ["assets/aquarium.jpg", "美麗海水族館", "黑潮之海鯨鯊", "main"],
        ["assets/bise.jpg", "備瀨福木林", "水族館旁綠色聚落", "main"],
        ["assets/kouri-heart.jpg", "古宇利島", "大橋、海灘與心形岩", "main"],
        ["assets/kouri-shrimp.jpg", "KOURI SHRIMP", "蒜香蝦蝦飯實品", "food"],
        ["assets/nishikiya.jpg", "海膽海葡萄丼", "有漁獲時再點", "food"],
        ["assets/ufuya.png", "百年古家 大家", "有訂位再加入", "optional"],
        ["assets/junglia.jpg", "JUNGLIA", "整日替換本日", "optional"]
      ],
      drive: "六天版把北部經典合成一天，古宇利只選海洋塔或心形岩其中一個。"
    },
    centralToNaha: {
      title: "恩納、讀谷與美國村，傍晚回那霸",
      subtitle: "萬座毛 → 真榮田岬／琉球村 → BANTA CAFE → 美國村 → 那霸",
      times: [
        ["08:30", "退房後先到萬座毛"],
        ["10:30", "真榮田岬看海況；不能下水就改琉球村"],
        ["13:30", "BANTA CAFE 或土花土花二選一"],
        ["16:00", "美國村海邊散步與早晚餐"],
        ["19:00", "回那霸市區飯店"]
      ],
      tags: ["中部海岸", "換住宿", "海景咖啡"],
      route: ["萬座毛", "真榮田岬／琉球村", "BANTA CAFE", "美國村", "那霸"],
      addOns: ["真榮田岬浮潛與琉球村二選一", "BANTA CAFE 與土花土花二選一", "2026 日期確認後，可用東南植物園燈光替換美國村"],
      food: [["浜屋そば", "軟骨沖繩麵", "北谷人氣老店"], ["BANTA CAFE", "海景輕食", "讀谷下午茶"], ["琉球的牛", "燒肉", "有預約再排晚餐"]],
      photos: [
        ["assets/manzamo.jpg", "萬座毛", "恩納代表海岸", "main"],
        ["assets/maeda-cape.jpg", "真榮田岬", "與琉球村二選一", "optional"],
        ["assets/ryukyu-mura.jpg", "琉球村", "與浮潛二選一", "optional"],
        ["assets/banta-cafe.jpg", "BANTA CAFE", "讀谷海邊下午茶", "food"],
        ["assets/american-village.jpg", "美國村", "回那霸前看夕色", "main"],
        ["assets/hamaya-soba.jpg", "浜屋そば", "軟骨沖繩麵實品", "food"],
        ["assets/okinawa-illumination.webp", "沖繩南國燈光秀", "確認 2026 日期後替換晚間行程", "optional"]
      ],
      drive: "這天邊玩邊往南移動，晚上回那霸，最後兩晚不用再搬行李。"
    },
    marketHistory: {
      title: "泊港魚貨、首里與牧志市場",
      subtitle: "泊いゆまち → 波上宮 → 首里城 → 牧志公設市場 → 國際通",
      times: [
        ["07:30", "泊いゆまち看鮪魚、近海魚與魚貝冰台"],
        ["09:30", "波上宮與波之上海灘"],
        ["11:00", "首里城、金城町石疊道與沖繩麵"],
        ["15:00", "第一牧志公設市場看魚貨與市場料理"],
        ["18:00", "國際通、唐吉訶德與最後採買"]
      ],
      tags: ["爸爸市場日", "首里歷史", "那霸散步"],
      route: ["泊いゆまち", "波上宮", "首里城", "第一牧志公設市場", "國際通"],
      addOns: ["若 11/3 已完整走首里，可把首里換成 DFS 或 PARCO CITY", "波上宮與壺屋通依步行體力二選一"],
      food: [["泊いゆまち", "鮪魚與海鮮", "早上魚貨最齊"], ["首里そば", "沖繩麵", "首里午餐"], ["Jack's Steak House", "牛排", "晚餐備選"]],
      photos: [
        ["assets/market-fish-2.jpg", "泊いゆまち", "鮮魚市場通道", "main"],
        ["assets/market-fish-3.jpg", "泊港魚貨", "彩色近海魚與鮪魚", "main"],
        ["assets/naminoue.jpg", "波上宮", "市場後的海邊神社", "main"],
        ["assets/shuri-steps.jpg", "首里城", "王城石階與城郭", "main"],
        ["assets/market-makishi.jpg", "牧志公設市場", "魚貨與海鮮攤位", "main"],
        ["assets/shuri-soba.jpg", "首里そば", "沖繩麵實品", "food"],
        ["assets/jack-steak-food.jpg", "Jack's Steak", "牛排套餐實品", "food"]
      ],
      drive: "泊港要早去；那霸市區可用計程車與單軌，避免一直找停車位。"
    },
    flyIshigaki: {
      title: "飛往石垣，川平灣看海",
      subtitle: "那霸國內線 → 石垣取車 → 川平灣 → 石垣市區",
      times: [
        ["07:00", "前往那霸機場搭國內線"],
        ["09:30", "抵達石垣後取車"],
        ["11:30", "川平灣展望與玻璃船"],
        ["15:00", "米原海岸或市區咖啡"],
        ["18:00", "石垣牛燒肉晚餐"]
      ],
      tags: ["國內線", "川平灣", "石垣牛"],
      route: ["石垣取車", "川平灣", "米原海岸", "石垣市區"],
      addOns: ["玻璃船依海況決定", "米原海岸只散步，不在無救生員處冒險下水"],
      food: [["八重山そば", "八重山麵", "石垣在地麵食"], ["石垣牛燒肉", "和牛", "熱門店需預約"]],
      photos: [
        ["assets/ishigaki-kabira.jpg", "川平灣", "石垣島代表海灣", "main"],
        ["assets/ishigaki-yonehara.jpg", "米原海岸", "北部海岸加點", "optional"],
        ["assets/yaeyama-soba.jpg", "八重山そば", "實際八重山麵", "food"],
        ["assets/ishigaki-beef.jpg", "石垣牛", "燒肉實品", "food"]
      ],
      drive: "國內線時刻需另訂；大件行李可寄放那霸飯店，只帶兩晚用品。"
    },
    taketomi: {
      title: "竹富島紅瓦村落與 Kondoi 海灘",
      subtitle: "石垣港 → 竹富島 → 紅瓦村 → Kondoi → 西棧橋",
      times: [
        ["08:00", "步行前往石垣港離島碼頭"],
        ["09:00", "搭船抵達竹富島"],
        ["09:30", "紅瓦村落與白沙路"],
        ["12:30", "島料理與八重山麵"],
        ["14:00", "Kondoi 海灘、西棧橋後返石垣"]
      ],
      tags: ["竹富島", "紅瓦聚落", "渡輪"],
      route: ["竹富港", "紅瓦村落", "Kondoi 海灘", "西棧橋"],
      addOns: ["自行車與島內巴士依長輩體力二選一", "不加西表島，竹富島留完整一天"],
      food: [["竹富島島料理", "沖繩家常菜", "先確認營業"], ["八重山そば", "島上麵食", "午餐主選"]],
      photos: [
        ["assets/taketomi-village.jpg", "竹富島村落", "紅瓦家屋與白沙路", "main"],
        ["assets/taketomi-kondoi.jpg", "Kondoi 海灘", "竹富島西岸海色", "main"],
        ["assets/taketomi-west-pier.jpg", "西棧橋", "走向海上的老棧橋", "main"],
        ["assets/taketomi-soba.webp", "竹富島八重山麵", "島上午餐實品", "food"]
      ],
      drive: "今天不開車，以船、步行、自行車或島內巴士移動。"
    },
    ishigakiNorth: {
      title: "石垣北端公路旅行",
      subtitle: "米原 → 玉取崎 → 平久保崎 → 石垣市區",
      times: [
        ["08:30", "沿東岸北上玉取崎展望台"],
        ["11:00", "平久保崎燈塔"],
        ["13:00", "北部午餐與咖啡"],
        ["15:30", "米原或川平周邊補點"],
        ["18:30", "回市區吃石垣牛"]
      ],
      tags: ["石垣北端", "海岸公路", "慢開車"],
      route: ["玉取崎", "平久保崎", "米原海岸", "石垣市區"],
      addOns: ["天氣差就縮短北端，改石垣島鐘乳洞", "不把所有海灘都排成下水點"],
      food: [["八重山そば", "在地麵食", "北部午餐"], ["石垣牛", "燒肉或漢堡", "晚餐"]],
      photos: [
        ["assets/ishigaki-yonehara.jpg", "石垣北部海岸", "北端公路海色", "main"],
        ["assets/yaeyama-soba.jpg", "八重山そば", "北部午餐", "food"],
        ["assets/ishigaki-beef.jpg", "石垣牛", "晚餐燒肉", "food"]
      ],
      drive: "石垣北端道路較長，日落前開始回市區。"
    },
    iriomote: {
      title: "西表島與由布島整日，或石垣休息日",
      subtitle: "離島碼頭 → 西表島 → 由布島 → 石垣",
      times: [
        ["07:30", "依套裝行程集合與海況確認"],
        ["09:00", "西表島自然行程"],
        ["12:00", "由布島與島上午餐"],
        ["16:30", "搭船返回石垣"],
        ["18:30", "Euglena Mall 晚餐"]
      ],
      tags: ["第二座外島", "套裝行程", "可改休息"],
      route: ["石垣港", "西表島", "由布島", "石垣市區"],
      addOns: ["西表＋由布島套裝與石垣休息日二選一", "海況不佳就留石垣，不硬搭船"],
      food: [["石垣市區居酒屋", "島料理", "回程晚餐"], ["Blue Seal", "冰淇淋", "市區散步"]],
      photos: [
        ["assets/miyako-island.webp", "八重山離島海色", "西表／由布島套裝概念圖", "main"],
        ["assets/ishigaki-kabira.jpg", "石垣休息日", "不搭船時回川平周邊", "optional"],
        ["assets/yaeyama-soba.jpg", "八重山島料理", "返回石垣後的晚餐選擇", "food"],
        ["assets/blue-seal.jpg", "Blue Seal", "石垣市區散步甜點", "food"]
      ],
      drive: "這天是否出海完全看海況，不能把套裝船班當成百分之百成立。"
    },
    backNaha: {
      title: "搭早班國內線回那霸，接魚市場與市區",
      subtitle: "石垣還車 → 早班國內線 → 泊魚市場 → 波上宮 → 國際通",
      times: [
        ["06:30", "退房、加油還車，前往石垣機場"],
        ["08:30", "搭早班國內線返回那霸；班次依訂票調整"],
        ["10:30", "那霸飯店寄放行李"],
        ["11:30", "泊いゆまち魚市場與波上宮"],
        ["16:00", "牧志公設市場、國際通晚餐"]
      ],
      tags: ["早班移動", "魚貨市場", "回那霸"],
      route: ["石垣還車", "國內線", "泊いゆまち", "波上宮", "國際通"],
      addOns: ["若只能訂到午班機，市場改第一牧志公設市場，不硬趕泊港", "班機順利且體力足夠才加壺屋通"],
      food: [["泊いゆまち", "鮪魚與海鮮", "早班機抵達才排"], ["ポーたま", "豬肉蛋飯糰", "移動日簡單吃"], ["琉家拉麵", "拉麵", "回那霸晚餐"]],
      photos: [
        ["assets/market-fish-2.jpg", "泊いゆまち", "回那霸後看實際魚貨", "main"],
        ["assets/market-fish-4.jpg", "泊港魚貝冰台", "早班機才有餘裕前往", "main"],
        ["assets/naminoue.jpg", "波上宮", "市場後順遊", "main"],
        ["assets/naha-night.jpg", "國際通", "回本島後散步", "main"],
        ["assets/tsuboya-pottery.jpg", "壺屋通", "班機順利才加", "optional"],
        ["assets/potama.png", "ポーたま", "移動日餐點", "food"],
        ["assets/ryuya.jpg", "琉家拉麵", "回那霸晚餐", "food"]
      ],
      drive: "D 方案必須訂早班石垣回那霸，才能保留魚市場；午班機就刪掉泊港。"
    },
    departure: {
      title: "MM925 從那霸回桃園",
      subtitle: "早餐退房 → 加油還車 → 那霸機場 → 13:35 起飛",
      times: [
        ["08:00", "早餐、整理行李與確認退房物品"],
        ["09:15", "離開那霸市區，前往機場周邊加油"],
        ["10:00", "完成租車歸還，搭接駁前往航廈"],
        ["10:45", "辦理 MM925 報到與托運，預留午餐與伴手禮時間"],
        ["13:35", "由那霸起飛"],
        ["14:20", "抵達桃園機場"]
      ],
      tags: ["MM925", "加油還車", "那霸進出"],
      route: ["那霸飯店", "加油還車", "MM925", "桃園"],
      addOns: ["機場商店預留 60–90 分鐘", "最後一天不排 Outlet 或景點，避免還車與交通意外"],
      food: [["ポーたま", "豬肉蛋飯糰", "早餐"], ["機場沖繩麵", "最後一餐", "依報到時間"]],
      photos: [
        ["assets/potama.png", "ポーたま", "最後一天早餐", "food"],
        ["assets/blue-seal.jpg", "Blue Seal", "報到後有時間再吃", "food"],
        ["assets/shuri-soba.jpg", "最後一碗沖繩麵", "報到後依時間決定", "food"]
      ],
      drive: "去回都在那霸；行程照片不再把機場當景點。"
    },
    departureChatan: {
      title: "北谷退房，MM925 從那霸回桃園",
      subtitle: "北谷 → 加油還車 → 那霸機場 → 13:35 起飛",
      times: [
        ["07:30", "早餐、退房與行李確認"],
        ["08:45", "最晚離開北谷，週日交通留緩衝"],
        ["10:00", "加油、還車與租車接駁"],
        ["10:45", "MM925 報到與托運"],
        ["13:35", "那霸起飛；14:20 抵達桃園"]
      ],
      tags: ["北谷出發", "還車接駁", "MM925"],
      route: ["北谷飯店", "加油還車", "MM925", "桃園"],
      addOns: ["最後一天不加 A&W 或其他景點", "還車、接駁與週日車流合計至少留 90 分鐘"],
      food: [["ポーたま", "豬肉蛋飯糰", "有時間再買，不為排隊延誤"]],
      photos: [
        ["assets/american-depot.jpg", "北谷晨光", "最後一次看海邊街景", "main"],
        ["assets/potama.png", "ポーたま", "有時間再買", "food"]
      ],
      drive: "B 只換一次飯店的代價，是回程要從北谷提早出發。"
    }
  };

  templates.arrivalMotobu = {
    title: "抵達沖繩，中部散步後一路北上",
    subtitle: "MM922 抵達 → 取車 → 美國村 → 琉球的牛 → 本部飯店",
    times: [
      ["12:25", "MM922 抵達那霸，預留入境、領行李與租車接駁"],
      ["14:30", "機場周邊取車，確認 ETC、保險、兒童座椅與導航"],
      ["15:30", "美國村海邊短暫散步，行李與貴重物品不要留在車內"],
      ["17:00", "琉球的牛恩納本館晚餐；熱門時段務必先預約"],
      ["19:15", "前往本部町，入住スマイルスマートイン沖縄美ら海"]
    ],
    tags: ["放棄復興祭", "中部北上", "琉球的牛主線"],
    route: ["那霸機場取車", "美國村", "琉球的牛恩納本館", "スマイルスマートイン沖縄美ら海"],
    addOns: ["若通關或取車延誤，直接取消美國村，保留晚餐與安全北上", "雨天可把美國村換成永旺沖繩來客夢，但只能短停"],
    food: [["ポーたま", "豬肉蛋飯糰", "機場取車前墊胃"], ["琉球的牛 恩納本館", "沖繩縣產和牛燒肉", "第一晚固定主線，建議預約"]],
    photos: [
      ["assets/american-village.jpg", "美國村", "抵達後沿北上動線短暫看海", "main"],
      ["assets/ryukyu-beef.jpg", "琉球的牛", "第一晚固定安排的燒肉", "food"],
      ["assets/smile-smart-inn-churaumi.jpg", "北部住宿", "スマイルスマートイン沖縄美ら海客房", "main"],
      ["assets/potama.png", "ポーたま", "取車前快速墊胃", "food"],
      ["assets/dmm-aquarium.png", "永旺沖繩來客夢", "下雨時替代美國村", "optional"]
    ],
    drive: "那霸機場到本部町約需 1 小時 40 分以上；第一天只排一個中部短停，晚餐後不再加景點。"
  };

  templates.churaumiLocal = {
    title: "住在水族館旁，慢慢玩美麗海與備瀨",
    subtitle: "美麗海水族館 → 翡翠海灘 → 海洋博公園 → 備瀨福木林",
    times: [
      ["08:30", "從飯店出發，車程約 4 分鐘前往美麗海水族館"],
      ["09:00", "黑潮之海、鯨鯊與海洋博公園"],
      ["12:30", "水族館周邊午餐"],
      ["14:00", "翡翠海灘與海洋博公園散步"],
      ["15:30", "備瀨福木林道，傍晚回本部飯店休息"]
    ],
    tags: ["水族館主線", "翡翠海灘", "短車程"],
    route: ["スマイルスマートイン沖縄美ら海", "美麗海水族館", "翡翠海灘", "備瀨福木林", "本部飯店"],
    addOns: ["體力足夠可加熱帶夢中心，與翡翠海灘二選一", "JUNGLIA 是整日行程，不能塞進水族館這一天"],
    food: [["牛排屋 88 美麗海店", "牛排", "水族館附近多人用餐方便"], ["沖繩麵", "本部在地麵食", "排隊太長就換同區店"]],
    photos: [
      ["assets/aquarium.jpg", "美麗海水族館", "黑潮之海鯨鯊主線", "main"],
      ["assets/sesoko.webp", "翡翠海灘", "海洋博公園旁的北部海色", "main"],
      ["assets/bise.jpg", "備瀨福木林", "午後走進綠色聚落", "main"],
      ["assets/steak88.png", "牛排屋 88", "水族館附近午餐", "food"],
      ["assets/nakamura-soba-food.jpg", "沖繩麵", "本部午餐備選", "food"]
    ],
    drive: "飯店就在水族館旁，這天不必趕早長途北上，適合家人慢慢走。"
  };

  templates.kouriPineapple = {
    title: "古宇利海色、蝦蝦飯與名護鳳梨園",
    subtitle: "古宇利大橋 → 心形岩 → KOURI SHRIMP → 名護鳳梨園 → 百年古家大家",
    times: [
      ["08:30", "從本部飯店前往古宇利大橋南端看全景"],
      ["09:30", "古宇利島、海洋塔或心形岩，依長輩步行狀況擇一"],
      ["11:00", "KOURI SHRIMP 蝦蝦飯午餐"],
      ["13:30", "名護鳳梨園，預留約 1.5 至 2 小時"],
      ["17:00", "百年古家大家阿古豬晚餐；需提前預約"]
    ],
    tags: ["蝦蝦飯主線", "鳳梨園主線", "古宇利島"],
    route: ["古宇利大橋", "心形岩／海洋塔", "KOURI SHRIMP", "名護鳳梨園", "百年古家大家"],
    addOns: ["心形岩沙地階梯較多，可改古宇利海洋塔", "海膽海葡萄丼與蝦蝦飯二選一，不要為兩餐重複排隊"],
    food: [["KOURI SHRIMP", "蒜香蝦蝦飯", "11 點左右先吃避開午後排隊"], ["百年古家 大家", "阿古豬", "晚餐固定主線，需預約"], ["古宇利海膽／海葡萄丼", "海鮮丼", "僅作替代且依漁獲供應"]],
    photos: [
      ["assets/kouri-heart.jpg", "古宇利島", "大橋、海灘與心形岩", "main"],
      ["assets/kouri-shrimp.jpg", "KOURI SHRIMP", "固定主線蝦蝦飯", "food"],
      ["assets/nago-pineapple-park.jpg", "名護鳳梨園", "熱帶植物與鳳梨車體驗", "main"],
      ["assets/ufuya.png", "百年古家 大家", "紅瓦古宅晚餐", "main"],
      ["assets/ufuya-agu.jpg", "阿古豬料理", "百年古家大家餐點", "food"],
      ["assets/nishikiya.jpg", "海膽海葡萄丼", "與蝦蝦飯二選一", "optional"]
    ],
    drive: "古宇利先玩、11 點吃蝦蝦飯，再往名護回程，動線不走回頭路。"
  };

  templates.coastToNaha = {
    title: "沿西海岸南下，傍晚入住那霸",
    subtitle: "萬座毛 → 琉球村 → 殘波岬 → 牧志市場 → 國際通",
    times: [
      ["08:30", "北部飯店退房，行李上車後開始南下"],
      ["10:00", "萬座毛看象鼻岩與恩納海岸"],
      ["11:30", "琉球村傳統家屋、表演與工藝"],
      ["14:00", "殘波岬白色燈塔與海岸；體力不足可略過"],
      ["17:00", "抵達那霸飯店停車，入住後逛牧志市場、國際通"]
    ],
    tags: ["只換一次飯店", "琉球村", "回那霸"],
    route: ["北部飯店", "萬座毛", "琉球村", "殘波岬", "那霸飯店", "牧志市場"],
    addOns: ["BANTA CAFE 與殘波岬二選一", "第一天已去美國村，這天不再重複繞進北谷"],
    food: [["浜屋そば", "軟骨沖繩麵", "中部午餐備選"], ["第一牧志公設市場", "海鮮與市場料理", "入住那霸後晚餐"], ["暖暮／琉家拉麵", "拉麵", "國際通宵夜備選"]],
    photos: [
      ["assets/manzamo.jpg", "萬座毛", "西海岸南下第一站", "main"],
      ["assets/ryukyu-mura.jpg", "琉球村", "紅瓦聚落與文化表演", "main"],
      ["assets/zanpa-lighthouse.jpg", "殘波岬", "白色燈塔與海岸", "main"],
      ["assets/market-makishi.jpg", "第一牧志公設市場", "入住那霸後看魚貨", "main"],
      ["assets/hamaya-soba.jpg", "浜屋そば", "中部沖繩麵備選", "food"],
      ["assets/banta-cafe.jpg", "BANTA CAFE", "與殘波岬二選一", "optional"]
    ],
    drive: "這天一路向南移動，避免再回北部；行李留車內時貴重物品務必隨身。"
  };

  templates.southFish = {
    title: "魚貨早市、南城聖地與瀨長島夕陽",
    subtitle: "泊いゆまち → 波上宮 → 齋場御嶽 → 知念岬 → 奧武島 → 玉泉洞 → 瀨長島",
    times: [
      ["07:30", "泊いゆまち看鮪魚、近海魚與魚貝冰台"],
      ["09:00", "波上宮與波之上海灘"],
      ["10:30", "齋場御嶽、知念岬"],
      ["12:30", "奧武島天婦羅午餐"],
      ["13:45", "沖繩世界與玉泉洞"],
      ["17:15", "瀨長島看夕陽；幸福鬆餅或 Outlet 只能擇一"]
    ],
    tags: ["爸爸魚市場", "南部主線", "瀨長島夕陽"],
    route: ["泊いゆまち", "波上宮", "齋場御嶽", "知念岬", "奧武島", "玉泉洞", "瀨長島"],
    addOns: ["ASHIBINAA Outlet 與瀨長島／幸福鬆餅二選一", "Gangala 之谷與玉泉洞二選一，兩邊完整走會太趕", "若市場逛太久，刪掉波上宮或知念岬其中一站"],
    food: [["泊いゆまち", "鮪魚與海鮮", "早上魚貨最齊"], ["奧武島天婦羅", "現炸天婦羅", "南部午餐"], ["幸福鬆餅", "厚鬆餅", "有預約且不逛 Outlet 才排"]],
    photos: [
      ["assets/market-fish-2.jpg", "泊いゆまち", "早晨鮮魚市場主線", "main"],
      ["assets/market-fish-4.jpg", "泊港魚貨", "冰台上的當日漁獲", "main"],
      ["assets/naminoue.jpg", "波上宮", "魚市場後順遊", "main"],
      ["assets/sefa-utaki.jpg", "齋場御嶽", "南城森林聖地", "main"],
      ["assets/chinen-cape.jpg", "知念岬", "太平洋海景", "main"],
      ["assets/gyokusendo.jpg", "玉泉洞", "午後鐘乳石洞主線", "main"],
      ["assets/umikaji.jpg", "瀨長島", "南部日夕陽收尾", "main"],
      ["assets/itoman-fish-center.jpg", "糸滿魚市場", "若不去泊港的替代魚貨市場", "optional"]
    ],
    drive: "南部日景點多，市場與玉泉洞優先；Outlet 不能放到回程早上，只能用本日晚間景點交換。"
  };

  function buildPlan(meta, daySpecs) {
    const days = [];
    const enhancements = [];
    daySpecs.forEach((spec, index) => {
      const template = templates[spec[0]];
      days.push({
        date: dates[index][0],
        weekday: dates[index][1],
        title: template.title,
        subtitle: template.subtitle,
        times: template.times,
        tags: template.tags,
        stay: spec[1],
        image: template.photos[0][0],
        imageAlt: template.photos[0][2],
        label: "OKINAWA 2026"
      });
      enhancements.push({
        route: template.route,
        addOns: template.addOns,
        food: template.food,
        photos: template.photos,
        drive: template.drive
      });
    });
    return {
      plan: { ...meta, days },
      enhancements
    };
  }

  const naha = "那霸市區｜縣廳前／國際通";
  const motobu = "スマイルスマートイン沖縄美ら海｜本部町山川";
  const home = "溫暖的家";

  const built = {
    c: buildPlan({
      title: "張家主行程｜先北後那霸",
      description: "前三晚住スマイルスマートイン沖縄美ら海，後兩晚住那霸；只換一次飯店，放棄復興祭。",
      route: [
        { nights: "3", place: "スマイルスマートイン沖縄美ら海", note: "11/3–11/6｜本部町山川" },
        { nights: "2", place: "那霸市區", note: "11/6–11/8" }
      ]
    }, [
      ["arrivalMotobu", motobu], ["churaumiLocal", motobu], ["kouriPineapple", motobu],
      ["coastToNaha", naha], ["southFish", naha], ["departure", home]
    ])
  };

  const matrix = [
    { region: "北部｜本部・名護・古宇利", rows: [
      ["住宿", "スマイルスマートイン沖縄美ら海", ["main", "11/3–11/6 連住三晚"]],
      ["景點", "美麗海水族館", ["main", "11/4 固定主線"]],
      ["景點", "翡翠海灘／備瀨福木林", ["main", "水族館同日"]],
      ["景點", "古宇利島／心形岩", ["main", "11/5 固定主線"]],
      ["景點", "名護鳳梨園", ["main", "11/5 固定主線"]],
      ["景點", "JUNGLIA", ["option", "只能整日替換水族館或古宇利日"]],
      ["美食", "KOURI SHRIMP 蝦蝦飯", ["main", "11/5 固定午餐"]],
      ["美食", "百年古家 大家", ["main", "11/5 預約晚餐"]],
      ["美食", "古宇利海膽／海葡萄丼", ["option", "與蝦蝦飯二選一"]]
    ]},
    { region: "中部｜恩納・讀谷・北谷", rows: [
      ["景點", "美國村", ["main", "11/3 抵達後短停"]],
      ["美食", "琉球的牛 恩納本館", ["main", "11/3 固定晚餐，需預約"]],
      ["景點", "萬座毛", ["main", "11/6 南下主線"]],
      ["景點", "琉球村", ["main", "11/6 南下主線"]],
      ["景點", "殘波岬", ["main", "11/6 體力許可"]],
      ["景點", "BANTA CAFE", ["option", "與殘波岬二選一"]],
      ["景點", "東南植物園燈光秀", ["option", "確認 2026 日期後替換晚間"]]
    ]},
    { region: "那霸／南部｜首里・市場・南城・購物", rows: [
      ["活動", "首里城復興祭", ["none", "本次確定放棄"]],
      ["市場", "第一牧志公設市場", ["main", "11/6 入住那霸後"]],
      ["市場", "泊いゆまち魚市場", ["main", "11/7 早上"]],
      ["景點", "波上宮", ["main", "11/7 魚市場後"]],
      ["景點", "齋場御嶽／知念岬", ["main", "11/7 南部主線"]],
      ["景點", "奧武島", ["main", "11/7 天婦羅午餐"]],
      ["景點", "沖繩世界／玉泉洞", ["main", "11/7 下午"]],
      ["景點", "瀨長島", ["main", "11/7 夕陽"]],
      ["景點", "ASHIBINAA Outlet", ["option", "與瀨長島／幸福鬆餅二選一"]],
      ["美食", "幸福鬆餅", ["option", "需預約，與 Outlet 二選一"]],
      ["美食", "ポーたま", ["main", "11/8 早餐／機場"]]
    ]}
  ];

  window.extendedTripData = {
    plans: Object.fromEntries(Object.entries(built).map(([key, value]) => [key, value.plan])),
    enhancements: Object.fromEntries(Object.entries(built).map(([key, value]) => [key, value.enhancements])),
    matrix
  };
})();
