import { TravelPlan } from "@/types/itinerary";

export const CURATED_PLANS: TravelPlan[] = [
  {
    id: "curated_yanji_hunchun_6d",
    meta: {
      tripTitle: "延吉 + 珲春 6天5晚 · 朝鲜族美食与边陲风情全景",
      destinations: ["延吉", "珲春"],
      durationDays: 6,
      travelerProfile: ["长辈舒享", "免自驾包车", "地道美食", "中朝俄边境"],
      budgetTier: "comfort",
      transportMode: "charter_taxi",
      generatedAt: "2026-09-28T12:00:00.000Z",
      coverImage: "/images/spot_yj_danmu.jpg",
      isPublic: true,
      viewsCount: 1680,
      likesCount: 142,
    },
    overview: {
      highlights: [
        "首日彻底零行程休整，专车接送希尔顿欢朋酒店，品尝温润养胃元奶奶包肉",
        "延吉与珲春双重俄罗斯鲜活帝王蟹盛宴（珲春海鲜街源头活蒸 & 延吉震海贝烤贝）",
        "百年清代延吉道尹公署古建幽静寻踪，配正宗梅花炭火烤肉品质代烤包厢",
        "防川龙虎阁直梯登顶一眼望三国（中朝俄交界处，俯瞰图们江入海口与日本海）",
        "清晨漫步水上市场早市烟火，西市场朝鲜族特产官方顺丰直邮到家零负重"
      ],
      logisticsSummary: "全程坚持'免自驾、门到门专车接驳、纯平硬化步道、严格两小时午后酒店深度午休'四大适老舒适原则。延吉市内以专车/出租车起步价随叫随到为主，珲春边境日采用7座专属商务包车门到门零换乘。",
      weatherAndPacking: [
        "金秋早晚温差较大（8℃ - 20℃），建议备防风冲锋衣或保暖轻羽绒外套",
        "前往防川/图们边境必须随身携带中国二代身份证原件（边检实名查验）",
        "备长辈温水保温杯及常用肠胃温和养护品"
      ],
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 边陲初抵 & 希尔顿欢朋彻底休整 & 元奶奶包肉",
        theme: "初抵延边 · 彻底零行程休整 · 养胃温润晚膳",
        paceScore: "relaxed",
        mapConfig: {
          center: [42.9075, 129.5089],
          zoom: 13,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "15:30 - 18:00",
          reason: "抵延后先入住酒店安顿行李，长辈更衣洗漱卧床小憩，彻底消除舟车疲惫",
        },
        timeline: [
          {
            type: "activity",
            id: "act_yj_1_1",
            name: "延吉西站接站 & 入住延吉中心希尔顿欢朋酒店",
            category: "rest",
            timeSlot: "15:00 - 15:30",
            durationMinutes: 30,
            coordinates: [42.8828, 129.4514],
            dropOffPoint: "延吉西站落客大平台 ➔ 延吉希尔顿欢朋酒店大堂门前",
            openingHours: "全天",
            reservationRequired: false,
            photoTip: "延吉西站二层落客大平台，以朝鲜族传统蓝色飞檐挑顶与站名题字为大背景",
            image: "/images/spot_yj_weststation.jpg",
            elderKidNotes: "西站出站直达专车接送区，司机协助搬运全部大件行李，酒店全平梯进房",
            description: "高铁平稳抵达延吉西站，专车司机门到门稳妥迎接，直奔位于市中心局子街的希尔顿欢朋酒店。",
          },
          {
            type: "transit",
            fromStop: "延吉西站",
            toStop: "延吉中心希尔顿欢朋酒店",
            mode: "charter",
            distanceKm: 8.5,
            estimatedMinutes: 20,
            navigationDetail: "经长白西路直达延吉市中心局子街，平稳顺畅。",
          },
          {
            type: "activity",
            id: "act_yj_1_2",
            name: "【彻底休整】进房更衣洗漱 · 卧床小憩调养",
            category: "rest",
            timeSlot: "15:30 - 18:00",
            durationMinutes: 150,
            coordinates: [42.9075, 129.5089],
            dropOffPoint: "希尔顿欢朋酒店客房",
            openingHours: "全天",
            reservationRequired: false,
            photoTip: "客房落地窗前温馨茶台，静卧小憩，舒适放松",
            image: "/images/spot_yj_hotel.jpg",
            elderKidNotes: "首日坚决不排景点，烧一壶温热大麦茶，拉上遮光窗帘深度静卧休养",
            description: "洗去车马疲劳，适应延吉北方秋高气爽气候，为后续五天游程充沛蓄能。",
          },
          {
            type: "activity",
            id: "act_yj_1_3",
            name: "延边大学双语网红弹幕墙（夜景霓虹）",
            category: "photo",
            timeSlot: "19:30 - 20:30",
            durationMinutes: 60,
            coordinates: [42.9142, 129.4883],
            dropOffPoint: "延大正门对面中关村大厦路侧即停即走区",
            openingHours: "全天（17:30起亮灯）",
            reservationRequired: false,
            photoTip: "手持延吉双语咖啡杯，对焦后方汉朝双语霓虹招牌建筑大立面",
            image: "/images/spot_yj_danmu.jpg",
            elderKidNotes: "纯平人行道，人多时可就近在长椅坐下观景拍照，无需长距离步行",
            description: "延吉标志性城市夜景，密密麻麻的汉朝双语霓虹招牌在夜幕中熠熠生辉。",
          },
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "老字号元奶奶包肉（总店）与热海鲜大酱汤",
            cuisineStyle: "朝鲜族传统包肉料理 · 温润去脂",
            recommendedDishes: ["招牌传统包肉（特选五花肉蒸透去脂）", "热滚海鲜大酱汤", "软糯黑米饭", "爽脆紫苏叶"],
            elderKidSuitability: "五花肉蒸透去脂极度软烂，入口即化毫无油腻，配滚热大酱汤温润开胃",
            perPersonBudget: "¥80 - ¥100 / 人",
            addressOrDropOff: "距希尔顿欢朋酒店步行仅3分钟，出租车亦可直达门口",
            image: "/images/spot_yj_baorou.jpg",
            photoTip: "软烂薄切热五花肉木托盘与翠绿紫苏叶、滚热海鲜大酱汤同框俯拍",
            alternatives: [
              {
                restaurantName: "希尔顿欢朋酒店中餐厅 / 客房送餐",
                cuisineStyle: "星级温润热食营养膳",
                recommendedDishes: ["高丽参土鸡滋补热砂锅粥", "现熬海鲜豆腐羹", "清炒时令鲜蔬"],
                elderKidSuitability: "完全不出酒店大门，穿睡衣即可在房内静享热膳",
                perPersonBudget: "¥90 - ¥120 / 人",
                image: "/images/spot_yj_hotel.jpg",
                photoTip: "客房茶几前精致暖胃砂锅粥与落地窗夜景同框",
              }
            ],
          },
        },
        dailyTips: [
          "首日务必保证长辈充分休息，不要临时增加任何景点",
          "延吉出租车起步价6元，市区各处打车极为便利",
        ],
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 文博学府 · 延边博物馆 & 欢朋午休 & 帽儿山木栈道 & 丰茂烤串",
        theme: "文博民俗展陈 · 参鸡汤滋补 · 森林木栈道慢步",
        paceScore: "relaxed",
        mapConfig: {
          center: [42.8951, 129.5126],
          zoom: 13,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:15 - 15:15",
          reason: "午餐后准时回酒店卧床小憩两小时，养精蓄锐",
        },
        timeline: [
          {
            type: "activity",
            id: "act_yj_2_1",
            name: "延边博物馆（国家一级博物馆 · 朝鲜族民俗展）",
            category: "culture",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [42.9098, 129.4589],
            dropOffPoint: "延边博物馆正南门地下无障碍落客区，乘电梯直达1F序厅",
            openingHours: "09:00 - 16:30（周一闭馆）",
            reservationRequired: true,
            reservationChannel: "微信公众号【延边博物馆】提前3天实名免费预约",
            photoTip: "民俗展厅全比例还原传统朝鲜族草房内景、花甲寿宴复原场景",
            image: "/images/spot_yj_museum.jpg",
            elderKidNotes: "全馆无障碍平坡与高速电梯，服务台可免费借用轻便轮椅",
            description: "国家一级博物馆，生动呈现朝鲜族迁徙史、农耕礼俗与非遗民俗，讲解亲切通俗。",
          },
          {
            type: "activity",
            id: "act_yj_2_2",
            name: "【调养】希尔顿欢朋酒店深度午休（两小时卧床充电）",
            category: "rest",
            timeSlot: "13:15 - 15:15",
            durationMinutes: 120,
            coordinates: [42.9075, 129.5089],
            dropOffPoint: "酒店电梯直达客房",
            openingHours: "全天",
            reservationRequired: false,
            photoTip: "欢朋客房午后温馨安歇",
            image: "/images/spot_yj_hotel.jpg",
            elderKidNotes: "严格执行两小时午间静卧，长辈腿力与精力完全恢复",
            description: "避免正午强光和疲倦，回房安卧休整，舒心养生。",
          },
          {
            type: "activity",
            id: "act_yj_2_3",
            name: "帽儿山国家森林公园 · 纯平木栈道慢步",
            category: "nature",
            timeSlot: "15:45 - 17:15",
            durationMinutes: 90,
            coordinates: [42.8425, 129.4892],
            dropOffPoint: "帽儿山景区正门生态停车场平步下客区",
            openingHours: "全天开放（免门票）",
            reservationRequired: false,
            photoTip: "金秋金黄落叶松林海木栈道上，长辈漫步林荫与远山同框",
            image: "/images/spot_yj_maoershan.jpg",
            elderKidNotes: "只走平坦生态木栈道平地段，绝不登高台阶，走走停停吸氧怡情",
            description: "国家级森林公园，负氧离子充沛，金秋落叶松林一片金黄，步道宽阔舒适。",
          },
          {
            type: "activity",
            id: "act_yj_2_4",
            name: "延边大学求真楼大飞檐 & 学府林荫漫步",
            category: "photo",
            timeSlot: "17:30 - 18:30",
            durationMinutes: 60,
            coordinates: [42.9142, 129.4883],
            dropOffPoint: "延边大学正门路侧平坦下客区",
            openingHours: "全天外景",
            reservationRequired: false,
            photoTip: "校园宽阔银杏大道正中，仰拍求真楼传统朝鲜族飞檐大挑顶",
            image: "/images/spot_yj_univ.jpg",
            elderKidNotes: "校园主干道地势纯平，两旁树荫浓郁，慢步赏景极为惬意",
            description: "著名高等学府，主楼融合长白山天池大飞檐造型，双语牌匾巍峨壮观。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "大朴家石锅参鸡汤（总店）",
            cuisineStyle: "朝鲜族传统慢炖高丽参鸡汤",
            recommendedDishes: ["传统原汁高丽参鸡汤（整只童子鸡炖煮）", "糯米鸡肚滋补热粥", "鲜蒸土豆饺子"],
            elderKidSuitability: "鸡肉慢炖酥烂骨肉分离，汤汁醇厚温润，长辈补气暖胃首选",
            perPersonBudget: "¥70 - ¥90 / 人",
            addressOrDropOff: "延吉市天池路核心区，门前平坦下客",
            image: "/images/spot_yj_samgyetang.jpg",
            photoTip: "滚沸黑石锅中整只童子鸡开剖，糯米红枣与高丽参须热气升腾特写",
            alternatives: [
              {
                restaurantName: "顺姬冷面旗舰店（暖胃玉米温面）",
                cuisineStyle: "现煮热汤玉米细面与香酥锅包肉",
                recommendedDishes: ["招牌玉米温面", "老式锅包肉", "明太鱼热豆腐汤"],
                elderKidSuitability: "热牛骨汤面温和暖胃，面条细软爽滑极易咀嚼",
                perPersonBudget: "¥45 - ¥60 / 人",
                image: "/images/spot_yj_wenmian.jpg",
                photoTip: "金黄玉米温面在浓白牛骨高汤中舒展，香酥锅包肉同框",
              }
            ],
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "丰茂烤串（公园路旗舰店 · 自动旋转无烟烤架）",
            cuisineStyle: "延吉烤串非遗老字号 · 全程无烟自动化",
            recommendedDishes: ["现切精品苏尼特羊肉串", "特级黄牛牛排串", "现烤面包干", "温拌冷面"],
            elderKidSuitability: "现代智能无烟下排风系统，衣物零油烟，自动旋转无须动手，烤肉鲜嫩软烂",
            perPersonBudget: "¥85 - ¥115 / 人",
            addressOrDropOff: "公园路核心商圈，店门有专属无障碍平道落客",
            image: "/images/spot_yj_fengmao.jpg",
            photoTip: "自动旋转烤架上金黄羊肉串受热滋滋冒油、炭火微红诱人特写",
            alternatives: [
              {
                restaurantName: "考世茂朝鲜族传统民俗正宴",
                cuisineStyle: "民俗正宗宴席 · 软烂清淡",
                recommendedDishes: ["传统宫廷包肉", "清蒸明太鱼", "黄豆大酱汤"],
                elderKidSuitability: "环境古色古香，独立包厢，菜品软烂清淡少油",
                perPersonBudget: "¥100 - ¥130 / 人",
                image: "/images/spot_yj_baorou.jpg",
                photoTip: "朝鲜族传统木桌上精致铜碗餐具与温和宴席全景",
              }
            ],
          },
        },
        dailyTips: [
          "延边博物馆周一闭馆，提前在小程序实名刷身份证入馆",
          "帽儿山景区不乘登山索道，只漫步平缓林海木栈道即可",
        ],
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 古建烤肉 · 道尹公署百年古建 & 梅花炭火烤肉品质包厢 & 人民公园古榆 & 顺姬温面",
        theme: "市内文脉寻踪 · 特色烤肉盛宴 · 古榆漫步 · 顺姬温面",
        paceScore: "relaxed",
        mapConfig: {
          center: [42.9065, 129.5080],
          zoom: 13,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:15 - 15:15",
          reason: "午间回希尔顿欢朋酒店深度休整两小时，安神醒脑",
        },
        timeline: [
          {
            type: "activity",
            id: "act_yj_3_1",
            name: "延吉道尹公署旧址（百年清末古建群落 · 幽静文化寻踪）",
            category: "culture",
            timeSlot: "09:30 - 11:00",
            durationMinutes: 90,
            coordinates: [42.9065, 129.5080],
            dropOffPoint: "网约车直达南营街正门入口，门口平坦路缘下客",
            openingHours: "09:00 - 16:30（免门票）",
            reservationRequired: false,
            photoTip: "道尹公署正院青砖照壁与主堂飞檐前，古朴石阶与苍翠古榆环绕",
            image: "/images/spot_yj_daoyin.jpg",
            elderKidNotes: "四合院内部纯平青石板铺设，全程零坡度台阶，院内设遮阳石凳",
            description: "延吉市内现存唯一的清代官方官署建筑群。青砖灰瓦、四合院落布局，飞檐斗拱掩映在古树之中，安详清幽。",
            alternatives: [
              {
                name: "延边大学求真楼大飞檐 & 晨光林荫漫步",
                description: "清晨学府静谧少人，长白山天池传统大飞檐造型，汉朝双语建筑，平整林荫路从容拍照。",
                photoTip: "求真楼正门广场仰拍飞檐斗拱，晨曦透过银杏树洒在红砖墙面",
                image: "/images/spot_yj_univ.jpg",
                dropOffPoint: "延边大学正门路侧平坦下客区",
                durationMinutes: 90,
              },
              {
                name: "延吉金达莱民俗广场（城市标志金达莱花雕塑）",
                description: "纯平开阔城市广场，标志性金达莱花雕塑，近距离观摩当地朝鲜族长辈传统晨练与门球。",
                photoTip: "巨型粉红金达莱花雕塑前，以蓝天和传统图腾柱为大背景",
                image: "/images/spot_yj_jindalai.jpg",
                dropOffPoint: "金达莱广场西侧辅道平步即停即走区",
                durationMinutes: 60,
              }
            ],
          },
          {
            type: "activity",
            id: "act_yj_3_2",
            name: "【调养】返回希尔顿欢朋酒店深度午休（两小时安神静卧）",
            category: "rest",
            timeSlot: "13:15 - 15:15",
            durationMinutes: 120,
            coordinates: [42.9075, 129.5089],
            dropOffPoint: "酒店大堂电梯直达客房",
            openingHours: "全天",
            reservationRequired: false,
            photoTip: "欢朋客房午后舒适小憩，泡温热大麦茶",
            image: "/images/spot_yj_hotel.jpg",
            elderKidNotes: "饭后慢步回房，拉上窗帘安静休息两小时，彻底恢复充沛精力",
            description: "严格遵守每日午后深度休整原则，让长辈拥有高品质的度假节奏。",
          },
          {
            type: "activity",
            id: "act_yj_3_3",
            name: "延吉人民公园百年古榆林海漫步",
            category: "leisure",
            timeSlot: "15:45 - 17:00",
            durationMinutes: 75,
            coordinates: [42.9080, 129.5040],
            dropOffPoint: "人民公园南门开阔落客区，进门即是百年古榆绿荫道",
            openingHours: "全天开放（免门票）",
            reservationRequired: false,
            photoTip: "参天古榆金秋密林步道，长辈在遮阳休闲木椅上品茶小憩",
            image: "/images/spot_yj_park.jpg",
            elderKidNotes: "园内道路全部硬化纯平，随处可见舒适长椅与无障碍平坡公厕",
            description: "延吉最负盛名的城市绿洲，园内植被丰茂、百年古榆参天，空气温润清新。",
          },
          {
            type: "activity",
            id: "act_yj_3_4",
            name: "劳顶笨咖啡总店（招牌温热五味子茶 + 细腻纯牛奶打糕雪冰）",
            category: "food",
            timeSlot: "17:00 - 18:00",
            durationMinutes: 60,
            coordinates: [42.9080, 129.5040],
            dropOffPoint: "海兰路总店门前平坦下客",
            openingHours: "09:00 - 22:00",
            reservationRequired: false,
            photoTip: "热气袅袅的红亮五味子茶与堆满金黄黄豆粉的打糕雪冰同框",
            image: "/images/spot_yj_coffee.jpg",
            elderKidNotes: "店内环境开阔宽敞，舒适沙发软座，温热五味子茶生津润肺，长辈赞不绝口",
            description: "延吉慢咖啡鼻祖品牌，环境清幽舒适，特别为长辈安排传统养生温热茶饮。",
            alternatives: [
              {
                name: "后浪咖啡 / 佳温咖啡（韩屋原木风榻榻米雅座）",
                description: "传统与现代交融，环境清雅不吵闹，为长辈点选热米露与热大麦茶，慢享悠闲午后时光。",
                photoTip: "韩屋木质窗棂前，青瓷茶杯盛装温热米露，光影静谧",
                image: "/images/spot_yj_coffee.jpg",
                dropOffPoint: "店门前平坦下客区",
                durationMinutes: 60,
              }
            ],
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "梅花炭火烤肉品质包厢（延吉老字号名店）",
            cuisineStyle: "正宗朝鲜族无烟炭火烤肉 · 服务生全程桌边代烤",
            recommendedDishes: ["特选雪花牛排肉", "牛肋条（肥瘦相间，外焦里嫩）", "鲜拌苏子叶", "温热大酱汤", "软糯石锅饭"],
            elderKidSuitability: "独立恒温无烟空调包厢，服务生全程协助掌握火候代烤剪肉，黄牛肉软嫩多汁免动牙力",
            perPersonBudget: "¥110 - ¥140 / 人",
            addressOrDropOff: "延吉市局子街核心商圈，店门有专属落客车位",
            image: "/images/spot_yj_bbq.jpg",
            photoTip: "梅花炭火烤架上雪花牛肉两面微焦、剪肉夹起热气蒸腾特写",
            alternatives: [
              {
                restaurantName: "万兴佳黑牛烤肉（局子街核心区 · 顶级原切雪花）",
                cuisineStyle: "顶级延边黄牛原切黑牛肉排",
                recommendedDishes: ["厚切黑牛雪花大排", "原味牛五花", "现调苏子叶拼盘"],
                elderKidSuitability: "精选延边高品质雪花黑牛，厚切大理石纹理，炭火逼出油脂香气，肉汁丰润鲜香",
                perPersonBudget: "¥130 - ¥160 / 人",
                image: "/images/spot_yj_bbq.jpg",
                photoTip: "厚切大理石花纹原切牛肉排在烤架上滋滋作响",
              },
              {
                restaurantName: "白玉传统烤肉 / 百济烤肉（民族传统秘制风味）",
                cuisineStyle: "经典民族传统秘制酱汁烤肉",
                recommendedDishes: ["秘制烤牛肉", "原味牛排肉", "传统冷面"],
                elderKidSuitability: "几十年民族传统秘制酱汁轻腌，肉质鲜嫩入味，排风极佳，经典地道烤肉风情",
                perPersonBudget: "¥100 - ¥130 / 人",
                image: "/images/spot_yj_bbq.jpg",
                photoTip: "铜盘烤肉配秘制蘸料与新鲜紫苏叶包肉特写",
              }
            ],
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "顺姬冷面旗舰店（招牌现煮热玉米温面）",
            cuisineStyle: "暖胃玉米温面老字号 · 香酥锅包肉",
            recommendedDishes: ["招牌热玉米温面", "老式酥脆锅包肉", "现包大肉馅温和土豆饺子"],
            elderKidSuitability: "热牛骨慢熬浓汤现煮玉米细面，热气腾腾暖胃无刺激，极其适口",
            perPersonBudget: "¥45 - ¥60 / 人",
            addressOrDropOff: "顺姬冷面总店门前出租车即停即走",
            image: "/images/spot_yj_wenmian.jpg",
            photoTip: "大碗热气腾腾玉米温面与金黄酥脆锅包肉同桌俯拍",
          },
        },
        dailyTips: [
          "梅花炭火烤肉品质包厢建议提前电话预约，避开黄金周高峰",
          "人民公园漫步后就近在劳顶笨咖啡安坐，五味子茶酸甜适口滋补安神",
        ],
      },
      {
        dayNumber: 4,
        dateOrLabel: "Day 4 · 边境风情 · 珲春防川三国交界 & 俄罗斯活蒸帝王蟹盛宴 & 欢朋休整",
        theme: "中朝俄三国交界 · 龙虎阁直梯登高 · 珲春源头活蒸帝王蟹",
        paceScore: "moderate",
        mapConfig: {
          center: [42.8687, 130.3644],
          zoom: 11,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "16:00 - 18:00",
          reason: "自珲春返抵延吉后立即回希尔顿欢朋酒店深度休整品茗，消除车程疲惫",
        },
        timeline: [
          {
            type: "activity",
            id: "act_yj_4_1",
            name: "7座商务专车门到门直达珲春 ➔ 防川风景区",
            category: "nature",
            timeSlot: "08:30 - 10:30",
            durationMinutes: 120,
            coordinates: [42.8687, 130.3644],
            dropOffPoint: "希尔顿欢朋酒店大堂门前 ➔ 防川景区游客中心",
            openingHours: "全天运行",
            reservationRequired: false,
            photoTip: "防川沿江公路图们江边境风景线，车内抓拍宽阔湿地与远山",
            image: "/images/spot_yj_weststation.jpg",
            elderKidNotes: "7座商务专车一车到底零换乘，行李放车上，长辈在车内舒服小憩",
            description: "专车经珲乌高速直奔我国唯一中朝俄三国交界边陲重镇珲春，沿途公路开阔平坦。",
          },
          {
            type: "activity",
            id: "act_yj_4_2",
            name: "防川风景名胜区 · 龙虎阁直梯登高“一眼望三国”",
            category: "nature",
            timeSlot: "10:30 - 12:00",
            durationMinutes: 90,
            coordinates: [42.4289, 130.6358],
            dropOffPoint: "防川游客中心换乘大巴 ➔ 龙虎阁主楼台阶前落客区",
            openingHours: "08:30 - 16:30",
            reservationRequired: true,
            reservationChannel: "美团 / 携程或景区现场实名购票（门票含观光车¥78，长辈半价或免票）",
            photoTip: "12层观景台向南俯瞰：左侧俄罗斯哈桑镇铁路桥、右侧朝鲜豆满江里、正中图们江浩荡出海",
            image: "/images/spot_yj_fangchuan.jpg",
            elderKidNotes: "龙虎阁内配备高速观光直达大电梯直达12F顶层观景台，长辈零台阶登高",
            description: "国家著名地理地标，伫立阁顶，三国风光尽收眼底，图们江浩荡奔流注入日本海。",
            alternatives: [
              {
                name: "图们边境口岸国门 & 86号界碑 + 日光山森林俯瞰",
                description: "专车车程仅45分钟，超低位移。平视对岸朝鲜南阳市，下午从容回延吉深度午休。",
                photoTip: "图们口岸巍峨国门与中朝跨江铁路大桥同框，背景是朝鲜群山",
                image: "/images/spot_yj_tumen.jpg",
                dropOffPoint: "图们口岸游客中心广场落客区",
                durationMinutes: 90,
              }
            ],
          },
          {
            type: "activity",
            id: "act_yj_4_3",
            name: "返回延吉希尔顿欢朋酒店深度休整品茗",
            category: "rest",
            timeSlot: "16:00 - 18:00",
            durationMinutes: 120,
            coordinates: [42.9075, 129.5089],
            dropOffPoint: "希尔顿欢朋酒店大堂",
            openingHours: "全天",
            reservationRequired: false,
            photoTip: "客房窗前温暖茶台静卧休养",
            image: "/images/spot_yj_hotel.jpg",
            elderKidNotes: "往返边境后彻底静养两小时，泡一壶热茶，舒缓腿脚",
            description: "午后返回延吉酒店深度休整充电，确保长辈体力充沛、精神饱满。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "珲春海鲜街老牌海鲜坊（俄罗斯鲜活清蒸帝王蟹盛宴）",
            cuisineStyle: "源头中俄边贸生猛海鲜直运 · 源头活蒸帝王蟹",
            recommendedDishes: ["整只俄罗斯鲜活清蒸帝王蟹（现场活捞现蒸）", "原汁蟹膏温润海鲜粥", "蒜蓉清蒸深海板蟹", "清甜温热海鲜豆腐汤"],
            elderKidSuitability: "【坚守第一顿帝王蟹】源头活蟹肉质极其鲜美细嫩，高蛋白零刺激无油腻，蟹膏粥温润养胃",
            perPersonBudget: "¥240 - ¥300 / 人",
            addressOrDropOff: "珲春市海鲜美食街核心段，专车门到门直接停在店门前",
            image: "/images/spot_yj_kingcrab.jpg",
            photoTip: "整只蒸熟通红的大帝王蟹端上桌，蟹腿粗壮剪开露出雪白紧实蟹肉特写",
            alternatives: [
              {
                restaurantName: "珲春海鲜街深海板蟹/红雪蟹双拼宴",
                cuisineStyle: "深海活板蟹清蒸双拼",
                recommendedDishes: ["清蒸深海活板蟹", "红雪蟹原汁蒸", "蟹肉拌饭"],
                elderKidSuitability: "肉质如丝般细嫩鲜甜，分量更轻盈温和，极适宜清淡饮食长辈",
                perPersonBudget: "¥180 - ¥220 / 人",
                image: "/images/spot_yj_kingcrab.jpg",
                photoTip: "大圆盘上清蒸板蟹腿整齐排开，肉质晶莹鲜甜",
              }
            ],
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "全州拌饭（延吉总店）/ 元奶奶包肉",
            cuisineStyle: "地道温润朝鲜族热食料理",
            recommendedDishes: ["传统石锅拌饭（配料单装不辣）", "高丽参滋补鸡汤", "明太鱼豆腐汤"],
            elderKidSuitability: "饭菜温和清润，蔬菜蛋白质搭配全面，暖胃舒服",
            perPersonBudget: "¥60 - ¥80 / 人",
            addressOrDropOff: "延吉市局子街核心区，出租车起步价即达",
            image: "/images/spot_yj_baorou.jpg",
            photoTip: "滋滋作响的热石锅拌饭与温热参鸡汤同桌特写",
          },
        },
        dailyTips: [
          "前往防川沿途需经过边境检查站，长辈务必随身携带中国二代身份证原件",
          "在珲春海鲜街挑选帝王蟹时，选择生猛活跃、腿部捏起来紧实饱满的活蟹",
        ],
      },
      {
        dayNumber: 5,
        dateOrLabel: "Day 5 · 集市蟹宴 · 水上市场烟火 · 西市场特产直邮 · 震海贝活蒸帝王蟹惜别宴",
        theme: "晨曦早市烟火 · 民族特产顺丰直邮 · 延吉第二顿活蒸帝王蟹盛宴",
        paceScore: "relaxed",
        mapConfig: {
          center: [42.9065, 129.5080],
          zoom: 13,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:15 - 15:15",
          reason: "午间回希尔顿欢朋酒店卧床深度休整两小时，为傍晚水岸漫步与盛大蟹宴蓄能",
        },
        timeline: [
          {
            type: "activity",
            id: "act_yj_5_1",
            name: "延吉水上市场清晨烟火市集（06:30 - 08:30）",
            category: "food",
            timeSlot: "07:00 - 08:30",
            durationMinutes: 90,
            coordinates: [42.8930, 129.5080],
            dropOffPoint: "水上市场东门落客区，下车即进平坦步行街",
            openingHours: "05:00 - 08:30（早市）",
            reservationRequired: false,
            photoTip: "现打打糕摊位前，木槌重重砸下热气腾腾年糕米、撒上金黄黄豆粉的市井特写",
            image: "/images/spot_yj_watermarket.jpg",
            elderKidNotes: "清晨空气清新，市场主干道平坦，给长辈买现做温热黄豆面打糕与热豆浆品尝",
            description: "延吉最地道的市井烟火晨市，聚集了朝鲜族传统打糕、米肠、泡菜与各色时令山珍。",
          },
          {
            type: "activity",
            id: "act_yj_5_2",
            name: "延吉西市场（民族特产汇聚 · 顺丰直邮到家零负重）",
            category: "culture",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [42.9080, 129.5080],
            dropOffPoint: "西市场正门无障碍电梯落客区",
            openingHours: "08:30 - 17:00",
            reservationRequired: false,
            photoTip: "西市场一楼特色大厅整齐码放的延边苹果梨、长白山黑木耳与红亮泡菜坛",
            image: "/images/spot_yj_westmarket.jpg",
            elderKidNotes: "现代多层商厦配备扶梯与无障碍直梯，官方顺丰快递驻点现场装箱直邮，无需手提行李",
            description: "延边最大的特产名品集散地，椴木黑木耳、正宗苹果梨、明太鱼干琳琅满目，质量上乘。",
            alternatives: [
              {
                name: "延吉百货大楼特产专柜（高品质包装礼盒选购）",
                description: "老字号百货大楼，特产专柜品质严选，包装典雅精致，环境更加宽敞安静舒适。",
                photoTip: "延吉百货大楼精装长白山特产展柜前，典雅双语包装展示",
                image: "/images/spot_yj_westmarket.jpg",
                dropOffPoint: "延吉百货大楼正门落客通道",
                durationMinutes: 90,
              }
            ],
          },
          {
            type: "activity",
            id: "act_yj_5_3",
            name: "【调养】希尔顿欢朋酒店深度午休（两小时安神静卧）",
            category: "rest",
            timeSlot: "13:15 - 15:15",
            durationMinutes: 120,
            coordinates: [42.9075, 129.5089],
            dropOffPoint: "酒店电梯直达客房",
            openingHours: "全天",
            reservationRequired: false,
            photoTip: "客房窗前温暖静卧充电",
            image: "/images/spot_yj_hotel.jpg",
            elderKidNotes: "上午采选特产后中午回房平卧放松，卸去疲惫，下午神采奕奕",
            description: "午后准时回酒店卧床休养两小时，保证长辈天天充满元气活力。",
          },
          {
            type: "activity",
            id: "act_yj_5_4",
            name: "布尔哈通河畔滨水步道 · 金秋水岸晚霞漫步",
            category: "leisure",
            timeSlot: "16:00 - 17:30",
            durationMinutes: 90,
            coordinates: [42.9065, 129.5080],
            dropOffPoint: "天池大桥北端滨河景观带路缘落客区",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "天池大桥东侧亲水平台上，以现代化斜拉索桥与金色江面水岸晚霞为大背景",
            image: "/images/spot_yj_burhatong.jpg",
            elderKidNotes: "纯平滨河木栈道无台阶，两岸垂柳与杨树一片金黄，江风拂面十分惬意",
            description: "穿城而过的延吉母亲河，金秋时节两岸五彩斑斓，水鸟贴着波光掠过，晚霞静美。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "兴豆饭店老字号（黑豆炸酱面与香酥软炸肉）",
            cuisineStyle: "延吉几十年街坊老菜馆",
            recommendedDishes: ["招牌黑豆炸酱面（现拉细面，酱香微甜）", "香酥软炸肉（外酥里嫩，肉汁饱满）", "热豆腐大酱汤"],
            elderKidSuitability: "现拉现煮面条细软爽滑极易咀嚼，大酱汤温润扎实，长辈满意度极高",
            perPersonBudget: "¥45 - ¥60 / 人",
            addressOrDropOff: "新兴街总店，出租车直达门口",
            image: "/images/spot_yj_wenmian.jpg",
            photoTip: "黑亮浓郁炸酱面与金黄软炸肉同桌俯拍，热气升腾",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "震海贝烤贝（延吉旗舰店 · 俄罗斯活蒸帝王蟹盛宴惜别宴）",
            cuisineStyle: "延吉顶级鲜活海鲜专门店 · 活蒸帝王蟹第二宴",
            recommendedDishes: ["大池鲜活现挑俄罗斯活蒸帝王蟹（整只清蒸）", "蟹膏海鲜炒饭", "清蒸大扇贝/天鹅蛋", "原汁海鲜温热疙瘩汤"],
            elderKidSuitability: "【延吉市内第二顿帝王蟹盛宴】清蒸原汁原味，蟹肉雪白多汁鲜甜紧实，零辣无油腻，圆满收官",
            perPersonBudget: "¥260 - ¥330 / 人",
            addressOrDropOff: "延吉市天池路核心海鲜商圈，店门有专属平步落客门廊及包厢",
            image: "/images/spot_yj_kingcrab.jpg",
            photoTip: "霸气大帝王蟹拆解拼盘，蟹腿雪白紧实、蟹壳蟹黄炒饭金黄诱人特写",
            alternatives: [
              {
                restaurantName: "海兰江民俗宫（传统宫廷盛宴）",
                cuisineStyle: "朝鲜族传统宫廷正宴",
                recommendedDishes: ["传统宫廷包肉", "清炖牛排骨汤", "传统石锅拌饭"],
                elderKidSuitability: "环境富丽堂皇，传统歌舞伴宴，菜品软烂清淡少油",
                perPersonBudget: "¥120 - ¥160 / 人",
                image: "/images/spot_yj_baorou.jpg",
                photoTip: "民俗宫大殿内精致木雕餐台与朝鲜族传统宫廷盛席",
              }
            ],
          },
        },
        dailyTips: [
          "水上市场是早市，08:00以后摊贩陆续收摊，建议07:00左右前往体验最浓郁烟火气",
          "西市场特产顺丰官方驻点支持称重直接发运，省去携带负担",
        ],
      },
      {
        dayNumber: 6,
        dateOrLabel: "Day 6 · 欢朋温早 · 延吉西站从容候车 · 踏上舒适归途",
        theme: "自然醒晨起 · 欢朋热早 · 从容送站返程",
        paceScore: "relaxed",
        mapConfig: {
          center: [42.8828, 129.4514],
          zoom: 13,
        },
        hotelRestBlock: {
          enabled: false,
          recommendedTime: "客房从容退房",
          reason: "不设早起闹钟，晨起在欢朋享用营养热早餐，从容整理特产行李",
        },
        timeline: [
          {
            type: "activity",
            id: "act_yj_6_1",
            name: "自然醒晨起 · 希尔顿欢朋温润自助早餐 & 从容退房",
            category: "food",
            timeSlot: "08:00 - 10:00",
            durationMinutes: 120,
            coordinates: [42.9075, 129.5089],
            dropOffPoint: "希尔顿欢朋酒店早餐厅",
            openingHours: "07:00 - 10:00",
            reservationRequired: false,
            photoTip: "欢朋早餐厅明亮餐台前，热气腾腾的现熬小米南瓜粥与热茶同框",
            image: "/images/spot_yj_hotel.jpg",
            elderKidNotes: "睡到自然醒，享用现熬热粥、现蒸包子与热豆浆，退房礼宾人员协助推行行李",
            description: "不设早起闹钟，慢享温馨高品质星级自助早餐，从容核点随身物品办理退房。",
          },
          {
            type: "activity",
            id: "act_yj_6_2",
            name: "延吉西站从容候车 · 踏上平稳舒适归途",
            category: "rest",
            timeSlot: "10:30 - 11:30",
            durationMinutes: 60,
            coordinates: [42.8828, 129.4514],
            dropOffPoint: "延吉西站高架二层落客大平台，直梯直达候车大厅",
            openingHours: "列车运行时间",
            reservationRequired: true,
            reservationChannel: "铁路12306提前购票",
            photoTip: "延吉西站大飞檐落客平台与候车大厅汉朝双语指引标识前留影",
            image: "/images/spot_yj_weststation.jpg",
            elderKidNotes: "专车直抵二层落客大平台，直梯直通进站口，设有重点旅客绿色优先通道",
            description: "专车直达延吉西站，司机协助装卸行李，高铁列车平稳启动，圆满结束充实温暖的边陲之旅。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "延吉西站高铁平稳回程 / 车载便当热膳",
            cuisineStyle: "高铁从容返程",
            recommendedDishes: ["高铁热链温润套餐", "自备水果苹果梨与热大麦茶"],
            elderKidSuitability: "高铁列车运行平稳，无颠簸颠簸感，适合长辈回程闭目养神",
            perPersonBudget: "¥40 - ¥60 / 人",
            addressOrDropOff: "延吉西站站台",
          },
        },
        dailyTips: [
          "出发前再次确认身份证件原件已随身携带",
          "延吉西站进站乘降电梯完备，行动不便可走重点旅客直梯通道",
        ],
      },
    ],
    reservationChecklist: [
      {
        spotName: "延边博物馆",
        daysInAdvance: 3,
        platform: "微信公众号【延边博物馆】",
        ticketPrice: "免费",
        requiresRealNameId: true,
        bookingTip: "提前3天实名预约，刷二代身份证原件入馆，周一例行闭馆",
      },
      {
        spotName: "防川国家名胜区（龙虎阁）",
        daysInAdvance: 1,
        platform: "美团 / 携程或现场购票",
        ticketPrice: "¥78（含景区观光车）",
        requiresRealNameId: true,
        bookingTip: "边境核心管控区，长辈可享半价或免票政策，务必随身携带身份证原件",
      },
      {
        spotName: "梅花炭火烤肉品质包厢",
        daysInAdvance: 1,
        platform: "电话预约",
        ticketPrice: "人均约¥120",
        requiresRealNameId: false,
        bookingTip: "独立包厢数量有限，提前半天电话锁定理睬包房免排队",
      },
      {
        spotName: "震海贝烤贝 / 珲春海鲜街帝王蟹",
        daysInAdvance: 1,
        platform: "大众点评 / 电话预约",
        ticketPrice: "时令活蟹计价",
        requiresRealNameId: false,
        bookingTip: "提前电话预留靠窗明亮景观雅座，到店现场挑选生猛活蟹",
      },
    ],
    emergencyContacts: [
      { role: "延边大学附属医院（延吉三甲，局子街1327号）", phone: "0433-2513999", note: "延吉最高水准三甲综合医院" },
      { role: "延吉市民热线 / 旅游纠纷求助", phone: "0433-12345", note: "旅游咨询与打车失物协查" },
      { role: "珲春市人民医院（边境医疗保障）", phone: "0433-7513120", note: "珲春当地就诊医疗保障" },
    ],
  },
  {
    id: "curated_qingdao_3d",
    meta: {
      tripTitle: "青岛 3天2晚 · 海风慢调与老城万国建筑",
      destinations: ["青岛"],
      durationDays: 3,
      travelerProfile: ["海滨慢调", "长辈友好", "老城漫步", "经典鲁菜"],
      budgetTier: "comfort",
      transportMode: "charter_taxi",
      generatedAt: "2026-09-27T12:00:00.000Z",
      coverImage: "/images/spot_zhanqiao.jpg",
      isPublic: true,
      viewsCount: 2450,
      likesCount: 184,
    },
    overview: {
      highlights: [
        "八大关红瓦绿树碧海蓝天，平坦林荫大道慢行",
        "小鱼山公园观景平台远眺老城区全景与胶州湾",
        "青岛啤酒博物馆百年工业沉淀（品尝零度原浆生啤）",
        "开海海鲜与老牌鲁菜清淡鲜甜，适合全家老小"
      ],
      logisticsSummary: "青岛南区老城坡道较多，针对长辈制定'由高到低，单向慢步'原则，避免爬坡。打车直达观景点门口，午间严格预留2小时海景酒店休整充电。",
      weatherAndPacking: [
        "海边风大湿度高，备好防风透气薄外套及遮阳帽",
        "穿平底防滑休闲运动鞋，老城区路面石板平整但不适合高跟鞋"
      ],
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 栈桥海鸥与大学路网红街角",
        theme: "青岛初印象 · 经典地标平缓漫步",
        paceScore: "relaxed",
        mapConfig: {
          center: [36.0622, 120.3235],
          zoom: 14,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "午餐后回酒店休整，避开中午强紫外线与海风",
        },
        timeline: [
          {
            type: "activity",
            id: "qd_act_1",
            name: "青岛栈桥（回澜阁）",
            category: "photo",
            timeSlot: "09:30 - 10:45",
            durationMinutes: 75,
            coordinates: [36.0583, 120.3155],
            dropOffPoint: "太平路栈桥地下通道西口，过街即是平坦桥头广场",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "站在桥身中段，面向回澜阁，冬春季可拍群鸥飞舞",
            image: "/images/spot_zhanqiao.jpg",
            elderKidNotes: "桥面平整无台阶，两旁有护栏与长椅，推轮椅或婴儿车畅通无阻",
            description: "青岛百年地标，条石引桥深入青岛湾，远观小青岛琴屿飘灯。",
          },
          {
            type: "transit",
            fromStop: "青岛栈桥",
            toStop: "开海虾水饺海鲜餐厅",
            mode: "taxi",
            distanceKm: 3.2,
            estimatedMinutes: 10,
            navigationDetail: "沿莱阳路向东，出租车约12元。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "开海红岛海鲜虾水饺（湛山店）",
            cuisineStyle: "新派胶东海鲜 · 鲜虾水饺",
            recommendedDishes: ["招牌开海虾水饺（整只大虾）", "原汁海捕大蛤蜊", "家常焖多宝鱼", "鲜甜海鲜疙瘩汤"],
            elderKidSuitability: "海鲜极度清新鲜甜，无辣少油，水饺软嫩适口",
            perPersonBudget: "¥110 - ¥140 / 人",
            addressOrDropOff: "新湛路2号，门前有泊车位及平整电梯",
            image: "/images/spot_bridge.jpg",
            photoTip: "皮薄馅大晶莹剔透的水饺拼盘特写",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "老青岛前海沿（海景店）",
            cuisineStyle: "老字号经典鲁菜家常菜",
            recommendedDishes: ["大虾烧白菜", "特色铁锅杂鱼贴饼子", "肉沫海参"],
            elderKidSuitability: "大虾烧白菜汤汁鲜浓入味，豆腐软嫩可口",
            perPersonBudget: "¥75 - ¥90 / 人",
            addressOrDropOff: "太平角一路，出租车直达大门",
            image: "/images/spot_taipingjiao.jpg",
            photoTip: "浓汁大虾烧白菜与金黄玉米贴饼子热气腾腾",
          },
        },
        dailyTips: [
          "老城区多单行道，打车建议定在宽阔的落客点避免司机绕路",
          "海边风大，下车前帮长辈整理好防风外套"
        ],
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 八大关万国建筑群 & 小鱼山瞰城",
        theme: "绿树红瓦碧海蓝天 · 漫步最美欧陆街区",
        paceScore: "relaxed",
        mapConfig: {
          center: [36.0598, 120.3541],
          zoom: 14,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "午间回酒店补觉，恢复长辈腿力",
        },
        timeline: [
          {
            type: "activity",
            id: "qd_act_2_1",
            name: "八大关风景区（居庸关路银杏与花石楼外景）",
            category: "nature",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [36.0558, 120.3512],
            dropOffPoint: "黄海路18号花石楼正门落客通道",
            openingHours: "街区全天开放",
            reservationRequired: false,
            photoTip: "居庸关路法国梧桐林荫道、花石楼古城堡石砌外墙",
            image: "/images/spot_badaguan.jpg",
            elderKidNotes: "路面全为平缓柏油马路，两旁绿树成荫，遮阳极佳，走走停停十分舒适",
            description: "十条道路以古代关隘命名的万国建筑街区，融合英、法、德、德式多种风格老别墅。",
          },
          {
            type: "transit",
            fromStop: "八大关",
            toStop: "小鱼山公园",
            mode: "taxi",
            distanceKm: 2.8,
            estimatedMinutes: 8,
            navigationDetail: "经文登路直达小鱼山南门停车场，下车即是景区入口。",
          },
          {
            type: "activity",
            id: "qd_act_2_2",
            name: "小鱼山公园（览潮阁眺望青岛全貌）",
            category: "photo",
            timeSlot: "16:00 - 17:30",
            durationMinutes: 90,
            coordinates: [36.0595, 120.3342],
            dropOffPoint: "福山支路24号小鱼山南门停车场，平步入园",
            openingHours: "06:00 - 19:00（免门票）",
            reservationRequired: true,
            reservationChannel: "微信公众号【青岛小鱼山公园】提前预约",
            photoTip: "览潮阁二层平台，向西俯瞰汇泉湾第一海水浴场与红瓦绿树全景",
            image: "/images/spot_xiaoyushan.jpg",
            elderKidNotes: "山头海拔仅60米，南门至山顶建有平缓防滑扶手坡道，长辈慢步10分钟即可登顶",
            description: "青岛前海观赏老城建筑全貌的绝佳视角，远眺红瓦绿树、碧海蓝天与信号山三座红蘑菇楼。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "怡情楼海鲜巨无霸（香港中路店）",
            cuisineStyle: "高端胶东海鲜 · 粤式温和炖品",
            recommendedDishes: ["原汁鲜蒸大黄鱼", "招牌海肠捞饭", "滋补鲍汁煨豆腐"],
            elderKidSuitability: "海鲜品质顶级，包厢私密安静，适口性极佳",
            perPersonBudget: "¥160 - ¥220 / 人",
            addressOrDropOff: "香港中路核心商圈，门前有专属无障碍坡道",
            image: "/images/spot_shazikou.jpg",
            photoTip: "整条鲜蒸大黄鱼与金黄海肠捞饭同框特写",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "九龙餐厅（老青岛地道本帮小馆）",
            cuisineStyle: "三十年市井老字号鲁菜",
            recommendedDishes: ["香辣鱿鱼条（可微辣）", "五花肉炒笔管鞘", "蚝油扇贝柱"],
            elderKidSuitability: "烟火气浓郁，家常可口，海鲜极其新鲜",
            perPersonBudget: "¥60 - ¥80 / 人",
            addressOrDropOff: "大沽路核心区，老城步行街平坦可达",
            image: "/images/spot_shilaoren.jpg",
            photoTip: "老店油润锅气满满的炒海鲜家常菜",
          },
        },
        dailyTips: [
          "小鱼山山势极低，建议下午16:00前后前往，夕阳照在红瓦上色彩最饱和",
          "八大关建议顺行下坡步行，出租车直接定在居庸关路或花石楼，避免长辈爬坡",
        ],
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 青岛啤酒博物馆 & 胶州湾游船归程",
        theme: "百年工业记忆 · 新鲜原浆生啤 · 舒适返程",
        paceScore: "relaxed",
        mapConfig: {
          center: [36.0825, 120.3458],
          zoom: 14,
        },
        hotelRestBlock: {
          enabled: false,
          recommendedTime: "客房从容退房",
          reason: "最后一日睡到自然醒，从容整理行装后出发参观",
        },
        timeline: [
          {
            type: "activity",
            id: "qd_act_3_1",
            name: "青岛啤酒博物馆（百年登州路老厂）",
            category: "culture",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [36.0825, 120.3458],
            dropOffPoint: "登州路56号博物馆A馆入口正门落客通道",
            openingHours: "08:30 - 16:30",
            reservationRequired: true,
            reservationChannel: "微信公众号【青岛啤酒博物馆】购买普通参观票（¥60，长辈半价或免票）",
            photoTip: "百年红色德式厂房外墙铜酿造发酵桶雕塑前、复古糖化发酵车间",
            image: "/images/spot_beer_museum.jpg",
            elderKidNotes: "全馆配备无障碍平坡和升降梯，参观中途赠送原浆纯生啤酒与啤酒豆，有充裕坐席休息",
            description: "国家一级博物馆，设在1903年日耳曼啤酒公司老厂址，完整展示德式古典酿造工艺与现代化发酵罐群。",
          },
          {
            type: "activity",
            id: "qd_act_3_2",
            name: "奥帆中心 · 漫步情人坝灯塔",
            category: "leisure",
            timeSlot: "14:00 - 15:30",
            durationMinutes: 90,
            coordinates: [36.0592, 120.3958],
            dropOffPoint: "清远路奥帆中心1号门，出租车直达大坝根部",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "情人坝尽头白色灯塔前，背景是浮山湾现代摩天大楼天际线与停泊的白色游艇",
            image: "/images/spot_yacht.jpg",
            elderKidNotes: "纯平开阔防波堤步行道，两旁海风轻柔，设有观光电瓶车可供代步",
            description: "2008年奥运会帆船比赛场地，开阔的防波堤深入海中，近距离观赏百舸争流与现代城市天际线。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "青啤博物馆音乐餐厅（啤酒烤肉海鲜坊）",
            cuisineStyle: "新鲜出厂原浆啤酒料理 · 德式烤肠与鲜蒸海鲜",
            recommendedDishes: ["当日下线0度原浆生啤（果香醇厚）", "鲜蒸大生蚝", "德式土豆泥烤肠拼盘", "老式海鲜大温汤"],
            elderKidSuitability: "参观完直达餐厅，菜品热气腾腾，啤酒花清香，长辈小酌怡情",
            perPersonBudget: "¥90 - ¥120 / 人",
            addressOrDropOff: "青岛啤酒博物馆B馆出口处",
            image: "/images/spot_governor.jpg",
            photoTip: "新鲜带泡沫的纯黄原浆啤酒与大烤盘特写",
          },
        },
        dailyTips: [
          "青岛啤酒博物馆赠送的原浆保质期极短（仅24小时），口感醇厚温润，但开车司机与服药长辈不可饮用",
          "返程若从青岛站或胶东机场出发，下午16:00前预留好充足值机时间",
        ],
      },
    ],
    reservationChecklist: [
      {
        spotName: "青岛啤酒博物馆",
        daysInAdvance: 2,
        platform: "微信公众号【青岛啤酒博物馆】",
        ticketPrice: "¥60（含品尝原浆纯生）",
        requiresRealNameId: true,
        bookingTip: "提前2天预约，刷身份证直接扫码入馆，60岁以上长辈凭证优惠",
      },
      {
        spotName: "青岛小鱼山公园",
        daysInAdvance: 1,
        platform: "微信公众号【青岛小鱼山公园】",
        ticketPrice: "免费",
        requiresRealNameId: true,
        bookingTip: "实名预约分时段入园，下午16:00时段光线最为柔和",
      },
    ],
    emergencyContacts: [
      { role: "青岛大学附属医院（市南院区，三甲）", phone: "0532-82911111", note: "江苏路16号，胶东半岛顶尖医疗中心" },
      { role: "青岛政务服务便民热线", phone: "0532-12345", note: "旅游咨询、交通及投诉快速响应" },
    ],
  },
  {
    id: "curated_kyoto_4d",
    meta: {
      tripTitle: "京都 4天3晚 · 古都禅意庭院与岚山慢行（长辈舒享版）",
      destinations: ["京都"],
      durationDays: 4,
      travelerProfile: ["长辈舒享", "海外慢游", "Google评分4.7+", "庭院茶席", "免爬坡"],
      budgetTier: "comfort",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-11T12:00:00.000Z",
      coverImage: "/images/spot_kyoto_zen.jpg",
      isPublic: true,
      viewsCount: 2180,
      likesCount: 196,
      locale: "zh",
    },
    overview: {
      highlights: [
        "岚山嵯峨野小火车平缓观景，免爬坡天龙寺曹源池与渡月桥清风慢步",
        "避开暴走大军：晨光探访南禅寺水路阁砖拱古桥与高台寺无障碍平缓回廊",
        "百年老铺顺正汤豆腐庭院品鉴（Google 4.7★），温润养胃清淡怀石体验",
        "伏见稻荷精选平缓前段朱红鸟居，下午直达宇治平等院凤凰堂与抹茶茶道体验",
        "全程采用专车门到门接送与平坦石板硬化步道，每日常规配备2小时酒店深度午休"
      ],
      logisticsSummary: "京都古城地形坡道较多，本路线摒弃拥挤公交与长梯跋涉，全程精选MK专车或起步价出租车门对门送达景区最近平坦入口。长辈每日徒步控制在 5000-7000 步纯平缓路段。",
      weatherAndPacking: [
        "春秋京都气候温和（14℃ - 22℃），早晚清幽微凉，备轻薄保暖开衫与舒适软底健步鞋",
        "随身携带护照原件（日本免税退税与实名购票查验必备）",
        "多数传统禅宗庭院入殿参观需脱鞋履，建议随身备清洁厚棉袜与保温水杯"
      ],
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 古都初抵 & 四条乌丸休整 & 锦市场清润晚膳",
        theme: "初抵京都 · 沉浸雅致日式酒店 · 温润京料理初体验",
        paceScore: "relaxed",
        mapConfig: {
          center: [35.0037, 135.7586],
          zoom: 14,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:30 - 17:00",
          reason: "新干线抵达京都站后专车直达酒店入住，更衣洗漱卧床小憩，彻底消除国际旅途疲惫",
        },
        timeline: [
          {
            type: "activity",
            id: "act_kyo_1_1",
            name: "京都站迎接 & 入住三井花园酒店京都四条",
            category: "rest",
            timeSlot: "14:00 - 14:30",
            durationMinutes: 30,
            coordinates: [35.0037, 135.7586],
            dropOffPoint: "京都站中央口八条通专车停靠区 ➔ 酒店正门落客玄关",
            openingHours: "全天",
            reservationRequired: false,
            description: "专车司机在京都站出站口接应行李，车程仅8分钟直达四条乌丸中心区酒店。酒店配备大浴场与平缓无障碍电梯，长辈入住极其省心。",
          },
          {
            type: "transit",
            fromStop: "三井花园酒店京都四条",
            toStop: "锦天满宫 & 锦市场街区",
            mode: "walk",
            distanceKm: 0.8,
            estimatedMinutes: 10,
            navigationDetail: "沿四条通平缓林荫步道漫步，或乘坐出租车起步价至锦天满宫鸟居前",
          },
          {
            type: "activity",
            id: "act_kyo_1_2",
            name: "锦天满宫 & 锦市场清雅漫步",
            category: "culture",
            timeSlot: "17:15 - 18:30",
            durationMinutes: 75,
            coordinates: [35.0051, 135.7672],
            dropOffPoint: "锦天满宫正门石鸟居前",
            openingHours: "08:00 - 20:00",
            reservationRequired: false,
            photoTip: "黄昏时分拍摄锦天满宫灯笼墙，暖黄色和风光影格外温暖",
            elderKidNotes: "全室内带雨棚纯平石板路，无任何台阶，两侧有众多休足长椅",
            description: "被誉为'京都的厨房'，避开正午拥挤时段，傍晚漫步幽静惬意。品尝温和温热的京风玉子烧、现烤年糕与甘甜豆乳甜甜圈。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "京都站中村藤吉 本店直营茶寮",
            cuisineStyle: "宇治抹茶茶荞麦面与焙茶轻食",
            recommendedDishes: ["抹茶温荞麦面", "生茶果冻芭菲", "抹茶白玉丸子红豆汤"],
            elderKidSuitability: "清淡少盐，汤底清甜回甘，长辈肠胃极为舒缓",
            perPersonBudget: "¥90 - ¥140 / 人 (1,800 JPY)",
            addressOrDropOff: "JR京都站伊势丹百货3F茶寮专区",
            googleRating: "4.6★ (Google Reviews)",
            googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nakamura+Tokichi+Kyoto+Station",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "名代猪排 三条本店 (Katsukura Sanjo)",
            cuisineStyle: "百年老铺京都低卡熟成米油炸猪排与养生麦饭",
            recommendedDishes: ["特选三元猪菲力里脊定食", "现磨白芝麻特调酱汁", "有机越光米麦饭与季节味噌汁"],
            elderKidSuitability: "选用高等级植物油，菲力无肥肉温软鲜嫩，米饭与高丽菜丝无限添用",
            perPersonBudget: "¥120 - ¥180 / 人 (2,500 JPY)",
            addressOrDropOff: "京都市中京区三条通寺町东入石桥町16",
            googleRating: "4.6★ (Google Reviews)",
            googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Katsukura+Sanjo+Honten+Kyoto",
          },
        },
        dailyTips: [
          "锦市场沿途垃圾需交由店家回收或随身携带至酒店处理，日本街头垃圾桶较少",
          "酒店晚间大浴场开放至深夜，建议长辈睡前温汤泡澡，消除飞行舟车疲劳"
        ],
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 岚山嵯峨野小火车 & 渡月桥 & 天龙寺曹源池",
        theme: "山水画卷 · 纯平观景专线 · 依山傍水日式慢调",
        paceScore: "relaxed",
        mapConfig: {
          center: [35.0158, 135.6776],
          zoom: 14,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "岚山半日游后专车送返酒店午睡休整，长辈养精蓄锐，避开午后最热最拥挤阳光",
        },
        timeline: [
          {
            type: "activity",
            id: "act_kyo_2_1",
            name: "嵯峨野观光小火车 (岚山 ➔ 龟冈)",
            category: "nature",
            timeSlot: "09:30 - 10:30",
            durationMinutes: 60,
            coordinates: [35.0185, 135.6811],
            dropOffPoint: "JR嵯峨岚山站南口小火车售票大厅前",
            openingHours: "09:00 - 17:00 (周三定期维护，已避开)",
            reservationRequired: true,
            reservationChannel: "JR西日本官网或现场预售票，提前1个月开放",
            photoTip: "双号座位（偶数席）依保津川峡谷而行，悬崖枫溪全景观赏绝佳",
            elderKidNotes: "无阶梯平缓进站，全程坐席平稳，长辈无需步行即可饱览峡谷风光",
            description: "复古红黄蒸汽小火车沿保津川幽静峡谷缓缓穿行，两岸层林尽染、碧波荡漾，清风拂面十分惬意。",
          },
          {
            type: "transit",
            fromStop: "小火车嵯峨站",
            toStop: "天龙寺正门 (曹源池庭园)",
            mode: "walk",
            distanceKm: 0.6,
            estimatedMinutes: 8,
            navigationDetail: "穿过平缓林荫小径直达天龙寺库里落客平台",
          },
          {
            type: "activity",
            id: "act_kyo_2_2",
            name: "天龙寺 曹源池庭园 (世界文化遗产)",
            category: "culture",
            timeSlot: "10:45 - 12:00",
            durationMinutes: 75,
            coordinates: [35.0158, 135.6776],
            dropOffPoint: "天龙寺总门前车道落客区",
            openingHours: "08:30 - 17:00",
            reservationRequired: false,
            photoTip: "大方丈殿木缘廊前拍摄曹源池借景岚山倒影，水天一色禅意深远",
            elderKidNotes: "推荐购买庭园通票，大方丈廊下有宽敞榻榻米席位可长时间静坐品味",
            description: "室町时代禅宗大师梦窗疏石构筑的稀世庭园。借岚山与龟山起伏山势为背景，白砂、绿松、青石与池泉交融，长辈静坐廊前即可感受古刹宁静。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "岚山 吉村 荞麦面 (Arashiyama Yoshimura)",
            cuisineStyle: "渡月桥保津川全景景观手打荞麦面",
            recommendedDishes: ["岚山清流冷热手打双色荞麦面", "时令蔬菜天妇罗", "荞麦实蒸饭与浓郁荞麦原汤"],
            elderKidSuitability: "二楼窗边榻榻米可俯瞰整座渡月桥水色，纯手磨荞麦低GI养胃",
            perPersonBudget: "¥110 - ¥160 / 人 (2,200 JPY)",
            addressOrDropOff: "京都市右京区嵯峨天龙寺芒之马场町3",
            googleRating: "4.6★ (Google Reviews)",
            googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Yoshimura+Kyoto",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "顺正 汤豆腐 清雅别馆",
            cuisineStyle: "百年庭院清汤温润水豆腐宴",
            recommendedDishes: ["顺正传统木桶熟汤豆腐", "烤生麸田乐烧", "胡麻豆腐佐现磨山葵"],
            elderKidSuitability: "纯大豆手工点浆，温热少油清润，特别适合长辈晚间消化",
            perPersonBudget: "¥260 - ¥380 / 人 (5,500 JPY)",
            addressOrDropOff: "京都市左京区南禅寺草川町60",
            googleRating: "4.7★ (Google Reviews)",
            googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nanzenji+Junsei+Kyoto",
          },
        },
        dailyTips: [
          "天龙寺内主步道均为细密平整沙石，建议穿着舒适平底软底健步鞋",
          "小火车返程若遇客流较大，可直接在龟冈站打车直达渡月桥，车程仅15分钟"
        ],
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 南禅寺水路阁古韵 & 高台寺竹林回廊 & 祗园漫步",
        theme: "幽静寻踪 · 避开人流 · 红砖拱桥与高雅茶席",
        paceScore: "relaxed",
        mapConfig: {
          center: [35.0116, 135.7938],
          zoom: 14,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "顺正汤豆腐午膳后，回酒店静休午睡两小时，下午精神饱满探访高台寺与祗园",
        },
        timeline: [
          {
            type: "activity",
            id: "act_kyo_3_1",
            name: "南禅寺 & 琵琶湖疏水水路阁",
            category: "culture",
            timeSlot: "09:30 - 11:00",
            durationMinutes: 90,
            coordinates: [35.0116, 135.7938],
            dropOffPoint: "南禅寺中门专用停车场出租车落客口",
            openingHours: "08:40 - 17:00",
            reservationRequired: false,
            photoTip: "红砖水路阁拱门透视长廊，两旁古枫垂映，构图层次感绝佳",
            elderKidNotes: "境内地面极为平坦开阔，三门至水路阁全程无陡峭坡道，绿树成荫无烈日暴晒",
            description: "临济宗南禅寺派大本山。境内的西洋罗马红砖拱桥'水路阁'历经百年沧桑，与古寺禅境完美融为一体，清幽怡人。",
          },
          {
            type: "transit",
            fromStop: "南禅寺顺正",
            toStop: "高台寺正门",
            mode: "taxi",
            distanceKm: 2.5,
            estimatedMinutes: 8,
            navigationDetail: "专车经东山通直达高台寺南门无障碍坡道入口，下车即达，免爬二年坂陡阶",
          },
          {
            type: "activity",
            id: "act_kyo_3_2",
            name: "高台寺 卧龙池与平缓竹林道",
            category: "culture",
            timeSlot: "16:00 - 17:30",
            durationMinutes: 90,
            coordinates: [34.9998, 135.7816],
            dropOffPoint: "高台寺南侧茶寮落客环岛",
            openingHours: "09:00 - 17:30",
            reservationRequired: false,
            photoTip: "卧龙廊木桥倒映在镜面般的卧龙池中，秋季灯光晚照格外绚丽",
            elderKidNotes: "相较清水寺的陡坡人潮，高台寺游人密度减半，配有平缓木栈道与轮椅坡道",
            description: "丰臣秀吉正室北政所宁宁出家隐居之地。开山堂、灵屋、伞亭小巧精致，穿过幽深竹林栈道漫步至石塀小路，感受最纯粹的古都幽静。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "南禅寺 顺正 (Junsei Nanzenji)",
            cuisineStyle: "天保十年创立百年传统汤豆腐定食宴",
            recommendedDishes: ["花之汤豆腐怀石", "特制白味噌煮物", "时令天妇罗与现捏抹茶盐"],
            elderKidSuitability: "拥有数百年历史回游式大名庭院，在古雅和室席地而坐看庭院锦鲤，身心松弛",
            perPersonBudget: "¥280 - ¥420 / 人 (6,000 JPY)",
            addressOrDropOff: "京都市左京区南禅寺草川町60 (寺门前步行1分钟)",
            googleRating: "4.7★ (Google Reviews)",
            googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Junsei+Nanzenji+Kyoto",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "祗园 鹿六 (Gion Karoku)",
            cuisineStyle: "昭和古民家黑毛和牛温火炙烤（专属包厢代烤）",
            recommendedDishes: ["特选A5和牛极上菲力", "京都九条葱烧牛舌", "盛冈冷面配自制泡菜"],
            elderKidSuitability: "全独立静谧和室包厢，店员专业代烤把控火候，肉质入口即化软嫩无需费力咀嚼",
            perPersonBudget: "¥450 - ¥650 / 人 (9,500 JPY)",
            addressOrDropOff: "京都市东山区八坂通东大路西入星野町93",
            googleRating: "4.7★ (Google Reviews)",
            googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gion+Karoku+Kyoto",
          },
        },
        dailyTips: [
          "高台寺离八坂神社与祗园花见小路仅需漫步5分钟，傍晚沿白川巽桥散步微风拂面非常舒适",
          "日本餐饮包厢需提前2-3天预约，若无预订可由酒店礼宾部协助致电协调"
        ],
      },
      {
        dayNumber: 4,
        dateOrLabel: "Day 4 · 宇治平等院凤凰堂 & 宇治川茶香漫步 & 返程",
        theme: "抹茶故里 · 凤凰振翅平安京 · 茶道甘冽收官",
        paceScore: "relaxed",
        mapConfig: {
          center: [34.8893, 135.8077],
          zoom: 14,
        },
        timeline: [
          {
            type: "activity",
            id: "act_kyo_4_1",
            name: "宇治 平等院凤凰堂 (世界文化遗产)",
            category: "culture",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [34.8893, 135.8077],
            dropOffPoint: "平等院表参道正门落客广场",
            openingHours: "08:30 - 17:30",
            reservationRequired: false,
            photoTip: "日元10元硬币图案取景地：在阿字池正面拍摄凤凰堂红柱金凤倒影",
            elderKidNotes: "阿字池环湖全程纯平石砖路，无任何台阶，凤翔馆博物馆内部有全自动直梯与冷暖空调",
            description: "平安时代净土式庭院顶峰之作。凤凰堂立于阿字池中宛如浮于水面的极乐净土宫殿，凤翔馆内珍藏的26尊云中供养菩萨木雕精美绝伦。",
          },
          {
            type: "transit",
            fromStop: "平等院表参道",
            toStop: "伊藤久右卫门 宇治本店",
            mode: "walk",
            distanceKm: 0.5,
            estimatedMinutes: 6,
            navigationDetail: "沿宇治川畔平缓林荫步道漫步过宇治桥即达",
          },
          {
            type: "activity",
            id: "act_kyo_4_2",
            name: "宇治川漫步 & 伊藤久右卫门茶道体验",
            category: "food",
            timeSlot: "11:45 - 13:30",
            durationMinutes: 105,
            coordinates: [34.8912, 135.8115],
            dropOffPoint: "伊藤久右卫门本店专用停车场",
            openingHours: "10:00 - 18:00",
            reservationRequired: false,
            photoTip: "从宇治桥中段远眺两岸青山与清流泛波，空气中飘散着淡淡炒茶香",
            elderKidNotes: "店内配有专供老人休息品茗的雅座，特产伴手礼可直接装箱打包",
            description: "宇治天保三年创立的茶道巨擘。品尝正宗宇治手作抹茶与清冽玉露茶，选购抹茶生巧克力与宇治煎茶直寄回国，圆满收官旅程。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "伊藤久右卫门 本店茶寮",
            cuisineStyle: "宇治原产抹茶特色正餐与甜品组合",
            recommendedDishes: ["特上宇治抹茶凉面御膳", "季节限定栗子抹茶芭菲", "抹茶叶天妇罗配茶盐"],
            elderKidSuitability: "茶面口感爽滑清爽，甜品低糖回甘，茶多酚去腻降脂",
            perPersonBudget: "¥100 - ¥150 / 人 (2,000 JPY)",
            addressOrDropOff: "京都府宇治市莵道荒槙19-3",
            googleRating: "4.7★ (Google Reviews)",
            googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ito+Kyuemon+Uji+Honten",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "京都站 拉面小路 · 德岛东大",
            cuisineStyle: "返程前热汤面点或机场轻食",
            recommendedDishes: ["甘辛浓汤拉面", "黄金半熟溏心蛋", "黑豚肉汁煎饺"],
            elderKidSuitability: "出餐极快，热汤热面暖胃，方便赶赴关西机场快线HARUKA",
            perPersonBudget: "¥60 - ¥90 / 人 (1,200 JPY)",
            addressOrDropOff: "JR京都站大楼10F拉面小路",
            googleRating: "4.6★ (Google Reviews)",
            googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ramen+Koji+Kyoto+Station",
          },
        },
        dailyTips: [
          "宇治游览结束后专车30分钟即可送达京都站，换乘关西特急HARUKA仅75分钟直达关西机场T1",
          "日本机场国际航班建议提前3小时抵达办理登机退税与安检"
        ],
      },
    ],
    reservationChecklist: [
      {
        spotName: "嵯峨野观光小火车",
        daysInAdvance: 30,
        platform: "JR西日本官网或各旅行预订平台",
        ticketPrice: "¥45 / 人 (880 JPY)",
        requiresRealNameId: false,
        bookingTip: "提前30天开放预订，建议选购偶数靠窗座位，观赏保津川峡谷视线最佳",
      },
      {
        spotName: "平等院凤翔馆",
        daysInAdvance: 0,
        platform: "现场自动售票机购票",
        ticketPrice: "¥30 / 人 (600 JPY，含庭园与博物馆)",
        requiresRealNameId: false,
        bookingTip: "直接现场刷IC卡或现金购票，60岁以上长辈无特定优待但无需排队",
      },
    ],
    emergencyContacts: [
      { role: "京都大学医学部附属医院（三甲救急）", phone: "+81-75-751-3111", note: "京都市左京区圣护院川原町54，西日本顶尖综合医疗中枢" },
      { role: "日本报警与救护急救", phone: "警察 110 / 救护车 119", note: "提供多语种三方实时翻译支持" },
      { role: "中国驻大阪总领事馆 领事保护热线", phone: "+81-6-6445-9478", note: "关西地区中国公民紧急援助热线" },
    ],
  },
  {
    id: "curated_chengdu_4d",
    meta: {
      tripTitle: "成都 + 都江堰 4天3晚 · 蜀韵慢生活与青城问道（长辈舒享全景）",
      destinations: ["成都", "都江堰"],
      durationDays: 4,
      travelerProfile: ["长辈舒享", "茶馆慢生活", "非辣滋补菜", "道教名山", "国宝熊猫"],
      budgetTier: "comfort",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-11T12:00:00.000Z",
      coverImage: "/images/spot_chengdu_panda.jpg",
      isPublic: true,
      viewsCount: 1940,
      likesCount: 178,
      locale: "zh",
    },
    overview: {
      highlights: [
        "成都大熊猫繁育研究基地 VIP 观光车无障碍动线，晨间清凉近距离观赏萌宝啃竹嬉戏",
        "望江楼公园锦江竹林深处，品地道盖碗素花茶，体验老成都零门槛慢生活与江畔微风",
        "钦善斋经典非辣温润滋补药膳鸡汤砂锅（老少皆宜，温润回甘，免受川辣肠胃刺激）",
        "拜水都江堰水利工程：步云梯飞天自动扶梯直达玉垒阁，免爬坡俯瞰鱼嘴与安澜索桥",
        "青城山前山索道上山，月城湖画舫渡船与天师洞天然氧吧悠然吐纳漫步"
      ],
      logisticsSummary: "全程坚持'专车点到点接驳、杜绝陡坡徒步、严格每日两小时午休、全面配置扶梯索道'四大适老舒适原则。成都市区内以起步价专车为主，都江堰青城山段配备专属7座商务包车。",
      weatherAndPacking: [
        "成都气候温和湿润，青城山区气温略低2-3℃，备轻薄透气外套与防滑软底健步鞋",
        "大熊猫基地与青城山区草木丰茂，备长辈温水保温杯、驱蚊贴与晴雨两用伞",
        "身份证原件随身携带（都江堰、青城山与熊猫基地均需实名刷证入园）"
      ],
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 初抵锦官城 & 群光君悦休整 & 人民公园鹤鸣茶社",
        theme: "闲适天府 · 锦江安顿 · 盖碗茶香与温润初膳",
        paceScore: "relaxed",
        mapConfig: {
          center: [30.6588, 104.0538],
          zoom: 14,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 16:30",
          reason: "航班/高铁抵达后专车接送至市中心酒店，更衣洗漱卧床小憩，彻底消除旅途劳顿",
        },
        timeline: [
          {
            type: "activity",
            id: "act_cd_1_1",
            name: "接机/接站 & 入住成都群光君悦酒店",
            category: "rest",
            timeSlot: "13:30 - 14:00",
            durationMinutes: 30,
            coordinates: [30.6548, 104.0812],
            dropOffPoint: "天府国际/双流机场专车接驳位 ➔ 群光君悦酒店落客大堂",
            openingHours: "全天",
            reservationRequired: false,
            description: "专车无缝接驳至春熙路中心区域君悦酒店。酒店位于高层，俯瞰锦江与老城区，隔音极佳，环境典雅静谧。",
          },
          {
            type: "transit",
            fromStop: "群光君悦酒店",
            toStop: "人民公园 鹤鸣茶社",
            mode: "taxi",
            distanceKm: 2.2,
            estimatedMinutes: 10,
            navigationDetail: "专车沿蜀都大道直达人民公园东门，下车即可平步进园",
          },
          {
            type: "activity",
            id: "act_cd_1_2",
            name: "人民公园 鹤鸣茶社体验百年盖碗茶",
            category: "culture",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [30.6588, 104.0538],
            dropOffPoint: "人民公园东门（祠堂街）入口",
            openingHours: "08:00 - 20:00",
            reservationRequired: false,
            photoTip: "傍晚阳光穿透百年银杏树冠，湖畔竹椅与青花瓷盖碗茶蒸汽升腾，古意盎然",
            elderKidNotes: "全平硬化步道，临湖设有大量靠背竹椅，环境开阔通风，长辈坐下即可彻底放松",
            description: "始于1923年的百年川茶圣地。点一盏飘雪茉莉花茶或蒙顶甘露，伴随铜壶注水的悦耳声响，长辈品茶听曲，体验最具烟火气的巴蜀慢生活。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "龙抄手 总店 (清汤原汁席)",
            cuisineStyle: "经典非辣老成都名小吃温润组合",
            recommendedDishes: ["原汤炖鸡抄手", "红糖凉糕", "赖汤圆", "叶儿粑"],
            elderKidSuitability: "全清汤非辣软糯点心，鸡汤鲜浓不油腻，老少皆宜",
            perPersonBudget: "¥35 - ¥55 / 人",
            addressOrDropOff: "锦江区城守街61号",
            googleRating: "4.5★ (Google Reviews)",
            dianpingUrl: "https://m.dianping.com/search?keyword=龙抄手总店",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "钦善斋·温润药膳养生砂锅",
            cuisineStyle: "二十年经典非辣药膳滋补温和川宴",
            recommendedDishes: ["招牌天麻乳鸽汤", "枸杞山药土鸡养生煲", "百合芡实南瓜煲", "原汁清蒸江团鱼"],
            elderKidSuitability: "严格控制油脂与辛辣，汤体温润甘甜，益气健脾，长辈食用极为舒适",
            perPersonBudget: "¥110 - ¥160 / 人",
            addressOrDropOff: "武侯区武侯祠大街247号",
            googleRating: "4.7★ (Google Reviews)",
            dianpingUrl: "https://m.dianping.com/search?keyword=钦善斋武侯祠",
          },
        },
        dailyTips: [
          "成都市区打车极为便利，如遇短途移动推荐直接滴滴或礼橙专车，长辈省力",
          "酒店房间内已备空气加湿器，初到西南建议多饮温开水适应湿度"
        ],
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 大熊猫繁育基地萌宝 & 杜甫草堂 & 望江楼竹林",
        theme: "国宝相伴 · 诗圣草堂古柏 · 望江名楼修竹",
        paceScore: "relaxed",
        mapConfig: {
          center: [30.7336, 104.1444],
          zoom: 13,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:00 - 15:30",
          reason: "清晨探访熊猫后，午后气温上升且人流增多，回酒店深度午睡2.5小时养精蓄锐",
        },
        timeline: [
          {
            type: "activity",
            id: "act_cd_2_1",
            name: "成都大熊猫繁育研究基地 (观光车VIP动线)",
            category: "nature",
            timeSlot: "08:30 - 11:30",
            durationMinutes: 180,
            coordinates: [30.7336, 104.1444],
            dropOffPoint: "基地西区大门VIP观光车乘车中心",
            openingHours: "07:30 - 18:00 (07:30开园，早晨活跃度最高)",
            reservationRequired: true,
            reservationChannel: "微信公众号【成都大熊猫繁育研究基地】，提前7天实名预约",
            photoTip: "太阳产房和月亮产房幼年大熊猫户外滚滚玩耍，长焦拍摄萌态毕现",
            elderKidNotes: "务必入园即购观光电瓶车通票（¥30/人），各站点无缝换乘，长辈免受数公里徒步之苦",
            description: "全球最知名的大熊猫保护科研圣地。清晨8点至10点是大熊猫吃竹子与户外活动的高峰期，黑白团子或趴木架憨睡或抱竹大嚼，治愈感十足。",
          },
          {
            type: "transit",
            fromStop: "大熊猫基地西门",
            toStop: "柴门饭儿餐厅",
            mode: "charter",
            distanceKm: 16.5,
            estimatedMinutes: 28,
            navigationDetail: "专车经蜀龙路转中环路直达餐厅地下落客电梯厅",
          },
          {
            type: "activity",
            id: "act_cd_2_2",
            name: "望江楼公园 & 薛涛纪念馆竹林古亭",
            category: "culture",
            timeSlot: "16:00 - 17:30",
            durationMinutes: 90,
            coordinates: [30.6358, 104.0926],
            dropOffPoint: "望江楼公园南门落客平台",
            openingHours: "06:00 - 21:00 (文物保护区 08:30 - 18:00)",
            reservationRequired: false,
            photoTip: "锦江畔拍摄崇丽阁（望江楼）飞檐翘角与水面倒影，古意盎然",
            elderKidNotes: "临江全硬化平缓步道，园内汇聚了三百多种名竹，林荫蔽日极为清凉，负氧离子充沛",
            description: "为纪念唐代女诗人薛涛而建的全国名园。翠竹修篁环抱，清幽绝俗。长辈漫步锦江之畔，江风徐徐，白鹭掠水，心旷神怡。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "柴门饭儿·温润清雅川味",
            cuisineStyle: "精致非辣老成都家常雅宴",
            recommendedDishes: ["柴门脆皮樟茶鸭", "手打番茄圆子浓汤", "鸡丝凉面", "清炒时令甜豆尖"],
            elderKidSuitability: "肉圆鲜嫩少刺，樟茶鸭皮酥肉嫩香气浓郁，咸鲜为主不刺激",
            perPersonBudget: "¥75 - ¥100 / 人",
            addressOrDropOff: "锦江区中纱帽街8号远洋太古里",
            googleRating: "4.6★ (Google Reviews)",
            dianpingUrl: "https://m.dianping.com/search?keyword=柴门饭儿太古里",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "陈麻婆豆腐总店 (长辈特供温和席)",
            cuisineStyle: "中华老字号百年非辣精品菜式",
            recommendedDishes: ["传统清炖狮子头", "宫保鲜虾球", "传统锅巴肉片", "原汁素烧鲜豆腐"],
            elderKidSuitability: "专为不能吃辣的贵宾定制少油少盐版本，锅巴肉片酥脆酸甜开胃",
            perPersonBudget: "¥80 - ¥120 / 人",
            addressOrDropOff: "青羊区西玉龙街197号",
            googleRating: "4.6★ (Google Reviews)",
            dianpingUrl: "https://m.dianping.com/search?keyword=陈麻婆豆腐西玉龙街",
          },
        },
        dailyTips: [
          "大熊猫基地建议尽早入园（08:30前），避开大型旅行团与午后熊猫回房睡觉时段",
          "望江楼公园免门票（文物区需身份证实名扫码），园内茶馆环境甚至优于商业街区"
        ],
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 专车赴都江堰 & 步云梯飞天电梯 & 南桥蓝眼泪",
        theme: "拜水都江堰 · 千古天府之源 · 飞天扶梯免爬坡",
        paceScore: "relaxed",
        mapConfig: {
          center: [31.0028, 103.6128],
          zoom: 13,
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 16:30",
          reason: "都江堰核心水利工程参观后入住都江堰隐秀/融创酒店，享受清幽山风与深度午休",
        },
        timeline: [
          {
            type: "activity",
            id: "act_cd_3_1",
            name: "都江堰水利工程 (鱼嘴 · 飞沙堰 · 步云梯直达玉垒阁)",
            category: "culture",
            timeSlot: "09:30 - 12:30",
            durationMinutes: 180,
            coordinates: [31.0028, 103.6128],
            dropOffPoint: "都江堰离堆公园正门专用包车落客区",
            openingHours: "08:00 - 18:00",
            reservationRequired: true,
            reservationChannel: "微信公众号【青城山都江堰】，提前5天实名预约",
            photoTip: "乘步云梯自动扶梯登顶玉垒阁，全景观赏李冰父子'分四六水分内外江'的壮丽水利全貌",
            elderKidNotes: "园区内部有电瓶车直接送达鱼嘴，登玉垒阁全程配备128米超长室内自动滚梯（步云梯），彻底告别爬坡爬台阶",
            description: "战国李冰父子建于公元前256年的伟大生态水利杰作。历经两千两百多年至今仍润泽成都平原。清泉奔涌，长辈凭栏远眺岷江碧浪，叹为观止。",
          },
          {
            type: "transit",
            fromStop: "都江堰离堆大门",
            toStop: "青城甲特色餐馆",
            mode: "charter",
            distanceKm: 3.8,
            estimatedMinutes: 10,
            navigationDetail: "专车经灌县古城外围大道直达餐厅专用车位",
          },
          {
            type: "activity",
            id: "act_cd_3_2",
            name: "灌县古城悠步 & 南桥夜观璀璨'蓝眼泪'",
            category: "nature",
            timeSlot: "17:30 - 19:30",
            durationMinutes: 120,
            coordinates: [30.9958, 103.6186],
            dropOffPoint: "灌县古城宣化门落客通道",
            openingHours: "全天开放 (南桥亮灯约 18:30 - 22:30)",
            reservationRequired: false,
            photoTip: "华灯初上时站在南桥桥头，岷江水在蓝色景观灯照射下呈现梦幻深蓝浪花，宛如大自然蓝眼泪",
            elderKidNotes: "古城街道宽阔平整，南桥桥廊内设有遮风避雨雕花木长椅，坐观江景不费体力",
            description: "古桥雕梁画栋，水流湍急如千军万马奔腾。入夜后廊桥两侧灯火辉煌，奔腾的江水泛出蓝宝石般的奇幻荧光，蔚为壮观。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "都江堰 青城甲·道家养生宴",
            cuisineStyle: "青城山传统道家非辣山珍砂锅宴",
            recommendedDishes: ["传统白果炖走地土鸡", "青城山老腊肉炒春笋", "高山磨芋炖排骨", "鲜香荷包蛋青菜钵"],
            elderKidSuitability: "白果土鸡汤清亮鲜美，无任何辛辣调料，温和滋补",
            perPersonBudget: "¥85 - ¥120 / 人",
            addressOrDropOff: "都江堰市幸福路灌县古城内",
            googleRating: "4.7★ (Google Reviews)",
            dianpingUrl: "https://m.dianping.com/search?keyword=青城甲都江堰",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "南桥水岸·岷江生态白汁鱼宴",
            cuisineStyle: "清鲜无刺生态冷水鱼与山珍养生锅",
            recommendedDishes: ["岷江三角峰白汁浓汤煲", "手打自制鲜虾滑", "野生菌菇拼盘", "玉米红薯杂粮蒸糕"],
            elderKidSuitability: "选用清鲜浓白鱼骨熬汤，鱼肉极嫩且几乎无肌间刺，长辈安心享用",
            perPersonBudget: "¥100 - ¥150 / 人",
            addressOrDropOff: "都江堰市复兴街南桥水岸边",
            googleRating: "4.6★ (Google Reviews)",
            dianpingUrl: "https://m.dianping.com/search?keyword=南桥水岸生态鱼",
          },
        },
        dailyTips: [
          "南桥蓝眼泪最佳观赏时间为日落后19:00至20:30，江风较凉建议为长辈备防风外套",
          "都江堰水利工程门票60岁以上长辈凭身份证享受免票政策，需在闸机直接刷二代身份证原件"
        ],
      },
      {
        dayNumber: 4,
        dateOrLabel: "Day 4 · 青城山前山索道与月城湖渡船 ➔ 专车返程",
        theme: "青城天下幽 · 索道凌云 · 满山清氧收官",
        paceScore: "relaxed",
        mapConfig: {
          center: [30.9018, 103.5706],
          zoom: 13,
        },
        timeline: [
          {
            type: "activity",
            id: "act_cd_4_1",
            name: "青城山前山 (观光车 + 月城湖渡船 + 索道直上)",
            category: "nature",
            timeSlot: "09:00 - 12:00",
            durationMinutes: 180,
            coordinates: [30.9018, 103.5706],
            dropOffPoint: "青城山前山山门停车场专车落客平台",
            openingHours: "08:00 - 17:30",
            reservationRequired: true,
            reservationChannel: "微信公众号【青城山都江堰】，提前5天实名预约",
            photoTip: "月城湖中画舫小船划破青绿湖面，两岸青山翠谷倒映如画",
            elderKidNotes: "设计全程省力动线：山门乘电瓶车 ➔ 月城湖乘船5分钟 ➔ 乘索道缆车直飞上天师洞，长辈无需爬大山即可身处幽境",
            description: "道教全真龙门派圣地，素有'青城天下幽'之美誉。漫山古木参天、曲径通幽，林中负氧离子高达每立方厘米数万个，是长辈洗肺养生的极佳胜地。",
          },
          {
            type: "transit",
            fromStop: "青城山山门",
            toStop: "成都双流/天府机场或成都东站",
            mode: "charter",
            distanceKm: 65.0,
            estimatedMinutes: 60,
            navigationDetail: "专属7座商务专车经成灌高速直达机场/高铁站出发层，门对门行李直达",
          },
          {
            type: "activity",
            id: "act_cd_4_2",
            name: "专车直达机场/高铁站 & 满载蜀韵安返",
            category: "rest",
            timeSlot: "14:30 - 16:00",
            durationMinutes: 90,
            coordinates: [30.5785, 104.0665],
            dropOffPoint: "机场T2航站楼出发层3号门 / 成都东站落客平台",
            openingHours: "全天",
            reservationRequired: false,
            description: "专车司机协助托运行李与安检，长辈在贵宾休息室品茗小憩，圆满结束天府舒享慢调之旅。",
          },
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "青城山庄·道家养生素斋",
            cuisineStyle: "青城名山道家清淡养生山珍蔬食",
            recommendedDishes: ["鲜竹荪炖菌菇土鸡", "道家泡菜脆瓜", "现磨石磨黑豆腐", "青城苦丁茶香鸭"],
            elderKidSuitability: "清爽不腻，高纤维易消化，给多日旅程来一次清肠排毒的健康收尾",
            perPersonBudget: "¥80 - ¥110 / 人",
            addressOrDropOff: "都江堰市青城山镇青城山路88号",
            googleRating: "4.7★ (Google Reviews)",
            dianpingUrl: "https://m.dianping.com/search?keyword=青城山庄素斋",
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "成都机场/高铁站头等舱贵宾厅或轻食",
            cuisineStyle: "登机返程前温和热汤与面点小食",
            recommendedDishes: ["热汤鸡丝米线", "川味清汤馄饨", "热腾腾鲜肉包"],
            elderKidSuitability: "出餐快，热腾腾暖身暖胃，安心登机返程",
            perPersonBudget: "¥45 - ¥70 / 人",
            addressOrDropOff: "成都双流/天府国际机场出发层内",
            googleRating: "4.5★ (Google Reviews)",
          },
        },
        dailyTips: [
          "青城山索道单程票¥35/人，往返¥60/人，长辈可根据当天体力灵活选择索道往返",
          "下山后建议在山门特产店选购青城雪芽绿茶或苦丁茶，是极具四川特色的健康伴手礼"
        ],
      },
    ],
    reservationChecklist: [
      {
        spotName: "成都大熊猫繁育研究基地",
        daysInAdvance: 7,
        platform: "微信公众号【成都大熊猫繁育研究基地】",
        ticketPrice: "¥55 / 人（60岁以上老人持有效身份证免费）",
        requiresRealNameId: true,
        bookingTip: "提前7天晚19:00开放预约，选上午07:30-12:00时段，刷二代身份证直接入园",
      },
      {
        spotName: "都江堰水利工程景区",
        daysInAdvance: 5,
        platform: "微信公众号【青城山都江堰】",
        ticketPrice: "¥80 / 人（60岁以上老人持身份证免费）",
        requiresRealNameId: true,
        bookingTip: "实名分时段预约，长辈免票但仍需在小程序预订0元优惠票并刷身份证入园",
      },
      {
        spotName: "青城山前山景区",
        daysInAdvance: 5,
        platform: "微信公众号【青城山都江堰】",
        ticketPrice: "¥80 / 人（60岁以上老人持身份证免费，索道往返¥60自理）",
        requiresRealNameId: true,
        bookingTip: "门票提前预约，索道和月城湖渡船票可直接现场微信扫码即买即走",
      },
    ],
    emergencyContacts: [
      { role: "四川大学华西医院（中国顶尖三甲综合医院）", phone: "028-85422114", note: "成都市武侯区国学巷37号，西南地区综合实力第一" },
      { role: "成都市政务便民热线（旅游与交通救助）", phone: "028-12345", note: "全天候7x24小时人工快速响应" },
      { role: "都江堰市人民医院（二甲急救中心）", phone: "028-87132120", note: "都江堰市奎光路255号，景区最近急救保障定点医院" },
    ],
  },
  {
    id: "curated_beijing_4d",
    meta: {
      tripTitle: "北京 4天3晚 · 京华雅韵与故宫颐和园无障碍慢享",
      destinations: ["北京"],
      durationDays: 4,
      travelerProfile: ["长辈同行", "历史文化", "无障碍平缓", "老字号京味"],
      budgetTier: "comfort",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-12T08:30:00.000Z",
      coverImage: "/images/spot_beijing_palace.jpg",
      isPublic: true,
      viewsCount: 2150,
      likesCount: 198
    },
    overview: {
      highlights: [
        "紫禁城东华门绿色无障碍通道入园，青砖御道平步探访文华殿与珍宝馆，零阶梯游皇城",
        "颐和园昆明湖皇家画舫水路泛舟，避开万寿山爬坡，坐在暖阁画舫平视佛香阁与十七孔桥",
        "天坛丹陛桥平坦古柏御道，晨间呼吸古柏负氧离子，品味老北京中轴线恢弘气象",
        "精选四季民福酥香烤鸭、那家小馆温润黄坛子、听鹂馆寿膳软烂易消化传统美味",
        "入住王府井五星级酒店，毗邻协和医院，每日严格两小时酒店午后深度休整"
      ],
      logisticsSummary: "北京全程商务专车点对点直达落客门区。景点精选平缓无障碍步道或皇家画舫水路代步，严控每日单点步行在1.8公里以内，配备轮椅升降辅助指引与充足休息凉亭。",
      weatherAndPacking: [
        "秋季北京干燥温差大（10℃ - 22℃），建议携带便携润唇膏、保温水杯与薄羊绒开衫",
        "故宫与天坛为实名制严格预约景区，务必携带中国大陆第二代身份证原件入园",
        "长辈建议穿厚底减震防滑健步鞋，故宫青砖平整但路面开阔"
      ]
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 皇城初临 & 王府井静养 & 四季民福烤鸭",
        theme: "初抵京城 · 酒店行李妥帖安顿 · 京味烤鸭滋味暖胃",
        paceScore: "relaxed",
        mapConfig: {
          center: [39.914, 116.4118],
          zoom: 14
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "消除抵京路途疲劳，为傍晚王府井金街慢行储蓄充沛精力"
        },
        timeline: [
          {
            type: "activity",
            id: "bj_d1_hotel",
            name: "北京王府井希尔顿酒店 · 专车接站与无障碍入住",
            category: "rest",
            timeSlot: "11:00 - 12:00",
            durationMinutes: 60,
            coordinates: [39.9142, 116.4115],
            dropOffPoint: "王府井东街8号酒店落客区大堂正门",
            openingHours: "全天候接待",
            reservationRequired: true,
            reservationChannel: "官方预订",
            photoTip: "酒店大堂高挑雅致，落地窗映照王府井街景",
            elderKidNotes: "配备无障碍直梯直达客房，卫浴设平缓防滑抓杆，服务管家提供轮椅借用服务",
            description: "抵京后商务专车直达王府井核心区希尔顿酒店，礼宾协助搬运行李并办理无障碍客房入住，舒缓初抵京城的旅途疲顿。"
          },
          {
            type: "transit",
            fromStop: "bj_d1_hotel",
            toStop: "bj_d1_rest",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 3,
            navigationDetail: "午餐后由餐厅步行直达酒店电梯厅回房休息"
          },
          {
            type: "activity",
            id: "bj_d1_rest",
            name: "酒店深度静养休整 & 养生普洱茶时光",
            category: "rest",
            timeSlot: "13:30 - 15:30",
            durationMinutes: 120,
            coordinates: [39.9142, 116.4115],
            dropOffPoint: "酒店客房内",
            openingHours: "自由安排",
            reservationRequired: false,
            photoTip: "客房窗前远眺故宫角楼飞檐与金色琉璃瓦晚霞",
            elderKidNotes: "长辈平躺午睡2小时，饮温热陈皮普洱茶生津润燥",
            description: "午后客房拉上遮光窗帘安静睡眠两小时，彻底缓解抵京舟车劳顿，为晚间轻松漫步养精蓄锐。"
          },
          {
            type: "transit",
            fromStop: "bj_d1_rest",
            toStop: "bj_d1_wangfujing",
            mode: "walk",
            distanceKm: 0.3,
            estimatedMinutes: 6,
            navigationDetail: "出酒店沿东街平整人行道缓步步行至王府井金街"
          },
          {
            type: "activity",
            id: "bj_d1_wangfujing",
            name: "王府井步行街 · 老字号金街平缓漫步与吉祥大戏院观瞻",
            category: "culture",
            timeSlot: "16:00 - 17:30",
            durationMinutes: 90,
            coordinates: [39.9125, 116.412],
            dropOffPoint: "王府井大街百货大楼前平坦落客步道",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "王府井老北京铛铛车雕塑与和平菓局怀旧青砖布景",
            elderKidNotes: "步行街全程全平硬化地面，无任何阶梯台阶，每隔50米均设有长椅休憩",
            description: "在微风中慢步金街，探访老字号同仁堂养生体验馆与内联升千层底布鞋，感受地道京味底蕴。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "四季民福烤鸭店 (王府井东安门总店)",
            cuisineStyle: "正宗北京烤鸭与精细京味菜",
            recommendedDishes: ["特选酥香嫩烤鸭（皮蘸白糖/肉蘸蒜泥）", "浓白老鸭原汤", "清炒豌豆尖", "老北京京糕酪"],
            elderKidSuitability: "烤鸭酥而不腻，鸭肉软嫩易咀嚼，鸭架煲汤温胃滋润",
            perPersonBudget: "¥160 - ¥220 / 人",
            addressOrDropOff: "东城区东安门大街53号（王府井希尔顿旁200米，免长途奔波）",
            dianpingUrl: "https://www.dianping.com/shop/beijing_sijiminfu"
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "那家小馆 (金宝街清代宅邸店)",
            cuisineStyle: "京城清宫官府菜与满族宅门菜",
            recommendedDishes: ["秘制黄坛子（老鸡浓汤慢煨鱼肚鲍鱼）", "酥皮大明虾", "温润自磨豆腐", "宫廷芸豆卷"],
            elderKidSuitability: "黄坛子汤浓味厚，软烂易消化，官府包厢极为安静避噪",
            perPersonBudget: "¥180 - ¥250 / 人",
            addressOrDropOff: "东城区金宝街66号金宝汇购物中心",
            dianpingUrl: "https://www.dianping.com/shop/beijing_najia"
          }
        },
        dailyTips: [
          "四季民福东安门店人气极旺，建议抵店前通过美味不用等公众号提前代取包厢或中桌号",
          "酒店客房已提前开启空气加湿器，避免北方初秋干燥引起咽喉不适"
        ]
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 紫禁城无障碍文华殿 & 角楼如意菊花锅",
        theme: "故宫青砖御道 · 东华门绿色通道 · 珍宝馆金银宫廷珍玩",
        paceScore: "relaxed",
        mapConfig: {
          center: [39.9175, 116.4022],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "故宫游览后返回酒店静歇平卧，舒缓腿脚并避开正午强日照"
        },
        timeline: [
          {
            type: "activity",
            id: "bj_d2_forbidden_city",
            name: "故宫博物院 · 东华门无障碍通道与文华殿外西路漫游",
            category: "culture",
            timeSlot: "09:00 - 11:30",
            durationMinutes: 150,
            coordinates: [39.9175, 116.4022],
            dropOffPoint: "东华门外护城河平坦落客区（专车凭通行证送达）",
            openingHours: "08:30 - 17:00 (周一闭馆)",
            reservationRequired: true,
            reservationChannel: "故宫博物院微信小程序（提前7天20:00实名预约）",
            photoTip: "文华殿红墙海棠树影下拍摄古典剪影，避开中轴线如织游客",
            elderKidNotes: "走东华门-文华殿-珍宝馆专用平整青砖慢行坡道，全程避开太和殿长陡台阶，沿线均配母婴与无障碍轮椅坡道及直梯",
            description: "从东华门平稳入宫，避开太和殿大陡台阶拥挤人潮，漫步绿树掩映的文华殿陶瓷馆与宁寿宫珍宝馆，欣赏清代九龙壁与乾隆金发塔工艺绝技。"
          },
          {
            type: "transit",
            fromStop: "bj_d2_forbidden_city",
            toStop: "bj_d2_lunch",
            mode: "walk",
            distanceKm: 0.2,
            estimatedMinutes: 5,
            navigationDetail: "自神武门无障碍坡道出宫，平步穿过护城河桥即达角楼餐厅"
          },
          {
            type: "activity",
            id: "bj_d2_lunch",
            name: "故宫角楼餐厅 · 宫廷暖胃滋补菊花涮锅",
            category: "food",
            timeSlot: "11:45 - 13:00",
            durationMinutes: 75,
            coordinates: [39.9238, 116.4018],
            dropOffPoint: "神武门外西侧角楼餐厅正门",
            openingHours: "11:00 - 21:00",
            reservationRequired: true,
            reservationChannel: "故宫角楼小程序提前预约",
            photoTip: "窗外即是西北角楼三重飞檐与倒映护城河金光",
            elderKidNotes: "清朝慈禧秘制金汤菊花锅底，滋阴润燥不辛辣，肉质细嫩极适宜老人咀嚼",
            description: "在紫禁城角楼掩映下享用非遗菊花小暖锅，金丝菊花瓣融于老母鸡清鲜高汤中，暖意融融。"
          },
          {
            type: "transit",
            fromStop: "bj_d2_lunch",
            toStop: "bj_d2_hotel_rest",
            mode: "taxi",
            distanceKm: 2.2,
            estimatedMinutes: 10,
            navigationDetail: "神武门专车接驳，10分钟平稳直达王府井希尔顿酒店"
          },
          {
            type: "activity",
            id: "bj_d2_hotel_rest",
            name: "午后酒店尊享静歇 · 护足放松与午休",
            category: "rest",
            timeSlot: "13:30 - 15:30",
            durationMinutes: 120,
            coordinates: [39.9142, 116.4115],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "室内柔光泡茶静休",
            elderKidNotes: "换舒适棉拖鞋温水泡脚，平卧2小时深度休养生息",
            description: "返回酒店客房享受安静午休时光，温水浸泡舒缓上午故宫步行带来的腿部肌肉微酸。"
          },
          {
            type: "transit",
            fromStop: "bj_d2_hotel_rest",
            toStop: "bj_d2_jingshan",
            mode: "charter",
            distanceKm: 2.5,
            estimatedMinutes: 12,
            navigationDetail: "商务专车由酒店送至景山公园东门平缓林荫入园口"
          },
          {
            type: "activity",
            id: "bj_d2_jingshan",
            name: "景山公园 · 东门无障碍林荫步道 & 万春亭缓坡远眺紫禁城",
            category: "nature",
            timeSlot: "16:15 - 17:30",
            durationMinutes: 75,
            coordinates: [39.9248, 116.4005],
            dropOffPoint: "景山公园东门平整落客平台",
            openingHours: "06:30 - 21:00",
            reservationRequired: false,
            photoTip: "落日余晖洒在故宫金顶中轴线上，壮丽非凡",
            elderKidNotes: "走东侧平缓之字形柏油无阶梯林荫缓坡，长辈体力充沛可至观妙亭平眺，不想登高可在山脚古牡丹园长椅闲坐听鸟鸣",
            description: "漫步景山古柏林，空气清冽芬芳。缓步登临半山观妙亭，南眺故宫三大殿夕阳金辉，北望钟鼓楼，纵览老北京中轴线。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "老门框爆肚涮肉 (金宝街精品店)",
            cuisineStyle: "正宗北京铜锅炭火清汤涮羊肉",
            recommendedDishes: ["手切鲜羊上脑（软嫩甘香）", "鲜切黄瓜条", "百年传承芝麻烧饼", "清汤老铜锅底（葱姜大枣提鲜）"],
            elderKidSuitability: "清汤锅不燥热，优质手切羊肉久涮不柴入口即化，高钙高蛋白补充体力",
            perPersonBudget: "¥130 - ¥170 / 人",
            addressOrDropOff: "东城区金宝街东四南大街28号",
            dianpingUrl: "https://www.dianping.com/shop/beijing_laomenkuang"
          }
        },
        dailyTips: [
          "故宫馆内提供免费轮椅借用（凭二代身份证在东华门入口处办理，出神武门归还即可），如长辈容易疲劳强烈建议取用",
          "今日晚膳铜锅涮肉汤底温润清亮，适合搭配温水或京味酸梅汤佐餐"
        ]
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 颐和园皇家画舫昆明湖 & 什刹海清波漫步",
        theme: "皇家水路山水 · 昆明湖画舫无梯泛舟 · 听鹂馆非遗宫廷寿膳",
        paceScore: "relaxed",
        mapConfig: {
          center: [39.9998, 116.2755],
          zoom: 14
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 15:30",
          reason: "自颐和园车行返程后在酒店静憩，补充体力"
        },
        timeline: [
          {
            type: "activity",
            id: "bj_d3_summer_palace",
            name: "颐和园 · 北如意门平步画舫登船 & 昆明湖水上全景揽胜",
            category: "nature",
            timeSlot: "09:30 - 12:00",
            durationMinutes: 150,
            coordinates: [39.9998, 116.2755],
            dropOffPoint: "颐和园北如意门或东宫门平坦无台阶落客区",
            openingHours: "06:30 - 18:00",
            reservationRequired: true,
            reservationChannel: "颐和园微信公众号（提前7天预约）",
            photoTip: "画舫船舱雕花木窗外，十七孔桥与佛香阁在波光中交相辉映",
            elderKidNotes: "北如意门平整青石路仅步行200米即达石舫画舫码头，上下船均设防滑扶手浮桥，全程水上游览零爬坡零台阶",
            description: "避开万寿山徒步石阶，登临古典琉璃顶皇家游船画舫。微风拂面荡漾于昆明湖上，远眺万寿山佛香阁与西堤六桥如水墨画卷在眼前徐徐展开。"
          },
          {
            type: "transit",
            fromStop: "bj_d3_summer_palace",
            toStop: "bj_d3_lunch",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 3,
            navigationDetail: "画舫靠岸于听鹂馆码头，平坦长廊漫步即至餐厅"
          },
          {
            type: "activity",
            id: "bj_d3_lunch",
            name: "听鹂馆饭庄 · 颐和园内百年中华老字号宫廷寿膳",
            category: "food",
            timeSlot: "12:00 - 13:15",
            durationMinutes: 75,
            coordinates: [39.9992, 116.2721],
            dropOffPoint: "颐和园长廊西端听鹂馆正门",
            openingHours: "11:00 - 14:00",
            reservationRequired: true,
            reservationChannel: "电话或美团提前预约寿膳席位",
            photoTip: "古戏台雕梁画栋古意盎然，古乐清心",
            elderKidNotes: "乾隆慈禧御膳延传，菜肴讲究清炖软熟，特制寿字窝头与芸豆卷入口即化",
            description: "在当年慈禧太后品茶听戏的古建庭院内，品尝传承百年的延年益寿鱼、小窝头与金丝芸豆卷，感受皇家膳食精髓。"
          },
          {
            type: "transit",
            fromStop: "bj_d3_lunch",
            toStop: "bj_d3_hotel_rest",
            mode: "charter",
            distanceKm: 18,
            estimatedMinutes: 35,
            navigationDetail: "专车经四环快速路平稳返回王府井酒店"
          },
          {
            type: "activity",
            id: "bj_d3_hotel_rest",
            name: "午后深度酒店静养休整",
            category: "rest",
            timeSlot: "14:00 - 15:30",
            durationMinutes: 90,
            coordinates: [39.9142, 116.4115],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "静享午后阳光",
            elderKidNotes: "长辈卧床静养休息，补充上午水上游览体力",
            description: "客房内小憩休整，饮温润红枣枸杞茶，恢复精力。"
          },
          {
            type: "transit",
            fromStop: "bj_d3_hotel_rest",
            toStop: "bj_d3_shichahai",
            mode: "taxi",
            distanceKm: 4.5,
            estimatedMinutes: 15,
            navigationDetail: "专车送至什刹海前海荷花市场平整入口"
          },
          {
            type: "activity",
            id: "bj_d3_shichahai",
            name: "什刹海前海 · 荷花市场青石板亲水步道 & 银锭桥晚霞慢看",
            category: "leisure",
            timeSlot: "16:30 - 18:00",
            durationMinutes: 90,
            coordinates: [39.936, 116.392],
            dropOffPoint: "什刹海荷花市场地安门西大街落客点",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "银锭观山晚霞水波倒影，垂柳拂面宛如老画报",
            elderKidNotes: "沿前海湖畔均为无阶梯平缓青石板路，避开酒吧喧闹段，绿柳成荫，长椅密集",
            description: "落日时分漫步什刹海前海，微风拂动湖畔依依杨柳，看老北京人在岸边悠然垂钓与慢悠悠散步，尽显市井生活闲趣。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "花家怡园 (四合院清雅旗舰店)",
            cuisineStyle: "新派京味菜与北京传统家常美肴",
            recommendedDishes: ["怡园招牌霸王鸡（芝麻酱与红油双酱独立蘸取）", "八爷鸭方（外酥里嫩）", "养生鲍汁自磨豆腐", "老北京豌豆黄"],
            elderKidSuitability: "酱料分开可完全做免辣处理，自磨豆腐软烂清香，四合院无障碍回廊宽敞",
            perPersonBudget: "¥160 - ¥210 / 人",
            addressOrDropOff: "东城区东直门内大街5号花家四合院",
            dianpingUrl: "https://www.dianping.com/shop/beijing_huajia"
          }
        },
        dailyTips: ["颐和园昆明湖画舫航行平稳无颠簸感，老人上船注意脚下浮桥即可", "什刹海游览后可在荷花市场门口搭乘专车，避免步行过久"]
      },
      {
        dayNumber: 4,
        dateOrLabel: "Day 4 · 天坛祈年殿古柏林朝气 & 南门涮肉滋润返程",
        theme: "天坛丹陛桥平步 · 祈年殿祈福 · 满意归程",
        paceScore: "relaxed",
        mapConfig: {
          center: [39.8822, 116.4066],
          zoom: 15
        },
        timeline: [
          {
            type: "activity",
            id: "bj_d4_tiantan",
            name: "天坛公园 · 丹陛桥御道平步 & 祈年殿蓝琉璃攒尖顶揽胜",
            category: "culture",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [39.8822, 116.4066],
            dropOffPoint: "天坛公园南门平整宽阔落客区（避开陡坡）",
            openingHours: "06:30 - 21:00",
            reservationRequired: true,
            reservationChannel: "天坛公园微信官方小程序提前购联票",
            photoTip: "祈年殿三重蓝琉璃圆攒尖顶在晴空下光彩夺目，汉白玉基座气势恢宏",
            elderKidNotes: "自南门入园沿平缓无阶梯的丹陛桥一路向北，两旁千年桧柏苍翠，空气负氧离子充沛，设缓坡轮椅直升通道",
            description: "清晨漫步天坛，走在昔日帝王祭天御道丹陛桥上，呼吸千年松柏清香。近距离仰望纯木榫卯结构的祈年殿，感受天圆地方的东方建筑哲学。"
          },
          {
            type: "transit",
            fromStop: "bj_d4_tiantan",
            toStop: "bj_d4_lunch",
            mode: "walk",
            distanceKm: 0.3,
            estimatedMinutes: 5,
            navigationDetail: "由天坛南门出园，平坦步道过街即达南门涮肉"
          },
          {
            type: "activity",
            id: "bj_d4_lunch",
            name: "南门涮肉 (天坛南门老店) · 景泰蓝小铜锅告别宴",
            category: "food",
            timeSlot: "11:45 - 13:00",
            durationMinutes: 75,
            coordinates: [39.8785, 116.408],
            dropOffPoint: "天坛南门永内东街东里13号楼",
            openingHours: "11:00 - 22:00",
            reservationRequired: true,
            reservationChannel: "电话提前订座",
            photoTip: "精致传统景泰蓝一人一锅小铜锅，吉祥如意",
            elderKidNotes: "一人一锅卫生便捷，手切鲜羊上脑与自制麻酱花样调料温润暖身",
            description: "以地道天坛南门老字号清汤铜锅为北京之行画上句号。一人一具精巧景泰蓝锅，慢涮新鲜羊肉与鲜蘑菇，温热适口。"
          },
          {
            type: "transit",
            fromStop: "bj_d4_lunch",
            toStop: "bj_d4_departure",
            mode: "charter",
            distanceKm: 15,
            estimatedMinutes: 30,
            navigationDetail: "商务专车由餐厅接送直达北京南站/首都/大兴机场出发层落客区"
          },
          {
            type: "activity",
            id: "bj_d4_departure",
            name: "专车护送至机场/高铁站 · 踏上温馨归程",
            category: "rest",
            timeSlot: "13:30 - 14:30",
            durationMinutes: 60,
            coordinates: [39.8652, 116.3785],
            dropOffPoint: "高铁站/机场VIP或无障碍出发落客口",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "满载京华风雅回忆",
            elderKidNotes: "专车礼宾协助搬运特产与行李，直接进入候车大厅",
            description: "专车直接送至出发层安检口，免除公共交通辗转搬运行李，舒心返程。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "南门涮肉 (天坛南门总店)",
            cuisineStyle: "老北京景泰蓝传统炭火铜锅涮肉",
            recommendedDishes: ["鲜切羊上脑", "精品肥牛", "自制鲜虾滑", "热烙芝麻烧饼"],
            elderKidSuitability: "一人一锅清汤锅底，清爽不油腻，羊肉滑嫩不上火",
            perPersonBudget: "¥120 - ¥160 / 人",
            addressOrDropOff: "东城区永内东街东里13号楼（天坛公园南门对面）",
            dianpingUrl: "https://www.dianping.com/shop/beijing_nanmenshuanrou"
          }
        },
        dailyTips: [
          "北京南站设有重点旅客绿色候车区，长辈如需协助可在12306预约轮椅接送进站服务",
          "伴手礼建议选购稻香村（零号店）的现烤枣花酥与京八件糕点，礼盒轻巧便于携带"
        ]
      }
    ],
    reservationChecklist: [
      {
        spotName: "故宫博物院",
        daysInAdvance: 7,
        platform: "微信小程序【故宫博物院】",
        ticketPrice: "¥60 / 人（60岁以上老人持有效身份证享受半价¥30）",
        requiresRealNameId: true,
        bookingTip: "提前7天晚上20:00准时放票，选上午场入园，走东华门无障碍通道凭身份证直刷入园"
      },
      {
        spotName: "颐和园",
        daysInAdvance: 7,
        platform: "微信公众号【颐和园】",
        ticketPrice: "¥30 / 联票¥60（60岁以上老人免票入园）",
        requiresRealNameId: true,
        bookingTip: "提前实名预约，长辈免票但仍需在线预约0元优待票，刷身份证入园"
      },
      {
        spotName: "天坛公园",
        daysInAdvance: 7,
        platform: "微信公众号【天坛】",
        ticketPrice: "联票¥34（60岁以上老人持有效身份证免大门票，祈年殿需优惠联票）",
        requiresRealNameId: true,
        bookingTip: "提前预约联票以进入祈年殿及回音壁核心景区"
      }
    ],
    emergencyContacts: [
      {
        role: "北京协和医院 (东院区 - 综合实力全国第一)",
        phone: "010-69156114",
        note: "东城区帅府园1号，距离王府井希尔顿酒店仅800米"
      },
      {
        role: "首都政务服务便民热线",
        phone: "010-12345",
        note: "全天候7x24小时多语种人工政务与就医紧急指引"
      },
      {
        role: "北京急救中心 (120)",
        phone: "120",
        note: "北京市统一医疗急救呼叫中心"
      }
    ]
  },
  {
    id: "curated_xian_4d",
    meta: {
      tripTitle: "西安 4天3晚 · 盛唐画卷与兵马俑VIP平步舒享",
      destinations: ["西安"],
      durationDays: 4,
      travelerProfile: ["盛唐历史", "长辈舒享", "兵马俑VIP通道", "滋补陕菜"],
      budgetTier: "comfort",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-12T08:30:00.000Z",
      coverImage: "/images/spot_xian_pagoda.jpg",
      isPublic: true,
      viewsCount: 1890,
      likesCount: 162
    },
    overview: {
      highlights: [
        "秦始皇帝陵博物院VIP无障碍通道入园，一号坑专属升降梯与轮椅缓坡近距离凝视地下军阵",
        "大唐不夜城与大雁塔南广场平整石板步行道，零台阶慢步观赏盛唐古风灯火与水景秀",
        "陕西历史博物馆大唐遗宝展厅全平地漫赏何家村窖藏金银器与国宝级兽首玛瑙杯",
        "品尝外酥里嫩长安葫芦鸡、温润养胃老孙家优质牛羊肉泡馍、温和陕南蒸盆子",
        "入住大雁塔核心景区五星级威斯汀酒店，推窗即瞰大雁塔玄奘法相，每日两小时安稳午睡"
      ],
      logisticsSummary: "往返临潼兵马俑选用别克GL8商务专车高速直达，避开人流拥挤排队。市内各点均设无台阶轮椅坡道，严控行程节奏，慢游唐风古韵。",
      weatherAndPacking: [
        "西安初秋气候宜人（12℃ - 24℃），早晚清凉，建议穿舒适透气棉麻长袖与薄外套",
        "陕西历史博物馆与兵马俑均实行严格实名身份证核验入馆，务必携带身份证原件",
        "泡馍偏顶饱，点单时可为长辈选择少油清淡口味并细掰馍粒"
      ]
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 盛唐初抵 & 大雁塔南广场平步 & 长安葫芦鸡",
        theme: "初抵古都 · 入住雁塔威斯汀 · 盛唐美馔葫芦鸡",
        paceScore: "relaxed",
        mapConfig: {
          center: [34.2185, 108.9638],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "抵陕后入住酒店深度午休，舒缓高铁或飞机疲劳"
        },
        timeline: [
          {
            type: "activity",
            id: "xa_d1_hotel",
            name: "西安威斯汀大酒店 · 专车接送与雁塔景致入住",
            category: "rest",
            timeSlot: "11:30 - 12:30",
            durationMinutes: 60,
            coordinates: [34.2185, 108.9638],
            dropOffPoint: "雁南三路12号威斯汀酒店大堂落客门厅",
            openingHours: "全天候接待",
            reservationRequired: true,
            reservationChannel: "官方预订",
            photoTip: "酒店中庭玄奘雕像与地下私家博物馆盛唐文物",
            elderKidNotes: "酒店地处大唐不夜城北端，全平坦出入，配天梦之床与无障碍宽阔卫浴",
            description: "商务专车自西安北站/机场平稳接送至大雁塔南广场威斯汀酒店，窗外即可仰望大雁塔巍峨古塔身。"
          },
          {
            type: "transit",
            fromStop: "xa_d1_hotel",
            toStop: "xa_d1_rest",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 2,
            navigationDetail: "午餐后由大悦城平步过街回酒店休息"
          },
          {
            type: "activity",
            id: "xa_d1_rest",
            name: "酒店天梦之床静养休整",
            category: "rest",
            timeSlot: "13:30 - 15:30",
            durationMinutes: 120,
            coordinates: [34.2185, 108.9638],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房窗前大雁塔轮廓",
            elderKidNotes: "卧床静歇2小时，平复心神消除旅途劳顿",
            description: "在静谧客房内享用2小时高质量午休，舒缓关节肌肉，为晚间大唐灯火漫步蓄能。"
          },
          {
            type: "transit",
            fromStop: "xa_d1_rest",
            toStop: "xa_d1_pagoda_square",
            mode: "walk",
            distanceKm: 0.2,
            estimatedMinutes: 5,
            navigationDetail: "出酒店正门即达大雁塔南广场平整石板步道"
          },
          {
            type: "activity",
            id: "xa_d1_pagoda_square",
            name: "大雁塔南广场 · 玄奘像前平步慢游 & 盛唐余韵清风",
            category: "culture",
            timeSlot: "16:00 - 17:30",
            durationMinutes: 90,
            coordinates: [34.2198, 108.964],
            dropOffPoint: "大雁塔南广场平坦落客道",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "玄奘铜像与大雁塔古朴砖身在斜阳下的历史庄严同框",
            elderKidNotes: "南广场全为平整防滑花岗岩地面，无台阶无陡坡，周边绿化带休息座椅充足",
            description: "傍晚漫步大雁塔南广场，微风轻拂。瞻仰大唐玄奘大师西行铜像，静听古刹晚钟，感受盛唐古都的宽广气度。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "长安大牌档之西厢房 (大雁塔大悦城店)",
            cuisineStyle: "经典民俗陕菜与精致长安茶点",
            recommendedDishes: ["长安葫芦鸡（外酥里嫩，老幼皆宜）", "古法温拌腰丝", "手打自磨豆腐", "毛笔酥点心"],
            elderKidSuitability: "葫芦鸡经煮、蒸、炸三道工序，肉质软烂离骨，极易咀嚼消化",
            perPersonBudget: "¥90 - ¥130 / 人",
            addressOrDropOff: "慈恩西路大悦城4层（无障碍直梯直达）",
            dianpingUrl: "https://www.dianping.com/shop/xian_changandapaidang"
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "陕南妈妈菜 (大雁塔店)",
            cuisineStyle: "陕南安康生态养生菜",
            recommendedDishes: ["紫阳蒸盆子（慢炖老土鸡蹄髈菌菇汤，滋补醇厚）", "汉阴热豆腐", "清炒野荠菜", "苞谷珍稀饭"],
            elderKidSuitability: "蒸盆子清炖慢煨无辣椒，汤清味厚，温胃补气，长辈最爱",
            perPersonBudget: "¥100 - ¥140 / 人",
            addressOrDropOff: "雁南一路曼蒂广场一层",
            dianpingUrl: "https://www.dianping.com/shop/xian_shannanmama"
          }
        },
        dailyTips: [
          "大雁塔音乐喷泉人流密集，建议长辈在南广场远眺喷泉灯火，避开北广场拥挤人流",
          "酒店大堂地下直通西影电影博物馆与曲江艺术博物馆，雨天也可平步室内看展"
        ]
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 秦始皇兵马俑VIP通道 & 临潼家宴石子馍",
        theme: "地下军阵奇迹 · 兵马俑绿色无障碍通道 · 临潼温润美馔",
        paceScore: "relaxed",
        mapConfig: {
          center: [34.3841, 109.2785],
          zoom: 14
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 15:30",
          reason: "临潼往返专车舒适返程后，在客房进行安稳午睡"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "xa_d2_hotel",
            toStop: "xa_d2_terracotta",
            mode: "charter",
            distanceKm: 42,
            estimatedMinutes: 50,
            navigationDetail: "别克GL8商务专车经连霍高速平稳送达兵马俑景区VIP绿色通道入口"
          },
          {
            type: "activity",
            id: "xa_d2_terracotta",
            name: "秦始皇帝陵博物院 (兵马俑) · VIP无障碍通道 & 一号坑军阵观摩",
            category: "culture",
            timeSlot: "09:30 - 12:00",
            durationMinutes: 150,
            coordinates: [34.3841, 109.2785],
            dropOffPoint: "兵马俑景区VIP贵宾车道及无障碍电梯处",
            openingHours: "08:30 - 17:00",
            reservationRequired: true,
            reservationChannel: "微信公众号【秦始皇帝陵博物院】提前7天预约",
            photoTip: "一号坑前区无障碍观景台近距离正面凝望千人千面秦俑雄姿",
            elderKidNotes: "专车直达展馆内侧无障碍入口，一号坑与铜车马馆均设有升降电梯与平缓坡道，景区免费提供轮椅租借服务",
            description: "专车经绿色通道入园，避开常规3公里排队步行长路。由专业历史讲师陪同，在专用无障碍看台上饱览一号坑秦代兵马俑浩荡阵列与国宝级青铜车马的巧夺天工。"
          },
          {
            type: "transit",
            fromStop: "xa_d2_terracotta",
            toStop: "xa_d2_lunch",
            mode: "charter",
            distanceKm: 3.5,
            estimatedMinutes: 8,
            navigationDetail: "专车接送至临潼静谧国宾宴会厅"
          },
          {
            type: "activity",
            id: "xa_d2_lunch",
            name: "临潼宴·陕菜馆 · 骊山脚下温润清鲜家宴",
            category: "food",
            timeSlot: "12:15 - 13:30",
            durationMinutes: 75,
            coordinates: [34.3685, 109.231],
            dropOffPoint: "临潼区秦陵北路国宾馆附楼正门",
            openingHours: "11:00 - 14:00",
            reservationRequired: true,
            reservationChannel: "电话预约静谧包间",
            photoTip: "古色古香秦风雅韵餐具与骊山山色窗景",
            elderKidNotes: "菜品以软烂清炖为主，特制养生石子馍香脆麦香浓，配暖胃百合羹",
            description: "在远离喧嚣的临潼雅致餐厅内享用温润陕菜，品味黄河大鲤鱼、老汤炖牛腩与暖胃石子馍，滋养身心。"
          },
          {
            type: "transit",
            fromStop: "xa_d2_lunch",
            toStop: "xa_d2_hotel_rest",
            mode: "charter",
            distanceKm: 40,
            estimatedMinutes: 45,
            navigationDetail: "商务专车载长辈回酒店，车内调平座椅静躺闭目养神"
          },
          {
            type: "activity",
            id: "xa_d2_hotel_rest",
            name: "客房舒适午睡静养",
            category: "rest",
            timeSlot: "14:15 - 16:00",
            durationMinutes: 105,
            coordinates: [34.2185, 108.9638],
            dropOffPoint: "威斯汀酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "静享午後安宁",
            elderKidNotes: "平躺休息1.5小时，补充体力",
            description: "临潼归来后客房静卧休养，彻底化解步行动能消耗。"
          },
          {
            type: "transit",
            fromStop: "xa_d2_hotel_rest",
            toStop: "xa_d2_shunchenxiang",
            mode: "taxi",
            distanceKm: 5.5,
            estimatedMinutes: 15,
            navigationDetail: "专车送至南门顺城巷平整青砖慢行街区"
          },
          {
            type: "activity",
            id: "xa_d2_shunchenxiang",
            name: "古城墙顺城巷 · 永宁门古树下慢品茯茶 & 秦腔余韵",
            category: "leisure",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [34.251, 108.947],
            dropOffPoint: "南门瓮城东顺城巷入口平坦路面",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "明城墙青砖背景与老槐树下青花瓷茶盏慢煮金花茯砖茶",
            elderKidNotes: "顺城巷沿古城墙下修筑，纯平砖石路，不爬城墙陡梯，茶座环境清幽舒适",
            description: "城墙根下老槐树掩映，在顺城巷静谧茶肆细品一壶温润消食的泾阳金花茯砖茶，听邻座票友浅吟低唱秦腔老调，体味原汁原味的古都慢节奏。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "醉长安 (书院门明清四合院总店)",
            cuisineStyle: "精致新陕菜与盛唐宫廷名肴",
            recommendedDishes: ["妙笔生花点心（酥香黑芝麻馅）", "老陕清炖羊肉钵（清香去膻）", "长安稠酒（温热微甜低度）", "老豆腐烧野生菌"],
            elderKidSuitability: "清炖羊肉汤温热滋补，稠酒加热后甘甜顺喉，四合院庭院无阶梯平整",
            perPersonBudget: "¥130 - ¥180 / 人",
            addressOrDropOff: "碑林区书院门56号古街四合院（近南门）",
            dianpingUrl: "https://www.dianping.com/shop/xian_zuichangan"
          }
        },
        dailyTips: [
          "兵马俑景区内严控不爬高不走急坡，听从随行专车与讲师安排走无障碍电梯通道",
          "今日晚膳醉长安地处书院门古文化街，吃完饭可顺路平步观赏字画扇面与文房四宝"
        ]
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 陕历博大唐遗宝展 & 大唐不夜城平步夜览",
        theme: "盛唐何家村国宝 · 老孙家温润泡馍 · 不夜城璀璨灯火",
        paceScore: "relaxed",
        mapConfig: {
          center: [34.2248, 108.9535],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "展馆观览后返回酒店深度补眠，为晚间不夜城观灯储蓄体力"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "xa_d3_hotel",
            toStop: "xa_d3_museum",
            mode: "charter",
            distanceKm: 1.5,
            estimatedMinutes: 6,
            navigationDetail: "专车自威斯汀送至陕西历史博物馆南门无障碍直入通道"
          },
          {
            type: "activity",
            id: "xa_d3_museum",
            name: "陕西历史博物馆 · 大唐遗宝展厅全平地国宝鉴赏",
            category: "culture",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [34.2248, 108.9535],
            dropOffPoint: "陕西历史博物馆南门VIP通道入口",
            openingHours: "08:30 - 18:00 (周一闭馆)",
            reservationRequired: true,
            reservationChannel: "陕西历史博物馆官方微信小程序提前提前3天预约【大唐遗宝何家村窖藏展】",
            photoTip: "镶金兽首玛瑙杯与鎏金舞马衔杯纹银壶的非凡金工光晕",
            elderKidNotes: "何家村大唐遗宝专题展厅位于地下一层，有直达大型无障碍电梯，馆内全平无门槛地面，光线温和不刺眼，休息软凳充足",
            description: "细细观赏何家村窖藏出土的一千多件盛唐金银器。从金丝香囊到兽首玛瑙杯，近距离领略开元盛世高超绝伦的工艺美学与中西文明交流史。"
          },
          {
            type: "transit",
            fromStop: "xa_d3_museum",
            toStop: "xa_d3_lunch",
            mode: "taxi",
            distanceKm: 4,
            estimatedMinutes: 12,
            navigationDetail: "专车接送至老孙家饭庄传统老字号餐厅"
          },
          {
            type: "activity",
            id: "xa_d3_lunch",
            name: "老孙家饭庄 (南马道巷老字号) · 温胃正宗优质牛羊肉泡馍",
            category: "food",
            timeSlot: "11:45 - 13:00",
            durationMinutes: 75,
            coordinates: [34.253, 108.932],
            dropOffPoint: "老孙家老字号南马道巷正门前平整落客处",
            openingHours: "10:30 - 21:00",
            reservationRequired: true,
            reservationChannel: "电话提前订包房",
            photoTip: "青花大瓷碗中浓白高汤与切得齐整的黄牛肉片、糖蒜小碟",
            elderKidNotes: "服务人员可代为机切黄豆大馍粒，牛肉慢火炖烂至入口即化，高汤暖胃养肠，搭配爽脆甜开胃糖蒜",
            description: "品尝百年非遗老孙家优质牛羊肉泡馍。地道老汤熬煮八小时，肉烂汤浓，香醇扑鼻，为长辈暖心暖胃补充充沛能量。"
          },
          {
            type: "transit",
            fromStop: "xa_d3_lunch",
            toStop: "xa_d3_hotel_rest",
            mode: "taxi",
            distanceKm: 4.8,
            estimatedMinutes: 15,
            navigationDetail: "专车返回大雁塔威斯汀酒店"
          },
          {
            type: "activity",
            id: "xa_d3_hotel_rest",
            name: "午后客房静养休整",
            category: "rest",
            timeSlot: "13:30 - 15:30",
            durationMinutes: 120,
            coordinates: [34.2185, 108.9638],
            dropOffPoint: "威斯汀客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "静享午後时光",
            elderKidNotes: "平躺午睡养精蓄锐，准备迎接傍晚不夜城美景",
            description: "客房内安静小睡，让双脚与腰背彻底放松恢复活力。"
          },
          {
            type: "transit",
            fromStop: "xa_d3_hotel_rest",
            toStop: "xa_d3_tang_mall",
            mode: "walk",
            distanceKm: 0.3,
            estimatedMinutes: 6,
            navigationDetail: "自酒店西侧步行道平步进入大唐不夜城景观主街"
          },
          {
            type: "activity",
            id: "xa_d3_tang_mall",
            name: "大唐不夜城 · 步行街平步观灯 & 贞观之治盛世华灯巡礼",
            category: "culture",
            timeSlot: "17:30 - 19:30",
            durationMinutes: 120,
            coordinates: [34.2085, 108.9642],
            dropOffPoint: "大唐不夜城开元广场落客口",
            openingHours: "全天开放 (华灯初上 18:30 - 23:00)",
            reservationRequired: false,
            photoTip: "飞檐斗拱红灯笼长街，盛唐仕女不倒翁互动与贞观浮雕璀璨金光",
            elderKidNotes: "整条大唐不夜城步行街2.1公里全部为极宽阔纯平花岗岩步行道，全域禁止任何机动车，轮椅或童车推行极其顺滑舒适，每隔30米设休息椅",
            description: "华灯初上，漫步大唐不夜城。唐风红灯笼与金色宫灯交织，身着汉服的游人如织，犹如穿越回千年前长安上元灯会，气氛祥和典雅。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "西安饭庄 (钟楼旗舰店 / 大唐不夜城分号)",
            cuisineStyle: "中华老字号传统陕菜正餐",
            recommendedDishes: ["老字号葫芦鸡", "温拌腰丝", "金线油塔（配酸辣汁）", "鲜蘑水晶素虾仁"],
            elderKidSuitability: "金线油塔细如金丝松软可口，素虾仁清淡爽口无负担",
            perPersonBudget: "¥120 - ¥160 / 人",
            addressOrDropOff: "大唐不夜城曲江海港城3街区一层",
            dianpingUrl: "https://www.dianping.com/shop/xian_xianfanzhuang"
          }
        },
        dailyTips: [
          "大唐不夜城晚上19:00后人流渐增，建议推着轮椅或跟随长辈慢步走靠边景观道，视野开阔且无拥挤感",
          "陕历博展馆预约务必提前三天一早通过小程序抢预约，如遇约满可改选大唐遗宝珍宝馆特展票入场"
        ]
      },
      {
        dayNumber: 4,
        dateOrLabel: "Day 4 · 小雁塔古刹晨钟幽静 & 德发长饺子宴舒心归途",
        theme: "荐福晨钟古槐 · 德发长一饺一味 · 归程从容",
        paceScore: "relaxed",
        mapConfig: {
          center: [34.2407, 108.9409],
          zoom: 15
        },
        timeline: [
          {
            type: "transit",
            fromStop: "xa_d4_hotel",
            toStop: "xa_d4_xiaoyanta",
            mode: "charter",
            distanceKm: 3.8,
            estimatedMinutes: 12,
            navigationDetail: "专车经友谊西路送达小雁塔北门平坦入园口"
          },
          {
            type: "activity",
            id: "xa_d4_xiaoyanta",
            name: "小雁塔 (荐福寺) · 千年古槐林漫步 & 雁塔晨钟清心祈福",
            category: "nature",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [34.2407, 108.9409],
            dropOffPoint: "小雁塔北门停车场无台阶落客区",
            openingHours: "09:00 - 18:00 (周二闭馆)",
            reservationRequired: true,
            reservationChannel: "西安博物院微信公众号免费预约入园",
            photoTip: "苍劲的唐代古槐树掩映小雁塔密檐古影，清幽恬淡",
            elderKidNotes: "园林极为清幽宁静，游客量远少于大雁塔，平整砖道穿行于百年苍松古槐间，空气清新无尘",
            description: "小雁塔环境幽雅，苍松古槐参天。缓步走在绿荫青砖道上，聆听著名关中八景之一的“雁塔晨钟”，在清幽古刹园林中平心静气感受长安古韵。"
          },
          {
            type: "transit",
            fromStop: "xa_d4_xiaoyanta",
            toStop: "xa_d4_lunch",
            mode: "taxi",
            distanceKm: 2.5,
            estimatedMinutes: 10,
            navigationDetail: "专车接送至钟鼓楼广场德发长总店"
          },
          {
            type: "activity",
            id: "xa_d4_lunch",
            name: "德发长饺子馆 (钟鼓楼总店) · 中华老字号一饺一味饺子宴",
            category: "food",
            timeSlot: "11:45 - 13:00",
            durationMinutes: 75,
            coordinates: [34.2595, 108.945],
            dropOffPoint: "钟鼓楼广场西大街3号德发长正门",
            openingHours: "10:30 - 21:00",
            reservationRequired: true,
            reservationChannel: "电话提前订座",
            photoTip: "造型逼真的天鹅水饺、白菜如意蒸饺端上蒸笼",
            elderKidNotes: "传统手工面皮软嫩，馅料有三鲜、荠菜、虾仁等，清淡软滑极易嚼烂消化",
            description: "品尝享誉中外的德发长百饺宴。蒸、煮、煎各式小巧玲珑精致饺子，一馅一形，鲜美多汁，寓意团圆美满。"
          },
          {
            type: "transit",
            fromStop: "xa_d4_lunch",
            toStop: "xa_d4_departure",
            mode: "charter",
            distanceKm: 18,
            estimatedMinutes: 30,
            navigationDetail: "商务专车由德发长接载，经快速路直达西安北站或咸阳国际机场"
          },
          {
            type: "activity",
            id: "xa_d4_departure",
            name: "专车平稳送站送机 · 结束盛唐古都舒心之旅",
            category: "rest",
            timeSlot: "13:30 - 14:30",
            durationMinutes: 60,
            coordinates: [34.375, 108.938],
            dropOffPoint: "高铁站进站口落客平台或机场T3出发层",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "满载古都长安墨香回忆",
            elderKidNotes: "专车司机协助提送特产行李，免去长辈负重奔走",
            description: "专车平稳送达安检出发口，长辈轻松步入VIP候车室，满载盛唐长安的美好回忆启程归家。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "德发长饺子馆 (钟鼓楼总店)",
            cuisineStyle: "中华老字号非物质文化遗产饺子宴",
            recommendedDishes: ["清香荠菜蒸饺", "虾仁三鲜水饺", "如意翡翠白菜饺", "温润酸汤珍珠小水饺"],
            elderKidSuitability: "现包现蒸，面皮筋道馅心多汁，清淡温和，老幼皆宜",
            perPersonBudget: "¥100 - ¥140 / 人",
            addressOrDropOff: "莲湖区西大街3号（钟鼓楼广场正中）",
            dianpingUrl: "https://www.dianping.com/shop/xian_defachang"
          }
        },
        dailyTips: [
          "西安北站高铁候车区面积大，可提前预约12306无障碍爱心直通车，直接将长辈接驳至对应车厢门口",
          "伴手礼推荐选购陕拾叁秦酥（核桃红枣馅，软糯微甜少糖）与泾渭茯茶砖"
        ]
      }
    ],
    reservationChecklist: [
      {
        spotName: "秦始皇帝陵博物院 (兵马俑)",
        daysInAdvance: 7,
        platform: "微信公众号【秦始皇帝陵博物院】",
        ticketPrice: "¥120 / 人（65岁以上老人凭身份证免票）",
        requiresRealNameId: true,
        bookingTip: "提前7天线上实名预约，务必带身份证，长辈免票需提前在小程序选择敬老优惠0元票"
      },
      {
        spotName: "陕西历史博物馆",
        daysInAdvance: 3,
        platform: "微信小程序【陕西历史博物馆】",
        ticketPrice: "大唐遗宝展厅票¥30 / 人（老人优惠票）",
        requiresRealNameId: true,
        bookingTip: "提前3天每天10:00、11:00整点分批放票，建议直接选购特展票，无需排基础免费馆大队"
      },
      {
        spotName: "小雁塔 (西安博物院)",
        daysInAdvance: 3,
        platform: "微信公众号【西安博物院】",
        ticketPrice: "免费预约",
        requiresRealNameId: true,
        bookingTip: "提前3天实名预约，长辈刷身份证即可入园"
      }
    ],
    emergencyContacts: [
      {
        role: "西安交通大学第一附属医院 (国家三甲综合)",
        phone: "029-85323112",
        note: "雁塔西路277号，距离大雁塔威斯汀酒店仅2.8公里"
      },
      {
        role: "陕西省人民医院 (国家三甲老年医学中心)",
        phone: "029-85251331",
        note: "友谊西路256号，老年多发病急救保障中心"
      },
      {
        role: "西安市文化旅游热线",
        phone: "029-12345",
        note: "7x24小时旅游诉求与无障碍通行响应"
      }
    ]
  },
  {
    id: "curated_shanghai_3d",
    meta: {
      tripTitle: "上海 3天2晚 · 海派雅韵与外滩滨江无障碍慢漫游",
      destinations: ["上海"],
      durationDays: 3,
      travelerProfile: ["海派风情", "长辈舒享", "滨水无障碍", "米其林本帮菜"],
      budgetTier: "luxury",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-12T08:30:00.000Z",
      coverImage: "/images/spot_shanghai_bund.jpg",
      isPublic: true,
      viewsCount: 2430,
      likesCount: 226
    },
    overview: {
      highlights: [
        "入住外滩百年和平饭店，直梯无障碍通达黄浦江岸，推开窗即是万国建筑群与陆家嘴天际线",
        "浦东美术馆全平缓宽阔坡道与无障碍观景大直梯，镜厅平视黄浦江两岸百年风华",
        "豫园九曲桥江南古典回廊与绿波廊老字号点心，品尝地道蟹粉小笼与桂花拉糕",
        "武康路法租界法桐绿荫下平整漫步，近距离欣赏诺曼底公寓武康大楼经典船型立面",
        "老正兴米其林一星中华老字号油爆青虾、圆苑招牌浓油赤酱软糯红烧肉极致美味"
      ],
      logisticsSummary: "全程专车点对点护送。外滩与浦东滨水步道全线配有升降机与缓坡，步道宽敞平坦无门槛，下午安排两小时和平饭店客房静养下午茶，节奏闲适优雅。",
      weatherAndPacking: [
        "上海春秋温润（15℃ - 24℃），黄浦江畔晚风微凉，建议随身携带一条轻柔羊绒披肩或防风风衣",
        "浦东美术馆与豫园室内展馆温控适宜，适合穿柔软防滑的软底皮鞋或休闲鞋",
        "随身备便携水杯，各高档商圈及展馆均设纯净温水补水站"
      ]
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 和平饭店风华初见 & 绿波廊江南美点 & 外滩晚风",
        theme: "外滩万国建筑 · 和平饭店传奇入住 · 黄浦江两岸暮色",
        paceScore: "relaxed",
        mapConfig: {
          center: [31.2405, 121.488],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "百年和平饭店客房午休与下午茶，恢复精气神"
        },
        timeline: [
          {
            type: "activity",
            id: "sh_d1_hotel",
            name: "上海和平饭店 (Fairmont Peace Hotel) · 尊享入住与爵士沙龙",
            category: "rest",
            timeSlot: "11:30 - 12:30",
            durationMinutes: 60,
            coordinates: [31.2405, 121.488],
            dropOffPoint: "南京东路20号和平饭店落客门厅",
            openingHours: "全天候接待",
            reservationRequired: true,
            reservationChannel: "官方预订",
            photoTip: "绿色八角亭屋顶下Art Deco装饰艺术旋转门与大堂八角彩色琉璃穹顶",
            elderKidNotes: "外滩核心历史建筑，全套无障碍电梯直达客房，门童提供轮椅协助与管家行李服务",
            description: "抵沪后专车送达外滩标志性和平饭店。踩在厚软的羊毛地毯上，聆听轻柔的爵士乐，感受1930年代远东第一楼的海派奢华与温润细致服务。"
          },
          {
            type: "transit",
            fromStop: "sh_d1_hotel",
            toStop: "sh_d1_lunch",
            mode: "taxi",
            distanceKm: 2,
            estimatedMinutes: 8,
            navigationDetail: "专车经河南南路送达豫园商城南门平整入口"
          },
          {
            type: "activity",
            id: "sh_d1_lunch",
            name: "绿波廊酒楼 (豫园九曲桥畔) · 百年海派点心与江南名馔",
            category: "food",
            timeSlot: "12:30 - 13:45",
            durationMinutes: 75,
            coordinates: [31.2272, 121.4921],
            dropOffPoint: "豫园老街南门平坦落客区",
            openingHours: "11:00 - 14:00",
            reservationRequired: true,
            reservationChannel: "大众点评或电话提前订九曲桥观景位",
            photoTip: "窗外九曲桥鲤鱼戏水与明清飞檐翘角，桌上晶莹剔透的点心小蒸笼",
            elderKidNotes: "酒楼配备室内观光电梯直达二三楼包间，特制蟹粉小笼皮薄汤多、桂花拉糕软糯不黏牙，极适长辈品尝",
            description: "在豫园标志性九曲桥畔的绿波廊老字号享用国宴点心席。品味软糯香甜的桂花拉糕、眉毛酥与金牌蟹粉小笼包，满口鲜甜江南韵味。"
          },
          {
            type: "transit",
            fromStop: "sh_d1_lunch",
            toStop: "sh_d1_hotel_rest",
            mode: "taxi",
            distanceKm: 2,
            estimatedMinutes: 8,
            navigationDetail: "专车接回和平饭店"
          },
          {
            type: "activity",
            id: "sh_d1_hotel_rest",
            name: "和平饭店客房静养休整 & 茉莉酒廊优雅下午茶",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [31.2405, 121.488],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房窗前一杯英式红茶，江面货轮与海关大楼大钟悠然同框",
            elderKidNotes: "客房内静卧午休1.5小时，随后在一楼茉莉酒廊品尝温热花草茶",
            description: "在典雅舒适的客房中平躺小睡，醒后于大堂茉莉酒廊听轻柔钢琴曲，度过优雅从容的午后时光。"
          },
          {
            type: "transit",
            fromStop: "sh_d1_hotel_rest",
            toStop: "xa_d1_bund",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 3,
            navigationDetail: "出酒店东门经无障碍缓坡直达外滩观景平台"
          },
          {
            type: "activity",
            id: "xa_d1_bund",
            name: "外滩观景平台 · 无障碍直梯登临 & 黄浦江两岸璀璨暮色",
            category: "nature",
            timeSlot: "17:00 - 18:30",
            durationMinutes: 90,
            coordinates: [31.238, 121.49],
            dropOffPoint: "南京东路外滩交界处无障碍观景坡道",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "晚霞倒映在黄浦江水面，对岸陆家嘴东方明珠与外滩万国建筑群亮灯瞬间",
            elderKidNotes: "观景平台设有专用直达观光升降梯与宽阔平整坡道，江风温和，步道宽达20米且无台阶阻碍",
            description: "傍晚漫步外滩滨水大道，海关大楼钟声悠扬回荡。微风徐徐吹来，浦西百年古典石楼与浦东摩天大楼在晚霞与霓虹中交织成绚烂画卷。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "新吉士酒楼 (外滩福州路总店)",
            cuisineStyle: "正宗老弄堂本帮传统特色私房菜",
            recommendedDishes: ["浓油赤酱本帮红烧肉（配百叶结）", "清炒野生河虾仁（甘甜鲜嫩）", "鲜笃笋（老火炖砂锅）", "油爆河虾"],
            elderKidSuitability: "红烧肉肥瘦相间软烂酥化，鲜笃笋鲜香暖胃，少糖少油特调版本适宜老年人",
            perPersonBudget: "¥180 - ¥240 / 人",
            addressOrDropOff: "黄浦区福州路107号（距离外滩仅200米）",
            dianpingUrl: "https://www.dianping.com/shop/shanghai_xinjishi"
          }
        },
        dailyTips: [
          "外滩观景平台晚上19:00准时亮灯，建议17:30提前到达长椅处占位，观赏从落日到华灯初上的渐变绝景",
          "和平饭店老年爵士乐团晚上20:30有现场演出，长辈如有兴趣可在大堂吧静坐聆听30分钟"
        ]
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 浦东美术馆镜厅看江 & 老正兴米其林品鲜",
        theme: "滨水现当代艺术 · 浦东平缓坡道漫步 · 中华老字号鲜味",
        paceScore: "relaxed",
        mapConfig: {
          center: [31.2396, 121.4975],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 15:30",
          reason: "过江观展后返房午休，避开正午人流"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "sh_d2_hotel",
            toStop: "sh_d2_museum",
            mode: "charter",
            distanceKm: 5.5,
            estimatedMinutes: 12,
            navigationDetail: "商务专车穿延安东路隧道过江直达浦东美术馆下沉式贵宾落客区"
          },
          {
            type: "activity",
            id: "sh_d2_museum",
            name: "浦东美术馆 (MAP) · 全馆平缓无障碍设计 & 镜厅平视外滩",
            category: "culture",
            timeSlot: "09:30 - 12:00",
            durationMinutes: 150,
            coordinates: [31.2396, 121.4975],
            dropOffPoint: "滨江大道2777号浦东美术馆无障碍电梯专用入口",
            openingHours: "10:00 - 21:00",
            reservationRequired: true,
            reservationChannel: "浦东美术馆官方小程序提前购票",
            photoTip: "四层镜厅巨大通透玻璃幕墙前，与外滩百年万国建筑群完美框景合影",
            elderKidNotes: "普利兹克奖大师让·努维尔设计，全馆超宽缓坡与平坦回廊，设有4台大型医用级无障碍升降电梯，免费提供轻便轮椅借用",
            description: "在浦东滨江最新文化地标，漫步通透宽敞的国际级艺术展厅。尤以镜厅视角最为震撼，透过巨幅落地窗，黄浦江对岸的和平饭店与外滩建筑如同一幅活生生的动态油画。"
          },
          {
            type: "transit",
            fromStop: "sh_d2_museum",
            toStop: "sh_d2_lunch",
            mode: "charter",
            distanceKm: 5,
            estimatedMinutes: 12,
            navigationDetail: "专车经隧道返回浦西福州路老正兴菜馆"
          },
          {
            type: "activity",
            id: "sh_d2_lunch",
            name: "老正兴菜馆 (福州路总店) · 米其林一星中华老字号本帮席",
            category: "food",
            timeSlot: "12:15 - 13:30",
            durationMinutes: 75,
            coordinates: [31.2355, 121.482],
            dropOffPoint: "福州路556号老正兴门前平坦车道",
            openingHours: "11:00 - 14:00",
            reservationRequired: true,
            reservationChannel: "电话提前订包房",
            photoTip: "百年招牌油爆河虾红润透亮，色泽诱人",
            elderKidNotes: "米其林一星老牌本帮，草头圈子与油爆虾火候极精，食材新鲜软烂，有直梯上楼",
            description: "品尝创于清同治七年的本帮鼻祖老正兴。招牌油爆青虾外脆内嫩、八宝辣酱温和醇厚、清蒸鲥鱼鲜美滑润，尽显海派匠心。"
          },
          {
            type: "transit",
            fromStop: "sh_d2_lunch",
            toStop: "sh_d2_hotel_rest",
            mode: "taxi",
            distanceKm: 1.5,
            estimatedMinutes: 6,
            navigationDetail: "专车送回和平饭店"
          },
          {
            type: "activity",
            id: "sh_d2_hotel_rest",
            name: "和平饭店客房安稳午睡静养",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [31.2405, 121.488],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房静休",
            elderKidNotes: "换拖鞋平躺深睡，舒缓足部压力",
            description: "客房内静卧休养两小时，饮一杯清热雪梨水，养神蓄力。"
          },
          {
            type: "transit",
            fromStop: "sh_d2_hotel_rest",
            toStop: "sh_d2_pudong_boardwalk",
            mode: "charter",
            distanceKm: 5.2,
            estimatedMinutes: 12,
            navigationDetail: "专车经陆家嘴环路送达滨江大道亲水平台"
          },
          {
            type: "activity",
            id: "sh_d2_pudong_boardwalk",
            name: "滨江大道 · 亲水木栈道平坦漫步 & 仰观陆家嘴摩天大楼",
            category: "nature",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [31.237, 121.499],
            dropOffPoint: "滨江大道富都段平坦无障碍落客平台",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "黄浦江游船在水面划过，身后是上海中心与环球金融中心刺破云霄的壮美景象",
            elderKidNotes: "滨江大道全线为宽敞平坦木栈道与塑胶慢行道，无任何台阶，长椅密集，绿植葱郁",
            description: "在浦东滨江公园漫步，仰望身旁现代建筑奇迹上海中心与金茂大厦，远观对岸老外滩晚霞，在微风中感受上海包罗万象的都市活力。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "圆苑酒家 (兴国路花园洋房店)",
            cuisineStyle: "沪上名流公认红烧肉第一家",
            recommendedDishes: ["圆苑特色红烧肉（软糯无渣）", "清炒野生河虾仁", "鸡汁煮干丝（温润易嚼）", "鲜蟹粉扒豆腐"],
            elderKidSuitability: "红烧肉炖透多汁，豆腐软嫩鲜香，花园洋房庭院清幽雅致无喧闹",
            perPersonBudget: "¥200 - ¥280 / 人",
            addressOrDropOff: "长宁区兴国路201号花园洋房内",
            dianpingUrl: "https://www.dianping.com/shop/shanghai_yuanyuan"
          }
        },
        dailyTips: [
          "浦东美术馆顶层顶楼餐厅提供无糖温热红茶，可在观展间隙小憩远眺",
          "圆苑兴国路店位于法租界老洋房内，建议提前预订一层庭院景观包间，方便老人进出"
        ]
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 武康路法租界法桐绿荫 & 兰心温润本帮告别",
        theme: "衡复历史风貌 · 武康大楼慢拍 · 优雅满载而归",
        paceScore: "relaxed",
        mapConfig: {
          center: [31.2052, 121.4425],
          zoom: 15
        },
        timeline: [
          {
            type: "transit",
            fromStop: "sh_d3_hotel",
            toStop: "sh_d3_wukang",
            mode: "charter",
            distanceKm: 6.8,
            estimatedMinutes: 18,
            navigationDetail: "专车载长辈与行李出发，沿淮海中路林荫道送达武康路平整街区"
          },
          {
            type: "activity",
            id: "sh_d3_wukang",
            name: "武康路历史文化街区 · 武康大楼经典立面与法桐绿荫平缓散策",
            category: "culture",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [31.2052, 121.4425],
            dropOffPoint: "淮海中路武康路口平坦落客道（大楼正对面）",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "百年法国梧桐树叶斑驳光影下，邬达克设计的武康大楼红色砖墙巨轮船头造型",
            elderKidNotes: "武康路全长1.1公里，人行步道平整宽阔，梧桐树荫遮蔽防晒，沿途咖啡馆与老洋房庭院可随处坐下歇脚",
            description: "慢步在“浓缩了上海近代百年历史”的名街武康路。欣赏红砖拱券的武康大楼、罗密欧阳台与宋庆龄故居外墙绿荫，沉浸于海派浪漫典雅的历史文脉中。"
          },
          {
            type: "transit",
            fromStop: "sh_d3_wukang",
            toStop: "sh_d3_lunch",
            mode: "taxi",
            distanceKm: 2.8,
            estimatedMinutes: 8,
            navigationDetail: "专车经长乐路送达进贤路兰心餐厅"
          },
          {
            type: "activity",
            id: "sh_d3_lunch",
            name: "兰心餐厅 (进贤路米其林必比登) · 经典弄堂本帮私房小馆",
            category: "food",
            timeSlot: "11:45 - 13:00",
            durationMinutes: 75,
            coordinates: [31.2185, 121.462],
            dropOffPoint: "进贤路130号兰心餐厅门前",
            openingHours: "11:00 - 14:00",
            reservationRequired: true,
            reservationChannel: "提前到店或电话订位",
            photoTip: "小黑板上手写菜单与热气腾腾的响油鳝丝",
            elderKidNotes: "米其林必比登推介本帮老店，响油鳝丝去骨滑嫩，酱鸭鲜甜浓郁，极具老上海家庭温情",
            description: "在老洋房小马路进贤路品尝地道弄堂滋味。软嫩去骨的响油鳝丝淋上沸香麻油，搭配清甜酱鸭与鲜鸭汤，为上海慢游留下温暖回忆。"
          },
          {
            type: "transit",
            fromStop: "sh_d3_lunch",
            toStop: "sh_d3_departure",
            mode: "charter",
            distanceKm: 16,
            estimatedMinutes: 28,
            navigationDetail: "商务专车由进贤路接驾，经延安高架直达虹桥枢纽或浦东机场"
          },
          {
            type: "activity",
            id: "sh_d3_departure",
            name: "专车直达虹桥/浦东机场 · 从容返程",
            category: "rest",
            timeSlot: "13:30 - 14:30",
            durationMinutes: 60,
            coordinates: [31.194, 121.318],
            dropOffPoint: "虹桥枢纽/浦东机场商务出发落客区",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "海派雅致记忆相伴归途",
            elderKidNotes: "司机协助全套行李卸车并送至值机岛无障碍柜台",
            description: "商务专车直送至出发层落客区，免除换乘地铁与提拉重物困扰，安闲踏上归途。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "兰心餐厅 (进贤路本帮老字号)",
            cuisineStyle: "米其林必比登传统海派弄堂家常菜",
            recommendedDishes: ["响油鳝丝（去骨细嫩多汁）", "本帮酱鸭（咸甜适口）", "酒香草头（鲜嫩多汁）", "扁尖老鸭汤"],
            elderKidSuitability: "鳝丝无刺软糯，老鸭汤温润鲜美，口感温和极适宜老人胃口",
            perPersonBudget: "¥90 - ¥130 / 人",
            addressOrDropOff: "黄浦区进贤路130号",
            dianpingUrl: "https://www.dianping.com/shop/shanghai_lanxin"
          }
        },
        dailyTips: [
          "武康大楼周边周末人流较多，上午09:30到达人少光线柔和，最适合平步慢赏拍照",
          "伴手礼推荐在淮海中路全国土特产商店选购培丽酱菜与哈尔滨食品厂现烤蝴蝶酥"
        ]
      }
    ],
    reservationChecklist: [
      {
        spotName: "浦东美术馆 (MAP)",
        daysInAdvance: 5,
        platform: "微信小程序【浦东美术馆MAP】",
        ticketPrice: "¥100 / 人（60岁以上老人持有效身份证享优待票¥80）",
        requiresRealNameId: true,
        bookingTip: "实名预约购票，长辈携带身份证即可享受优待票并刷证入园"
      },
      {
        spotName: "豫园古典园林",
        daysInAdvance: 3,
        platform: "美团 / 豫园官方售票平台",
        ticketPrice: "¥40 / 人（60岁以上老人半价¥20）",
        requiresRealNameId: true,
        bookingTip: "提前实名预约入园，园内台阶多处已设平缓木坡板辅助通过"
      }
    ],
    emergencyContacts: [
      {
        role: "复旦大学附属中山医院 (国家三甲综合)",
        phone: "021-64041990",
        note: "徐汇区枫林路180号，上海医疗综合实力前列"
      },
      {
        role: "上海交通大学医学院附属瑞金医院",
        phone: "021-64370045",
        note: "黄浦区瑞金二路197号，中心城区顶尖医疗保障中心"
      },
      {
        role: "上海文旅便民服务热线",
        phone: "021-12345",
        note: "全天候提供旅游咨询与紧急医疗绿色通道协助"
      }
    ]
  },
  {
    id: "curated_hongkong_3d",
    meta: {
      tripTitle: "香港 3天2晚 · 维港掠影与香江米其林粤韵慢品",
      destinations: ["香港"],
      durationDays: 3,
      travelerProfile: ["维港美景", "长辈舒享", "无障碍缆车", "米其林点心"],
      budgetTier: "luxury",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-12T08:30:00.000Z",
      coverImage: "/images/spot_hongkong_victoria.jpg",
      isPublic: true,
      viewsCount: 2210,
      likesCount: 204
    },
    overview: {
      highlights: [
        "全新第六代山顶缆车全平步无障碍登车，缓缓穿梭林荫直达凌霄阁，平视全港天际线与维港海峡",
        "百年天星小轮平稳横渡维多利亚港，吹拂温和海风，体验被《国家地理》评为人生必游之旅",
        "西九文化区海滨平坦大草坪漫步与香港故宫文化博物馆，全馆宽敞扶梯与无障碍景观回廊",
        "品尝添好运米其林点心酥皮叉烧包、镛记正宗炭烧烧鹅、陆羽茶室百年杏汁白肺汤",
        "入住尖沙咀九龙香格里拉大酒店，推窗即揽维港海景，每日享受两小时海景静休下午茶"
      ],
      logisticsSummary: "香港出行依托点对点商务包车与无障碍轨道交通。景点均具备完善轮椅电梯设施，避开中上环陡峭斜坡，餐厅全数支持 Google Reviews 高分验证与 Google Maps 路线导航。",
      weatherAndPacking: [
        "香港秋冬温和舒适（18℃ - 25℃），室内商场空调较足，务必为长辈携带防风薄外套或羊绒披肩",
        "赴港需随身携带有效往来港澳通行证及有效签注，长辈备好常用日常药品及保温杯",
        "香港公共场所均配备直饮水及无障碍洗手间，八达通卡支持公共交通一触即付"
      ]
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 尖沙咀海滨初遇 & 添好运点心 & 维港幻彩夜色",
        theme: "初抵香江 · 星光大道平步 · 酥皮叉烧包与维港夜景",
        paceScore: "relaxed",
        mapConfig: {
          center: [22.2936, 114.1738],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "海景客房午休与下午茶，缓解抵港通关疲劳"
        },
        timeline: [
          {
            type: "activity",
            id: "hk_d1_hotel",
            name: "九龙香格里拉大酒店 (Kowloon Shangri-La) · 海景入住与维港视野",
            category: "rest",
            timeSlot: "11:30 - 12:30",
            durationMinutes: 60,
            coordinates: [22.2965, 114.177],
            dropOffPoint: "尖沙咀么地道64号酒店大堂正门",
            openingHours: "全天候接待",
            reservationRequired: true,
            reservationChannel: "官方预订",
            photoTip: "超大落地窗前俯瞰维多利亚港穿梭的天星小轮与对岸港岛摩天楼",
            elderKidNotes: "酒店直梯直通尖东无障碍通道与海滨长廊，门童礼宾提供轮椅辅助，客房卫浴宽阔安全",
            description: "抵港后专车送达尖沙咀海滨九龙香格里拉大酒店。步入华贵大堂，维港海风轻拂，在落地窗前尽览香港经典明信片般的繁华景致。"
          },
          {
            type: "transit",
            fromStop: "hk_d1_hotel",
            toStop: "hk_d1_lunch",
            mode: "charter",
            distanceKm: 3.5,
            estimatedMinutes: 10,
            navigationDetail: "专车经梳士巴利道送达添好运深水埗总店"
          },
          {
            type: "activity",
            id: "hk_d1_lunch",
            name: "添好运点心专门店 (Tim Ho Wan) · 米其林一星传奇广式早茶",
            category: "food",
            timeSlot: "12:30 - 13:45",
            durationMinutes: 75,
            coordinates: [22.332, 114.161],
            dropOffPoint: "深水埗福荣街9-11号门前",
            openingHours: "10:00 - 21:30",
            reservationRequired: false,
            photoTip: "金黄酥脆的招牌酥皮焗叉烧包与晶莹剔透的鲜虾饺",
            elderKidNotes: "酥皮叉烧包入口即化，晶莹虾饺皮薄多汁，点心软滑无需费力咀嚼，老幼咸宜",
            description: "品尝享誉全球的添好运米其林茶点。刚出炉的酥皮焗叉烧包外层酥松奶香浓郁，内馅叉烧甜咸适口，配上一壶温热普洱，惬意开胃。"
          },
          {
            type: "transit",
            fromStop: "hk_d1_lunch",
            toStop: "hk_d1_hotel_rest",
            mode: "charter",
            distanceKm: 3.5,
            estimatedMinutes: 10,
            navigationDetail: "专车接回九龙香格里拉大酒店"
          },
          {
            type: "activity",
            id: "hk_d1_hotel_rest",
            name: "香格里拉客房海景静养休整",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [22.2965, 114.177],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房窗前茶几品茗看海",
            elderKidNotes: "平躺午睡1.5小时，舒缓腰背，补充体力",
            description: "在安静的海景客房中静卧休息，窗外船只缓缓驶过，室内温润静谧，彻底恢复体能。"
          },
          {
            type: "transit",
            fromStop: "hk_d1_hotel_rest",
            toStop: "hk_d1_avenue_stars",
            mode: "walk",
            distanceKm: 0.2,
            estimatedMinutes: 5,
            navigationDetail: "出酒店沿平整无障碍木质坡道缓步进入星光大道"
          },
          {
            type: "activity",
            id: "hk_d1_avenue_stars",
            name: "尖沙咀星光大道 · 平坦海滨长廊漫步 & 幻彩咏香江夜景灯光秀",
            category: "photo",
            timeSlot: "17:30 - 19:15",
            durationMinutes: 105,
            coordinates: [22.2936, 114.1738],
            dropOffPoint: "梳士巴利花园星光大道入口平整落客区",
            openingHours: "全天开放 (幻彩咏香江每晚20:00启幕)",
            reservationRequired: false,
            photoTip: "麦兜雕像与维港中环摩天大楼天际线夕阳同框，夜幕下激光束划破夜空",
            elderKidNotes: "星光大道经名师重新规划，全线全平塑木硬化地面，无任何门槛，座椅每隔20米整齐分布，海风温润惬意",
            description: "慢行在宽阔平整的星光大道海滨木栈道上，欣赏沿途名人手印与雕塑。入夜时分，对岸港岛IFC与中银大厦霓虹竞相闪耀，呈现绚烂都市画卷。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "添好运点心专门店 (深水埗总店)",
            cuisineStyle: "米其林一星平民点心王者",
            recommendedDishes: ["酥皮焗叉烧包 (必点)", "晶莹鲜虾饺", "枸杞桂花糕 (清甜润肺)", "黄糖马蹄糕"],
            elderKidSuitability: "点心蒸制软糯，入口即化，无油腻感，老幼皆宜",
            perPersonBudget: "HK$80 - HK$120 / 人",
            addressOrDropOff: "九龙深水埗福荣街9-11号地铺",
            googleRating: "4.4★ (Google Reviews 5,800+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Tim+Ho+Wan+Sham+Shui+Po"
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "镛记酒家 (Yung Kee Restaurant)",
            cuisineStyle: "中环百年传统正宗炭烧粤菜",
            recommendedDishes: ["正宗金牌炭烧烧鹅（皮脆肉嫩多汁）", "清汤爽腩（温和去油）", "陈皮红豆沙", "清炒菜心远"],
            elderKidSuitability: "烧鹅剔透多汁配酸梅酱开胃，清汤牛腩炖烂鲜甜，无障碍直梯直上包间",
            perPersonBudget: "HK$280 - HK$380 / 人",
            addressOrDropOff: "中环威灵顿街32-40号镛记大厦（专车直达门口）",
            googleRating: "4.3★ (Google Reviews 3,200+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Yung+Kee+Restaurant+Hong+Kong"
          }
        },
        dailyTips: [
          "星光大道傍晚海风宜人，建议为长辈随身备一件薄防风开衫外套",
          "镛记酒家位于中环威灵顿街平坦段，专车可直接停在餐厅正门，无需攀爬中环半山陡坡"
        ]
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 第六代山顶缆车无障碍全景 & 天星小轮横渡",
        theme: "太平山顶凌霄阁 · 陆羽茶室百年杏汁汤 · 天星小轮海风慢渡",
        paceScore: "relaxed",
        mapConfig: {
          center: [22.2713, 114.1498],
          zoom: 14
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 15:30",
          reason: "山顶游览后返回酒店静卧午休，放松身心"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "hk_d2_hotel",
            toStop: "hk_d2_tram",
            mode: "charter",
            distanceKm: 6,
            estimatedMinutes: 15,
            navigationDetail: "专车经红磡海底隧道穿过维港，直达中环山顶缆车总站无障碍直升机位旁落客区"
          },
          {
            type: "activity",
            id: "hk_d2_tram",
            name: "山顶缆车 (第六代全新无障碍车厢) & 凌霄阁平视维港全景",
            category: "nature",
            timeSlot: "09:30 - 12:00",
            durationMinutes: 150,
            coordinates: [22.2713, 114.1498],
            dropOffPoint: "中环花园道33号山顶缆车总站专用无障碍升降电梯处",
            openingHours: "07:30 - 23:00",
            reservationRequired: true,
            reservationChannel: "山顶缆车官方网站提前预订VIP快速通关套票",
            photoTip: "墨绿色复古车厢缓缓攀升45度斜坡，透过全景天窗观赏维港两岸高楼如竹笋般退后",
            elderKidNotes: "2022年落成的第六代全新缆车设无阶梯全平步车厢，轮椅与婴儿车可平推直接登车，凌霄阁商场全直梯通达观景台",
            description: "搭乘全新一代山顶缆车，沿绿意葱茏的太平山林荫铁道平稳攀升。登上凌霄阁摩天台，极目远眺，湛蓝海湾、穿梭渡轮与鳞次栉比的摩天楼群尽收眼底。"
          },
          {
            type: "transit",
            fromStop: "hk_d2_tram",
            toStop: "hk_d2_lunch",
            mode: "charter",
            distanceKm: 2,
            estimatedMinutes: 8,
            navigationDetail: "专车接送至中环士丹利街陆羽茶室正门"
          },
          {
            type: "activity",
            id: "hk_d2_lunch",
            name: "陆羽茶室 (Luk Yu Tea House) · 殖民时代古雅茶楼与养生名点",
            category: "food",
            timeSlot: "12:15 - 13:30",
            durationMinutes: 75,
            coordinates: [22.2825, 114.155],
            dropOffPoint: "中环士丹利街24号正门",
            openingHours: "07:00 - 22:00",
            reservationRequired: true,
            reservationChannel: "电话提前预约一楼/二楼古董包厢",
            photoTip: "酸枝木桌椅、彩色玻璃挂落、白底手写菜牌与阿叔提着大铜壶冲茶",
            elderKidNotes: "招牌杏汁炖白肺汤润肺生津，无多余香精与辛辣，滑蛋虾仁细嫩滑口，极受长辈青睐",
            description: "置身拥有近百年历史的中环陆羽茶室，品味老香港的悠闲时光。细品一碗奶白香浓的古法杏汁炖猪肺汤，搭配脆皮糯米鸡，温润滋养。"
          },
          {
            type: "transit",
            fromStop: "hk_d2_lunch",
            toStop: "hk_d2_hotel_rest",
            mode: "charter",
            distanceKm: 5.5,
            estimatedMinutes: 15,
            navigationDetail: "专车过海返回九龙香格里拉酒店"
          },
          {
            type: "activity",
            id: "hk_d2_hotel_rest",
            name: "酒店海景客房午间补眠静养",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [22.2965, 114.177],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "静享午後维港安宁",
            elderKidNotes: "平躺午睡恢复上午山顶漫游体力",
            description: "客房内静养休整，喝一杯润喉温水，彻底消除身体疲劳。"
          },
          {
            type: "transit",
            fromStop: "hk_d2_hotel_rest",
            toStop: "hk_d2_ferry",
            mode: "walk",
            distanceKm: 0.6,
            estimatedMinutes: 10,
            navigationDetail: "出酒店沿平坦梳士巴利道慢行至尖沙咀天星码头"
          },
          {
            type: "activity",
            id: "hk_d2_ferry",
            name: "天星小轮 (Star Ferry) · 百年绿白渡轮平稳横渡维港",
            category: "leisure",
            timeSlot: "16:45 - 17:45",
            durationMinutes: 60,
            coordinates: [22.2941, 114.1685],
            dropOffPoint: "尖沙咀天星码头无障碍平缓登船口",
            openingHours: "06:30 - 23:30",
            reservationRequired: false,
            photoTip: "绿白木质复古船舱内木条长椅，身后是海浪泛起与维港两岸壮美黄昏",
            elderKidNotes: "码头上下船均铺设超宽平缓防滑跳板，轮椅可直接平推登船，船舱宽敞平稳无晕船感",
            description: "以每位几港币的亲民方式，搭乘百年绿白经典天星小轮。在缓缓航行中聆听汽笛低鸣，海风抚面，感受维港怀旧悠然的慢调节拍。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "新同乐鱼翅酒家 (Sun Tung Lok)",
            cuisineStyle: "全球首家非酒店独立米其林三星老牌粤菜",
            recommendedDishes: ["烧汁干葱爆和牛肉（软嫩多汁）", "原只鲜鲍鱼慢煨", "花胶老火靓汤", "金牌脆皮乳鸽"],
            elderKidSuitability: "老火炖汤温润滋补，花胶软滑胶原蛋白丰沛，包厢私密安静",
            perPersonBudget: "HK$450 - HK$650 / 人",
            addressOrDropOff: "尖沙咀弥敦道132号美丽华广场一期4楼（直梯直达）",
            googleRating: "4.6★ (Google Reviews 1,400+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Sun+Tung+Lok+Hong+Kong"
          }
        },
        dailyTips: [
          "山顶缆车建议选购VIP免排队手环，避开常规散客排队通道，节省长辈体力",
          "天星小轮支持直接刷八达通卡或AlipayHK乘车码，65岁以上长辈持乐悠咭或长者八达通享特惠票价"
        ]
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 西九文化区海滨草坪 & 香港故宫文化博物馆",
        theme: "西九文化艺术 · 香港故宫珍宝 · 粤式温润告别",
        paceScore: "relaxed",
        mapConfig: {
          center: [22.3015, 114.1585],
          zoom: 15
        },
        timeline: [
          {
            type: "transit",
            fromStop: "hk_d3_hotel",
            toStop: "hk_d3_palace",
            mode: "charter",
            distanceKm: 3.2,
            estimatedMinutes: 8,
            navigationDetail: "专车送至西九文化区香港故宫地下无障碍落客平台"
          },
          {
            type: "activity",
            id: "hk_d3_palace",
            name: "香港故宫文化博物馆 (HKPM) · 全平缓展厅与九龙海滨全景回廊",
            category: "culture",
            timeSlot: "09:30 - 12:00",
            durationMinutes: 150,
            coordinates: [22.3019, 114.1558],
            dropOffPoint: "博物馆地下1层LG专用无障碍落客区",
            openingHours: "10:00 - 18:00 (周二闭馆)",
            reservationRequired: true,
            reservationChannel: "香港故宫文化博物馆官网预订指定场次门票",
            photoTip: "三层观景露台巨幅玻璃幕墙平眺大屿山与昂船洲大桥海景",
            elderKidNotes: "全馆无任何台阶，每层均配大型静音升降电梯，展厅内设多处软皮休息沙发，提供免费轮椅借用",
            description: "在现代建筑名作中领略近千件北京故宫借展国宝级书画、金石与瓷器。展厅回廊通透开阔，巧妙将中国传统紫禁城中轴意象与维港海景完美融合。"
          },
          {
            type: "transit",
            fromStop: "hk_d3_palace",
            toStop: "hk_d3_lunch",
            mode: "walk",
            distanceKm: 0.4,
            estimatedMinutes: 6,
            navigationDetail: "经全平缓连廊漫步至圆方商场二层"
          },
          {
            type: "activity",
            id: "hk_d3_lunch",
            name: "利苑酒家 (圆方Elements店) · 米其林一星传统粤菜典范",
            category: "food",
            timeSlot: "12:15 - 13:30",
            durationMinutes: 75,
            coordinates: [22.3045, 114.161],
            dropOffPoint: "柯士甸道西1号圆方商场2楼",
            openingHours: "11:30 - 15:00",
            reservationRequired: true,
            reservationChannel: "电话提前预订",
            photoTip: "晶莹剔透金牌冰烧三层肉与原创正宗杨枝甘露",
            elderKidNotes: "杨枝甘露原创发源地，甜品清润爽喉，冰烧三层肉外脆肉嫩毫无油腻感，老少咸宜",
            description: "在顶级购物中心圆方内的利苑酒家品味经典。尝一口酥脆入味的冰烧三层肉，配以清蒸鲜活石斑鱼与经典杨枝甘露，为香港之行画上圆满句号。"
          },
          {
            type: "transit",
            fromStop: "hk_d3_lunch",
            toStop: "hk_d3_departure",
            mode: "charter",
            distanceKm: 0.8,
            estimatedMinutes: 3,
            navigationDetail: "专车自圆方下层送至香港西九龙高铁站或香港国际机场"
          },
          {
            type: "activity",
            id: "hk_d3_departure",
            name: "西九龙高铁站 / 香港机场 · 便捷通关返程",
            category: "rest",
            timeSlot: "13:45 - 14:45",
            durationMinutes: 60,
            coordinates: [22.3035, 114.166],
            dropOffPoint: "西九龙站一地两检落客大厅",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "满载香江港韵美好回忆",
            elderKidNotes: "西九龙站实现一地两检，站内设全套无障碍行李推车与爱心电瓶车代步",
            description: "专车直达西九龙高铁站落客平台，在同一处完成香港与内地通关手续，轻松登车返家。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "利苑酒家 (圆方店)",
            cuisineStyle: "米其林一星高级粤菜名府",
            recommendedDishes: ["金牌冰烧三层肉", "古法清蒸海石斑", "自制滑豆腐煲", "原汁原味杨枝甘露"],
            elderKidSuitability: "清蒸海鱼鲜甜无小刺，滑豆腐软糯易咽，杨枝甘露清润怡人",
            perPersonBudget: "HK$220 - HK$320 / 人",
            addressOrDropOff: "西九龙柯士甸道西1号圆方2068号铺",
            googleRating: "4.4★ (Google Reviews 1,900+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Lei+Garden+Elements+HK"
          }
        },
        dailyTips: [
          "西九龙高铁站内有直达站台的专用无障碍电梯，如有轮椅长辈可直接告知港铁爱心职员协助优先检票登车",
          "伴手礼推荐选购珍妮曲奇聪明小熊饼干（尖沙咀美丽华附近）或半岛酒店自制经典XO酱"
        ]
      }
    ],
    reservationChecklist: [
      {
        spotName: "香港山顶缆车与凌霄阁摩天台",
        daysInAdvance: 5,
        platform: "官方网站【Peak Tram】或 Klook",
        ticketPrice: "HK$148 / 往返套票（65岁以上长者享特惠票HK$74）",
        requiresRealNameId: false,
        bookingTip: "提前购买电子票，现场扫二维码走专属快速通道登车"
      },
      {
        spotName: "香港故宫文化博物馆",
        daysInAdvance: 7,
        platform: "官方网站【香港故宫文化博物馆】",
        ticketPrice: "HK$60 / 标准门票（60岁以上长者半价HK$30）",
        requiresRealNameId: true,
        bookingTip: "提前实名选定时段入场，现场长者凭回乡证或有效护照核验享半价"
      }
    ],
    emergencyContacts: [
      {
        role: "养和医院 (Hong Kong Sanatorium & Hospital - 香港顶级私立)",
        phone: "+852-25720211",
        note: "跑马地山村道2号，全港顶尖医疗与急诊服务"
      },
      {
        role: "伊利沙伯医院 (公立三甲急症全科医院)",
        phone: "+852-35068888",
        note: "九龙油麻地加士居道30号，距离尖沙咀酒店仅1.8公里"
      },
      {
        role: "香港紧急求助呼叫 (警务/火警/救护车)",
        phone: "999",
        note: "香港统一紧急求助电话，全天候即时派车响应"
      }
    ]
  },
  {
    id: "curated_tokyo_4d",
    meta: {
      tripTitle: "东京 4天3晚 · 都会静谧与和风庭园低体力漫游",
      destinations: ["东京"],
      durationDays: 4,
      travelerProfile: ["日式禅韵", "长辈舒享", "全球地图导航", "米其林美食"],
      budgetTier: "luxury",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-12T08:30:00.000Z",
      coverImage: "/images/spot_tokyo_shinjuku.jpg",
      isPublic: true,
      viewsCount: 2680,
      likesCount: 245
    },
    overview: {
      highlights: [
        "浅草寺避开人群清晨缓步巡礼，本堂配专属轮椅升降电梯与平整石板参道",
        "新宿御苑平坦步道与日本池泉回游式庭园，在古枫与黑松掩映下拉开慢生活画卷",
        "皇居外苑二重桥平整碎石古松道散步，远眺江户城历史石垣与护城河天鹅倒影",
        "米其林二星近藤极品清甜海虾天妇罗、叙叙苑游玄亭顶级黑毛和牛、银座篝温润浓厚鸡白汤",
        "入住日比谷东京半岛酒店 (The Peninsula Tokyo)，直通无障碍地铁与皇居绿意，全程 Google Reviews 与 Google Maps 一键直达"
      ],
      logisticsSummary: "全程专车门到门接驳，避开东京复杂错综的地下换乘。每个景点严格筛选纯平路面与无障碍直梯设施，单日步行控制在2公里以内，下午安排两小时半岛酒店客房静养，极尽尊崇舒适。",
      weatherAndPacking: [
        "东京春秋晴朗干燥微凉（12℃ - 21℃），建议穿透气棉质长袖搭配保暖轻羽绒或风衣",
        "日本室内通常需脱鞋进入和室，建议为长辈准备厚实干净棉袜",
        "各大商场及景点均配备高标准多功能无障碍洗手间与轮椅借用服务"
      ]
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 皇居外苑二重桥漫步 & 叙叙苑和牛暖味",
        theme: "抵东瀛 · 半岛酒店入住 · 皇居古松漫步",
        paceScore: "relaxed",
        mapConfig: {
          center: [35.6795, 139.757],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "抵日后在客房午休与泡茶，消除飞行劳顿"
        },
        timeline: [
          {
            type: "activity",
            id: "ty_d1_hotel",
            name: "东京半岛酒店 (The Peninsula Tokyo) · 日比谷正对皇居尊荣入住",
            category: "rest",
            timeSlot: "11:30 - 12:30",
            durationMinutes: 60,
            coordinates: [35.674, 139.76],
            dropOffPoint: "千代田区有乐町1-8-1酒店大堂正门",
            openingHours: "全天候接待",
            reservationRequired: true,
            reservationChannel: "官方预订",
            photoTip: "大堂充满日本传统千本格子木作艺术与竹韵吊灯",
            elderKidNotes: "酒店设顶级全无障碍设施，直梯直通地下商圈，配备独立更衣室与无障碍大卫浴，服务人员通晓多国语言",
            description: "专车自羽田机场高速直达日比谷半岛酒店。在静谧客房内俯瞰皇居外苑万顷绿荫，品味迎宾日式煎茶，开启舒适惬意的东瀛慢游。"
          },
          {
            type: "transit",
            fromStop: "ty_d1_hotel",
            toStop: "ty_d1_lunch",
            mode: "walk",
            distanceKm: 0.2,
            estimatedMinutes: 4,
            navigationDetail: "步行经酒店连廊直达日比谷Midtown高层餐厅"
          },
          {
            type: "activity",
            id: "ty_d1_lunch",
            name: "浅草今半 (Asakusa Imahan 银座/日比谷店) · 百年黑毛和牛寿喜烧",
            category: "food",
            timeSlot: "12:30 - 13:45",
            durationMinutes: 75,
            coordinates: [35.6735, 139.759],
            dropOffPoint: "东京Midtown日比谷3楼直梯处",
            openingHours: "11:00 - 15:00",
            reservationRequired: true,
            reservationChannel: "通过TableCheck或酒店礼宾提前订座",
            photoTip: "雪花纹理黑毛和牛在铁锅中滋滋作响，淋上秘制甘甜寿喜烧酱汁",
            elderKidNotes: "和牛薄切入口即化，寿喜烧汤底甜美甘香，配温热温泉蛋丝滑易咀嚼，软熟豆腐与大葱清甜",
            description: "品尝创于明治二十八年的百年牛肉寿喜烧。极品黑毛和牛裹上滑嫩鸡蛋液，入口甘甜香浓，配以晶莹的越光米饭，暖胃暖心。"
          },
          {
            type: "transit",
            fromStop: "ty_d1_lunch",
            toStop: "ty_d1_hotel_rest",
            mode: "walk",
            distanceKm: 0.2,
            estimatedMinutes: 4,
            navigationDetail: "平步返回半岛酒店客房"
          },
          {
            type: "activity",
            id: "ty_d1_hotel_rest",
            name: "半岛客房静卧休整 & 养生静心茶叙",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [35.674, 139.76],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房窗前远眺皇居天际线暮色",
            elderKidNotes: "卧床静歇2小时，平复心率与旅途疲乏",
            description: "在安静舒适的客房中平躺小睡，享受半岛酒店宁静的隔音环境与舒适寝具，补充活力。"
          },
          {
            type: "transit",
            fromStop: "ty_d1_hotel_rest",
            toStop: "ty_d1_imperial_palace",
            mode: "walk",
            distanceKm: 0.3,
            estimatedMinutes: 6,
            navigationDetail: "自酒店西门出，平步穿过日比谷交叉口即达皇居外苑"
          },
          {
            type: "activity",
            id: "ty_d1_imperial_palace",
            name: "皇居外苑 · 二重桥古典石桥与古松道平缓散步",
            category: "nature",
            timeSlot: "16:30 - 17:45",
            durationMinutes: 75,
            coordinates: [35.6795, 139.757],
            dropOffPoint: "皇居外苑楠正成铜像旁平坦落客区",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "护城河倒映着二重桥双重圆拱与伏见橹白墙黑瓦，夕阳金辉柔美",
            elderKidNotes: "外苑广场由细软平整碎石与石板路铺就，步道极其宽阔平坦，两旁植有两千株姿态优美的江户黑松，视野广阔心旷神怡",
            description: "漫步在皇居外苑宽广平坦的黑松林荫道上。极目远眺，近代西洋风情二重桥倒映在澄澈的护城河中，古朴江户城垣与远处现代摩天楼群相映成趣。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "浅草今半 (Asakusa Imahan)",
            cuisineStyle: "百年黑毛和牛寿喜烧老字号",
            recommendedDishes: ["特选黑毛和牛寿喜烧套餐", "温润和牛牛肉茶泡饭", "时令炖煮蔬菜钵", "抹茶冰淇淋"],
            elderKidSuitability: "肉质软嫩至极，不费牙力，甘甜醇厚，营养充沛",
            perPersonBudget: "¥8,000 - ¥12,000 日元 / 人",
            addressOrDropOff: "千代田区有乐町1-1-2日比谷Midtown 3F",
            googleRating: "4.6★ (Google Reviews 4,200+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Asakusa+Imahan+Tokyo"
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "叙叙苑 游玄亭 (Jojoen Yugentei 银座并木通店)",
            cuisineStyle: "日本殿堂级高级日式烧肉",
            recommendedDishes: ["特选特上牛小排（入口即溶）", "特选上等葱盐牛舌", "叙叙苑特制和风沙拉（温和清甜）", "温热石锅鲍鱼粥"],
            elderKidSuitability: "全独立豪华和风包厢，吸烟排风无异味，服务人员代烤火候极佳，鲍鱼粥温润暖胃",
            perPersonBudget: "¥15,000 - ¥22,000 日元 / 人",
            addressOrDropOff: "中央区银座5-6-5 Namiki通大厦",
            googleRating: "4.6★ (Google Reviews 3,100+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Jojoen+Yugentei+Ginza"
          }
        },
        dailyTips: [
          "叙叙苑游玄亭银座店务必提前让酒店礼宾预约包间（完全和式个室），免除长辈排队之苦",
          "皇居外苑碎石路面推行轮椅略有摩擦感，建议在靠外侧平坦硬化砖道缓步漫行"
        ]
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 浅草寺清晨平缓巡礼 & 近藤米其林天妇罗",
        theme: "浅草下町江户情 · 无障碍电梯登本堂 · 米其林二星天妇罗",
        paceScore: "relaxed",
        mapConfig: {
          center: [35.7111, 139.7964],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 15:30",
          reason: "午餐后返半岛酒店客房静养，避开午后人流"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "ty_d2_hotel",
            toStop: "ty_d2_sensoji",
            mode: "charter",
            distanceKm: 6.5,
            estimatedMinutes: 16,
            navigationDetail: "专车经晴海通送达浅草寺二天门专用落客区"
          },
          {
            type: "activity",
            id: "ty_d2_sensoji",
            name: "浅草寺 · 雷门仲见世清晨静游 & 本堂无障碍电梯登临参拜",
            category: "culture",
            timeSlot: "09:00 - 11:30",
            durationMinutes: 150,
            coordinates: [35.7111, 139.7964],
            dropOffPoint: "浅草寺二天门无障碍入寺通道（避开雷门前人潮）",
            openingHours: "06:00 - 17:00",
            reservationRequired: false,
            photoTip: "巨大红色“雷门”灯笼与五重塔在清晨湛蓝天空映衬下的宏伟侧影",
            elderKidNotes: "本堂西北侧配备现代化轮椅无障碍升降电梯，无需攀爬数十级高台阶即可直达正殿观音前祈福，院内路面全平整青石板",
            description: "清晨趁游人未至，漫步东京都最古老寺庙浅草寺。在袅袅沉香中洗涤身心，乘无障碍电梯直达本堂瞻仰观音菩萨，祈愿全家健康平安。"
          },
          {
            type: "transit",
            fromStop: "ty_d2_sensoji",
            toStop: "ty_d2_lunch",
            mode: "charter",
            distanceKm: 5.8,
            estimatedMinutes: 15,
            navigationDetail: "专车接送至银座天妇罗近藤"
          },
          {
            type: "activity",
            id: "ty_d2_lunch",
            name: "天妇罗 近藤 (Tempura Kondo 银座) · 米其林二星宗师级炸物",
            category: "food",
            timeSlot: "12:00 - 13:30",
            durationMinutes: 90,
            coordinates: [35.671, 139.763],
            dropOffPoint: "中央区银座5-5-13坂口大厦9楼（直梯直达）",
            openingHours: "12:00 - 15:00",
            reservationRequired: true,
            reservationChannel: "通过酒店礼宾部或OMAKASE平台提前1个月预订",
            photoTip: "近藤大师手作名物厚切炸丸十（金黄软糯红薯天妇罗圆柱）",
            elderKidNotes: "大师采用芝麻油与色拉油黄金调配，油温极精，面衣薄如蝉翼毫无油腻积食感，海虾与江户前星鳗软嫩香甜",
            description: "在天妇罗泰斗近藤文夫的主理下，品味天妇罗艺术的巅峰之作。酥脆薄透的面衣紧锁时令蔬菜与鲜活海虾的原汁甜味，轻盈不滞，回味无穷。"
          },
          {
            type: "transit",
            fromStop: "ty_d2_lunch",
            toStop: "ty_d2_hotel_rest",
            mode: "charter",
            distanceKm: 1.2,
            estimatedMinutes: 5,
            navigationDetail: "专车返回半岛酒店"
          },
          {
            type: "activity",
            id: "ty_d2_hotel_rest",
            name: "客房深度静养休整",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [35.674, 139.76],
            dropOffPoint: "半岛客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "室内静享品茶时光",
            elderKidNotes: "平躺午睡2小时，彻底放松肌肉",
            description: "客房内静养休整，饮一杯温润大麦茶，闭目养神恢复体力。"
          },
          {
            type: "transit",
            fromStop: "ty_d2_hotel_rest",
            toStop: "ty_d2_ginza",
            mode: "walk",
            distanceKm: 0.4,
            estimatedMinutes: 8,
            navigationDetail: "平步漫行至银座中央通步行街区"
          },
          {
            type: "activity",
            id: "ty_d2_ginza",
            name: "银座中央通 · 宽阔林荫步行道慢游 & 和光大钟古典街景",
            category: "leisure",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [35.6719, 139.765],
            dropOffPoint: "银座四丁目和光钟楼前平坦落客道",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "和光Seiko时钟塔在暮色中的古典立面与银座大街华灯初上",
            elderKidNotes: "银座各高档百货大楼（Ginza Six、三越、松屋）均设极宽敞无障碍直梯与专用休息沙发，地面全平整无台阶",
            description: "漫步在世界著名商业街银座中央通。欣赏精致橱窗艺术与百年和光钟塔，在Ginza Six茑屋书店庭院小坐，感受现代都会的优雅从容。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "天妇罗 近藤 (Tempura Kondo)",
            cuisineStyle: "米其林二星宗师级江户前天妇罗",
            recommendedDishes: ["名物厚切丸十番薯（慢炸软甜如甘露）", "天然车海老天妇罗", "江户前活穴子鱼", "小柱天茶泡饭"],
            elderKidSuitability: "用油清澈，面衣极薄轻盈，入口酥化绝不油腻，搭配天茶泡饭温胃易消化",
            perPersonBudget: "¥14,000 - ¥20,000 日元 / 人",
            addressOrDropOff: "中央区银座5-5-13坂口大厦9F",
            googleRating: "4.7★ (Google Reviews 1,600+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Tempura+Kondo+Ginza"
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "银座 篝 (Ginza Kagari 本店)",
            cuisineStyle: "米其林推荐浓厚鸡白汤极品拉面",
            recommendedDishes: ["特选纯鸡白汤拉面（浓郁如奶，鲜美至极）", "松露鸡白汤拉面", "和风嫩炙鸡肉饭", "半熟味玉"],
            elderKidSuitability: "高汤由整只纯土鸡慢火慢煨数十小时而成，胶原蛋白浓郁温热，面条软硬可定制偏软",
            perPersonBudget: "¥1,800 - ¥2,500 日元 / 人",
            addressOrDropOff: "中央区银座6-4-12小巷内",
            googleRating: "4.5★ (Google Reviews 5,500+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Ginza+Kagari"
          }
        },
        dailyTips: [
          "银座篝晚间排队可能较长，建议由导游或专车提前派人取号，或选17:00刚开门时段入场用餐",
          "浅草寺香炉前熏香在传统中具有辟邪祈福健康之意，可引香气向长辈肩头轻抚祈求康泰"
        ]
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 新宿御苑和风庭园 & 明治神宫森林参道",
        theme: "池泉回游庭园 · 纯平原木步道 · 都会静谧绿洲",
        paceScore: "relaxed",
        mapConfig: {
          center: [35.6852, 139.7101],
          zoom: 14
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "御苑林荫散步后返回半岛酒店客房静卧补眠"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "ty_d3_hotel",
            toStop: "ty_d3_shinjuku_gyoen",
            mode: "charter",
            distanceKm: 5.5,
            estimatedMinutes: 15,
            navigationDetail: "专车经新宿通送达新宿御苑新宿门无障碍无台阶落客区"
          },
          {
            type: "activity",
            id: "ty_d3_shinjuku_gyoen",
            name: "新宿御苑 · 日本传统庭园池泉回游漫步 & 旧御休所探幽",
            category: "nature",
            timeSlot: "09:30 - 12:00",
            durationMinutes: 150,
            coordinates: [35.6852, 139.7101],
            dropOffPoint: "新宿区内藤町11号新宿御苑新宿门落客处",
            openingHours: "09:00 - 16:30 (周一闭园)",
            reservationRequired: false,
            photoTip: "木质古典旧洋馆与池塘中倒映的黑松倒影，清风拂过水面泛起涟漪",
            elderKidNotes: "御苑全园规划完善，全为平整柏油与铺木无障碍步道，全域禁止自行车与宠物，环境极其安详静谧，设有无障碍休息茶室",
            description: "漫步在昔日皇室庭园新宿御苑。穿过开阔的英式草坪，深入传统的日式池泉回游庭园，曲径通幽，苍松与枫树点缀于池塘倒影间，宁静洗心。"
          },
          {
            type: "transit",
            fromStop: "ty_d3_shinjuku_gyoen",
            toStop: "ty_d3_lunch",
            mode: "charter",
            distanceKm: 1.5,
            estimatedMinutes: 5,
            navigationDetail: "专车送至伊势丹百货高层餐厅区"
          },
          {
            type: "activity",
            id: "ty_d3_lunch",
            name: "松荣寿司 (Sushiei 伊势丹新宿店) · 传统江户前手握与温润茶碗蒸",
            category: "food",
            timeSlot: "12:15 - 13:30",
            durationMinutes: 75,
            coordinates: [35.6915, 139.7045],
            dropOffPoint: "伊势丹新宿店7层Eat Paradise美食街（专用大直梯直达）",
            openingHours: "11:00 - 22:00",
            reservationRequired: true,
            reservationChannel: "百货官网提前订座",
            photoTip: "漆器托盘上整齐排列的天然本鲔大腹、星鳗握寿司与金箔茶碗蒸",
            elderKidNotes: "食材经过熟成极其柔嫩，米饭酸甜适中软硬恰当，配温热鲜甜茶碗蒸与赤味噌汤，极易消化",
            description: "在伊势丹高层品尝正宗江户前手握寿司套餐。新鲜水产经刀工精妙处理，搭配温润软滑的茶碗蒸与热汤，舒适惬意。"
          },
          {
            type: "transit",
            fromStop: "ty_d3_lunch",
            toStop: "ty_d3_hotel_rest",
            mode: "charter",
            distanceKm: 6,
            estimatedMinutes: 16,
            navigationDetail: "专车返回半岛酒店"
          },
          {
            type: "activity",
            id: "ty_d3_hotel_rest",
            name: "客房下午茶与深度午睡休整",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [35.674, 139.76],
            dropOffPoint: "半岛客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房静歇",
            elderKidNotes: "平躺休息2小时，缓解腿脚乏力",
            description: "在客房内安静小睡，饮一杯温热焙茶，舒缓肌肉疲劳。"
          },
          {
            type: "transit",
            fromStop: "ty_d3_hotel_rest",
            toStop: "ty_d3_meiji_jingu",
            mode: "charter",
            distanceKm: 5.2,
            estimatedMinutes: 14,
            navigationDetail: "专车送达明治神宫北参道平坦入园处"
          },
          {
            type: "activity",
            id: "ty_d3_meiji_jingu",
            name: "明治神宫 · 原木大鸟居与百年常绿阔叶森林平坦缓步",
            category: "culture",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [35.6764, 139.6993],
            dropOffPoint: "明治神宫北参道停车场无障碍坡道口",
            openingHours: "06:00 - 18:00",
            reservationRequired: false,
            photoTip: "巨大的日本扁柏第一大鸟居在葱郁森林阳光穿透下的神圣光芒",
            elderKidNotes: "北参道路面平缓，森林负氧离子极高，全程树冠遮阴避暑防晒，本殿内设多处无障碍缓坡",
            description: "步入明治神宫郁郁葱葱的常绿古木森林，仿佛瞬间遁入世外桃源。走在宽阔平缓的参道上，微风穿过树梢，感受自然与古老建筑的宁静和谐。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "尾花 (Obana 鳗鱼老铺 / 浅草 前川 银座分店)",
            cuisineStyle: "东京百年名物炭火活烤蒲烧鳗鱼饭",
            recommendedDishes: ["特上蒲烧鳗鱼重（肉质松软如云）", "鳗鱼肝清汤（清香解腻）", "白烧鳗鱼配现磨山葵", "日式厚烧玉子"],
            elderKidSuitability: "关东流先蒸后烤工艺，鱼肉极其软烂化渣，毫无小刺卡喉风险，富含天然维生素与优质蛋白",
            perPersonBudget: "¥6,000 - ¥9,500 日元 / 人",
            addressOrDropOff: "中央区银座三越11F（专用直梯直达）",
            googleRating: "4.5★ (Google Reviews 2,800+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Unagi+Maekawa+Ginza"
          }
        },
        dailyTips: [
          "新宿御苑内禁止饮酒与携带大型器材，环境极度安宁，是东京最适合长辈散步的皇家园林",
          "关东风味蒲烧鳗鱼经长时间蒸透，口感松软柔滑，非常适合长辈养胃滋补"
        ]
      },
      {
        dayNumber: 4,
        dateOrLabel: "Day 4 · 筑地场外市场慢尝鲜味 & 舒心满载返程",
        theme: "筑地市场鲜味 · 筑地青空三代目名物 · 满载东瀛温情启程",
        paceScore: "relaxed",
        mapConfig: {
          center: [35.6655, 139.7708],
          zoom: 15
        },
        timeline: [
          {
            type: "transit",
            fromStop: "ty_d4_hotel",
            toStop: "ty_d4_tsukiji",
            mode: "charter",
            distanceKm: 2.2,
            estimatedMinutes: 8,
            navigationDetail: "专车经晴海通平稳直达筑地场外市场平坦入口"
          },
          {
            type: "activity",
            id: "ty_d4_tsukiji",
            name: "筑地场外市场 · 平坦巷弄慢尝热腾腾玉子烧与鲜甜海物",
            category: "food",
            timeSlot: "09:30 - 11:30",
            durationMinutes: 120,
            coordinates: [35.6655, 139.7708],
            dropOffPoint: "中央区筑地4-16-2场外市场平整落客区",
            openingHours: "08:00 - 14:00",
            reservationRequired: false,
            photoTip: "大定玉子烧师傅铁板前利落翻蛋卷与热气蒸腾的烤扇贝",
            elderKidNotes: "巷道平整无台阶，现做现切的热玉子烧松软香甜暖胃，长辈可在定点茶座室内歇脚品尝",
            description: "漫步筑地场外市场老街，感受东京市井鲜活气息。品尝刚出锅热气腾腾的厚烧玉子烧、清甜烤贝柱与温热海鲜味噌汤，暖身又惬意。"
          },
          {
            type: "transit",
            fromStop: "ty_d4_tsukiji",
            toStop: "ty_d4_lunch",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 3,
            navigationDetail: "步行穿过平整巷道直达筑地青空三代目本店"
          },
          {
            type: "activity",
            id: "ty_d4_lunch",
            name: "筑地青空三代目 (本店) · 市场源头极上握寿司告别宴",
            category: "food",
            timeSlot: "11:45 - 13:00",
            durationMinutes: 75,
            coordinates: [35.665, 139.771],
            dropOffPoint: "中央区筑地4-13-8",
            openingHours: "10:30 - 14:30",
            reservationRequired: true,
            reservationChannel: "电话或官网预约包厢",
            photoTip: "金目鲷与炙烧金枪鱼大腹在竹编盘上的光鲜油亮",
            elderKidNotes: "食材全部来自筑地源头直供，新鲜无腥，手握饭团松软微温，搭配浓厚大蚬味噌汤暖胃",
            description: "以筑地名店青空三代目的手握寿司为东京之行圆满收官。九十年三代传承手艺，品味时令海味的纯正鲜甜。"
          },
          {
            type: "transit",
            fromStop: "ty_d4_lunch",
            toStop: "ty_d4_departure",
            mode: "charter",
            distanceKm: 18,
            estimatedMinutes: 25,
            navigationDetail: "商务专车载长辈与全套行李经首都高直达羽田国际机场国际线出发层"
          },
          {
            type: "activity",
            id: "ty_d4_departure",
            name: "专车平稳直达羽田机场 · 登机返程",
            category: "rest",
            timeSlot: "13:30 - 14:30",
            durationMinutes: 60,
            coordinates: [35.5494, 139.7798],
            dropOffPoint: "羽田机场第3航站楼国际出发无障碍落客平台",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "满载东瀛静谧与美食回忆安然登机",
            elderKidNotes: "羽田机场设全日空与日航专属爱心轮椅值机柜台，专车司机协助托运行李至柜台",
            description: "商务专车直达国际出发层门口，协助搬运行李并陪同至无障碍通道，轻松踏上归国航班。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "筑地青空三代目 (本店)",
            cuisineStyle: "源头直供顶级江户前寿司",
            recommendedDishes: ["大将特选握寿司十贯", "天然海胆军舰", "大蚬红味噌汤 (暖胃生津)", "炙烧比目鱼裙边"],
            elderKidSuitability: "鱼生新鲜软滑，米饭温润易消化，大蚬红味噌汤鲜美热乎",
            perPersonBudget: "¥5,000 - ¥8,000 日元 / 人",
            addressOrDropOff: "中央区筑地4-13-8（专车停在巷口直达）",
            googleRating: "4.6★ (Google Reviews 1,800+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Tsukiji+Aozora+Sandaime"
          }
        },
        dailyTips: [
          "羽田机场第三航站楼内设江户小路免税商店街，登机前长辈可在平整街区选购白色恋人、东京香蕉蛋糕等伴手礼",
          "日本出租车后门为司机自动遥控开闭，上下车无需长辈手动推拉车门"
        ]
      }
    ],
    reservationChecklist: [
      {
        spotName: "天妇罗 近藤 (Tempura Kondo)",
        daysInAdvance: 30,
        platform: "酒店礼宾部代订 / OMAKASE平台",
        ticketPrice: "午间套餐约 ¥15,000 日元 / 人",
        requiresRealNameId: true,
        bookingTip: "提前1个月通过半岛酒店金钥匙礼宾部优先预约，确保包厢或安静桌席"
      },
      {
        spotName: "叙叙苑 游玄亭 (银座并木通店)",
        daysInAdvance: 14,
        platform: "官方网站【Jojoen】预约系统",
        ticketPrice: "人均约 ¥18,000 日元",
        requiresRealNameId: true,
        bookingTip: "提前2周线上预订完全独立和风包房，备注长辈用餐偏好软嫩肉质"
      }
    ],
    emergencyContacts: [
      {
        role: "圣路加国际医院 (St. Luke's International Hospital - 顶尖国际JCI认证综合医院)",
        phone: "+81-3-3541-5151",
        note: "东京都中央区明石町9-1，设24小时多语种急救中心，距银座酒店仅1.8公里"
      },
      {
        role: "日本紧急救护呼叫 (消防/救护车)",
        phone: "119",
        note: "日本全境紧急医疗救护呼叫（提供中文三方实时翻译接入）"
      },
      {
        role: "日本观光厅访日旅行者专线 (Japan Visitor Hotline)",
        phone: "+81-50-3816-2720",
        note: "全天候7x24小时中英日韩紧急支持热线"
      }
    ]
  },
  {
    id: "curated_xiamen_3d",
    meta: {
      tripTitle: "厦门 3天2晚 · 鹭岛海风与琴岛滨海木栈道慢漫游",
      destinations: ["厦门"],
      durationDays: 3,
      travelerProfile: ["海滨度假", "长辈舒享", "木栈道平缓", "地道闽南菜"],
      budgetTier: "comfort",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-12T08:30:00.000Z",
      coverImage: "/images/spot_xiamen_coast.jpg",
      isPublic: true,
      viewsCount: 1980,
      likesCount: 178
    },
    overview: {
      highlights: [
        "入住双子塔厦门康莱德酒店，窗前俯瞰演武大桥卧波海面与鼓浪屿琴岛全景",
        "避开日光岩陡阶！精选鼓浪屿三丘田平缓海滨路，漫游菽庄花园钢琴博物馆，听海涛抚琴",
        "环岛路音乐广场海滨木栈道平步，全线平坦无障碍，远眺蔚蓝台湾海峡金门列岛",
        "园林植物园专享景观电瓶车直达雨林世界与多肉植物区，云雾缭绕中吸氧漫步",
        "品尝堂宴老厦门非遗香酥芋泥、临家原汁土番鸭汤、小眼镜大排档鲜甜酱油水小海鲜"
      ],
      logisticsSummary: "往返鼓浪屿采用豪华内舱软座渡轮VIP通道登船，岛上游览全程精选平坦林荫滨水路段，严控日均平步在2公里以内，下午两小时康莱德高空客房海景静养休整。",
      weatherAndPacking: [
        "厦门四季如春海风温润（20℃ - 26℃），海边紫外线较足，建议备宽檐遮阳帽、墨镜与防晒衣",
        "鼓浪屿实行严格实名制船票查验，务必随身携带中国二代身份证原件",
        "岛上禁止任何机动车辆（仅有特许电瓶车），穿防滑减震软底健步鞋最宜"
      ]
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 鹭岛初抵 & 康莱德高空海景 & 演武大桥海风漫步",
        theme: "初抵鹭岛 · 双子塔高空入住 · 沙坡尾老渔港夜景",
        paceScore: "relaxed",
        mapConfig: {
          center: [24.437, 118.088],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "高空客房午休与下午茶，缓解抵厦路途劳顿"
        },
        timeline: [
          {
            type: "activity",
            id: "xm_d1_hotel",
            name: "厦门康莱德酒店 (Conrad Xiamen) · 世茂双子塔海景客房入住",
            category: "rest",
            timeSlot: "11:30 - 12:30",
            durationMinutes: 60,
            coordinates: [24.437, 118.088],
            dropOffPoint: "思明区演武西路186号世茂双塔酒店落客门厅",
            openingHours: "全天候接待",
            reservationRequired: true,
            reservationChannel: "官方预订",
            photoTip: "54层空中大堂超大玻璃幕墙前俯瞰演武大桥与鼓浪屿全景",
            elderKidNotes: "酒店设大型高速观光直梯直通沙坡尾与商场，客房卫浴宽阔平坦，全套防滑设施与无障碍管家服务",
            description: "专车自高崎机场直送达厦门地标世茂双子塔康莱德酒店。在54层高空落地窗前凝视碧海蓝天，享受迎宾铁观音清香，安顿身心。"
          },
          {
            type: "transit",
            fromStop: "xm_d1_hotel",
            toStop: "xm_d1_lunch",
            mode: "walk",
            distanceKm: 0.2,
            estimatedMinutes: 5,
            navigationDetail: "自酒店下层直梯平步穿行至沙坡尾艺术西区"
          },
          {
            type: "activity",
            id: "xm_d1_lunch",
            name: "堂宴·老厦门私房菜 (沙坡尾店) · 传统非遗闽南名菜",
            category: "food",
            timeSlot: "12:30 - 13:45",
            durationMinutes: 75,
            coordinates: [24.4395, 118.0898],
            dropOffPoint: "民族路沙坡尾避风坞入口平坦处",
            openingHours: "11:00 - 14:00",
            reservationRequired: true,
            reservationChannel: "大众点评提前订座",
            photoTip: "古法香酥芋泥金黄诱人，黄鱼煮面线热气腾腾",
            elderKidNotes: "香酥芋泥软滑香甜入口化，黄鱼面线清汤无刺极其温胃，食材软烂少油少盐",
            description: "品尝被央视与多档美食节目赞誉的老厦门古法私房菜。香甜绵密的非遗香酥芋泥搭配清鲜滋补的野生黄鱼煮面线，满满闽南家常温情。"
          },
          {
            type: "transit",
            fromStop: "xm_d1_lunch",
            toStop: "xm_d1_hotel_rest",
            mode: "walk",
            distanceKm: 0.2,
            estimatedMinutes: 5,
            navigationDetail: "平步返回康莱德酒店客房"
          },
          {
            type: "activity",
            id: "xm_d1_hotel_rest",
            name: "康莱德高空客房海景静养休整",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [24.437, 118.088],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房窗前茶几观海品茗",
            elderKidNotes: "平躺静卧小睡2小时，舒展腰背筋骨",
            description: "客房内安静小睡，窗外波光粼粼海浪轻拍，在海天一色中美美补眠恢复精力。"
          },
          {
            type: "transit",
            fromStop: "xm_d1_hotel_rest",
            toStop: "xm_d1_yanwu_bridge",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 3,
            navigationDetail: "下楼由商场无障碍缓坡直达演武大桥观景平台"
          },
          {
            type: "activity",
            id: "xm_d1_yanwu_bridge",
            name: "演武大桥观景平台 · 贴海平步木栈道 & 吹拂晚风看夕阳",
            category: "nature",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [24.437, 118.088],
            dropOffPoint: "演武路观景平台专用无障碍坡道口",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "演武大桥宛如白龙贴海卧波，夕阳余晖洒在海面上泛起万点金光",
            elderKidNotes: "观景平台全线为超平坦塑木栈道，距离海面仅5米，全无台阶，设有弧形亲水长椅休憩",
            description: "慢步在被誉为“世界上离海平面最近的观景台”上。清凉海风拂面而来，近观白鹭在海面低飞翱翔，远眺鼓浪屿红瓦绿树在暮色中逐渐亮起温暖灯火。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "堂宴·老厦门私房菜 (沙坡尾店)",
            cuisineStyle: "复原老厦门濒临失传非遗闽南菜",
            recommendedDishes: ["香酥芋泥 (非遗招牌)", "黄鱼煮面线 (清鲜养胃)", "沙茶焖牛腩 (温和微甜不辣)", "老厦门醋肉"],
            elderKidSuitability: "芋泥软糯如膏，黄鱼面线极细软烂易吞咽，清淡开胃",
            perPersonBudget: "¥100 - ¥140 / 人",
            addressOrDropOff: "思明区民族路3/5号沙坡尾入口",
            dianpingUrl: "https://www.dianping.com/shop/xiamen_tangyan"
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "临家闽南菜 (环岛南路海景店)",
            cuisineStyle: "黑珍珠一钻健康生态闽南菜",
            recommendedDishes: ["原味土番鸭汤（老砂锅慢炖无腥）", "地道翔安姜母鸭（香而不燥）", "同安封肉（肥而不腻）", "手工自磨泉水豆腐"],
            elderKidSuitability: "老土鸭汤清润去火，封肉炖透酥烂筷子一夹即化，海景庭院无阶梯出入",
            perPersonBudget: "¥140 - ¥190 / 人",
            addressOrDropOff: "思明区环岛南路308号（专车停在庭院正门）",
            dianpingUrl: "https://www.dianping.com/shop/xiamen_linjia"
          }
        },
        dailyTips: ["演武大桥观景台海风微咸，建议随身携带保温杯备温开水润喉", "临家闽南菜环岛路店面海背山，建议提前预订靠窗包厢欣赏暮色海景"]
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 鼓浪屿平缓精华游 & 菽庄花园琴音与海潮",
        theme: "琴岛万国建筑 · 避开陡坡慢步 · 菽庄花园依山傍海",
        paceScore: "relaxed",
        mapConfig: {
          center: [24.4425, 118.0678],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 15:30",
          reason: "出岛返回酒店高空客房安稳午休，舒缓双腿"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "xm_d2_hotel",
            toStop: "xm_d2_ferry_pier",
            mode: "charter",
            distanceKm: 8.5,
            estimatedMinutes: 18,
            navigationDetail: "专车送至厦鼓码头VIP贵宾无障碍登船通道"
          },
          {
            type: "activity",
            id: "xm_d2_gulangyu",
            name: "鼓浪屿 · 菽庄花园与钢琴博物馆 & 避开陡阶海滨平缓线漫步",
            category: "nature",
            timeSlot: "09:30 - 12:30",
            durationMinutes: 180,
            coordinates: [24.4425, 118.0678],
            dropOffPoint: "鼓浪屿三丘田码头平坦电瓶车环岛线接驳点",
            openingHours: "08:00 - 17:30",
            reservationRequired: true,
            reservationChannel: "微信小程序【屿见厦门】提前7天预约船票与菽庄花园联票",
            photoTip: "菽庄花园“藏海”回廊与四十四桥横卧碧波，远方海天一色",
            elderKidNotes: "严格避开日光岩陡峭台阶！从三丘田码头乘特许低速电瓶车直达菽庄花园平缓入园口，菽庄花园走平整海滨回廊，钢琴博物馆设无障碍电梯",
            description: "乘舒适渡轮抵鼓浪屿，走平坦海滨环岛路。走进巧妙将大海藏于私家园林的菽庄花园，在依山傍海的四十四桥漫步，参观世界级钢琴博物馆，聆听百年琴韵与海潮合鸣。"
          },
          {
            type: "transit",
            fromStop: "xm_d2_gulangyu",
            toStop: "xm_d2_lunch",
            mode: "walk",
            distanceKm: 0.3,
            estimatedMinutes: 6,
            navigationDetail: "平坦绿荫小径漫步至挑食海鲜小馆"
          },
          {
            type: "activity",
            id: "xm_d2_lunch",
            name: "挑食·海鲜小馆 (鼓浪屿老洋房店) · 温润清蒸海产家宴",
            category: "food",
            timeSlot: "12:30 - 13:45",
            durationMinutes: 75,
            coordinates: [24.444, 118.069],
            dropOffPoint: "思明区泉州路51号老别墅庭院",
            openingHours: "11:00 - 14:30",
            reservationRequired: true,
            reservationChannel: "大众点评提前订座",
            photoTip: "红砖老别墅庭院天井落满阳光，鲜活清蒸海石斑热气腾腾",
            elderKidNotes: "海鲜现捞现蒸清淡原汁，海蛎煎软糯香鲜，文蛤豆腐汤温和去腻，庭院无台阶出入",
            description: "在百年闽南老洋房的花园天井中享用清鲜海味。清蒸东星斑肉质紧实细嫩，搭配手工海蛎煎与文蛤豆腐鲜汤，品味海岛纯净之美。"
          },
          {
            type: "transit",
            fromStop: "xm_d2_lunch",
            toStop: "xm_d2_hotel_rest",
            mode: "charter",
            distanceKm: 8.5,
            estimatedMinutes: 20,
            navigationDetail: "自三丘田码头乘轮渡返回厦门本岛，专车接送回康莱德酒店"
          },
          {
            type: "activity",
            id: "xm_d2_hotel_rest",
            name: "康莱德客房舒适午睡静养",
            category: "rest",
            timeSlot: "14:15 - 16:15",
            durationMinutes: 120,
            coordinates: [24.437, 118.088],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房静休",
            elderKidNotes: "平躺午睡2小时，舒展双足化解岛上行走带来的轻度微酸",
            description: "出岛归来客房静卧休养两小时，饮一杯温润金骏眉红茶，恢复体力。"
          },
          {
            type: "transit",
            fromStop: "xm_d2_hotel_rest",
            toStop: "xm_d2_bailuzhou",
            mode: "charter",
            distanceKm: 4.8,
            estimatedMinutes: 14,
            navigationDetail: "专车经湖滨中路送达白鹭洲公园西门平坦落客道"
          },
          {
            type: "activity",
            id: "xm_d2_bailuzhou",
            name: "白鹭洲公园 · 员当湖畔平缓林荫步道 & 白鹭女神像慢赏",
            category: "nature",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [24.475, 118.085],
            dropOffPoint: "白鹭洲公园音乐喷泉广场平坦车道",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "白鹭女神雕像在夕阳湖水映衬下的圣洁身影，白鹭群在湖面翩翩掠过",
            elderKidNotes: "全园地处筼筜湖心岛，纯平硬化防滑路面无任何起伏，大片绿荫棕榈草坪，空气湿润清新",
            description: "傍晚漫步厦门“城市客厅”白鹭洲公园。湖水微澜，成群白鹭在落日晚霞中栖息，绿树婆娑，在湖光倒影中感受鹭岛的从容闲适。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "小眼镜大排档 (万寿路创始总店)",
            cuisineStyle: "厦门二十年老字号地道酱油水小海鲜",
            recommendedDishes: ["酱油水小鲍鱼（鲜嫩不韧）", "酱油水杂鱼（肉质滑嫩入味）", "清蒸红膏蟹", "鲜炒米粉"],
            elderKidSuitability: "酱油水为闽南清爽快煮，不辛辣不油腻，保留小海鲜极致原鲜，食材鲜活软嫩",
            perPersonBudget: "¥110 - ¥160 / 人",
            addressOrDropOff: "思明区万寿路7号老总店（包厢直梯通达）",
            dianpingUrl: "https://www.dianping.com/shop/xiamen_xiaoyanjing"
          }
        },
        dailyTips: [
          "鼓浪屿上严禁骑行与外来机动车，请认准岛上官方绿色电瓶观光车代步，凭票随招随停",
          "今日晚膳小眼镜大排档万寿路总店包厢环境安静宽敞，建议提前电话订桌"
        ]
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 环岛路海滨木栈道 & 植物园雨林雾境 & 归途从容",
        theme: "环岛路碧海蓝天 · 园林植物园吸氧 · 满载海风归家",
        paceScore: "relaxed",
        mapConfig: {
          center: [24.43, 118.135],
          zoom: 14
        },
        timeline: [
          {
            type: "transit",
            fromStop: "xm_d3_hotel",
            toStop: "xm_d3_huandao_road",
            mode: "charter",
            distanceKm: 5.5,
            estimatedMinutes: 12,
            navigationDetail: "专车沿环岛南路平稳行驶至音乐广场木栈道专用落客平台"
          },
          {
            type: "activity",
            id: "xm_d3_huandao_road",
            name: "环岛路海滨木栈道 · 音乐广场纯平亲海木道慢步 & 远眺金门列岛",
            category: "nature",
            timeSlot: "09:00 - 10:30",
            durationMinutes: 90,
            coordinates: [24.43, 118.135],
            dropOffPoint: "环岛南路音乐广场平坦入口处",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "棕榈树影婆娑下延伸向蔚蓝大海的木质栈道与鹅卵石海滩",
            elderKidNotes: "海滨木栈道全线全平架设，配防滑扶手，零台阶直达海边，视野极为辽阔开朗，凉亭密布",
            description: "清晨漫行在被誉为“黄金海岸线”的环岛路木栈道上。海浪轻拍礁石，呼吸富含海盐负氧离子的清新海风，眺望远方波光粼粼的无垠碧海。"
          },
          {
            type: "transit",
            fromStop: "xm_d3_huandao_road",
            toStop: "xm_d3_botanical_garden",
            mode: "charter",
            distanceKm: 4.8,
            estimatedMinutes: 10,
            navigationDetail: "专车送至万石植物园西门落客处"
          },
          {
            type: "activity",
            id: "xm_d3_botanical_garden",
            name: "厦门园林植物园 · 专享观光车直达雨林世界水雾仙境与多肉区",
            category: "nature",
            timeSlot: "10:45 - 12:15",
            durationMinutes: 90,
            coordinates: [24.451, 118.102],
            dropOffPoint: "植物园西门游客中心无障碍车道旁",
            openingHours: "06:30 - 18:00",
            reservationRequired: true,
            reservationChannel: "微信公众号【厦门园林植物园】提前预约门票+景交车套票",
            photoTip: "雨林世界水雾喷淋开启时阳光折射出梦幻彩虹丁达尔光束",
            elderKidNotes: "全程乘坐园区低速景观电瓶车，直达核心平坦木栈道区，零爬山零阶梯，空气清凉湿润防暑",
            description: "乘舒适电瓶车直达万石植物园核心。穿行在薄雾缭绕的雨林世界，高大桫椤与热带蕨类植物宛若仙境；随后漫步巨型仙人掌多肉植物区，感受亚热带植物奇观。"
          },
          {
            type: "transit",
            fromStop: "xm_d3_botanical_garden",
            toStop: "xm_d3_lunch",
            mode: "charter",
            distanceKm: 3.5,
            estimatedMinutes: 8,
            navigationDetail: "专车经思明南路送达乌堂沙茶面民族路店"
          },
          {
            type: "activity",
            id: "xm_d3_lunch",
            name: "乌堂沙茶面 (民族路总店) · 顶级浓郁龙虾鲍鱼沙茶告别宴",
            category: "food",
            timeSlot: "12:30 - 13:45",
            durationMinutes: 75,
            coordinates: [24.441, 118.087],
            dropOffPoint: "思明区民族路60号正门前平整落客点",
            openingHours: "10:00 - 21:00",
            reservationRequired: false,
            photoTip: "金红诱人的沙茶浓汤碗中卧着饱满大红龙虾、鲜鲍鱼与弹牙虾滑",
            elderKidNotes: "沙茶汤底用花生酱与十余种香料慢火熬煮，温热甘香微甜不辛辣，面条软弹海鲜极其鲜活软嫩",
            description: "以厦门最具代表性的地道沙茶面收官。慢火熬煮数十小时的花生沙茶高汤，融汇新鲜小青龙与九孔鲍，汤醇味浓，热乎润胃。"
          },
          {
            type: "transit",
            fromStop: "xm_d3_lunch",
            toStop: "xm_d3_departure",
            mode: "charter",
            distanceKm: 14.5,
            estimatedMinutes: 25,
            navigationDetail: "商务专车载全套行李与长辈经成功大道快速路直达高崎国际机场或厦门北站"
          },
          {
            type: "activity",
            id: "xm_d3_departure",
            name: "专车平稳直达高崎机场 / 厦门北站 · 踏上温馨归程",
            category: "rest",
            timeSlot: "14:15 - 15:15",
            durationMinutes: 60,
            coordinates: [24.544, 118.128],
            dropOffPoint: "高崎机场T4出发层无障碍落客平台",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "满载琴岛海风温润回忆从容登机",
            elderKidNotes: "司机协助卸运所有行李并护送至值机岛特殊旅客爱心柜台",
            description: "商务专车送抵航站楼出发层，协助托运伴手礼与行李，在温馨海滨记忆中轻松踏上归程。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "乌堂沙茶面 (民族路旗舰店)",
            cuisineStyle: "高端海鲜精酿沙茶面名店",
            recommendedDishes: ["招牌小青龙龙虾沙茶面", "鲜活鲍鱼虾滑沙茶面", "自制五香条 (外酥肉嫩)", "温润金线莲土鸡汤"],
            elderKidSuitability: "汤底浓郁醇厚微甜无刺激辛辣，海鲜鲜嫩去壳，面条软熟爽滑易吞咽",
            perPersonBudget: "¥60 - ¥110 / 人",
            addressOrDropOff: "思明区民族路60号（近双子塔）",
            dianpingUrl: "https://www.dianping.com/shop/xiamen_wutang"
          }
        },
        dailyTips: [
          "植物园雨林世界雾森喷淋时间为上午09:30-11:30，清晨入园可观赏最美彩虹光束",
          "伴手礼推荐在机场免税店或市区选购黄胜记牛肉柳（软嫩多汁）与阿吉仔馅饼礼盒（绿豆馅皮酥微甜）"
        ]
      }
    ],
    reservationChecklist: [
      {
        spotName: "厦鼓轮渡往返船票",
        daysInAdvance: 7,
        platform: "微信小程序【屿见厦门】",
        ticketPrice: "¥35 - ¥60 / 人往返（60岁以上老人持身份证享优惠半价）",
        requiresRealNameId: true,
        bookingTip: "提前7天实名预约厦鼓码头至三丘田码头商务软座舱，刷二代身份证原件直接检票登船"
      },
      {
        spotName: "厦门园林植物园门票及景区交通车",
        daysInAdvance: 3,
        platform: "微信公众号【厦门园林植物园】",
        ticketPrice: "门票¥30 + 景交车通票¥10（60岁以上老人凭身份证免大门票）",
        requiresRealNameId: true,
        bookingTip: "长辈线上预约0元优惠门票，景交车票现场微信扫码即可乘车"
      }
    ],
    emergencyContacts: [
      {
        role: "厦门大学附属第一医院 (国家三甲综合实力第一)",
        phone: "0592-2137120",
        note: "思明区镇海路55号，距离双子塔康莱德酒店仅2.8公里"
      },
      {
        role: "厦门市文化和旅游便民咨询热线",
        phone: "0592-12345",
        note: "全天候7x24小时旅游诉求与无障碍救援响应"
      },
      {
        role: "鼓浪屿水上急救与轮渡绿色救助站",
        phone: "0592-2063870",
        note: "岛上紧急医疗运送与救护专用绿色通道"
      }
    ]
  }
