import { TravelPlan } from "@/types/itinerary";

/**
 * Generates a self-contained, offline-ready single HTML document for a travel plan
 */
export function generateOfflineHtml(plan: TravelPlan): string {
  const jsonString = JSON.stringify(plan).replace(/</g, "\\u003c");

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${plan.meta.tripTitle} · 离线完整攻略</title>
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
    .header { background: linear-gradient(135deg, #1E40AF 0%, #2563EB 100%); color: #fff; padding: 24px 20px; position: sticky; top: 0; z-index: 50; }
    .header h1 { font-size: 20px; font-weight: 700; margin-bottom: 8px; line-height: 1.3; }
    .badges { display: flex; flex-wrap: wrap; gap: 6px; }
    .badge { background: rgba(255,255,255,0.2); backdrop-filter: blur(4px); padding: 3px 8px; border-radius: 6px; font-size: 12px; }
    
    .nav-tabs { display: flex; overflow-x: auto; background: #fff; border-bottom: 1px solid var(--border); padding: 8px 16px; gap: 8px; position: sticky; top: 92px; z-index: 40; }
    .nav-tabs::-webkit-scrollbar { display: none; }
    .tab-btn { padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; border: 1px solid var(--border); background: #fff; color: var(--text-muted); cursor: pointer; white-space: nowrap; }
    .tab-btn.active { background: var(--primary); color: #fff; border-color: var(--primary); font-weight: 600; }
    
    .content-section { padding: 16px; }
    .card { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.03); }
    .card-title { font-size: 16px; font-weight: 700; color: var(--text-main); display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
    
    .rest-banner { background: #FEF3C7; border: 1px solid #FDE68A; border-radius: 10px; padding: 12px 14px; margin-bottom: 14px; color: #92400E; font-size: 13px; display: flex; align-items: center; gap: 10px; }
    
    .timeline { position: relative; padding-left: 20px; margin-top: 10px; }
    .timeline::before { content: ""; position: absolute; left: 6px; top: 8px; bottom: 8px; width: 2px; background: #E2E8F0; }
    .timeline-node { position: relative; margin-bottom: 18px; }
    .timeline-dot { position: absolute; left: -20px; top: 4px; width: 14px; height: 14px; border-radius: 50%; background: var(--primary); border: 2px solid #fff; box-shadow: 0 0 0 2px var(--primary-light); }
    .stop-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 4px; }
    .stop-name { font-size: 15px; font-weight: 700; color: var(--text-main); }
    .stop-time { font-size: 12px; color: var(--primary); font-weight: 600; background: var(--primary-light); padding: 2px 6px; border-radius: 4px; }
    
    .dropoff-badge { background: #F1F5F9; border-left: 3px solid var(--primary); padding: 6px 10px; border-radius: 0 6px 6px 0; font-size: 12px; color: #334155; margin: 6px 0; }
    .reservation-badge { background: #FEF2F2; border: 1px solid #FEE2E2; color: #DC2626; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; margin: 4px 0; display: inline-block; }
    
    .transit-block { background: #F8FAFC; border: 1px dashed #CBD5E1; border-radius: 8px; padding: 8px 12px; margin: 10px 0 14px -6px; font-size: 12px; color: #475569; display: flex; align-items: center; gap: 8px; }
    
    .dining-card { background: #F0FDF4; border: 1px solid #DCFCE7; border-radius: 10px; padding: 12px 14px; margin-top: 10px; }
    .dining-title { font-weight: 700; color: #166534; font-size: 14px; margin-bottom: 4px; }
    .dish-tag { display: inline-block; background: #DCFCE7; color: #15803D; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-right: 4px; margin-top: 4px; }
    
    .tips-list { list-style: none; }
    .tips-list li { font-size: 13px; color: #475569; margin-bottom: 6px; padding-left: 16px; position: relative; }
    .tips-list li::before { content: "•"; position: absolute; left: 4px; color: var(--primary); font-weight: bold; }
    
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
  <div class="offline-bar">✓ 已完全缓存 · 无需网络离线运行</div>
  <div class="container">
    <header class="header">
      <h1>${plan.meta.tripTitle}</h1>
      <div class="badges">
        <span class="badge">${plan.meta.durationDays} 天行程</span>
        <span class="badge">${plan.meta.budgetTier === "budget" ? "高性价比" : plan.meta.budgetTier === "comfort" ? "品质舒适" : "奢华体验"}</span>
        <span class="badge">${plan.meta.transportMode === "charter_taxi" ? "包车/打车优先" : "公共交通"}</span>
        ${plan.meta.travelerProfile.map((t) => `<span class="badge">${t}</span>`).join("")}
      </div>
    </header>

    <div class="content-section">
      <div class="card">
        <div class="card-title"> 行程亮点与特色</div>
        <ul class="tips-list">
          ${plan.overview.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
      </div>

      <div class="card">
        <div class="card-title"> 交通与后勤建议</div>
        <p style="font-size: 13px; color: #475569;">${plan.overview.logisticsSummary}</p>
      </div>

      <div class="card">
        <div class="card-title"> 提前预约清单</div>
        ${plan.reservationChecklist.map((r) => `
          <div style="border-bottom: 1px solid #F1F5F9; padding: 8px 0;">
            <div style="font-size: 13px; font-weight: 600; display: flex; justify-content: space-between;">
              <span>${r.spotName}</span>
              <span style="color: #2563EB;">提前 ${r.daysInAdvance} 天</span>
            </div>
            <div style="font-size: 12px; color: #64748B; margin-top: 2px;">
              渠道: ${r.platform} | 票价: ${r.ticketPrice} | ${r.requiresRealNameId ? "实名身份证" : "免证件"}
            </div>
            <div style="font-size: 11px; color: #059669; margin-top: 2px;">建议: ${r.bookingTip}</div>
          </div>
        `).join("")}
      </div>
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
            <div style="font-size: 13px; color: #2563EB; font-weight: 500;">主题: ${day.theme}</div>
          </div>

          ${day.hotelRestBlock && day.hotelRestBlock.enabled ? `
            <div class="rest-banner">
              <div>
                <strong>午间休整充电 (${day.hotelRestBlock.recommendedTime})</strong>
                <div style="font-size: 12px; margin-top: 2px;">${day.hotelRestBlock.reason}</div>
              </div>
            </div>
          ` : ""}

          <div class="timeline">
            ${day.timeline.map((item) => {
              if (item.type === "transit") {
                return `
                  <div class="transit-block">
                    <span>➔</span>
                    <div>
                      <strong>${item.fromStop} ➔ ${item.toStop}</strong>
                      <span style="color: #2563EB; margin-left: 6px;">${item.mode === "taxi" ? "打车" : item.mode === "charter" ? "包车" : "步行"}约 ${item.estimatedMinutes} 分钟 (${item.distanceKm} km)</span>
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
                      <strong>落客导航点:</strong> ${item.dropOffPoint}
                    </div>

                    ${item.reservationRequired ? `
                      <div class="reservation-badge">
                        需提前预约: ${item.reservationChannel || "请提前查看官方通道"}
                      </div>
                    ` : ""}

                    <p style="font-size: 13px; color: #475569; margin: 4px 0;">${item.description}</p>
                    
                    ${item.elderKidNotes ? `
                      <div style="font-size: 12px; color: #059669; margin-top: 4px;">
                        • 无障碍/照料建议: ${item.elderKidNotes}
                      </div>
                    ` : ""}

                    ${item.photoTip ? `
                      <div style="font-size: 12px; color: #D97706; margin-top: 2px;">
                        • 拍照位点: ${item.photoTip}
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
              <div class="dining-title">午餐推荐: ${day.meals.lunch.restaurantName}</div>
              <div style="font-size: 12px; color: #166534; margin-bottom: 4px;">菜系: ${day.meals.lunch.cuisineStyle} | 人均: ${day.meals.lunch.perPersonBudget}</div>
              <div>
                ${day.meals.lunch.recommendedDishes.map((dish) => `<span class="dish-tag">${dish}</span>`).join("")}
              </div>
              <div style="font-size: 12px; color: #15803D; margin-top: 6px;">适宜人群: ${day.meals.lunch.elderKidSuitability}</div>
            </div>
          ` : ""}

          ${day.meals.dinner ? `
            <div class="dining-card" style="background:#FFF7ED; border-color:#FFEDD5;">
              <div class="dining-title" style="color:#9A3412;">晚餐推荐: ${day.meals.dinner.restaurantName}</div>
              <div style="font-size: 12px; color: #9A3412; margin-bottom: 4px;">菜系: ${day.meals.dinner.cuisineStyle} | 人均: ${day.meals.dinner.perPersonBudget}</div>
              <div>
                ${day.meals.dinner.recommendedDishes.map((dish) => `<span class="dish-tag" style="background:#FFEDD5; color:#C2410C;">${dish}</span>`).join("")}
              </div>
              <div style="font-size: 12px; color: #C2410C; margin-top: 6px;">适宜人群: ${day.meals.dinner.elderKidSuitability}</div>
            </div>
          ` : ""}

          <!-- Daily Tips -->
          <div class="card" style="margin-top: 14px;">
            <div class="card-title"> 当日贴士</div>
            <ul class="tips-list">
              ${day.dailyTips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
          </div>
        </div>
      `).join("")}
    </div>

    <!-- Emergency contacts footer -->
    <div class="content-section" style="border-top: 1px solid #E2E8F0; margin-top: 20px;">
      <h3 style="font-size: 14px; font-weight: 700; color: #475569; margin-bottom: 8px;">紧急联络与医疗保障</h3>
      ${plan.emergencyContacts.map((c) => `
        <div style="font-size: 12px; color: #64748B; margin-bottom: 4px;">
          <strong>${c.role}:</strong> ${c.phone} (${c.note})
        </div>
      `).join("")}
    </div>
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
