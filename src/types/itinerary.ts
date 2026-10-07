export interface WizardConfig {
  destinations: string;
  durationDays: number;
  mobility: "low" | "moderate" | "high";
  companions: string[]; // ["elders", "kids", "pets", "wheelchair", "couple", "solo"]
  budgetTier: "budget" | "comfort" | "luxury";
  interests: string[]; // ["culture", "nature", "food", "photo", "leisure", "shopping"]
  transportMode: "charter_taxi" | "public_transit" | "driving";
  startDate?: string;
  endDate?: string;
  customNotes?: string;
}

export interface ActivityAlternative {
  name: string;
  description: string;
  photoTip?: string;
  image?: string;
  dropOffPoint?: string;
  durationMinutes?: number;
  timeSlot?: string;
}

export interface ActivityStop {
  type: "activity";
  id: string;
  name: string;
  category: "culture" | "nature" | "food" | "photo" | "leisure" | "rest";
  timeSlot: string; // e.g. "09:00 - 10:30"
  durationMinutes: number;
  coordinates: [number, number]; // [lat, lng]
  dropOffPoint: string; // Precise car/taxi drop-off location
  openingHours: string;
  reservationRequired: boolean;
  reservationChannel?: string; // WeChat miniprogram, advance days, ID required
  photoTip?: string;
  image?: string;
  elderKidNotes?: string;
  description: string;
  alternatives?: ActivityAlternative[];
}

export interface TransitConnector {
  type: "transit";
  fromStop: string;
  toStop: string;
  mode: "taxi" | "charter" | "walk" | "metro" | "bus" | "high_speed_rail";
  distanceKm: number;
  estimatedMinutes: number;
  navigationDetail: string; // e.g. "打车至延吉博物馆南门地下落客区，乘电梯直达1F"
}

export interface DiningAlternative {
  restaurantName: string;
  cuisineStyle: string;
  recommendedDishes: string[];
  elderKidSuitability?: string;
  perPersonBudget: string;
  addressOrDropOff?: string;
  image?: string;
  photoTip?: string;
}

export interface DiningCard {
  mealType: "早餐" | "午餐" | "晚餐" | "夜宵 / 甜品";
  restaurantName: string;
  cuisineStyle: string;
  recommendedDishes: string[];
  elderKidSuitability: string; // e.g. "清淡少油，有包厢，免排队建议"
  perPersonBudget: string;
  addressOrDropOff: string;
  image?: string;
  photoTip?: string;
  alternatives?: DiningAlternative[];
}

export interface ReservationItem {
  spotName: string;
  daysInAdvance: number;
  platform: string;
  ticketPrice: string;
  requiresRealNameId: boolean;
  bookingTip: string;
}

export interface EmergencyContact {
  role: string;
  phone: string;
  note: string;
}

export interface DayItinerary {
  dayNumber: number;
  dateOrLabel: string; // e.g. "Day 1 · 抵达延吉 & 朝鲜族美食初体验"
  theme: string;
  paceScore: "relaxed" | "moderate" | "intensive";
  mapConfig: {
    center: [number, number];
    zoom: number;
  };
  hotelRestBlock?: {
    enabled: boolean;
    recommendedTime: string; // "13:30 - 15:30"
    reason: string;
  };
  timeline: (ActivityStop | TransitConnector)[];
  meals: {
    lunch?: DiningCard;
    dinner?: DiningCard;
    supperOrSnack?: DiningCard;
  };
  dailyTips: string[];
}

export interface TravelPlan {
  id: string;
  meta: {
    tripTitle: string;
    destinations: string[];
    durationDays: number;
    travelerProfile: string[];
    budgetTier: "budget" | "comfort" | "luxury";
    transportMode: "charter_taxi" | "public_transit" | "driving";
    generatedAt: string;
    coverImage?: string;
    isPublic?: boolean;
    viewsCount?: number;
    likesCount?: number;
  };
  overview: {
    highlights: string[];
    logisticsSummary: string;
    weatherAndPacking: string[];
  };
  days: DayItinerary[];
  reservationChecklist: ReservationItem[];
  emergencyContacts: EmergencyContact[];
}

export interface GalleryItem {
  id: string;
  title: string;
  destination: string;
  durationDays: number;
  tags: string[];
  highlights: string[];
  viewsCount: number;
  likesCount: number;
  createdAt: string;
  isCurated?: boolean;
  coverImage?: string;
  compressedPlan?: string; // Optional full payload (if available)
  rawPlan?: TravelPlan; // For in-memory curated presets
}
