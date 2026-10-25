import { TravelPlan } from "@/types/itinerary";
import { getCuratedPlanById } from "./curated-plans-provider";
import { Locale } from "./i18n";

export interface DestinationMetadata {
  slug: string;
  planId: string;
  cityEn: string;
  cityZh: string;
  countryEn: string;
  countryZh: string;
  seoTitleEn: string;
  seoTitleZh: string;
  seoDescriptionEn: string;
  seoDescriptionZh: string;
  keywords: string[];
}

export const DESTINATION_DIRECTORY: DestinationMetadata[] = [
  {
    slug: "beijing",
    planId: "curated_beijing_4d",
    cityEn: "Beijing",
    cityZh: "北京",
    countryEn: "China",
    countryZh: "中国",
    seoTitleEn: "Beijing 4-Day Accessible Slow Travel Itinerary & Foreign Visitor Guide",
    seoTitleZh: "北京 4天3晚 皇家慢调与故宫无障碍定制指南",
    seoDescriptionEn:
      "Bespoke 4-day Beijing slow travel itinerary for EU & US visitors: Forbidden City Donghua Gate accessible passage, Summer Palace lake cruise, bilingual taxi driver flashcards, and mild imperial dining.",
    seoDescriptionZh:
      "专为舒适漫步打造的北京4天3晚行程：故宫东华门无障碍通道、颐和园皇家游船、天坛平坦古柏步道，含精确落客点与老字号清淡美食。",
    keywords: [
      "Beijing 4 day itinerary",
      "Beijing travel guide for foreigners",
      "Forbidden City accessible entrance",
      "Beijing slow travel",
      "Beijing senior friendly itinerary",
    ],
  },
  {
    slug: "shanghai",
    planId: "curated_shanghai_3d",
    cityEn: "Shanghai",
    cityZh: "上海",
    countryEn: "China",
    countryZh: "中国",
    seoTitleEn: "Shanghai 3-Day Bund & Jiangnan Slow Travel Itinerary for International Visitors",
    seoTitleZh: "上海 3天2晚 海派风华与江南园林慢行指南",
    seoDescriptionEn:
      "Effortless 3-day Shanghai itinerary for international travelers: step-free Bund waterfront promenade, Yu Garden classical pavilions, bilingual taxi flashcards, and mild Jiangnan dining.",
    seoDescriptionZh:
      "上海3天2晚零折返慢游路线：外滩无障碍滨江步道、豫园古典回廊、西岸美术馆大道与本帮清淡名菜。",
    keywords: [
      "Shanghai 3 day itinerary",
      "Shanghai travel guide for foreigners",
      "The Bund accessible walk",
      "Shanghai slow travel",
      "Shanghai family itinerary",
    ],
  },
  {
    slug: "tokyo",
    planId: "curated_tokyo_4d",
    cityEn: "Tokyo",
    cityZh: "东京",
    countryEn: "Japan",
    countryZh: "日本",
    seoTitleEn: "Tokyo 4-Day Gentle Walk, Zen Gardens & Edomae Dining Itinerary",
    seoTitleZh: "东京 4天3晚 庭园静谧与江户风味慢调之旅",
    seoDescriptionEn:
      "Curated 4-day Tokyo slow travel itinerary: Shinjuku Gyoen flat lawns, Asakusa Senso-ji elevator access, Sumida River cruise, Japanese taxi flashcards, and Michelin unagi dining.",
    seoDescriptionZh:
      "东京4天3晚舒适慢行指南：新宿御苑平坦草坪、浅草寺无障碍电梯通道、隅田川游船与米其林鳗鱼饭。",
    keywords: [
      "Tokyo 4 day slow travel itinerary",
      "Tokyo senior friendly itinerary",
      "Tokyo accessible travel guide",
      "Shinjuku Gyoen flat walk",
      "Asakusa Senso-ji elevator access",
    ],
  },
  {
    slug: "singapore",
    planId: "curated_singapore_4d",
    cityEn: "Singapore",
    cityZh: "新加坡",
    countryEn: "Singapore",
    countryZh: "新加坡",
    seoTitleEn: "Singapore 4-Day Climate-Controlled Gardens & Accessible Slow Travel Guide",
    seoTitleZh: "新加坡 4天3晚 花园城市恒温穹顶与南洋慢行指南",
    seoDescriptionEn:
      "4-day Singapore accessible slow travel itinerary: Gardens by the Bay climate-controlled domes, Marina Bay Sands SkyPark, Botanic Gardens flat loops, and Peranakan dining.",
    seoDescriptionZh:
      "新加坡4天3晚无障碍慢游路线：滨海湾花园恒温冷室、金沙空中花园直梯、植物园平缓步道与松发肉骨茶。",
    keywords: [
      "Singapore 4 day itinerary",
      "Singapore senior friendly travel",
      "Gardens by the Bay wheelchair accessible",
      "Singapore family slow travel",
    ],
  },
  {
    slug: "kyoto",
    planId: "curated_kyoto_4d",
    cityEn: "Kyoto",
    cityZh: "京都",
    countryEn: "Japan",
    countryZh: "日本",
    seoTitleEn: "Kyoto 4-Day Zen Gardens, Arashiyama Scenic Train & Tofu Kaiseki Itinerary",
    seoTitleZh: "京都 4天3晚 禅意庭园与岚山嵯峨野慢行指南",
    seoDescriptionEn:
      "Unrushed 4-day Kyoto itinerary: Sagano scenic train, Tenryu-ji flat pond gardens, Nanzen-ji aqueduct, Japanese driver flashcards, and 380-year Junsei tofu kaiseki.",
    seoDescriptionZh:
      "京都4天3晚慢调路线：岚山小火车、天龙寺曹源池平缓庭园、南禅寺水路阁与顺正百年汤豆腐怀石料理。",
    keywords: [
      "Kyoto 4 day slow travel itinerary",
      "Kyoto senior friendly guide",
      "Arashiyama accessible route",
      "Kyoto Zen garden itinerary",
    ],
  },
  {
    slug: "hongkong",
    planId: "curated_hongkong_3d",
    cityEn: "Hong Kong",
    cityZh: "香港",
    countryEn: "China",
    countryZh: "中国",
    seoTitleEn: "Hong Kong 4-Day Victoria Harbour, Peak Fast-Track & Michelin Dim Sum Guide",
    seoTitleZh: "香港 4天3晚 维港风华与岭南雅韵慢行指南",
    seoDescriptionEn:
      "4-day Hong Kong slow travel itinerary: Victoria Peak Tram VIP fast-track, Star Ferry crossing, West Kowloon waterfront promenade, M+ Museum, and Michelin dim sum.",
    seoDescriptionZh:
      "香港4天3晚舒适慢游：太平山顶缆车VIP免排队、天星小轮维港渡轮、西九文化区平坦海滨与米其林点心。",
    keywords: [
      "Hong Kong 4 day itinerary",
      "Hong Kong senior friendly travel",
      "Victoria Peak VIP fast track",
      "Hong Kong slow travel guide",
    ],
  },
  {
    slug: "xian",
    planId: "curated_xian_4d",
    cityEn: "Xi'an",
    cityZh: "西安",
    countryEn: "China",
    countryZh: "中国",
    seoTitleEn: "Xi'an 4-Day Terracotta Warriors Accessible Route & Tang Capital Itinerary",
    seoTitleZh: "西安 4天3晚 盛唐风华与兵马俑无障碍慢行指南",
    seoDescriptionEn:
      "4-day Xi'an slow travel itinerary for international visitors: Terracotta Warriors barrier-free ramp, Giant Wild Goose Pagoda, bilingual taxi flashcards, and mild Shaanxi cuisine.",
    seoDescriptionZh:
      "西安4天3晚古都慢游：秦始皇兵马俑无障碍缓坡、大雁塔北广场、陕历博预约指南与温和陕菜清汤。",
    keywords: [
      "Xian 4 day itinerary",
      "Terracotta Warriors accessible route",
      "Xian travel guide for foreigners",
      "Xian slow travel",
    ],
  },
  {
    slug: "chengdu",
    planId: "curated_chengdu_4d",
    cityEn: "Chengdu",
    cityZh: "成都",
    countryEn: "China",
    countryZh: "中国",
    seoTitleEn: "Chengdu & Dujiangyan 4-Day Giant Panda VIP Cart & Non-Spicy Dining Guide",
    seoTitleZh: "成都 + 都江堰 4天3晚 熊猫基地观光车与温和川味慢行指南",
    seoDescriptionEn:
      "4-day Chengdu slow travel guide for foreign visitors: Giant Panda Base VIP sightseeing cart, riverside Gaiwan teahouse, Dujiangyan flat walk, and strictly non-spicy herbal banquets.",
    seoDescriptionZh:
      "成都与都江堰4天3晚舒缓行程：大熊猫基地VIP观光车、望江楼河畔盖碗茶、钦善斋不辣药膳滋补汤。",
    keywords: [
      "Chengdu 4 day itinerary",
      "Chengdu Giant Panda Base VIP cart",
      "non spicy food in Chengdu",
      "Chengdu travel guide for foreigners",
    ],
  },
  {
    slug: "taipei",
    planId: "curated_taipei_4d",
    cityEn: "Taipei",
    cityZh: "台北",
    countryEn: "Taiwan",
    countryZh: "中国台湾",
    seoTitleEn: "Taipei 4-Day National Palace Museum & Beitou Private Onsen Itinerary",
    seoTitleZh: "台北 4天3晚 故宫国宝与北投加贺屋温泉慢行指南",
    seoDescriptionEn:
      "4-day Taipei slow travel itinerary: National Palace Museum accessible entrance, Beitou Kagaya private sulfur hot springs, and Din Tai Fung Xinsheng elevator flagship.",
    seoDescriptionZh:
      "台北4天3晚汤泉与文化慢游：台北故宫无障碍通道、北投日胜生加贺屋私人汤屋与鼎泰丰新生店直梯包厢。",
    keywords: [
      "Taipei 4 day itinerary",
      "Beitou private hot spring guide",
      "National Palace Museum accessible tour",
      "Taipei senior friendly travel",
    ],
  },
  {
    slug: "qingdao",
    planId: "curated_qingdao_3d",
    cityEn: "Qingdao",
    cityZh: "青岛",
    countryEn: "China",
    countryZh: "中国",
    seoTitleEn: "Qingdao 3-Day Badaguan Coastal Villas & European Heritage Walk",
    seoTitleZh: "青岛 3天2晚 八大关海滨别墅与德式建筑慢行指南",
    seoDescriptionEn:
      "3-day Qingdao coastal slow travel itinerary: Badaguan tree-shaded villas, Xiaoyushan panoramic pavilion, Tsar Beer Museum tasting, and mild steamed seafood.",
    seoDescriptionZh:
      "青岛3天2晚山海慢游：八大关平坦林荫道、小鱼山3分钟登顶俯瞰海湾、青岛啤酒博物馆与清蒸海鲜。",
    keywords: [
      "Qingdao 3 day itinerary",
      "Badaguan walking route",
      "Qingdao Beer Museum guide",
      "Qingdao coastal travel",
    ],
  },
  {
    slug: "xiamen",
    planId: "curated_xiamen_3d",
    cityEn: "Xiamen",
    cityZh: "厦门",
    countryEn: "China",
    countryZh: "中国",
    seoTitleEn: "Xiamen & Gulangyu 3-Day Island Electric Cart & Coastal Slow Travel Guide",
    seoTitleZh: "厦门 3天2晚 鼓浪屿环岛电瓶车与闽南慢调指南",
    seoDescriptionEn:
      "3-day Xiamen & Gulangyu Island itinerary: step-free coastal electric cart loop, South Putuo Temple, Shapowei heritage harbor, and mild Minnan seafood.",
    seoDescriptionZh:
      "厦门3天2晚海风慢行：鼓浪屿环岛观光电瓶车免爬坡、南普陀寺平缓步道、沙坡尾艺术西区与闽南清鲜料理。",
    keywords: [
      "Xiamen 3 day itinerary",
      "Gulangyu electric cart tour",
      "Xiamen senior friendly travel",
    ],
  },
  {
    slug: "yanji",
    planId: "curated_yanji_hunchun_6d",
    cityEn: "Yanji & Hunchun",
    cityZh: "延吉 + 珲春",
    countryEn: "China",
    countryZh: "中国",
    seoTitleEn: "Yanji & Hunchun 6-Day China-DPRK-Russia Borderland & King Crab Itinerary",
    seoTitleZh: "延吉 + 珲春 6天5晚 朝鲜族美食与三国边境全景指南",
    seoDescriptionEn:
      "6-day Yanji & Hunchun borderland slow travel guide: Fangchuan Dragon Tiger Pavilion elevator view of three nations, live Russian king crab feast, and Korean heritage.",
    seoDescriptionZh:
      "延吉与珲春6天5晚边陲慢游：防川龙虎阁直梯一眼望三国、珲春鲜活帝王蟹盛宴与元奶奶温润包肉。",
    keywords: [
      "Yanji Hunchun itinerary",
      "Fangchuan three borders view",
      "Yanji food guide",
    ],
  },
];

export function getDestinationMetaBySlug(slug: string): DestinationMetadata | undefined {
  return DESTINATION_DIRECTORY.find(
    (d) => d.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function getDestinationSlugByPlanId(planId: string): string | undefined {
  return DESTINATION_DIRECTORY.find((d) => d.planId === planId)?.slug;
}

export function getDestinationPlanBySlug(
  slug: string,
  locale: Locale = "en"
): { meta: DestinationMetadata; plan: TravelPlan } | undefined {
  const meta = getDestinationMetaBySlug(slug);
  if (!meta) return undefined;
  const plan = getCuratedPlanById(meta.planId, locale);
  if (!plan) return undefined;
  return { meta, plan };
}
