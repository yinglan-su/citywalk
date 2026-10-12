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
    brandTagline: "",
    myTrips: "我的行程",
    home: "主页",
    newTrip: "定制新路线",
    langSwitch: "English",
    langCurrent: "中文",
    search: "搜索",
    close: "关闭",
    back: "返回",
    confirm: "确认",
    cancel: "取消",

    // Hero
    heroBadge: "慢调旅行 · 专属定制",
    heroTitle: "慢调旅行 · 专属定制",
    heroSubtitle: "",
    startCustomizing: "开始定制",

    // Wizard
    wizardTitle: "定制行程",
    wizardSubtitle: "",
    destLabel: "目的地",
    destPlaceholder: "输入城市，如：青岛、延吉、京都、东京...",
    recommendedDestinations: "推荐",
    durationLabel: "天数",
    daysUnit: "天",
    datesLabel: "出行日期",
    datesOptional: "规避闭馆与错峰",
    startDatePlaceholder: "出发日期",
    endDatePlaceholder: "返程日期",
    focusLabel: "旅行偏好",
    focusFoodie: "地道风味",
    focusCulture: "人文历史",
    focusNature: "自然山水",
    companionsLabel: "出行同行",
    compElders: "长辈同行",
    compKids: "携带儿童",
    compCouple: "情侣 / 伴侣",
    compSolo: "独自出行",
    compPets: "携带宠物",
    compWheelchair: "无障碍优先",
    mobilityLabel: "步调节奏",
    mobilityLow: "轻松缓行 (<5k步)",
    mobilityMod: "适度漫步 (8k-12k步)",
    mobilityHigh: "充实健行 (15k+步)",
    budgetLabel: "预算偏好",
    budgetLow: "经济实惠",
    budgetMid: "品质舒适",
    budgetHigh: "高端品质",
    transportLabel: "交通偏好",
    transportTaxi: "专车 / 打车",
    transportPublic: "公共交通",
    transportDrive: "自驾租车",
    customNotesLabel: "特别要求",
    customNotesPlaceholder: "如长辈不吃辣、到达时间、轮椅出行等...",
    generateBtn: "生成行程",
    generatingPlan: "正在规划动线与适老细节...",

    // Itinerary Dashboard
    dayNumberPrefix: "Day ",
    dayNumberSuffix: "",
    tripOverview: "行程总览",
    highlights: "核心亮点",
    logistics: "交通方案",
    weatherPacking: "行前穿衣",
    seniorFriendly: "长辈舒享",
    relaxedPace: "轻度漫步",
    moderatePace: "适中步调",
    intensivePace: "充实探索",
    viewsCount: "次查阅",
    exportDoc: "离线文档",
    shareTrip: "分享",
    remixTrip: "复刻灵感",
    middayRest: "午间休整",
    dailyTimeline: "每日动线",
    durationMins: "约",
    dropOffNavTarget: "落客点",
    reservationRequired: "需预约",
    photoSpotAdvice: "拍照建议",
    transitTaxi: "打车",
    transitCharter: "专车",
    transitWalk: "步行",
    mins: "分钟",
    altSpots: "备选点位",

    // Dining & Reviews
    diningSectionTitle: "精选餐饮",
    lunch: "午餐",
    dinner: "晚餐",
    supper: "夜宵",
    breakfast: "早餐",
    perPerson: "/ 人",
    authenticFlavor: "风味特色",
    signatureHighlights: "招牌推荐",
    dietarySuitability: "适老说明",
    altFlavors: "换同商圈餐厅",
    swapRestaurant: "换一家",
    googleReviews: "Google 评价",
    dianpingReviews: "大众点评",
    viewGoogleReviewsTip: "在 Google 地图查看评价与照片",

    // Map & Navigation
    routeMap: "路线地图",
    mapLayerAmap: "高德矢量",
    mapLayerGlobal: "全球底图",
    openInGoogleMaps: "Google 地图",
    openInAmap: "高德地图",
    navFullDayGoogle: "全天 Google 导航",
    navStopGoogle: "导航到此处",
    mapProviderHint: "已自动匹配适宜地图底图",

    // Interactive Actions & Tweak
    aiTweakTitle: "行程微调",
    aiTweakPlaceholder: "例如：增加一家特色咖啡馆、换成室内场馆...",
    aiTweakBtn: "微调",
    aiTweaking: "调整中...",
    moveUp: "上移",
    moveDown: "下移",
    deleteSpot: "删除",
    swapSpotAI: "换同区域景点",
    checklistTitle: "实名预约清单",
    emergencyTitle: "紧急保障",

    // Gallery
    galleryTitle: "精选路线",
    gallerySubtitle: "",
    curatedBadge: "精选",
    viewItinerary: "查看行程",
    savedCountPrefix: "已保存",
    noSavedTrips: "暂无保存的行程",
    startExplore: "探索路线",

    // Copilot & Floating Tweak
    openCopilot: "行程管家",
    copilotBannerDesc: "",
    copilotDrawerTitle: "AI 行程管家",
    copilotDrawerSubtitle: "定向微调 · 优化动线与落客点",
    copilotWelcome: "您好！我是您的 7ka 专属行程管家。想避开台阶爬坡、换成清淡滋补餐饮，或是替换景点？输入具体要求即可自动调整动线。",
    quickPresets: "快捷指令",
    copilotInputPlaceholder: "输入调整要求（如：第二天下午换去海边漫步、晚餐换成参鸡汤...）",
    copilotTuning: "编排中...",
    copilotSend: "微调",
    presetChips: [
      "长辈脚力减负 · 减少台阶爬坡",
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
    themePrefix: "",
    approxDuration: "约",
    photoTipLabel: "拍照建议: ",
    signatureLabel: "招牌: ",
    dietaryLabel: "适老说明: ",
    altFlavorsLabel: "备选: ",
    altSpotsLabel: "备选点位: ",
    daysAhead: "提前",
    roundTrip: "往返",
    nightsUnit: "晚",

    // Wizard specifics
    selectedCountText: "个城市",
    addCityPlaceholder: "输入城市，按回车添加...",
    addCityBtn: "添加",
    datesAndDuration: "日期与天数",
    calendarTab: "日历排期",
    sliderTab: "快速天数",
    departureDate: "出发日期",
    durationSliderLabel: "行程天数",
    calendarOptimizedTip: "已开启场馆实际开放日智能校准",
    slideAdjust: "天数:",
    specialRequestsLabel: "特别要求",
    specialRequestsPlaceholder: "如长辈不吃辣、到达时间、轮椅出行等...",
    destinationRequired: "请至少选择或输入一个目的地",
    failedToGenerate: "生成失败，请稍后重试",
    timeoutError: "请求超时，请重试",

    // Hero & Footer
    footerTagline: "7ka · Bespoke Slow Travel",
  },

  en: {
    // Navigation & Common
    brandTagline: "",
    myTrips: "My Trips",
    home: "Home",
    newTrip: "New Trip",
    langSwitch: "中文",
    langCurrent: "English",
    search: "Search",
    close: "Close",
    back: "Back",
    confirm: "Confirm",
    cancel: "Cancel",

    // Hero
    heroBadge: "Bespoke Slow Travel",
    heroTitle: "Bespoke Slow Travel",
    heroSubtitle: "",
    startCustomizing: "Start Crafting",

    // Wizard
    wizardTitle: "Craft Itinerary",
    wizardSubtitle: "",
    destLabel: "Destinations",
    destPlaceholder: "Enter city, e.g. Kyoto, Tokyo, Paris, Qingdao, Yanji...",
    recommendedDestinations: "Picks",
    durationLabel: "Duration",
    daysUnit: "days",
    datesLabel: "Dates",
    datesOptional: "Auto-aligns opening hours",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    focusLabel: "Style",
    focusFoodie: "Culinary",
    focusCulture: "Culture",
    focusNature: "Nature",
    companionsLabel: "Travelers",
    compElders: "Seniors",
    compKids: "Kids",
    compCouple: "Couple",
    compSolo: "Solo",
    compPets: "Pets",
    compWheelchair: "Accessible",
    mobilityLabel: "Pacing",
    mobilityLow: "Gentle (<5k steps)",
    mobilityMod: "Moderate (8k-12k steps)",
    mobilityHigh: "Active (15k+ steps)",
    budgetLabel: "Budget",
    budgetLow: "Budget",
    budgetMid: "Comfort",
    budgetHigh: "Luxury",
    transportLabel: "Transport",
    transportTaxi: "Private / Taxi",
    transportPublic: "Public Transit",
    transportDrive: "Self-Driving",
    customNotesLabel: "Notes",
    customNotesPlaceholder: "e.g. Mild food only, flight arrival time, accessible paths...",
    generateBtn: "Generate Itinerary",
    generatingPlan: "Optimizing routes and accessible details...",

    // Itinerary Dashboard
    dayNumberPrefix: "Day ",
    dayNumberSuffix: "",
    tripOverview: "Overview",
    highlights: "Highlights",
    logistics: "Transit",
    weatherPacking: "Packing & Weather",
    seniorFriendly: "Senior Friendly",
    relaxedPace: "Gentle Pace",
    moderatePace: "Moderate Pace",
    intensivePace: "Active Pace",
    viewsCount: "views",
    exportDoc: "Offline Guide",
    shareTrip: "Share",
    remixTrip: "Remix",
    middayRest: "Midday Rest",
    dailyTimeline: "Daily Route",
    durationMins: "approx.",
    dropOffNavTarget: "Drop-off",
    reservationRequired: "Booking Required",
    photoSpotAdvice: "Photo Tip",
    transitTaxi: "Taxi",
    transitCharter: "Charter",
    transitWalk: "Walk",
    mins: "mins",
    altSpots: "Alternative Spots",

    // Dining & Reviews
    diningSectionTitle: "Dining Picks",
    lunch: "Lunch",
    dinner: "Dinner",
    supper: "Supper",
    breakfast: "Breakfast",
    perPerson: "/ person",
    authenticFlavor: "Flavors",
    signatureHighlights: "Signatures",
    dietarySuitability: "Accessibility Notes",
    altFlavors: "Swap Restaurant",
    swapRestaurant: "Swap",
    googleReviews: "Google Reviews",
    dianpingReviews: "Dianping",
    viewGoogleReviewsTip: "View reviews and photos on Google Maps",

    // Map & Navigation
    routeMap: "Route Map",
    mapLayerAmap: "AMap",
    mapLayerGlobal: "Global",
    openInGoogleMaps: "Google Maps",
    openInAmap: "AMap",
    navFullDayGoogle: "Full Day Navigation",
    navStopGoogle: "Directions",
    mapProviderHint: "Map layer optimized for region",

    // Interactive Actions & Tweak
    aiTweakTitle: "AI Tweak",
    aiTweakPlaceholder: "e.g. Add a quiet teahouse, switch to indoor venue...",
    aiTweakBtn: "Tweak",
    aiTweaking: "Optimizing...",
    moveUp: "Move Up",
    moveDown: "Move Down",
    deleteSpot: "Delete",
    swapSpotAI: "Swap spot",
    checklistTitle: "Reservations",
    emergencyTitle: "Emergency & Medical",

    // Gallery
    galleryTitle: "Curated Journeys",
    gallerySubtitle: "",
    curatedBadge: "Curated",
    viewItinerary: "View Trip",
    savedCountPrefix: "Saved",
    noSavedTrips: "No saved trips yet",
    startExplore: "Explore",

    // Copilot & Floating Tweak
    openCopilot: "Concierge",
    copilotBannerDesc: "",
    copilotDrawerTitle: "AI Concierge",
    copilotDrawerSubtitle: "Route & Pacing Tweak",
    copilotWelcome: "Hello! I am your 7ka travel concierge. Need to reduce steps, swap meals, or switch attractions? Let me know and I will re-optimize your route.",
    quickPresets: "Presets",
    copilotInputPlaceholder: "Enter requests (e.g. replace dinner with mild chicken soup...)",
    copilotTuning: "Updating...",
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
    themePrefix: "",
    approxDuration: "approx.",
    photoTipLabel: "Photo tip: ",
    signatureLabel: "Signature: ",
    dietaryLabel: "Notes: ",
    altFlavorsLabel: "Alternatives: ",
    altSpotsLabel: "Alternative spots: ",
    daysAhead: "days in advance",
    roundTrip: "Round-trip",
    nightsUnit: "Nights",

    // Wizard specifics
    selectedCountText: "cities selected",
    addCityPlaceholder: "Enter city, press Enter...",
    addCityBtn: "Add",
    datesAndDuration: "Dates & Duration",
    calendarTab: "Dates",
    sliderTab: "Days",
    departureDate: "Departure Date",
    durationSliderLabel: "Duration",
    calendarOptimizedTip: "Smart calendar optimization enabled",
    slideAdjust: "Duration:",
    specialRequestsLabel: "Notes",
    specialRequestsPlaceholder: "e.g. Mild food only, flight arrival time, accessible paths...",
    destinationRequired: "Please select or enter at least one destination",
    failedToGenerate: "Failed to generate itinerary. Please try again.",
    timeoutError: "Request timed out. Please try again.",

    // Hero & Footer
    footerTagline: "7ka · Bespoke Slow Travel",
  },
};
