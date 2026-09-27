const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'source_qingdao.html');
let content = fs.readFileSync(targetFile, 'utf8');

console.log('Original content size:', content.length);

// ==========================================
// 1. REFACTOR CSS DESIGN SYSTEM & TOKENS
// ==========================================

// Replace :root tokens with unified Single Highlight SaaS Palette
const oldRootRegex = /:root\s*\{[\s\S]*?--radius-sm:\s*8px;\s*\}/;
const newRoot = `:root {
      --brand-accent: #2563EB;
      --brand-accent-hover: #1D4ED8;
      --brand-accent-soft: #EFF6FF;
      --brand-accent-border: #BFDBFE;
      
      --bg-body: #F8FAFC;
      --bg-card: #FFFFFF;
      --bg-subtle: #F1F5F9;
      --bg-muted: #E2E8F0;
      
      --border-hairline: #E2E8F0;
      --border-subtle: rgba(15, 23, 42, 0.08);
      --border-focus: #2563EB;
      
      --text-main: #0F172A;
      --text-secondary: #334155;
      --text-muted: #64748B;
      
      --shadow-subtle: 0 1px 2px rgba(15, 23, 42, 0.03);
      --shadow-card: 0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.02);
      --shadow-float: 0 8px 30px rgba(15, 23, 42, 0.08);
      
      --radius-xl: 20px;
      --radius-lg: 16px;
      --radius-md: 12px;
      --radius-sm: 8px;
    }`;

content = content.replace(oldRootRegex, newRoot);

// Header Badges & Weather Mini Pill
content = content.replace(
  /\.senior-badge\s*\{[\s\S]*?align-items:\s*center;\s*gap:\s*4px;\s*\}/,
  `.senior-badge {
      font-size: 11px;
      font-weight: 600;
      color: var(--text-main);
      background: var(--bg-subtle);
      border: 1px solid var(--border-hairline);
      padding: 3px 8px;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }`
);

content = content.replace(
  /\.time-badge\s*\{[\s\S]*?border-radius:\s*12px;\s*\}/,
  `.time-badge {
      font-size: 11px;
      font-weight: 600;
      color: var(--text-secondary);
      background: var(--bg-subtle);
      border: 1px solid var(--border-hairline);
      padding: 3px 8px;
      border-radius: 6px;
    }`
);

