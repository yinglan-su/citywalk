import { DiningAlternative, TravelPlan } from "@/types/itinerary";
import { Locale } from "@/lib/i18n";

export interface CuratedDiningEntry {
  restaurantNameZh: string;
  restaurantNameEn: string;
  cuisineStyleZh: string;
  cuisineStyleEn: string;
  recommendedDishesZh: string[];
  recommendedDishesEn: string[];
  elderKidSuitabilityZh: string;
  elderKidSuitabilityEn: string;
  perPersonBudgetZh: string;
  perPersonBudgetEn: string;
  image?: string;
  photoTipZh?: string;
  photoTipEn?: string;
}

export const CITY_DINING_ALTERNATIVES: Record<string, CuratedDiningEntry[]> = {
  "厦门": [
    {
      restaurantNameZh: "堂宴·老厦门私房菜 (黑珍珠)",
      restaurantNameEn: "Tang Yan · Old Xiamen Heritage Bistro",
      cuisineStyleZh: "老厦门传统私房名菜 · 纯正古法",
      cuisineStyleEn: "Traditional Xiamen heritage cuisine",
      recommendedDishesZh: ["古法香酥芋泥", "野生黄鱼煮面线", "沙茶肉串"],
      recommendedDishesEn: ["Crispy Taro Paste", "Yellow Croaker Noodle Soup", "Satay Pork Skewers"],
      elderKidSuitabilityZh: "芋泥酥糯温热、黄鱼去刺面线细滑，全年龄适宜",
      elderKidSuitabilityEn: "Soft taro paste and boneless fish noodle soup, mild for all ages",
      perPersonBudgetZh: "¥90 - ¥130 / 人",
      perPersonBudgetEn: "$14 - $20 / person",
      image: "/images/spot_xm_tangyan.jpg",
      photoTipZh: "黄鱼面线浓汤翻滚与金黄酥芋泥同框特写",
      photoTipEn: "Rich yellow croaker broth with golden taro paste",
    },
    {
      restaurantNameZh: "临家闽南菜 (环岛路店 · 园林景观)",
      restaurantNameEn: "Linjia Minnan Heritage (Huandao Rd)",
      cuisineStyleZh: "地道闽南乡土名菜 · 庭院式舒适就餐",
      cuisineStyleEn: "Authentic Minnan cuisine in garden estate",
      recommendedDishesZh: ["原味土猪肉清汤", "闽南炸醋肉", "同安封肉", "手工芋头饭"],
      recommendedDishesEn: ["Slow-simmered Pork Broth", "Crispy Vinegar Pork", "Braised Tong'an Pork", "Taro Rice"],
      elderKidSuitabilityZh: "原味清炖土猪肉汤清甜温润，环境开阔有无障碍通道",
      elderKidSuitabilityEn: "Mild nourishing soup, wheelchair & stroller accessible",
      perPersonBudgetZh: "¥100 - ¥140 / 人",
      perPersonBudgetEn: "$15 - $22 / person",
      image: "/images/spot_xm_linjia.jpg",
      photoTipZh: "红砖闽南庭院中热气升腾的土猪肉汤煲",
      photoTipEn: "Simmering clay pot soup in historic red-brick courtyard",
    },
    {
      restaurantNameZh: "上青本港海鲜 (八市地标海鲜老字号)",
      restaurantNameEn: "Shangqing Local Seafood (Bashi Market)",
      cuisineStyleZh: "闽南海港野生海鲜 · 现烹酱油水",
      cuisineStyleEn: "Fresh harbor wild seafood & soy sauce glaze",
      recommendedDishesZh: ["酱油水野生小海鲜", "白灼本港红虾", "传统海蛎煎"],
      recommendedDishesEn: ["Soy-glazed Wild Catch", "Poached Red Harbor Shrimp", "Crispy Oyster Omelet"],
      elderKidSuitabilityZh: "海鲜极度新鲜少盐少油，海蛎煎软糯香甜",
      elderKidSuitabilityEn: "Extremely fresh seafood with light natural seasoning",
      perPersonBudgetZh: "¥120 - ¥180 / 人",
      perPersonBudgetEn: "$18 - $28 / person",
      image: "/images/spot_xm_shangqing.jpg",
      photoTipZh: "透亮红虾与酱油水赤油浓香特写",
      photoTipEn: "Fresh red shrimp with glossy soy glaze",
    },
  ],
  "延吉": [
    {
      restaurantNameZh: "大朴家石锅参鸡汤 (总店)",
      restaurantNameEn: "Dapu Samgyetang (Flagship)",
      cuisineStyleZh: "朝鲜族传统慢炖高丽参鸡汤",
      cuisineStyleEn: "Korean Ginseng Chicken Soup",
      recommendedDishesZh: ["原汁高丽参鸡汤（整只童子鸡）", "糯米鸡肚温热热粥", "鲜蒸土豆饺子"],
      recommendedDishesEn: ["Ginseng Chicken Pot", "Nutritious Sticky Rice Congee", "Steamed Potato Dumplings"],
      elderKidSuitabilityZh: "鸡肉酥烂骨肉分离，汤汁醇厚温润，长辈补气暖胃首选",
      elderKidSuitabilityEn: "Tender fall-off-bone chicken, warming broth ideal for elders",
      perPersonBudgetZh: "¥70 - ¥90 / 人",
      perPersonBudgetEn: "$11 - $14 / person",
      image: "/images/spot_yj_samgyetang.jpg",
      photoTipZh: "黑石锅中糯米红枣与高丽参须热气升腾特写",
      photoTipEn: "Steaming stone pot chicken with red dates and ginseng",
    },
    {
      restaurantNameZh: "顺姬冷面旗舰店 (暖胃玉米温面)",
      restaurantNameEn: "Shunji Restaurant (Warm Corn Noodle)",
      cuisineStyleZh: "现煮热汤玉米细面与香酥老式锅包肉",
      cuisineStyleEn: "Hot Corn Noodles & Crispy Guobaorou",
      recommendedDishesZh: ["招牌玉米温面", "老式酥脆锅包肉", "明太鱼热豆腐汤"],
      recommendedDishesEn: ["Signature Warm Corn Noodles", "Crispy Guobaorou", "Pollack Tofu Soup"],
      elderKidSuitabilityZh: "热牛骨汤面细软爽滑温和暖胃，极易咀嚼消化",
      elderKidSuitabilityEn: "Mild beef broth noodles, soft and comforting",
      perPersonBudgetZh: "¥45 - ¥60 / 人",
      perPersonBudgetEn: "$7 - $10 / person",
      image: "/images/spot_yj_wenmian.jpg",
      photoTipZh: "金黄玉米温面在浓白牛骨高汤中舒展特写",
      photoTipEn: "Golden noodles in rich beef broth",
    },
    {
      restaurantNameZh: "考世茂朝鲜族传统民俗正宴",
      restaurantNameEn: "Kaoshimao Traditional Korean Banquet",
      cuisineStyleZh: "传统民俗庭院包厢 · 软烂清淡宴席",
      cuisineStyleEn: "Heritage folk cuisine in private dining rooms",
      recommendedDishesZh: ["传统宫廷包肉", "清蒸明太鱼", "黄豆大酱汤"],
      recommendedDishesEn: ["Royal Boiled Pork Wraps", "Steamed Pollack", "Doenjang Stew"],
      elderKidSuitabilityZh: "古色古香独立包厢，菜品软烂清淡，无油烟干扰",
      elderKidSuitabilityEn: "Private room, gentle low-oil traditional dishes",
      perPersonBudgetZh: "¥100 - ¥130 / 人",
      perPersonBudgetEn: "$15 - $20 / person",
      image: "/images/spot_yj_baorou.jpg",
      photoTipZh: "精致铜碗餐具与温和宴席全景",
      photoTipEn: "Brass tableware and traditional table spread",
    },
  ],
  "青岛": [
    {
      restaurantNameZh: "前海沿·老青岛海鲜菜馆",
      restaurantNameEn: "Qianhaiyan · Classic Qingdao Seafood",
      cuisineStyleZh: "胶东传统海鲜家常风味 · 地道锅气",
      cuisineStyleEn: "Traditional Jiaodong home-style seafood",
      recommendedDishesZh: ["原汁红岛蛤蜊", "青岛啤酒煨鲍鱼", "香酥大虾锅贴"],
      recommendedDishesEn: ["Steamed Red Island Clams", "Beer-braised Abalone", "Crispy Prawn Potstickers"],
      elderKidSuitabilityZh: "蛤蜊饱满无沙，鲍鱼煨至软嫩，老少皆宜",
      elderKidSuitabilityEn: "Sand-free tender clams and soft braised abalone",
      perPersonBudgetZh: "¥75 - ¥105 / 人",
      perPersonBudgetEn: "$12 - $16 / person",
      image: "/images/spot_qd_qianhaiyan.jpg",
      photoTipZh: "大虾锅贴焦黄香脆底壳与金黄饱满蛤蜊特写",
      photoTipEn: "Golden prawn potstickers with steamed clams",
    },
    {
      restaurantNameZh: "海岛渔村海鲜名店 (云霄路老店)",
      restaurantNameEn: "Haidao Fisher Village (Yunxiao Rd)",
      cuisineStyleZh: "老牌明档野生海鲜水产 · 即点即做",
      cuisineStyleEn: "Open seafood market & live dock catches",
      recommendedDishesZh: ["辣炒红岛蛤蜊", "蒜蓉野生红捕虾", "手工鲅鱼水饺"],
      recommendedDishesEn: ["Wok-tossed Clams", "Garlic Butter Prawns", "Mackerel Dumplings"],
      elderKidSuitabilityZh: "鲅鱼水饺鲜嫩多汁无刺，海鲜现称现蒸",
      elderKidSuitabilityEn: "Boneless mackerel dumplings, fresh steamed seafood",
      perPersonBudgetZh: "¥90 - ¥130 / 人",
      perPersonBudgetEn: "$14 - $20 / person",
      image: "/images/spot_qd_haidao.jpg",
      photoTipZh: "白胖鲅鱼水饺切开后鱼肉鲜汁溢出特写",
      photoTipEn: "Juicy mackerel dumplings served fresh",
    },
    {
      restaurantNameZh: "怡情荟·胶东非遗名筵",
      restaurantNameEn: "Yiqinghui · Jiaodong Culinary Heritage",
      cuisineStyleZh: "高品质胶东鲁菜 · 精致慢火煨炖",
      cuisineStyleEn: "Fine dining Jiaodong Lu cuisine",
      recommendedDishesZh: ["葱烧胶东鲜海参", "野生黄鱼小水饺", "崂山拳头菜炖肉"],
      recommendedDishesEn: ["Scallion Braised Sea Cucumber", "Yellow Croaker Dumplings", "Mountain Greens Stew"],
      elderKidSuitabilityZh: "海参软糯滋补，黄鱼鲜香去刺，环境极度安静优雅",
      elderKidSuitabilityEn: "Soft braised sea cucumber, serene quiet dining atmosphere",
      perPersonBudgetZh: "¥160 - ¥240 / 人",
      perPersonBudgetEn: "$24 - $36 / person",
      image: "/images/spot_qd_yiqing.jpg",
      photoTipZh: "葱烧海参浓郁挂汁与晶莹餐盘特写",
      photoTipEn: "Braised sea cucumber with glossy scallion glaze",
    },
  ],
  "京都": [
    {
      restaurantNameZh: "瓢亭 (Hyotei · 450年南禅寺名膳)",
      restaurantNameEn: "Hyotei (450-Year Nanzenji Heritage)",
      cuisineStyleZh: "三百年京料理怀石 · 庭院茅草古雅",
      cuisineStyleEn: "Historic 3-star Kaiseki & peaceful garden",
      recommendedDishesZh: ["瓢亭玉子 (半熟温泉溏心蛋)", "明石天然真鲷刺身", "京野菜旬菜碗"],
      recommendedDishesEn: ["Hyotei Onsen Egg", "Akashi Wild Sea Bream", "Kyoto Seasonal Veg Bowl"],
      elderKidSuitabilityZh: "茶室榻榻米与回游庭院，菜品温润软糯少盐少油",
      elderKidSuitabilityEn: "Calm garden tearoom, mild delicate natural flavors",
      perPersonBudgetZh: "¥450 - ¥800 / 人",
      perPersonBudgetEn: "$65 - $115 / person",
      image: "/images/spot_kyoto_hyotei.jpg",
      photoTipZh: "木制漆器中金黄流心瓢亭玉子特写",
      photoTipEn: "Golden soft-boiled egg in lacquerware bowl",
    },
    {
      restaurantNameZh: "总本家百川 (豆腐皮与京汤叶料理)",
      restaurantNameEn: "Yuba Cuisine Momokawa Kyoto",
      cuisineStyleZh: "清水寺近郊豆香料理 · 极度清淡健康",
      cuisineStyleEn: "Artisanal Kyoto Tofu & Yuba Skin",
      recommendedDishesZh: ["自家制手做汲出汤叶", "手工胡麻豆腐", "宇治抹茶冷荞麦面"],
      recommendedDishesEn: ["Fresh Silken Yuba", "Handmade Sesame Tofu", "Uji Matcha Soba"],
      elderKidSuitabilityZh: "豆香浓郁，完全无油无辛辣，易吞咽好消化",
      elderKidSuitabilityEn: "Zero spice, soft silky tofu texture, easy digestion",
      perPersonBudgetZh: "¥120 - ¥180 / 人",
      perPersonBudgetEn: "$18 - $26 / person",
      image: "/images/spot_kyoto_yuba.jpg",
      photoTipZh: "竹筒中浮起的热汤叶与木勺特写",
      photoTipEn: "Silken yuba tofu skin lifted with wooden spoon",
    },
  ],
  "成都": [
    {
      restaurantNameZh: "松云泽·传统川菜非遗名筵",
      restaurantNameEn: "Songyunze · Intangible Heritage Sichuan",
      cuisineStyleZh: "包厢宴席私房川菜 · 醇厚不燥",
      cuisineStyleEn: "Refined heritage Sichuan banquet cuisine",
      recommendedDishesZh: ["回锅肉非遗古法制", "芙蓉鸡片", "开水白菜", "甜烧白"],
      recommendedDishesEn: ["Traditional Twice-Cooked Pork", "Velvet Chicken Slices", "Steamed Cabbage Broth", "Sweet Rice Pork"],
      elderKidSuitabilityZh: "芙蓉鸡片细嫩如豆腐，开水白菜至清至鲜无辣",
      elderKidSuitabilityEn: "Mild velvet chicken and clear cabbage consomme, completely non-spicy",
      perPersonBudgetZh: "¥180 - ¥280 / 人",
      perPersonBudgetEn: "$26 - $40 / person",
      image: "/images/spot_cd_songyunze.jpg",
      photoTipZh: "清澈如水的开水白菜在青瓷碗中舒展特写",
      photoTipEn: "Clear cabbage consomme in celadon ceramic bowl",
    },
    {
      restaurantNameZh: "马旺子·川小馆 (太古里店)",
      restaurantNameEn: "Mawangzi Sichuan Bistro (Taikoo Li)",
      cuisineStyleZh: "眉山百年老字号精致川味小吃名宴",
      cuisineStyleEn: "Century-old Meishan Sichuan bistro",
      recommendedDishesZh: ["传统毛血旺", "巧手凉白肉", "宫保大虾球", "手工红糖糍粑"],
      recommendedDishesEn: ["Classic Maoxuewang", "Rolled Garlic Pork", "Kung Pao King Prawns", "Brown Sugar Rice Cake"],
      elderKidSuitabilityZh: "菜品可特注少辣微辣，红糖糍粑香甜软糯",
      elderKidSuitabilityEn: "Custom mild spice available, sweet tender rice cake",
      perPersonBudgetZh: "¥85 - ¥120 / 人",
      perPersonBudgetEn: "$13 - $18 / person",
      image: "/images/spot_cd_mawangzi.jpg",
      photoTipZh: "红亮油光毛血旺与香酥红糖糍粑摆台特写",
      photoTipEn: "Sichuan dishes with crispy brown sugar rice cakes",
    },
  ],
};