,
  {
    id: "curated_singapore_4d",
    meta: {
      tripTitle: "新加坡 4天3晚 · 花园城市极致无障碍与南洋温润慢游",
      destinations: ["新加坡"],
      durationDays: 4,
      travelerProfile: [
        "花园城市",
        "极致无障碍",
        "长辈舒享",
        "南洋美食",
        "全冷气连廊"
      ],
      budgetTier: "luxury",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-12T09:00:00.000Z",
      coverImage: "/images/spot_singapore_garden.jpg",
      isPublic: true,
      viewsCount: 2890,
      likesCount: 265
    },
    overview: {
      highlights: [
        "滨海湾花园花穹与云雾林双冷室恒温24℃，全平坦步道与观景直梯，避暑避雨吸氧",
        "乘坐新加坡河复古木质驳船 (Bumboat)，平稳巡游克拉码头至滨海湾金沙天际线，水上零步行",
        "国家美术馆与星耀樟宜室内雨漩涡瀑布，全天候全空调无障碍长廊与长者爱心电动轮椅",
        "松发肉骨茶温润胡椒排骨原汤、天天海南鸡饭软嫩去骨、珍宝海鲜旗舰店麦片虾与清蒸笋壳鱼",
        "入住新加坡浮尔顿酒店 (The Fullerton Hotel)，毗邻新加坡河畔平坦步道，每日两小时下午茶静养"
      ],
      logisticsSummary: "新加坡为全球无障碍设计最高典范。全程专车直达各景点无障碍专用车道，所有公共场所均配备医用级超大升降梯与自动感应电动门，严控日均步行在1.8公里以内，全域覆盖 Google Reviews 4.4★+ 评价认证与 Google Maps 实时直达。",
      weatherAndPacking: [
        "热带雨林气候常年温暖（26℃ - 31℃），室内商场与冷室空调充足，建议备防风薄开衫与轻柔披肩",
        "长辈出行备好英标转换插头、常用日常降压保健药及便携遮阳折叠伞",
        "公共饮水机遍布各景点与展馆，冷热水均可随取，八达卡或Visa/Mastercard信用卡全岛通行"
      ]
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 狮城初遇 & 浮尔顿古典入住 & 新加坡河水上巡礼",
        theme: "初抵狮城 · 浮尔顿传奇海景入住 · 新加坡河复古游船",
        paceScore: "relaxed",
        mapConfig: {
          center: [1.2868, 103.8545],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "抵新后在客房午休静养，避开午后高温烈日"
        },
        timeline: [
          {
            type: "activity",
            id: "sg_d1_hotel",
            name: "新加坡浮尔顿酒店 (The Fullerton Hotel) · 历史文化遗产尊享入住",
            category: "rest",
            timeSlot: "11:30 - 12:30",
            durationMinutes: 60,
            coordinates: [1.2868, 103.8545],
            dropOffPoint: "1 Fullerton Square 酒店大堂专用门廊落客区",
            openingHours: "全天候接待",
            reservationRequired: true,
            reservationChannel: "官方预订",
            photoTip: "新古典主义巨大多立克石柱与大堂挑空玻璃天井光影",
            elderKidNotes: "原为百年中央邮政总局国家古迹，全套医用级无障碍升降电梯，礼宾提供免费轮椅租借与行李管家服务",
            description: "专车自樟宜机场接送直达新加坡河畔历史地标浮尔顿酒店。古典典雅的石雕拱廊与柔和的冷气迎宾，在客房内尽览新加坡河与滨海湾璀璨水岸。"
          },
          {
            type: "transit",
            fromStop: "sg_d1_hotel",
            toStop: "sg_d1_lunch",
            mode: "walk",
            distanceKm: 0.3,
            estimatedMinutes: 5,
            navigationDetail: "经酒店有盖平坦遮阴连廊缓步走至克拉码头松发肉骨茶"
          },
          {
            type: "activity",
            id: "sg_d1_lunch",
            name: "松发肉骨茶 (Song Fa Bak Kut Teh 克拉码头总店) · 潮汕白胡椒暖胃排骨汤",
            category: "food",
            timeSlot: "12:30 - 13:45",
            durationMinutes: 75,
            coordinates: [1.2885, 103.8475],
            dropOffPoint: "11 New Bridge Rd 松发正门前平整落客点",
            openingHours: "10:30 - 21:30",
            reservationRequired: false,
            photoTip: "砂锅中翻滚的肉骨原汤与整颗绵软蒜头、金黄油条小蝶",
            elderKidNotes: "排骨慢火炖透至离骨软烂，白胡椒汤底温胃去湿不上火，服务员提供无限次免费续温热原汤",
            description: "品尝新加坡必比登推介五十年老字号松发肉骨茶。骨肉软烂轻抿即化，浓郁温润的白胡椒原汤搭配泡透的脆油条与香米饭，暖心暖胃消除疲惫。"
          },
          {
            type: "transit",
            fromStop: "sg_d1_lunch",
            toStop: "sg_d1_hotel_rest",
            mode: "walk",
            distanceKm: 0.3,
            estimatedMinutes: 5,
            navigationDetail: "经遮阴林荫连廊平步返回浮尔顿酒店客房"
          },
          {
            type: "activity",
            id: "sg_d1_hotel_rest",
            name: "浮尔顿客房深度午休 & 传统英式红茶静养",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [1.2868, 103.8545],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "窗前远眺驳船在新加坡河上划出波纹",
            elderKidNotes: "平躺静卧午休1.5小时，室内恒温25℃避暑，舒缓飞行肌肉酸痛",
            description: "在静谧雅致的客房中平躺小睡，享受宁静的下午时光，恢复饱满体力。"
          },
          {
            type: "transit",
            fromStop: "sg_d1_hotel_rest",
            toStop: "sg_d1_river_cruise",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 3,
            navigationDetail: "出酒店地下步道直通浮尔顿码头无障碍登船跳板"
          },
          {
            type: "activity",
            id: "sg_d1_river_cruise",
            name: "新加坡河水上巡礼 (Singapore River Cruise) · 复古木驳船游河看暮色",
            category: "nature",
            timeSlot: "17:00 - 18:15",
            durationMinutes: 75,
            coordinates: [1.286, 103.8535],
            dropOffPoint: "Fullerton Jetty 码头平缓无阶梯坡道",
            openingHours: "09:00 - 23:00",
            reservationRequired: true,
            reservationChannel: "官网或Klook提前订电子票，扫码登船",
            photoTip: "驳船驶过安德森桥与鱼尾狮雕像，夕阳洒在金沙酒店三座塔楼玻璃幕墙上",
            elderKidNotes: "木驳船航行极度平稳无摇晃，上下船有专业地勤协助扶持，舱内设有遮阳棚与软座，全程坐着游览零步行",
            description: "搭乘传统木质驳船从浮尔顿码头平缓启航。迎着傍晚凉爽河风，经安德森桥、克拉码头缓缓驶入滨海湾，饱览历史驳船码头与现代摩天楼群的和谐画卷。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "松发肉骨茶 (Song Fa Bak Kut Teh 克拉码头总店)",
            cuisineStyle: "米其林必比登传统南洋肉骨茶",
            recommendedDishes: ["特级龙骨汤（肉厚软嫩）", "招牌卤猪脚（软烂入味）", "卤花生与咸菜", "热浸油条"],
            elderKidSuitability: "肉烂汤浓，胡椒温胃暖胃，汤汁免费无限续杯，老幼极宜",
            perPersonBudget: "S$18 - S$28 / 人",
            addressOrDropOff: "11 New Bridge Rd, #01-01 (Clarke Quay)",
            googleRating: "4.4★ (Google Reviews 14,000+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Song+Fa+Bak+Kut+Teh+Clarke+Quay"
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "珍宝海鲜 (Jumbo Seafood 河畔旗舰店)",
            cuisineStyle: "享誉狮城传统新加坡海鲜名宴",
            recommendedDishes: ["招牌辣椒蟹配现炸黄金小馒头（酸甜微辛开胃）", "黄金香脆麦片虾（酥脆去皮）", "清蒸笋壳鱼（鲜嫩无小刺）", "海鲜皇炒饭"],
            elderKidSuitability: "清蒸笋壳鱼肉质软嫩鲜甜无细刺，麦片虾香甜酥化，河畔独立冷气包厢环境宽敞",
            perPersonBudget: "S$65 - S$95 / 人",
            addressOrDropOff: "30 Merchant Rd, #01-01/02 Riverside Point",
            googleRating: "4.5★ (Google Reviews 8,800+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Jumbo+Seafood+Riverside+Point"
          }
        },
        dailyTips: [
          "珍宝海鲜河畔店人气旺盛，建议提前两周让酒店礼宾预约18:30河畔室内空调景观位",
          "新加坡公共室内冷气普遍强劲，游船与用餐时为长辈备好开衫保暖"
        ]
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 滨海湾花园双冷室全平步 & 天天海南鸡饭",
        theme: "恒温冷室花园 · 花穹平步看千花 · 云雾林高空瀑布吸氧",
        paceScore: "relaxed",
        mapConfig: {
          center: [1.2816, 103.8636],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 15:30",
          reason: "自冷室游览后返回浮尔顿客房午睡静养，恢复体能"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "sg_d2_hotel",
            toStop: "sg_d2_gardens",
            mode: "charter",
            distanceKm: 2.8,
            estimatedMinutes: 8,
            navigationDetail: "专车穿过滨海湾大桥送达滨海湾花园花穹专用无障碍落客平台"
          },
          {
            type: "activity",
            id: "sg_d2_gardens",
            name: "滨海湾花园 · 花穹 (Flower Dome) 与云雾林 (Cloud Forest) 恒温慢步",
            category: "nature",
            timeSlot: "09:30 - 12:30",
            durationMinutes: 180,
            coordinates: [1.2816, 103.8636],
            dropOffPoint: "18 Marina Gardens Dr 花穹冷室主入口无障碍车道",
            openingHours: "09:00 - 21:00",
            reservationRequired: true,
            reservationChannel: "官网或App提前购买双馆指定时段门票",
            photoTip: "云雾林35米高巨大室内植物瀑布水雾飞溅，花穹千岁地中海橄榄树与娇艳兰花",
            elderKidNotes: "两大冷室常年恒温23-25℃，空气湿润清爽，全馆铺设平坦防滑塑石坡道，配大型无障碍全景观光直梯，游客中心免费提供轻量轮椅借用",
            description: "走进全球最大的无柱冷室玻璃温室。在花穹漫步观赏来自全球五大洲的奇花异草与千岁古橄榄树；深入云雾林，乘电梯直达高空树冠步道，在清凉水雾与蕨类植物间惬意深呼吸。"
          },
          {
            type: "transit",
            fromStop: "sg_d2_gardens",
            toStop: "sg_d2_lunch",
            mode: "charter",
            distanceKm: 3.5,
            estimatedMinutes: 10,
            navigationDetail: "专车送至麦士威熟食中心平坦入场通道"
          },
          {
            type: "activity",
            id: "sg_d2_lunch",
            name: "天天海南鸡饭 (Tian Tian Hainanese Chicken Rice) · 米其林名厨盛赞之滑嫩肉香",
            category: "food",
            timeSlot: "12:45 - 13:45",
            durationMinutes: 60,
            coordinates: [1.2805, 103.8445],
            dropOffPoint: "1 Kadayanallur St 麦士威中心落客处",
            openingHours: "10:00 - 19:30 (周一休)",
            reservationRequired: false,
            photoTip: "油亮诱人的招牌白斩鸡肉切盘，搭配黄瓜片与三色特调蘸酱（黑酱油/姜蓉/辣椒）",
            elderKidNotes: "鸡肉经过独家高汤冰镇，皮脆肉嫩去骨无渣，鸡油饭粒粒分明松软吸饱鸡汤香，极易嚼烂吞咽",
            description: "品尝被安东尼·波登盛赞的狮城国民美食天天海南鸡饭。软嫩多汁的白切鸡蘸取特调鲜姜蓉与浓甜黑酱油，搭配喷香鸡油饭，朴实中见真章。"
          },
          {
            type: "transit",
            fromStop: "sg_d2_lunch",
            toStop: "sg_d2_hotel_rest",
            mode: "charter",
            distanceKm: 2,
            estimatedMinutes: 6,
            navigationDetail: "专车送回浮尔顿酒店"
          },
          {
            type: "activity",
            id: "sg_d2_hotel_rest",
            name: "酒店客房舒适午间深睡静养",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [1.2868, 103.8545],
            dropOffPoint: "浮尔顿客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "静享午後安宁",
            elderKidNotes: "平躺午睡2小时，彻底放松足部与关节",
            description: "客房内静养休整，喝一杯润燥温开水，消除上午冷室步行的体力消耗。"
          },
          {
            type: "transit",
            fromStop: "sg_d2_hotel_rest",
            toStop: "sg_d2_supertree",
            mode: "charter",
            distanceKm: 2.8,
            estimatedMinutes: 8,
            navigationDetail: "专车经滨海通道送达擎天树丛主看台专用落客区"
          },
          {
            type: "activity",
            id: "sg_d2_supertree",
            name: "擎天树丛灯光音乐秀 (Garden Rhapsody) · 璀璨魔幻夜曲漫赏",
            category: "photo",
            timeSlot: "19:15 - 20:30",
            durationMinutes: 75,
            coordinates: [1.282, 103.864],
            dropOffPoint: "擎天树丛平坦主看台长椅区",
            openingHours: "全天开放 (灯光秀每晚 19:45 与 20:45 两场)",
            reservationRequired: false,
            photoTip: "仰望50米高擎天巨树在交响乐声中伴随光影变幻出红金紫蓝奇幻光晕",
            elderKidNotes: "看台广场全平坦硬化草坪砖，长辈可在树下长椅仰卧仰观，无需站立，夜风温和凉爽",
            description: "夜幕降临，置身阿凡达般的巨型擎天树丛下。伴随动人心弦的经典交响乐，十二棵擎天树在夜空中绚丽起舞，光影璀璨梦幻，如临仙境。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "黄亚细肉骨茶 / 乐皇小笼包 (金宝汇滨海湾金沙店)",
            cuisineStyle: "精细江南小笼与滋补清润粤菜",
            recommendedDishes: ["原味纯鲜猪肉小笼包（皮薄多汁）", "鲜淮山炒百合（清甜爽口）", "浓白老鸭原汤", "清蒸鳕鱼"],
            elderKidSuitability: "金沙购物中心内全空调无障碍环境，直梯平达，菜品清淡少盐软熟易嚼",
            perPersonBudget: "S$40 - S$60 / 人",
            addressOrDropOff: "2 Bayfront Ave, The Shoppes at Marina Bay Sands",
            googleRating: "4.4★ (Google Reviews 3,600+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Paradise+Dynasty+Marina+Bay+Sands"
          }
        },
        dailyTips: [
          "擎天树灯光秀每晚19:45第一场人流适中，建议19:15提前由专车送达并占好中心平坦长椅位置",
          "滨海湾金沙商场内设有超大型无障碍卫生间与无障碍直梯，推行轮椅畅通无阻"
        ]
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 新加坡国家美术馆艺术长廊 & 莆田米其林一星",
        theme: "历史市政厅建筑 · 现代艺术通透回廊 · 莆田黄鱼煨面暖胃",
        paceScore: "relaxed",
        mapConfig: {
          center: [1.2903, 103.8519],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "美术馆静雅漫步后返回酒店午休休整"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "sg_d3_hotel",
            toStop: "sg_d3_art_gallery",
            mode: "charter",
            distanceKm: 0.8,
            estimatedMinutes: 4,
            navigationDetail: "专车过桥平稳送达国家美术馆地下落客区专用电梯口"
          },
          {
            type: "activity",
            id: "sg_d3_art_gallery",
            name: "新加坡国家美术馆 (National Gallery) · 前最高法院古迹与艺术长廊",
            category: "culture",
            timeSlot: "09:30 - 12:00",
            durationMinutes: 150,
            coordinates: [1.2903, 103.8519],
            dropOffPoint: "1 St Andrew's Rd Coleman Wing 专用无障碍落客大厅",
            openingHours: "10:00 - 19:00",
            reservationRequired: true,
            reservationChannel: "官网或现场凭护照购买展馆门票",
            photoTip: "连接两座殖民历史建筑的巨大树状木质金属采光天顶，光影洒落中庭",
            elderKidNotes: "全馆无任何台阶门槛，每层均配大型静音升降电梯，走廊极其宽阔通透，休息真皮软凳随处可见，冷气柔和安静",
            description: "漫步由前最高法院与政府大厦合璧打造的东南亚最大现代艺术博物馆。在金色光影的穹顶连廊下，欣赏丰富的南洋艺术瑰宝与吴冠中大师的水墨墨韵。"
          },
          {
            type: "transit",
            fromStop: "sg_d3_art_gallery",
            toStop: "sg_d3_lunch",
            mode: "charter",
            distanceKm: 2.2,
            estimatedMinutes: 6,
            navigationDetail: "专车经维多利亚街送达莆田米其林一星本店"
          },
          {
            type: "activity",
            id: "sg_d3_lunch",
            name: "莆田餐厅 (PUTIEN 吉真那路本店) · 新加坡米其林一星温润福建名菜",
            category: "food",
            timeSlot: "12:15 - 13:30",
            durationMinutes: 75,
            coordinates: [1.3115, 103.8565],
            dropOffPoint: "127 Kitchener Rd 莆田本店门口平坦落客道",
            openingHours: "11:30 - 15:00",
            reservationRequired: true,
            reservationChannel: "官网提前预订包厢席位",
            photoTip: "雪白浓醇的百秒黄花鱼与热腾腾的莆田卤面大瓷碗",
            elderKidNotes: "连续多年摘得米其林一星，百秒黄花鱼极嫩无腥，莆田卤面高汤慢煨面条软熟爽滑，温胃润肠极适宜老人咀嚼",
            description: "品尝从新加坡走向全球的米其林一星福建名府莆田。现煨的百秒黄花鱼肉质如蒜瓣般细嫩，搭配浓汤莆田卤面与手工扁肉汤，尽享温润鲜美。"
          },
          {
            type: "transit",
            fromStop: "sg_d3_lunch",
            toStop: "sg_d3_hotel_rest",
            mode: "charter",
            distanceKm: 3.5,
            estimatedMinutes: 10,
            navigationDetail: "专车接回浮尔顿酒店"
          },
          {
            type: "activity",
            id: "sg_d3_hotel_rest",
            name: "酒店客房安稳午睡静养",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [1.2868, 103.8545],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房静歇",
            elderKidNotes: "平躺静养2小时，补充精力",
            description: "在典雅舒适的客房中安静休养，品一杯温润菊花茶，放松肌肉关节。"
          },
          {
            type: "transit",
            fromStop: "sg_d3_hotel_rest",
            toStop: "sg_d3_orchard",
            mode: "charter",
            distanceKm: 3.8,
            estimatedMinutes: 12,
            navigationDetail: "专车送至乌节路百丽宫商场平坦无障碍落客平台"
          },
          {
            type: "activity",
            id: "sg_d3_orchard",
            name: "乌节路 (Orchard Road) · 绿荫大道平步漫游 & 传统乌节路面包夹冰淇淋",
            category: "leisure",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [1.304, 103.832],
            dropOffPoint: "Paragon 百丽宫百货落客门厅",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "遮阳大树下经典的流动老爷爷冰淇淋推车，切开香甜薄荷或榴莲冰淇淋夹入七彩松软吐司",
            elderKidNotes: "乌节路人行步道极度宽阔平整，全程绿树遮荫无暴晒，百丽宫与义安城商场内设平缓直梯与舒适空调座椅",
            description: "漫步在新加坡著名林荫大道乌节路。绿树成荫，品尝路边推车制作的新加坡特色彩虹面包夹冰淇淋，感受南洋都会的悠闲生活气息。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "御宝阁潮塘菜 (Imperial Treasure Fine Teochew Cuisine 乌节路店)",
            cuisineStyle: "米其林一星正宗潮州功夫菜",
            recommendedDishes: ["潮州卤水鹅肉（皮香肉嫩多汁）", "潮式冻红花蟹", "温润胡椒咸菜猪肚汤", "潮州反沙芋头与白果甜芋泥"],
            elderKidSuitability: "潮州菜以清炖清蒸少油见长，白果芋泥温软香甜，包厢安静私密有专用直梯",
            perPersonBudget: "S$70 - S$110 / 人",
            addressOrDropOff: "391 Orchard Rd, #04-20A Takashimaya Shopping Centre",
            googleRating: "4.5★ (Google Reviews 1,800+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Imperial+Treasure+Fine+Teochew+Cuisine+ION"
          }
        },
        dailyTips: [
          "国家美术馆顶层顶楼设有观景天台，可推着轮椅平步俯瞰政府大厦大草场与金沙全景",
          "伴手礼推荐选购 Bengawan Solo 斑兰绿蛋糕（松软轻盈少糖）与百胜厨肋沙拉面礼盒"
        ]
      },
      {
        dayNumber: 4,
        dateOrLabel: "Day 4 · 星耀樟宜雨漩涡室内瀑布 & 满载狮城温情归程",
        theme: "世界最佳机场 · 室内巨型雨漩涡 · 轻松舒适启程",
        paceScore: "relaxed",
        mapConfig: {
          center: [1.3602, 103.9898],
          zoom: 15
        },
        timeline: [
          {
            type: "transit",
            fromStop: "sg_d4_hotel",
            toStop: "sg_d4_jewel",
            mode: "charter",
            distanceKm: 20,
            estimatedMinutes: 25,
            navigationDetail: "专车载长辈与全套行李经东海岸公园大道高速平稳直达樟宜机场星耀樟宜落客大厅"
          },
          {
            type: "activity",
            id: "sg_d4_jewel",
            name: "星耀樟宜 (Jewel Changi) · 40米高资生堂森林谷室内雨漩涡慢赏",
            category: "nature",
            timeSlot: "10:00 - 12:00",
            durationMinutes: 120,
            coordinates: [1.3602, 103.9898],
            dropOffPoint: "Jewel Changi 2楼无障碍落客平台",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "巨大的圆顶天窗中央，40米高雨漩涡倾泻而下，水雾氤氲中森林谷绿意盎然",
            elderKidNotes: "星耀樟宜全馆无障碍平缓设计，配多部巨型直升电梯，1至5层均有平缓环形观景台俯瞰瀑布，设有专属长者与推车无障碍休息座椅",
            description: "漫步在被誉为“自然与科技奇迹”的星耀樟宜。在凉爽宜人的空调环境中，欣赏40米高的全球最大室内瀑布倾泻而下，郁郁葱葱的灌木森林环绕四周，震撼而宁静。"
          },
          {
            type: "transit",
            fromStop: "sg_d4_jewel",
            toStop: "sg_d4_lunch",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 3,
            navigationDetail: "平步漫行至星耀樟宜B2层美珍香与传统美食区"
          },
          {
            type: "activity",
            id: "sg_d4_lunch",
            name: "亚坤咖椰吐司 (Ya Kun Kaya Toast 星耀樟宜店) · 南洋传统经典早茶告别宴",
            category: "food",
            timeSlot: "12:15 - 13:15",
            durationMinutes: 60,
            coordinates: [1.36, 103.99],
            dropOffPoint: "Jewel Changi B2美食层",
            openingHours: "07:00 - 22:00",
            reservationRequired: false,
            photoTip: "炭烤酥脆咖椰牛油吐司、两颗半熟养生蛋淋上黑酱油胡椒粉，配一杯温热浓醇南洋咖啡",
            elderKidNotes: "半熟蛋温润嫩滑易吞咽，高钙高营养，咖椰酱香甜可口不油腻，老少咸宜",
            description: "以新加坡标志性的亚坤传统咖椰吐司为狮城之行画上温暖句号。炭烤香脆的吐司抹上浓郁斑兰咖椰酱与冰牛油，拌入滑嫩半熟蛋，回味无穷。"
          },
          {
            type: "transit",
            fromStop: "sg_d4_lunch",
            toStop: "sg_d4_departure",
            mode: "walk",
            distanceKm: 0.2,
            estimatedMinutes: 5,
            navigationDetail: "通过冷气平坦人行步道直接进入T1/T2/T3航站楼值机大厅"
          },
          {
            type: "activity",
            id: "sg_d4_departure",
            name: "樟宜机场专属爱心值机 · 踏上从容归途",
            category: "rest",
            timeSlot: "13:30 - 14:30",
            durationMinutes: 60,
            coordinates: [1.3644, 103.9915],
            dropOffPoint: "航站楼出发层爱心特殊协助服务柜台",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "满载花园城市舒心记忆从容登机",
            elderKidNotes: "樟宜机场设世界一流无障碍服务，提供免费电动接驳车直接送达登机口，轮椅优先登机",
            description: "在星耀樟宜办理提前值机与行李托运，免去推拉重物烦恼，长辈轻松步入候机区，满载美好回忆启程归家。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "亚坤咖椰吐司 (Ya Kun Kaya Toast 星耀樟宜店)",
            cuisineStyle: "新加坡八十年非遗传统南洋咖啡茶美点",
            recommendedDishes: ["传统咖椰牛油吐司套餐", "蒸温热咖椰面包 (松软温润)", "养生半熟蛋两颗 (淋黑酱油与白胡椒)", "温热南洋拉茶 (Teh C)"],
            elderKidSuitability: "蒸面包松软如云，半熟蛋温热营养极易消化，清淡可口无任何油腻",
            perPersonBudget: "S$8 - S$14 / 人",
            addressOrDropOff: "78 Airport Blvd, #B2-211 Jewel Changi Airport",
            googleRating: "4.4★ (Google Reviews 3,500+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Ya+Kun+Kaya+Toast+Jewel+Changi"
          }
        },
        dailyTips: [
          "星耀樟宜提供 Early Check-in（提前值机与行李托运服务），可在起飞前最长24小时提前托运行李，彻底解放双手",
          "樟宜机场航站楼内配备大量软皮倾斜躺椅与静音休息区，长辈候机极其舒适"
        ]
      }
    ],
    reservationChecklist: [
      {
        spotName: "滨海湾花园双冷室 (Flower Dome & Cloud Forest)",
        daysInAdvance: 7,
        platform: "官方网站【Gardens by the Bay】或 Klook",
        ticketPrice: "S$53 / 标准双馆联票（60岁以上老人持有效证件享长者优惠票S$43）",
        requiresRealNameId: false,
        bookingTip: "提前购买电子票指定入场日期，现场直接扫二维码走无障碍闸机入馆"
      },
      {
        spotName: "新加坡河水上巡礼驳船 (Singapore River Cruise)",
        daysInAdvance: 3,
        platform: "官网或各大旅游平台",
        ticketPrice: "S$28 / 人",
        requiresRealNameId: false,
        bookingTip: "购买通票后直接在浮尔顿码头凭二维码登船，无需另外排队换纸质票"
      }
    ],
    emergencyContacts: [
      {
        role: "新加坡中央医院 (Singapore General Hospital, SGH - 全球顶尖公立综合医院)",
        phone: "+65-6222-3322",
        note: "Outram Rd, 距离浮尔顿酒店仅2.8公里，医疗技术与老年急救实力全亚洲第一"
      },
      {
        role: "莱佛士医院 (Raffles Hospital - 顶尖国际私立医院)",
        phone: "+65-6311-1555",
        note: "585 North Bridge Rd, 设24小时全科国际急诊与中文接诊"
      },
      {
        role: "新加坡紧急救护与消防呼叫 (民防部队救护车)",
        phone: "995",
        note: "新加坡全境紧急医疗呼叫热线，快速调度救护车"
      }
    ]
  },
  {
    id: "curated_taipei_4d",
    meta: {
      tripTitle: "台北 4天3晚 · 故宫瑰宝传世与北投温润泉汤慢养",
      destinations: ["台北", "北投"],
      durationDays: 4,
      travelerProfile: [
        "传世国宝",
        "长辈舒享",
        "北投温泉",
        "米其林台菜",
        "全平缓无障碍"
      ],
      budgetTier: "comfort",
      transportMode: "charter_taxi",
      generatedAt: "2026-10-12T09:00:00.000Z",
      coverImage: "/images/spot_taipei_palace.jpg",
      isPublic: true,
      viewsCount: 2540,
      likesCount: 231
    },
    overview: {
      highlights: [
        "台北故宫博物院全馆无障碍平缓通道，细品翠玉白菜、肉形石与毛公鼎传世国宝",
        "故宫晶华国宝午宴，品尝象形翠玉白菜高汤鲜笋与弦纹鼎佛跳墙，舌尖品味历史",
        "大稻埕迪化街全平整红砖巴洛克骑楼漫步，防雨遮阳选购地道南北干货与养生花茶",
        "入住北投日胜生加贺屋正统日式温泉饭店，温润白磺温泉滋养关节与腰背，深度驱散疲劳",
        "欣叶台菜创始店温润红蟳米糕与老菜脯蛋、鼎泰丰黄金十八褶小笼与清炖牛肉汤"
      ],
      logisticsSummary: "全行程依托舒适商务专车点对点门到门接送。故宫与展馆全线配置宽幅平缓缓坡与大型医疗级升降机，提供免费轮椅借用；第3日转场北投温泉乡，享受纯正无障碍和风温泉客房，节奏闲适静雅。",
      weatherAndPacking: [
        "台北春秋气温温和宜人（18℃ - 25℃），山区偶有阵雨，建议携带轻便折叠防风雨伞与薄外套",
        "赴台需随身携带有效入台证件原件，长辈备好常用慢性病药物与保温杯",
        "北投温泉为酸性硫酸盐泉（白磺泉），浸泡单次建议控制在15-20分钟，入池前充分补充温水"
      ]
    },
    days: [
      {
        dayNumber: 1,
        dateOrLabel: "Day 1 · 宝岛初临 & 台北晶华酒店入住 & 欣叶古早味台菜",
        theme: "初抵台北 · 晶华五星名邸 · 欣叶经典古早味晚膳",
        paceScore: "relaxed",
        mapConfig: {
          center: [25.0535, 121.5238],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "13:30 - 15:30",
          reason: "抵台后客房静养补眠，舒缓航程疲乏"
        },
        timeline: [
          {
            type: "activity",
            id: "tp_d1_hotel",
            name: "台北晶华酒店 (Regent Taipei) · 中山区林荫名邸入住",
            category: "rest",
            timeSlot: "11:30 - 12:30",
            durationMinutes: 60,
            coordinates: [25.0535, 121.5238],
            dropOffPoint: "台北市中山北路二段39巷3号酒店落客车道",
            openingHours: "全天候接待",
            reservationRequired: true,
            reservationChannel: "官方预订",
            photoTip: "挑高中庭大堂经典水晶吊灯与中山北路樟树林荫窗景",
            elderKidNotes: "酒店设专用无障碍坡道与大型电梯，客房卫浴宽敞平坦，配全套安全扶手与防滑地垫，礼宾协助轮椅与行李照料",
            description: "专车自松山或桃园机场送抵中山区绿荫环绕的台北晶华酒店。步入典雅大堂，感受温润细致的台式待客礼遇，在宽敞静谧的客房内舒心安顿。"
          },
          {
            type: "transit",
            fromStop: "tp_d1_hotel",
            toStop: "tp_d1_lunch",
            mode: "walk",
            distanceKm: 0.4,
            estimatedMinutes: 6,
            navigationDetail: "步行穿过平整人行道即至欣叶台菜双城创始店"
          },
          {
            type: "activity",
            id: "tp_d1_lunch",
            name: "欣叶台菜 (双城创始店) · 四十年非遗传承正宗古早味台菜",
            category: "food",
            timeSlot: "12:30 - 13:45",
            durationMinutes: 75,
            coordinates: [25.0645, 121.526],
            dropOffPoint: "台北市双城街34-1号正门",
            openingHours: "11:00 - 21:30",
            reservationRequired: true,
            reservationChannel: "电话或官网提前订座",
            photoTip: "金黄圆润厚切老菜脯蛋翻开冒着热气，红蟳米糕蟹黄饱满糯米喷香",
            elderKidNotes: "老菜脯蛋厚软松嫩咸香适口，红蟳米糕糯米软熟黏糯极易咀嚼，温润地瓜稀饭无限供应暖胃养肠",
            description: "品尝代表台湾传统家庭风味的欣叶台菜。招牌厚煎菜脯蛋松软可口，红蟳米糕蟹香浓郁，搭配绵密暖胃的地瓜稀饭与招牌手打杏仁豆腐，倍感亲切温润。"
          },
          {
            type: "transit",
            fromStop: "tp_d1_lunch",
            toStop: "tp_d1_hotel_rest",
            mode: "walk",
            distanceKm: 0.4,
            estimatedMinutes: 6,
            navigationDetail: "平步返回晶华酒店客房休息"
          },
          {
            type: "activity",
            id: "tp_d1_hotel_rest",
            name: "晶华酒店客房深度午休 & 台湾高山乌龙茶品茗",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [25.0535, 121.5238],
            dropOffPoint: "酒店客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "客房窗前一杯清香冻顶乌龙茶，窗外绿树摇曳",
            elderKidNotes: "平躺静卧午休1.5小时，舒展腰背，调养精神",
            description: "客房内静卧休养两小时，品尝迎宾阿里山高山乌龙茶，清香甘醇，彻底消解旅途劳顿。"
          },
          {
            type: "transit",
            fromStop: "tp_d1_hotel_rest",
            toStop: "tp_d1_park",
            mode: "walk",
            distanceKm: 0.2,
            estimatedMinutes: 4,
            navigationDetail: "出酒店沿平坦步道即达中山区十四号公园林荫步道"
          },
          {
            type: "activity",
            id: "tp_d1_park",
            name: "康乐公园与中山林荫道 · 樟树大道平缓散步 & 感受都会微风",
            category: "nature",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [25.0525, 121.5255],
            dropOffPoint: "南京东路康乐公园入口平坦处",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "百年老樟树绿荫垂挂，斜阳在花岗岩平整步道上洒落斑驳光斑",
            elderKidNotes: "公园纯平硬化防滑步道，老树参天遮阴凉爽，绿地座椅密布，环境安详清静无车喧",
            description: "傍晚漫步在晶华酒店旁的林荫公园，老树苍翠，微风轻拂。听鸟雀欢唱，看当地老人在树下悠然下棋闲聊，体会台北深藏的温和与从容。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "欣叶台菜 (双城创始店)",
            cuisineStyle: "米其林必比登传统台菜元老名家",
            recommendedDishes: ["正宗正红蟳米糕（蟹膏甘香，糯米极软）", "经典菜脯蛋（厚软多汁）", "古早味煎猪肝", "手作杏仁豆腐 (软糯Q弹润肺)"],
            elderKidSuitability: "菜品温和不辣，地瓜稀饭温热滋补，菜脯蛋松软好咀嚼",
            perPersonBudget: "NT$800 - NT$1,200 / 人",
            addressOrDropOff: "台北市中山区双城街34-1号",
            googleRating: "4.4★ (Google Reviews 5,200+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Shin+Yeh+Taiwanese+Cuisine+Original"
          },
          dinner: {
            mealType: "晚餐",
            restaurantName: "林东芳牛肉面 (经典名铺)",
            cuisineStyle: "传承半世纪传统药膳清润牛肉面",
            recommendedDishes: ["半筋半肉牛肉面（牛筋如冻胶般软化）", "药膳温润高汤", "特制花干（吸饱老牛肉汤）", "烫时令青菜"],
            elderKidSuitability: "牛肉与牛筋慢炖数小时入口即化，药膳高汤甘甜润燥不油腻，面条软硬适中",
            perPersonBudget: "NT$260 - NT$380 / 人",
            addressOrDropOff: "台北市中山区八德路二段322号（专车接送门口）",
            googleRating: "4.3★ (Google Reviews 7,900+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Lin+Dong+Fang+Beef+Noodles"
          }
        },
        dailyTips: [
          "林东芳牛肉面可根据长辈口味选择不辣原汤底，牛筋煮透极富天然胶原蛋白",
          "台北晶华酒店地下1-2层即为丽晶精品免税名品街，室内全平缓直梯连通，雨天逛街轻松无阻"
        ]
      },
      {
        dayNumber: 2,
        dateOrLabel: "Day 2 · 台北故宫博物院国宝鉴赏 & 迪化街红砖骑楼",
        theme: "外双溪翠玉白菜 · 故宫晶华国宝午宴 · 大稻埕巴洛克老骑楼",
        paceScore: "relaxed",
        mapConfig: {
          center: [25.1024, 121.5485],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 15:30",
          reason: "故宫观展后返回客房静养补眠，舒展双腿"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "tp_d2_hotel",
            toStop: "tp_d2_palace",
            mode: "charter",
            distanceKm: 8.5,
            estimatedMinutes: 20,
            navigationDetail: "商务专车载长辈出市区，沿自强隧道直达故宫地下一层无障碍VIP落客区"
          },
          {
            type: "activity",
            id: "tp_d2_palace",
            name: "台北故宫博物院 · 传世国宝鉴赏 (翠玉白菜/肉形石/毛公鼎)",
            category: "culture",
            timeSlot: "09:30 - 12:00",
            durationMinutes: 150,
            coordinates: [25.1024, 121.5485],
            dropOffPoint: "士林区至善路二段221号故宫B1正门无障碍大车道旁",
            openingHours: "09:00 - 17:00 (周一闭馆)",
            reservationRequired: true,
            reservationChannel: "台北故宫官网提前预约参观场次",
            photoTip: "黄瓦红柱中国宫殿外观倒映在至善园水池中，展厅内精雕细琢的翠玉白菜与东坡肉形石",
            elderKidNotes: "B1设平坦电动轮椅通道与观光大电梯直达三楼核心国宝展厅，免爬正门百级台阶，展区全平坦地面，软皮休息座椅充足，免费借用轮椅",
            description: "专车直达地下一层无障碍入口，直通展厅。近距离瞻仰闻名中外的清代翠玉白菜、肉形石与西周重器毛公鼎，在专业解说耳麦中体味中华文明近七十万件国宝文物的深厚底蕴。"
          },
          {
            type: "transit",
            fromStop: "tp_d2_palace",
            toStop: "tp_d2_lunch",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 3,
            navigationDetail: "自展馆主楼经连廊平步移至故宫晶华餐厅"
          },
          {
            type: "activity",
            id: "tp_d2_lunch",
            name: "故宫晶华 (Silks Palace) · 舌尖上的国宝经典名宴",
            category: "food",
            timeSlot: "12:15 - 13:30",
            durationMinutes: 75,
            coordinates: [25.1015, 121.549],
            dropOffPoint: "故宫晶华正门无障碍直梯处",
            openingHours: "11:30 - 14:30",
            reservationRequired: true,
            reservationChannel: "提前线上预订国宝宴席位",
            photoTip: "仿古毛公鼎内热汤翻滚的佛跳墙与象形翠玉白菜点心巧夺天工",
            elderKidNotes: "菜品将文博国宝融入精美粤台名点中，鲜笋娃娃菜清炖甘甜，佛跳墙高汤慢熬温润滋补，环境典雅静谧",
            description: "在故宫院内的故宫晶华享用国宝美馔。主厨将镇馆之宝化为餐桌佳肴：象形翠玉白菜多汁鲜甜、仿古铜鼎佛跳墙浓白暖胃，将文化与美食融为一体。"
          },
          {
            type: "transit",
            fromStop: "tp_d2_lunch",
            toStop: "tp_d2_hotel_rest",
            mode: "charter",
            distanceKm: 8.5,
            estimatedMinutes: 20,
            navigationDetail: "专车接回台北晶华酒店"
          },
          {
            type: "activity",
            id: "tp_d2_hotel_rest",
            name: "晶华酒店客房安稳午睡静养",
            category: "rest",
            timeSlot: "14:00 - 15:45",
            durationMinutes: 105,
            coordinates: [25.0535, 121.5238],
            dropOffPoint: "晶华客房内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "静享午後安宁",
            elderKidNotes: "平躺午睡1.5小时，舒缓腰背肌肉",
            description: "客房内静养休整，喝一杯养生牛蒡茶，恢复体力。"
          },
          {
            type: "transit",
            fromStop: "tp_d2_hotel_rest",
            toStop: "tp_d2_dihua",
            mode: "charter",
            distanceKm: 3.2,
            estimatedMinutes: 10,
            navigationDetail: "专车经南京西路平稳送达迪化街永乐市场平坦落客道"
          },
          {
            type: "activity",
            id: "tp_d2_dihua",
            name: "大稻埕迪化街 · 百年巴洛克红砖骑楼遮阳慢步 & 养生药材花茶铺",
            category: "culture",
            timeSlot: "16:30 - 18:00",
            durationMinutes: 90,
            coordinates: [25.0555, 121.5098],
            dropOffPoint: "台北市大同区迪化街一段永乐市场平坦路面",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "红砖拱圈骑楼深处散发着沉香与人参药香，霞海城隍庙香火缕缕",
            elderKidNotes: "整条老街两侧均为台湾传统“亭仔脚”防雨遮阳骑楼，地面全平整无台阶，药材行与老茶庄提供温热养生茶试饮",
            description: "慢步在台北保存最完整的历史老街迪化街。走在避雨遮阳的红砖骑楼下，欣赏精美的巴洛克石雕门楣，闻着百年汉药铺扑鼻的当归与人参香气，感受百年老台北的商贾风华。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "金蓬莱遵古台菜 (米其林一星士林天母总店)",
            cuisineStyle: "米其林一星七十年古法酒家菜传承",
            recommendedDishes: ["招牌放山白斩古早鸡（皮脆油香肉嫩）", "放山土鸡佛跳墙", "自制蓬莱排骨酥", "清蒸野生大沙公米糕"],
            elderKidSuitability: "白斩鸡肉质细腻无肉渣，佛跳墙文火慢煨软糯鲜香，老字号包厢宽敞舒适无台阶",
            perPersonBudget: "NT$1,000 - NT$1,500 / 人",
            addressOrDropOff: "台北市士林区天母东路101号（专车直达大门）",
            googleRating: "4.4★ (Google Reviews 4,100+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Golden+Formosa+Taipei"
          }
        },
        dailyTips: [
          "台北故宫严格控温在20℃左右，务必随身携带防风外套，避免温差引起感冒",
          "迪化街推荐选购台湾野生爱玉子、野生乌鱼子或手工黑糖桂圆红枣茶砖作为伴手礼"
        ]
      },
      {
        dayNumber: 3,
        dateOrLabel: "Day 3 · 转场北投温泉乡 & 加贺屋日式温泉旅馆 & 白磺泉养生",
        theme: "北投温泉乡 · 日胜生加贺屋极上和风 · 白磺泉舒筋活络",
        paceScore: "relaxed",
        mapConfig: {
          center: [25.1368, 121.5065],
          zoom: 15
        },
        hotelRestBlock: {
          enabled: true,
          recommendedTime: "14:00 - 16:00",
          reason: "加贺屋榻榻米客房安睡与私人汤屋温润浸泡，深度养生"
        },
        timeline: [
          {
            type: "transit",
            fromStop: "tp_d3_hotel",
            toStop: "tp_d3_beitou_hotel",
            mode: "charter",
            distanceKm: 12,
            estimatedMinutes: 25,
            navigationDetail: "专车载长辈与全套行李出市区，经洲美快速道路平稳送达北投加贺屋饭店"
          },
          {
            type: "activity",
            id: "tp_d3_beitou_hotel",
            name: "日胜生加贺屋国际温泉饭店 (Radium Kagaya) · 纯正日式管家管内迎宾",
            category: "rest",
            timeSlot: "11:30 - 12:30",
            durationMinutes: 60,
            coordinates: [25.1368, 121.5065],
            dropOffPoint: "北投区光明路236号加贺屋大门前专车专属回车道",
            openingHours: "全天候接待",
            reservationRequired: true,
            reservationChannel: "官方预订",
            photoTip: "身着华美和服的管家在桧木数寄屋玄关前行礼迎宾，中庭古筝琴音袅袅",
            elderKidNotes: "全馆无障碍平缓设计，配有直梯直达温泉楼层与客房，客房卫浴设天然白磺温泉独立汤池与平稳安全防滑防摔扶手",
            description: "抵北投温泉胜地。入住传承日本石川县百年名宿精神的日胜生加贺屋。专属内管家奉上温热抹茶与和果子，在散发着淡雅桧木清香的和风客房中，体验极致尊宠放松。"
          },
          {
            type: "transit",
            fromStop: "tp_d3_beitou_hotel",
            toStop: "tp_d3_lunch",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 2,
            navigationDetail: "乘加贺屋无障碍直梯至3楼天翔日式餐厅"
          },
          {
            type: "activity",
            id: "tp_d3_lunch",
            name: "加贺屋 天翔餐厅 (Tensho) · 旬彩和风会席午宴",
            category: "food",
            timeSlot: "12:30 - 13:45",
            durationMinutes: 75,
            coordinates: [25.1368, 121.5065],
            dropOffPoint: "加贺屋饭店3层餐厅大堂",
            openingHours: "11:30 - 14:00",
            reservationRequired: true,
            reservationChannel: "酒店前台代订",
            photoTip: "九宫格漆器托盘内晶莹精致的时令前菜与热气腾腾的日式和牛纸火锅",
            elderKidNotes: "采用当季最鲜嫩食材，少油少盐，火锅汤头清甜温热，豆腐软滑，和牛极嫩入口即化",
            description: "在俯瞰北投公园绿意的天翔餐厅品尝正统日本会席料理。精致的旬彩小钵、鲜美纸火锅与温热茶碗蒸，清雅怡人，滋养身心。"
          },
          {
            type: "transit",
            fromStop: "tp_d3_lunch",
            toStop: "tp_d3_hotel_onsen",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 2,
            navigationDetail: "返回客房享受私人客房白磺温泉"
          },
          {
            type: "activity",
            id: "tp_d3_hotel_onsen",
            name: "客房独立白磺泉温润私汤浸泡 & 舒筋活络午休",
            category: "rest",
            timeSlot: "14:00 - 16:00",
            durationMinutes: 120,
            coordinates: [25.1368, 121.5065],
            dropOffPoint: "加贺屋客房独立汤屋内",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "青玉石汤池中乳白色天然白磺温泉热气氤氲，窗外绿竹映衬",
            elderKidNotes: "白磺泉呈乳白色（又称牛奶汤），水温恒定温润，浸泡15分钟能有效舒缓长辈关节酸痛与神经疲劳，池旁备有防滑安全扶手",
            description: "在客房内尽享北投天然纯正白磺温泉私汤。温热的矿物泉水包裹全身，深度活络经脉血液循环，泡后换上舒适棉质浴衣安稳小睡，疲劳尽消。"
          },
          {
            type: "transit",
            fromStop: "tp_d3_hotel_onsen",
            toStop: "tp_d3_beitou_park",
            mode: "walk",
            distanceKm: 0.1,
            estimatedMinutes: 3,
            navigationDetail: "自饭店平坦侧门缓步走出即达北投公园绿荫步道"
          },
          {
            type: "activity",
            id: "tp_d3_beitou_park",
            name: "北投公园与温泉博物馆 · 绿建筑图书馆平缓木道散策",
            category: "nature",
            timeSlot: "16:45 - 18:00",
            durationMinutes: 75,
            coordinates: [25.136, 121.505],
            dropOffPoint: "光明路与中山路交界北投公园平坦步道入口",
            openingHours: "全天开放",
            reservationRequired: false,
            photoTip: "全木造“全球最美公立图书馆”北投分馆在老树绿意环绕下的温暖原木立面",
            elderKidNotes: "沿北投溪修筑全平木栈道与缓坡，两旁古树参天，空气中弥漫着淡淡硫磺与桧木香气，平缓零台阶",
            description: "漫步在绿意葱茏的北投公园。溪水潺潺，白烟在溪石间升腾，欣赏被誉为全球最美图书馆的北投木造绿建筑，呼吸清新的山林负氧离子。"
          }
        ],
        meals: {
          dinner: {
            mealType: "晚餐",
            restaurantName: "加贺屋 本格会席料理 (加贺屋宴席厅)",
            cuisineStyle: "石川县能登半岛正宗温泉怀石料理",
            recommendedDishes: ["能登牛朴叶味噌烧（香气扑鼻，软嫩多汁）", "鲜蒸活海鱼", "加贺传统治部煮（温和清甜汤品）", "和风季节炊饭"],
            elderKidSuitability: "治部煮汤品极其温润护胃，海鱼软滑无刺，席间由专属女将细致分餐照料",
            perPersonBudget: "NT$2,200 - NT$3,200 / 人",
            addressOrDropOff: "日胜生加贺屋饭店宴会厅",
            googleRating: "4.5★ (Google Reviews 4,800+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Radium+Kagaya+International+Hotel"
          }
        },
        dailyTips: [
          "长辈泡温泉切忌空腹或刚吃饱，泡汤前饮一杯温水，泡15分钟后擦干保暖，切勿受凉",
          "北投公园傍晚山风微凉，随身穿戴酒店提供的厚保暖和服羽织外套"
        ]
      },
      {
        dayNumber: 4,
        dateOrLabel: "Day 4 · 鼎泰丰黄金十八褶小笼 & 满载温情从容返程",
        theme: "鼎泰丰米其林点心 · 清炖牛肉汤暖胃 · 舒心满载归程",
        paceScore: "relaxed",
        mapConfig: {
          center: [25.0631, 121.5516],
          zoom: 15
        },
        timeline: [
          {
            type: "transit",
            fromStop: "tp_d4_hotel",
            toStop: "tp_d4_lunch",
            mode: "charter",
            distanceKm: 14,
            estimatedMinutes: 25,
            navigationDetail: "专车载长辈出北投，平稳送达鼎泰丰新生旗舰店无障碍落客平台"
          },
          {
            type: "activity",
            id: "tp_d4_lunch",
            name: "鼎泰丰 (新生旗舰店) · 黄金十八褶米其林小笼包告别宴",
            category: "food",
            timeSlot: "11:30 - 13:00",
            durationMinutes: 90,
            coordinates: [25.0335, 121.533],
            dropOffPoint: "台北市信义路二段206号正门平整无台阶落客区",
            openingHours: "10:30 - 21:00",
            reservationRequired: true,
            reservationChannel: "通过APP或专车提前代取号码牌",
            photoTip: "蒸笼掀开热气蒸腾，小笼包外皮晶莹剔透，姜丝黑醋碟精致小巧",
            elderKidNotes: "旗舰店设无障碍升降电梯与宽敞洗手间，小笼包皮薄馅嫩汤汁鲜甜，清炖牛肉汤温胃顺口，极易消化",
            description: "以享誉全球的鼎泰丰为台湾之行圆满收官。品尝手工十八折招牌原味小笼包，轻咬破薄皮吸吮鲜美汤汁，搭配温润清甜的元盅牛肉汤与丝瓜虾仁小笼，鲜美回甘。"
          },
          {
            type: "transit",
            fromStop: "tp_d4_lunch",
            toStop: "tp_d4_departure",
            mode: "charter",
            distanceKm: 4.5,
            estimatedMinutes: 15,
            navigationDetail: "商务专车接载直达台北松山机场国际出发层（若桃园机场约40分钟高速）"
          },
          {
            type: "activity",
            id: "tp_d4_departure",
            name: "专车平稳送抵松山/桃园机场 · 踏上温馨归程",
            category: "rest",
            timeSlot: "13:30 - 14:30",
            durationMinutes: 60,
            coordinates: [25.0631, 121.5516],
            dropOffPoint: "松山机场国际航站楼出境无障碍落客平台",
            openingHours: "全天候",
            reservationRequired: false,
            photoTip: "满载宝岛温润人情味回忆从容登机",
            elderKidNotes: "松山机场市区内极其便捷，专车司机协助行李卸车至特殊爱心服务柜台，专人优先登机",
            description: "专车直达航站楼出发口，协助托运凤梨酥与伴手礼行李，长辈轻松步入安检通关口，带着温泉舒畅与国宝回忆满意归程。"
          }
        ],
        meals: {
          lunch: {
            mealType: "午餐",
            restaurantName: "鼎泰丰 (新生旗舰店)",
            cuisineStyle: "全球米其林享誉中华经典点心",
            recommendedDishes: ["招牌原味小笼包 (黄金18褶)", "丝瓜虾仁小笼包 (清甜多汁)", "元盅清炖牛肉汤 (暖胃温润)", "虾仁肉丝蛋炒饭 (粒粒分明松软)"],
            elderKidSuitability: "皮薄馅嫩多汁，肉质极细，清炖牛肉汤温热养胃，炒饭干香不硬，老幼皆宜",
            perPersonBudget: "NT$500 - NT$750 / 人",
            addressOrDropOff: "台北市中正区信义路二段206号（独立旗舰大楼，配直梯）",
            googleRating: "4.5★ (Google Reviews 16,000+ 评价)",
            googleMapsUrl: "https://maps.google.com/?q=Din+Tai+Fung+Xinsheng+Branch"
          }
        },
        dailyTips: [
          "鼎泰丰新生旗舰店比信义老店空间宽敞数倍且设无障碍电梯，推行轮椅用餐极其方便",
          "伴手礼推荐选购微热山丘纯凤梨酥、佳德凤梨酥或旧振南绿豆椪"
        ]
      }
    ],
    reservationChecklist: [
      {
        spotName: "台北故宫博物院",
        daysInAdvance: 7,
        platform: "官方网站【国立故宫博物院】",
        ticketPrice: "NT$350 / 人（65岁以上长者平日免费，假日半价NT$75）",
        requiresRealNameId: true,
        bookingTip: "提前实名预约入场时段，长者凭证件直接走B1无障碍爱心通道进馆"
      },
      {
        spotName: "北投日胜生加贺屋国际温泉饭店",
        daysInAdvance: 30,
        platform: "官方网站【Radium Kagaya】",
        ticketPrice: "和风温泉客房每晚约 NT$15,000 起（含早晚餐与私汤）",
        requiresRealNameId: true,
        bookingTip: "提前1个月预订无障碍平整榻榻米客房，并备注长者白磺泉私汤需求"
      }
    ],
    emergencyContacts: [
      {
        role: "台北荣民总医院 (国家顶尖医学中心 / 老年医学与急诊全台第一)",
        phone: "+886-2-2871-2121",
        note: "台北市北投区石牌路二段201号，距离加贺屋温泉仅2.2公里，老年多发病急救保障中心"
      },
      {
        role: "国立台湾大学医学院附设医院 (台大医院)",
        phone: "+886-2-2312-3456",
        note: "台北市中正区中山南路7号，市区顶尖综合实力医院"
      },
      {
        role: "台湾紧急医疗救护呼叫 (消防局救护车)",
        phone: "119",
        note: "全天候即时派车免费紧急送医"
      }
    ]
  }
];
