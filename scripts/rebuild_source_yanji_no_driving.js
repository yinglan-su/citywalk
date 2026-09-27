const fs = require('fs');
const path = require('path');

const qdSourcePath = path.join(__dirname, '..', 'source_qingdao.html');
const qdHtml = fs.readFileSync(qdSourcePath, 'utf8');

// Extract the CSS styles block from source_qingdao.html
const styleMatch = qdHtml.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) {
  console.error('Failed to extract styles from source_qingdao.html');
  process.exit(1);
}
const cssContent = styleMatch[1];

console.log('Extracted CSS styling from source_qingdao.html length:', cssContent.length);

// Generate updated source_yanji.html (No self-driving, Day 1 rest, Double King Crab, Charter options)
const yanjiHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="延吉边陲慢游">
  <meta name="theme-color" content="#FFFFFF">
  <title>延吉金秋风情 · 长辈舒享旅行手账</title>
  
  <!-- Leaflet Map CSS & JS (Local Vendor first with CDN fallback for China accessibility) -->
  <link rel="stylesheet" href="./vendor/leaflet/leaflet.css" onerror="this.onerror=null;this.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'"/>
  <script src="./vendor/leaflet/leaflet.js" onerror="this.onerror=null;this.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'"></script>

  <style>
${cssContent}
  </style>
