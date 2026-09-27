const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'source_qingdao.html');
let content = fs.readFileSync(targetFile, 'utf8');

console.log('Original content length:', content.length);

// ========================================================
// 1. REMOVE "09:30 出发" PILL IN HEADER & CLEAN TITLES
// ========================================================
content = content.replace(
  '<span class="time-badge">09:30 出发</span>\n',
  ''
);
content = content.replace(
  '<span class="time-badge">09:30 出发</span>',
  ''
);

// Clean up section titles
content = content.replaceAll(
  '<div class="section-title">核心时段安排 (最早09:30出发)</div>',
  '<div class="section-title">核心行程节奏</div>'
);
content = content.replaceAll(
  '<div class="section-title">核心时段安排 (09:30后出发)</div>',
  '<div class="section-title">核心行程节奏</div>'
);
content = content.replaceAll(
  '<div class="section-title">核心时段安排 (去崂山 · 09:30后出发)</div>',
  '<div class="section-title">核心行程节奏 (去崂山方案)</div>'
);
content = content.replaceAll(
  '<div class="section-title">核心时段安排 (不去崂山 · 市区奢享度假备选 · 09:30后出发)</div>',
  '<div class="section-title">核心行程节奏 (市区舒享度假备选)</div>'
);

// Clean tags in daily summaries
content = content.replace(
  '<span class="sh-tag">09:30后自然出发</span>',
  '<span class="sh-tag">海天大桥高空观澜</span>'
);
content = content.replace(
  '<span class="sh-tag">09:30 慢享出发</span>',
  '<span class="sh-tag">八大关百年法桐</span>'
);
content = content.replace(
  '<span class="sh-tag">09:30 睡饱启程</span>',
  '<span class="sh-tag">崂山太清仙境</span>'
);
content = content.replace(
  '<span class="sh-tag">09:30 从容出发</span>',
  '<span class="sh-tag">啤酒博览全直梯</span>'
);
content = content.replace(
  '<span class="sh-tag">09:30 自然醒早餐</span>',
  '<span class="sh-tag">海天晨光远眺</span>'
);


