const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'source_qingdao.html');
let content = fs.readFileSync(targetFile, 'utf8');

function transitHtml(text) {
  return `
      <div class="transit-step">
        <div class="ts-line"></div>
        <div class="ts-badge">
          <svg viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
          <span>${text}</span>
        </div>
        <div class="ts-line"></div>
      </div>`;
}

// 1. Replace Day 4 St. Regis dinner card
const oldDay4Dinner = `<div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">17:45 - 19:45</span>
          <span class="act-intensity intensity-flat">海天瑞吉宴庭 · 长辈感恩宴</span>
        </div>
        <div class="act-name">
          <span>青岛海天瑞吉酒店·宴庭中餐厅</span>
          <a href="dianping://searchshoplist?keyword=%E9%9D%92%E5%B2%9B%20%E6%B5%B7%E5%A4%A9%E7%91%9E%E5%90%89%E9%85%92%E5%BA%97%20%E5%AE%B4%E5%BA%AD" onclick="openDianping('青岛 海天瑞吉 宴庭', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div class="act-tagline">大众点评 4.9 分顶奢黑珍珠中餐厅。入座私密高空海景包厢，品鉴黑松露片皮烤鸭、浓汤花胶鸡煨花胶、原汁野生黄鱼煨手工面，顶级食材与温热煲汤，给父母长辈最极致的孝心回馈。</div>
      </div>`;

const newDay4Dinner = `<div class="act-card">
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
      </div>`;

content = content.replace(oldDay4Dinner, newDay4Dinner);

// 2. Replace Day 5 Chuange lunch card
const oldDay5Lunch = `<div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">11:30 - 12:45</span>
          <span class="act-intensity intensity-flat">饯行午宴</span>
        </div>
        <div class="act-name">
          <span>船歌鱼水饺（品质旗舰店）</span>
          <a href="dianping://searchshoplist?keyword=%E8%88%B9%E6%AD%8C%E9%B1%BC%E6%B0%B4%E9%A5%BA" onclick="openDianping('船歌鱼水饺', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
        </div>
        <div class="act-tagline">“出门饺子进门面”。点一份墨鱼水饺（黑皮白馅极鲜）、黄花鱼水饺（金黄多汁）配一碗热气蒸腾的原汁蛤蜊豆腐汤，为完美的青岛金秋孝亲之旅画上温暖句号。</div>
      </div>`;

const newDay5Lunch = `<div class="act-card">
        <div class="act-header">
          <span class="act-time-pill">水饺饯行 ~1h</span>
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
      </div>`;

content = content.replace(oldDay5Lunch, newDay5Lunch);

// 3. Ensure transit steps in Day 4 and Day 5
// Day 4 transit steps:
// Between beer museum and seafood steam
content = content.replace(
  '</div>\n      </div>\n\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">蒸汽海鲜 ~1.5h</span>',
  `</div>\n      </div>\n${transitHtml('步行 3m · 博物馆南门登州路老街')}\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">蒸汽海鲜 ~1.5h</span>`
);

// Between seafood steam and hotel nap
content = content.replace(
  '长辈喝下两碗粥，胃里极其熨帖。</div>\n      </div>\n\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">酒店午休 ~2h</span>',
  `长辈喝下两碗粥，胃里极其熨帖。</div>\n      </div>\n${transitHtml('自驾 ~12m · 回市南酒店深度午休避峰')}\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">酒店午休 ~2h</span>`
);

// Between hotel nap and Olympic sailing
content = content.replace(
  '保持充沛体力迎接傍晚的海上游船。</div>\n      </div>\n\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">豪华出海 ~1h</span>',
  `保持充沛体力迎接傍晚的海上游船。</div>\n      </div>\n${transitHtml('自驾 ~8m · 2.6 km 前往奥帆中心游艇码头')}\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">豪华出海 ~1h</span>`
);

// Between Olympic sailing and St. Regis
content = content.replace(
  '长辈全程免行台阶。</span>\n          </div>\n        </div>\n      </div>\n\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">瑞吉晚宴 ~2h</span>',
  `长辈全程免行台阶。</span>\n          </div>\n        </div>\n      </div>\n${transitHtml('自驾 ~6m · 2.2 km 直达海天中心地下车库直梯')}\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">瑞吉晚宴 ~2h</span>`
);

