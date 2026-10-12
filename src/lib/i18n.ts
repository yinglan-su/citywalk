export type Locale = "zh" | "en";

export interface TranslationDictionary {
  // Navigation & Common
  brandTagline: string;
  myTrips: string;
  home: string;
  newTrip: string;
  langSwitch: string;
  langCurrent: string;
  search: string;
  close: string;
  back: string;
  confirm: string;
  cancel: string;

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  startCustomizing: string;

  // Wizard
  wizardTitle: string;
  wizardSubtitle: string;
  destLabel: string;
  destPlaceholder: string;
  recommendedDestinations: string;
  durationLabel: string;
  daysUnit: string;
  datesLabel: string;
  datesOptional: string;
  startDatePlaceholder: string;
  endDatePlaceholder: string;
  focusLabel: string;
  focusFoodie: string;
  focusCulture: string;
  focusNature: string;
  companionsLabel: string;
  compElders: string;
  compKids: string;
  compCouple: string;
  compSolo: string;
  compPets: string;
  compWheelchair: string;
  mobilityLabel: string;
  mobilityLow: string;
  mobilityMod: string;
  mobilityHigh: string;
  budgetLabel: string;
  budgetLow: string;
  budgetMid: string;
  budgetHigh: string;
  transportLabel: string;
  transportTaxi: string;
  transportPublic: string;
  transportDrive: string;
  customNotesLabel: string;
  customNotesPlaceholder: string;
  generateBtn: string;
  generatingPlan: string;

  // Itinerary Dashboard
  dayNumberPrefix: string;
  dayNumberSuffix: string;
  tripOverview: string;
  highlights: string;
  logistics: string;
  weatherPacking: string;
  seniorFriendly: string;
  relaxedPace: string;
  moderatePace: string;
  intensivePace: string;
  viewsCount: string;
  exportDoc: string;
  shareTrip: string;
  remixTrip: string;
  middayRest: string;
  dailyTimeline: string;
  durationMins: string;
  dropOffNavTarget: string;
  reservationRequired: string;
  photoSpotAdvice: string;
  transitTaxi: string;
  transitCharter: string;
  transitWalk: string;
  mins: string;
  altSpots: string;

  // Dining & Reviews
  diningSectionTitle: string;
  lunch: string;
  dinner: string;
  supper: string;
  breakfast: string;
  perPerson: string;
  authenticFlavor: string;
  signatureHighlights: string;
  dietarySuitability: string;
  altFlavors: string;
  swapRestaurant: string;
  googleReviews: string;
  dianpingReviews: string;
  viewGoogleReviewsTip: string;

  // Map & Navigation
  routeMap: string;
  mapLayerAmap: string;
  mapLayerGlobal: string;
  openInGoogleMaps: string;
  openInAmap: string;
  navFullDayGoogle: string;
  navStopGoogle: string;
  mapProviderHint: string;

  // Interactive Actions & Tweak
  aiTweakTitle: string;
  aiTweakPlaceholder: string;
  aiTweakBtn: string;
  aiTweaking: string;
  moveUp: string;
  moveDown: string;
  deleteSpot: string;
  swapSpotAI: string;
  checklistTitle: string;
  emergencyTitle: string;

  // Gallery
  galleryTitle: string;
  gallerySubtitle: string;
  curatedBadge: string;
  viewItinerary: string;
  savedCountPrefix: string;
  noSavedTrips: string;
  startExplore: string;

  // Copilot & Floating Tweak
  openCopilot: string;
  copilotBannerDesc: string;
  copilotDrawerTitle: string;
  copilotDrawerSubtitle: string;
  copilotWelcome: string;
  quickPresets: string;
  copilotInputPlaceholder: string;
  copilotTuning: string;
  copilotSend: string;
  presetChips: string[];

  // Toast & Share & Export
  published: string;
  publishToSquare: string;
  linkCopied: string;
  copyFailed: string;
  offlineDownloaded: string;
  exportFailed: string;
  alreadyPublic: string;
  publishedSuccess: string;
  publishFailed: string;
  tweakSuccess: string;
  tweakFailed: string;
  spotDeleted: string;
  orderUpdated: string;
  spotSwapped: string;
  restaurantSwapped: string;

