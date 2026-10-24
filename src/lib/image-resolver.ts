import { TravelPlan } from "@/types/itinerary";

// High-resolution local verified imagery (100% guaranteed zero-latency local assets)
const LOCAL_IMAGES = {
  // World Cities & Landmarks
  beijing_palace: "/images/spot_beijing_palace.jpg",
  shanghai_bund: "/images/spot_shanghai_bund.jpg",
  xian_pagoda: "/images/spot_xian_pagoda.jpg",
  chengdu_panda: "/images/spot_chengdu_panda.jpg",
  xiamen_coast: "/images/spot_xiamen_coast.jpg",
  hongkong_victoria: "/images/spot_hongkong_victoria.jpg",
  taipei_palace: "/images/spot_taipei_palace.jpg",
  singapore_garden: "/images/spot_singapore_garden.jpg",
  tokyo_shinjuku: "/images/spot_tokyo_shinjuku.jpg",
  kyoto_zen: "/images/spot_kyoto_zen.jpg",

  // Qingdao & Coastal
  qd_zhanqiao: "/images/spot_zhanqiao.jpg",
  qd_badaguan: "/images/spot_badaguan.jpg",
  qd_beer_museum: "/images/spot_beer_museum.jpg",
  qd_shilaoren: "/images/spot_shilaoren.jpg",
  qd_shazikou: "/images/spot_shazikou.jpg",
  qd_taiqing: "/images/spot_taiqing.jpg",
  qd_xiaoyushan: "/images/spot_xiaoyushan.jpg",
  qd_yacht: "/images/spot_yacht.jpg",
  qd_governor: "/images/spot_governor.jpg",
  qd_bridge: "/images/spot_bridge.jpg",
  qd_taipingjiao: "/images/spot_taipingjiao.jpg",
  qd_sculpture: "/images/spot_sculpture.jpg",

  // Yanji & Changbai & Tumen & Hunchun
  yj_museum: "/images/spot_yj_museum.jpg",
  yj_watermarket: "/images/spot_yj_watermarket.jpg",
  yj_westmarket: "/images/spot_yj_westmarket.jpg",
  yj_danmu: "/images/spot_yj_danmu.jpg",
  yj_maoershan: "/images/spot_yj_maoershan.jpg",
  yj_park: "/images/spot_yj_park.jpg",
  yj_burhatong: "/images/spot_yj_burhatong.jpg",
  yj_univ: "/images/spot_yj_univ.jpg",
  yj_daoyin: "/images/spot_yj_daoyin.jpg",
  yj_jindalai: "/images/spot_yj_jindalai.jpg",
  yj_coffee: "/images/spot_yj_coffee.jpg",
  yj_hotel: "/images/spot_yj_hotel.jpg",
  yj_weststation: "/images/spot_yj_weststation.jpg",
  yj_fangchuan: "/images/spot_yj_fangchuan.jpg",
  yj_tumen: "/images/spot_yj_tumen.jpg",
  yj_riguangshan: "/images/spot_yj_riguangshan.jpg",
  yj_applepear: "/images/spot_yj_applepear.jpg",
  yj_rice: "/images/spot_yj_rice.jpg",

  // Dining & Cuisine
  dining_bbq: "/images/spot_yj_bbq.jpg",
  dining_fengmao: "/images/spot_yj_fengmao.jpg",
  dining_baorou: "/images/spot_yj_baorou.jpg",
  dining_samgyetang: "/images/spot_yj_samgyetang.jpg",
  dining_wenmian: "/images/spot_yj_wenmian.jpg",
  dining_kingcrab: "/images/spot_yj_kingcrab.jpg",
  dining_seafood: "/images/spot_shazikou.jpg",
  dining_heritage: "/images/spot_governor.jpg",
  dining_zen: "/images/spot_kyoto_zen.jpg",
};