export function getDefaultDiningAlternatives(
  destinations: string[],
  currentRestaurantName: string,
  locale: Locale
): DiningAlternative[] {
  let matchedCity = "";
  for (const dest of destinations) {
    for (const city of Object.keys(CITY_DINING_ALTERNATIVES)) {
      if (dest.includes(city) || city.includes(dest)) {
        matchedCity = city;
        break;
      }
    }
    if (matchedCity) break;
  }

  const entries = matchedCity ? CITY_DINING_ALTERNATIVES[matchedCity] : [];
  if (!entries || entries.length === 0) {
    // Generic fallback if unknown city
    const primaryDest = destinations[0] || (locale === "en" ? "Local" : "本地");
    return [
      {
        restaurantName:
          locale === "en"
            ? `${primaryDest} Garden View Bistro`
            : `${primaryDest} 园林景观私房菜`,
        cuisineStyle:
          locale === "en" ? "Fresh Local Flavors & Quiet Garden" : "地道风味 · 园林静谧舒适",
        recommendedDishes:
          locale === "en"
            ? ["Signature Braised Specialty", "Slow-Cooked Soup", "Seasonal Greens"]
            : ["招牌传统焖肉", "慢炖养生土鸡汤", "时令清炒时蔬"],
        elderKidSuitability:
          locale === "en"
            ? "Mild natural seasoning, soft textures, peaceful seating"
            : "清淡少油少盐，鸡汤温和养胃，无台阶平坦就餐",
        perPersonBudget:
          locale === "en" ? "$15 - $25 / person" : "¥80 - ¥120 / 人",
      },
      {
        restaurantName:
          locale === "en"
            ? `${primaryDest} Heritage Flavor Eatery`
            : `${primaryDest} 老字号传统特色名馆`,
        cuisineStyle:
          locale === "en" ? "Century Heritage Local Classic" : "百年非遗老味道 · 必吃地道特色",
        recommendedDishes:
          locale === "en"
            ? ["Crispy Pork Cutlet", "Handmade Local Noodle", "Authentic Potstickers"]
            : ["招牌香酥特色肉", "手工特色温面", "地道外酥里嫩水煎包"],
        elderKidSuitability:
          locale === "en"
            ? "Comforting warm broth, soft noodles, highly palatable"
            : "热汤面细软爽滑极易咀嚼，小吃外酥里嫩适口性好",
        perPersonBudget:
          locale === "en" ? "$10 - $18 / person" : "¥50 - ¥80 / 人",
      },
    ];
  }

  // Filter out the current restaurant so alternatives don't duplicate
  const filtered = entries.filter((e) => {
    const zh = e.restaurantNameZh.split("（")[0].split("(")[0].trim();
    const en = e.restaurantNameEn.split("（")[0].split("(")[0].trim();
    return (
      !currentRestaurantName.includes(zh) &&
      !zh.includes(currentRestaurantName) &&
      !currentRestaurantName.includes(en)
    );
  });

  return (filtered.length >= 2 ? filtered.slice(0, 2) : entries.slice(0, 2)).map(
    (e) => ({
      restaurantName: locale === "en" ? e.restaurantNameEn : e.restaurantNameZh,
      cuisineStyle: locale === "en" ? e.cuisineStyleEn : e.cuisineStyleZh,
      recommendedDishes:
        locale === "en" ? e.recommendedDishesEn : e.recommendedDishesZh,
      elderKidSuitability:
        locale === "en" ? e.elderKidSuitabilityEn : e.elderKidSuitabilityZh,
      perPersonBudget:
        locale === "en" ? e.perPersonBudgetEn : e.perPersonBudgetZh,
      image: e.image,
      photoTip: locale === "en" ? e.photoTipEn : e.photoTipZh,
    })
  );
}