content = content.replace(
  /\.weather-mini-pill\s*\{[\s\S]*?\.weather-mini-pill:active\s*\{[\s\S]*?\}/,
  `.weather-mini-pill {
      background: var(--brand-accent-soft);
      border: 1px solid var(--brand-accent-border);
      color: var(--brand-accent);
      font-size: 11px;
      font-weight: 600;
      padding: 3px 9px;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.15s;
    }
    .weather-mini-pill:active {
      background: #DBEAFE;
    }`
);

// Spot Photo Card Label
content = content.replace(
  /\.pg-label\s*\{[\s\S]*?font-size:\s*11px;\s*\}/,
  `.pg-label {
      font-weight: 700;
      color: var(--text-main);
      white-space: nowrap;
      font-size: 11px;
    }`
);

// Floating XHS Button & Drawer
content = content.replace(
  /\.xhs-fab-btn\s*\{[\s\S]*?\.xhs-fab-btn:active\s*\{[\s\S]*?\}/,
  `.xhs-fab-btn {
      position: fixed;
      bottom: calc(env(safe-area-inset-bottom) + 70px);
      right: 14px;
      z-index: 1050;
      background: var(--text-main);
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 26px;
      padding: 10px 16px;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.25);
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .xhs-fab-btn:hover {
      background: #1E293B;
    }
    .xhs-fab-btn:active {
      transform: scale(0.96);
    }`
);

content = content.replace(
  /\.xhs-textarea:focus\s*\{[\s\S]*?\}/,
  `.xhs-textarea:focus {
      border-color: var(--brand-accent);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }`
);

content = content.replace(
  /\.xhs-eval-btn\s*\{[\s\S]*?\.xhs-eval-btn:active\s*\{[\s\S]*?\}/,
  `.xhs-eval-btn {
      width: 100%;
      height: 42px;
      background: var(--brand-accent);
      color: #FFFFFF;
      border: none;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
      transition: background 0.15s;
    }
    .xhs-eval-btn:hover {
      background: var(--brand-accent-hover);
    }
    .xhs-eval-btn:active {
      transform: scale(0.98);
    }`
);

// Weather Widget (Tab 4) - Sleek modern dark slate container
content = content.replace(
  /\.weather-widget\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*14px\s*rgba\(2,\s*132,\s*199,\s*0\.2\);\s*\}/,
  `.weather-widget {
      background: #0F172A;
      color: #FFFFFF;
      border-radius: var(--radius-md);
      padding: 14px 16px;
      margin-bottom: 12px;
      box-shadow: var(--shadow-card);
      border: 1px solid #1E293B;
    }`
);

content = content.replace(
  /\.live-dot\s*\{[\s\S]*?animation:\s*pulse\s*2s\s*infinite;\s*\}/,
  `.live-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--brand-accent);
      display: inline-block;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.35);
      animation: pulse 2s infinite;
    }`
);

// Segmented Navigation Pills (.theme-pill)
content = content.replace(
  /\.theme-pill\s*\{[\s\S]*?\.theme-pill\.active\s*\{[\s\S]*?transform:\s*translateY\(-1px\);\s*\}/,
  `.theme-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      border-radius: 10px;
      background: #FFFFFF;
      border: 1px solid var(--border-hairline);
      font-size: 13px;
      font-weight: 500;
      color: var(--text-secondary);
      cursor: pointer;
      box-shadow: var(--shadow-subtle);
      transition: all 0.15s ease;
      flex-shrink: 0;
    }
    .theme-pill:hover {
      border-color: #CBD5E1;
      color: var(--text-main);
    }
    .theme-pill.active {
      background: var(--text-main);
      color: #FFFFFF;
      font-weight: 600;
      border-color: transparent;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.16);
      transform: translateY(-1px);
    }`
);

// Hero Card
content = content.replace(
  /\.senior-hero-card\s*\{[\s\S]*?\.senior-hero-card::after\s*\{[\s\S]*?border-radius:\s*50%;\s*\}/,
  `.senior-hero-card {
      background: #0F172A;
      color: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 20px;
      margin-bottom: 16px;
      box-shadow: var(--shadow-card);
      border: 1px solid #1E293B;
      position: relative;
      overflow: hidden;
    }`
);

// Customizer Badge
content = content.replace(
  /\.cb-badge\s*\{[\s\S]*?border-radius:\s*10px;\s*\}/,
  `.cb-badge {
      font-size: 11px;
      font-weight: 600;
      color: var(--text-secondary);
      background: var(--bg-subtle);
      border: 1px solid var(--border-hairline);
      padding: 2px 8px;
      border-radius: 6px;
    }`
);

content = content.replace(
  /\.cb-stats strong\s*\{[\s\S]*?\}/,
  `.cb-stats strong {
      color: var(--brand-accent);
      font-weight: 700;
    }`
);

content = content.replace(
  /\.dmm-tag\s*\{[\s\S]*?\}/,
  `.dmm-tag {
      font-size: 11px;
      color: var(--text-secondary);
      font-weight: 600;
    }`
);

// Activity Time Pill & Intensity
content = content.replace(
  /\.act-time-pill\s*\{[\s\S]*?border-radius:\s*6px;\s*\}/,
  `.act-time-pill {
      font-size: 12px;
      font-weight: 600;
      color: var(--brand-accent);
      background: var(--brand-accent-soft);
      border: 1px solid var(--brand-accent-border);
      padding: 2px 8px;
      border-radius: 6px;
    }`
);

content = content.replace(
  /\.act-intensity\s*\{[\s\S]*?\.intensity-ride\s*\{[\s\S]*?\}/,
  `.act-intensity {
      font-size: 11px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: var(--bg-subtle);
      color: var(--text-secondary);
      border: 1px solid var(--border-hairline);
    }
    .intensity-flat, .intensity-ramp, .intensity-ride {
      background: var(--bg-subtle);
      color: var(--text-secondary);
    }`
);

// Anti-crowd tip box
content = content.replace(
  /\.anticrowd-box\s*\{[\s\S]*?margin-bottom:\s*12px;\s*\}/,
  `.anticrowd-box {
      background: var(--bg-subtle);
      border-left: 3px solid var(--text-main);
      padding: 8px 10px;
      border-radius: 4px 8px 8px 4px;
      font-size: 12px;
      color: var(--text-secondary);
      line-height: 1.45;
      margin-bottom: 12px;
    }`
);

// Action Button .btn-dp (Dianping)
content = content.replace(
  /\.btn-dp\s*\{[\s\S]*?\.btn-dp:active\s*\{[\s\S]*?\}/,
  `.btn-dp {
      flex: 1;
      height: 36px;
      background: #FFFFFF;
      color: var(--text-main);
      border-radius: var(--radius-sm);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      border: 1px solid var(--border-hairline);
      box-shadow: var(--shadow-subtle);
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .btn-dp:hover, .btn-dp:active {
      border-color: var(--brand-accent);
      color: var(--brand-accent);
      background: var(--brand-accent-soft);
    }`
);

// Dining Card Ratings & Badges
content = content.replace(
  /\.dc-stars\s*\{[\s\S]*?font-weight:\s*700;\s*\}/,
  `.dc-stars {
      color: var(--text-main);
      font-size: 12px;
      font-weight: 700;
    }`
);

content = content.replace(
  /\.dc-badge\s*\{[\s\S]*?border-radius:\s*4px;\s*\}/,
  `.dc-badge {
      font-size: 11px;
      font-weight: 600;
      color: var(--text-secondary);
      background: var(--bg-subtle);
      border: 1px solid var(--border-hairline);
      padding: 2px 6px;
      border-radius: 4px;
    }`
);

content = content.replace(
  /\.dc-cost\s*\{[\s\S]*?border-radius:\s*4px;\s*\}/,
  `.dc-cost {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-secondary);
      background: var(--bg-subtle);
      border: 1px solid var(--border-hairline);
      padding: 2px 6px;
      border-radius: 4px;
    }`
);

content = content.replace(
  /\.dc-senior-comfort\s*\{[\s\S]*?margin-bottom:\s*8px;\s*\}/,
  `.dc-senior-comfort {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: var(--text-secondary);
      font-weight: 500;
      margin-bottom: 8px;
    }`
);

// Nav active button
content = content.replace(
  /\.nav-btn\.active\s*\{[\s\S]*?font-weight:\s*700;\s*\}/,
  `.nav-btn.active {
      color: var(--brand-accent);
      font-weight: 700;
    }`
);

// Checkbox / Radio accent color
content = content.replace(
  /accent-color:\s*var\(--primary-accent\);/g,
  `accent-color: var(--brand-accent);`
);

// Replace remaining var(--primary-accent) with var(--brand-accent)
content = content.replaceAll('var(--primary-accent)', 'var(--brand-accent)');


// ==========================================
// 2. REFACTOR JAVASCRIPT MAPS & ROUTE ENGINE
// ==========================================

// Day Mini Maps Marker & Line Color
content = content.replace(
  /stops\.forEach\(\(s, idx\) => \{[\s\S]*?const marker = L\.marker\(s\.coord, \{ icon: customIcon \}\)\.addTo\(map\);/m,
  `stops.forEach((s, idx) => {
        const isStart = idx === 0;
        const iconHtml = \`<div style="background:\${isStart ? '#2563EB' : '#0F172A'}; color:#fff; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; border:2px solid #fff; box-shadow:0 2px 6px rgba(0,0,0,0.25);">\${idx + 1}</div>\`;
        const customIcon = L.divIcon({
          className: 'custom-map-pin',
          html: iconHtml,
          iconSize: [22, 22],
          iconAnchor: [11, 11]
        });
        const marker = L.marker(s.coord, { icon: customIcon }).addTo(map);`
);

content = content.replace(
  /layerData\.polyline = L\.polyline\(coords, \{[\s\S]*?dashArray:\s*'6, 6'\s*\}\)\.addTo\(map\);/,
  `layerData.polyline = L.polyline(coords, {
          color: '#2563EB',
          weight: 3.5,
          opacity: 0.9,
          dashArray: '5, 5'
        }).addTo(map);`
);

// Overview Map (Tab 4) Colors & Markers
const oldOverviewMapRegex = /const DAY_COLORS = \{[\s\S]*?5:\s*'#E11D48'\s*\};/;
const newOverviewCode = `// Single Highlight SaaS Overview Palette
    const DAY_MARKER_BG = '#0F172A';
    const DAY_ACTIVE_BG = '#2563EB';`;

content = content.replace(oldOverviewMapRegex, newOverviewCode);

// Filter Overview Map Marker and Polyline update
content = content.replace(
  /const color = DAY_COLORS\[day\] \|\| '#0F172A';[\s\S]*?overviewMarkers\.push\(marker\);/m,
  `const isHighlighted = (targetDay === null || targetDay === day);
        const bg = isHighlighted ? (targetDay ? DAY_ACTIVE_BG : DAY_MARKER_BG) : '#64748B';
        const iconHtml = \`<div style="background:\${bg}; color:#fff; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; border:2px solid #fff; box-shadow:0 2px 8px rgba(0,0,0,0.25);">D\${day}</div>\`;
        const icon = L.divIcon({
          className: 'custom-overview-pin',
          html: iconHtml,
          iconSize: [26, 26],
          iconAnchor: [13, 13]
        });

        const marker = L.marker(spot.coord, { icon: icon }).addTo(overviewMap);
        marker.bindPopup(\`
          <div style="font-family:-apple-system, sans-serif; padding:4px;">
            <div style="font-size:11px; font-weight:700; color:#2563EB; margin-bottom:2px;">Day \${day} 打卡点</div>
            <div style="font-size:14px; font-weight:800; color:#0F172A; margin-bottom:4px;">\${spot.name}</div>
            <a href="dianping://searchshoplist?keyword=\${encodeURIComponent(spot.name)}" onclick="openDianping('\${spot.name}', event)" style="font-size:11px; font-weight:600; color:#2563EB; text-decoration:none;">在大众点评查看 ↗</a>
          </div>
        \`);
        overviewMarkers.push(marker);`
);

content = content.replace(
  /const poly = L\.polyline\(routeCoords, \{[\s\S]*?color:\s*DAY_COLORS\[d\],[\s\S]*?\}\)\.addTo\(overviewMap\);/,
  `const poly = L.polyline(routeCoords, {
            color: '#2563EB',
            weight: 3,
            opacity: 0.85,
            dashArray: '5, 5'
          }).addTo(overviewMap);`
);


// ==========================================
// 3. RESPECTFUL ELDERLY TERMINOLOGY REFACTOR
// ==========================================

const wordingReplacements = [
  // Titles & Badges
  ['<title>青岛金秋重阳·适老慢游与自驾避峰全景定制指南</title>', '<title>青岛金秋重阳·长辈舒享慢游与自驾避峰全景指南</title>'],
  ['<span class="senior-badge">适老舒适</span>', '<span class="senior-badge">长辈舒享</span>'],
  ['青岛顶奢名门与适老鲁菜全景甄选', '青岛顶奢名门与精选鲁菜私宴全景指南'],
  ['国庆适老长辈关怀与自驾应急锦囊', '国庆长辈自驾舒享与出行应急锦囊'],
  ['5日活动半径与适老强度速查', '5日行程半径与舒享强度速查'],
  ['以日历专属色彩（D1蓝 / D2紫 / D3绿 / D4橙 / D5红）标注青岛全境 20+ 个核心打卡点与顶级餐厅，点击标记可查看详细适老与泊车信息。', '统一高对比度清晰标注青岛全境 20+ 个核心打卡点与顶级餐厅，点击标记可查看详细长辈关怀与泊车指引。'],
  
  // Section Titles & Highlights
  ['晚餐适老温胃风味选择：', '晚餐长辈暖胃精选风味：'],
  ['适老养胃晚宴', '长辈暖胃晚宴'],
  ['适老午宴', '舒享午宴'],
  ['适老必点:', '长辈优选:'],
  ['<strong>适老必尝</strong>', '<strong>长辈优选</strong>'],
  ['酒店周边适老清淡午餐', '酒店周边舒享清淡午餐'],
  ['原生态健康适老', '原生态温润滋补'],

  // Labels
  ['<span class="pg-label">适老拍照:</span>', '<span class="pg-label">随行留影:</span>'],
  ['适老步数:', '舒享步数:'],

  // Narratives & Descriptions
  ['老人坐车就能尽享蓝海风光', '长辈坐车即可尽享海天风光'],
  ['老人全程安坐车内软座', '长辈全程安坐车内软座'],
  ['让老人关节和腰椎充分放松', '让长辈身心充分放松'],
  ['温热高汤让老人胃口大开', '温热高汤让长辈胃口大开'],
  ['老人安坐遮阳软座，船体极其平稳不晕船', '长辈安坐遮阳软座，船体极其平稳无眩晕感'],
  ['老人全程安坐白色皮质遮阳沙发', '长辈全程安坐白色皮质遮阳沙发'],
  ['百丽广场地下停车场拥有上千车位，直梯上下，老人完全免走楼梯。', '百丽广场地下停车场拥有上千车位，直梯上下，长辈全程免行台阶。'],
  ['车位停好下车步行20米即是石凳长椅，老人安坐石栏旁', '车位停好下车步行20米即是石凳长椅，长辈安坐石栏旁'],
  ['老人坐在室内柔软舒适的观海沙发上', '长辈坐在室内舒适的观海沙发上'],
  ['免除老人跟着在车库转圈找车位的劳累', '免除长辈在车库周折找车位的奔波'],
  ['心脑血管与老年科实力雄厚', '心脑血管与全科综合医疗实力雄厚'],
  ['国庆正午人头攒动摩肩接踵，老人容易被挤撞或无处歇脚。', '国庆正午人头攒动摩肩接踵，长辈容易拥挤不适或无处歇脚。'],

  // XHS Drawer Labels & Narratives
  ['<span>小红书适老评估</span>', '<span>小红书长辈出行评估</span>'],
  ['<span>小红书攻略 · 适老智能评估助手</span>', '<span>小红书攻略 · 长辈出行智能研判</span>'],
  ['<span>开始适老与动线评估</span>', '<span>开始长辈出行研判</span>'],
  ['<span>适老美食</span>', '<span>养胃美馔</span>'],
  ['正在结合青岛适老规则库与5天自驾行程研判中...', '正在结合长辈出行关怀规则与5天自驾行程研判中...'],
  ['对老年人膝盖冲击极大，极易疲劳或崴脚。', '对长辈膝盖冲击较大，容易疲劳或影响稳定性。'],
  ['严禁带老人去排队打卡！', '建议避开拥挤排队打卡！'],
  ['崂山主峰海拔过千米，石阶陡峭绵延数千级，严禁老年人攀登。', '崂山主峰海拔过千米，石阶陡峭漫长，不建议长辈徒步攀登。'],
  ['[极力推荐 · 适老满分 98分]', '[极力推荐 · 长辈舒享 98分]'],
  ['建议自驾车在正阳关路路缘落客点平缓下车，司机前往停车场，老人免多走一步。', '建议自驾车在正阳关路路缘落客点平缓下车，司机前往停车场，长辈免多走一步。'],
  ['卫生条件不可控，生冷海鲜极易诱发老人急性肠胃炎。', '卫生条件不可控，生冷海鲜极易诱发长辈肠胃不适。'],
  ['【青岛适老慢游·小红书评估】', '【青岛长辈舒享慢游·小红书研判】']
];

for (const [from, to] of wordingReplacements) {
  if (!content.includes(from)) {
    console.warn(`Warning: Target phrase not found: "${from}"`);
  }
  content = content.replaceAll(from, to);
}

// XHS Result styling (Single Highlight color border)
content = content.replace(
  /const borderCol = rating === 'red' \? '#EF4444' : \(rating === 'yellow' \? '#F59E0B' : '#10B981'\);[\s\S]*?const bgCol = rating === 'red' \? '#FEF2F2' : \(rating === 'yellow' \? '#FFFBEB' : '#ECFDF5'\);/,
  `const isPass = rating === 'green';
        const borderCol = isPass ? '#2563EB' : '#64748B';
        const bgCol = isPass ? '#EFF6FF' : '#F1F5F9';`
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully written refactored source_qingdao.html');
console.log('New content size:', content.length);