// Verified Global Travel Imagery (Unsplash Travel Collection)
const GLOBAL_IMAGES: Record<string, string> = {
  paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  rome: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
  seoul: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80",
  barcelona: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80",
  newyork: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
  bangkok: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
};

/**
 * Intelligently resolve the most accurate, scenic photo for an activity stop.
 */
export function resolveActivityImage(
  activity: { name?: string; category?: string; description?: string; id?: string },
  destination?: string
): string {
  const text = `${destination || ""} ${activity.name || ""} ${activity.description || ""}`.toLowerCase();

  // 1. Specific Destination & Spot Name Matching
  if (/北京|故宫|天坛|颐和园|长城|景山|beijing|forbiddencity/i.test(text)) {
    return LOCAL_IMAGES.beijing_palace;
  }
  if (/上海|外滩|陆家嘴|豫园|东方明珠|shanghai|bund/i.test(text)) {
    return LOCAL_IMAGES.shanghai_bund;
  }
  if (/成都|熊猫|宽窄巷子|锦里|春熙路|都江堰|青城山|chengdu|panda/i.test(text)) {
    return LOCAL_IMAGES.chengdu_panda;
  }
  if (/西安|兵马俑|大雁塔|城墙|华清池|钟鼓楼|xian|pagoda/i.test(text)) {
    return LOCAL_IMAGES.xian_pagoda;
  }
  if (/厦门|鼓浪屿|环岛路|沙坡尾|南普陀|曾厝垵|xiamen/i.test(text)) {
    return LOCAL_IMAGES.xiamen_coast;
  }
  if (/香港|维多利亚|尖沙咀|中环|太平山|hong kong|hongkong/i.test(text)) {
    return LOCAL_IMAGES.hongkong_victoria;
  }
  if (/台北|故宫|九份|士林|101|北投|taipei/i.test(text)) {
    return LOCAL_IMAGES.taipei_palace;
  }
  if (/新加坡|滨海湾|鱼尾狮|圣淘沙|singapore/i.test(text)) {
    return LOCAL_IMAGES.singapore_garden;
  }
  if (/东京|新宿|涉谷|银座|浅草寺|秋叶原|tokyo|shinjuku/i.test(text)) {
    return LOCAL_IMAGES.tokyo_shinjuku;
  }
  if (/京都|清水寺|金阁寺|岚山|伏见稻荷|祇园|kyoto/i.test(text)) {
    return LOCAL_IMAGES.kyoto_zen;
  }

  // Qingdao & Coastal
  if (/青岛|qingdao/i.test(text)) {
    if (/啤酒|博物馆/i.test(text)) return LOCAL_IMAGES.qd_beer_museum;
    if (/八大关|公主楼|花石楼/i.test(text)) return LOCAL_IMAGES.qd_badaguan;
    if (/石老人|沙滩/i.test(text)) return LOCAL_IMAGES.qd_shilaoren;
    if (/沙子口/i.test(text)) return LOCAL_IMAGES.qd_shazikou;
    if (/崂山|太清/i.test(text)) return LOCAL_IMAGES.qd_taiqing;
    if (/小鱼山|信号山/i.test(text)) return LOCAL_IMAGES.qd_xiaoyushan;
    if (/帆船|游艇|奥帆/i.test(text)) return LOCAL_IMAGES.qd_yacht;
    if (/迎宾馆|总督府/i.test(text)) return LOCAL_IMAGES.qd_governor;
    if (/太平角/i.test(text)) return LOCAL_IMAGES.qd_taipingjiao;
    return LOCAL_IMAGES.qd_zhanqiao;
  }

  // Yanji, Changbai, Tumen, Hunchun
  if (/延吉|延边|珲春|图们|长白山|yanji/i.test(text)) {
    if (/水上市场|早市/i.test(text)) return LOCAL_IMAGES.yj_watermarket;
    if (/西市场/i.test(text)) return LOCAL_IMAGES.yj_westmarket;
    if (/博物馆/i.test(text)) return LOCAL_IMAGES.yj_museum;
    if (/弹幕|大学|网红墙/i.test(text)) return LOCAL_IMAGES.yj_danmu;
    if (/帽儿山/i.test(text)) return LOCAL_IMAGES.yj_maoershan;
    if (/布尔哈通河|喷泉|江畔/i.test(text)) return LOCAL_IMAGES.yj_burhatong;
    if (/防川|三国/i.test(text)) return LOCAL_IMAGES.yj_fangchuan;
    if (/图们|国门|界桥/i.test(text)) return LOCAL_IMAGES.yj_tumen;
    if (/咖啡|后备箱/i.test(text)) return LOCAL_IMAGES.yj_coffee;
    if (/道尹/i.test(text)) return LOCAL_IMAGES.yj_daoyin;
    if (/日光山/i.test(text)) return LOCAL_IMAGES.yj_riguangshan;
    if (/苹果梨|民俗村/i.test(text)) return LOCAL_IMAGES.yj_applepear;
    if (/稻田|光东村/i.test(text)) return LOCAL_IMAGES.yj_rice;
    if (/金达莱/i.test(text)) return LOCAL_IMAGES.yj_jindalai;
    if (/公园/i.test(text)) return LOCAL_IMAGES.yj_park;
    return LOCAL_IMAGES.yj_danmu;
  }

  // World destinations
  if (/paris|巴黎|埃菲尔|卢浮宫/i.test(text)) return GLOBAL_IMAGES.paris;
  if (/london|伦敦|大本钟|大英博物馆/i.test(text)) return GLOBAL_IMAGES.london;
  if (/rome|罗马|斗兽场|梵蒂冈/i.test(text)) return GLOBAL_IMAGES.rome;
  if (/seoul|首尔|明洞|景福宫/i.test(text)) return GLOBAL_IMAGES.seoul;
  if (/barcelona|巴塞罗那|圣家堂/i.test(text)) return GLOBAL_IMAGES.barcelona;
  if (/new york|纽约|曼哈顿/i.test(text)) return GLOBAL_IMAGES.newyork;
  if (/bangkok|曼谷|大皇宫/i.test(text)) return GLOBAL_IMAGES.bangkok;

  // 2. Category & Environmental Fallback
  if (/山|峰|岭|峡谷|mountain|hiking|nature/i.test(text)) {
    return LOCAL_IMAGES.yj_maoershan;
  }
  if (/海|滩|湾|岛|海岸|港|ocean|beach|coast|harbor/i.test(text)) {
    return LOCAL_IMAGES.xiamen_coast;
  }
  if (/馆|艺术|展览|遗址|museum|gallery/i.test(text)) {
    return LOCAL_IMAGES.yj_museum;
  }
  if (/园|公园|植物|花园|park|garden/i.test(text)) {
    return LOCAL_IMAGES.singapore_garden;
  }
  if (/古|街|巷|庙|寺|城墙|temple|shrine|heritage/i.test(text)) {
    return LOCAL_IMAGES.kyoto_zen;
  }
  if (/市|夜市|市场|步行街|商圈|market|bazaar/i.test(text)) {
    return LOCAL_IMAGES.yj_watermarket;
  }
  if (/咖啡|茶|休息|下午茶|cafe|tea|coffee/i.test(text)) {
    return LOCAL_IMAGES.yj_coffee;
  }

  // Serene default
  return LOCAL_IMAGES.kyoto_zen;
}

