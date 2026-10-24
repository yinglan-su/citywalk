import { TravelPlan } from "@/types/itinerary";
import { Locale } from "./i18n";

function resolveStopDisplay(
  stop: string,
  timeline?: any[],
  allDays?: any[]
): string {
  if (!stop) return "";
  if (!/^[a-z]{2}_d\d+/.test(stop)) {
    return stop;
  }
  if (timeline) {
    const act = timeline.find((t) => t.type === "activity" && t.id === stop);
    if (act?.name) return act.name.split(" · ")[0].trim();
  }
  if (allDays) {
    for (const d of allDays) {
      const act = (d.timeline || []).find((t: any) => t.type === "activity" && t.id === stop);
      if (act?.name) return act.name.split(" · ")[0].trim();
    }
  }
  if (stop.includes("hotel") || stop.includes("rest")) {
    if (allDays && allDays.length > 0) {
      const hotelAct = (allDays[0].timeline || []).find(
        (t: any) => t.type === "activity" && (t.id?.includes("hotel") || t.category === "rest")
      );
      if (hotelAct?.name) return hotelAct.name.split(" · ")[0].trim();
    }
    return "酒店";
  }
  return stop;
}

/**
 * Generates a self-contained, offline-ready single HTML document for a travel plan
 */
export function generateOfflineHtml(plan: TravelPlan, locale?: Locale): string {
  const isEn =
    locale === "en" ||
    (!locale && !/[\u4e00-\u9fa5]/.test(plan.meta.tripTitle));

  const jsonString = JSON.stringify(plan).replace(/</g, "\\u003c");

  const texts = isEn
    ? {
        titleSuffix: " · Offline Travel Guide",
        bar: "✓ Fully Cached · No Internet Connection Required",
        daysUnit: "Days Trip",
        budgetBudget: "Budget / Value",
        budgetComfort: "Comfortable",
        budgetLuxury: "Luxury",
        transportTaxi: "Taxi / Charter Priority",
        transportPublic: "Public Transit",
        highlights: "Trip Highlights",
        logistics: "Logistics & Transportation Advice",
        reservationChecklist: "Advance Reservation Checklist",
        daysAhead: "days ahead",
        channel: "Channel",
        price: "Price",
        realName: "Real-Name ID",
        noId: "No ID Required",
        tip: "Tip",
        theme: "Theme",
        middayRest: "Midday Hotel Rest",
        min: "mins",
        dropOff: "Drop-off Landmark",
        advanceBooking: "Advance Booking Required",
        accessibility: "Accessibility & Family Notes",
        photoSpot: "Photo Angle Advice",
        lunch: "Lunch",
        dinner: "Dinner",
        cuisine: "Cuisine",
        budget: "Budget",
        suitability: "Suitability",
        dailyTips: "Daily Tips",
        emergency: "Emergency Contacts & Support",
      }
    : {
        titleSuffix: " · 离线完整攻略",
        bar: "✓ 已完全缓存 · 无需网络离线运行",
        daysUnit: "天行程",
        budgetBudget: "高性价比",
        budgetComfort: "品质舒适",
        budgetLuxury: "奢华体验",
        transportTaxi: "打车 / 专车优先",
        transportPublic: "公共交通",
        highlights: "行程亮点与特色",
        logistics: "交通与后勤建议",
        reservationChecklist: "提前预约清单",
        daysAhead: "提前",
        channel: "渠道",
        price: "票价",
        realName: "实名身份证",
        noId: "免证件",
        tip: "建议",
        theme: "主题",
        middayRest: "午间休整充电",
        min: "分钟",
        dropOff: "落客导航点",
        advanceBooking: "需提前预约",
        accessibility: "无障碍/照料建议",
        photoSpot: "拍照位点",
        lunch: "午餐推荐",
        dinner: "晚餐推荐",
        cuisine: "菜系",
        budget: "人均",
        suitability: "适宜人群",
        dailyTips: "当日贴士",
        emergency: "紧急联络与医疗保障",
      };

  return `<!DOCTYPE html>
<html lang="${isEn ? "en" : "zh-CN"}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${plan.meta.tripTitle}${texts.titleSuffix}</title>
  <style>
    :root {
      --primary: #2563EB;
      --primary-dark: #1D4ED8;
      --primary-light: #EFF6FF;
      --text-main: #0F172A;
      --text-muted: #64748B;
      --bg-page: #F8FAFC;
      --bg-card: #FFFFFF;
      --border: #E2E8F0;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
      background: var(--bg-page);
      color: var(--text-main);
      line-height: 1.5;
      padding-bottom: 60px;
    }
    .container { max-width: 768px; margin: 0 auto; background: var(--bg-card); min-height: 100vh; box-shadow: 0 0 20px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #18181B 0%, #27272A 100%); color: #fff; padding: 24px 20px; position: sticky; top: 0; z-index: 50; }
    .header h1 { font-size: 20px; font-weight: 700; margin-bottom: 8px; line-height: 1.3; }
    .badges { display: flex; flex-wrap: wrap; gap: 6px; }
    .badge { background: rgba(255,255,255,0.15); backdrop-filter: blur(4px); padding: 3px 8px; border-radius: 6px; font-size: 12px; }
    
    .nav-tabs { display: flex; overflow-x: auto; background: #fff; border-bottom: 1px solid var(--border); padding: 8px 16px; gap: 8px; position: sticky; top: 92px; z-index: 40; }
    .nav-tabs::-webkit-scrollbar { display: none; }
    .tab-btn { padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; border: 1px solid var(--border); background: #fff; color: var(--text-muted); cursor: pointer; white-space: nowrap; }
    .tab-btn.active { background: #18181B; color: #fff; border-color: #18181B; font-weight: 600; }
    
    .content-section { padding: 16px; }
    .card { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.03); }
    .card-title { font-size: 16px; font-weight: 700; color: var(--text-main); display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
    
    .rest-banner { background: #FEF3C7; border: 1px solid #FDE68A; border-radius: 10px; padding: 12px 14px; margin-bottom: 14px; color: #92400E; font-size: 13px; display: flex; align-items: center; gap: 10px; }
    
    .timeline { position: relative; padding-left: 20px; margin-top: 10px; }
    .timeline::before { content: ""; position: absolute; left: 6px; top: 8px; bottom: 8px; width: 2px; background: #E2E8F0; }
    .timeline-node { position: relative; margin-bottom: 18px; }
    .timeline-dot { position: absolute; left: -20px; top: 4px; width: 14px; height: 14px; border-radius: 50%; background: #18181B; border: 2px solid #fff; box-shadow: 0 0 0 2px #E4E4E7; }
    .stop-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 4px; }
    .stop-name { font-size: 15px; font-weight: 700; color: var(--text-main); }
    .stop-time { font-size: 12px; color: #18181B; font-weight: 600; background: #F4F4F5; padding: 2px 6px; border-radius: 4px; }
    
    .dropoff-badge { background: #F1F5F9; border-left: 3px solid #C5A880; padding: 6px 10px; border-radius: 0 6px 6px 0; font-size: 12px; color: #334155; margin: 6px 0; }
    .reservation-badge { background: #FEF2F2; border: 1px solid #FEE2E2; color: #DC2626; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; margin: 4px 0; display: inline-block; }
    
    .transit-block { background: #F8FAFC; border: 1px dashed #CBD5E1; border-radius: 8px; padding: 8px 12px; margin: 10px 0 14px -6px; font-size: 12px; color: #475569; display: flex; align-items: center; gap: 8px; }
    
    .dining-card { background: #F0FDF4; border: 1px solid #DCFCE7; border-radius: 10px; padding: 12px 14px; margin-top: 10px; }
    .dining-title { font-weight: 700; color: #166534; font-size: 14px; margin-bottom: 4px; }
    .dish-tag { display: inline-block; background: #DCFCE7; color: #15803D; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-right: 4px; margin-top: 4px; }
    
    .tips-list { list-style: none; }
    .tips-list li { font-size: 13px; color: #475569; margin-bottom: 6px; padding-left: 16px; position: relative; }
    .tips-list li::before { content: "•"; position: absolute; left: 4px; color: #C5A880; font-weight: bold; }
    
    .offline-bar { background: #10B981; color: #fff; text-align: center; padding: 6px; font-size: 11px; font-weight: 600; letter-spacing: 0.5px; }

    @media print {
      body { background: #fff; }
      .container { box-shadow: none; max-width: 100%; }
      .header { position: static; background: #fff; color: #000; border-bottom: 2px solid #000; }
      .nav-tabs, .offline-bar { display: none; }
      .day-section { display: block !important; page-break-after: always; }
    }
  </style>
</head>
<body>
  <div class="offline-bar">${texts.bar}</div>
  <div class="container">
    <header class="header">
      <h1>${plan.meta.tripTitle}</h1>
      <div class="badges">
        <span class="badge">${plan.meta.durationDays} ${texts.daysUnit}</span>
        <span class="badge">${plan.meta.budgetTier === "budget" ? texts.budgetBudget : plan.meta.budgetTier === "comfort" ? texts.budgetComfort : texts.budgetLuxury}</span>
        <span class="badge">${plan.meta.transportMode === "charter_taxi" ? texts.transportTaxi : texts.transportPublic}</span>
        ${plan.meta.travelerProfile.map((t) => `<span class="badge">${t}</span>`).join("")}
      </div>
    </header>

    <div class="content-section">
      <div class="card">
        <div class="card-title">${texts.highlights}</div>
        <ul class="tips-list">
          ${plan.overview.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
      </div>

      <div class="card">
        <div class="card-title">${texts.logistics}</div>
        <p style="font-size: 13px; color: #475569;">${plan.overview.logisticsSummary}</p>
      </div>

      ${plan.hotelOptions && plan.hotelOptions.length > 0 ? `
      <div class="card">
        <div class="card-title">${isEn ? "Accommodations & Hotels" : "推荐精选酒店"}</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin-top: 8px;">
          ${plan.hotelOptions.map((h) => `
            <div style="border: 1px solid ${h.isSelected ? "#18181B" : "#E2E8F0"}; background: ${h.isSelected ? "#FAFAF9" : "#FFFFFF"}; border-radius: 12px; padding: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span style="font-size: 10px; font-weight: bold; background: ${h.isSelected ? "#18181B" : "#F1F5F9"}; color: ${h.isSelected ? "#FFFFFF" : "#64748B"}; padding: 2px 6px; border-radius: 999px;">
                  ${h.isSelected ? (isEn ? "✓ Selected" : "✓ 已选用") : (isEn ? "Option" : "备选")}
                </span>
                <span style="font-size: 11px; font-weight: 600; color: #18181B;">${h.priceRange}</span>
              </div>
              <div style="font-size: 13px; font-weight: bold; color: #0F172A; margin-bottom: 2px;">${h.name}</div>
              <div style="font-size: 11px; color: #B45309; margin-bottom: 4px;">${h.starOrStyle}</div>
              <div style="font-size: 11px; color: #64748B;">📍 ${h.locationDetail}</div>
            </div>
          `).join("")}
        </div>
      </div>
      ` : ""}

      ${plan.reservationChecklist && plan.reservationChecklist.length > 0 ? `
      <div class="card">
        <div class="card-title">${texts.reservationChecklist}</div>
        ${plan.reservationChecklist.map((r) => `
          <div style="border-bottom: 1px solid #F1F5F9; padding: 8px 0;">
            <div style="font-size: 13px; font-weight: 600; display: flex; justify-content: space-between;">
              <span>${r.spotName}</span>
              <span style="color: #2563EB;">${isEn ? `${r.daysInAdvance} ${texts.daysAhead}` : `${texts.daysAhead} ${r.daysInAdvance} 天`}</span>
            </div>
            <div style="font-size: 12px; color: #64748B; margin-top: 2px;">
              ${texts.channel}: ${r.platform} | ${texts.price}: ${r.ticketPrice} | ${r.requiresRealNameId ? texts.realName : texts.noId}
            </div>
            <div style="font-size: 11px; color: #059669; margin-top: 2px;">${texts.tip}: ${r.bookingTip}</div>
          </div>
        `).join("")}
      </div>
      ` : ""}
    </div>

    <!-- Day Navigation -->
    <div class="nav-tabs" id="dayTabs">
      ${plan.days.map((d, idx) => `
        <button class="tab-btn ${idx === 0 ? "active" : ""}" onclick="switchDay(${d.dayNumber})">
          Day ${d.dayNumber}
        </button>
      `).join("")}
    </div>

    <!-- Days Content -->
    <div class="content-section">
      ${plan.days.map((day, idx) => `
        <div class="day-section" id="dayContent_${day.dayNumber}" style="${idx === 0 ? "display:block" : "display:none"}">
          <div style="margin-bottom: 12px;">
            <h2 style="font-size: 18px; font-weight: 700; color: #1E293B;">${day.dateOrLabel}</h2>
            <div style="font-size: 13px; color: #2563EB; font-weight: 500;">${texts.theme}: ${day.theme}</div>
          </div>

          ${day.hotelRestBlock && day.hotelRestBlock.enabled ? `
            <div class="rest-banner">
              <div>
                <strong>${texts.middayRest} (${day.hotelRestBlock.recommendedTime})</strong>
                <div style="font-size: 12px; margin-top: 2px;">${day.hotelRestBlock.reason}</div>
              </div>
            </div>
          ` : ""}

          <div class="timeline">
            ${day.timeline.map((item) => {
              if (item.type === "transit") {
                const modeText = isEn
                  ? item.mode === "taxi" ? "Taxi" : item.mode === "charter" ? "Private Car" : "Walk"
                  : item.mode === "taxi" ? "打车" : item.mode === "charter" ? "专车" : "步行";
                return `
                  <div class="transit-block">
                    <span>➔</span>
                    <div>
                      <strong>${resolveStopDisplay(item.fromStop, day.timeline, plan.days)} ➔ ${resolveStopDisplay(item.toStop, day.timeline, plan.days)}</strong>
                      <span style="color: #2563EB; margin-left: 6px;">${modeText} ~${item.estimatedMinutes} ${texts.min} (${item.distanceKm} km)</span>
                      <div style="font-size: 11px; color: #64748B; margin-top: 2px;">${item.navigationDetail}</div>
                    </div>
                  </div>
                `;
              } else {
                return `
                  <div class="timeline-node">
                    <div class="timeline-dot"></div>
                    <div class="stop-header">
                      <div class="stop-name">${item.name}</div>
                      <div class="stop-time">${item.timeSlot}</div>
                    </div>
                    
                    <div class="dropoff-badge">
                      <strong>${texts.dropOff}:</strong> ${item.dropOffPoint}
                    </div>

                    ${item.reservationRequired ? `
                      <div class="reservation-badge">
                        ${texts.advanceBooking}: ${item.reservationChannel || (isEn ? "Check official booking channel" : "请提前查看官方通道")}
                      </div>
                    ` : ""}

                    <p style="font-size: 13px; color: #475569; margin: 4px 0;">${item.description}</p>
                    
                    ${item.elderKidNotes ? `
                      <div style="font-size: 12px; color: #059669; margin-top: 4px;">
                        • ${texts.accessibility}: ${item.elderKidNotes}
                      </div>
                    ` : ""}

                    ${item.photoTip ? `
                      <div style="font-size: 12px; color: #D97706; margin-top: 2px;">
                        • ${texts.photoSpot}: ${item.photoTip}
                      </div>
                    ` : ""}
                  </div>
                `;
              }
            }).join("")}
          </div>

          <!-- Meals -->
          ${day.meals.lunch ? `
            <div class="dining-card">
              <div class="dining-title">${texts.lunch}: ${day.meals.lunch.restaurantName}</div>
              <div style="font-size: 12px; color: #166534; margin-bottom: 4px;">${texts.cuisine}: ${day.meals.lunch.cuisineStyle} | ${texts.budget}: ${day.meals.lunch.perPersonBudget}</div>
              <div>
                ${day.meals.lunch.recommendedDishes.map((dish) => `<span class="dish-tag">${dish}</span>`).join("")}
              </div>
              <div style="font-size: 12px; color: #15803D; margin-top: 6px;">${texts.suitability}: ${day.meals.lunch.elderKidSuitability}</div>
            </div>
          ` : ""}

          ${day.meals.dinner ? `
            <div class="dining-card" style="background:#FFF7ED; border-color:#FFEDD5;">
              <div class="dining-title" style="color:#9A3412;">${texts.dinner}: ${day.meals.dinner.restaurantName}</div>
              <div style="font-size: 12px; color: #9A3412; margin-bottom: 4px;">${texts.cuisine}: ${day.meals.dinner.cuisineStyle} | ${texts.budget}: ${day.meals.dinner.perPersonBudget}</div>
              <div>
                ${day.meals.dinner.recommendedDishes.map((dish) => `<span class="dish-tag" style="background:#FFEDD5; color:#C2410C;">${dish}</span>`).join("")}
              </div>
              <div style="font-size: 12px; color: #C2410C; margin-top: 6px;">${texts.suitability}: ${day.meals.dinner.elderKidSuitability}</div>
            </div>
          ` : ""}

          <!-- Daily Tips -->
          ${day.dailyTips && day.dailyTips.length > 0 ? `
          <div class="card" style="margin-top: 14px;">
            <div class="card-title">${texts.dailyTips}</div>
            <ul class="tips-list">
              ${day.dailyTips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
          </div>
          ` : ""}
        </div>
      `).join("")}
    </div>

    <!-- Emergency contacts footer -->
    ${plan.emergencyContacts && plan.emergencyContacts.length > 0 ? `
    <div class="content-section" style="border-top: 1px solid #E2E8F0; margin-top: 20px;">
      <h3 style="font-size: 14px; font-weight: 700; color: #475569; margin-bottom: 8px;">${texts.emergency}</h3>
      ${plan.emergencyContacts.map((c) => `
        <div style="font-size: 12px; color: #64748B; margin-bottom: 4px;">
          <strong>${c.role}:</strong> ${c.phone} (${c.note})
        </div>
      `).join("")}
    </div>
    ` : ""}
  </div>

  <script>
    function switchDay(dayNum) {
      document.querySelectorAll('.day-section').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      
      const target = document.getElementById('dayContent_' + dayNum);
      if (target) target.style.display = 'block';

      const buttons = document.querySelectorAll('.tab-btn');
      buttons[dayNum - 1]?.classList.add('active');
    }
  </script>
</body>
</html>`;
}