  // Itinerary Details
  dailyTips: string;
  themePrefix: string;
  approxDuration: string;
  photoTipLabel: string;
  signatureLabel: string;
  dietaryLabel: string;
  altFlavorsLabel: string;
  altSpotsLabel: string;
  daysAhead: string;
  roundTrip: string;
  nightsUnit: string;

  // Wizard specifics
  selectedCountText: string;
  addCityPlaceholder: string;
  addCityBtn: string;
  datesAndDuration: string;
  calendarTab: string;
  sliderTab: string;
  departureDate: string;
  durationSliderLabel: string;
  calendarOptimizedTip: string;
  slideAdjust: string;
  specialRequestsLabel: string;
  specialRequestsPlaceholder: string;
  destinationRequired: string;
  failedToGenerate: string;
  timeoutError: string;

  // Hero & Footer
  footerTagline: string;
}

export const translations: Record<Locale, TranslationDictionary> = {
  zh: {
    // Navigation & Common
    brandTagline: "JOURNEYS",
    myTrips: "我的行程",
    home: "返回主页",
    newTrip: "定制新路线",
    langSwitch: "English",
    langCurrent: "中文",
    search: "搜索",
    close: "关闭",
    back: "返回",
    confirm: "确认",
    cancel: "取消",

    // Hero
    heroBadge: "AI 驱动 · 长辈舒享 · 深度漫步",
    heroTitle: "让每一次旅行，都舒缓如诗",
    heroSubtitle: "专为家庭同游与长辈设计的 AI 路线定制引擎：0折返动线、避开闭馆日、精准落客门廊、清淡少油美食推荐。",
    startCustomizing: "开始定制专属行程",

    // Wizard
    wizardTitle: "定制您的专属旅程",
    wizardSubtitle: "仅需几项偏好，AI 即刻为您编排闭馆避坑、平缓步调与地道美食的完整方案",
    destLabel: "目的地城市",
    destPlaceholder: "输入城市，如：青岛、延吉、长白山、京都、东京、巴黎...",
    recommendedDestinations: "热门推荐",
    durationLabel: "行程天数",
    daysUnit: "天",
    datesLabel: "出行日期（可选，智能规避周一闭馆）",
    datesOptional: "选择出发日期以校准实际星期与场馆开放日",
    startDatePlaceholder: "出发日期",
    endDatePlaceholder: "返程日期",
    focusLabel: "旅行偏好与侧重",
    focusFoodie: "美食探店 (地道风味 · 必吃口碑)",
    focusCulture: "人文历史 (古建文博 · 深度叙事)",
    focusNature: "自然山水 (滨海风光 · 户外疗愈)",
    companionsLabel: "出行同行人群",
    compElders: "长辈同行 (65+)",
    compKids: "携儿童 / 推车",
    compCouple: "情侣 / 朋友",
    compSolo: "独行探索",
    compPets: "携带宠物",
    compWheelchair: "无障碍出行",
    mobilityLabel: "体力量力",
    mobilityLow: "轻松 (<5000步 · 电梯优先)",
    mobilityMod: "适中 (8000-12000步)",
    mobilityHigh: "暴走 (15000+步)",
    budgetLabel: "预算梯队",
    budgetLow: "经济实惠",
    budgetMid: "品质舒适",
    budgetHigh: "高阶奢享",
    transportLabel: "主要交通方式",
    transportTaxi: "打车 / 包车优先",
    transportPublic: "地铁 / 公交",
    transportDrive: "自驾租车",
    customNotesLabel: "个性化要求 / 必去心愿（可选）",
    customNotesPlaceholder: "例如：长辈不吃辣、想看海边日出、需要轮椅友好路线...",
    generateBtn: "立即生成定制行程",
    generatingPlan: "AI 正在量身编排行程...",

    // Itinerary Dashboard
    dayNumberPrefix: "Day ",
    dayNumberSuffix: "",
    tripOverview: "行程总览",
    highlights: "行程核心亮点",
    logistics: "大交通与城际中转方案",
    weatherPacking: "天气与行前穿衣指南",
    seniorFriendly: "长辈舒享",
    relaxedPace: "轻度漫步",
    moderatePace: "适中步调",
    intensivePace: "充实探索",
    viewsCount: "次查阅",
    exportDoc: "导出离线文档",
    shareTrip: "分享行程",
    remixTrip: "基于此灵感二次定制",
    middayRest: "午间酒店休整",
    dailyTimeline: "当日精选动线",
    durationMins: "游玩约",
    dropOffNavTarget: "落客导航目标",
    reservationRequired: "需预约",
    photoSpotAdvice: "绝佳摄影机位",
    transitTaxi: "打车",
    transitCharter: "包车",
    transitWalk: "步行",
    mins: "分钟",
    altSpots: "备选打卡点",

    // Dining & Reviews
    diningSectionTitle: "当日地道美食推荐",
    lunch: "午餐",
    dinner: "晚餐",
    supper: "夜宵 / 甜品",
    breakfast: "早餐",
    perPerson: "/ 人",
    authenticFlavor: "地道风味",
    signatureHighlights: "特色亮点",
    dietarySuitability: "适口建议",
    altFlavors: "备选风味",
    swapRestaurant: "换一家",
    googleReviews: "Google 评价",
    dianpingReviews: "大众点评",
    viewGoogleReviewsTip: "在 Google 地图中查看真实食客评分与照片",

    // Map & Navigation
    routeMap: "路线地图",
    mapLayerAmap: "高德矢量底图 (国内友好)",
    mapLayerGlobal: "全球高清底图 (Carto/OSM)",
    openInGoogleMaps: "在 Google 地图中查看",
    openInAmap: "在高德地图中查看",
    navFullDayGoogle: "全天 Google 路线导航",
    navStopGoogle: "Google 地图导航",
    mapProviderHint: "已自动匹配适宜地图底图，支持点击点位直接唤起 Google 地图",

    // Interactive Actions & Tweak
    aiTweakTitle: "AI 智能微调",
    aiTweakPlaceholder: "例如：把第2天下午改成室内场馆、增加一家特色咖啡馆...",
    aiTweakBtn: "微调行程",
    aiTweaking: "AI 调整中...",
    moveUp: "上移顺序",
    moveDown: "下移顺序",
    deleteSpot: "删除此点位",
    swapSpotAI: "AI 换一个同区域景点",
    checklistTitle: "行前实名预约备忘录",
    emergencyTitle: "紧急联络与便民医疗",

    // Gallery
    galleryTitle: "精选经典行程灵感库",
    gallerySubtitle: "由旅行规划师与实地勘探验证的高品质舒享路线，点击直接开启专属定制",
    curatedBadge: "官方精选",
    viewItinerary: "查看完整行程",
    savedCountPrefix: "已保存行程",
    noSavedTrips: "您暂未保存任何定制行程",
    startExplore: "去发现更多灵感",

    // Copilot & Floating Tweak
    openCopilot: "打开管家微调",
    copilotBannerDesc: "偏好调整、避开台阶、餐饮替换？点击开启右下角管家微调",
    copilotDrawerTitle: "AI 行程管家微调",
    copilotDrawerSubtitle: "定向增量微调 · 自动保留坐标与落客点",
    copilotWelcome: "您好！我是您的 7ka 专属行程管家。想避开台阶爬坡、换成温热清淡滋补晚餐、增加午后茶歇，或是替换某个景点？点击下方快捷指令或输入具体要求，我将自动重新规划动线。",
    quickPresets: "快捷微调指令",
    copilotInputPlaceholder: "输入调整要求（如：第二天下午想去海边漫步、把晚餐换成参鸡汤...）",
    copilotTuning: "编排中...",
    copilotSend: "微调",
    presetChips: [
      "长辈脚力减负 · 减少台阶与爬坡",
      "换清淡中餐 · 避免辛辣油腻",
      "下午增加特色咖啡馆漫步",
      "增加特色早市 / 夜市打卡",
    ],

    // Toast & Share & Export
    published: "已公开",
    publishToSquare: "公开到广场",
    linkCopied: "已复制分享链接！任何人打开即看。",
    copyFailed: "复制链接失败",
    offlineDownloaded: "已下载离线网页！无网无信号均可打开。",
    exportFailed: "导出离线网页失败",
    alreadyPublic: "该路线已在探索广场中！",
    publishedSuccess: "已发布至「探索广场」！",
    publishFailed: "发布失败，请重试",
    tweakSuccess: "已成功为您微调行程！",
    tweakFailed: "微调失败，请重试",
    spotDeleted: "已删除该点位，地图路径已更新",
    orderUpdated: "已调整点位游览顺序",
    spotSwapped: "已切换打卡点",
    restaurantSwapped: "已切换餐厅至",

    // Itinerary Details
    dailyTips: "当日贴士",
    themePrefix: "主题: ",
    approxDuration: "游玩约",
    photoTipLabel: "取景打卡指引: ",
    signatureLabel: "特色亮点: ",
    dietaryLabel: "适口与避坑: ",
    altFlavorsLabel: "备选风味: ",
    altSpotsLabel: "备选打卡点: ",
    daysAhead: "提前",
    roundTrip: "往返",
    nightsUnit: "晚",

    // Wizard specifics
    selectedCountText: "个城市/区域",
    addCityPlaceholder: "输入城市或景区，按回车添加...",
    addCityBtn: "添加",
    datesAndDuration: "出行日期与天数",
    calendarTab: "日历排期 (规避闭馆)",
    sliderTab: "1-30天滑块",
    departureDate: "出发日期",
    durationSliderLabel: "行程天数 (1-30天)",
    calendarOptimizedTip: "已开启场馆实际开放日智能校准 (规避闭馆)",
    slideAdjust: "滑动调整天数:",
    specialRequestsLabel: "特殊要求与心愿 (选填)",
    specialRequestsPlaceholder: "例如：必吃当地地道海鲜；第一天下午才到；长辈不能吃辣...",
    destinationRequired: "请至少选择或输入一个目的地",
    failedToGenerate: "生成失败，请稍后重试",
    timeoutError: "请求超时或网络异常，请重试",

    // Hero & Footer
    footerTagline: "7ka · 私人实操级旅行规划",
  },

  en: {
    // Navigation & Common
    brandTagline: "JOURNEYS",
    myTrips: "My Trips",
    home: "Home",
    newTrip: "Plan New Trip",
    langSwitch: "中文",
    langCurrent: "English",
    search: "Search",
    close: "Close",
    back: "Back",
    confirm: "Confirm",
    cancel: "Cancel",

    // Hero
    heroBadge: "AI-Powered · Senior-Friendly · Gentle Walk",
    heroTitle: "Travel That Feels Like Poetry",
    heroSubtitle: "A bespoke AI travel engine crafted for multigenerational families & relaxed explorers: zero backtrack routes, closed-venue avoidance, exact drop-offs, and curated mild dining.",
    startCustomizing: "Start Crafting Your Trip",

    // Wizard
    wizardTitle: "Customize Your Itinerary",
    wizardSubtitle: "Share your preferences, and AI will craft a zero-backtrack, closure-proof journey with authentic dining.",
    destLabel: "Destination City / Region",
    destPlaceholder: "Enter city, e.g. Kyoto, Tokyo, Paris, Qingdao, Yanji...",
    recommendedDestinations: "Popular Picks",
    durationLabel: "Duration (Days)",
    daysUnit: "days",
    datesLabel: "Travel Dates (Optional - Smart Closure Avoidance)",
    datesOptional: "Set departure date to align with verified open days and avoid Monday closures",
    startDatePlaceholder: "Departure Date",
    endDatePlaceholder: "Return Date",
    focusLabel: "Trip Focus & Style",
    focusFoodie: "Culinary & Dining (Iconic Local Delicacies)",
    focusCulture: "Heritage & History (Architecture & In-Depth Culture)",
    focusNature: "Scenic & Nature (Coastlines, Mountains & Relaxing Walks)",
    companionsLabel: "Travel Companions",
    compElders: "Seniors (65+)",
    compKids: "Kids / Stroller",
    compCouple: "Couples / Friends",
    compSolo: "Solo Explorer",
    compPets: "Pet Friendly",
    compWheelchair: "Wheelchair Accessible",
    mobilityLabel: "Physical Pace",
    mobilityLow: "Relaxed (<5,000 steps · Elevator Priority)",
    mobilityMod: "Moderate (8,000 - 12,000 steps)",
    mobilityHigh: "Intensive (15,000+ steps trekker)",
    budgetLabel: "Budget Tier",
    budgetLow: "Value / Budget",
    budgetMid: "Comfortable",
    budgetHigh: "Luxury / Premium",
    transportLabel: "Preferred Transport Mode",
    transportTaxi: "Taxi / Private Charter",
    transportPublic: "Metro / Public Transit",
    transportDrive: "Self-Driving Rental Car",
    customNotesLabel: "Custom Notes & Wishlist (Optional)",
    customNotesPlaceholder: "e.g. Mild non-spicy food only, sunrise spot, traveling with folding wheelchair...",
    generateBtn: "Generate Bespoke Itinerary",
    generatingPlan: "AI is tailoring your journey...",

    // Itinerary Dashboard
    dayNumberPrefix: "Day ",
    dayNumberSuffix: "",
    tripOverview: "Trip Overview",
    highlights: "Trip Highlights",
    logistics: "Intercity Logistics & Transit",
    weatherPacking: "Weather & Packing Advice",
    seniorFriendly: "Senior Friendly",
    relaxedPace: "Relaxed Pace",
    moderatePace: "Moderate Pace",
    intensivePace: "Active Pace",
    viewsCount: "views",
    exportDoc: "Export Document",
    shareTrip: "Share Trip",
    remixTrip: "Remix This Trip",
    middayRest: "Midday Hotel Rest Break",
    dailyTimeline: "Daily Timeline",
    durationMins: "Duration ~",
    dropOffNavTarget: "Drop-off Navigation Landmark",
    reservationRequired: "Reservation Required",
    photoSpotAdvice: "Best Photo Angle",
    transitTaxi: "Taxi",
    transitCharter: "Private Charter",
    transitWalk: "Walk",
    mins: "mins",
    altSpots: "Alternative Spots",

    // Dining & Reviews
    diningSectionTitle: "Daily Authentic Dining Recommendations",
    lunch: "Lunch",
    dinner: "Dinner",
    supper: "Late Snack / Dessert",
    breakfast: "Breakfast",
    perPerson: "/ person",
    authenticFlavor: "Local Flavor",
    signatureHighlights: "Specialty Highlight",
    dietarySuitability: "Dietary & Comfort Notes",
    altFlavors: "Alternative Dining",
    swapRestaurant: "Swap",
    googleReviews: "Google Reviews",
    dianpingReviews: "Dianping",
    viewGoogleReviewsTip: "View authentic diner ratings, photos and menu on Google Maps",

    // Map & Navigation
    routeMap: "Route Map",
    mapLayerAmap: "AMap (China Vector)",
    mapLayerGlobal: "Global HD Tiles (Carto/OSM)",
    openInGoogleMaps: "Open in Google Maps",
    openInAmap: "Open in AMap",
    navFullDayGoogle: "Navigate Full Day in Google Maps",
    navStopGoogle: "Google Maps Navigation",
    mapProviderHint: "Smart layer auto-selected; click any stop to launch Google Maps navigation directly",

    // Interactive Actions & Tweak
    aiTweakTitle: "AI Bespoke Adjustment",
    aiTweakPlaceholder: "e.g. Change Day 2 afternoon to an indoor venue, add a specialty cafe...",
    aiTweakBtn: "Apply Tweak",
    aiTweaking: "Adjusting...",
    moveUp: "Move Up",
    moveDown: "Move Down",
    deleteSpot: "Delete Spot",
    swapSpotAI: "Swap with similar spot via AI",
    checklistTitle: "Advance Reservation Checklist",
    emergencyTitle: "Emergency Contacts & Medical Support",

    // Gallery
    galleryTitle: "Curated Itinerary Gallery",
    gallerySubtitle: "Field-verified, slow-travel journeys curated by professional travel designers",
    curatedBadge: "Curated",
    viewItinerary: "View Itinerary",
    savedCountPrefix: "Saved Itineraries",
    noSavedTrips: "No saved itineraries yet",
    startExplore: "Explore Inspiration",

    // Copilot & Floating Tweak
    openCopilot: "Open Copilot",
    copilotBannerDesc: "Need to adjust pacing, avoid stairs, or swap meals? Open copilot anytime.",
    copilotDrawerTitle: "AI Itinerary Concierge",
    copilotDrawerSubtitle: "Incremental tweaking · Keeps drop-offs and routes intact",
    copilotWelcome: "Hello! I am your 7ka travel copilot. Need to avoid steep hills, swap dinner to a mild soup, add a tea break, or adjust pacing? Tap a preset below or message me!",
    quickPresets: "Quick Presets",
    copilotInputPlaceholder: "e.g. Change Day 2 dinner to non-spicy soup, add seaside stroll...",
    copilotTuning: "Tuning...",
    copilotSend: "Tweak",
    presetChips: [
      "Reduce walking & avoid steep stairs",
      "Swap to mild non-spicy meal",
      "Add afternoon specialty cafe / tea break",
      "Add morning / night market visit",
    ],

    // Toast & Share & Export
    published: "Published",
    publishToSquare: "Publish to Gallery",
    linkCopied: "Link copied to clipboard! Anyone with the link can view.",
    copyFailed: "Failed to copy link",
    offlineDownloaded: "Offline guide downloaded! Viewable without internet.",
    exportFailed: "Failed to export offline guide",
    alreadyPublic: "This itinerary is already public in the gallery!",
    publishedSuccess: "Published to Discovery Gallery!",
    publishFailed: "Failed to publish. Please try again.",
    tweakSuccess: "Itinerary updated successfully!",
    tweakFailed: "Failed to update itinerary. Please try again.",
    spotDeleted: "Spot removed and route updated",
    orderUpdated: "Stop order re-arranged",
    spotSwapped: "Spot replaced with alternative",
    restaurantSwapped: "Restaurant swapped to",

    // Itinerary Details
    dailyTips: "Daily Tips",
    themePrefix: "Theme: ",
    approxDuration: "Duration ~",
    photoTipLabel: "Photo Advice: ",
    signatureLabel: "Signature Highlights: ",
    dietaryLabel: "Dietary & Pacing: ",
    altFlavorsLabel: "Alternative Dining: ",
    altSpotsLabel: "Alternative Spots: ",
    daysAhead: "days in advance",
    roundTrip: "Round-trip",
    nightsUnit: "Nights",

    // Wizard specifics
    selectedCountText: "cities/regions selected",
    addCityPlaceholder: "Enter city or attraction, press Enter...",
    addCityBtn: "Add",
    datesAndDuration: "Dates & Duration",
    calendarTab: "Calendar (Avoid Closures)",
    sliderTab: "1-30 Days Slider",
    departureDate: "Departure Date",
    durationSliderLabel: "Duration (1-30 Days)",
    calendarOptimizedTip: "Smart calendar optimization enabled (avoiding Monday closures)",
    slideAdjust: "Adjust Duration:",
    specialRequestsLabel: "Special Requests & Wishes (Optional)",
    specialRequestsPlaceholder: "e.g. Must try local king crab; arriving in afternoon on Day 1; elders cannot eat spicy...",
    destinationRequired: "Please select or enter at least one destination",
    failedToGenerate: "Failed to generate itinerary. Please try again.",
    timeoutError: "Request timed out or network error. Please try again.",

    // Hero & Footer
    footerTagline: "7ka · Bespoke Slow-Travel Concierge",
  },
};