/**
 * Intelligently resolve the most appetizing photo for dining & culinary cards.
 */
export function resolveDiningImage(
  meal: {
    restaurantName?: string;
    cuisineStyle?: string;
    mealType?: string;
    recommendedDishes?: string[];
  },
  destination?: string
): string {
  const text = `${destination || ""} ${meal.restaurantName || ""} ${meal.cuisineStyle || ""} ${meal.mealType || ""} ${(meal.recommendedDishes || []).join(" ")}`.toLowerCase();

  // 1. Specific Dishes & Flavors
  if (/烤肉|烧烤|牛肉|羊肉|烤串|烤鳗鱼|bbq|grill/i.test(text)) {
    return LOCAL_IMAGES.dining_bbq;
  }
  if (/锅包肉|鲁菜|川菜|私房菜|炒菜|家常菜|点菜|heritage/i.test(text)) {
    return LOCAL_IMAGES.dining_baorou;
  }
  if (/参鸡汤|鸡汤|土鸡|养生|温补|清炖|慢炖|soup|samgyetang/i.test(text)) {
    return LOCAL_IMAGES.dining_samgyetang;
  }
  if (/面|米线|米粉|拉面|温面|冷面|炸酱面|noodle|ramen/i.test(text)) {
    return LOCAL_IMAGES.dining_wenmian;
  }
  if (/蟹|帝王蟹|海鲜|鱼|虾|生蚝|刺身|seafood|crab/i.test(text)) {
    return LOCAL_IMAGES.dining_kingcrab;
  }
  if (/早市|早餐|早茶|小吃|包子|点心|油条|breakfast|dim sum/i.test(text)) {
    return LOCAL_IMAGES.yj_watermarket;
  }
  if (/咖啡|甜品|下午茶|蛋糕|奶茶|cafe|dessert|coffee/i.test(text)) {
    return LOCAL_IMAGES.yj_coffee;
  }
  if (/日料|怀石|寿司|居酒屋|会席|和牛|japanese/i.test(text)) {
    return LOCAL_IMAGES.dining_zen;
  }

  // 2. City Destination Fallback
  if (/厦门|泉州/i.test(text)) return LOCAL_IMAGES.dining_seafood;
  if (/青岛|烟台|威海/i.test(text)) return LOCAL_IMAGES.qd_shazikou;
  if (/京都|东京|日本/i.test(text)) return LOCAL_IMAGES.dining_zen;
  if (/延吉|长白山/i.test(text)) return LOCAL_IMAGES.dining_samgyetang;

  return LOCAL_IMAGES.dining_samgyetang;
}