</head>
<body>

  <!-- App Header -->
  <header class="app-header">
    <div class="header-top">
      <div class="header-title-box">
        <span class="header-title">延吉边陲秋韵</span>
        <span class="senior-badge">长辈舒享</span>
      </div>
      <button class="weather-mini-pill" onclick="switchNavTab('overview')">
        <span class="live-dot" style="width:6px;height:6px;"></span>
        <span id="hdrMiniWeather">18°C 晴 · 7日天气 ↗</span>
      </button>
    </div>

    <!-- Day Navigation Capsules (Day 1 - Day 6) -->
    <div id="dayScrollContainer" class="theme-scroll">
      <button class="theme-pill active" onclick="switchDay('day1')">
        <span>Day 1</span>
        <span class="pill-sub">到延休整</span>
      </button>
      <button class="theme-pill" onclick="switchDay('day2')">
        <span>Day 2</span>
        <span class="pill-sub">文博学府</span>
      </button>
      <button class="theme-pill" onclick="switchDay('day3')">
        <span>Day 3</span>
        <span class="pill-sub">珲春帝王蟹</span>
      </button>
      <button class="theme-pill" onclick="switchDay('day4')">
        <span>Day 4</span>
        <span class="pill-sub">万亩金浪</span>
      </button>
      <button class="theme-pill" onclick="switchDay('day5')">
        <span>Day 5</span>
        <span class="pill-sub">集市与蟹宴</span>
      </button>
      <button class="theme-pill" onclick="switchDay('day6')">
        <span>Day 6</span>
        <span class="pill-sub">从容返程</span>
      </button>
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-content">
    
    <!-- ============================================================== -->
    <!-- TAB 1: ITINERARY (行程)                                       -->
    <!-- ============================================================== -->
    <section id="tabItinerary" class="tab-content active">

      <!-- ==================== DAY 1 ==================== -->
      <div id="pane_day1" class="day-pane active">
        <div class="senior-hero-card">
          <div class="sh-title">Day 1 (10/1) · 边陲初抵 · 彻底零行程休整 · 欢朋温润安歇</div>
          <div class="sh-desc">15:00 高铁抵达延吉西站，专车接站平稳送抵延吉中心希尔顿欢朋酒店（局子街336号）办理入住；整个下午与傍晚彻底不安排任何外出景点与打卡，长辈进房洗漱更衣、喝温热大麦茶、卧床休息，静心消除高铁旅途疲倦；晚餐在酒店中餐厅或楼下就近品尝温热养胃的元奶奶包肉与热大酱汤。</div>
          <div class="sh-tags">
            <span class="sh-tag">15:00西站顺畅接驳</span>
            <span class="sh-tag">连住希尔顿欢朋</span>
            <span class="sh-tag">彻底零行程休整</span>
            <span class="sh-tag">卧床安歇消除微倦</span>
            <span class="sh-tag">清润养胃晚餐</span>
          </div>
        </div>

        <!-- Day 1 Customizer -->
        <div class="customizer-box">
          <div class="cb-header">
            <span class="cb-title">首日休整与晚餐定制</span>
            <span class="cb-badge">动态生成地图</span>
          </div>
          <div class="cb-section-label">首日休整晚餐方式偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d1_dinner" value="yuannainai" checked onchange="updateYjDayRoute('day1')">
              <div class="cb-item-content">
                <div class="cb-item-title">老字号元奶奶包肉（软烂薄切，温润养胃大酱汤）</div>
                <div class="cb-item-desc">距酒店步行仅3分钟，传统菜包肉不油腻不塞牙，配热大酱汤与软糯黑米饭</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d1_dinner" value="hotel_dine" onchange="updateYjDayRoute('day1')">
              <div class="cb-item-content">
                <div class="cb-item-title">希尔顿欢朋酒店内中餐厅 / 客房送餐（最省心零位移）</div>
                <div class="cb-item-desc">完全不出酒店大门，品尝热汤热粥，长辈穿睡衣拖鞋即可舒适用餐</div>
              </div>
            </label>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日专车接驳与驻地微缩地图</span>
            <span id="dmmTag_day1" class="dmm-tag">接站动线已规划</span>
          </div>
          <div id="miniMap_day1" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day1">
            <span>预计车程: <strong>约 8.5 km (专车接站)</strong></span>
            <span>舒享步数: <strong>约 1,200 步 (仅酒店内走动，彻底休整)</strong></span>
          </div>
        </div>

        <!-- Activity Cards -->
        <div class="section-title">核心行程节奏</div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">专车接站 ~20m</span>
            <span class="act-intensity intensity-ride">专车接驳</span>
          </div>
          <div class="act-name">
            <span>延吉西站接站 & 入住延吉中心希尔顿欢朋酒店</span>
          </div>
          <div class="act-tagline">15:00 高铁平稳进站。出站口专车接驳直达，经长白西路直奔延吉核心区局子街。酒店服务生协助推运全部行李直抵客房。长辈下车进门全平步无台阶，彻底免去自身开车劳碌。</div>
          <div class="act-special-grid">
            <div class="as-item">
              <span class="as-item-label">接驳路线:</span>
              <span class="as-item-val">延吉西站出站口平步上车，经长白西路直达酒店，车程约 20 分钟 (8.5 km)。</span>
            </div>
            <div class="as-item">
              <span class="as-item-label">落客指引:</span>
              <span class="as-item-val">专车直接驶入希尔顿欢朋酒店大门回廊下客，行李由礼宾直接协助送进电梯。</span>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>电梯直达客房 · 开启深度休整</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">深度休整 ~2.5h</span>
            <span class="act-intensity intensity-flat">零行程休整</span>
          </div>
          <div class="act-name">
            <span>【彻底休整】进房更衣洗漱 · 卧床小憩 · 适应北方秋凉</span>
          </div>
          <div class="act-tagline">出门首日最忌赶场打卡。长辈进房后脱去外套、换上舒适软底拖鞋，用热水洗去车马疲劳；烧一壶温热大麦茶慢慢饮用；拉上厚遮光帘在舒适大床上静卧小憩两小时。整个傍晚不赶任何景点，不费任何脚力，以最充沛的精力开启后续假期。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>步行 3m · 200 m 楼下老字号</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">养胃晚宴 ~1h</span>
            <span class="act-intensity intensity-flat">长辈养胃晚餐</span>
          </div>
          <div class="act-name">
            <span>老字号元奶奶包肉（总店）与热海鲜大酱汤</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%85%83%E5%A5%B6%E5%A5%B6%E5%8C%85%E8%82%89" onclick="openDianping('延吉 元奶奶包肉', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
            <span style="color:#0F172A; font-size:12px; font-weight:700;">4.8分</span>
            <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">大众点评老字号必吃</span>
            <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥80 - 100</span>
          </div>
          <div class="act-tagline">距酒店仅步履之遥。特制五花肉蒸透去脂、薄切软烂，入口即化毫无油腻感，用洗净紫苏叶与生菜包裹食用；配一锅滚热的海鲜大酱汤与软糯黑米饭，第一餐既有鲜明异域风味又极其温暖开胃。餐后轻松回房，早早安然就寝。</div>
        </div>
      </div>

      <!-- ==================== DAY 2 ==================== -->
      <div id="pane_day2" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 2 (10/2) · 文博殿堂 · 森林氧吧 · 延大学府人文 · 丰茂无烟烤肉</div>
          <div class="sh-desc">长辈睡饱精神足，上午乘车前往国家一级博物馆延边博物馆，平层直梯宽敞无阻，全景领略朝鲜族百年民俗与农耕历史；中午品尝大朴家高丽参鸡汤；午后回希尔顿欢朋深度午休 2 小时；下午漫步帽儿山国家森林公园平缓木栈道，登半山腰观景长廊俯瞰海兰江平原；傍晚顺路漫步延边大学南门校园，欣赏求真楼传统大飞檐，在对街开阔处顺光远眺双语弹幕墙；晚间体验丰茂无烟烤肉旗舰包房。</div>
          <div class="sh-tags">
            <span class="sh-tag">国家一级博物馆</span>
            <span class="sh-tag">参鸡慢炖大补元气</span>
            <span class="sh-tag">13:15-15:15 酒店午休</span>
            <span class="sh-tag">森林木栈道海兰江</span>
            <span class="sh-tag">延大学府传统飞檐</span>
            <span class="sh-tag">全自动无烟下排风</span>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日市区打车接驳与打卡点微缩地图</span>
            <span id="dmmTag_day2" class="dmm-tag">全景路线已规划</span>
          </div>
          <div id="miniMap_day2" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day2">
            <span>预计车程: <strong>约 22 km (网约打车随叫随到)</strong></span>
            <span>舒享步数: <strong>约 5,200 步 (木栈平步)</strong></span>
          </div>
        </div>

        <!-- Activity Cards -->
        <div class="section-title">核心行程节奏</div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">文博参访 ~2h</span>
            <span class="act-intensity intensity-flat">全平室内电梯</span>
          </div>
          <div class="act-name">
            <span>延边博物馆 (国家一级博物馆) 深度文化参访</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%BB%B6%E8%BE%B9%E5%8D%9A%E7%89%A9%E9%A6%86" onclick="openDianping('延吉 延边博物馆', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">国家一级博物馆，馆藏极为丰富。从朝鲜族迁徙定居、农耕礼仪、抓周花甲寿礼，到传统韩屋结构一应俱全。展厅宽敞明亮、空调适宜，全馆配有直梯和休闲长椅，比商业民俗村更具体面与历史沉淀。</div>

          <div class="act-special-grid">
            <div class="as-item">
              <span class="as-item-label">参访贴士:</span>
              <span class="as-item-val">刷身份证免费入馆，馆内提供免费行李寄存与长辈休息椅，南门西侧设有无障碍电梯。</span>
            </div>
            <div class="as-item">
              <span class="as-item-label">落客指引:</span>
              <span class="as-item-val">网约车直接停在博物馆南门正门平坦路缘下客，下车即进门。</span>
            </div>
          </div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_museum.jpg" alt="延边博物馆传统民俗展厅" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=960&q=80'" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">二层民俗展厅朝鲜族传统农家庭院温居复原场景前，木栅栏与暖色光影交相辉映。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">馆内全天柔和专业射灯漫射光，人脸无阴影，拍摄神采奕奕。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈倚在传统院落木栏前留影，古朴典雅，文化品味极佳。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~10m · 3.5 km 前往参鸡汤名店</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">滋补午宴 ~1h</span>
            <span class="act-intensity intensity-flat">长辈养胃极品</span>
          </div>
          <div class="act-name">
            <span>大朴家高丽参鸡汤（老口碑总店）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%A4%A7%E6%9C%B4%E5%AE%B6%E5%8F%82%E9%B8%A1%E6%B1%A4" onclick="openDianping('延吉 大朴家参鸡汤', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
            <span style="color:#0F172A; font-size:12px; font-weight:700;">4.8分</span>
            <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">大众点评必吃榜</span>
            <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥75 - 90</span>
          </div>
          <div class="act-tagline">选用散养优质童子鸡，鸡腹内填满长白山整支鲜人参、大枣、板栗与上等江米，文火煨炖数小时。鸡肉骨酥肉烂、筷子一拨即离骨；乳白色高汤浓稠回甘，江米吸饱鸡汁精华温热黏糯，对长辈脾胃最具滋补调养之效。</div>

          <div class="act-special-grid">
            <div class="as-item">
              <span class="as-item-label">长辈优选:</span>
              <span class="as-item-val">招牌参鸡汤（整鸡带鲜人参）、鲍鱼参鸡汤（滋阴清补）、清淡手工打糕。</span>
            </div>
            <div class="as-item">
              <span class="as-item-label">落客指引:</span>
              <span class="as-item-val">车辆直接停在店门前小院下客，平步进门，室内暖风舒适。</span>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~12m · 4.2 km 返回延吉中心希尔顿欢朋酒店</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">酒店午休 ~2h</span>
            <span class="act-intensity intensity-flat">酒店深度午休</span>
          </div>
          <div class="act-name">
            <span>【关键调养】返回希尔顿欢朋酒店深度午休调养</span>
          </div>
          <div class="act-tagline">连续游玩上午后，长辈体力需要及时补给。返回房间拉上遮光窗帘，在柔软舒适的大床上卧床小憩两小时。既避开了正午室外强烈的紫外线与人流，又为下午的森林漫步蓄满充沛体能。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车/网约专车 ~20m · 10 km 前往帽儿山</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">森林漫步 ~1.5h</span>
            <span class="act-intensity intensity-flat">纯平缓木栈道</span>
          </div>
          <div class="act-name">
            <span>帽儿山国家森林公园 · 金秋樟子松林海木栈道</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%B8%BD%E5%84%BF%E5%B1%B1%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD" onclick="openDianping('延吉 帽儿山国家森林公园', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延吉南部的天然绿肺，樟子松、红松与白桦林交织。景区铺设了极为平缓宽敞的木栈道，坡度温和，沿途松鼠跳跃、松香扑鼻。长辈腿脚正常，慢走 25 分钟即可抵达半山腰宽阔观景平台，360 度俯瞰海兰江平原与延吉市区盆地全貌。无需刻意登顶，适可而止尽享大自然。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_maoershan.jpg" alt="帽儿山国家森林公园木栈道" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1448375240586-882707db888b?w=960&q=80'" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">半山腰红松长廊木质观景台石栏旁，视野开阔无遮挡，俯瞰海兰江平原全景。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">15:45 - 16:45 森林被斜照的金秋夕阳染成一片暖金，光线温暖柔和。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈坐于观景台木椅上侧身看海兰江远山，苍翠松柏为天然背景框，气场悠然。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~15m · 7.2 km 前往延边大学正门</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">学府漫步 ~1h</span>
            <span class="act-intensity intensity-flat">平缓石板路</span>
          </div>
          <div class="act-name">
            <span>延边大学学府漫步 & 网红双语弹幕墙从容侧影</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%BB%B6%E8%BE%B9%E5%A4%A7%E5%AD%A6" onclick="openDianping('延吉 延边大学', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">傍晚斜阳顺光，从正南门刷脸进入延边大学（提前微信预约）。求真楼融合了朝鲜族传统大飞檐与现代学府气魄。漫步后在大学城对街开阔广场顺光侧影留念，避开夜间几万人扎堆排队拍照的拥挤人潮，长辈拍照舒心从容。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_univ.jpg" alt="延边大学传统飞檐主楼" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=960&q=80'" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">求真楼南广场中央中轴线汉白玉草坪旁，仰拍传统青瓦飞檐与金黄银杏。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">17:00 - 17:45 傍晚斜阳侧逆光金边，建筑飞檐轮廓极其立体温润。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~8m · 2.6 km 前往丰茂旗舰店</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">品质晚宴 ~1.5h</span>
            <span class="act-intensity intensity-flat">长辈无烟包厢</span>
          </div>
          <div class="act-name">
            <span>丰茂烤串（延吉总店旗舰包厢）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E4%B8%B0%E8%8C%82%E7%83%A4%E4%B8%B2" onclick="openDianping('延吉 丰茂烤串', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">全自动无烟下排风旋转烤架，全程无任何呛人油烟气。原味嫩黄牛肉串鲜嫩多汁，配现压玉米温面与苏子叶烤肉卷，长辈坐享清静包厢。餐后打车 6 分钟轻松返回希尔顿欢朋酒店安歇。</div>
        </div>
      </div>

      <!-- ==================== DAY 3 ==================== -->
      <div id="pane_day3" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 3 (10/3) · 边境风情一日 · 珲春防川三国交界 · 珲春活蒸帝王蟹</div>
          <div class="sh-desc">今天前往中朝俄边境。长辈腿脚正常能走，特别设计两套出行方案：首选【路线 A】专属商务包车直达珲春防川风景区，乘直梯登临 12 层龙虎阁“一眼望三国”（左俄右朝脚下中，远眺图们江入海口与日本海），中午在珲春海鲜街豪享俄罗斯直运原产地活蒸帝王蟹；若当天追求超低车程，可自由一键切换为【路线 B】图们边境口岸国门与日光山俯瞰江湾。</div>
          <div class="sh-tags">
            <span class="sh-tag">一眼望中朝俄三国</span>
            <span class="sh-tag">龙虎阁全高速直梯</span>
            <span class="sh-tag">珲春活蒸帝王蟹</span>
            <span class="sh-tag">门到门商务包车</span>
            <span class="sh-tag">回欢朋休整品茗</span>
          </div>
        </div>

        <!-- Day 3 Customizer & Transport Options -->
        <div class="customizer-box">
          <div class="cb-header">
            <span class="cb-title">珲春出行方式与路线抉择</span>
            <span class="cb-badge">动态生成地图与卡片</span>
          </div>

          <div class="cb-section-label">交通方式建议（包车 vs 高铁）：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d3_transport" value="charter" checked onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">方案 A（首选强烈推荐）：7座商务专车包车一日游（门到门零换乘）</div>
                <div class="cb-item-desc">酒店大堂门前迎送，随身物品放车上，免去进出高铁站排队安检折腾，长辈车内舒心小憩</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d3_transport" value="bullet_train" onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">方案 B（极速备选）：城际高铁 (40m · ¥28) + 珲春当地包车/打车</div>
                <div class="cb-item-desc">延吉西至珲春站高铁极速平稳（车程仅40分钟），出站后包地接车前往防川与海鲜街</div>
              </div>
            </label>
          </div>

          <div class="cb-section-label" style="margin-top:12px;">边境目的地偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d3_route" value="go_hunchun" checked onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">珲春防川“一眼望三国” + 俄罗斯活蒸帝王蟹午宴（首选震撼推荐）</div>
                <div class="cb-item-desc">直梯上龙虎阁看三国交界与日本海，中午大饱鲜活帝王蟹口福</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d3_route" value="go_tumen" onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">图们边境口岸国门 & 86号界碑 + 日光山森林俯瞰（从容舒缓备选）</div>
                <div class="cb-item-desc">专车车程仅 45 分钟，超低位移，平视对岸朝鲜南阳市，下午从容回延吉深度午休</div>
              </div>
            </label>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日专车动线与打卡点微缩地图</span>
            <span id="dmmTag_day3" class="dmm-tag">珲春三国交界线已规划</span>
          </div>
          <div id="miniMap_day3" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day3">
            <span>预计车程: <strong>约 280 km (全高速专车)</strong></span>
            <span>舒享步数: <strong>约 4,500 步 (直梯全景)</strong></span>
          </div>
        </div>

        <!-- Container for dynamically rendered Day 3 cards -->
        <div id="d3_cards_container">
          <!-- Rendered by JavaScript function renderDay3Cards -->
        </div>
      </div>

      <!-- ==================== DAY 4 ==================== -->
      <div id="pane_day4" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 4 (10/4) · 海兰江畔万亩金浪 · 苹果梨香 · 顺姬温面</div>
          <div class="sh-desc">专车南下龙井，探访海兰江畔万亩水稻公园，乘纯平观光小火车穿梭于金秋稻浪之中，呼吸无边稻香；参观亚洲最大苹果梨祖树林，赏枝头秋实；中午品尝特色黄牛排骨火锅；午后回希尔顿欢朋酒店深度午休 2 小时；下午漫步延吉人民公园百年古榆林海，看民间长辈农乐舞与棋艺；在劳顶笨咖啡品味热五味子茶与打糕雪冰；晚宴享用顺姬冷面招牌热玉米温面。</div>
          <div class="sh-tags">
            <span class="sh-tag">海兰江万亩金稻浪</span>
            <span class="sh-tag">纯平观光小火车</span>
            <span class="sh-tag">苹果梨发源母树</span>
            <span class="sh-tag">人民公园百年古榆</span>
            <span class="sh-tag">热玉米温面暖胃</span>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日专车动线与打卡点微缩地图</span>
            <span id="dmmTag_day4" class="dmm-tag">全景路线已规划</span>
          </div>
          <div id="miniMap_day4" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day4">
            <span>预计车程: <strong>约 26 km (专车/打车接驳)</strong></span>
            <span>舒享步数: <strong>约 4,800 步 (小火车接驳)</strong></span>
          </div>
        </div>

        <!-- Activity Cards -->
        <div class="section-title">核心行程节奏</div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">田园金浪 ~2h</span>
            <span class="act-intensity intensity-ride">小火车观光</span>
          </div>
          <div class="act-name">
            <span>龙井良田百世度假区 · 海兰江万亩水稻金浪 & 苹果梨母树园</span>
            <a href="dianping://searchshoplist?keyword=%E9%BE%99%E4%BA%95%20%E8%89%AF%E7%94%B0%E7%99%BE%E4%B8%96" onclick="openDianping('龙井 良田百世', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">海兰江平原是延边的粮仓，十月秋收之际，万亩有机稻田一片金黄波涛，壮丽震撼。长辈乘坐纯平电瓶观光小火车在稻田间悠然穿行，清风徐来、稻香醉人。顺道探访龙井苹果梨母树园，枝头硕果累累，纯天然大自然田园风貌，视野极度宽广开阔。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_rice.jpg" alt="海兰江平原万亩稻田金浪" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=960&q=80'" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">水稻公园中央木质观景亭栈桥端头，长焦平视拍摄万亩金黄稻浪与海兰江远山。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">10:00 - 11:30 上午纯净阳光照耀稻穗，呈现出油画般的金黄光泽。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>专车 ~10m · 5 km 前往特色农家火锅</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">特色午宴 ~1h</span>
            <span class="act-intensity intensity-flat">温润暖胃午宴</span>
          </div>
          <div class="act-name">
            <span>龙井海兰江黄牛排骨火锅</span>
            <a href="dianping://searchshoplist?keyword=%E9%BE%99%E4%BA%95%20%E9%BB%84%E7%89%9B%E6%8E%92%E9%AA%A8" onclick="openDianping('龙井 黄牛排骨', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">选用本地优质黄牛大排骨，砂锅慢火清炖出醇浓鲜汤。肉质炖至软烂脱骨、毫无膻味。锅内配以山地白菜、鲜豆腐与手打鲜面，温热清补，长辈吃得暖胃又舒坦。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>专车/打车 ~25m · 19 km 返回延吉中心希尔顿欢朋酒店</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">酒店午休 ~2h</span>
            <span class="act-intensity intensity-flat">酒店午休调养</span>
          </div>
          <div class="act-name">
            <span>【关键调养】返回希尔顿欢朋酒店深度午休</span>
          </div>
          <div class="act-tagline">中午 13:15–15:15 回酒店静心小憩，洗脸更衣，卧床安歇。充分补充精力，确保下午游览轻松无累感。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>步行或打车 ~3m · 800 m 前往延吉人民公园</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">古树漫步 ~1h</span>
            <span class="act-intensity intensity-flat">纯平城市公园</span>
          </div>
          <div class="act-name">
            <span>延吉人民公园 · 百年古榆树林慢步</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E4%BA%BA%E6%B0%91%E5%85%AC%E5%9B%AD" onclick="openDianping('延吉 人民公园', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延吉历史最悠久的自然公园，距希尔顿欢朋仅步行可达。园内数百年古榆参天蔽日，红叶秋色满园。长辈慢步其间，常常能偶遇当地朝鲜族同龄长辈身着常服，吹奏长鼓、跳着安详从容的象帽舞或切磋象棋，是最真实可触的非商业人间温情。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~5m · 1.5 km 前往慢咖啡街区</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">慢调茶歇 ~1h</span>
            <span class="act-intensity intensity-flat">沙发安坐茶歇</span>
          </div>
          <div class="act-name">
            <span>延吉慢咖啡文化时光 · 劳顶笨咖啡旗舰总店</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%8A%B3%E9%A1%B6%E7%AC%A8" onclick="openDianping('延吉 劳顶笨', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延吉被誉为“县城咖啡天花板”，咖啡文化浓郁松弛。劳顶笨作为本土开山代表，店内环境宽敞。为长辈点选招牌温热五味子养生茶，搭配经典的纯牛奶红豆手工打糕雪冰（冰雪细腻如棉，软糯年糕香甜），安坐沙发歇脚闲谈。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~5m · 1.8 km 前往招牌晚餐</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">特色晚宴 ~1.5h</span>
            <span class="act-intensity intensity-flat">温润玉米温面</span>
          </div>
          <div class="act-name">
            <span>顺姬冷面旗舰店（专点招牌玉米温面）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E9%A1%BA%E5%A7%AC%E5%86%B7%E9%9D%A2" onclick="openDianping('延吉 顺姬冷面', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">专为长辈点选【招牌热玉米温面】——摒弃极冰刺激的冷面汤底，选用纯玉米细面放入滚烫牛骨高汤中现煮，汤头微辣鲜美、面条爽滑软弹；搭配外酥里嫩的金黄锅包肉与煎苏子叶肉合子，吃得浑身暖和透亮。餐后打车返回酒店。</div>
        </div>
      </div>

      <!-- ==================== DAY 5 ==================== -->
      <div id="pane_day5" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 5 (10/5) · 晨市烟火气 · 西市场地道特产 · 布尔哈通河晚霞 · 延吉帝王蟹惜别宴</div>
          <div class="sh-desc">清晨漫游著名的延吉水上市场，品尝现蒸温热江米鸡、现打黄豆面打糕与纯热豆浆，感受最朴实地道的人间烟火；随后前往延吉西市场，全直梯轻松挑选正宗延边苹果梨、椴木木耳、明太鱼干与温和泡菜，现场官方顺丰直邮打包；午宴品尝老字号兴豆饭店；午后回希尔顿欢朋深度午休；傍晚漫步布尔哈通河畔滨水金秋绿道，看天池大桥水鸟晚霞；晚间在延吉市内顶级活海鲜专门店【震海贝烤贝】独立包房享用鲜活俄罗斯帝王蟹惜别盛宴。</div>
          <div class="sh-tags">
            <span class="sh-tag">水上市场现打打糕</span>
            <span class="sh-tag">西市场特产顺丰直邮</span>
            <span class="sh-tag">13:15-15:15 酒店午休</span>
            <span class="sh-tag">布尔哈通河水岸晚霞</span>
            <span class="sh-tag">延吉市内活蒸帝王蟹</span>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日市区打车接驳与打卡点微缩地图</span>
            <span id="dmmTag_day5" class="dmm-tag">全景路线已规划</span>
          </div>
          <div id="miniMap_day5" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day5">
            <span>预计车程: <strong>约 10 km (打车起步价随叫随到)</strong></span>
            <span>舒享步数: <strong>约 5,000 步 (集市平步)</strong></span>
          </div>
        </div>

        <!-- Activity Cards -->
        <div class="section-title">核心行程节奏</div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">晨市漫步 ~1.5h</span>
            <span class="act-intensity intensity-flat">河堤平坦集市</span>
          </div>
          <div class="act-name">
            <span>延吉水上市场 · 晨曦烟火漫游与现打打糕</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E6%B0%B4%E4%B8%8A%E5%B8%82%E5%9C%BA" onclick="openDianping('延吉 水上市场', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">烟集河畔历史悠久的露天早市，07:30 清晨前往，空气清新。整条街弥漫着热腾腾的香气：热气蒸腾的江米鸡、木槌现打的温热打糕裹满细腻香浓的黄豆面、香喷喷的热米肠、现煎苏子叶饼与滚烫五谷豆浆。长辈腿脚好慢慢逛，亲身感受延吉老百姓最真实的晨间生活气息。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_watermarket.jpg" alt="延吉水上市场晨曦烟火" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=960&q=80'" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">水上市场烟集河石桥栏杆处，背景为晨光斜照下的集市蒸腾白雾与热闹摊位。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">07:45 - 08:30 晨曦穿透集市水汽，光影温润迷人，极具纪实生活感。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~3m · 800 m 前往延吉西市场</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">特产采选 ~2h</span>
            <span class="act-intensity intensity-flat">全电梯室内大厦</span>
          </div>
          <div class="act-name">
            <span>延吉西市场 · 精选朝鲜族特色特产采购 (直梯采选 · 顺丰直邮)</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E8%A5%BF%E5%B8%82%E5%9C%BA" onclick="openDianping('延吉 西市场', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延边最正规、规模最大的民族特色商厦。全栋配有手扶梯与观光直梯。一层专营延边地道特产：秋季现摘脆甜苹果梨、长白山椴木黑木耳、正宗干明太鱼、温和低盐无防腐剂泡菜、手工温和米酒。一层中央设有顺丰速运官方专柜，现挑现称直接打包快递回家，长辈无需手提任何重物，体验从容优雅。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~3m · 600 m 前往老字号午宴</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">老字号午宴 ~1h</span>
            <span class="act-intensity intensity-flat">经典温润家常</span>
          </div>
          <div class="act-name">
            <span>兴豆饭店老字号（炸酱面与香酥软炸肉）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%85%B4%E8%B1%86%E9%A5%AD%E5%BA%97" onclick="openDianping('延吉 兴豆饭店', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延吉几十年历史的老街坊餐馆。招牌黑豆炸酱面酱香浓郁微甜、面条现拉现煮爽滑易嚼；香酥软炸肉外酥里嫩肉汁饱满，再配一碗热乎乎的豆腐大酱汤，温馨扎实。餐后打车回酒店深度午休。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~3m · 700 m 返回希尔顿欢朋酒店</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">酒店午休 ~2h</span>
            <span class="act-intensity intensity-flat">深度午休调养</span>
          </div>
          <div class="act-name">
            <span>【关键调养】返回希尔顿欢朋酒店深度午休</span>
          </div>
          <div class="act-tagline">上午逛了集市并采选特产，中午 13:15–15:15 回酒店静卧两小时，彻底卸去疲乏，为傍晚留出极好精神。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~6m · 2.5 km 前往布尔哈通河畔绿道</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">滨河晚霞 ~1.5h</span>
            <span class="act-intensity intensity-flat">纯平滨水绿道</span>
          </div>
          <div class="act-name">
            <span>布尔哈通河畔滨水步道 · 金秋水岸晚霞</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%B8%83%E5%B0%94%E5%93%88%E9%80%9A%E6%B2%B3" onclick="openDianping('延吉 布尔哈通河', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">漫步于穿城而过的母亲河畔。天池大桥与彩虹桥之间铺设有极为宽阔平整的滨河木栈道与石板步道。金秋时节两岸垂柳与杨树一片金黄，倒映在波光粼粼的江水上。夕阳西下，水鸟贴着水面掠过，晚霞绚丽宁静，极为舒适惬意。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_burhatong.jpg" alt="布尔哈通河畔金秋晚霞" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=960&q=80'" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">天池大桥东侧亲水平台上，以现代化斜拉索桥与金色江面晚霞为大背景。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">16:45 - 17:30 日落前黄金 45 分钟，夕阳将整个水面染成耀眼金红。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~8m · 3.2 km 前往延吉帝王蟹名店</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">延吉帝王蟹盛宴 ~2h</span>
            <span class="act-intensity intensity-flat">市内活鲜独立包厢</span>
          </div>
          <div class="act-name">
            <span>震海贝烤贝·活蟹鲜海鲜专门店（延吉总店独立包厢）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E9%9C%87%E6%B5%B7%E8%B4%9D%E7%83%A4%E8%B4%9D" onclick="openDianping('延吉 震海贝烤贝 帝王蟹', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
            <span style="color:#0F172A; font-size:12px; font-weight:700;">4.8分</span>
            <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">延吉活海鲜热榜第一</span>
            <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥220 - 320</span>
          </div>
          <div class="act-tagline">作为延吉假期的圆满收官惜别盛宴！【震海贝烤贝】是延吉市内品尝鲜活俄罗斯帝王蟹的顶级标杆店。店内拥有大型恒温海水暂养池，专职师傅当面从池中捞出鲜活红帝王蟹、公开称重、标记后明厨清蒸。整只大蟹腿肉质饱满雪白、清甜多汁，长辈无需费牙口咀嚼；更有为长辈定制的温润蟹黄炖蛋、清炖海鲜豆腐热汤与蟹肉紫菜炒饭，在宽敞清幽的大包房内尽享奢华舒适的告别晚宴！</div>

          <div class="act-special-grid">
            <div class="as-item">
              <span class="as-item-label">长辈优选吃法:</span>
              <span class="as-item-val">鲜活整只帝王蟹清蒸（服务生现场剪壳拆肉）、蟹黄温润炖蛋、海鲜热汤、蟹肉炒饭。</span>
            </div>
            <div class="as-item">
              <span class="as-item-label">包厢与落客:</span>
              <span class="as-item-val">提前锁定理性大包房，网约车直接停在门前平步进门，直梯上二楼，清静典雅。</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== DAY 6 ==================== -->
      <div id="pane_day6" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 6 (10/6) · 晨起早茶 · 延吉西站顺利返程</div>
          <div class="sh-desc">清晨在延吉中心希尔顿欢朋酒店享用丰富热早餐；7:30 准时办理退房，专车顺畅送达延吉西站落客平台；从容通过绿色安检通道候车，搭乘 08:20+ 早班高铁舒适踏上归途，满载边陲金秋的壮阔风光与两次帝王蟹的美味回忆。</div>
          <div class="sh-tags">
            <span class="sh-tag">07:00 欢朋丰盛热早</span>
            <span class="sh-tag">07:30 办理退房</span>
            <span class="sh-tag">专车20m直达西站</span>
            <span class="sh-tag">08:20+ 高铁顺利返程</span>
          </div>
        </div>

        <!-- Activity Cards -->
        <div class="section-title">核心行程节奏</div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">营养早餐 ~30m</span>
            <span class="act-intensity intensity-flat">酒店热食早餐</span>
          </div>
          <div class="act-name">
            <span>希尔顿欢朋酒店热早餐 & 行李退房</span>
          </div>
          <div class="act-tagline">清晨 07:00 伴着晨光下楼，在酒店餐厅享用热气腾腾的早餐：现煮热面、温热白米粥、水煮蛋、现磨热咖啡与丰富中西热菜，暖和胃部。7:30 前台办理快速退房，专车在大堂门前等候装车出发。</div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>专车 ~20m · 8.5 km 直达延吉西站落客大平台</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">高铁送站 ~30m</span>
            <span class="act-intensity intensity-flat">无阻进站候车</span>
          </div>
          <div class="act-name">
            <span>延吉西站高架落客 & 08:20+ 高铁顺利返程</span>
          </div>
          <div class="act-tagline">清晨市区道路极为通畅，专车 20 分钟内稳健驶抵延吉西站二楼高架落客大平台。下车即达进站安检大门，长辈无需下台阶拉重物。顺利通过绿色安检通道，在候车大厅舒适入座，搭乘早班高铁返程，圆满收官！</div>
        </div>
      </div>

    </section>

    <!-- ============================================================== -->
    <!-- TAB 2: DINING (养胃美馔)                                       -->
    <!-- ============================================================== -->
    <section id="tabDining" class="tab-content">
      <div class="senior-hero-card" style="background: linear-gradient(135deg, #1E293B 0%, #334155 100%);">
        <div class="sh-title">延吉长辈养胃美食宝典 (双帝王蟹特别版)</div>
        <div class="sh-desc">专为长辈胃肠适口性考量定制：剔除冰碴冷面与过重辣椒，精选慢火滋补参鸡汤、软烂菜包肉、珲春与延吉双重活蒸俄罗斯帝王蟹、现煮热玉米温面与清炖牛排骨锅，兼具浓郁民族特色与温和养胃。</div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">延吉帝王蟹标杆</span>
          <span class="act-intensity intensity-flat">市内活鲜包房</span>
        </div>
        <div class="act-name">
          <span>震海贝烤贝·活蟹鲜海鲜专门店（延吉总店）</span>
          <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E9%9C%87%E6%B5%B7%E8%B4%9D%E7%83%A4%E8%B4%9D" onclick="openDianping('延吉 震海贝烤贝 帝王蟹', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.8分 · 延吉海鲜热榜第一 · 人均 ¥220-320</div>
        <div class="act-tagline">延吉市内吃鲜活俄罗斯帝王蟹的顶级标杆店。店内拥有大型海水暂养池，现场当面捞蟹称重、明厨清蒸。蟹腿肉质雪白清甜，服务生协助剪壳；配蟹黄蒸蛋、海鲜热汤与蟹肉紫菜炒饭，长辈吃得滋阴养胃又过瘾。</div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">珲春原产地帝王蟹</span>
          <span class="act-intensity intensity-flat">集散源头鲜活</span>
        </div>
        <div class="act-name">
          <span>珲春海鲜街 · 醉香阁俄罗斯直运活蒸帝王蟹</span>
          <a href="dianping://searchshoplist?keyword=%E7%8F%B2%E6%98%A5%20%E6%B5%B7%E9%B2%9C%E8%A1%97" onclick="openDianping('珲春 海鲜街 帝王蟹', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.9分 · 现场活水现挑 · 人均 ¥260-350</div>
        <div class="act-tagline">珲春作为全国最大俄罗斯帝王蟹集散口岸，鲜度无敌。整只原汁原味活蒸，大蟹腿肉质饱满紧实无需费牙口，蟹膏煮温热海鲜暖粥，边境口岸的极致大快朵颐。</div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">滋补名吃</span>
          <span class="act-intensity intensity-flat">大补元气</span>
        </div>
        <div class="act-name">
          <span>大朴家高丽参鸡汤（整鸡炖参）</span>
          <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%A4%A7%E6%9C%B4%E5%AE%B6%E5%8F%82%E9%B8%A1%E6%B1%A4" onclick="openDianping('延吉 大朴家参鸡汤', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.8分 · 人均 ¥75-90 · 院内专属落客</div>
        <div class="act-tagline">慢火将长白山鲜人参、红枣、枸杞与江米煨入整只童子鸡。鸡肉脱骨软嫩，汤头乳白清甜，江米热粥养胃安神，长辈绝口称赞。</div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">老字号名店</span>
          <span class="act-intensity intensity-flat">清爽不腻</span>
        </div>
        <div class="act-name">
          <span>老字号元奶奶包肉（传统五花菜包肉）</span>
          <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%85%83%E5%A5%B6%E5%A5%B6%E5%8C%85%E8%82%89" onclick="openDianping('延吉 元奶奶包肉', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.8分 · 人均 ¥80-100 · 局子街核心区</div>
        <div class="act-tagline">将五花肉蒸透去油，切薄片酥烂多汁。用新鲜紫苏叶与生菜包裹，搭配特制大酱与热海鲜大酱汤，荤素搭配极富营养。</div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">暖胃主食</span>
          <span class="act-intensity intensity-flat">现压热高汤</span>
        </div>
        <div class="act-name">
          <span>顺姬冷面旗舰店 · 招牌热玉米温面</span>
          <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E9%A1%BA%E5%A7%AC%E5%86%B7%E9%9D%A2" onclick="openDianping('延吉 顺姬冷面', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.7分 · 人均 ¥60-75 · 锅包肉绝配</div>
        <div class="act-tagline">摒弃伤胃的冰碴，选用纯玉米现压热面，配入浓郁热牛骨汤，爽滑劲道、暖身暖胃，搭配香酥锅包肉更是一绝。</div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">无烟烧烤</span>
          <span class="act-intensity intensity-flat">下排风无油烟</span>
        </div>
        <div class="act-name">
          <span>丰茂烤串品质旗舰包房</span>
          <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E4%B8%B0%E8%8C%82%E7%83%A4%E4%B8%B2" onclick="openDianping('延吉 丰茂烤串', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.8分 · 人均 ¥100-130 · 独立大包厢</div>
        <div class="act-tagline">全自动下排风旋转烤架，无油烟不呛人。特选原味嫩小黄牛肉串、苏子叶烤肉卷，长辈坐享自动翻转美味。</div>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- TAB 3: TIPS (出行锦囊)                                         -->
    <!-- ============================================================== -->
    <section id="tabTips" class="tab-content">
      <div class="senior-hero-card" style="background: linear-gradient(135deg, #1E293B 0%, #334155 100%);">
        <div class="sh-title">延吉长辈出行与生活全景锦囊</div>
        <div class="sh-desc">涵盖延吉至珲春/防川安全靠谱包车 3 大官方渠道与避坑铁律、市内便捷打车指引、10 月延吉防寒穿衣贴士、边境必备证件与西市场特产顺丰直邮全攻略。</div>
      </div>

      <!-- Charter Guide Card -->
      <div class="act-card" style="border: 1.5px solid var(--brand-accent);">
        <div class="act-header">
          <span class="act-time-pill" style="background:var(--brand-accent); color:#FFF;">靠谱包车官方渠道</span>
          <span class="act-intensity intensity-flat">安全靠谱核心指南</span>
        </div>
        <div class="act-name">
          <span>延吉至珲春 / 防川包车 3 大官方高安全渠道</span>
        </div>
        <div class="act-tagline">针对长辈出行，杜绝任何路边不正规黑车，推荐以下 3 个具备正规营运资质、安全保障完善的官方预订途径：</div>

        <div class="act-special-grid">
          <div class="as-item" style="grid-column: 1 / -1;">
            <span class="as-item-label" style="font-weight:700; color:#0F172A;">渠道一：携程旅行 / 飞猪 官方“私家包车一日游” (首选推荐)</span>
            <span class="as-item-val">在携程 App 搜索“延吉到防川包车”，选择综合评分 4.9 分以上、纯玩无购物的私家包车服务。平台担保、明码标价（一价全包：油费、过路费、司机餐费），赠送百万乘客座位险，7座商务车（别克GL8）约 ¥750-900/天，平台客服全程监督，安全靠谱第一名。</span>
          </div>
          <div class="as-item" style="grid-column: 1 / -1;">
            <span class="as-item-label" style="font-weight:700; color:#0F172A;">渠道二：延吉中心希尔顿欢朋酒店礼宾部协议车队 (最省心尊贵)</span>
            <span class="as-item-val">直接联系希尔顿欢朋酒店前台或礼宾部协助预约合作正规车队的商务车。优点是国际酒店严格把关、车况崭新干净、司机统一着装不吸烟，在大堂门前点对点交接，大堂经理全程兜底，服务最安心。</span>
          </div>
          <div class="as-item" style="grid-column: 1 / -1;">
            <span class="as-item-label" style="font-weight:700; color:#0F172A;">渠道三：滴滴出行“按天包车 / 跨城专车” (合规技术保障)</span>
            <span class="as-item-val">滴滴 App 首页选择“租车/包车 - 日租包车”，选择延吉出发至珲春。具备平台全程 GPS 轨迹追踪、车内录音录像监控与一键紧急报警，官方合规监管严格。</span>
          </div>
          <div class="as-item" style="grid-column: 1 / -1;">
            <span class="as-item-label" style="font-weight:700; color:#EF4444;">包车避坑 3 大铁律:</span>
            <span class="as-item-val">① 严禁在火车站或景区门口搭乘拉客私家车（无营运险、易半途加价）；② 下单前务必确认“一价全包”，无二次门票推销；③ 优先选 7 座中大型商务车（别克GL8/传祺M8），长辈腿部伸展宽敞不憋闷。</span>
          </div>
        </div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">市内交通</span>
          <span class="act-intensity intensity-flat">起步价打车极便</span>
        </div>
        <div class="act-name">
          <span>延吉市内打车与网约车使用指南</span>
        </div>
        <div class="act-tagline">延吉主城区面积适中，市内交通极其便利：出租车起步价仅 5-6 元，滴滴、高德等网约车随叫随到，等待时间通常在 2-3 分钟以内。市内所有景点（延大、博物馆、西市场、水上市场、人民公园）单程车费基本在 8-15 元之间。司机到达后直接在平坦路缘下客，长辈下车即进门，完全无需自己开车找车位。</div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">穿衣与防寒</span>
          <span class="act-intensity intensity-flat">长辈关怀核心</span>
        </div>
        <div class="act-name">
          <span>10 月金秋温差与穿衣贴士</span>
        </div>
        <div class="act-tagline">10 月上旬延吉正值深秋，昼夜温差大：清晨与傍晚气温约为 3°C - 8°C，中午受秋阳照射可达 17°C - 20°C。请务必为长辈备齐：防风轻薄羽绒服或冲锋衣、羊绒围巾、舒适防滑健步鞋；车内备好保温水杯与润唇膏，中午天热时多层穿脱，避免受凉。</div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">边境法规</span>
          <span class="act-intensity intensity-flat">必备证件须知</span>
        </div>
        <div class="act-name">
          <span>防川与图们边境出行注意事项</span>
        </div>
        <div class="act-tagline">Day 3 前往珲春防川或图们边境，属于重要边防区域。全员必须随身携带<strong>二代身份证原件</strong>，沿途边防检查站需核验身份证；边境区域严禁未经审批放飞无人机，在国界线附近请遵守指示牌，文明参观。</div>
      </div>

      <div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">伴手礼指引</span>
          <span class="act-intensity intensity-flat">顺丰现场打包</span>
        </div>
        <div class="act-name">
          <span>西市场特产采选与直邮防坑秘籍</span>
        </div>
        <div class="act-tagline">在西市场挑选正宗延边苹果梨、椴木黑木耳、明太鱼干与温和泡菜时，请认准带正规包装或口碑摊位。采选完毕后直接在一楼大厅顺丰官方台称重快递回居住地，2-3天到家，长辈完全不需要随身手提行李，轻松返程。</div>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- TAB 4: OVERVIEW (全览地图)                                     -->
    <!-- ============================================================== -->
    <section id="tabOverview" class="tab-content">
      <div class="senior-hero-card" style="background: linear-gradient(135deg, #0F172A 0%, #334155 100%);">
        <div class="sh-title">6日全行程宏观动线与打卡总览</div>
        <div class="sh-desc">全景 Leaflet 交互地图：统一高对比度清晰标注延吉、珲春防川、图们与龙井全域核心打卡点与顶级养胃餐厅，点击标记可查看详细长辈关怀与下客指引。</div>
      </div>

      <!-- Live Auto-Updating Weather Forecast Widget -->
      <div class="weather-widget" id="weatherWidget" style="margin-bottom: 14px;">
        <div class="ww-top">
          <div class="ww-city-status">
            <span>延吉市核心区 (局子街)</span>
            <span class="live-dot"></span>
            <span id="wwLiveLabel" style="font-size: 11px; opacity: 0.9;">气象实时同步</span>
          </div>
          <button class="ww-refresh-btn" onclick="fetchLiveWeather(true)">
            <svg style="width: 12px; height: 12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            <span id="wwBtnText">刷新</span>
          </button>
        </div>

        <div class="ww-main">
          <div class="ww-temp-box">
            <span class="ww-temp" id="wwCurTemp">18°</span>
            <span class="ww-condition" id="wwCurCond">秋高气爽 · 晴间多云</span>
          </div>
          <div class="ww-details">
            <span>体感 <strong id="wwApparent">17°</strong></span>
            <span>湿度 <strong id="wwHumidity">55%</strong></span>
            <span>风向 <strong id="wwWind">2级 西北风</strong></span>
          </div>
        </div>

        <!-- 7-Day Forecast Horizon -->
        <div class="ww-forecast-scroll" id="wwForecastContainer">
          <!-- Rendered dynamically by JavaScript -->
        </div>
      </div>

      <!-- Day Filters Bar -->
      <div class="overview-filter-bar">
        <button class="ov-pill active" onclick="filterOverviewMap('all')">全部全览 (All 6 Days)</button>
        <button class="ov-pill" onclick="filterOverviewMap('day1')">Day 1 到延休整</button>
        <button class="ov-pill" onclick="filterOverviewMap('day2')">Day 2 文博学府</button>
        <button class="ov-pill" onclick="filterOverviewMap('day3')">Day 3 珲春帝王蟹</button>
        <button class="ov-pill" onclick="filterOverviewMap('day4')">Day 4 万亩金浪</button>
        <button class="ov-pill" onclick="filterOverviewMap('day5')">Day 5 集市与蟹宴</button>
        <button class="ov-pill" onclick="filterOverviewMap('day6')">Day 6 从容返程</button>
      </div>

      <!-- Big Leaflet Overview Map -->
      <div id="overviewBigMap" class="ov-map-container" style="height: 480px; width: 100%; border-radius: 16px; border: 1px solid var(--border-hairline); margin-bottom: 20px;"></div>
    </section>

  </main>

  <!-- Bottom Navigation Bar -->
  <nav class="bottom-bar">
    <button class="nav-btn active" onclick="switchNavTab('itinerary')">
      <svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
      <span>行程</span>
    </button>
    <button class="nav-btn" onclick="switchNavTab('dining')">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
      <span>养胃美馔</span>
    </button>
    <button class="nav-btn" onclick="switchNavTab('tips')">
      <svg viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span>出行锦囊</span>
    </button>
    <button class="nav-btn" onclick="switchNavTab('overview')">
      <svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
      <span>全览地图</span>
    </button>
  </nav>

  <!-- Floating Action Button for Idea & Instruction Portal -->
  <button id="btnIdeaFab" class="idea-fab-btn" onclick="toggleIdeaDrawer(true)" aria-label="行程灵感与需求便签池">
    <svg style="width: 17px; height: 17px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
    </svg>
    <span>行程灵感与需求</span>
  </button>

  <!-- Slide-Over Drawer for Idea & Instruction Portal -->
  <div id="ideaOverlay" class="idea-drawer-overlay" onclick="if(event.target===this) toggleIdeaDrawer(false)">
    <div class="idea-drawer">
      <div class="idea-drawer-header">
        <div class="idea-drawer-title">
          <svg style="width: 18px; height: 18px; color: var(--brand-accent);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
          </svg>
          <span>行程灵感与需求便签 (Idea & Instruction Portal)</span>
        </div>
        <button class="idea-drawer-close" onclick="toggleIdeaDrawer(false)">✕</button>
      </div>

      <div class="idea-drawer-body">
        <p style="font-size: 12px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">
          在此随手粘贴小红书笔记、微信长辈需求（如“想喝热汤”、“包车去珲春”、“想吃帝王蟹”）或临时想去的新地点。系统将结合<strong>延吉长辈出行关怀规则</strong>自动研判可行性并持久保存。
        </p>

        <!-- Selector Row 1: Target Day -->
        <div style="font-size: 11px; font-weight: 700; color: var(--text-secondary); margin-bottom: 5px;">关联日程：</div>
        <div id="ideaDayPills" class="idea-selector-pills">
          <button class="idea-pill active" onclick="selectIdeaDay('全程 / 未定', this)">全程 / 未定</button>
          <button class="idea-pill" onclick="selectIdeaDay('Day 1', this)">Day 1</button>
          <button class="idea-pill" onclick="selectIdeaDay('Day 2', this)">Day 2</button>
          <button class="idea-pill" onclick="selectIdeaDay('Day 3', this)">Day 3</button>
          <button class="idea-pill" onclick="selectIdeaDay('Day 4', this)">Day 4</button>
          <button class="idea-pill" onclick="selectIdeaDay('Day 5', this)">Day 5</button>
          <button class="idea-pill" onclick="selectIdeaDay('Day 6', this)">Day 6</button>
        </div>

        <!-- Selector Row 2: Type -->
        <div style="font-size: 11px; font-weight: 700; color: var(--text-secondary); margin-bottom: 5px;">便签类型：</div>
        <div id="ideaTypePills" class="idea-selector-pills">
          <button class="idea-pill active" onclick="selectIdeaType('新增打卡', this)">新增打卡</button>
          <button class="idea-pill" onclick="selectIdeaType('餐饮要求', this)">餐饮要求</button>
          <button class="idea-pill" onclick="selectIdeaType('交通方式', this)">交通方式</button>
          <button class="idea-pill" onclick="selectIdeaType('节奏微调', this)">节奏微调</button>
        </div>

        <!-- Textarea -->
        <textarea id="ideaInputText" class="idea-textarea" placeholder="例如：珲春和延吉都要吃鲜活帝王蟹、或者去珲春怎么包车靠谱..."></textarea>

        <!-- Quick Presets -->
        <div class="idea-quick-tags">
          <button class="idea-tag-btn" onclick="fillIdeaPreset('珲春和延吉都要吃鲜活帝王蟹', '全程 / 未定', '餐饮要求')">延吉珲春都要帝王蟹</button>
          <button class="idea-tag-btn" onclick="fillIdeaPreset('珲春包车有哪些安全靠谱渠道', 'Day 3', '交通方式')">珲春包车安全渠道</button>
          <button class="idea-tag-btn" onclick="fillIdeaPreset('第一天不安排任何行程，长辈彻底休整', 'Day 1', '节奏微调')">第一天彻底休整</button>
        </div>

        <!-- Action Button -->
        <button class="idea-action-btn" onclick="saveAndAnalyzeIdea()">
          <svg style="width: 15px; height: 15px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>保存并智能研判</span>
        </button>

        <!-- Analysis Result Box -->
        <div id="ideaAnalysisBox" class="idea-result-card"></div>

        <!-- Saved Ideas List -->
        <div class="idea-saved-header">
          <span>已保存的需求便签池 (本地持久化)</span>
          <button onclick="clearAllIdeas()" style="background:none; border:none; font-size:11px; color:#EF4444; cursor:pointer;">清空全部</button>
        </div>
        <div id="savedIdeasList" class="idea-saved-list">
          <!-- Rendered dynamically -->
        </div>
      </div>
    </div>
  </div>

  <!-- Toast Notification Box -->
  <div id="toastBox" class="toast-box"></div>

  <!-- Application Engine Script -->
  <script>
    // ==========================================
    // Core Application State & Navigation
    // ==========================================
    let currentDay = 'day1';
    let currentNavTab = 'itinerary';
    const yjMiniMaps = {};
    const yjMiniLayers = {};
    let overviewMapInstance = null;
    let overviewMarkers = [];
    let overviewPolyline = null;

    function switchNavTab(tabId) {
      currentNavTab = tabId;
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

      const targetTab = document.getElementById(tabId === 'itinerary' ? 'tabItinerary' : 
                                               tabId === 'dining' ? 'tabDining' : 
                                               tabId === 'tips' ? 'tabTips' : 'tabOverview');
      if (targetTab) targetTab.classList.add('active');

      const btnIdx = (tabId === 'itinerary') ? 0 : (tabId === 'dining') ? 1 : (tabId === 'tips') ? 2 : 3;
      const navBtns = document.querySelectorAll('.nav-btn');
      if (navBtns[btnIdx]) navBtns[btnIdx].classList.add('active');

      const dayScroll = document.getElementById('dayScrollContainer');
      if (tabId === 'itinerary') {
        dayScroll.style.display = 'flex';
        initYjMiniMap(currentDay);
      } else if (tabId === 'overview') {
        dayScroll.style.display = 'none';
        initOverviewMap();
      } else {
        dayScroll.style.display = 'none';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function switchDay(dayId) {
      currentDay = dayId;
      document.querySelectorAll('.day-pane').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.theme-pill').forEach(el => el.classList.remove('active'));

      const targetPane = document.getElementById('pane_' + dayId);
      if (targetPane) targetPane.classList.add('active');

      const pillIdx = parseInt(dayId.replace('day', '')) - 1;
      const pills = document.querySelectorAll('.theme-pill');
      if (pills[pillIdx]) pills[pillIdx].classList.add('active');

      initYjMiniMap(dayId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ==========================================
    // Real-Time Open-Meteo Weather Engine for Yanji
    // ==========================================
    const WEATHER_CODE_MAP = {
      0: { text: '晴朗', icon: '' },
      1: { text: '多云', icon: '' },
      2: { text: '阴天', icon: '' },
      3: { text: '多云转阴', icon: '' },
      45: { text: '晨雾', icon: '' },
      48: { text: '轻雾', icon: '' },
      51: { text: '毛毛细雨', icon: '' },
      53: { text: '小阵雨', icon: '' },
      61: { text: '小雨', icon: '' },
      63: { text: '中雨', icon: '' },
      71: { text: '零星小雪', icon: '' },
      73: { text: '小雪', icon: '' }
    };

    async function fetchLiveWeather(isUserClick = false) {
      const btnText = document.getElementById('wwBtnText');
      if (btnText && isUserClick) btnText.innerText = '刷新中...';

      // Open-Meteo for Yanji city core (42.9060, 129.5105)
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=42.9060&longitude=129.5105&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=Asia%2FShanghai';

      try {
        const resp = await fetch(url, { cache: 'no-store' });
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const data = await resp.json();

        renderWeatherUI(data);

        const statusLabel = document.getElementById('wwLiveLabel');
        if (statusLabel) statusLabel.innerText = '气象实时同步';

        try {
          localStorage.setItem('yj_weather_cache', JSON.stringify({
            timestamp: Date.now(),
            data: data
          }));
        } catch(e) {}
      } catch (err) {
        console.warn('Live weather fetch failed, fallback to cache:', err);
        const cached = localStorage.getItem('yj_weather_cache');
        if (cached) {
          try {
            renderWeatherUI(JSON.parse(cached).data);
            const statusLabel = document.getElementById('wwLiveLabel');
            if (statusLabel) statusLabel.innerText = '使用本地离线数据';
          } catch(e) {}
        }
      } finally {
        if (btnText) btnText.innerText = '刷新';
      }
    }

    function renderWeatherUI(data) {
      if (!data || !data.current || !data.daily) return;

      const curTemp = Math.round(data.current.temperature_2m);
      const appTemp = Math.round(data.current.apparent_temperature);
      const hum = Math.round(data.current.relative_humidity_2m);
      const windKmh = data.current.wind_speed_10m;
      const wCode = data.current.weather_code;
      const condInfo = WEATHER_CODE_MAP[wCode] || { text: '秋高气爽' };

      const hdrPill = document.getElementById('hdrMiniWeather');
      if (hdrPill) hdrPill.innerText = \`\${curTemp}°C \${condInfo.text} · 7日天气 ↗\`;

      const curTempEl = document.getElementById('wwCurTemp');
      if (curTempEl) curTempEl.innerText = curTemp + '°';

      const curCondEl = document.getElementById('wwCurCond');
      if (curCondEl) curCondEl.innerText = '秋高气爽 · ' + condInfo.text;

      const appEl = document.getElementById('wwApparent');
      if (appEl) appEl.innerText = appTemp + '°';

      const humEl = document.getElementById('wwHumidity');
      if (humEl) humEl.innerText = hum + '%';

      const windEl = document.getElementById('wwWind');
      if (windEl) windEl.innerText = Math.round(windKmh / 3.6) + '级 西北风';

      const forecastBox = document.getElementById('wwForecastContainer');
      if (forecastBox && data.daily.time) {
        let html = '';
        for (let i = 0; i < Math.min(data.daily.time.length, 7); i++) {
          const dateStr = data.daily.time[i];
          const parts = dateStr.split('-');
          const label = parts[1] + '/' + parts[2];
          const maxT = Math.round(data.daily.temperature_2m_max[i]);
          const minT = Math.round(data.daily.temperature_2m_min[i]);
          const dayCode = data.daily.weather_code[i];
          const dayCond = (WEATHER_CODE_MAP[dayCode] || { text: '晴' }).text;

          html += \`
            <div class="ww-day-col">
              <span class="ww-date">\${label}</span>
              <span class="ww-day-icon">\${dayCond}</span>
              <span class="ww-high">\${maxT}°</span>
              <span class="ww-low">\${minT}°</span>
            </div>
          \`;
        }
        forecastBox.innerHTML = html;
      }
    }

    function openDianping(keyword, evt) {
      if (evt) evt.preventDefault();
      const enc = encodeURIComponent(keyword);
      const dpSchema = 'dianping://searchshoplist?keyword=' + enc;
      const webFallback = 'https://m.dianping.com/search/keyword/1/0_' + enc;

      const start = Date.now();
      window.location.href = dpSchema;

      setTimeout(() => {
        if (Date.now() - start < 1500) {
          window.open(webFallback, '_blank');
        }
      }, 800);
    }

    function showToast(msg) {
      const box = document.getElementById('toastBox');
      if (!box) return;
      box.innerText = msg;
      box.classList.add('show');
      setTimeout(() => box.classList.remove('show'), 2500);
    }

    // ==========================================
    // Yanji Geo Points Database (No self-driving)
    // ==========================================
    const YJ_SPOTS = {
      hotel: { name: '延吉中心希尔顿欢朋酒店(核心驻地)', coord: [42.9060, 129.5105], day: 1 },
      west_station: { name: '延吉西站 (高铁出入枢纽)', coord: [42.9025, 129.4350], day: 1 },
      d1_yuannainai: { name: '老字号元奶奶包肉(总店)', coord: [42.9050, 129.5080], day: 1 },

      d2_museum: { name: '延边博物馆 (国家一级馆)', coord: [42.8985, 129.4580], day: 2 },
      d2_dapiao: { name: '大朴家高丽参鸡汤(老字号)', coord: [42.9010, 129.4950], day: 2 },
      d2_maoershan: { name: '帽儿山国家森林公园(木栈道)', coord: [42.8250, 129.5050], day: 2 },
      d2_ybu: { name: '延边大学 (学府漫步/大飞檐)', coord: [42.9090, 129.4880], day: 2 },
      d2_danmu: { name: '网红双语弹幕墙 (对街开阔远眺)', coord: [42.9080, 129.4870], day: 2 },
      d2_fengmao: { name: '丰茂烤串(旗舰无烟包房)', coord: [42.9120, 129.5150], day: 2 },

      // Day 3 Option A: Hunchun Fangchuan Border & King Crab
      d3_fangchuan: { name: '珲春防川 · 龙虎阁一眼望三国', coord: [42.4830, 130.6400], day: 3 },
      d3_crab_hunchun: { name: '珲春海鲜街 · 活蒸帝王蟹', coord: [42.8620, 130.3650], day: 3 },
      d3_quanzhou: { name: '全州拌饭百年老店', coord: [42.9040, 129.5090], day: 3 },

      // Day 3 Option B: Tumen Border Port & Riguangshan
      d3_tumen_port: { name: '图们口岸国门 & 86号界碑', coord: [42.9620, 129.8510], day: 3 },
      d3_riguangshan: { name: '日光山森林公园观景台', coord: [42.9480, 129.8450], day: 3 },
      d3_lixiang: { name: '李香石锅饭明太鱼馆', coord: [42.9650, 129.8480], day: 3 },

      // Day 4: Longjing Rice Fields & Yanji Park
      d4_rice: { name: '龙井良田百世万亩水稻金浪', coord: [42.7660, 129.4280], day: 4 },
      d4_applepear: { name: '龙井亚洲最大苹果梨祖树园', coord: [42.7520, 129.4150], day: 4 },
      d4_niupai: { name: '龙井海兰江黄牛排骨火锅', coord: [42.7710, 129.4320], day: 4 },
      d4_park: { name: '延吉人民公园百年古榆林海', coord: [42.9080, 129.5040], day: 4 },
      d4_coffee: { name: '劳顶笨慢咖啡旗舰总店', coord: [42.9065, 129.5120], day: 4 },
      d4_shunji: { name: '顺姬冷面旗舰店(玉米温面)', coord: [42.9075, 129.5085], day: 4 },

      // Day 5: Morning Market, West Market & Yanji King Crab
      d5_watermarket: { name: '延吉水上市场露天晨市(现打打糕)', coord: [42.9125, 129.5180], day: 5 },
      d5_westmarket: { name: '延吉西市场特产直邮大厦', coord: [42.9055, 129.5060], day: 5 },
      d5_xingdou: { name: '兴豆饭店老字号(炸酱面软炸肉)', coord: [42.9030, 129.5095], day: 5 },
      d5_burhatong: { name: '布尔哈通河畔金秋水岸晚霞', coord: [42.9015, 129.5130], day: 5 },
      d5_crab_yanji: { name: '震海贝烤贝·活蟹海鲜专门店(延吉帝王蟹)', coord: [42.9095, 129.5160], day: 5 }
    };

    function initYjMiniMap(dayKey) {
      if (typeof L === 'undefined') return;
      const elId = 'miniMap_' + dayKey;
      const container = document.getElementById(elId);
      if (!container || yjMiniMaps[dayKey]) return;

      const map = L.map(elId, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false
      });

      L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        subdomains: ['1', '2', '3', '4'],
        maxZoom: 18
      }).addTo(map);

      yjMiniMaps[dayKey] = map;
      yjMiniLayers[dayKey] = {
        markers: [],
        polyline: null
      };

      updateYjDayRoute(dayKey);
    }

    function updateYjDayRoute(dayKey) {
      const map = yjMiniMaps[dayKey];
      if (!map) return;

      const layerData = yjMiniLayers[dayKey];
      if (layerData.polyline) map.removeLayer(layerData.polyline);
      layerData.markers.forEach(m => map.removeLayer(m));
      layerData.markers = [];

      let stops = [];
      let totalDist = '';
      let totalSteps = '';

      if (dayKey === 'day1') {
        const d1Dinner = document.querySelector('input[name="d1_dinner"]:checked')?.value || 'yuannainai';

        stops.push(YJ_SPOTS.west_station);
        stops.push(YJ_SPOTS.hotel);
        if (d1Dinner === 'yuannainai') stops.push(YJ_SPOTS.d1_yuannainai);

        totalDist = '约 8.5 km (专车顺畅送达)';
        totalSteps = '约 1,200 步 (仅酒店内走动，彻底休整)';
      } else if (dayKey === 'day2') {
        stops.push(YJ_SPOTS.hotel);
        stops.push(YJ_SPOTS.d2_museum);
        stops.push(YJ_SPOTS.d2_dapiao);
        stops.push(YJ_SPOTS.hotel); // 中午回酒店午休
        stops.push(YJ_SPOTS.d2_maoershan);
        stops.push(YJ_SPOTS.d2_ybu);
        stops.push(YJ_SPOTS.d2_danmu);
        stops.push(YJ_SPOTS.d2_fengmao);
        stops.push(YJ_SPOTS.hotel);

        totalDist = '约 22 km (网约打车起步价随叫随到)';
        totalSteps = '约 5,200 步 (木栈道缓坡与校园平步)';
      } else if (dayKey === 'day3') {
        const d3Route = document.querySelector('input[name="d3_route"]:checked')?.value || 'go_hunchun';
        const d3Trans = document.querySelector('input[name="d3_transport"]:checked')?.value || 'charter';
        renderDay3Cards(d3Route, d3Trans);

        if (d3Route === 'go_hunchun') {
          stops.push(YJ_SPOTS.hotel);
          stops.push(YJ_SPOTS.d3_fangchuan);
          stops.push(YJ_SPOTS.d3_crab_hunchun);
          stops.push(YJ_SPOTS.hotel); // 回酒店休整
          stops.push(YJ_SPOTS.d3_quanzhou);
          stops.push(YJ_SPOTS.hotel);

          totalDist = (d3Trans === 'charter') ? '约 280 km (7座商务专车一车到底)' : '约 110 km (高铁40m + 珲春地接用车)';
          totalSteps = '约 4,500 步 (龙虎阁直梯观景)';
        } else {
          stops.push(YJ_SPOTS.hotel);
          stops.push(YJ_SPOTS.d3_tumen_port);
          stops.push(YJ_SPOTS.d3_lixiang);
          stops.push(YJ_SPOTS.d3_riguangshan);
          stops.push(YJ_SPOTS.hotel); // 回延吉午休
          stops.push(YJ_SPOTS.d3_quanzhou);
          stops.push(YJ_SPOTS.hotel);

          totalDist = '约 110 km (专车往返仅45分钟)';
          totalSteps = '约 3,800 步 (纯平江堤漫步)';
        }
      } else if (dayKey === 'day4') {
        stops.push(YJ_SPOTS.hotel);
        stops.push(YJ_SPOTS.d4_rice);
        stops.push(YJ_SPOTS.d4_applepear);
        stops.push(YJ_SPOTS.d4_niupai);
        stops.push(YJ_SPOTS.hotel); // 回酒店午休
        stops.push(YJ_SPOTS.d4_park);
        stops.push(YJ_SPOTS.d4_coffee);
        stops.push(YJ_SPOTS.d4_shunji);
        stops.push(YJ_SPOTS.hotel);

        totalDist = '约 26 km (专车/打车便捷往返)';
        totalSteps = '约 4,800 步 (小火车穿行稻海)';
      } else if (dayKey === 'day5') {
        stops.push(YJ_SPOTS.hotel);
        stops.push(YJ_SPOTS.d5_watermarket);
        stops.push(YJ_SPOTS.d5_westmarket);
        stops.push(YJ_SPOTS.d5_xingdou);
        stops.push(YJ_SPOTS.hotel); // 回酒店午休
        stops.push(YJ_SPOTS.d5_burhatong);
        stops.push(YJ_SPOTS.d5_crab_yanji);
        stops.push(YJ_SPOTS.hotel);

        totalDist = '约 10 km (打车起步价随叫随到)';
        totalSteps = '约 5,000 步 (集市平坦采购)';
      }

      const statsEl = document.getElementById('dccStats_' + dayKey);
      if (statsEl) {
        statsEl.innerHTML = \`
          <span>预计车程: <strong>\${totalDist}</strong></span>
          <span>舒享步数: <strong>\${totalSteps}</strong></span>
        \`;
      }

      // Draw Markers
      const latlngs = [];
      stops.forEach((st, idx) => {
        const coord = st.coord;
        latlngs.push(coord);

        const isHotel = st.name.includes('欢朋酒店');
        const iconHtml = \`
          <div style="background:\${isHotel ? '#0F172A' : '#2563EB'}; color:#FFF; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; border:2px solid #FFF; box-shadow:0 2px 6px rgba(0,0,0,0.3);">
            \${isHotel ? 'H' : idx + 1}
          </div>
        \`;
        const customIcon = L.divIcon({
          className: 'custom-map-marker',
          html: iconHtml,
          iconSize: [22, 22],
          iconAnchor: [11, 11]
        });

        const m = L.marker(coord, { icon: customIcon }).addTo(map);
        m.bindPopup(\`<strong>\${st.name}</strong>\`);
        layerData.markers.push(m);
      });

      // Draw Polyline
      if (latlngs.length > 1) {
        layerData.polyline = L.polyline(latlngs, {
          color: '#2563EB',
          weight: 3.5,
          opacity: 0.85,
          dashArray: '6, 6'
        }).addTo(map);

        map.fitBounds(layerData.polyline.getBounds(), { padding: [25, 25] });
      } else if (latlngs.length === 1) {
        map.setView(latlngs[0], 13);
      }
    }

    function renderDay3Cards(mode, transMode) {
      const container = document.getElementById('d3_cards_container');
      if (!container) return;

      const isCharter = (transMode !== 'bullet_train');

      if (mode === 'go_hunchun') {
        container.innerHTML = \`
          <div class="section-title">核心行程节奏 (珲春三国交界与第一顿活蒸帝王蟹)</div>
          
          <div class="act-card" style="border: 1px solid var(--brand-accent);">
            <div class="act-header">
              <span class="act-time-pill" style="background:var(--brand-accent); color:#FFF;">\${isCharter ? '商务专车门到门 ~1h45m' : '城际高铁极速接驳 ~40m'}</span>
              <span class="act-intensity intensity-ride">\${isCharter ? '7座商务专车' : 'C字头高铁'}</span>
            </div>
            <div class="act-name">
              <span>\${isCharter ? '7座商务专车在酒店大门迎候 · 沿珲乌高速驶往防川 (150 km)' : '打车至西站搭乘 C字头高铁直达珲春站 (40m · ¥28)'}</span>
            </div>
            <div class="act-tagline">\${isCharter ? 
              '早晨 08:30 7座舒适商务专车准时在希尔顿欢朋大堂门前迎候。长辈上车即走，随身保暖衣物与保温杯随车携带；双向四车道高速公路平稳笔直，长辈在车内后排舒心小憩，彻底免除进出高铁站排队安检换乘的奔波劳顿。' : 
              '早晨打车至延吉西站，搭乘城际高铁直达珲春站，运行仅需约 40 分钟。列车平稳舒适，车厢恒温宽敞；出站后与珲春当地预订的专属地接包车对接，平稳驶往防川。'}</div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              <span>直梯直达 12 层观景台</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">三国交界 ~1.5h</span>
              <span class="act-intensity intensity-flat">全高速观光直梯</span>
            </div>
            <div class="act-name">
              <span>防川国家级名胜区 · 龙虎阁 12 层“一眼望三国”</span>
              <a href="dianping://searchshoplist?keyword=%E7%8F%B2%E6%98%A5%20%E9%98%B2%E5%B7%9D" onclick="openDianping('珲春 防川 龙虎阁', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">防川龙虎阁高 64.8 米，内设高速直梯直抵高层观景台。极目远眺中朝俄三国交界：左侧俄罗斯边境城镇包得哥尔那亚、右侧朝鲜豆满江里、脚下中国图们江入海口与中朝俄铁路大桥，极目天舒甚至能远眺日本海。瞻仰清代收复疆土功臣吴大澂汉白玉雕像，气势恢弘壮阔！</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_fangchuan.jpg" alt="防川龙虎阁一眼望三国" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=960&q=80'" />
                <div class="photo-badge">最佳机位</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">龙虎阁 12 层露天观景台正南向中轴线，远眺三国江山交界与图们江蜿蜒入海。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">10:30 - 12:00 上午雾气散尽、视野最为通透澄澈的时段。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈扶着观景台汉白玉石栏，胸怀壮阔三国江山，气势庄严非凡。</span>
                </div>
              </div>
            </div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              <span>专车 ~50m · 68 km 回珲春市区海鲜街</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">第一顿帝王蟹盛宴 ~1.5h</span>
              <span class="act-intensity intensity-flat">俄罗斯直运活鲜</span>
            </div>
            <div class="act-name">
              <span>珲春海鲜街 · 醉香阁/蟹港俄罗斯直运活蒸帝王蟹</span>
              <a href="dianping://searchshoplist?keyword=%E7%8F%B2%E6%98%A5%20%E6%B5%B7%E9%B2%9C%E8%A1%97" onclick="openDianping('珲春 海鲜街 帝王蟹', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.9分 · 现场活水现挑 · 人均 ¥260-350</div>
            <div class="act-tagline">【珲春第一顿帝王蟹盛宴】珲春拥有全国最大俄罗斯活体帝王蟹集散口岸。现场在大水池挑选鲜活帝王蟹，整只原汁原味清蒸上桌。蟹肉雪白紧实、饱满多汁，天然清甜毫不油腻，长辈无需费力咀嚼即可大快朵颐；蟹膏调入温热海鲜粥，温润暖胃，顶级体验！</div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              <span>\${isCharter ? '专车 ~1h20m · 110 km 高速直达延吉希尔顿欢朋酒店' : '高铁40m返回延吉西站后专车送回酒店'}</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">酒店休整 ~1.5h</span>
              <span class="act-intensity intensity-flat">酒店安坐品茗</span>
            </div>
            <div class="act-name">
              <span>【身心调养】返回希尔顿欢朋酒店休整与品茶</span>
            </div>
            <div class="act-tagline">下午 16:00 前返回延吉，在客房泡一杯热腾腾的长白山五味子茶，长辈坐卧安歇，彻底消除车行微倦。</div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">清润晚宴 ~1h</span>
              <span class="act-intensity intensity-flat">温润石锅拌饭</span>
            </div>
            <div class="act-name">
              <span>全州拌饭百年老店</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%85%A8%E5%B7%9E%E6%8B%8C%E9%A5%AD" onclick="openDianping('延吉 全州拌饭', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">中午品尝了丰盛海鲜大餐，晚餐适宜清润从容。全州拌饭的五彩石锅热饭蔬菜丰富，配鲜嫩软豆腐汤，暖胃舒适。</div>
          </div>
        \`;
      } else {
        container.innerHTML = \`
          <div class="section-title">核心行程节奏 (图们边境口岸与日光山线)</div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">近郊专车 ~45m</span>
              <span class="act-intensity intensity-ride">超低车程</span>
            </div>
            <div class="act-name">
              <span>专车前往图们边境口岸 (50 km)</span>
            </div>
            <div class="act-tagline">09:30 从希尔顿欢朋从容出发，专车仅需 45 分钟即达图们江畔。车程超短、零颠簸劳累，非常适宜想少坐车的从容节奏。</div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              <span>图们江沿江纯平木栈道漫步</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">边境漫步 ~1.5h</span>
              <span class="act-intensity intensity-flat">纯平沿江步道</span>
            </div>
            <div class="act-name">
              <span>图们口岸国门 & 86号界碑 & 中朝边境大桥</span>
              <a href="dianping://searchshoplist?keyword=%E5%9B%BE%E4%BB%AC%E5%8F%A3%E5%B2%B8" onclick="openDianping('图们口岸', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">站在图们江边境国门桥头，平视对岸朝鲜南阳市火车站与居民楼，体会近在咫尺的跨国历史印记。沿江铺设有平整木质栈道，江水清澈，步道纯平好走。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_tumen.jpg" alt="图们边境口岸国门" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=960&q=80'" />
                <div class="photo-badge">最佳机位</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">国门广场 86 号界碑旁，正对中朝跨国大桥中线。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈立于界碑旁庄重留影，背景为对岸朝鲜南阳山峦，极具纪念价值。</span>
                </div>
              </div>
            </div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">特色午宴 ~1h</span>
              <span class="act-intensity intensity-flat">地道石锅饭</span>
            </div>
            <div class="act-name">
              <span>李香石锅饭明太鱼馆</span>
            </div>
            <div class="act-tagline">图们本地名店。热石锅饭锅底金黄焦香，搭配软烂清炖明太鱼与海带豆腐汤，清爽鲜美。</div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              <span>车辆直达日光山山顶观景台</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">高空俯瞰 ~1h</span>
              <span class="act-intensity intensity-flat">车辆直接开抵</span>
            </div>
            <div class="act-name">
              <span>日光山森林公园观景台（俯瞰图们江大拐弯）</span>
            </div>
            <div class="act-tagline">专车可直接沿平坦盘山公路开到山顶观景台。长辈下车即入观景石台，360 度俯瞰图们江壮美大拐弯与中朝两国田园风光，免除任何爬坡辛劳。</div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              <span>专车 ~45m · 50 km 返回延吉中心希尔顿欢朋酒店深度午休</span>
            </div>
            <div class="ts-line"></div>
          </div>
        \`;
      }
    }

    // ==========================================
    // Overview Big Map Engine
    // ==========================================
    function initOverviewMap() {
      if (typeof L === 'undefined') return;
      const el = document.getElementById('overviewBigMap');
      if (!el || overviewMapInstance) return;

      overviewMapInstance = L.map('overviewBigMap', {
        zoomControl: true,
        attributionControl: false
      }).setView([42.9060, 129.5105], 11);

      L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        subdomains: ['1', '2', '3', '4'],
        maxZoom: 18
      }).addTo(overviewMapInstance);

      filterOverviewMap('all');
    }

    function filterOverviewMap(dayKey) {
      if (!overviewMapInstance) return;

      document.querySelectorAll('.overview-filter-bar .ov-pill').forEach(b => b.classList.remove('active'));
      const activeBtn = Array.from(document.querySelectorAll('.overview-filter-bar .ov-pill')).find(b => {
        if (dayKey === 'all') return b.innerText.includes('全部');
        return b.innerText.toLowerCase().includes(dayKey);
      });
      if (activeBtn) activeBtn.classList.add('active');

      overviewMarkers.forEach(m => overviewMapInstance.removeLayer(m));
      overviewMarkers = [];
      if (overviewPolyline) {
        overviewMapInstance.removeLayer(overviewPolyline);
        overviewPolyline = null;
      }

      const points = [];
      for (let k in YJ_SPOTS) {
        const spot = YJ_SPOTS[k];
        if (dayKey === 'all' || ('day' + spot.day === dayKey)) {
          points.push(spot);

          const isHotel = spot.name.includes('欢朋酒店');
          const markerHtml = \`
            <div style="background:\${isHotel ? '#0F172A' : '#2563EB'}; color:#FFF; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; border:2px solid #FFF; box-shadow:0 2px 8px rgba(0,0,0,0.35);">
              \${isHotel ? 'H' : '点'}
            </div>
          \`;
          const customIcon = L.divIcon({
            className: 'custom-map-marker-ov',
            html: markerHtml,
            iconSize: [26, 26],
            iconAnchor: [13, 13]
          });

          const m = L.marker(spot.coord, { icon: customIcon }).addTo(overviewMapInstance);
          m.bindPopup(\`
            <div style="font-size:13px; font-weight:700; color:#0F172A; margin-bottom:4px;">\${spot.name}</div>
            <div style="font-size:11px; color:#64748B;">长辈关怀：专车平步下客 · 舒缓无台阶</div>
          \`);
          overviewMarkers.push(m);
        }
      }

      if (points.length > 1) {
        const latlngs = points.map(p => p.coord);
        overviewPolyline = L.polyline(latlngs, {
          color: '#2563EB',
          weight: 3,
          opacity: 0.65,
          dashArray: '5, 5'
        }).addTo(overviewMapInstance);

        overviewMapInstance.fitBounds(overviewPolyline.getBounds(), { padding: [35, 35] });
      } else if (points.length === 1) {
        overviewMapInstance.setView(points[0].coord, 13);
      }
    }

    // ==========================================
    // Idea & Customization Portal Engine
    // ==========================================
    let currentSelectedDay = '全程 / 未定';
    let currentSelectedType = '新增打卡';

    function toggleIdeaDrawer(open) {
      const overlay = document.getElementById('ideaOverlay');
      if (overlay) {
        if (open) {
          overlay.classList.add('active');
          document.body.style.overflow = 'hidden';
          renderSavedIdeasList();
        } else {
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    }

    function selectIdeaDay(day, btnEl) {
      currentSelectedDay = day;
      const container = document.getElementById('ideaDayPills');
      if (container) {
        container.querySelectorAll('.idea-pill').forEach(b => b.classList.remove('active'));
      }
      if (btnEl) btnEl.classList.add('active');
    }

    function selectIdeaType(type, btnEl) {
      currentSelectedType = type;
      const container = document.getElementById('ideaTypePills');
      if (container) {
        container.querySelectorAll('.idea-pill').forEach(b => b.classList.remove('active'));
      }
      if (btnEl) btnEl.classList.add('active');
    }

    function fillIdeaPreset(text, day, type) {
      const input = document.getElementById('ideaInputText');
      if (input) input.value = text;

      if (day) {
        const dayBtn = Array.from(document.querySelectorAll('#ideaDayPills .idea-pill')).find(b => b.innerText.includes(day));
        if (dayBtn) selectIdeaDay(day, dayBtn);
      }
      if (type) {
        const typeBtn = Array.from(document.querySelectorAll('#ideaTypePills .idea-pill')).find(b => b.innerText.includes(type));
        if (typeBtn) selectIdeaType(type, typeBtn);
      }

      saveAndAnalyzeIdea();
    }

    function getSavedIdeas() {
      try {
        const raw = localStorage.getItem('yj_trip_ideas');
        return raw ? JSON.parse(raw) : [];
      } catch(e) {
        return [];
      }
    }

    function setSavedIdeas(list) {
      try {
        localStorage.setItem('yj_trip_ideas', JSON.stringify(list));
      } catch(e) {}
    }

    function saveAndAnalyzeIdea() {
      const input = document.getElementById('ideaInputText');
      const box = document.getElementById('ideaAnalysisBox');
      if (!input || !box) return;

      const raw = input.value.trim();
      if (!raw) {
        showToast('请先输入或粘贴想法内容');
        input.focus();
        return;
      }

      // 1. Save to LocalStorage
      const ideas = getSavedIdeas();
      const newEntry = {
        id: 'idea_' + Date.now(),
        text: raw,
        day: currentSelectedDay,
        type: currentSelectedType,
        createdAt: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      };
      ideas.unshift(newEntry);
      setSavedIdeas(ideas);
      renderSavedIdeasList();

      // 2. Perform Intelligent Feasibility Analysis Tailored for Yanji
      box.style.display = 'block';
      box.innerHTML = '<div style="text-align:center; padding:12px; color:#64748B;">正在结合延吉长辈出行关怀规则与出行方案研判中...</div>';

      setTimeout(() => {
        const text = raw.toLowerCase();
        let rating = 'green';
        let title = '';
        let badge = '';
        let stepsInfo = '';
        let dropoffInfo = '';
        let itineraryAdvice = '';

        if (text.includes('包车') || text.includes('租车') || text.includes('专车') || text.includes('怎么去珲春')) {
          title = '珲春/防川包车出行方案研判';
          rating = 'green';
          badge = '[强烈推荐 · 7座商务包车]';
          stepsInfo = '专职司机在希尔顿欢朋大堂迎送，门到门零换乘，长辈免除高铁站排队进出与安检折腾，随身物品放车上。';
          dropoffInfo = '推荐三大靠谱渠道：① 携程官方“私家包车一日游”（明码标价一价全包）；② 希尔顿欢朋酒店礼宾部协议车队；③ 滴滴按天包车。';
          itineraryAdvice = '【出行确认】已在 Day 3 默认设为 7 座商务包车直达防川与海鲜街，全程四车道高速，长辈最省心！';
        } else if (text.includes('第一天') || text.includes('休整') || text.includes('不要安排') || text.includes('累了')) {
          title = '第一天（10/1）彻底零行程休整指令';
          rating = 'green';
          badge = '[已严格落实 · 纯休整]';
          stepsInfo = '15:00 抵延吉西站后专车直抵酒店，进房洗漱休息，下午与傍晚彻底不安排任何外出景点！';
          dropoffInfo = '晚餐在酒店内或步行3分钟老字号清淡温补，早早安歇。';
          itineraryAdvice = '【已落实】原延边大学校园漫步已顺畅移至 Day 2 傍晚顺光打卡，第一天长辈 100% 深度休整！';
        } else if (text.includes('帝王蟹') || text.includes('吃蟹') || text.includes('海鲜')) {
          title = '延吉 & 珲春双重鲜活帝王蟹盛宴';
          rating = 'green';
          badge = '[尊享双蟹宴 · 清蒸滋补]';
          stepsInfo = '帝王蟹整只清蒸，大腿肉雪白鲜甜软嫩，无需费力咀嚼，蟹膏做温热海鲜粥，滋阴养胃极适口。';
          dropoffInfo = '珲春安排在【海鲜街·醉香阁】现场活挑；延吉安排在市内活海鲜标杆【震海贝烤贝总店】独立包厢。';
          itineraryAdvice = '【双重满足】已为您在 Day 3（珲春海鲜街）与 Day 5（延吉震海贝烤贝）分别安排了两顿不同风味的鲜活俄罗斯帝王蟹大餐！';
        } else if (text.includes('恐龙') || text.includes('王国') || text.includes('乐园')) {
          title = '延吉恐龙王国 / 机械游乐园';
          rating = 'red';
          badge = '[坚决避坑 · 已按指令排除]';
          stepsInfo = '大型机械游乐场排队时间极长、人声嘈杂且大多设施长辈无法游玩，体能消耗大。';
          dropoffInfo = '门票昂贵且节假日园区暴晒，缺乏民族特色文化沉淀。';
          itineraryAdvice = '【坚决排除】已按您的要求彻底剔除！长辈更适合 Day 2 的国家一级【延边博物馆】以及 Day 4 的【海兰江万亩稻浪】，文化深厚开阔怡情！';
        } else if (text.includes('民俗村') || text.includes('民俗园') || text.includes('朝鲜族民俗园')) {
          title = '中国朝鲜族民俗园 (商业人造景区)';
          rating = 'red';
          badge = '[坚决避坑 · 已按指令排除]';
          stepsInfo = '商业化租装拍照极其拥挤扎堆，几万名游客排队抢机位，嘈杂杂乱，长辈极易疲累。';
          dropoffInfo = '周边节假日严重堵车，停车排队通常超过 1 小时。';
          itineraryAdvice = '【坚决排除】已按您的要求彻底剔除！系统为您安排了真正的【延边博物馆】（国家一级馆藏实景还原）与【龙井海兰江畔原生态稻乡】，真切自然又高雅。';
        } else if (text.includes('冷面') || text.includes('大碗冷面') || text.includes('冰碴')) {
          title = '延吉冷面（极冰生冷需注意）';
          rating = 'yellow';
          badge = '[长辈适口改造 · 推荐温面]';
          stepsInfo = '传统延吉冷面汤底带大量冰碴、酸甜重口，极易刺激长辈肠胃引起腹泻。';
          dropoffInfo = '老字号冷面馆均提供热高汤和热食选项。';
          itineraryAdvice = '【点餐建议】在顺姬冷面，建议为长辈点选【招牌现煮玉米温面】（热高汤香醇浓郁暖胃）或【热石锅拌饭】，搭配香酥锅包肉！';
        } else if (text.includes('水上市场') || text.includes('早市') || text.includes('打糕') || text.includes('江米鸡')) {
          title = '延吉水上市场露天晨市';
          rating = 'green';
          badge = '[长辈最爱烟火气 · 早起慢逛]';
          stepsInfo = '沿烟集河平坦堤岸分布，清晨 07:30 前往，品尝热气腾腾的江米鸡、现打黄豆面打糕、现磨热豆浆。';
          dropoffInfo = '距希尔顿欢朋酒店仅 1.2 公里，打车 5 分钟即达。';
          itineraryAdvice = '【出行建议】Day 5 清晨安排打卡，长辈腿脚好慢慢逛，呼吸秋晨空气，吃饱热早点后再回西市场采购特产。';
        } else if (text.includes('西市场') || text.includes('特产') || text.includes('伴手礼') || text.includes('木耳') || text.includes('苹果梨')) {
          title = '延吉西市场民族特产大厦';
          rating = 'green';
          badge = '[全直梯商厦 · 官方顺丰直邮]';
          stepsInfo = '室内现代化综合大厦，直梯上下，选购正宗延边苹果梨、椴木黑木耳、明太鱼干、温和低盐泡菜、手工温和米酒。';
          dropoffInfo = '一楼设有官方顺丰直邮专柜，现场称重打包寄回家，长辈无需手提任何重物。';
          itineraryAdvice = '【购物建议】安排在 Day 5 上午逛完水上市场后前往，离希尔顿欢朋仅 800 米，轻松从容。';
        } else {
          title = '行程新灵感 / 定制指令研判';
          rating = 'green';
          badge = '[已记录备忘 · 灵活融入]';
          stepsInfo = '建议核实地面平缓度与步行距离，市内以网约车点对点接送为主。';
          dropoffInfo = '司机在平坦路缘下客，下车即进门。';
          itineraryAdvice = '【融入建议】已为您存入便签池！建议将其插入在【' + currentSelectedDay + '】下午午休之后，或者替换相近方位的景点。';
        }

        const borderCol = (rating === 'red') ? '#64748B' : '#2563EB';
        const bgCol = (rating === 'red') ? '#F1F5F9' : '#EFF6FF';

        const exportPrompt = \`【延吉慢游·新需求指令】\\n适用日程：\${currentSelectedDay}\\n类型分类：\${currentSelectedType}\\n需求内容：\${raw}\\n长辈关怀约束：从容慢游、连住希尔顿欢朋、酒店午休、平缓少台阶、排除恐龙乐园与民俗村、专车包车与打车出行\\n研判建议：\${itineraryAdvice}\`;

        box.innerHTML = \`
          <div style="border-left: 4px solid \${borderCol}; padding-left: 10px; margin-bottom: 10px;">
            <div style="font-size: 15px; font-weight: 800; color: #0F172A;">\${title}</div>
            <div style="display:inline-block; font-size: 11px; font-weight:700; color:\${borderCol}; background:\${bgCol}; padding:2px 8px; border-radius:10px; margin-top:4px;">\${badge}</div>
          </div>
          
          <div style="display:flex; flex-direction:column; gap:6px; font-size:12px; line-height:1.5;">
            <div><strong>长辈体能与接驳:</strong> <span style="color:#475569;">\${stepsInfo}</span></div>
            <div><strong>乘车与落客指引:</strong> <span style="color:#475569;">\${dropoffInfo}</span></div>
            <div style="margin-top:4px; padding:8px 10px; background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px;">
              <strong style="color:#0F172A;">\${itineraryAdvice}</strong>
            </div>
          </div>

          <div style="display:flex; gap:8px; margin-top:12px;">
            <button onclick="copyIdeaToClipboard('\${encodeURIComponent(exportPrompt)}', 'ai')" style="flex:1; height:32px; background:#0F172A; color:#FFF; border:none; border-radius:8px; font-size:11px; font-weight:600; cursor:pointer;">
              📋 复制为AI调整指令
            </button>
            <button onclick="copyIdeaToClipboard('\${encodeURIComponent(raw + ' (已存入延吉便签池)')}', 'wechat')" style="flex:1; height:32px; background:#F1F5F9; color:#0F172A; border:1px solid #CBD5E1; border-radius:8px; font-size:11px; font-weight:600; cursor:pointer;">
              💬 复制到微信讨论
            </button>
          </div>
        \`;
      }, 300);
    }

    function renderSavedIdeasList() {
      const container = document.getElementById('savedIdeasList');
      if (!container) return;

      const ideas = getSavedIdeas();
      if (!ideas || ideas.length === 0) {
        container.innerHTML = '<div style="font-size:12px; color:#94A3B8; text-align:center; padding:16px;">便签池暂无内容，随时粘贴您的灵感与指令</div>';
        return;
      }

      let html = '';
      ideas.forEach(item => {
        html += \`
          <div class="idea-saved-item">
            <div class="isi-top">
              <div class="isi-meta">
                <span class="isi-day">\${item.day}</span>
                <span class="isi-type">\${item.type}</span>
                <span style="color:#94A3B8; font-size:10px;">\${item.createdAt || ''}</span>
              </div>
              <button class="isi-del-btn" onclick="deleteSavedIdea('\${item.id}')" title="删除">✕</button>
            </div>
            <div class="isi-text">\${item.text}</div>
          </div>
        \`;
      });
      container.innerHTML = html;
    }

    function deleteSavedIdea(id) {
      let ideas = getSavedIdeas();
      ideas = ideas.filter(item => item.id !== id);
      setSavedIdeas(ideas);
      renderSavedIdeasList();
      showToast('已从便签池移除');
    }

    function clearAllIdeas() {
      if (confirm('确定要清空全部便签记录吗？')) {
        setSavedIdeas([]);
        renderSavedIdeasList();
        showToast('便签池已清空');
      }
    }

    function copyIdeaToClipboard(encodedText, type) {
      const text = decodeURIComponent(encodedText);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(type === 'ai' ? '已复制为 AI 结构化调整指令！' : '已复制，可直接粘贴发送到微信！');
        }).catch(() => {
          prompt('请长按下方文本复制：', text);
        });
      } else {
        prompt('请长按下方文本复制：', text);
      }
    }

    // ==========================================
    // Initializer
    // ==========================================
    window.addEventListener('DOMContentLoaded', () => {
      switchDay('day1');
      fetchLiveWeather(false);
      renderSavedIdeasList();
    });
  </script>
</body>
</html>
`;

// Write to source_yanji.html
const yanjiSourcePath = path.join(__dirname, '..', 'source_yanji.html');
fs.writeFileSync(yanjiSourcePath, yanjiHtml);
console.log('Successfully generated updated source_yanji.html! File length:', yanjiHtml.length);
