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
          ["15:30", "前往首里城公園，視官方節目趕上復興祭壓軸"],
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
          ["15:30", "前往首里城公園，視官方節目趕上復興祭壓軸"],
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
  }
};

const dayEnhancements = {
  a: [
    {
      route: ["那霸機場", "飯店寄放", "首里城", "金城町石疊道", "國際通"],
      addOns: ["時間夠再走龍潭池與首里杜館", "下雨可改壺屋陶器博物館"],
      food: [
        ["首里そば", "沖繩麵", "人氣店常提早售完，抵達日視時間彈性"],
        ["Jack's Steak House", "美式牛排", "那霸老字號，晚餐候位可先拿號碼牌"]
      ],
      photos: [
        ["assets/shuri-steps.jpg", "首里城", "王城與石階"],
        ["assets/naha-night.jpg", "國際通", "夜晚逛街吃島料理"],
        ["assets/jack-steak.png", "Jack's Steak", "那霸老字號牛排"]
      ],
      drive: "第一天不建議立刻取車；市區停車與首里活動交通較複雜，搭單軌、計程車更輕鬆。"
    },
    {
      route: ["取車", "齋場御嶽", "知念岬", "Cafe Curcuma", "Gangala 之谷／沖繩世界", "瀨長島"],
      addOns: ["預約 Gangala 導覽可取代沖繩世界", "雨天改 DMM Kariyushi 水族館", "傍晚到瀨長島拍白色階梯與飛機"],
      food: [
        ["Cafe Curcuma", "泰式料理＋太平洋海景", "社群常見的南城高台海景餐廳"],
        ["糸滿魚市場", "海鮮、生魚片", "想吃海鮮可在回那霸前繞入"]
      ],
      photos: [
        ["assets/gangala.jpg", "Gangala 之谷", "洞穴咖啡與森林導覽"],
        ["assets/umikaji.jpg", "瀨長島", "白色階梯與夕陽"],
        ["assets/dmm-aquarium.png", "DMM 水族館", "南部雨天替代"]
      ],
      drive: "南部景點停車相對友善；齋場御嶽需從停車場步行，鞋子別穿得太難走。"
    },
    {
      route: ["退房", "港川外人住宅", "北谷美國村", "座喜味城", "BANTA CAFE", "殘波岬", "萬座毛"],
      addOns: ["港川拍彩色老屋、吃黑糖可麗露", "BANTA CAFE 建議下午保留 60–90 分鐘", "日落可在殘波岬與萬座毛二選一"],
      food: [
        ["Seaside Cafe Hanon", "海景厚鬆餅", "北谷早餐或早午餐熱門"],
        ["BANTA CAFE", "海景飲品與輕食", "讀谷海邊座敷是社群熱門畫面"]
      ],
      photos: [
        ["assets/houki-boshi.webp", "港川外人住宅", "彩色小屋與甜點"],
        ["assets/american-village.jpg", "美濱美國村", "彩色街區與海景"],
        ["assets/banta-table.jpg", "BANTA CAFE", "海邊餐桌與彩色飲品"]
      ],
      drive: "這天是自駕最好玩的西海岸串聯；不要每站都停滿，北谷與 BANTA 擇一吃正餐即可。"
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
        ["assets/aquarium.jpg", "美麗海水族館", "黑潮之海鯨鯊"],
        ["assets/kouri-shrimp.jpg", "KOURI SHRIMP", "古宇利蝦蝦飯"],
        ["assets/nishikiya.jpg", "古宇利海鮮丼", "海膽與海葡萄看當日供應"]
      ],
      drive: "北部熱門點很分散。水族館開門就進、午餐避開 12 點尖峰，古宇利島停車再留緩衝。"
    },
    {
      route: ["飯店晨光", "真榮田岬", "琉球村", "道之驛嘉手納", "港川／PARCO CITY", "那霸還車"],
      addOns: ["天氣好可預約青之洞窟浮潛", "想拍海中道路可放棄港川改走東海岸", "回那霸前加 San-A PARCO CITY 採買"],
      food: [
        ["浜屋そば", "軟骨沖繩麵", "北谷海邊的人氣老店"],
        ["A&W 牧港店", "Root Beer＋漢堡", "復古 Drive-in 很適合自駕停靠"]
      ],
      photos: [
        ["assets/manzamo.jpg", "恩納海岸", "飯店退房前看海"],
        ["assets/american-depot.jpg", "北谷街景", "中部自由加點"],
        ["assets/houki-boshi.webp", "港川小店", "回那霸前的散步站"]
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
        ["assets/potama.png", "ポーたま", "沖繩經典早餐"],
        ["assets/naha-monorail.jpg", "那霸單軌", "市區前往機場"],
        ["assets/umikaji.jpg", "瀨長島", "若前幾天未去可留作回憶"]
      ],
      drive: "A 方案前一晚已還車，回程最安心；搭單軌不必再處理還車接駁。"
    }
  ],
  b: [
    {
      route: ["那霸機場", "飯店寄放", "首里城", "金城町石疊道", "國際通"],
      addOns: ["首里復興祭依當日節目調整", "晚餐後可逛屋台村"],
      food: [["首里そば", "沖繩麵", "人氣店常提早售完"], ["Jack's Steak House", "美式牛排", "那霸老字號"]],
      photos: [["assets/shuri-steps.jpg", "首里城", "抵達日王城散步"], ["assets/naha-night.jpg", "國際通", "夜市與島料理"], ["assets/jack-steak.png", "Jack's Steak", "老字號牛排"]],
      drive: "抵達日先不取車，避免市區停車與租車櫃台拖慢首里行程。"
    },
    {
      route: ["首里城", "金城町石疊道", "識名園", "壺屋通", "牧志市場", "波上宮"],
      addOns: ["識名園與首里同屬歷史線", "雨天可改縣立博物館美術館", "波之上海灘適合日落前抵達"],
      food: [["第一牧志公設市場", "現選海鮮料理", "先確認二樓代客料理方式"], ["ポーたま牧志店", "豬肉蛋飯糰", "邊走邊吃很方便"]],
      photos: [["assets/shuri-steps.jpg", "首里歷史區", "石階與紅瓦"], ["assets/naminoue.jpg", "波上宮", "市區海邊神社"], ["assets/potama.png", "ポーたま", "牧志人氣早餐"]],
      drive: "這天仍用單軌與計程車。隔天退房再取車，省一晚停車費。"
    },
    {
      route: ["取車退房", "齋場御嶽", "知念岬", "Gangala／沖繩世界", "瀨長島", "北谷入住"],
      addOns: ["雨天改 DMM 水族館", "想拍海中道路可取消沖繩世界", "瀨長島日落後再往北谷"],
      food: [["Cafe Curcuma", "泰式海景午餐", "南城社群熱門"], ["糸滿魚市場", "海鮮", "回程順路但不要逛太久"]],
      photos: [["assets/gangala.jpg", "Gangala 之谷", "洞穴與森林"], ["assets/umikaji.jpg", "瀨長島", "夕陽飛機景"], ["assets/american-village.jpg", "北谷", "入住後夜景"]],
      drive: "行李留車內時貴重物品務必隨身；南部景點結束後走高速或西海岸北上。"
    },
    {
      route: ["美麗海水族館", "備瀨福木林", "瀨底島", "百年古家大家", "古宇利島", "蝦蝦飯／海膽飯"],
      addOns: ["JUNGLIA 為整日替換案", "瀨底島與心形岩依體力二選一", "古宇利大橋南端展望點可先拍全景"],
      food: [["KOURI SHRIMP", "蒜香蝦蝦飯", "古宇利必吃"], ["古宇利島 錦屋", "海膽海葡萄丼", "依漁期與進貨"], ["百年古家 大家", "阿古豬", "建議預約"]],
      photos: [["assets/sesoko.webp", "瀨底島", "透明海色"], ["assets/kouri-shrimp.jpg", "蝦蝦飯", "古宇利人氣餐車"], ["assets/nishikiya.jpg", "海膽海鮮丼", "當日供應"]],
      drive: "北谷出發比恩納多約半小時，建議 07:30 前出發，古宇利回程直接走高速。"
    },
    {
      route: ["萬座毛", "真榮田岬", "琉球村", "座喜味城", "BANTA CAFE", "殘波岬", "美國村"],
      addOns: ["青之洞窟需事先預約", "BANTA 與土花土花擇一", "最後回北谷拍日落到夜景"],
      food: [["BANTA CAFE", "海景輕食", "讀谷熱門打卡"], ["Seaside Cafe Hanon", "海景厚鬆餅", "回北谷下午茶"], ["浜屋そば", "軟骨沖繩麵", "晚餐可吃"]],
      photos: [["assets/manzamo.jpg", "萬座毛", "恩納斷崖"], ["assets/banta-table.jpg", "BANTA", "海景餐桌"], ["assets/hanon-pancake.png", "Hanon", "草莓厚鬆餅"]],
      drive: "這天景點密集但距離短，最適合自由增減；把夕陽留給殘波岬或美國村其中一處。"
    },
    {
      route: ["北谷退房", "A&W 牧港", "還車", "那霸機場", "13:35 起飛"],
      addOns: ["09:15 前離開北谷", "還車、加油、接駁至少抓 60 分鐘"],
      food: [["A&W 牧港店", "漢堡＋Root Beer", "時間夠再停"], ["機場ポーたま", "豬肉蛋飯糰", "排隊長就直接略過"]],
      photos: [["assets/american-depot.jpg", "北谷晨光", "最後一次海邊散步"], ["assets/potama.png", "ポーたま", "機場人氣小吃"], ["assets/naha-monorail.jpg", "那霸機場", "返程日"]],
      drive: "B 方案回程最需要時間紀律；週日路況、加油與租車接駁都要留緩衝。"
    }
  ],
  c: [
    {
      route: ["那霸機場", "取車", "DMM 水族館／瀨長島", "美國村", "恩納入住"],
      addOns: ["晴天選瀨長島，雨天選 DMM", "美國村只留晚餐與夜景", "不要再加首里，否則抵達日過滿"],
      food: [["Seaside Cafe Hanon", "厚鬆餅", "下午抵達仍可排"], ["浜屋そば", "軟骨沖繩麵", "北谷晚餐人氣店"]],
      photos: [["assets/dmm-aquarium.png", "DMM 水族館", "雨天熱門新景點"], ["assets/umikaji.jpg", "瀨長島", "晴天夕陽"], ["assets/american-village.jpg", "美國村", "晚餐與夜景"]],
      drive: "取車後直接走南部或北谷二選一；20:00 前抵達恩納，第一晚不要繞太多點。"
    },
    {
      route: ["美麗海水族館", "備瀨福木林", "瀨底島", "百年古家大家", "古宇利大橋", "蝦蝦飯／海膽飯"],
      addOns: ["JUNGLIA 可整日取代本日", "古宇利海洋塔適合帶長輩", "心形岩與瀨底島依體力二選一"],
      food: [["KOURI SHRIMP", "蒜香蝦蝦飯", "古宇利人氣必吃"], ["古宇利島 錦屋", "海膽海葡萄丼", "當日有貨再點"], ["百年古家 大家", "阿古豬", "古宅庭園"]],
      photos: [["assets/aquarium.jpg", "美麗海", "鯨鯊"], ["assets/kouri-shrimp.jpg", "蝦蝦飯", "蒜香蝦與飯"], ["assets/nishikiya.jpg", "海膽海葡萄丼", "漁期限定感"]],
      drive: "住恩納可最早抵達北部景點；這是三方案中北部日最舒服的安排。"
    },
    {
      route: ["萬座毛", "真榮田岬", "琉球村", "座喜味城", "土花土花", "BANTA CAFE", "殘波岬"],
      addOns: ["青之洞窟浮潛需預約並看海況", "咖啡店二選一即可", "想玩新景點可整日改 JUNGLIA"],
      food: [["土花土花", "披薩與海景甜點", "陶器系海景咖啡"], ["BANTA CAFE", "海景輕食", "下午到夕陽最有氣氛"]],
      photos: [["assets/dokadoka.jpg", "土花土花", "恩納海景露台"], ["assets/banta-cafe.jpg", "BANTA CAFE", "海邊飲品"], ["assets/manzamo.jpg", "萬座毛", "恩納經典海岸"]],
      drive: "今天幾乎都在恩納與讀谷周邊，里程短，適合安排浮潛或在飯店多休息。"
    },
    {
      route: ["恩納退房", "海中道路／濱比嘉島", "齋場御嶽", "知念岬", "Gangala／沖繩世界", "瀨長島", "那霸"],
      addOns: ["東海岸版本車程較長，08:00 前出發", "不走海中道路就加 Cafe Curcuma", "雨天以 DMM＋Outlet iias 豐崎替代"],
      food: [["King Tacos", "塔可飯", "走海中道路可順吃"], ["Cafe Curcuma", "泰式海景午餐", "不走東海岸版本"]],
      photos: [["assets/hamahiga.webp", "濱比嘉島", "安靜島嶼與海色"], ["assets/gangala.jpg", "Gangala 之谷", "南部森林"], ["assets/umikaji.jpg", "瀨長島", "回那霸前夕陽"]],
      drive: "這是 C 方案最有公路旅行感的一天；若不想開太久，直接走南城線即可。"
    },
    {
      route: ["首里城", "金城町石疊道", "識名園", "壺屋通", "牧志市場", "波上宮", "國際通"],
      addOns: ["雨天加縣立博物館美術館", "喜歡咖啡可排浮島通", "最後採買集中在平和通與國際通"],
      food: [["牧志公設市場", "海鮮與島料理", "午餐主場"], ["Jack's Steak House", "美式牛排", "最後晚餐"], ["ポーたま", "豬肉蛋飯糰", "早餐或點心"]],
      photos: [["assets/shuri-steps.jpg", "首里城", "王城歷史"], ["assets/naminoue.jpg", "波上宮", "海邊神社"], ["assets/jack-steak.png", "Jack's Steak", "最後晚餐"]],
      drive: "這天已無需租車；用單軌＋計程車，省停車時間，也能放心在市場喝一杯。"
    },
    {
      route: ["飯店早餐", "ポーたま", "那霸機場", "13:35 起飛"],
      addOns: ["10:15 離開市區", "機場商店留 60–90 分鐘"],
      food: [["ポーたま", "豬肉蛋飯糰", "方便當早餐"], ["機場沖繩麵", "最後一餐", "看報到時間決定"]],
      photos: [["assets/potama.png", "ポーたま", "沖繩早餐"], ["assets/naha-monorail.jpg", "那霸單軌", "前往機場"], ["assets/naha-night.jpg", "那霸回憶", "城市慢旅收尾"]],
      drive: "C 方案已在前兩天還車，最後一天和 A 一樣從容。"
    }
  ]
};

const dayList = document.querySelector("#dayList");
const routeMap = document.querySelector("#routeMap");
const routeTitle = document.querySelector("#routeTitle");
const routeDescription = document.querySelector("#routeDescription");
const planButtons = document.querySelectorAll("[data-plan]");
const header = document.querySelector(".site-header");

let currentPlan = "a";

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

function renderDays(plan) {
  const enhancements = dayEnhancements[currentPlan];
  dayList.innerHTML = plan.days.map((day, index) => {
    const extra = enhancements[index];
    const photos = extra?.photos || [[day.image, day.label, day.imageAlt]];
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
        <div class="drive-route" aria-label="當日自駕路線">
          ${extra.route.map((stop, stopIndex) => `<span>${stopIndex + 1}. ${stop}</span>`).join("")}
        </div>
        <div class="timeline">
          ${day.times.map(item => `<time>${item[0]}</time><span>${item[1]}</span>`).join("")}
        </div>
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
      <div class="day-gallery">
        ${photos.map(photo => `
          <figure>
            <img src="${photo[0]}" alt="${photo[2]}" loading="lazy">
            <figcaption><b>${photo[1]}</b><span>${photo[2]}</span></figcaption>
          </figure>
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

selectPlan(currentPlan);
