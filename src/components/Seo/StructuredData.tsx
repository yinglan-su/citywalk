import React from "react";

export const StructuredData: React.FC = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "7ka",
    alternateName: ["7ka Bespoke Slow Travel", "7ka 慢调旅行"],
    url: "https://plan.7ka.fit",
    description:
      "AI-powered gentle travel engine with zero-backtrack routes, verified drop-offs, accessibility notes, and handpicked local dining.",
    inLanguage: ["zh-CN", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://plan.7ka.fit/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "7ka",
    alternateName: "7ka Bespoke Slow Travel",
    url: "https://plan.7ka.fit",
    logo: "https://plan.7ka.fit/favicon.ico",
    description:
      "Bespoke slow travel and barrier-free itinerary curation platform for multigenerational families and relaxed explorers.",
    knowsAbout: [
      "Slow Travel",
      "Senior-Friendly Tourism",
      "Barrier-Free Travel Planning",
      "Zero-Backtrack Routing",
      "Kyoto Slow Travel",
      "Tokyo Gentle Itinerary",
      "Beijing Forbidden City Accessible Route",
      "Chengdu Giant Panda Slow Living",
      "Qingdao Seaside Heritage",
      "Yanji & Borderland Culture",
      "Singapore Accessible Green Journey",
      "Taipei National Palace Museum & Onsen",
    ],
    areaServed: ["CN", "JP", "SG", "HK", "TW", "Worldwide"],
    currenciesAccepted: "CNY, JPY, USD, HKD, SGD, TWD",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7ka Curated Slow Travel Itineraries",
    description:
      "Handpicked itineraries field-tested for barrier-free access, gentle pacing, and authentic dining.",
    numberOfItems: 12,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "TouristTrip",
          name: "Yanji + Hunchun 6-Day Borderland Charm & Korean Delicacies",
          description:
            "Relaxed exploration of Korean ethnic culture, live Russian king crab feast, and China-DPRK-Russia border.",
          touristType: ["Seniors", "Families", "Foodies"],
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "TouristTrip",
          name: "Qingdao 3-Day Seaside Slow Travel & European Architecture",
          description:
            "Badaguan villas, Xiaoyushan observation deck, and historic beer museum stroll.",
          touristType: ["Seniors", "Families", "Coastal Slow Travelers"],
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "TouristTrip",
          name: "Kyoto 4-Day Zen Gardens & Arashiyama Serenity",
          description:
            "Sagano scenic train, Tenryu-ji flat garden paths, and centuries-old Junsei tofu kaiseki.",
          touristType: ["Seniors", "Culture Enthusiasts", "Slow Travelers"],
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "TouristTrip",
          name: "Chengdu & Dujiangyan 4-Day Shu Rhyme & Daoist Inquiry",
          description:
            "Giant Panda Base VIP barrier-free cart, Gaiwan teahouse by the river, and non-spicy Qinshanzhai banquet.",
          touristType: ["Seniors", "Multigenerational Families"],
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "TouristTrip",
          name: "Beijing 4-Day Imperial Elegance & Barrier-Free Palace",
          description:
            "Forbidden City Donghua Gate accessible passage, Summer Palace royal lake cruise, and Temple of Heaven flat cypresses walk.",
          touristType: ["Seniors", "History & Heritage Travelers"],
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "TouristTrip",
          name: "Xi'an 4-Day Tang Dynasty Glory & Ancient Capital Stroll",
          description:
            "Terracotta Warriors barrier-free ramp, Giant Wild Goose Pagoda fountain, and authentic Shaanxi clear broth.",
          touristType: ["Seniors", "History Travelers"],
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "TouristTrip",
          name: "Shanghai 3-Day Maritime Charm & Jiangnan Grace",
          description:
            "Waitan accessible riverside promenade, Yu Garden classical corridors, and mild Jiangnan cuisine.",
          touristType: ["Seniors", "Urban Walkers"],
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "TouristTrip",
          name: "Hong Kong 4-Day Victoria Harbour & Lingnan Heritage",
          description:
            "Peak Tram VIP fast-track, Star Ferry gentle harbor crossing, West Kowloon cultural park, and Michelin dim sum.",
          touristType: ["Seniors", "Families"],
        },
      },
      {
        "@type": "ListItem",
        position: 9,
        item: {
          "@type": "TouristTrip",
          name: "Tokyo 4-Day Zen Parks & Edomae Flavors",
          description:
            "Shinjuku Gyoen flat emerald lawn, Asakusa Senso-ji accessible hall, Sumida River boat, and mild unagi.",
          touristType: ["Seniors", "Slow Travelers"],
        },
      },
      {
        "@type": "ListItem",
        position: 10,
        item: {
          "@type": "TouristTrip",
          name: "Xiamen 3-Day Gulangyu Sea Breeze & Egret Island Stroll",
          description:
            "Gulangyu electric cart coastal loop, South Putuo Temple gentle slopes, and mild Minnan seafood broth.",
          touristType: ["Seniors", "Coastal Explorers"],
        },
      },
      {
        "@type": "ListItem",
        position: 11,
        item: {
          "@type": "TouristTrip",
          name: "Singapore 4-Day Garden City & Accessible Tropics",
          description:
            "Gardens by the Bay climate-controlled domes, Marina Bay Sands SkyPark elevator, and Botanic Gardens flat loops.",
          touristType: ["Seniors", "Multigenerational Families"],
        },
      },
      {
        "@type": "ListItem",
        position: 12,
        item: {
          "@type": "TouristTrip",
          name: "Taipei 4-Day National Treasure Elegance & Beitou Hot Springs",
          description:
            "National Palace Museum accessible passage, Kagaya private sulfur onsen, and Din Tai Fung 18-fold xiaolongbao.",
          touristType: ["Seniors", "Hot Spring & Culinary Travelers"],
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes 7ka travel itineraries elder and family friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "7ka optimizes itineraries to eliminate backtracking, verifies barrier-free entrances and exact drop-off coordinates, checks museum opening hours to avoid Monday closures, incorporates afternoon hotel rest breaks, and curates mild, digestible local dining.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use 7ka itineraries offline without an internet connection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 7ka allows travelers to export any itinerary as a standalone single-file offline HTML document. It contains embedded daily timelines, addresses, dining recommendations, and emergency contacts, fully functional without cellular reception.",
        },
      },
      {
        "@type": "Question",
        name: "What destinations are available on 7ka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "7ka features 12 handpicked slow travel destinations: Kyoto, Tokyo, Beijing, Shanghai, Xi'an, Chengdu, Qingdao, Yanji/Hunchun, Xiamen, Hong Kong, Singapore, and Taipei. In addition, the AI engine can generate bespoke itineraries for any custom global destination.",
        },
      },
      {
        "@type": "Question",
        name: "How does 7ka handle mapping and restaurant reviews outside of China?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "7ka dynamically switches map layers and review sources based on location: AMap and Dianping are used for Mainland China, while Google Maps, Google Reviews, and CartoDB/OSM tiles are used for international destinations like Kyoto, Tokyo, Singapore, and Taipei.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