/**
 * Enriches every activity stop and dining card in a TravelPlan with appropriate imagery.
 */
export function enrichPlanImages(plan: TravelPlan, destination?: string): TravelPlan {
  if (!plan || !Array.isArray(plan.days)) return plan;

  const dest =
    destination ||
    (plan.meta?.destinations ? plan.meta.destinations.join(" + ") : "");

  for (const day of plan.days) {
    // 1. Enrich Activity Stops
    if (Array.isArray(day.timeline)) {
      for (const item of day.timeline) {
        if (item.type === "activity") {
          if (!item.image) {
            item.image = resolveActivityImage(item, dest);
          }
          if (Array.isArray(item.alternatives)) {
            for (const alt of item.alternatives) {
              if (!alt.image) {
                alt.image = resolveActivityImage(alt, dest);
              }
            }
          }
        }
      }
    }

    // 2. Enrich Meals (Lunch, Dinner, Breakfast, Supper)
    if (day.meals) {
      const mealCards = [
        day.meals.lunch,
        day.meals.dinner,
        day.meals.supperOrSnack,
      ].filter(Boolean);
      for (const mealCard of mealCards) {
        if (mealCard) {
          if (!mealCard.image) {
            mealCard.image = resolveDiningImage(mealCard, dest);
          }
          if (Array.isArray(mealCard.alternatives)) {
            for (const alt of mealCard.alternatives) {
              if (!alt.image) {
                alt.image = resolveDiningImage(alt, dest);
              }
            }
          }
          if (Array.isArray(mealCard.allDiners)) {
            for (const diner of mealCard.allDiners) {
              if (!diner.image) {
                diner.image = resolveDiningImage(diner, dest);
              }
            }
          }
        }
      }
    }
  }

  return plan;
}
