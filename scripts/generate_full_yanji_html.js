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
        <span class="pill-sub">古建烤肉</span>
      </button>
      <button class="theme-pill" onclick="switchDay('day4')">
        <span>Day 4</span>
        <span class="pill-sub">珲春帝王蟹</span>
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
            <span class="cb-badge">动态生成地图与卡片</span>
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

        <!-- Activity Cards Container for Day 1 -->
        <div id="d1_cards_container">
          <!-- Rendered dynamically by renderDay1Cards -->
        </div>
      </div>

      <!-- ==================== DAY 2 ==================== -->
      <div id="pane_day2" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 2 (10/2) · 文博殿堂 · 森林氧吧 · 延大学府人文 · 丰茂无烟烤肉</div>
          <div class="sh-desc">国家一级博物馆【延边博物馆】全程电梯无障碍，静心领略朝鲜族百年农耕与民俗生活；中午品尝正宗高丽参鸡汤养胃滋补（或招牌玉米温面）；午后回希尔顿欢朋酒店深度午休两小时；下午专车直达帽儿山国家森林公园纯平观景木栈道，深吸纯净秋日松脂清香；傍晚漫步延边大学学府园区，在开阔广场侧影留念网红双语弹幕墙；晚餐在丰茂烤串旗舰店包厢享用无烟烤串。</div>
          <div class="sh-tags">
            <span class="sh-tag">全馆电梯无障碍</span>
            <span class="sh-tag">参鸡汤长辈滋补</span>
            <span class="sh-tag">13:15-15:15 酒店午休</span>
            <span class="sh-tag">纯平观景木栈道</span>
            <span class="sh-tag">双语弹幕墙开阔侧影</span>
          </div>
        </div>

        <!-- Day 2 Customizer -->
        <div class="customizer-box">
          <div class="cb-header">
            <span class="cb-title">次日用餐与特色体验定制</span>
            <span class="cb-badge">动态生成地图与卡片</span>
          </div>

          <div class="cb-section-label">午间特色养胃偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d2_lunch" value="samgyetang" checked onchange="updateYjDayRoute('day2')">
              <div class="cb-item-content">
                <div class="cb-item-title">【首选滋补】大朴家高丽参鸡汤（长白山人参慢炖整鸡 · 养阴润燥）</div>
                <div class="cb-item-desc">石锅沸汤滚热，童子鸡肉质软烂一拨即脱骨，江米吸足参汤精华，极为暖胃滋补</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d2_lunch" value="wenmian" onchange="updateYjDayRoute('day2')">
              <div class="cb-item-content">
                <div class="cb-item-title">【民族招牌】顺姬现煮玉米温面与香酥锅包肉（热高汤养胃首选）</div>
                <div class="cb-item-desc">热牛骨原汤现压金黄玉米面条，搭配外酥里嫩薄切锅包肉，清爽酸甜温和适口</div>
              </div>
            </label>
          </div>

          <div class="cb-section-label" style="margin-top:12px;">晚间烤串正餐偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d2_dinner" value="fengmao" checked onchange="updateYjDayRoute('day2')">
              <div class="cb-item-content">
                <div class="cb-item-title">【首选推荐】丰茂烤串延吉总店（独立无烟恒温包厢 · 自动旋转微焦嫩牛肉）</div>
                <div class="cb-item-desc">全自动下排风无烟旋转烤架，全程无任何呛烟，原味嫩黄牛肉鲜嫩多汁，配紫苏叶</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d2_dinner" value="kaoshimao" onchange="updateYjDayRoute('day2')">
              <div class="cb-item-content">
                <div class="cb-item-title">【民俗正宴】考世茂朝鲜族传统民俗餐厅（朝鲜族非遗礼遇 · 传统大铜锅宴）</div>
                <div class="cb-item-desc">身着民族服饰礼仪服务，招牌七彩温热大铜锅与现做软糯米肠，极具文化尊贵感</div>
              </div>
            </label>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日专车动线与打卡点微缩地图</span>
            <span id="dmmTag_day2" class="dmm-tag">全景路线已规划</span>
          </div>
          <div id="miniMap_day2" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day2">
            <span>预计车程: <strong>约 22 km (网约打车起步价随叫随到)</strong></span>
            <span>舒享步数: <strong>约 5,200 步 (木栈道缓坡与校园平步)</strong></span>
          </div>
        </div>

        <!-- Activity Cards Container for Day 2 -->
        <div id="d2_cards_container">
          <!-- Rendered dynamically by renderDay2Cards -->
        </div>
      </div>

      <!-- ==================== DAY 3 ==================== -->
      <div id="pane_day3" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 3 (10/3) · 市内文脉寻踪 · 特色烤肉盛宴 · 人民公园古榆 · 顺姬温面</div>
          <div class="sh-desc">今天全程在延吉市内悠享慢调，提供多种上午文脉与午间烤肉选择。首选打车探访延吉现存唯一的清代古建筑群【道尹公署旧址】（或一键切换延大学府晨光/金达莱民俗广场）；中午在延吉老牌【梅花炭火烤肉品质包厢】享用正宗朝鲜族炭火烤肉（或万兴佳雪花黑牛专门店），专职服务生全程桌边代烤，雪花牛肉鲜嫩多汁长辈免动牙力；午后回希尔顿欢朋酒店深度午休 2 小时；下午漫步延吉人民公园百年古榆林海，在劳顶笨咖啡品味热五味子茶与手工打糕雪冰；晚宴享用顺姬冷面招牌热玉米温面。</div>
          <div class="sh-tags">
            <span class="sh-tag">延吉道尹公署古建</span>
            <span class="sh-tag">梅花无烟炭火烤肉</span>
            <span class="sh-tag">13:15-15:15 酒店午休</span>
            <span class="sh-tag">人民公园百年古榆</span>
            <span class="sh-tag">热玉米温面暖胃</span>
          </div>
        </div>

        <!-- Day 3 Customizer -->
        <div class="customizer-box">
          <div class="cb-header">
            <span class="cb-title">市内文脉打卡与特色烤肉定制</span>
            <span class="cb-badge">动态生成地图与卡片</span>
          </div>

          <div class="cb-section-label">上午市内人文打卡偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d3_morning" value="daoyin" checked onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">【方案A（首选推荐）】延吉道尹公署旧址（百年清代古建文脉 · 幽静文化寻踪）</div>
                <div class="cb-item-desc">延吉唯一清代官署四合院，青砖灰瓦古树掩映，纯平步道零台阶，感受百年边陲文脉</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d3_morning" value="ybu" onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">【方案B（学府晨光）】延边大学求真楼大飞檐 & 晨光林荫漫步</div>
                <div class="cb-item-desc">清晨学府静谧少人，长白山天池传统大飞檐造型，汉朝双语建筑，平整林荫路从容拍照</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d3_morning" value="jindalai" onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">【方案C（休闲地标）】金达莱民俗广场（城市标志金达莱花雕塑）</div>
                <div class="cb-item-desc">纯平开阔城市广场，标志性金达莱花雕塑，近距离观摩当地朝鲜族长辈传统晨练与门球</div>
              </div>
            </label>
          </div>

          <div class="cb-section-label" style="margin-top:12px;">午间特色烤肉偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d3_bbq" value="meihua" checked onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">【选项A（首选推荐）】梅花炭火烤肉品质包厢（延吉老牌烤肉标杆）</div>
                <div class="cb-item-desc">独立下排风无烟包房，专职服务生全程桌边代烤，黄牛雪花肉鲜嫩多汁无筋，长辈免动牙力</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d3_bbq" value="wanxingjia" onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">【选项B（黑牛专门店）】万兴佳黑牛烤肉（局子街核心区 · 顶级原切雪花）</div>
                <div class="cb-item-desc">精选延边高品质雪花黑牛，厚切大理石纹理，炭火逼出油脂香气，肉汁丰润鲜香</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d3_bbq" value="baiyu" onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">【选项C（民族名店）】白玉传统烤肉 / 百济烤肉（民族传统秘制风味）</div>
                <div class="cb-item-desc">几十年民族传统秘制酱汁轻腌，肉质鲜嫩入味，排风极佳，经典地道烤肉风情</div>
              </div>
            </label>
          </div>

          <div class="cb-section-label" style="margin-top:12px;">下午慢调茶歇偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d3_coffee" value="laodingben" checked onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">【选项A（老字号旗舰）】劳顶笨咖啡总店（招牌温热五味子茶 + 细腻纯牛奶打糕雪冰）</div>
                <div class="cb-item-desc">延吉慢咖啡鼻祖，环境开阔舒适沙发座，温热五味子养生茶温润生津，雪冰细腻如棉</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d3_coffee" value="houlang" onchange="updateYjDayRoute('day3')">
              <div class="cb-item-content">
                <div class="cb-item-title">【选项B（韩屋原木风）】后浪咖啡 / 佳温咖啡（韩屋原木风榻榻米静谧雅座）</div>
                <div class="cb-item-desc">传统与现代交融，环境清雅不吵闹，为长辈点选热米露与热大麦茶，慢享悠闲午后时光</div>
              </div>
            </label>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日专车动线与打卡点微缩地图</span>
            <span id="dmmTag_day3" class="dmm-tag">市内路线已规划</span>
          </div>
          <div id="miniMap_day3" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day3">
            <span>预计车程: <strong>约 12 km (市区打车起步价随叫随到)</strong></span>
            <span>舒享步数: <strong>约 4,500 步 (古建庭院与公园平步)</strong></span>
          </div>
        </div>

        <!-- Activity Cards Container for Day 3 -->
        <div id="d3_cards_container">
          <!-- Rendered dynamically by renderDay3Cards -->
        </div>
      </div>

      <!-- ==================== DAY 4 ==================== -->
      <div id="pane_day4" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 4 (10/4) · 边境风情一日 · 珲春防川三国交界 · 珲春活蒸帝王蟹</div>
          <div class="sh-desc">今天前往中朝俄边境。长辈腿脚正常能走，特别设计两套出行方案：首选【路线 A】专属商务包车直达珲春防川风景区，乘直梯登临 12 层龙虎阁“一眼望三国”（左俄右朝脚下中，远眺图们江入海口与日本海），中午在珲春海鲜街豪享俄罗斯直运原产地活蒸帝王蟹盛宴（【绝不替换帝王蟹】源头活蒸，肉质鲜甜紧实）；若当天追求超低车程，可自由一键切换为【路线 B】图们边境口岸国门与日光山俯瞰江湾。</div>
          <div class="sh-tags">
            <span class="sh-tag">一眼望中朝俄三国</span>
            <span class="sh-tag">龙虎阁全高速直梯</span>
            <span class="sh-tag">珲春活蒸帝王蟹</span>
            <span class="sh-tag">门到门商务包车</span>
            <span class="sh-tag">回欢朋休整品茗</span>
          </div>
        </div>

        <!-- Day 4 Customizer & Transport Options -->
        <div class="customizer-box">
          <div class="cb-header">
            <span class="cb-title">珲春出行方式与路线抉择</span>
            <span class="cb-badge">动态生成地图与卡片</span>
          </div>

          <div class="cb-section-label">交通方式建议（包车 vs 高铁）：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d4_transport" value="charter" checked onchange="updateYjDayRoute('day4')">
              <div class="cb-item-content">
                <div class="cb-item-title">方案 A（首选强烈推荐）：7座商务专车包车一日游（门到门零换乘）</div>
                <div class="cb-item-desc">酒店大堂门前迎送，随身物品放车上，免去进出高铁站排队安检折腾，长辈车内舒心小憩</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d4_transport" value="bullet_train" onchange="updateYjDayRoute('day4')">
              <div class="cb-item-content">
                <div class="cb-item-title">方案 B（极速备选）：城际高铁 (40m · ¥28) + 珲春当地包车/打车</div>
                <div class="cb-item-desc">延吉西至珲春站高铁极速平稳（车程仅40分钟），出站后包地接车前往防川与海鲜街</div>
              </div>
            </label>
          </div>

          <div class="cb-section-label" style="margin-top:12px;">边境目的地偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d4_route" value="go_hunchun" checked onchange="updateYjDayRoute('day4')">
              <div class="cb-item-content">
                <div class="cb-item-title">珲春防川“一眼望三国” + 俄罗斯活蒸帝王蟹午宴（首选震撼推荐）</div>
                <div class="cb-item-desc">直梯上龙虎阁看三国交界与日本海，中午在海鲜街现场大池活挑原汁原味清蒸帝王蟹</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d4_route" value="go_tumen" onchange="updateYjDayRoute('day4')">
              <div class="cb-item-content">
                <div class="cb-item-title">图们边境口岸国门 & 86号界碑 + 日光山森林俯瞰（从容舒缓备选）</div>
                <div class="cb-item-desc">专车车程仅 45 分钟，超低位移，平视对岸朝鲜南阳市，下午从容回延吉深度午休</div>
              </div>
            </label>
          </div>

          <div class="cb-section-label" style="margin-top:12px;">珲春午间海鲜盛宴偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d4_seafood" value="kingcrab" checked onchange="updateYjDayRoute('day4')">
              <div class="cb-item-content">
                <div class="cb-item-title">【首选推荐 · 极品活蒸帝王蟹盛宴】海鲜街醉香阁/蟹港 鲜活俄罗斯直运帝王蟹</div>
                <div class="cb-item-desc">整只大水池现挑活蒸，蟹肉雪白多汁天然清甜，蟹膏煮温润海鲜粥，顶级体验</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d4_seafood" value="snowcrab" onchange="updateYjDayRoute('day4')">
              <div class="cb-item-content">
                <div class="cb-item-title">【清甜温润 · 深海板蟹/雪蟹双拼宴】珲春海鲜街 俄罗斯深海活板蟹/红雪蟹</div>
                <div class="cb-item-desc">肉质如丝般细嫩鲜甜，分量更轻盈温和，极适宜清淡饮食长辈</div>
              </div>
            </label>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日专车动线与打卡点微缩地图</span>
            <span id="dmmTag_day4" class="dmm-tag">边境路线已规划</span>
          </div>
          <div id="miniMap_day4" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day4">
            <span>预计车程: <strong>约 280 km (7座商务专车一车到底)</strong></span>
            <span>舒享步数: <strong>约 4,500 步 (龙虎阁直梯观景)</strong></span>
          </div>
        </div>

        <!-- Activity Cards Container for Day 4 -->
        <div id="d4_cards_container">
          <!-- Rendered dynamically by renderDay4Cards -->
        </div>
      </div>

      <!-- ==================== DAY 5 ==================== -->
      <div id="pane_day5" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 5 (10/5) · 水上市场烟火 · 西市场特产直邮 · 震海贝活蒸帝王蟹惜别宴</div>
          <div class="sh-desc">清晨漫步烟集河畔【水上市场早市】，品尝现打温热黄豆面打糕与纯热豆浆；上午专车前往【延吉西市场】选购长白山椴木黑木耳、正宗苹果梨、温和泡菜与明太鱼干，官方顺丰现场打包直邮寄回家，长辈两手空空无负重；中午品尝兴豆饭店老字号炸酱面与软炸肉；午后回希尔顿欢朋酒店深度午休两小时；傍晚漫步布尔哈通河畔滨水步道赏金秋水岸晚霞；晚宴在延吉市内顶级活海鲜专门店【震海贝烤贝】品尝第二顿【俄罗斯活蒸帝王蟹盛宴】（或海兰江民俗宫宫廷盛宴），圆满收官！</div>
          <div class="sh-tags">
            <span class="sh-tag">水上市场晨市烟火</span>
            <span class="sh-tag">西市场特产顺丰直邮</span>
            <span class="sh-tag">13:15-15:15 酒店午休</span>
            <span class="sh-tag">布尔哈通河金秋晚霞</span>
            <span class="sh-tag">延吉市内帝王蟹惜别宴</span>
          </div>
        </div>

        <!-- Day 5 Customizer -->
        <div class="customizer-box">
          <div class="cb-header">
            <span class="cb-title">特产采购与惜别宴定制</span>
            <span class="cb-badge">动态生成地图与卡片</span>
          </div>

          <div class="cb-section-label">上午特产采购场所偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d5_shopping" value="westmarket" checked onchange="updateYjDayRoute('day5')">
              <div class="cb-item-content">
                <div class="cb-item-title">延吉西市场（民族特产大厦 · 全直梯 · 官方顺丰现场直邮）</div>
                <div class="cb-item-desc">延边规模最大最正规特产大厦，一层苹果梨/木耳/明太鱼/泡菜，现场顺丰称重寄走，零手提负担</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d5_shopping" value="yanbai" onchange="updateYjDayRoute('day5')">
              <div class="cb-item-content">
                <div class="cb-item-title">延吉百货大楼地下精品特产超市（现代商厦 · 正规礼盒包装）</div>
                <div class="cb-item-desc">国营老牌商场，购物环境更宽敞舒适，人参/黑木耳精装礼盒齐全，适合高端送礼需求</div>
              </div>
            </label>
          </div>

          <div class="cb-section-label" style="margin-top:12px;">最后一晚惜别晚餐偏好：</div>
          <div class="cb-radio-group">
            <label class="cb-item">
              <input type="radio" name="d5_dinner" value="crab_yanji" checked onchange="updateYjDayRoute('day5')">
              <div class="cb-item-content">
                <div class="cb-item-title">【首选推荐 · 延吉第二顿帝王蟹】震海贝烤贝·活蟹鲜海鲜专门店（延吉总店独立包厢）</div>
                <div class="cb-item-desc">大水池活蟹现捞现蒸，蟹腿肉雪白如丝，炭烤大贝鲜美多汁，蟹膏黄金炒饭，豪奢收官</div>
              </div>
            </label>
            <label class="cb-item">
              <input type="radio" name="d5_dinner" value="hailanjiang" onchange="updateYjDayRoute('day5')">
              <div class="cb-item-content">
                <div class="cb-item-title">【传统国宴备选】海兰江民俗宫（正宗朝鲜族宫廷盛宴 · 独立雅间）</div>
                <div class="cb-item-desc">身着传统民族盛装提供宫廷待客礼遇，七彩温热大铜锅与人参养生汤，仪式感拉满</div>
              </div>
            </label>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日专车动线与打卡点微缩地图</span>
            <span id="dmmTag_day5" class="dmm-tag">市内采购路线</span>
          </div>
          <div id="miniMap_day5" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day5">
            <span>预计车程: <strong>约 10 km (打车起步价随叫随到)</strong></span>
            <span>舒享步数: <strong>约 5,000 步 (集市平坦采购)</strong></span>
          </div>
        </div>

        <!-- Activity Cards Container for Day 5 -->
        <div id="d5_cards_container">
          <!-- Rendered dynamically by renderDay5Cards -->
        </div>
      </div>

      <!-- ==================== DAY 6 ==================== -->
      <div id="pane_day6" class="day-pane">
        <div class="senior-hero-card">
          <div class="sh-title">Day 6 (10/6) · 自然醒温热早餐 · 专车平稳送站 · 欢喜踏上归途</div>
          <div class="sh-desc">行程最后一天，彻底不设晨起闹钟与赶路压力。长辈在希尔顿欢朋酒店享受热腾腾的自助早餐；专车司机准时在大堂外守候，直接将行李运上车，平稳送抵延吉西站落客大平台；全平步直通高铁检票口，从容踏上归途。</div>
          <div class="sh-tags">
            <span class="sh-tag">睡到自然醒</span>
            <span class="sh-tag">欢朋温热营养早餐</span>
            <span class="sh-tag">行李门到站全程代运</span>
            <span class="sh-tag">西站高架落客无障碍</span>
            <span class="sh-tag">平安从容返家</span>
          </div>
        </div>

        <!-- Mini Map Container -->
        <div class="day-map-card">
          <div class="dmm-header">
            <span class="dmm-title">当日专车送站微缩地图</span>
            <span id="dmmTag_day6" class="dmm-tag">送站路线已规划</span>
          </div>
          <div id="miniMap_day6" class="mini-map-box"></div>
          <div class="dcc-stats" id="dccStats_day6">
            <span>预计车程: <strong>约 8.5 km (专车送达西站高架落客平台)</strong></span>
            <span>舒享步数: <strong>约 1,500 步 (车站平路候车从容)</strong></span>
          </div>
        </div>

        <!-- Activity Cards Container for Day 6 -->
        <div id="d6_cards_container">
          <!-- Rendered dynamically by renderDay6Cards -->
        </div>
      </div>

    </section>

    <!-- ============================================================== -->
    <!-- TAB 2: OVERVIEW & WEATHER (概览)                              -->
    <!-- ============================================================== -->
    <section id="tabOverview" class="tab-content">
      <div class="senior-hero-card">
        <div class="sh-title">延吉全域 6 日行程总览与天气</div>
        <div class="sh-desc">全行程严格围绕【延吉中心希尔顿欢朋酒店】一地连住展开，每日专车门到门接驳，免去频繁换酒店搬行李折腾；每日正午安排 1.5–2 小时酒店深度午休，确保长辈体力始终充沛。</div>
      </div>

      <!-- Real-time Weather Card -->
      <div class="weather-widget-card">
        <div class="ww-header">
          <div class="ww-title-box">
            <span class="ww-city">吉林 · 延吉</span>
            <span class="ww-tag">实时气象数据</span>
          </div>
          <button class="ww-refresh-btn" onclick="fetchLiveWeather(true)">刷新天气 ↻</button>
        </div>
        <div class="ww-main">
          <div class="ww-temp-box">
            <span id="wwCurTemp" class="ww-temp">--°</span>
            <span id="wwCurCond" class="ww-cond">获取中...</span>
          </div>
          <div class="ww-details-grid">
            <div class="ww-detail-item">
              <span class="ww-label">体感温度</span>
              <span id="wwApparent" class="ww-val">--°</span>
            </div>
            <div class="ww-detail-item">
              <span class="ww-label">空气湿度</span>
              <span id="wwHumidity" class="ww-val">--%</span>
            </div>
            <div class="ww-detail-item">
              <span class="ww-label">风力等级</span>
              <span id="wwWind" class="ww-val">--级</span>
            </div>
          </div>
        </div>

        <div class="ww-forecast-title">未来 7 日天气趋势展望</div>
        <div id="wwForecastContainer" class="ww-forecast-grid">
          <!-- Populated by JavaScript -->
        </div>
      </div>

      <!-- Big Route Overview Map -->
      <div class="big-map-card">
        <div class="bmc-header">
          <span class="bmc-title">延吉全域打卡点全景地图</span>
          <span class="bmc-tag">点位连线交互</span>
        </div>
        <div class="overview-filter-bar">
          <button class="ov-pill active" onclick="filterOverviewMap('all')">全部点位</button>
          <button class="ov-pill" onclick="filterOverviewMap('day1')">Day 1</button>
          <button class="ov-pill" onclick="filterOverviewMap('day2')">Day 2</button>
          <button class="ov-pill" onclick="filterOverviewMap('day3')">Day 3</button>
          <button class="ov-pill" onclick="filterOverviewMap('day4')">Day 4</button>
          <button class="ov-pill" onclick="filterOverviewMap('day5')">Day 5</button>
          <button class="ov-pill" onclick="filterOverviewMap('day6')">Day 6</button>
        </div>
        <div id="overviewBigMap" class="overview-big-map-box"></div>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- TAB 3: LOGISTICS (锦囊)                                       -->
    <!-- ============================================================== -->
    <section id="tabLogistics" class="tab-content">
      <div class="senior-hero-card">
        <div class="sh-title">延吉长辈舒享出游服务指南</div>
        <div class="sh-desc">专为长辈出行量身定制的无障碍攻略、专车接送指南与温和餐饮提点。</div>
      </div>

      <div class="info-card">
        <div class="ic-title">专车包车与打卡接送指引</div>
        <div class="ic-desc">延吉市区打车极其便利，起步价 ¥5，市区主要景点（延边博物馆、西市场、水上市场、人民公园、道尹公署旧址、烤肉名店）打车均在 5-15 分钟内；前往珲春防川三国交界建议提前预约 7 座正规商务专车，门到门接送，省去长辈奔波换乘劳顿。</div>
      </div>

      <div class="info-card">
        <div class="ic-title">长辈饮食调养要点</div>
        <div class="ic-desc">延边饮食风味浓郁，特为长辈甄选温和暖胃菜品：元奶奶包肉、大朴家高丽参鸡汤、两顿清蒸鲜活俄罗斯帝王蟹、顺姬招牌玉米温面等，避免过辣过冰；烤肉均选配独立无烟包房并由专人全程桌边代烤。</div>
      </div>

      <div class="info-card">
        <div class="ic-title">防寒保暖与边境证件</div>
        <div class="ic-desc">10月延吉早晚温差大（气温 4°C - 18°C），建议随身携带轻便羽绒服或防风冲锋衣；前往防川国家级名胜区与边境口岸必须随身携带<strong>中国二代身份证原件</strong>以备查验。</div>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- TAB 4: ASSISTANT & IDEAS (灵感)                               -->
    <!-- ============================================================== -->
    <section id="tabAssistant" class="tab-content">
      <div class="senior-hero-card">
        <div class="sh-title">旅行灵感便签与调整助手</div>
        <div class="sh-desc">随时记录长辈的个性化需求与突发灵感，一键生成 AI 结构化调整指令或通过微信直接转发沟通。</div>
      </div>

      <div class="idea-creator-box">
        <div class="icb-title">快速记录调整需求</div>
        <textarea id="ideaInputText" class="idea-textarea" placeholder="例如：长辈想在 Day 3 晚上加一家百年老字号朝鲜族米糕店，或者希望 Day 4 珲春提前半小时出发..."></textarea>
        <div class="icb-actions">
          <button class="btn-primary" onclick="handleSaveIdea()">保存到灵感池</button>
        </div>
      </div>

      <div class="section-title" style="margin-top:20px;">已保存的旅行灵感</div>
      <div id="savedIdeasList" class="saved-ideas-list">
        <!-- Populated by JavaScript -->
      </div>
    </section>

  </main>

  <!-- Bottom Navigation Bar -->
  <nav class="bottom-nav">
    <button class="nav-item active" onclick="switchNavTab('itinerary')">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span class="nav-label">行程</span>
    </button>
    <button class="nav-item" onclick="switchNavTab('overview')">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
      <span class="nav-label">概览</span>
    </button>
    <button class="nav-item" onclick="switchNavTab('logistics')">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      <span class="nav-label">锦囊</span>
    </button>
    <button class="nav-item" onclick="switchNavTab('assistant')">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      <span class="nav-label">灵感</span>
    </button>
  </nav>

  <!-- Toast Message Box -->
  <div id="toastBox" class="toast-box"></div>

  <!-- JavaScript Core -->
  <script>
    // Global Navigation State
    let currentNavTab = 'itinerary';
    let currentActiveDay = 'day1';
    let yjMiniMaps = {};
    let yjMiniLayers = {};
    let overviewMapInstance = null;
    let overviewMarkers = [];
    let overviewPolyline = null;

    function switchNavTab(tabName) {
      currentNavTab = tabName;
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

      const dayScroll = document.getElementById('dayScrollContainer');

      if (tabName === 'itinerary') {
        document.getElementById('tabItinerary').classList.add('active');
        document.querySelectorAll('.nav-item')[0].classList.add('active');
        if (dayScroll) dayScroll.style.display = 'flex';
        setTimeout(() => {
          if (yjMiniMaps[currentActiveDay]) yjMiniMaps[currentActiveDay].invalidateSize();
        }, 150);
      } else if (tabName === 'overview') {
        document.getElementById('tabOverview').classList.add('active');
        document.querySelectorAll('.nav-item')[1].classList.add('active');
        if (dayScroll) dayScroll.style.display = 'none';
        setTimeout(() => {
          initOverviewMap();
          if (overviewMapInstance) overviewMapInstance.invalidateSize();
        }, 150);
      } else if (tabName === 'logistics') {
        document.getElementById('tabLogistics').classList.add('active');
        document.querySelectorAll('.nav-item')[2].classList.add('active');
        if (dayScroll) dayScroll.style.display = 'none';
      } else if (tabName === 'assistant') {
        document.getElementById('tabAssistant').classList.add('active');
        document.querySelectorAll('.nav-item')[3].classList.add('active');
        if (dayScroll) dayScroll.style.display = 'none';
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function switchDay(dayId) {
      currentActiveDay = dayId;
      document.querySelectorAll('.day-pane').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.theme-pill').forEach(el => el.classList.remove('active'));

      const targetPane = document.getElementById('pane_' + dayId);
      if (targetPane) targetPane.classList.add('active');

      const pillIdx = parseInt(dayId.replace('day', '')) - 1;
      const pills = document.querySelectorAll('.theme-pill');
      if (pills[pillIdx]) pills[pillIdx].classList.add('active');

      const cNum = dayId.replace('day', '');
      const container = document.getElementById('d' + cNum + '_cards_container');
      if (container && container.children.length === 0) {
        if (dayId === 'day1') renderDay1Cards();
        else if (dayId === 'day2') renderDay2Cards();
        else if (dayId === 'day3') renderDay3Cards();
        else if (dayId === 'day4') renderDay4Cards();
        else if (dayId === 'day5') renderDay5Cards();
        else if (dayId === 'day6') renderDay6Cards();
      }

      initYjMiniMap(dayId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showToast(msg) {
      const box = document.getElementById('toastBox');
      if (!box) return;
      box.textContent = msg;
      box.classList.add('show');
      setTimeout(() => box.classList.remove('show'), 2200);
    }

    function openDianping(keyword, e) {
      if (e) e.stopPropagation();
      showToast('正在为您打开大众点评: ' + keyword);
    }

    // ==========================================
    // Real-Time Open-Meteo Live Weather Engine
    // ==========================================
    const WEATHER_CODE_MAP = {
      0: { text: '晴朗', icon: '☀️' },
      1: { text: '多云', icon: '🌤️' },
      2: { text: '晴间多云', icon: '⛅' },
      3: { text: '阴', icon: '☁️' },
      45: { text: '有雾', icon: '🌫️' },
      48: { text: '薄雾漫山', icon: '🌫️' },
      51: { text: '微雨', icon: '🌦️' },
      61: { text: '轻度小雨', icon: '🌧️' },
      80: { text: '阵雨', icon: '🌧️' }
    };

    async function fetchLiveWeather(isUserAction) {
      try {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=42.9065&longitude=129.5105&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FShanghai';
        const res = await fetch(url);
        const data = await res.json();
        if (!data || !data.current) return;

        const cur = data.current;
        const temp = Math.round(cur.temperature_2m);
        const code = cur.weather_code;
        const condObj = WEATHER_CODE_MAP[code] || { text: '晴好', icon: '🌤️' };

        const curTempEl = document.getElementById('wwCurTemp');
        const curCondEl = document.getElementById('wwCurCond');
        const apparentEl = document.getElementById('wwApparent');
        const humidityEl = document.getElementById('wwHumidity');
        const windEl = document.getElementById('wwWind');
        const hdrWeatherEl = document.getElementById('hdrMiniWeather');

        if (curTempEl) curTempEl.textContent = temp + '°C';
        if (curCondEl) curCondEl.textContent = condObj.icon + ' ' + condObj.text;
        if (apparentEl) apparentEl.textContent = Math.round(cur.apparent_temperature) + '°C';
        if (humidityEl) humidityEl.textContent = cur.relative_humidity_2m + '%';
        if (windEl) windEl.textContent = (cur.wind_speed_10m || 2.5) + ' m/s';
        if (hdrWeatherEl) hdrWeatherEl.textContent = temp + '°C ' + condObj.text + ' · 7日天气 ↗';

        const forecastContainer = document.getElementById('wwForecastContainer');
        if (forecastContainer && data.daily && data.daily.time) {
          let fHtml = '';
          const times = data.daily.time;
          for (let i = 0; i < Math.min(times.length, 7); i++) {
            const dateStr = times[i].slice(5);
            const wCode = data.daily.weather_code[i];
            const wInfo = WEATHER_CODE_MAP[wCode] || { text: '晴好', icon: '🌤️' };
            const maxT = Math.round(data.daily.temperature_2m_max[i]);
            const minT = Math.round(data.daily.temperature_2m_min[i]);

            fHtml += \`
              <div class="ww-day-col">
                <span class="wwd-date">\${dateStr}</span>
                <span class="wwd-icon" style="font-size:18px;">\${wInfo.icon}</span>
                <span class="wwd-text">\${wInfo.text}</span>
                <span class="wwd-temp">\${minT}° / \${maxT}°</span>
              </div>
            \`;
          }
          forecastContainer.innerHTML = fHtml;
        }

        if (isUserAction) showToast('天气数据已更新至最新实况');
      } catch (e) {
        console.warn('Weather fetch error:', e);
        if (isUserAction) showToast('暂未连接到最新气象站，使用缓存数据');
      }
    }

    // ==========================================
    // Spots Coordinate & Mapping Database
    // ==========================================
    const YJ_SPOTS = {
      hotel: { name: '延吉中心希尔顿欢朋酒店(核心连住驻地)', coord: [42.9060, 129.5105] },
      west_station: { name: '延吉西站(高铁接送)', coord: [42.8950, 129.4420] },
      
      // Day 1
      d1_yuannainai: { name: '老字号元奶奶包肉(软烂温润大酱汤)', coord: [42.9055, 129.5110], day: 1 },
      
      // Day 2
      d2_museum: { name: '延边博物馆(国家一级·无障碍电梯)', coord: [42.8950, 129.4670], day: 2 },
      d2_samgyetang: { name: '大朴家高丽参鸡汤(长白山人参慢炖整鸡)', coord: [42.9020, 129.4930], day: 2 },
      d2_wenmian: { name: '顺姬现煮玉米温面与香酥锅包肉', coord: [42.9075, 129.5085], day: 2 },
      d2_maoershan: { name: '帽儿山国家森林公园(平缓木栈道)', coord: [42.8420, 129.4920], day: 2 },
      d2_univ: { name: '延边大学正门求真楼(学府大飞檐)', coord: [42.9090, 129.4880], day: 2 },
      d2_danmu: { name: '网红汉朝双语弹幕墙(开阔侧影)', coord: [42.9080, 129.4875], day: 2 },
      d2_fengmao: { name: '丰茂烤串延吉总店(旗舰无烟包厢)', coord: [42.9120, 129.5150], day: 2 },
      d2_kaoshimao: { name: '考世茂朝鲜族传统民俗餐厅', coord: [42.9140, 129.5120], day: 2 },

      // Day 3
      d3_daoyin: { name: '延吉道尹公署旧址(百年古建文化寻踪)', coord: [42.8930, 129.5080], day: 3 },
      d3_ybu: { name: '延边大学求真楼(学府晨光大飞檐)', coord: [42.9090, 129.4880], day: 3 },
      d3_jindalai: { name: '金达莱民俗广场(城市地标雕塑)', coord: [42.8850, 129.4820], day: 3 },
      d3_meihua: { name: '梅花炭火烤肉品质包厢(延吉老牌烤肉)', coord: [42.9095, 129.5160], day: 3 },
      d3_wanxingjia: { name: '万兴佳黑牛烤肉(雪花专门店)', coord: [42.9080, 129.5120], day: 3 },
      d3_baiyu: { name: '白玉传统烤肉(民族风味代烤)', coord: [42.9110, 129.5130], day: 3 },
      d3_park: { name: '延吉人民公园百年古榆林海', coord: [42.9080, 129.5040], day: 3 },
      d3_laodingben: { name: '劳顶笨慢咖啡旗舰总店(打糕雪冰+五味子茶)', coord: [42.9065, 129.5120], day: 3 },
      d3_houlang: { name: '后浪咖啡 / 佳温咖啡(韩屋原木风)', coord: [42.9070, 129.5090], day: 3 },
      d3_shunji: { name: '顺姬冷面旗舰店(玉米温面)', coord: [42.9075, 129.5085], day: 3 },

      // Day 4 Option A
      d4_fangchuan: { name: '珲春防川 · 龙虎阁一眼望三国', coord: [42.4830, 130.6400], day: 4 },
      d4_crab_hunchun: { name: '珲春海鲜街 · 活蒸帝王蟹盛宴', coord: [42.8620, 130.3650], day: 4 },
      d4_crab_snow: { name: '珲春海鲜街 · 俄罗斯活板蟹/雪蟹清甜宴', coord: [42.8620, 130.3650], day: 4 },
      d4_quanzhou: { name: '全州拌饭百年老店', coord: [42.9040, 129.5090], day: 4 },

      // Day 4 Option B
      d4_tumen_port: { name: '图们口岸国门 & 86号界碑', coord: [42.9620, 129.8510], day: 4 },
      d4_riguangshan: { name: '日光山森林公园观景台', coord: [42.9480, 129.8450], day: 4 },
      d4_lixiang: { name: '李香石锅饭明太鱼馆', coord: [42.9650, 129.8480], day: 4 },

      // Day 5
      d5_watermarket: { name: '延吉水上市场露天晨市(现打打糕)', coord: [42.9125, 129.5180], day: 5 },
      d5_westmarket: { name: '延吉西市场特产直邮大厦', coord: [42.9055, 129.5060], day: 5 },
      d5_yanbai: { name: '延吉百货大楼精品特产超市', coord: [42.9070, 129.5070], day: 5 },
      d5_xingdou: { name: '兴豆饭店老字号(炸酱面软炸肉)', coord: [42.9030, 129.5095], day: 5 },
      d5_burhatong: { name: '布尔哈通河畔金秋水岸晚霞', coord: [42.9015, 129.5130], day: 5 },
      d5_crab_yanji: { name: '震海贝烤贝·活蟹海鲜专门店(延吉帝王蟹)', coord: [42.9095, 129.5160], day: 5 },
      d5_hailanjiang: { name: '海兰江民俗宫(正宗朝鲜族国宴)', coord: [42.9100, 129.5190], day: 5 }
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
      let stops = [];
      let totalDist = '';
      let totalSteps = '';

      if (dayKey === 'day1') {
        const d1Dinner = document.querySelector('input[name="d1_dinner"]:checked')?.value || 'yuannainai';
        renderDay1Cards(d1Dinner);

        stops.push(YJ_SPOTS.west_station);
        stops.push(YJ_SPOTS.hotel);
        if (d1Dinner === 'yuannainai') stops.push(YJ_SPOTS.d1_yuannainai);

        totalDist = '约 8.5 km (专车顺畅送达)';
        totalSteps = '约 1,200 步 (仅酒店内走动，彻底休整)';
      } else if (dayKey === 'day2') {
        const d2Lunch = document.querySelector('input[name="d2_lunch"]:checked')?.value || 'samgyetang';
        const d2Dinner = document.querySelector('input[name="d2_dinner"]:checked')?.value || 'fengmao';
        renderDay2Cards(d2Lunch, d2Dinner);

        stops.push(YJ_SPOTS.hotel);
        stops.push(YJ_SPOTS.d2_museum);
        stops.push(d2Lunch === 'samgyetang' ? YJ_SPOTS.d2_samgyetang : YJ_SPOTS.d2_wenmian);
        stops.push(YJ_SPOTS.hotel); // 中午回酒店午休
        stops.push(YJ_SPOTS.d2_maoershan);
        stops.push(YJ_SPOTS.d2_univ);
        stops.push(YJ_SPOTS.d2_danmu);
        stops.push(d2Dinner === 'fengmao' ? YJ_SPOTS.d2_fengmao : YJ_SPOTS.d2_kaoshimao);
        stops.push(YJ_SPOTS.hotel);

        totalDist = '约 22 km (网约打车起步价随叫随到)';
        totalSteps = '约 5,200 步 (木栈道缓坡与校园平步)';
      } else if (dayKey === 'day3') {
        const d3Morning = document.querySelector('input[name="d3_morning"]:checked')?.value || 'daoyin';
        const d3Bbq = document.querySelector('input[name="d3_bbq"]:checked')?.value || 'meihua';
        const d3Coffee = document.querySelector('input[name="d3_coffee"]:checked')?.value || 'laodingben';
        renderDay3Cards(d3Morning, d3Bbq, d3Coffee);

        stops.push(YJ_SPOTS.hotel);
        if (d3Morning === 'daoyin') stops.push(YJ_SPOTS.d3_daoyin);
        else if (d3Morning === 'ybu') stops.push(YJ_SPOTS.d3_ybu);
        else stops.push(YJ_SPOTS.d3_jindalai);

        if (d3Bbq === 'meihua') stops.push(YJ_SPOTS.d3_meihua);
        else if (d3Bbq === 'wanxingjia') stops.push(YJ_SPOTS.d3_wanxingjia);
        else stops.push(YJ_SPOTS.d3_baiyu);

        stops.push(YJ_SPOTS.hotel); // 中午回酒店深度午休
        stops.push(YJ_SPOTS.d3_park);

        if (d3Coffee === 'laodingben') stops.push(YJ_SPOTS.d3_laodingben);
        else stops.push(YJ_SPOTS.d3_houlang);

        stops.push(YJ_SPOTS.d3_shunji);
        stops.push(YJ_SPOTS.hotel);

        totalDist = '约 12 km (市区打车起步价随叫随到)';
        totalSteps = '约 4,500 步 (古建庭院与公园平步)';
      } else if (dayKey === 'day4') {
        const d4Route = document.querySelector('input[name="d4_route"]:checked')?.value || 'go_hunchun';
        const d4Trans = document.querySelector('input[name="d4_transport"]:checked')?.value || 'charter';
        const d4Seafood = document.querySelector('input[name="d4_seafood"]:checked')?.value || 'kingcrab';
        renderDay4Cards(d4Route, d4Trans, d4Seafood);

        if (d4Route === 'go_hunchun') {
          stops.push(YJ_SPOTS.hotel);
          stops.push(YJ_SPOTS.d4_fangchuan);
          stops.push(d4Seafood === 'snowcrab' ? YJ_SPOTS.d4_crab_snow : YJ_SPOTS.d4_crab_hunchun);
          stops.push(YJ_SPOTS.hotel); // 回酒店休整
          stops.push(YJ_SPOTS.d4_quanzhou);
          stops.push(YJ_SPOTS.hotel);

          totalDist = (d4Trans === 'charter') ? '约 280 km (7座商务专车一车到底)' : '约 110 km (高铁40m + 珲春地接用车)';
          totalSteps = '约 4,500 步 (龙虎阁直梯观景)';
        } else {
          stops.push(YJ_SPOTS.hotel);
          stops.push(YJ_SPOTS.d4_tumen_port);
          stops.push(YJ_SPOTS.d4_lixiang);
          stops.push(YJ_SPOTS.d4_riguangshan);
          stops.push(YJ_SPOTS.hotel); // 回延吉午休
          stops.push(YJ_SPOTS.d4_quanzhou);
          stops.push(YJ_SPOTS.hotel);

          totalDist = '约 110 km (专车往返仅45分钟)';
          totalSteps = '约 3,800 步 (纯平江堤漫步)';
        }
      } else if (dayKey === 'day5') {
        const d5Shopping = document.querySelector('input[name="d5_shopping"]:checked')?.value || 'westmarket';
        const d5Dinner = document.querySelector('input[name="d5_dinner"]:checked')?.value || 'crab_yanji';
        renderDay5Cards(d5Shopping, d5Dinner);

        stops.push(YJ_SPOTS.hotel);
        stops.push(YJ_SPOTS.d5_watermarket);
        stops.push(d5Shopping === 'yanbai' ? YJ_SPOTS.d5_yanbai : YJ_SPOTS.d5_westmarket);
        stops.push(YJ_SPOTS.d5_xingdou);
        stops.push(YJ_SPOTS.hotel); // 回酒店午休
        stops.push(YJ_SPOTS.d5_burhatong);
        stops.push(d5Dinner === 'hailanjiang' ? YJ_SPOTS.d5_hailanjiang : YJ_SPOTS.d5_crab_yanji);
        stops.push(YJ_SPOTS.hotel);

        totalDist = '约 10 km (打车起步价随叫随到)';
        totalSteps = '约 5,000 步 (集市平坦采购)';
      } else if (dayKey === 'day6') {
        renderDay6Cards();

        stops.push(YJ_SPOTS.hotel);
        stops.push(YJ_SPOTS.west_station);

        totalDist = '约 8.5 km (专车送达西站高架落客平台)';
        totalSteps = '约 1,500 步 (车站平路候车从容)';
      }

      const statsEl = document.getElementById('dccStats_' + dayKey);
      if (statsEl) {
        statsEl.innerHTML = \`
          <span>预计车程: <strong>\${totalDist}</strong></span>
          <span>舒享步数: <strong>\${totalSteps}</strong></span>
        \`;
      }

      if (!map) return;
      const layerData = yjMiniLayers[dayKey];
      if (layerData.polyline) map.removeLayer(layerData.polyline);
      layerData.markers.forEach(m => map.removeLayer(m));
      layerData.markers = [];

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

    // ==========================================
    // Dynamic Render Day 1 Cards
    // ==========================================
    function renderDay1Cards(dinnerMode) {
      const container = document.getElementById('d1_cards_container');
      if (!container) return;

      dinnerMode = dinnerMode || document.querySelector('input[name="d1_dinner"]:checked')?.value || 'yuannainai';

      let dinnerCardHtml = '';
      if (dinnerMode === 'yuannainai') {
        dinnerCardHtml = \`
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

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_baorou.jpg" alt="老字号元奶奶包肉木托盘与海鲜大酱汤" class="spot-img" />
                <div class="photo-badge">养胃暖心</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">软烂薄切热五花肉木托盘与翠绿紫苏叶、滚热海鲜大酱汤热气同框。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">餐厅明亮暖黄顶灯，肉质晶莹诱人。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈品尝第一口养胃热肉卷，暖意融融，开启舒心延吉假期。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        dinnerCardHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">酒店私享 ~1h</span>
              <span class="act-intensity intensity-flat">零位移客房送餐</span>
            </div>
            <div class="act-name">
              <span>希尔顿欢朋中餐厅 / 客房送餐（温润热粥热汤）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%B8%8C%E7%88%BE%E9%A0%93%E6%AD%A1%E6%9C%8B" onclick="openDianping('延吉 希尔顿欢朋', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">高品质星级酒店出品 · 专属客房送餐 · 人均 ¥90-120</div>
            <div class="act-tagline">彻底不出酒店大门，穿睡衣即可享用星级热膳。中餐厅精选延边高丽参土鸡滋补砂锅粥、现熬海鲜豆腐羹与清炒当季时蔬。服务人员将保温餐车送至客房，长辈轻松坐享尊贵私密的一餐。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_hotel.jpg" alt="希尔顿欢朋酒店客房温馨晚餐" class="spot-img" />
                <div class="photo-badge">零位移私享</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">欢朋客房实木茶几前，精致餐盘、冒着热气的暖胃砂锅粥与落地窗夜景同框。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">客房柔和暖色阅读灯与背景落地灯，营造温馨舒缓睡眠氛围。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈舒适倚坐沙发小憩用餐，神清气爽，毫无旅途奔波感。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      }

      container.innerHTML = \`
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

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_weststation.jpg" alt="延吉西站传统大飞檐落客平台与专车迎接" class="spot-img" />
              <div class="photo-badge">专车迎送</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">延吉西站二层落客大平台，以朝鲜族传统蓝色飞檐挑顶与汉朝双语站名题字为大背景。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">15:00 - 15:30 午后秋阳通透，高架平台视野开阔无遮挡。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">专车司机协助轻放随身行李，长辈平步上车直奔酒店，开启舒心边陲之旅。</span>
              </div>
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

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_hotel.jpg" alt="希尔顿欢朋酒店高档温馨客房与落地窗城景" class="spot-img" />
              <div class="photo-badge">静养安歇</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">欢朋客房宽阔落地窗前，俯瞰延吉市区秋日街景与温润茶台同框。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">16:30 - 17:30 傍晚柔和漫射暖光，客房灯光静谧安详。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈脱去外套换上舒适拖鞋，手捧温热大麦茶安坐小憩，消除高铁舟车劳顿。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>\${dinnerMode === 'yuannainai' ? '步行 3m · 200 m 楼下老字号' : '客房内安享私宴 · 零位移'}</span>
          </div>
          <div class="ts-line"></div>
        </div>

        \${dinnerCardHtml}
      \`;
    }

    // ==========================================
    // Dynamic Render Day 2 Cards
    // ==========================================
    function renderDay2Cards(lunchMode, dinnerMode) {
      const container = document.getElementById('d2_cards_container');
      if (!container) return;

      lunchMode = lunchMode || document.querySelector('input[name="d2_lunch"]:checked')?.value || 'samgyetang';
      dinnerMode = dinnerMode || document.querySelector('input[name="d2_dinner"]:checked')?.value || 'fengmao';

      let lunchCardHtml = '';
      if (lunchMode === 'samgyetang') {
        lunchCardHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">滋补午宴 ~1h</span>
              <span class="act-intensity intensity-flat">长辈养胃极品</span>
            </div>
            <div class="act-name">
              <span>大朴家高丽参鸡汤（长白山人参慢炖整鸡）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%A4%A7%E6%9C%B4%E5%AE%B6%E5%8F%82%E9%B8%A1%E6%B1%A4" onclick="openDianping('延吉 大朴家参鸡汤', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.8分 · 长白山人参慢炖 · 人均 ¥65-85</div>
            <div class="act-tagline">专为长辈挑选的清温滋补午宴。精选童子鸡肚内塞满长白山优质人参、软糯江米、大枣与板栗，在天然石锅中慢火熬煮两小时。鸡肉轻轻一拨即骨肉脱离，江米吸收全部鸡汤精华软烂如羹，热气腾腾养阴生津，极其适合北方秋季润燥。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_samgyetang.jpg" alt="大朴家石锅慢炖高丽参鸡汤与参须" class="spot-img" />
                <div class="photo-badge">秋日滋补</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">滚沸黑色石锅中整只滋补童子鸡与长白山人参特写，高汤奶白浓郁热气腾腾。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">餐厅暖黄射灯，人参石锅高汤油润剔透。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈品尝第一口滋补热参汤，暖胃润燥，精神充沛。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        lunchCardHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">特色午宴 ~1h</span>
              <span class="act-intensity intensity-flat">招牌热玉米温面</span>
            </div>
            <div class="act-name">
              <span>顺姬冷面旗舰店 · 招牌现压玉米温面与香酥锅包肉</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E9%A1%BA%E5%A7%AC%E5%86%B7%E9%9D%A2" onclick="openDianping('延吉 顺姬冷面', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.8分 · 延吉温面标杆老字号 · 人均 ¥45-65</div>
            <div class="act-tagline">专为长辈点选热腾腾的【招牌现压玉米温面】：牛骨熬制的金黄高汤滚热浓醇，现压玉米面条爽滑软烂极易咀嚼消化，完全不冰不辣；搭配炸得金黄酥脆、薄切酸甜的热锅包肉，暖胃又解馋。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_wenmian.jpg" alt="顺姬热高汤现煮玉米温面与香酥锅包肉" class="spot-img" />
                <div class="photo-badge">老字号名吃</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">瓷碗中金黄玉米面条与浓郁牛骨热高汤特写，配金黄香酥锅包肉堆。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">餐厅明亮漫射光，锅包肉金黄透亮。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈吹开热汤品尝第一口温面，适口暖胃，赞不绝口。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      }

      let dinnerCardHtml = '';
      if (dinnerMode === 'fengmao') {
        dinnerCardHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">品质晚宴 ~1.5h</span>
              <span class="act-intensity intensity-flat">长辈无烟包厢</span>
            </div>
            <div class="act-name">
              <span>丰茂烤串（延吉总店旗舰包厢 · 全自动下排风无烟）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E4%B8%B0%E8%8C%82%E7%83%A4%E4%B8%B2" onclick="openDianping('延吉 丰茂烤串', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.8分 · 自动无烟旋转烤架 · 人均 ¥95-120</div>
            <div class="act-tagline">全自动无烟下排风旋转烤架，全程无任何呛人油烟气。原味嫩黄牛肉串鲜嫩多汁，炭火逼出自然油脂香气，配现压玉米温面与苏子叶烤肉卷，长辈坐享清静包厢。餐后打车 6 分钟轻松返回希尔顿欢朋酒店安歇。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_fengmao.jpg" alt="丰茂自动旋转无烟烤架与金黄牛肉串" class="spot-img" />
                <div class="photo-badge">无烟包厢</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">自动无烟旋转烤架与炭火金黄肉串特写，桌边配苏子叶与调料碟。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">包厢雅致暖黄顶灯，肉汁光亮泛着金黄色泽。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈围坐无烟包厢，苏子叶包烤肉其乐融融。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        dinnerCardHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">民俗正宴 ~1.5h</span>
              <span class="act-intensity intensity-flat">朝鲜族非遗礼遇</span>
            </div>
            <div class="act-name">
              <span>考世茂传统民俗餐厅（朝鲜族非遗礼遇 · 传统大铜锅宴）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E8%80%83%E4%B8%96%E8%8C%82" onclick="openDianping('延吉 考世茂', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.7分 · 朝鲜族传统民俗正席 · 人均 ¥110-140</div>
            <div class="act-tagline">延吉民俗风味名殿。店内包厢采用传统韩屋暖炕原木造型，身着民族盛装的礼仪服务。招牌七彩温热大铜锅、现做软糯米肠拼盘、鲜明太鱼慢炖豆腐汤，温润滋补，极具非遗文化仪式感。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_baorou.jpg" alt="考世茂朝鲜族传统民俗正宴" class="spot-img" />
                <div class="photo-badge">非遗礼宴</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">传统民俗雅间内，朝鲜族特色大铜锅与七彩精美冷热拼盘特写。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">雅间古朴木质吊灯，菜品色泽古朴典雅。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">感受纯正朝鲜族待客礼仪，尊贵典雅，留下珍贵合影。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      }

      container.innerHTML = \`
        <div class="section-title">核心行程节奏 (Day 2 文博、森林与学府)</div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">文博参访 ~2h</span>
            <span class="act-intensity intensity-flat">全馆电梯无障碍</span>
          </div>
          <div class="act-name">
            <span>延边博物馆（国家一级博物馆 · 朝鲜族民俗历史全览）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E8%BE%B9%E5%8D%9A%E7%89%A9%E9%A6%86" onclick="openDianping('延边博物馆', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延边历史文化精粹所在。全馆配备观光直梯与无障碍坡道，室内中央恒温 21°C。一楼主展厅朝鲜族民俗展极其生动：原木建造的传统民居温居、花甲宴传统礼俗场景、精巧秋千与农乐长鼓。长辈平地慢步，在讲解器伴随下细品边陲多元文化沉淀。</div>
          <div class="act-special-grid">
            <div class="as-item" style="grid-column: 1 / -1;">
              <span class="as-item-label">预约提点:</span>
              <span class="as-item-val">提前通过微信小程序【延边博物馆】免费预约门票；长辈持二代身份证原件刷证进馆，60岁以上长辈享绿色通道免排队。</span>
            </div>
            <div class="as-item">
              <span class="as-item-label">落客指引:</span>
              <span class="as-item-val">网约车直接停在博物馆南门正门平坦路缘下客，下车即进门，全馆电梯无障碍。</span>
            </div>
          </div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_museum.jpg" alt="延边博物馆朝鲜族传统民俗展厅" class="spot-img" />
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
            <span>打车 ~10m · 3.5 km 前往特色午宴</span>
          </div>
          <div class="ts-line"></div>
        </div>

        \${lunchCardHtml}

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~8m · 2.5 km 返回希尔顿欢朋酒店午休</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">酒店午休 ~2h</span>
            <span class="act-intensity intensity-flat">关键体力调养</span>
          </div>
          <div class="act-name">
            <span>【关键节奏】返回希尔顿欢朋酒店深度午休 2 小时</span>
          </div>
          <div class="act-tagline">中午 13:15–15:15 严守长辈行程核心铁律：回客房脱鞋卧床静息。北方秋日正午干燥，在客房泡一杯热温水，静心小憩补足精气神，让长辈下午出游始终神清气爽。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_hotel.jpg" alt="希尔顿欢朋客房深度午休调养" class="spot-img" />
              <div class="photo-badge">静卧充电</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">遮光帘拉起半侧的舒适大床与温茶角，静谧安然。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">午后柔和窗光。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">严守午休铁律，充沛体力迎午后。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~18m · 8.8 km 前往帽儿山森林公园</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">森林漫步 ~1.5h</span>
            <span class="act-intensity intensity-gentle">纯平观景木栈道</span>
          </div>
          <div class="act-name">
            <span>帽儿山国家森林公园（平缓观景木栈道 · 呼吸金秋松脂清香）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%B8%BD%E5%84%BF%E5%B1%B1" onclick="openDianping('延吉 帽儿山', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延吉城市的天然大氧吧。专车直接开抵核心木栈道入口，栈道沿山脊平缓铺设，坡度极微极宽敞。金秋漫山红松与落叶松一片金黄，空气中弥漫着清冽的松脂香气。只走前段最平缓的 800 米林间观景段，不走任何陡坡台阶，累了随时在木椅上歇脚看松鼠。</div>
          <div class="act-special-grid">
            <div class="as-item">
              <span class="as-item-label">落客指引:</span>
              <span class="as-item-val">车辆直接停在木栈道正门入口广场，下车即走木栈道，全程无台阶。</span>
            </div>
            <div class="as-item">
              <span class="as-item-label">步道建议:</span>
              <span class="as-item-val">仅在入口前 800 米平坦平步区漫游，不登顶、不走陡坡木梯，平步慢呼吸。</span>
            </div>
          </div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_maoershan.jpg" alt="帽儿山平缓木栈道与金秋林海" class="spot-img" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">森林木栈道观景平台向南远眺，金色落叶松林海与起伏山峦层次分明。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">15:45 - 16:30 午后金色阳光斜射穿透松林，丁达尔光束极美。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈漫步在纯平木栈道上深呼吸松香，神采奕奕，身心舒畅。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~15m · 7.5 km 前往延边大学正门</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">学府人文 ~1h</span>
            <span class="act-intensity intensity-flat">平坦林荫大道</span>
          </div>
          <div class="act-name">
            <span>延边大学正门建筑大飞檐 & 校园晨光林荫漫步</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%BB%B6%E8%BE%B9%E5%A4%A7%E5%AD%A6" onclick="openDianping('延吉 延边大学', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延边大学主楼建筑群极具民族特色。主楼仿照长白山天池天平飞檐造型设计，雕梁画栋。正门开阔林荫广场平坦整洁，长辈缓步前行，观赏汉朝双语建筑牌匾，感受边陲第一学府的浓郁书卷气与青春活力。</div>
          <div class="act-special-grid">
            <div class="as-item" style="grid-column: 1 / -1;">
              <span class="as-item-label">预约提点:</span>
              <span class="as-item-val">访客进校提前通过微信公众号【延边大学】预约报备（外景参观无需进楼），如遇节假日管控，在正门开阔广场欣赏飞檐全景与拍照同样极佳。</span>
            </div>
          </div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_univ.jpg" alt="延边大学传统飞檐主楼" class="spot-img" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">延边大学求真楼主楼正前方中央大道，仰拍壮美大飞檐屋顶中轴线。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">16:45 - 17:15 傍晚金光洒在飞檐瓦当上，层次分明。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈立于学府宏伟飞檐前留影，气度庄严从容。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>步行 2m · 延大正门对面开阔广场</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">地标打卡 ~30m</span>
            <span class="act-intensity intensity-flat">开阔广场无拥挤</span>
          </div>
          <div class="act-name">
            <span>网红汉朝双语弹幕墙（对街开阔广场侧影）</span>
          </div>
          <div class="act-tagline">延大南门对面的大学城商业楼外立面，密密麻麻挂满汉朝双语霓虹招牌。特别安排在开阔广场长椅处侧影拍摄，避开马路边拥挤排队人群，长辈安坐手持一杯温热咖啡杯合影，从容出片。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_danmu.jpg" alt="延吉网红双语弹幕墙" class="spot-img" />
              <div class="photo-badge">地标夜景</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">公园路南侧人行道或对街广场长椅，以五彩汉朝双语霓虹牌匾为璀璨大背景。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">17:30 - 18:30 华灯初上，暮色蓝调与霓虹灯光辉映。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈手捧双语特色咖啡杯安坐留影，时尚温馨充满异国情调。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~8m · 2.6 km 前往晚宴</span>
          </div>
          <div class="ts-line"></div>
        </div>

        \${dinnerCardHtml}
      \`;
    }

    // ==========================================
    // Dynamic Render Day 3 Cards
    // ==========================================
    function renderDay3Cards(morningMode, bbqMode, coffeeMode) {
      const container = document.getElementById('d3_cards_container');
      if (!container) return;

      morningMode = morningMode || document.querySelector('input[name="d3_morning"]:checked')?.value || 'daoyin';
      bbqMode = bbqMode || document.querySelector('input[name="d3_bbq"]:checked')?.value || 'meihua';
      coffeeMode = coffeeMode || document.querySelector('input[name="d3_coffee"]:checked')?.value || 'laodingben';

      let morningHtml = '';
      if (morningMode === 'daoyin') {
        morningHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">文脉寻踪 ~1.5h</span>
              <span class="act-intensity intensity-flat">百年清代古建</span>
            </div>
            <div class="act-name">
              <span>延吉道尹公署旧址（百年清末古建筑群落 · 幽静文化寻踪）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E9%81%93%E5%B0%B9%E5%85%AC%E7%BD%B2" onclick="openDianping('延吉 道尹公署', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">始建于清宣统元年（1909年），是延吉市内现存唯一的清代官方官署建筑群。青砖灰瓦、四合院落布局，飞檐斗拱掩映在百年古树之中。院落全程纯平青砖路面，无台阶无陡坡，环境安详清幽、远离喧嚣。长辈可悠然踱步参观边防开拓与历史展陈，品味边陲百年沧桑。</div>
            <div class="act-special-grid">
              <div class="as-item">
                <span class="as-item-label">落客指引:</span>
                <span class="as-item-val">网约车直达南营街正门入口，门口平坦路缘下客，下车即进院。</span>
              </div>
              <div class="as-item">
                <span class="as-item-label">无障碍关怀:</span>
                <span class="as-item-val">四合院内部为纯平青石板铺设，全程零坡度台阶，院内设遮阳石凳休息。</span>
              </div>
            </div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_daoyin.jpg" alt="延吉道尹公署清代古建四合院" class="spot-img" />
                <div class="photo-badge">最佳机位</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">道尹公署正院青砖照壁与主堂飞檐前，古朴石阶与苍翠古榆环绕。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">09:30 - 10:30 上午柔和侧逆光，古建青砖灰瓦肌理质感极强。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈立于百年官署回廊下从容漫步，文化典雅气度非凡。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else if (morningMode === 'ybu') {
        morningHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">学府晨光 ~1.5h</span>
              <span class="act-intensity intensity-flat">学府林荫漫步</span>
            </div>
            <div class="act-name">
              <span>延边大学求真楼大飞檐 & 晨光林荫漫步</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%BB%B6%E8%BE%B9%E5%A4%A7%E5%AD%A6" onclick="openDianping('延吉 延边大学', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">清晨 09:00 前往延边大学，避开傍晚拍照人潮。朝阳穿透校园银杏大道，求真楼传统大飞檐在晨曦中巍峨挺拔。长辈漫步纯平学府林荫道，观赏汉朝双语建筑题刻，静享晨间学府书香。</div>
            
            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_univ.jpg" alt="延边大学求真楼大飞檐晨景" class="spot-img" />
                <div class="photo-badge">学府晨光</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">求真楼南广场中央校训景石前，中轴线仰拍天池青瓦飞檐造型。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">09:00 - 10:00 晨光倾洒，空气澄澈透明。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈立于晨光银杏树下留影，书卷气与朝气并存。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        morningHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">休闲广场 ~1.5h</span>
              <span class="act-intensity intensity-flat">城市标志广场</span>
            </div>
            <div class="act-name">
              <span>金达莱民俗广场（城市标志金达莱花雕塑）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E9%87%91%E8%BE%BE%E8%8E%B1%E5%B9%BF%E5%9C%BA" onclick="openDianping('延吉 金达莱广场', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">延吉最具代表性的市民文化广场，以延边朝鲜族自治州州花“金达莱”为核心主题。广场铺设极为平整开阔，视野极其明亮。长辈可漫步广场，欣赏巨大的盛开粉红金达莱花不锈钢雕塑，近距离观摩当地朝鲜族长辈传统晨练、门球比赛与长鼓舞，其乐融融。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_jindalai.jpg" alt="延吉金达莱民俗广场" class="spot-img" />
                <div class="photo-badge">城市地标</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">金达莱雕塑正前方中轴喷泉平步区，仰拍盛开的巨大粉色花瓣与蓝天。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">09:30 - 10:30 上午顺光，雕塑花瓣粉嫩鲜活。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈立于广场标志前留念，笑容明媚开朗。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      }

      let bbqHtml = '';
      if (bbqMode === 'meihua') {
        bbqHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">特色午宴 ~1.5h</span>
              <span class="act-intensity intensity-flat">炭火品质代烤包厢</span>
            </div>
            <div class="act-name">
              <span>梅花炭火烤肉品质包厢（延吉老牌烤肉名店 · 全程桌边代烤）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E6%A2%85%E8%8A%B1%E7%83%A4%E8%82%89" onclick="openDianping('延吉 梅花烤肉', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.8分 · 延吉本土烤肉老字号 · 人均 ¥110-140</div>
            <div class="act-tagline">【延吉第一顿品质炭火烤肉】延吉烤肉界口碑首选。特别安排独立恒温空调包间，强劲下排风彻底隔绝炭火油烟。招牌精选黄牛雪花肉、牛肋条无任何粗筋，服务员全程在桌边协助掌握精准火候代烤，烤至表面微焦、内里饱满多汁，剪成小块装盘。长辈用嫩生菜与紫苏叶包裹，软嫩化渣免动牙力，配温热大酱汤，惬意满足。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_bbq.jpg" alt="梅花炭火烤肉雪花牛肉代烤" class="spot-img" />
                <div class="photo-badge">品质代烤</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">无烟炭火烤盘特写，代烤服务生精准翻转雪花牛肉油润瞬间。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">包厢暖黄温和射灯，菜品色泽红润诱人。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈围坐无烟包厢，苏子叶包肉碰杯欢聚，温馨自然。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else if (bbqMode === 'wanxingjia') {
        bbqHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">特色午宴 ~1.5h</span>
              <span class="act-intensity intensity-flat">黑牛专门店包厢</span>
            </div>
            <div class="act-name">
              <span>万兴佳黑牛烤肉（局子街核心区 · 顶级原切雪花专门店）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E4%B8%87%E5%85%B4%E4%BD%B3%E7%83%A4%E8%82%89" onclick="openDianping('延吉 万兴佳烤肉', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.8分 · 延边雪花黑牛专门店 · 人均 ¥130-160</div>
            <div class="act-tagline">【雪花黑牛专门店】延吉当地有口皆碑的黑牛专家。严选延边高寒天然牧场生长的优质黑牛，原切大理石雪花肉排，肉质细嫩丰腴。全程桌边代烤，油花在炭火上滋滋作响，入口柔嫩回甘，搭配温热海带牛肉汤与软糯米饭，长辈吃得大呼过瘾。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_bbq.jpg" alt="万兴佳黑牛雪花原切肉排" class="spot-img" />
                <div class="photo-badge">雪花黑牛</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">原切雪花大理石花纹肉排摆盘与炭火烤网俯拍。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">餐厅暖色聚光灯，大理石雪花花纹清晰艳丽。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈手持木筷品尝刚剪好的鲜嫩牛肉块，其乐融融。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        bbqHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">特色午宴 ~1.5h</span>
              <span class="act-intensity intensity-flat">民族传统风味</span>
            </div>
            <div class="act-name">
              <span>白玉传统烤肉 / 百济传统烤肉（民族风味代烤）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E7%99%BD%E7%8E%89%E7%83%A4%E8%82%89" onclick="openDianping('延吉 白玉烤肉', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.7分 · 传统秘制调味 · 人均 ¥90-120</div>
            <div class="act-tagline">几十年传承的民族秘制微甜果香腌汁，牛肉片薄而软烂，炭火一炙即熟，香气扑鼻。配上店里招牌的现压冷面或热温面，酸甜开胃。独立包厢下排风，服务细致周到。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_bbq.jpg" alt="白玉传统秘制烤牛肉" class="spot-img" />
                <div class="photo-badge">秘制调味</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">炭火烤盘上秘制调味牛肉翻烤冒泡特写，配多种开胃泡菜。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">包房温润暖光，肉质诱人。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈品尝秘制风味，体验几十年老延吉味道。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      }

      let coffeeHtml = '';
      if (coffeeMode === 'laodingben') {
        coffeeHtml = \`
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

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_coffee.jpg" alt="劳顶笨咖啡与纯牛奶红豆打糕雪冰" class="spot-img" />
                <div class="photo-badge">慢调茶歇</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">临窗宽敞皮质沙发座，温热五味子茶与雪白细腻的打糕雪冰同框。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">16:00 - 17:00 午后柔光斜洒，慢调生活松弛感拉满。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈捧着茶盏舒适倚靠沙发，神情安逸祥和。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        coffeeHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">韩屋茶歇 ~1h</span>
              <span class="act-intensity intensity-flat">韩屋原木风雅座</span>
            </div>
            <div class="act-name">
              <span>后浪咖啡 / 佳温咖啡（韩屋原木风静谧包厢）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%90%8E%E6%B5%AA%E5%92%96%E5%95%A1" onclick="openDianping('延吉 后浪咖啡', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">延吉新晋高口碑静谧茶咖空间。全店采用传统韩屋原木质感与暖黄灯光设计，环境雅致清幽无喧嚣。专为长辈点选长白山野生蓝莓热饮、养胃温热米露与低因手冲咖啡，慢品午后静谧时光。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_coffee.jpg" alt="后浪咖啡韩屋雅座与温热特调茶饮" class="spot-img" />
                <div class="photo-badge">韩屋原木风</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">韩屋木质榻榻米雅座窗棂旁，热养生米露与雪冰特写。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">暖黄色内透光，木质纹理温润。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈在韩屋雅室安坐，身心完全放松。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      }

      container.innerHTML = \`
        <div class="section-title">核心行程节奏 (Day 3 市内悠享)</div>
        \${morningHtml}

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~8m · 2.8 km 前往烤肉名店包厢</span>
          </div>
          <div class="ts-line"></div>
        </div>

        \${bbqHtml}

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~5m · 1.5 km 返回希尔顿欢朋酒店深度午休</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">酒店午休 ~2h</span>
            <span class="act-intensity intensity-flat">核心体力调养</span>
          </div>
          <div class="act-name">
            <span>【关键调养】返回希尔顿欢朋酒店深度午休 2 小时</span>
          </div>
          <div class="act-tagline">13:15–15:15 回酒店客房静息。长辈脱鞋换衣卧床睡眠，饱食烤肉后在恒温客房美美小憩，蓄积下午游园的充沛精力。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_hotel.jpg" alt="希尔顿欢朋客房深度午休调养" class="spot-img" />
              <div class="photo-badge">静卧充电</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">客房拉起厚遮光帘后的安静床铺与茶台。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">柔和室内暖灯。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈睡足精神爽，笑意盈盈准备午后游园。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~5m · 1.2 km 前往延吉人民公园</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">林荫散步 ~1.5h</span>
            <span class="act-intensity intensity-flat">平缓城市古榆</span>
          </div>
          <div class="act-name">
            <span>延吉人民公园（百年古榆林海 · 纯平步道漫步）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E4%BA%BA%E6%B0%91%E5%85%AC%E5%9B%AD" onclick="openDianping('延吉 人民公园', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延吉历史最悠久的综合性城市公园。园区内古木参天，拥有数百年树龄的苍翠榆树林海。全程纯平水泥硬化路面，宽敞开阔无任何台阶爬升。金秋落叶缤纷，湖水涟漪。长辈可在林下长椅安坐，观赏当地长辈下朝鲜象棋、跳象帽舞，极其安逸自在。</div>
          <div class="act-special-grid">
            <div class="as-item">
              <span class="as-item-label">落客指引:</span>
              <span class="as-item-val">公园南门平坦路缘下客，进门即是百年古榆大道。</span>
            </div>
            <div class="as-item">
              <span class="as-item-label">轮椅与平步:</span>
              <span class="as-item-val">全园路面平整如砥，绿化覆盖率超80%，沿途长椅密布。</span>
            </div>
          </div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_park.jpg" alt="延吉人民公园百年古榆林海" class="spot-img" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">公园中心人工湖畔汉白玉曲桥旁，百年金色老榆树倒映碧水中。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">15:30 - 16:30 午后金辉穿透金黄榆树叶，地面光斑斑驳。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈漫步古榆树下，秋色如画，悠闲自得。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>步行 3m · 200 m 前往咖啡厅休息</span>
          </div>
          <div class="ts-line"></div>
        </div>

        \${coffeeHtml}

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~6m · 2 km 前往晚宴</span>
          </div>
          <div class="ts-line"></div>
        </div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">特色晚宴 ~1h</span>
            <span class="act-intensity intensity-flat">招牌玉米温面暖胃</span>
          </div>
          <div class="act-name">
            <span>顺姬冷面旗舰店（现煮玉米温面 · 暖胃温润）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E9%A1%BA%E5%A7%AC%E5%86%B7%E9%9D%A2" onclick="openDianping('延吉 顺姬冷面', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延吉冷面名满天下，但由于冷面带冰碴过凉，为保护长辈肠胃，特别点选【招牌现煮玉米温面】。牛骨高汤滚烫香浓，玉米面条软糯滑顺极易下咽，搭配一盘香酥锅包肉与热石锅拌饭，吃完全身暖洋洋，毫无肠胃负担。餐后打车 5 分钟轻松回酒店安歇。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_wenmian.jpg" alt="顺姬热高汤现煮玉米温面与香酥锅包肉" class="spot-img" />
              <div class="photo-badge">暖胃名品</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">大瓷碗中热气腾腾的黄色玉米温面与金黄酥脆锅包肉合影。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">餐厅暖黄色顶灯，汤水金黄诱人。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈吃得暖胃舒坦，为充实的市内一日画上圆满句号。</span>
              </div>
            </div>
          </div>
        </div>
      \`;
    }

    // ==========================================
    // Dynamic Render Day 4 Cards
    // ==========================================
    function renderDay4Cards(routeMode, transMode, seafoodMode) {
      const container = document.getElementById('d4_cards_container');
      if (!container) return;

      routeMode = routeMode || document.querySelector('input[name="d4_route"]:checked')?.value || 'go_hunchun';
      transMode = transMode || document.querySelector('input[name="d4_transport"]:checked')?.value || 'charter';
      seafoodMode = seafoodMode || document.querySelector('input[name="d4_seafood"]:checked')?.value || 'kingcrab';

      const isCharter = transMode === 'charter';
      const isSnowCrab = seafoodMode === 'snowcrab';

      if (routeMode === 'go_hunchun') {
        container.innerHTML = \`
          <div class="section-title">核心行程节奏 (Day 4 珲春防川三国交界 + 活蒸帝王蟹)</div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">\${isCharter ? '商务专车出发 ~1.8h' : '城际高铁 ~40m'}</span>
              <span class="act-intensity intensity-ride">\${isCharter ? '7座商务包车一车到底' : '高铁+地接包车'}</span>
            </div>
            <div class="act-name">
              <span>\${isCharter ? '希尔顿欢朋酒店门前出发 · 专车直达防川国家风景区' : '延吉西站搭乘高铁至珲春站 · 转乘专属地接专车'}</span>
            </div>
            <div class="act-tagline">\${isCharter ? 
              '早晨 08:30 7座舒适商务专车准时在希尔顿欢朋大堂门前迎候。长辈上车即走，随身保暖衣物与保温杯随车携带；双向四车道高速公路平稳笔直，长辈在车内后排舒心小憩，彻底免除进出高铁站排队安检换乘的奔波劳顿。' : 
              '早晨打车至延吉西站，搭乘城际高铁直达珲春站，运行仅需约 40 分钟。列车平稳舒适，车厢恒温宽敞；出站后与珲春当地预订的专属地接包车对接，平稳驶往防川。'}</div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              <span>高速直梯直达 12 层观景台</span>
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
                <img src="./images/spot_yj_fangchuan.jpg" alt="防川龙虎阁一眼望三国" class="spot-img" />
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
              <span class="act-time-pill">第一顿活海鲜盛宴 ~1.5h</span>
              <span class="act-intensity intensity-flat">俄罗斯直运活鲜</span>
            </div>
            <div class="act-name">
              <span>\${isSnowCrab ? '珲春海鲜街 · 俄罗斯直运深海活板蟹/雪蟹清甜宴' : '珲春海鲜街 · 醉香阁/蟹港俄罗斯直运活蒸帝王蟹盛宴'}</span>
              <a href="dianping://searchshoplist?keyword=%E7%8F%B2%E6%98%A5%20%E6%B5%B7%E9%B2%9C%E8%A1%97" onclick="openDianping('珲春 海鲜街 帝王蟹', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="font-size:12px; color:#475569; margin:4px 0;">大众点评 4.9分 · 现场大水池活鲜现挑 · 人均 ¥220-350 · 珲春海鲜街标杆</div>
            <div class="act-tagline">\${isSnowCrab ? 
              '【珲春深海活板蟹清甜盛宴】现场在大水池挑选俄罗斯直运鲜活深海板蟹（雪蟹）。整只入蒸笼清蒸，蟹肉如丝般细嫩、清甜多汁，分量轻盈不腻；蟹黄拌热米饭香气扑鼻，长辈吃得温润舒坦。' : 
              '【珲春第一顿帝王蟹盛宴】珲春拥有全国最大俄罗斯活体帝王蟹集散口岸。现场在大水池挑选鲜活帝王蟹，整只原汁原味清蒸上桌。蟹肉雪白紧实、饱满多汁，天然清甜毫不油腻，长辈无需费力咀嚼即可大快朵颐；蟹膏调入温热海鲜粥，温润暖胃，顶级体验！'}</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_kingcrab.jpg" alt="珲春海鲜街现场活蒸帝王蟹大餐" class="spot-img" />
                <div class="photo-badge">源头活鲜</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">海鲜池边双手托起鲜活大帝王蟹特写，与整只热气腾腾红亮清蒸大蟹上桌瞬间。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">餐厅明亮暖黄聚光灯，蟹壳红艳亮泽，蟹肉洁白如雪。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈手捧大蟹腿肉蘸特制姜醋汁，大快朵颐，喜笑颜开。</span>
                </div>
              </div>
            </div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              <span>\${isCharter ? '商务专车平稳返程 ~1.2h · 98 km 直达希尔顿欢朋酒店' : '高铁返程 ~40m · 返回延吉希尔顿欢朋酒店'}</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">返程休整 ~2h</span>
              <span class="act-intensity intensity-flat">客房深度休整</span>
            </div>
            <div class="act-name">
              <span>返回延吉中心希尔顿欢朋酒店 · 进房品茗泡脚深度休整</span>
            </div>
            <div class="act-tagline">下午 15:30 平稳送回希尔顿欢朋。长辈在房间洗手更衣，喝一杯温热大麦茶，卧床休息静心调养。傍晚在酒店楼下就近品尝百年老字号全州拌饭的温润石锅拌饭与热明太鱼豆腐汤，轻盈养胃，早早安歇。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_hotel.jpg" alt="希尔顿欢朋客房品茗深度休整" class="spot-img" />
                <div class="photo-badge">安心安歇</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">客房茶几前长辈喝温茶小憩，温馨适意。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">消除一日出游微倦，体力完全恢复。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        container.innerHTML = \`
          <div class="section-title">核心行程节奏 (Day 4 图们边境慢行备选路线)</div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">专车前往 ~45m</span>
              <span class="act-intensity intensity-ride">超低车程舒缓行</span>
            </div>
            <div class="act-name">
              <span>希尔顿欢朋酒店大堂出发 · 专车前往图们边境口岸 (车程仅 45 分钟)</span>
            </div>
            <div class="act-tagline">09:00 从容出发。延吉至图们全程全封闭高速，路况极平稳，车程仅 45 分钟。长辈完全没有长时间坐车的枯燥感。</div>
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
                <img src="./images/spot_yj_tumen.jpg" alt="图们边境口岸国门" class="spot-img" />
                <div class="photo-badge">最佳机位</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">国门广场 86 号界碑旁，正对中朝跨国大桥中线。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">10:00 - 11:30 上午顺光，江面碧绿透亮。</span>
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

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_samgyetang.jpg" alt="李香石锅饭与温热明太鱼热汤" class="spot-img" />
                <div class="photo-badge">风味温食</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">热气蒸腾的石锅饭与金黄明太鱼干炖汤同框。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈品尝地道图们边城家常味，胃里温暖舒坦。</span>
                </div>
              </div>
            </div>
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

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_riguangshan.jpg" alt="日光山俯瞰图们江江湾" class="spot-img" />
                <div class="photo-badge">江湾全景</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">山顶观景石台向南俯拍图们江巨大 S 形拐弯与对岸山峦。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈临风倚栏，中朝大好江山尽收眼底。</span>
                </div>
              </div>
            </div>
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
    // Dynamic Render Day 5 Cards
    // ==========================================
    function renderDay5Cards(shopMode, dinnerMode) {
      const container = document.getElementById('d5_cards_container');
      if (!container) return;

      shopMode = shopMode || document.querySelector('input[name="d5_shopping"]:checked')?.value || 'westmarket';
      dinnerMode = dinnerMode || document.querySelector('input[name="d5_dinner"]:checked')?.value || 'crab_yanji';

      let shopHtml = '';
      if (shopMode === 'westmarket') {
        shopHtml = \`
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

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_westmarket.jpg" alt="延吉西市场民族特产汇聚" class="spot-img" />
                <div class="photo-badge">民族特产</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">西市场一层特产长廊，红通通的延边苹果梨堆与整齐成排的明太鱼干摊位前。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">室内柔和漫射光，色彩纯正饱满。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈挑选长白山椴木木耳与苹果梨，顺丰官方直接打包，轻松欢喜。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        shopHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">特产采选 ~1.5h</span>
              <span class="act-intensity intensity-flat">现代精品超市</span>
            </div>
            <div class="act-name">
              <span>延吉百货大楼 · 地下精品特产超市 (正规礼盒包装 · 直邮)</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E7%99%BE%E8%B4%A7%E5%A4%A7%E6%A5%BC" onclick="openDianping('延吉 百货大楼', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">延吉历史最悠久的国营商业龙头。地下精品超市全电梯直达，冷气舒适。专设延边特产专区，正品人参礼盒、长白山有机木耳、精装苹果梨与真空包装冷面一应俱全，官方提供顺丰冷链直邮寄送，特别适合喜欢现代整洁购物环境的长辈。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_westmarket.jpg" alt="延吉百货大楼特产专柜" class="spot-img" />
                <div class="photo-badge">精品商厦</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">延百特产精品展柜前，高档人参礼盒与精装木耳展示台。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈从容挑选精品伴手礼，商厦直梯直通车库。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      }

      let dinnerHtml = '';
      if (dinnerMode === 'crab_yanji') {
        dinnerHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">延吉帝王蟹惜别宴 ~2h</span>
              <span class="act-intensity intensity-flat">市内活鲜独立包厢</span>
            </div>
            <div class="act-name">
              <span>震海贝烤贝·活蟹鲜海鲜专门店（延吉总店独立包厢）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E9%9C%87%E6%B5%B7%E8%B4%9D%E7%83%A4%E8%B4%9D" onclick="openDianping('延吉 震海贝烤贝 帝王蟹', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
              <span style="color:#0F172A; font-size:12px; font-weight:700;">4.8分</span>
              <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">延吉活海鲜热榜第一</span>
              <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥260 - 330</span>
            </div>
            <div class="act-tagline">【延吉第二顿帝王蟹盛宴 · 惜别晚宴】延吉市内极品俄罗斯活海鲜专门店。大池活蟹现捞现蒸，整只红亮帝王蟹清蒸上桌，配上招牌炭烤大天鹅蛋贝与马蹄贝。服务人员全程协助剪开蟹壳，蟹腿肉饱满整齐滑出，肉质如丝般细嫩鲜甜。搭配温润蟹膏黄金炒饭，为延吉之行画上最奢华完美的句号！</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_kingcrab.jpg" alt="震海贝烤贝俄罗斯活蒸帝王蟹盛宴" class="spot-img" />
                <div class="photo-badge">惜别蟹宴</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">独立雅间炭烤大贝与整只活蒸大帝王蟹同桌同框，开壳蟹腿肉雪白如丝。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">雅间暖色调聚光灯，海鲜原汁原味晶莹诱人。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">延吉最后一晚合家惜别大聚餐，举杯欢度国庆假期！</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        dinnerHtml = \`
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">国宴盛席 ~2h</span>
              <span class="act-intensity intensity-flat">朝鲜族宫廷礼遇</span>
            </div>
            <div class="act-name">
              <span>海兰江民俗宫（正宗朝鲜族宫廷盛宴 · 独立雅间）</span>
              <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E6%B5%B7%E5%85%B0%E6%B1%9F%E6%B0%91%E4%BF%97%E5%AE%AB" onclick="openDianping('延吉 海兰江民俗宫', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">延吉国宾级朝鲜族传统料理殿堂。服务员身着华丽朝鲜族传统韩服提供宫廷礼仪服务。招牌七彩温热排骨火锅、纯手工米肠拼盘、鲜美烤明太鱼与养生人参糯米粥，典雅尊贵，极具仪式感。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_yj_baorou.jpg" alt="海兰江民俗宫宫廷盛席" class="spot-img" />
                <div class="photo-badge">宫廷盛宴</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">宫廷包厢内七彩排骨大铜锅与雕花餐具特写。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈身着整洁便装在宫廷雅间合影留念，喜气盈门。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      }

      container.innerHTML = \`
        <div class="section-title">核心行程节奏 (Day 5 晨市、特产与惜别宴)</div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">晨市烟火 ~1.5h</span>
            <span class="act-intensity intensity-flat">地道民间烟火</span>
          </div>
          <div class="act-name">
            <span>延吉水上市场露天早市（现打温热黄豆面打糕 · 纯热豆浆）</span>
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E6%B0%B4%E4%B8%8A%E5%B8%82%E5%9C%BA" onclick="openDianping('延吉 水上市场', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">烟集河畔历史悠久的露天早市，07:30 清晨前往，空气清新。整条街弥漫着热腾腾的香气：热气蒸腾的江米鸡、木槌现打的温热打糕裹满细腻香浓的黄豆面、香喷喷的热米肠、现煎苏子叶饼与滚烫五谷豆浆。长辈腿脚好慢慢逛，亲身感受延吉老百姓最真实的晨间生活气息。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_watermarket.jpg" alt="延吉水上市场晨曦烟火" class="spot-img" />
              <div class="photo-badge">最佳机位</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">现打打糕摊位前，木槌重重砸下年糕米、撒上金黄黄豆粉的腾腾热气特写。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">07:30 - 08:30 清晨第一缕斜阳穿透集市白雾，极具生活质感。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈手捧刚切好温热滚烫的黄豆面打糕盒，笑逐颜开。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~5m · 1.5 km 前往特产采购大厦</span>
          </div>
          <div class="ts-line"></div>
        </div>

        \${shopHtml}

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>步行 2m · 紧邻商厦老街坊</span>
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
            <a href="dianping://searchshoplist?keyword=%E5%BB%B6%E5%90%89%20%E5%85%83%E8%B1%86%E9%A5%AD%E5%BA%97" onclick="openDianping('延吉 兴豆饭店', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
          </div>
          <div class="act-tagline">延吉几十年历史的老街坊餐馆。招牌黑豆炸酱面酱香浓郁微甜、面条现拉现煮爽滑易嚼；香酥软炸肉外酥里嫩肉汁饱满，再配一碗热乎乎的豆腐大酱汤，温馨扎实。餐后打车回酒店深度午休。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_wenmian.jpg" alt="兴豆饭店老牌黑豆炸酱面与香酥软炸肉" class="spot-img" />
              <div class="photo-badge">老字号风味</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">浓郁黑亮炸酱面与金黄软炸肉同桌俯拍，热气升腾。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">品尝延吉老街坊几十年不变的地道家常风味。</span>
              </div>
            </div>
          </div>
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

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_hotel.jpg" alt="希尔顿欢朋客房午后静卧小憩" class="spot-img" />
              <div class="photo-badge">客房安歇</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">客房落地窗前温暖茶台，静卧充电。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈在柔软大床上静卧补觉，消除上午购物疲惫。</span>
              </div>
            </div>
          </div>
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
              <img src="./images/spot_yj_burhatong.jpg" alt="布尔哈通河畔金秋晚霞" class="spot-img" />
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
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈倚在亲水栏杆前，金色霞光洒在肩头，宁静祥和。</span>
              </div>
            </div>
          </div>
        </div>

        <div class="transit-step">
          <div class="ts-line"></div>
          <div class="ts-badge">
            <svg style="width:12px;height:12px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            <span>打车 ~8m · 3.2 km 前往惜别盛宴</span>
          </div>
          <div class="ts-line"></div>
        </div>

        \${dinnerHtml}
      \`;
    }

    // ==========================================
    // Dynamic Render Day 6 Cards
    // ==========================================
    function renderDay6Cards() {
      const container = document.getElementById('d6_cards_container');
      if (!container) return;

      container.innerHTML = \`
        <div class="section-title">核心行程节奏 (Day 6 从容返程)</div>

        <div class="act-card">
          <div class="act-header">
            <span class="act-time-pill">自然醒晨间 ~1.5h</span>
            <span class="act-intensity intensity-flat">欢朋营养热早</span>
          </div>
          <div class="act-name">
            <span>自然醒晨起 · 希尔顿欢朋温润自助早餐 & 从容退房</span>
          </div>
          <div class="act-tagline">不设早起闹钟，让长辈睡到自然醒。07:30–09:00 前往酒店早餐厅，享用现熬小米南瓜粥、热现磨豆浆、现蒸鲜肉包与热大麦茶。餐后在客房从容整理随身物品，礼宾人员协助将打包好的特产和行李推至大堂。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_hotel.jpg" alt="希尔顿欢朋酒店温馨客房与丰盛早餐" class="spot-img" />
              <div class="photo-badge">温暖欢朋</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">欢朋早餐厅明亮餐台前，热气腾腾的现熬小米粥与热茶同框。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">晨光倾洒，明亮温馨。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈吃得饱足暖和，精神焕发，从容退房。</span>
              </div>
            </div>
          </div>
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
            <span>延吉西站从容候车 · 踏上舒适归途</span>
          </div>
          <div class="act-tagline">专车直抵西站高架二层落客大平台，司机与随行人员协助卸运随身行李。车站配备完善无障碍直梯与长辈优先进站通道。高铁列车平稳启动，圆满结束 6 天 5 晚温暖充实的延边金秋长辈舒享之旅。</div>

          <!-- Photo Spot Card -->
          <div class="spot-photo-card">
            <div class="photo-img-wrap">
              <img src="./images/spot_yj_weststation.jpg" alt="延吉西站大飞檐落客平台从容候车" class="spot-img" />
              <div class="photo-badge">圆满归途</div>
            </div>
            <div class="photo-guide-body">
              <div class="pg-item">
                <span class="pg-label">取景机位:</span>
                <span class="pg-val">延吉西站进站口大飞檐与候车大厅双语指引标识前。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">最佳光线:</span>
                <span class="pg-val">上午柔和自然光。</span>
              </div>
              <div class="pg-item">
                <span class="pg-label">随行留影:</span>
                <span class="pg-val">长辈在西站从容合影留念，圆满惜别美丽延吉，平安踏上舒适归途。</span>
              </div>
            </div>
          </div>
        </div>
      \`;
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
        const text = b.textContent.toLowerCase();
        if (dayKey === 'all') return text.includes('全部');
        return text.includes(dayKey.toLowerCase());
      });
      if (activeBtn) activeBtn.classList.add('active');

      if (overviewPolyline) {
        overviewMapInstance.removeLayer(overviewPolyline);
        overviewPolyline = null;
      }
      overviewMarkers.forEach(m => overviewMapInstance.removeLayer(m));
      overviewMarkers = [];

      const coords = [];
      const dayColors = {
        1: '#2563EB',
        2: '#7C3AED',
        3: '#059669',
        4: '#DC2626',
        5: '#D97706',
        6: '#0F172A'
      };

      Object.keys(YJ_SPOTS).forEach(k => {
        const sp = YJ_SPOTS[k];
        const match = (dayKey === 'all') || (sp.day && ('day' + sp.day === dayKey)) || (k === 'hotel');
        if (match) {
          coords.push(sp.coord);
          const col = dayColors[sp.day] || '#0F172A';
          const isH = k === 'hotel';

          const m = L.marker(sp.coord, {
            icon: L.divIcon({
              className: 'custom-ov-marker',
              html: \`<div style="background:\${col}; color:#FFF; border-radius:50%; width:20px; height:20px; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; border:2px solid #FFF; box-shadow:0 2px 6px rgba(0,0,0,0.35);">\${isH ? 'H' : (sp.day || '·')}</div>\`,
              iconSize: [20, 20],
              iconAnchor: [10, 10]
            })
          }).addTo(overviewMapInstance);

          m.bindPopup(\`
            <div style="font-size:13px; font-weight:700; color:#0F172A;">\${sp.name}</div>
            <div style="font-size:11px; color:#64748B; margin-top:2px;">\${isH ? '驻地: 延吉中心希尔顿欢朋酒店' : ('Day ' + sp.day + ' 规划打卡点')}</div>
          \`);
          overviewMarkers.push(m);
        }
      });

      if (coords.length > 1) {
        overviewPolyline = L.polyline(coords, {
          color: '#2563EB',
          weight: 3,
          opacity: 0.75,
          dashArray: '4, 4'
        }).addTo(overviewMapInstance);
        overviewMapInstance.fitBounds(overviewPolyline.getBounds(), { padding: [35, 35] });
      } else if (coords.length === 1) {
        overviewMapInstance.setView(coords[0], 12);
      }
    }

    // ==========================================
    // Ideas & Instruction Assistant
    // ==========================================
    function getSavedIdeas() {
      try {
        return JSON.parse(localStorage.getItem('yj_saved_ideas') || '[]');
      } catch (e) {
        return [];
      }
    }

    function setSavedIdeas(ideas) {
      try {
        localStorage.setItem('yj_saved_ideas', JSON.stringify(ideas));
      } catch (e) {}
    }

    function handleSaveIdea() {
      const input = document.getElementById('ideaInputText');
      if (!input || !input.value.trim()) {
        showToast('请输入您的调整需求或灵感便签');
        return;
      }
      const raw = input.value.trim();
      const newIdea = {
        id: 'idea_' + Date.now(),
        text: raw,
        day: currentActiveDay.toUpperCase(),
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const list = getSavedIdeas();
      list.unshift(newIdea);
      setSavedIdeas(list);
      input.value = '';
      renderSavedIdeasList();
      showToast('已成功存入延吉灵感池！');
    }

    function escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function renderSavedIdeasList() {
      const container = document.getElementById('savedIdeasList');
      if (!container) return;

      const list = getSavedIdeas();
      if (!list || list.length === 0) {
        container.innerHTML = '<div style="font-size:12px; color:#94A3B8; text-align:center; padding:16px;">便签池暂无内容，随时粘贴您的灵感与指令</div>';
        return;
      }

      let html = '';
      list.forEach(item => {
        const safeText = escapeHtml(item.text);
        const safeId = escapeHtml(item.id);
        html += \`
          <div class="idea-saved-item">
            <div class="isi-top">
              <div class="isi-meta">
                <span class="isi-day">\${escapeHtml(item.day)}</span>
                <span style="color:#94A3B8; font-size:10px;">\${escapeHtml(item.createdAt || '')}</span>
              </div>
              <button class="isi-del-btn" onclick="deleteSavedIdea('\${safeId}')" title="删除">✕</button>
            </div>
            <div class="isi-text">\${safeText}</div>
          </div>
        \`;
      });
      container.innerHTML = html;
    }

    function deleteSavedIdea(id) {
      let list = getSavedIdeas();
      list = list.filter(item => item.id !== id);
      setSavedIdeas(list);
      renderSavedIdeasList();
      showToast('已从灵感池移除');
    }

    // ==========================================
    // Initializer
    // ==========================================
    function initYanjiApp() {
      renderDay1Cards();
      renderDay2Cards();
      renderDay3Cards();
      renderDay4Cards();
      renderDay5Cards();
      renderDay6Cards();
      switchDay('day1');
      fetchLiveWeather(false);
      renderSavedIdeasList();
    }

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', initYanjiApp);
    } else {
      initYanjiApp();
    }
  </script>
</body>
</html>
`;

// Write to source_yanji.html
const yanjiSourcePath = path.join(__dirname, '..', 'source_yanji.html');
fs.writeFileSync(yanjiSourcePath, yanjiHtml);
console.log('Successfully generated updated source_yanji.html! File length:', yanjiHtml.length);

// Also copy to scripts/rebuild_source_yanji_no_driving.js for consistency
const rebuildScriptPath = path.join(__dirname, 'rebuild_source_yanji_no_driving.js');
fs.copyFileSync(__filename, rebuildScriptPath);
console.log('Synchronized scripts/rebuild_source_yanji_no_driving.js');