// ========================================================
// 2. REFACTOR PHOTO SCALE (aspect-ratio: 16 / 9)
// ========================================================
content = content.replace(
  /\.photo-img-wrap\s*\{[\s\S]*?background:\s*#CBD5E1;\s*\}/,
  `.photo-img-wrap {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      max-height: 280px;
      overflow: hidden;
      background: var(--bg-muted);
      border-radius: var(--radius-sm);
    }`
);

content = content.replace(
  /\.spot-img\s*\{[\s\S]*?\.spot-img:hover\s*\{[\s\S]*?\}/,
  `.spot-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      transition: transform 0.3s ease;
    }
    .spot-img:hover {
      transform: scale(1.02);
    }`
);


// ========================================================
// 3. ADD CSS FOR TRANSIT STEPS
// ========================================================
const transitCss = `
    /* Transit Step Connector */
    .transit-step {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: -2px 0 12px 0;
      padding: 0 10px;
    }
    .ts-line {
      flex: 1;
      height: 1px;
      background: var(--border-hairline);
    }
    .ts-badge {
      font-size: 11px;
      font-weight: 500;
      color: var(--text-muted);
      background: var(--bg-subtle);
      border: 1px solid var(--border-hairline);
      padding: 3px 10px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .ts-badge svg {
      width: 13px;
      height: 13px;
      stroke: var(--brand-accent);
      fill: none;
      stroke-width: 2;
    }
`;

content = content.replace(
  '/* Spot Photo Card */',
  `${transitCss}\n    /* Spot Photo Card */`
);


// ========================================================
// 4. PURGE "安歇" WORDING
// ========================================================
content = content.replaceAll(
  '<span>【每日安歇】市南酒店午休调养</span>',
  '<span>酒店午休调养 (身心充分松弛)</span>'
);
content = content.replaceAll(
  '<span>【慢调休整】驱车回市南酒店卧床安歇</span>',
  '<span>【慢调休整】驱车回酒店午休</span>'
);
content = content.replaceAll(
  '卧床安歇',
  '卧床午休'
);
content = content.replaceAll(
  '安歇',
  '午休'
);


// ========================================================
// 5. HELPER FOR TRANSIT STEP HTML
// ========================================================
function makeTransitStep(text) {
  return `
      <div class="transit-step">
        <div class="ts-line"></div>
        <div class="ts-badge">
          <svg viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
          <span>${text}</span>
        </div>
        <div class="ts-line"></div>
      </div>
  `;
}


// ========================================================
// 6. REFACTOR DAY 1 ACTIVITIES, TIMESTAMPS & RICH DINNER CARD
// ========================================================
content = content.replace(
  '<span class="act-time-pill">09:30 - 12:00</span>',
  '<span class="act-time-pill">自驾跨海 ~2h</span>'
);

content = content.replace(
  '<!-- Spot Photo Card -->\n            <div class="spot-photo-card">\n              <div class="photo-img-wrap">\n                <img src="./images/spot_bridge.jpg"',
  `<!-- Spot Photo Card -->\n            <div class="spot-photo-card">\n              <div class="photo-img-wrap">\n                <img src="./images/spot_bridge.jpg"`
);

// Transit 1: After Bridge arrival to Lunch
content = content.replace(
  '<!-- Spot Photo Card -->\n            <div class="spot-photo-card">\n              <div class="photo-img-wrap">\n                <img src="./images/spot_bridge.jpg" alt="胶州湾跨海大桥" loading="lazy" class="spot-img" onerror="this.src=\'https://images.unsplash.com/photo-1545649466-9b578c773950?w=960&q=80\'" />\n                <div class="photo-badge">最佳机位</div>\n              </div>\n              <div class="photo-guide-body">\n                <div class="pg-item">\n                  <span class="pg-label">取景机位:</span>\n                  <span class="pg-val">跨海大桥主桥高架段，车内副驾或后排顺光拍摄桥索飞跨海面，低角度平视蔚蓝海浪。</span>\n                </div>\n                <div class="pg-item">\n                  <span class="pg-label">最佳光线:</span>\n                  <span class="pg-val">10:30 - 11:30 上午顺光，海水呈现澄澈深海蓝，白色斜拉桥塔巍峨醒目。</span>\n                </div>\n                <div class="pg-item">\n                  <span class="pg-label">随行留影:</span>\n                  <span class="pg-val">长辈全程安坐车内软座，手扶窗框侧身看海抓拍，平稳安全、零体力消耗。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>',
  `<!-- Spot Photo Card -->\n            <div class="spot-photo-card">\n              <div class="photo-img-wrap">\n                <img src="./images/spot_bridge.jpg" alt="胶州湾跨海大桥" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1545649466-9b578c773950?w=960&q=80'" />\n                <div class="photo-badge">最佳机位</div>\n              </div>\n              <div class="photo-guide-body">\n                <div class="pg-item">\n                  <span class="pg-label">取景机位:</span>\n                  <span class="pg-val">跨海大桥主桥高架段，车内副驾或后排顺光拍摄桥索飞跨海面，低角度平视蔚蓝海浪。</span>\n                </div>\n                <div class="pg-item">\n                  <span class="pg-label">最佳光线:</span>\n                  <span class="pg-val">上午顺光，海水呈现澄澈深海蓝，白色斜拉桥塔巍峨醒目。</span>\n                </div>\n                <div class="pg-item">\n                  <span class="pg-label">随行留影:</span>\n                  <span class="pg-val">长辈全程安坐车内软座，手扶窗框侧身看海抓拍，平稳安全、零体力消耗。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n${makeTransitStep('抵达市南沿海酒店办理入住 · 步行 3m 享用午餐')}`
);

content = content.replace(
  '<span class="act-time-pill">12:15 - 13:15</span>',
  '<span class="act-time-pill">清淡午餐 ~1h</span>'
);

// Transit 2: After Lunch to Nap
content = content.replace(
  '<span>酒店周边舒享清淡午餐</span>\n        </div>\n        <div class="act-tagline">初到青岛午餐以温润软烂为宜。在市南酒店中餐厅或近旁名店品尝热海鲜疙瘩汤、清蒸黄花鱼或清淡面食，快速补充能量，避免长辈胃肠负担。</div>\n      </div>',
  `<span>酒店周边舒享清淡午餐</span>\n        </div>\n        <div class="act-tagline">初到青岛午餐以温润软烂为宜。在市南酒店中餐厅或近旁名店品尝热海鲜疙瘩汤、清蒸黄花鱼或清淡面食，快速补充能量，避免长辈胃肠负担。</div>\n      </div>\n${makeTransitStep('乘直梯回房 · 拉上遮光帘充分休整')}`
);

content = content.replace(
  '<span class="act-time-pill">13:30 - 15:30</span>',
  '<span class="act-time-pill">酒店午休 ~2h</span>'
);

// Transit 3: After Nap to Taipingjiao Park
content = content.replace(
  '<span>【慢调休整】酒店客房卧床午休（养精蓄锐）</span>\n        </div>\n        <div class="act-tagline">自驾首日最忌疲惫。在市南酒店房间拉上遮光帘卧床休息两小时，洗脸小憩，泡一杯温热绿茶，让长辈身心充分放松。</div>\n      </div>',
  `<span>【慢调休整】酒店客房卧床午休（养精蓄锐）</span>\n        </div>\n        <div class="act-tagline">自驾首日最忌疲惫。在市南酒店房间拉上遮光帘卧床休息两小时，洗脸小憩，泡一杯温热绿茶，让长辈身心充分放松。</div>\n      </div>\n${makeTransitStep('自驾 ~10m · 3.5 km 前往太平角海滨')}`
);

content = content.replace(
  '<span class="act-time-pill">16:00 - 17:30</span>',
  '<span class="act-time-pill">海滨漫步 ~1.5h</span>'
);

// Transit 4: After Taipingjiao to Dinner
content = content.replace(
  '<span>老人坐在原木长椅上，侧身看夕阳洒在海面，抓拍海风吹拂发丝的温暖笑容。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>',
  `<span>长辈坐在原木长椅上，侧身看夕阳洒在海面，抓拍海风吹拂发丝的温暖笑容。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n${makeTransitStep('自驾 ~12m · 4.2 km 前往晚宴餐厅')}`
);

// Upgraded Day 1 Dinner Card
const richDay1Dinner = `
      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">海鲜晚宴 ~1.5h</span>
          <span class="act-intensity intensity-flat">长辈暖胃晚宴</span>
        </div>
        <div class="act-name">
          <span>开海红岛海鲜虾水饺（江西路旗舰店）</span>
          <a href="dianping://searchshoplist?keyword=%E5%BC%80%E6%B5%B7%E7%BA%A2%E5%B2%9B%E6%B5%B7%E9%B2%9C%E8%99%BE%E6%B0%B4%E9%A5%BA%20%E6%B1%9F%E8%A5%BF%E8%B7%AF" onclick="openDianping('开海红岛海鲜虾水饺 江西路', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
          <span style="color:#0F172A; font-size:12px; font-weight:700;">4.8分</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">大众点评必吃榜常青树</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥130 - 180</span>
        </div>
        <div class="act-tagline">选用整只新鲜红岛对虾手工生剥包入水饺，颗颗饱满爆汁、鲜甜不腥；搭配清蒸野生大黄鱼、原汁海鲜疙瘩汤与温拌小海鲜，温热适口，极受长辈青睐。</div>

        <div class="act-special-grid">
          <div class="as-item">
            <span class="as-item-label">长辈优选:</span>
            <span class="as-item-val">招牌开海虾水饺（每只含2-3只整虾）、清蒸大黄鱼（肉细无杂刺）、原汁海鲜疙瘩汤（极养胃温暖）、手撕海生菜。</span>
          </div>
          <div class="as-item">
            <span class="as-item-label">环境舒适:</span>
            <span class="as-item-val">全平步道大门无台阶阻隔，室内空调柔和恒温，可提前预订清幽小包房。</span>
          </div>
          <div class="as-item">
            <span class="as-item-label">泊车指引:</span>
            <span class="as-item-val">自有地面宽敞院落停车场，有专人指挥倒车，车位充裕，下车平步直接进门。</span>
          </div>
        </div>
      </div>
`;

content = content.replace(
  /<div class="act-card">\s*<div class="act-header">\s*<span class="act-time-pill">18:00 - 19:30<\/span>[\s\S]*?原汁海鲜疙瘩汤（极养胃温暖）。<\/span>\s*<\/div>\s*<\/div>\s*<\/div>/m,
  richDay1Dinner.trim()
);


// ========================================================
// 7. REFACTOR DAY 2 ACTIVITIES, TIMESTAMPS & RICH DINING
// ========================================================
content = content.replace(
  '<span class="act-time-pill">09:30 - 11:00</span>',
  '<span class="act-time-pill">法桐漫步 ~1.5h</span>'
);

// Transit Day 2: Badaguan to Governor House
content = content.replace(
  '<span>殿旁古木茶亭设有宽敞木椅，长辈手捧一杯崂山绿茶安坐，红墙与千年古木为衬，仙风道骨。</span>',
  '<span>殿旁古木茶亭设有宽敞木椅，长辈手捧一杯崂山绿茶安坐，红墙与千年古木为衬，仙风道骨。</span>'
);

content = content.replace(
  '<!-- Spot Photo Card (居庸关路) -->\n            <div class="spot-photo-card">\n              <div class="photo-img-wrap">\n                <img src="./images/spot_badaguan.jpg" alt="八大关居庸关路金秋法桐林荫" loading="lazy" class="spot-img" onerror="this.src=\'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=960&q=80\'" />\n                <div class="photo-badge">最佳机位</div>\n              </div>\n              <div class="photo-guide-body">\n                <div class="pg-item">\n                  <span class="pg-label">取景机位:</span>\n                  <span class="pg-val">居庸关路与正阳关路交汇口往南50米，长焦平视拍摄两侧百年法国梧桐相拥形成的“金色树冠拱门”。</span>\n                </div>\n                <div class="pg-item">\n                  <span class="pg-label">最佳光线:</span>\n                  <span class="pg-val">10:00 - 11:00 晨光穿透金黄树叶，光影斑驳漫射，人脸受光均匀柔和。</span>\n                </div>\n                <div class="pg-item">\n                  <span class="pg-label">随行留影:</span>\n                  <span class="pg-val">长辈慢步在松软平整的金黄落叶路缘，侧身漫步抓拍，落叶与德式花岗岩矮墙为衬，优雅大方。</span>\n                </div>\n              </div>\n            </div>\n          </div>',
  `<!-- Spot Photo Card (居庸关路) -->\n            <div class="spot-photo-card">\n              <div class="photo-img-wrap">\n                <img src="./images/spot_badaguan.jpg" alt="八大关居庸关路金秋法桐林荫" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=960&q=80\'" />\n                <div class="photo-badge">最佳机位</div>\n              </div>\n              <div class="photo-guide-body">\n                <div class="pg-item">\n                  <span class="pg-label">取景机位:</span>\n                  <span class="pg-val">居庸关路与正阳关路交汇口往南50米，长焦平视拍摄两侧百年法国梧桐相拥形成的“金色树冠拱门”。</span>\n                </div>\n                <div class="pg-item">\n                  <span class="pg-label">最佳光线:</span>\n                  <span class="pg-val">晨光穿透金黄树叶，光影斑驳漫射，人脸受光均匀柔和。</span>\n                </div>\n                <div class="pg-item">\n                  <span class="pg-label">随行留影:</span>\n                  <span class="pg-val">长辈慢步在松软平整的金黄落叶路缘，侧身漫步抓拍，落叶与德式花岗岩矮墙为衬，优雅大方。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n${makeTransitStep('自驾 ~8m · 2.6 km 前往迎宾馆古堡')}`
);

content = content.replace(
  '<span class="act-time-pill">11:15 - 12:15</span>',
  '<span class="act-time-pill">古堡参观 ~1h</span>'
);

// Transit Day 2: Governor House to Lunch (Qianhaiyan)
content = content.replace(
  '<span>长辈安坐于南花园长椅或草坪缓步，以巍峨城堡红瓦为背景留影，气场庄严典雅。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>',
  `<span>长辈安坐于南花园长椅或草坪缓步，以巍峨城堡红瓦为背景留影，气场庄严典雅。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n${makeTransitStep('自驾 ~10m · 3.6 km 前往老城家常午宴')}`
);

// Upgraded Day 2 Lunch (Qianhaiyan)
const richDay2Lunch = `
      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">舒享午宴 ~1h</span>
          <span class="act-intensity intensity-flat">老城家常风味</span>
        </div>
        <div class="act-name">
          <span>前海沿老青岛家常菜（市南旗舰店）</span>
          <a href="dianping://searchshoplist?keyword=%E5%89%8D%E6%B5%B7%E6%B2%BF%20%E9%A6%99%E6%B8%AF%E4%B8%AD%E8%B7%AF" onclick="openDianping('前海沿 香港中路', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
          <span style="color:#0F172A; font-size:12px; font-weight:700;">4.7分</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">青岛本地家常老字号</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥85 - 115</span>
        </div>
        <div class="act-tagline">老青岛大虾烧白菜软烂入味，鲜美白菜吸满高汤与虾油；手打鲅鱼丸鲜嫩无细刺，清澈温热高汤让长辈胃口大开。</div>

        <div class="act-special-grid">
          <div class="as-item">
            <span class="as-item-label">长辈优选:</span>
            <span class="as-item-val">老青岛大虾烧白菜（软烂鲜甜）、手打清汤鲅鱼丸（肉质如豆腐般细滑）、葱油鲜海螺、原味海苔饼。</span>
          </div>
          <div class="as-item">
            <span class="as-item-label">泊车指引:</span>
            <span class="as-item-val">餐厅配有地下停车位，直梯上下，地面全平无门槛。</span>
          </div>
        </div>
      </div>
${makeTransitStep('自驾 ~8m · 回市南酒店深度午休避峰')}
`;

content = content.replace(
  /<div class="act-card">\s*<div class="act-header">\s*<span class="act-time-pill">12:30 - 13:30<\/span>[\s\S]*?温热高汤让长辈胃口大开。<\/div>\s*<\/div>/m,
  richDay2Lunch.trim()
);

content = content.replace(
  '<span class="act-time-pill">13:45 - 15:45</span>',
  '<span class="act-time-pill">酒店午休 ~2h</span>'
);

// Transit Day 2: After Nap to Xiaoyushan
content = content.replace(
  '<span>【深度休整】回酒店深度午休（避开午后日照）</span>\n        </div>\n        <div class="act-tagline">上午漫步两小时后，回酒店卧床静养两小时，午睡后饮一杯热茶，体力满格。</div>\n      </div>',
  `<span>【深度休整】回酒店深度午休（避开午后日照）</span>\n        </div>\n        <div class="act-tagline">上午漫步两小时后，回酒店卧床静养两小时，午睡后饮一杯热茶，体力满格。</div>\n      </div>\n${makeTransitStep('自驾 ~12m · 4.2 km 前往小鱼山公园 (福山支路南门)')}`
);

content = content.replace(
  '<span class="act-time-pill">16:00 - 17:15</span>',
  '<span class="act-time-pill">缓坡登高 ~1h</span>'
);

// Transit Day 2: Xiaoyushan to Dinner (Chunhelou)
content = content.replace(
  '<span>长辈站在平台汉白玉栏杆旁，正脸受光均匀，背景是经典的“红瓦绿树碧海蓝天”名片级画卷。</span>\n                </div>\n              </div>\n            </div>\n          </div>',
  `<span>长辈站在平台汉白玉栏杆旁，正脸受光均匀，背景是经典的“红瓦绿树碧海蓝天”名片级画卷。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n${makeTransitStep('自驾 ~10m · 3.1 km 前往百年春和楼总店')}`
);

// Upgraded Day 2 Dinner (Chunhelou)
const richDay2Dinner = `
      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">鲁菜晚宴 ~1.5h</span>
          <span class="act-intensity intensity-flat">百年名门晚宴</span>
        </div>
        <div class="act-name">
          <span>春和楼（百年鲁菜名店 · 中山路总店贵宾包厢）</span>
          <a href="dianping://searchshoplist?keyword=%E6%98%A5%E5%92%8C%E6%A5%BC%20%E4%B8%AD%E5%B1%B1%E8%B7%AF" onclick="openDianping('春和楼 中山路', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
          <span style="color:#0F172A; font-size:12px; font-weight:700;">4.7分</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">始于1891年中华老字号</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥160 - 240</span>
        </div>
        <div class="act-tagline">始于1891年的中华老字号。招牌香酥鸡炸得骨酥肉烂，筷子轻拨即骨肉分离，皮香肉嫩多汁，长辈极好咀嚼；经典葱烧大辽参浓油赤酱，补虚温中养胃。</div>

        <div class="act-special-grid">
          <div class="as-item">
            <span class="as-item-label">长辈优选:</span>
            <span class="as-item-val">非遗名菜香酥鸡（招牌必点）、葱烧大辽参、经典油爆鲜海螺片、海鲜全家福砂锅热丸汤。</span>
          </div>
          <div class="as-item">
            <span class="as-item-label">环境舒适:</span>
            <span class="as-item-val">提前锁订独立贵宾包厢，私密安静避开外堂喧嚣，乘直梯直达包房层。</span>
          </div>
          <div class="as-item">
            <span class="as-item-label">泊车指引:</span>
            <span class="as-item-val">自驾停在中山路地下停车场，步行 2 分钟平路至餐厅，有直梯代步。</span>
          </div>
        </div>
      </div>
`;

content = content.replace(
  /<div class="act-card">\s*<div class="act-header">\s*<span class="act-time-pill">17:45 - 19:30<\/span>[\s\S]*?乘直梯上行。<\/span>\s*<\/div>\s*<\/div>\s*<\/div>/m,
  richDay2Dinner.trim()
);


// ========================================================
// 8. REFACTOR DAY 3 (OPTION A & B)
// ========================================================
content = content.replace(
  '<span class="act-time-pill">09:30 - 11:00</span>',
  '<span class="act-time-pill">海湾广场 ~1.5h</span>'
);
content = content.replace(
  '<span class="act-time-pill">11:15 - 12:45</span>',
  '<span class="act-time-pill">太清品茗 ~1.5h</span>'
);
content = content.replace(
  '<span class="act-time-pill">13:00 - 14:15</span>',
  '<span class="act-time-pill">农家午宴 ~1h</span>'
);
content = content.replace(
  '<span class="act-time-pill">15:15 - 16:45</span>',
  '<span class="act-time-pill">平缓海栈道 ~1.5h</span>'
);

content = content.replace(
  '<span class="act-time-pill">09:30 - 11:30</span>',
  '<span class="act-time-pill">雕塑园漫步 ~2h</span>'
);
content = content.replace(
  '<span class="act-time-pill">12:00 - 13:45</span>',
  '<span class="act-time-pill">海景烤鸭 ~1.5h</span>'
);
content = content.replace(
  '<span class="act-time-pill">14:00 - 15:45</span>',
  '<span class="act-time-pill">酒店午休 ~2h</span>'
);
content = content.replace(
  '<span class="act-time-pill">16:15 - 17:30</span>',
  '<span class="act-time-pill">云端茶歇 ~1h</span>'
);


// ========================================================
// 9. REFACTOR DAY 4 & RICH ST. REGIS DINNER CARD
// ========================================================
content = content.replace(
  '<span class="act-time-pill">09:30 - 11:30</span>',
  '<span class="act-time-pill">博览全直梯 ~2h</span>'
);

// Transit Day 4: Beer Museum to Lunch
content = content.replace(
  '<span>在红砖原浆酒桶吧台旁，长辈端起新鲜麦香的未过滤啤酒合影，神态生动。</span>\n                </div>\n              </div>\n            </div>\n          </div>',
  `<span>在红砖原浆酒桶吧台旁，长辈端起新鲜麦香的未过滤啤酒合影，神态生动。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n${makeTransitStep('步行 3m · 登州路南门老街海鲜')}`
);

content = content.replace(
  '<span class="act-time-pill">12:00 - 13:30</span>',
  '<span class="act-time-pill">蒸汽海鲜 ~1.5h</span>'
);

// Transit Day 4: Lunch to Nap
content = content.replace(
  '<span>登州路百年老街 · 纯蒸汽原汁温热海鲜</span>',
  `<span>登州路百年老街 · 纯蒸汽原汁温热海鲜</span>`
);

content = content.replace(
  '清蒸海鱼（刺少肉厚）、温热海鲜粥配大虾、现场高温蒸汽活蒸各类贝类，清鲜养胃无生冷风险。</div>\n      </div>',
  `清蒸海鱼（刺少肉厚）、温热海鲜粥配大虾、现场高温蒸汽活蒸各类贝类，清鲜养胃无生冷风险。</div>\n      </div>\n${makeTransitStep('自驾 ~12m · 回市南酒店深度午休避峰')}`
);

content = content.replace(
  '<span class="act-time-pill">13:45 - 15:45</span>',
  '<span class="act-time-pill">酒店午休 ~2h</span>'
);

// Transit Day 4: Nap to Yacht
content = content.replace(
  '<span>酒店午休调养 (身心充分松弛)</span>\n        </div>\n        <div class="act-tagline">上午在博物馆走动后，中午在酒店房间平躺小睡，保持充沛体力迎接傍晚的海上游船。</div>\n      </div>',
  `<span>酒店午休调养 (身心充分松弛)</span>\n        </div>\n        <div class="act-tagline">上午在博物馆走动后，中午在酒店房间平躺小睡，保持充沛体力迎接傍晚的海上游船。</div>\n      </div>\n${makeTransitStep('自驾 ~8m · 2.6 km 前往奥帆中心码头')}`
);

content = content.replace(
  '<span class="act-time-pill">16:00 - 17:15</span>',
  '<span class="act-time-pill">豪华出海 ~1h</span>'
);

// Transit Day 4: Yacht to St. Regis
content = content.replace(
  '<span>长辈全程安坐白色皮质遮阳沙发，举起小面包招引海鸥抓拍，海风轻抚，既体面又舒适。</span>\n                </div>\n              </div>\n            </div>\n          </div>',
  `<span>长辈全程安坐白色皮质遮阳沙发，举起小面包招引海鸥抓拍，海风轻抚，既体面又舒适。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n${makeTransitStep('自驾 ~6m · 2.2 km 直达海天中心')}`
);

// Upgraded Day 4 St. Regis Dinner
const richDay4Dinner = `
      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">瑞吉晚宴 ~2h</span>
          <span class="act-intensity intensity-flat">海天瑞吉宴庭 · 长辈感恩宴</span>
        </div>
        <div class="act-name">
          <span>青岛海天瑞吉酒店 · 宴庭中餐厅</span>
          <a href="dianping://searchshoplist?keyword=%E9%9D%92%E5%B2%9B%20%E6%B5%B7%E5%A4%A9%E7%91%9E%E5%90%89%E9%85%92%E5%BA%97%20%E5%AE%B4%E5%BA%AD" onclick="openDianping('青岛 海天瑞吉 宴庭', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
          <span style="color:#0F172A; font-size:12px; font-weight:700;">4.9分</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">黑珍珠入围 · 云端海景</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥500 - 800</span>
        </div>
        <div class="act-tagline">全青岛顶奢中餐标杆（4.9分）。居高临下俯瞰浮山湾与海平线晚霞。五星级酒店管家式服务，私密隔音观海大包间，全定制温热养胃名贵粤鲁融合美馔。</div>

        <div class="act-special-grid">
          <div class="as-item">
            <span class="as-item-label">长辈优选:</span>
            <span class="as-item-val">黑松露脆皮片皮鸭（香酥不柴）、浓汤花胶鸡煲（金黄温润胶质满满极养胃）、野生大黄鱼煨手工面、清酒慢蒸鲜鲍鱼。</span>
          </div>
          <div class="as-item">
            <span class="as-item-label">环境舒适:</span>
            <span class="as-item-val">独立观海私密大包间，管家式一对一服务，全程无障碍进入，隔音极佳。</span>
          </div>
          <div class="as-item">
            <span class="as-item-label">泊车指引:</span>
            <span class="as-item-val">海天中心地下停车场（数千车位），乘专属高速直梯直达 5F 宴庭餐厅大堂，免走多余路步。</span>
          </div>
        </div>
      </div>
`;

content = content.replace(
  /<div class="act-card">\s*<div class="act-header">\s*<span class="act-time-pill">17:45 - 19:45<\/span>[\s\S]*?直梯直达5F餐厅前台。<\/span>\s*<\/div>\s*<\/div>\s*<\/div>/m,
  richDay4Dinner.trim()
);


// ========================================================
// 10. REFACTOR DAY 5 & RICH CHUANGE LUNCH
// ========================================================
content = content.replace(
  '<span class="act-time-pill">08:30 - 09:45</span>',
  '<span class="act-time-pill">海堤晨游 ~1h</span>'
);

// Transit Day 5: Zhanqiao to Beer pack
content = content.replace(
  '<span>车行经过太平路，或在平缓防波堤避开拥挤人群平视海平面，体面留影。</span>\n                </div>\n              </div>\n            </div>\n          </div>',
  `<span>车行经过太平路，或在平缓防波堤避开拥挤人群平视海平面，体面留影。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n${makeTransitStep('自驾 ~10m · 3.8 km 前往鲜啤直供专柜')}`
);

content = content.replace(
  '<span class="act-time-pill">10:00 - 11:15</span>',
  '<span class="act-time-pill">鲜啤装车 ~1h</span>'
);

// Transit Day 5: Beer pack to Chuange Lunch
content = content.replace(
  '原浆保质期仅7天，必须冷藏，请自带保温箱并加装冰袋，直接放入后备箱平稳固定。</div>\n      </div>',
  `原浆保质期仅7天，必须冷藏，请自带保温箱并加装冰袋，直接放入后备箱平稳固定。</div>\n      </div>\n${makeTransitStep('自驾 ~6m · 1.8 km 前往水饺午宴')}`
);

// Upgraded Day 5 Chuange Lunch
const richDay5Lunch = `
      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">水饺午宴 ~1h</span>
          <span class="act-intensity intensity-flat">温热养胃顺风午餐</span>
        </div>
        <div class="act-name">
          <span>船歌鱼水饺（品质旗舰店）</span>
          <a href="dianping://searchshoplist?keyword=%E8%88%B9%E6%AD%8C%E9%B1%BC%E6%B0%B4%E9%A5%BA" onclick="openDianping('船歌鱼水饺', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
          <span style="color:#0F172A; font-size:12px; font-weight:700;">4.8分</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">胶东鱼水饺非遗代表</span>
          <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥75 - 100</span>
        </div>
        <div class="act-tagline">“出门水饺回门面”。返程前吃一顿滚烫温润的纯手工鱼水饺，墨鱼水饺（黑皮白馅鲜美爆汁）、黄花鱼水饺（金黄软嫩无刺），搭配大虾烧白菜与原汁清炖蛤蜊豆腐热汤，舒服饱腹。</div>

        <div class="act-special-grid">
          <div class="as-item">
            <span class="as-item-label">长辈优选:</span>
            <span class="as-item-val">招牌黄花鱼水饺（软嫩无刺入口即化）、墨鱼水饺、清炖鲜蛤蜊豆腐汤、大虾烧白菜。</span>
          </div>
          <div class="as-item">
            <span class="as-item-label">泊车指引:</span>
            <span class="as-item-val">门前专属划线停车位，平地进店无门槛与台阶。</span>
          </div>
        </div>
      </div>
${makeTransitStep('自驾 ~15m · 直驶跨海大桥出城主线')}
`;

content = content.replace(
  /<div class="act-card">\s*<div class="act-header">\s*<span class="act-time-pill">11:30 - 12:45<\/span>[\s\S]*?大虾烧白菜。<\/div>\s*<\/div>/m,
  richDay5Lunch.trim()
);

content = content.replace(
  '<span class="act-time-pill">13:00 启程</span>',
  '<span class="act-time-pill">从容返程</span>'
);


// Save updated file
fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully written enhanced source_qingdao.html');
console.log('New content length:', content.length);