// Day 5 transit steps:
// Between Zhanqiao and beer pack
content = content.replace(
  '成群早起海鸥在浪花上飞掠盘旋。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">鲜啤装车 ~1h</span>',
  `成群早起海鸥在浪花上飞掠盘旋。</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n${transitHtml('自驾 ~10m · 3.8 km 前往鲜啤直供专柜')}\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">鲜啤装车 ~1h</span>`
);

// Between beer pack and Chuange
content = content.replace(
  '直接放入后备箱平稳固定。</div>\n      </div>\n\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">水饺饯行 ~1h</span>',
  `直接放入后备箱平稳固定。</div>\n      </div>\n${transitHtml('自驾 ~6m · 1.8 km 前往水饺午宴')}\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">水饺饯行 ~1h</span>`
);

// Between Chuange and Highway exit
content = content.replace(
  '平地进店无门槛与台阶。</span>\n          </div>\n        </div>\n      </div>\n\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">从容返程</span>',
  `平地进店无门槛与台阶。</span>\n          </div>\n        </div>\n      </div>\n${transitHtml('自驾 ~15m · 顺畅驶入跨海大桥出城主线')}\n      <div class="act-card">\n        <div class="act-header">\n          <span class="act-time-pill">从容返程</span>`
);

// 4. Update renderDay3Cards with transit steps & rich dining
const newRenderDay3Cards = `    function renderDay3Cards(mode) {
      const container = document.getElementById('d3_cards_container');
      if (!container) return;

      if (mode === 'go_laoshan') {
        container.innerHTML = \`
          <div class="section-title">核心行程节奏 (去崂山方案)</div>
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">海湾广场 ~1.5h</span>
              <span class="act-intensity intensity-flat">车位即景台</span>
            </div>
            <div class="act-name">
              <span>沙子口海湾广场（青岛版“阿马尔菲”五彩渔村）</span>
              <a href="dianping://searchshoplist?keyword=%E9%9D%92%E5%B2%9B%20%E6%B2%99%E5%AD%90%E5%8F%A3%E5%B9%BF%E5%9C%BA" onclick="openDianping('青岛 沙子口广场', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">从容自驾出发，沿东海东路驶上最美环海公路。沙子口彩色民居依山面海，沙滩平整。长辈下车即入广场，坐在石椅上看海鸥起落，完全不需要走山路。</div>
            <div class="act-special-grid">
              <div class="as-item">
                <span class="as-item-label">泊车指引:</span>
                <span class="as-item-val">广场正后方即是大型地面停车场，停车位距海边护栏仅 20 米，纯平地面。</span>
              </div>
            </div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_shazikou.jpg" alt="沙子口海湾五彩渔村" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1533105079780-92b9be482077?w=960&q=80'" />
                <div class="photo-badge">最佳机位</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">沙子口广场中央石质观景台石栏处，对望对岸依山而建的彩色民居与渔船。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">上午顺光，海面蔚蓝如镜，彩色房子色彩最鲜明饱满。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">车位停好下车步行20米即是石凳长椅，长辈安坐石栏旁，背景即是青岛版“阿马尔菲”彩色渔村。</span>
                </div>
              </div>
            </div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
              <span>自驾 ~20m · 14 km (大河东客服中心换乘观光车直达)</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">太清品茗 ~1.5h</span>
              <span class="act-intensity intensity-flat">纯平石板古道</span>
            </div>
            <div class="act-name">
              <span>崂山太清宫（千年道家古刹 · 山海古树巡礼）</span>
              <a href="dianping://searchshoplist?keyword=%E5%B4%82%E5%B1%B1%20%E5%A4%AA%E6%B8%85%E5%AE%AB" onclick="openDianping('崂山 太清宫', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">太清宫内部全为平坦石板地，参拜2100年西汉耐冬“绛雪”与千年古银杏，坐在临海古亭中品尝崂山泉水冲泡的崂山绿茶。</div>
            <div class="act-special-grid">
              <div class="as-item">
                <span class="as-item-label">换乘指引:</span>
                <span class="as-item-val">自驾车停至“大河东客服中心停车场”，换乘景区观光车直达太清宫入口，完全免去徒步爬坡。</span>
              </div>
            </div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_taiqing.jpg" alt="崂山太清宫千年古银杏与西汉耐冬" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=960&q=80'" />
                <div class="photo-badge">最佳机位</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">三皇殿前 2100 年西汉耐冬“绛雪”与千年古银杏红墙殿前，仰拍古木参天。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">阳光穿透茂密古树，地面洒下点点斑驳金光。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">殿旁古木茶亭设有宽敞木椅，长辈手捧一杯崂山绿茶安坐，红墙与千年古木为衬，仙风道骨。</span>
                </div>
              </div>
            </div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
              <span>自驾 ~8m · 3.5 km 前往特色农家宴午餐</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">农家午宴 ~1h</span>
              <span class="act-intensity intensity-flat">海景农家宴</span>
            </div>
            <div class="act-name">
              <span>崂山山海人家（鲜炖海钓鱼与慢炖土鸡）</span>
              <a href="dianping://searchshoplist?keyword=%E5%B4%82%E5%B1%B1%E5%A4%AA%E6%B8%85%E9%99%84%E8%BF%91%E5%86%9C%E5%AE%B6%E5%AE%B4" onclick="openDianping('崂山 太清附近农家宴', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
              <span style="color:#0F172A; font-size:12px; font-weight:700;">4.7分</span>
              <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">崂山山海风味老店</span>
              <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥90 - 130</span>
            </div>
            <div class="act-tagline">清炖崂山水库野生大鱼、山药清炖散养土鸡汤（汤白鲜美暖胃）、农家手工大馒头与鲜摘野菜，原生态温润滋补。</div>
            <div class="act-special-grid">
              <div class="as-item">
                <span class="as-item-label">长辈优选:</span>
                <span class="as-item-val">山药清炖土鸡汤（高汤温热软烂）、清蒸鲜海钓杂鱼、崂山手工大馒头、山野菜炒山鸡蛋。</span>
              </div>
              <div class="as-item">
                <span class="as-item-label">泊车指引:</span>
                <span class="as-item-val">农家院自有宽敞地面车位，平地进店用餐。</span>
              </div>
            </div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
              <span>自驾 ~25m · 16 km 前往石老人海水浴场</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">平缓海栈道 ~1.5h</span>
              <span class="act-intensity intensity-flat">开阔无障碍</span>
            </div>
            <div class="act-name">
              <span>石老人海水浴场·如是书吧海景平坦木栈道</span>
              <a href="dianping://searchshoplist?keyword=%E9%9D%92%E5%B2%9B%20%E5%A6%82%E6%98%AF%E4%B9%A6%E5%BA%97%20%E7%9F%B3%E8%80%81%E4%BA%BA" onclick="openDianping('青岛 如是书店 石老人', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">宽达数十米的平坦现代木栈道，进入如是书吧点一壶热花茶，隔着落地玻璃看浪花翻涌，度过安逸午后。</div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_shilaoren.jpg" alt="石老人海水浴场与如是书吧" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1509233725247-49e657c54213?w=960&q=80'" />
                <div class="photo-badge">最佳机位</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">如是书吧全景落地大玻璃前，或室外纯平木栈道，对焦海上石老人奇石与翻卷浪花。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">下午暖金光芒，海浪拍岸泛起白沫，窗内光影温馨。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">长辈坐在室内舒适的观海沙发上，点一壶热花茶，避开海风吹拂，惬意看浪花拍照。</span>
                </div>
              </div>
            </div>
          </div>
        \`;
      } else {
        container.innerHTML = \`
          <div class="section-title">核心行程节奏 (市区舒享度假备选)</div>
          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">雕塑园漫步 ~2h</span>
              <span class="act-intensity intensity-flat">海滨木栈道</span>
            </div>
            <div class="act-name">
              <span>青岛雕塑园海滨栈道（清幽无干扰 · 极少游人）</span>
              <a href="dianping://searchshoplist?keyword=%E9%9D%92%E5%B2%9B%E5%B8%82%E9%9B%95%E5%A1%91%E9%A6%86%20%E9%9B%95%E5%A1%91%E5%9B%AD" onclick="openDianping('青岛市雕塑馆 雕塑园', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">从市南驾车仅15分钟。雕塑园临海依松，拥有一条平整无障碍木栈道与绿荫草坪，几乎没有旅行团打扰。长辈在海风中慢步，看蔚蓝外海与艺术雕塑，身心彻底放松。</div>
            <div class="act-special-grid">
              <div class="as-item">
                <span class="as-item-label">泊车指引:</span>
                <span class="as-item-val">雕塑园南门停车场，车位充裕，平路直达滨海栈道。</span>
              </div>
            </div>

            <!-- Photo Spot Card -->
            <div class="spot-photo-card">
              <div class="photo-img-wrap">
                <img src="./images/spot_sculpture.jpg" alt="青岛雕塑园海滨栈道" loading="lazy" class="spot-img" onerror="this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=960&q=80'" />
                <div class="photo-badge">最佳机位</div>
              </div>
              <div class="photo-guide-body">
                <div class="pg-item">
                  <span class="pg-label">取景机位:</span>
                  <span class="pg-val">雕塑园伸向海平面的纯平木栈桥尽头，以黑色现代雕塑与一望无际的外海海平线为景。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">最佳光线:</span>
                  <span class="pg-val">上午清透海天，周围无任何杂乱游客干扰。</span>
                </div>
                <div class="pg-item">
                  <span class="pg-label">随行留影:</span>
                  <span class="pg-val">全程纯平木栈道无台阶，长辈迎着微风漫步，姿态悠闲大气，随手拍都是大片。</span>
                </div>
              </div>
            </div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
              <span>自驾 ~5m · 2.1 km 前往鲁商凯悦酒店</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">海景烤鸭 ~1.5h</span>
              <span class="act-intensity intensity-flat">海景烤鸭午宴</span>
            </div>
            <div class="act-name">
              <span>青岛鲁商凯悦酒店 · 东海8号（一线海景大包房）</span>
              <a href="dianping://searchshoplist?keyword=%E9%9D%92%E5%B2%9B%20%E9%B2%81%E5%95%86%E5%87%AF%E6%82%A6%E9%85%92%E5%BA%97%20%E4%B8%9C%E6%B5%B78%E5%8F%B7" onclick="openDianping('青岛 鲁商凯悦 东海8号', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin: 4px 0 8px 0;">
              <span style="color:#0F172A; font-size:12px; font-weight:700;">4.8分</span>
              <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">青岛烤鸭第一梯队 · 一线海景</span>
              <span style="font-size:11px; font-weight:600; color:#334155; background:#F1F5F9; border:1px solid #E2E8F0; padding:2px 6px; border-radius:4px;">人均 ¥280 - 450</span>
            </div>
            <div class="act-tagline">入座面朝石老人沙滩的落地玻璃包间，品鉴传统果木传统挂炉烤鸭（皮脆油香肉嫩多汁）、温热浓汤辽参炖菜心与家常焖带鱼，全家用餐极尽惬意。</div>
            <div class="act-special-grid">
              <div class="as-item">
                <span class="as-item-label">长辈优选:</span>
                <span class="as-item-val">传统北方挂炉果木烤鸭（外酥里嫩不油腻）、金汤慢火煨胶东海参、生炒广东菜心。</span>
              </div>
              <div class="as-item">
                <span class="as-item-label">泊车指引:</span>
                <span class="as-item-val">酒店地下停车场，直梯直达餐厅大厅与包房层。</span>
              </div>
            </div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
              <span>自驾 ~18m · 回市南酒店深度午休</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">酒店午休 ~2h</span>
              <span class="act-intensity intensity-flat">酒店午休</span>
            </div>
            <div class="act-name">
              <span>【慢调休整】驱车回酒店午休</span>
            </div>
            <div class="act-tagline">避开长途山路颠簸，中午回酒店睡个安稳午觉，完全没有体力透支风险。</div>
          </div>

          <div class="transit-step">
            <div class="ts-line"></div>
            <div class="ts-badge">
              <svg viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
              <span>步行 5m · 直梯直达海天高空茶廊</span>
            </div>
            <div class="ts-line"></div>
          </div>

          <div class="act-card">
            <div class="act-header">
              <span class="act-time-pill">云端茶歇 ~1h</span>
              <span class="act-intensity intensity-flat">海景茶歇</span>
            </div>
            <div class="act-name">
              <span>海天中心云端观光海景茶廊</span>
              <a href="dianping://searchshoplist?keyword=%E9%9D%92%E5%B2%9B%20%E6%B5%B7%E5%A4%A9%E4%B8%AD%E5%BF%83" onclick="openDianping('青岛 海天瑞吉 宴庭', event)" class="btn-dp" style="flex:none; padding: 4px 10px; height: 28px; font-size: 11px;">点评 ↗</a>
            </div>
            <div class="act-tagline">酒店近旁直达海天中心高空海景茶座，全室内恒温环境，点一壶陈皮普洱或老白茶，居高临下俯瞰老城与浮山湾全景，尊贵安静。</div>
          </div>
        \`;
      }
    }`;

// Replace renderDay3Cards
const oldRenderRegex = /function renderDay3Cards\(mode\) \{[\s\S]*?container\.innerHTML = `[\s\S]*?\}\s*\}\s*\}/;
content = content.replace(oldRenderRegex, newRenderDay3Cards);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully finalized UX enhancements. New length:', content.length);
