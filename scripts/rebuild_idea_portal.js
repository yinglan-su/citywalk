const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'source_qingdao.html');
let content = fs.readFileSync(targetFile, 'utf8');

console.log('Original content length:', content.length);

// ========================================================
// 1. CSS REFACTOR: FROM .xhs-* TO .idea-*
// ========================================================
const oldCssRegex = /\/\* Floating XHS Evaluation Button \*\/[\s\S]*?\.xhs-result-card\s*\{[\s\S]*?display:\s*none;\s*\}/;

const newPortalCss = `/* Floating Idea & Customization Portal Button */
    .idea-fab-btn {
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
      gap: 7px;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.25);
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .idea-fab-btn svg {
      width: 15px;
      height: 15px;
      stroke: var(--brand-accent-border);
      fill: none;
      stroke-width: 2.2;
    }
    .idea-fab-btn:hover {
      background: #1E293B;
    }
    .idea-fab-btn:active {
      transform: scale(0.96);
    }

    /* Idea Drawer & Overlay */
    .idea-drawer-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(15, 23, 42, 0.5);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: 2000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s ease;
    }
    .idea-drawer-overlay.active {
      opacity: 1;
      visibility: visible;
    }
    .idea-drawer {
      position: fixed;
      left: 0; right: 0; bottom: 0;
      max-height: 88vh;
      background: #FFFFFF;
      border-radius: 24px 24px 0 0;
      z-index: 2001;
      padding: 20px 18px calc(env(safe-area-inset-bottom) + 20px) 18px;
      transform: translateY(100%);
      transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
      overflow-y: auto;
      box-shadow: 0 -8px 32px rgba(15, 23, 42, 0.15);
    }
    .idea-drawer-overlay.active .idea-drawer {
      transform: translateY(0);
    }
    .idea-dr-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      border-bottom: 1px solid var(--border-hairline);
      padding-bottom: 10px;
    }
    .idea-dr-title {
      font-size: 16px;
      font-weight: 800;
      color: #0F172A;
      display: flex;
      align-items: center;
      gap: 7px;
    }
    .idea-dr-title svg {
      width: 18px;
      height: 18px;
      stroke: var(--brand-accent);
      fill: none;
      stroke-width: 2.2;
    }
    .idea-dr-close {
      background: #F1F5F9;
      border: none;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      font-size: 16px;
      color: #64748B;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .idea-pill-row {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      margin-bottom: 10px;
      padding-bottom: 2px;
      scrollbar-width: none;
    }
    .idea-pill-row::-webkit-scrollbar { display: none; }
    .idea-pill {
      font-size: 11px;
      font-weight: 500;
      color: var(--text-secondary);
      background: var(--bg-subtle);
      border: 1px solid var(--border-hairline);
      padding: 4px 10px;
      border-radius: 12px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s ease;
    }
    .idea-pill.active {
      background: var(--text-main);
      color: #FFFFFF;
      border-color: var(--text-main);
      font-weight: 600;
    }
    .idea-textarea {
      width: 100%;
      height: 85px;
      border-radius: 12px;
      border: 1px solid #CBD5E1;
      padding: 10px 12px;
      font-size: 13px;
      font-family: inherit;
      resize: none;
      outline: none;
      transition: border-color 0.15s;
      line-height: 1.5;
    }
    .idea-textarea:focus {
      border-color: var(--brand-accent);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }
    .idea-quick-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 8px 0 12px 0;
    }
    .idea-tag-btn {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 3px 8px;
      font-size: 11px;
      color: #475569;
      cursor: pointer;
    }
    .idea-tag-btn:active {
      background: #E2E8F0;
    }
    .idea-action-btn {
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
    .idea-action-btn:hover {
      background: var(--brand-accent-hover);
    }
    .idea-action-btn:active {
      transform: scale(0.98);
    }
    .idea-result-card {
      margin-top: 14px;
      background: #F8FAFC;
      border-radius: 14px;
      padding: 14px;
      border: 1px solid #E2E8F0;
      display: none;
    }
    .idea-saved-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 18px 0 8px 0;
      font-size: 12px;
      font-weight: 700;
      color: var(--text-secondary);
    }
    .idea-saved-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .idea-saved-item {
      background: #FFFFFF;
      border: 1px solid var(--border-hairline);
      border-radius: 10px;
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .isi-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .isi-meta {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
    }
    .isi-day {
      background: var(--text-main);
      color: #FFFFFF;
      padding: 1px 6px;
      border-radius: 4px;
      font-weight: 600;
    }
    .isi-type {
      background: var(--bg-subtle);
      color: var(--text-secondary);
      border: 1px solid var(--border-hairline);
      padding: 1px 6px;
      border-radius: 4px;
    }
    .isi-time {
      color: var(--text-muted);
      font-size: 10px;
    }
    .isi-del {
      border: none;
      background: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 2px;
    }
    .isi-text {
      font-size: 13px;
      color: var(--text-main);
      line-height: 1.45;
    }
    .isi-actions {
      display: flex;
      justify-content: flex-end;
      gap: 6px;
      margin-top: 4px;
    }
    .isi-btn-copy {
      background: var(--bg-subtle);
      border: 1px solid var(--border-hairline);
      border-radius: 6px;
      padding: 3px 8px;
      font-size: 11px;
      color: var(--text-secondary);
      cursor: pointer;
      font-weight: 500;
    }`;

content = content.replace(oldCssRegex, newPortalCss);


// ========================================================
// 2. HTML REFACTOR: REPLACE MODAL & BUTTON
// ========================================================
const oldModalRegex = /<!-- Floating Xiaohongshu Senior Evaluation Button -->[\s\S]*?<!-- Evaluation Result Container -->\s*<div id="xhsResultBox" class="xhs-result-card"><\/div>\s*<\/div>\s*<\/div>/;

const newPortalHtml = `<!-- Floating Idea & Customization Portal Button -->
  <button id="btnIdeaFab" class="idea-fab-btn" onclick="toggleIdeaDrawer(true)">
    <svg viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
    <span>行程灵感与需求</span>
  </button>

  <!-- Idea & Customization Drawer Modal -->
  <div id="ideaOverlay" class="idea-drawer-overlay" onclick="toggleIdeaDrawer(false)">
    <div class="idea-drawer" onclick="event.stopPropagation()">
      <div class="idea-dr-header">
        <div class="idea-dr-title">
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>行程灵感与需求便签 (Idea & Instruction Portal)</span>
        </div>
        <button class="idea-dr-close" onclick="toggleIdeaDrawer(false)">&times;</button>
      </div>

      <div style="font-size:12px; color:var(--text-secondary); margin-bottom:8px; line-height:1.5;">
        无论在小红书、大众点评看到新去处，还是长辈有突发偏好或对 AI 的调整指令，粘贴于此即可留存便签并进行长辈舒适度研判。
      </div>

      <!-- Target Day Selector -->
      <div style="font-size:11px; font-weight:700; color:var(--text-secondary); margin-bottom:4px;">适用日程：</div>
      <div class="idea-pill-row" id="ideaDayPills">
        <button type="button" class="idea-pill active" onclick="selectIdeaDay('all', this)">全程 / 未定</button>
        <button type="button" class="idea-pill" onclick="selectIdeaDay('Day 1', this)">Day 1 入城</button>
        <button type="button" class="idea-pill" onclick="selectIdeaDay('Day 2', this)">Day 2 老城</button>
        <button type="button" class="idea-pill" onclick="selectIdeaDay('Day 3', this)">Day 3 崂山/海滨</button>
        <button type="button" class="idea-pill" onclick="selectIdeaDay('Day 4', this)">Day 4 博物馆/游艇</button>
        <button type="button" class="idea-pill" onclick="selectIdeaDay('Day 5', this)">Day 5 返程</button>
      </div>

      <!-- Category Selector -->
      <div style="font-size:11px; font-weight:700; color:var(--text-secondary); margin-bottom:4px;">意图类型：</div>
      <div class="idea-pill-row" id="ideaTypePills">
        <button type="button" class="idea-pill active" onclick="selectIdeaType('新增打卡', this)">新增打卡</button>
        <button type="button" class="idea-pill" onclick="selectIdeaType('特色餐饮', this)">特色餐饮</button>
        <button type="button" class="idea-pill" onclick="selectIdeaType('节奏微调', this)">节奏微调</button>
        <button type="button" class="idea-pill" onclick="selectIdeaType('长辈关怀', this)">长辈关怀</button>
        <button type="button" class="idea-pill" onclick="selectIdeaType('调整指令', this)">调整指令</button>
      </div>

      <textarea id="ideaInputText" class="idea-textarea" placeholder="输入或粘贴任何想法、指令或笔记内容...&#10;例如：“想加个燕儿岛山公园看日落”、“妈妈今天想吃清淡鲜面”、“明天上午想晚出发一小时”"></textarea>

      <!-- Quick test tags -->
      <div class="idea-quick-tags">
        <span style="font-size:11px; color:var(--text-muted); align-self:center;">灵感灵感库：</span>
        <button class="idea-tag-btn" onclick="fillIdeaPreset('燕儿岛山公园木栈道看日落', 'Day 2', '新增打卡')">燕儿岛日落</button>
        <button class="idea-tag-btn" onclick="fillIdeaPreset('小麦岛公园大草坪看海', 'Day 3', '新增打卡')">小麦岛草坪</button>
        <button class="idea-tag-btn" onclick="fillIdeaPreset('长辈今天不想吃海鲜，想吃清淡面食或温热炖鸡汤', 'Day 2', '特色餐饮')">长辈清淡热面</button>
        <button class="idea-tag-btn" onclick="fillIdeaPreset('明天上午长辈想多睡一会儿，推迟至10点半从容出发', 'Day 3', '节奏微调')">推迟出发时间</button>
        <button class="idea-tag-btn" onclick="fillIdeaPreset('不去崂山了，想在石老人或雕塑园沙滩找个咖啡厅坐坐', 'Day 3', '调整指令')">不去崂山改海滩</button>
      </div>

      <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px; font-size:12px; color:#475569;">
        <input type="checkbox" id="ideaSeniorConstraint" checked style="accent-color: var(--brand-accent); width:15px; height:15px;">
        <label for="ideaSeniorConstraint">长辈关怀约束：保持午休2小时、平稳落客、无陡坡台阶</label>
      </div>

      <button class="idea-action-btn" onclick="saveAndAnalyzeIdea()">
        <span>保存便签并智能研判</span>
      </button>

      <!-- Dynamic Analysis Result -->
      <div id="ideaAnalysisBox" class="idea-result-card"></div>

      <!-- Saved Ideas List Section -->
      <div class="idea-saved-header">
        <span>已记录的灵感便签 (<span id="savedIdeasCount">0</span>)</span>
        <button onclick="clearAllIdeas()" style="background:none; border:none; color:var(--text-muted); font-size:11px; cursor:pointer;">清空已记录</button>
      </div>
      <div id="savedIdeasList" class="idea-saved-list">
        <div style="text-align:center; padding:16px 0; color:var(--text-muted); font-size:12px;">暂无保存的便签，粘贴上方内容后点击“保存便签”即可留存。</div>
      </div>
    </div>
  </div>`;

content = content.replace(oldModalRegex, newPortalHtml);


// ========================================================
// 3. JAVASCRIPT REFACTOR: COMPREHENSIVE ENGINE
// ========================================================
const oldJsRegex = /function fillXhsPreset\(text\) \{[\s\S]*?function copyXhsReport\(title, badge, advice\) \{[\s\S]*?prompt\('请长按复制下方内容：', summary\);\s*\}\s*\}/;

const newPortalJs = `// ==========================================
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
        const raw = localStorage.getItem('qd_trip_ideas');
        return raw ? JSON.parse(raw) : [];
      } catch(e) {
        return [];
      }
    }

    function setSavedIdeas(list) {
      try {
        localStorage.setItem('qd_trip_ideas', JSON.stringify(list));
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

      // 2. Perform Intelligent Feasibility Analysis
      box.style.display = 'block';
      box.innerHTML = '<div style="text-align:center; padding:12px; color:#64748B;">正在结合长辈出行关怀规则与自驾行程研判中...</div>';

      setTimeout(() => {
        const text = raw.toLowerCase();
        let rating = 'green';
        let title = '';
        let badge = '';
        let stepsInfo = '';
        let dropoffInfo = '';
        let itineraryAdvice = '';

        // Known spot recognition
        if (text.includes('燕儿岛')) {
          title = '燕儿岛山公园 · 沿海观景木栈道';
          rating = 'yellow';
          badge = '[需注意 · 栈道分段选择]';
          stepsInfo = '海边木栈道平坦无阻，但下到底部网红海蚀洞有数十级较陡台阶。建议长辈在上层平坦平台俯瞰，不下行至礁石边缘。';
          dropoffInfo = '自驾可停在奥帆中心地下停车场或澳门路划线车位，步行3-5分钟入园。';
          itineraryAdvice = '【行程融合建议】建议安排在 Day 1 傍晚（替换第三海水浴场）或 Day 4 乘游船前，傍晚夕阳落海视野极美！';
        } else if (text.includes('小麦岛')) {
          title = '小麦岛公园 · 绿荫草坪看海';
          rating = 'yellow';
          badge = '[需谨慎 · 徒步距离较长]';
          stepsInfo = '登岛需从入园口步行穿过长达 1.5 km 的露天防波堤，全程无摆渡车，海风极大，对长辈体能消耗偏高。';
          dropoffInfo = '岛外麦岛路停车场距离较远，节假日极其难停。';
          itineraryAdvice = '【行程替代建议】若长辈腿脚一般，建议首选 Day 3 的【青岛雕塑园海滨栈道】或【太平角公园】，车位就在海边，免除长途徒步。';
        } else if (text.includes('极地海洋')) {
          title = '青岛极地海洋公园';
          rating = 'green';
          badge = '[推荐备选 · 全平步道与电梯]';
          stepsInfo = '馆内全部配备无障碍坡道与观光直梯，提供免费轮椅租借，完全免爬楼梯。';
          dropoffInfo = '东海东路拥有大型地下与地面停车场，车位逾千个。';
          itineraryAdvice = '【行程融合建议】可作为遇到阵雨天气时的顶级室内备用方案，替换 Day 3 或 Day 4 的户外时段。';
        } else if (text.includes('信号山') || text.includes('旋转观景台')) {
          title = '信号山公园 · 旋转观景台';
          rating = 'red';
          badge = '[建议避坑 · 高台阶负荷]';
          stepsInfo = '需攀爬 200+ 级狭小陡峭石阶，旋转台内部楼梯极窄无扶手，对长辈膝盖冲击较大。';
          dropoffInfo = '老城区齐东路、龙山路单向车道狭窄，严禁停车，下客极其困难。';
          itineraryAdvice = '【行程替代建议】Day 2 已为您安排【小鱼山公园览潮阁】（南门纯平缓坡仅走5分钟，俯瞰红瓦绿树视角更绝），请直接放弃信号山！';
        } else if (text.includes('大学路') || text.includes('黄县路') || text.includes('网红墙') || text.includes('拐角')) {
          title = '大学路与黄县路网红拐角墙';
          rating = 'red';
          badge = '[坚决避坑 · 安全隐患]';
          stepsInfo = '地处车水马龙十字路口，人行道极窄，拍照需在马路边缘硬站排队 30-50 分钟。';
          dropoffInfo = '主干道全线禁停，周边无正规停车场，车流穿梭极易擦碰长辈。';
          itineraryAdvice = '【行程替代建议】建议避开！Day 2 的【迎宾馆德国总督楼古堡草坪】与【八大关居庸关路】，坐享尊贵庄园合影，格调远超马路转角！';
        } else if (text.includes('巨峰') || text.includes('爬山') || text.includes('崂顶') || text.includes('登山')) {
          title = '崂山巨峰 / 高海拔登山线路';
          rating = 'red';
          badge = '[坚决避坑 · 严重超负荷]';
          stepsInfo = '崂山主峰海拔过千米，石阶陡峭漫长，严禁长辈攀登。';
          dropoffInfo = '进山需要长时间换乘索道与徒步跋涉。';
          itineraryAdvice = '【行程替代建议】Day 3 已专属打造【崂山南线0爬山慢游】（车位直达沙子口渔村 + 太清宫平整千年古道品茶），绝不走山路！';
        } else if (text.includes('晚起') || text.includes('推迟') || text.includes('改时间') || text.includes('晚点') || text.includes('慢点') || text.includes('睡个懒觉')) {
          title = '日程节奏微调指令（从容慢游）';
          rating = 'green';
          badge = '[完全可行 · 自由调节]';
          stepsInfo = '长辈出游舒适第一。上午推迟至 10:30 出发完全不影响核心体验。';
          dropoffInfo = '自驾出行时间自主掌控，可直接压缩或跳过次要步行点。';
          itineraryAdvice = '【节奏调整建议】上午直接从容出发前往核心目的地，中午 13:00–15:30 依旧保留回酒店深度午休，下午精力更充沛！';
        } else if (text.includes('面') || text.includes('粥') || text.includes('清淡') || text.includes('不吃海鲜') || text.includes('胃不舒服') || text.includes('素食')) {
          title = '餐饮口味调整指令（温润养胃）';
          rating = 'green';
          badge = '[重点保障 · 营养适口]';
          stepsInfo = '外出用餐以长辈胃部舒适为第一准则。';
          dropoffInfo = '所选餐厅均有专人泊车，包房温和恒温。';
          itineraryAdvice = '【餐饮推荐】可选用【开海】的原汁海鲜疙瘩汤、【老船夫】的手工热馒头炖黄花鱼、或【船歌】的清汤鲜蛤蜊豆腐汤配手工热面，温热清润不刺激。';
        } else {
          // General idea / custom instruction
          title = '行程新灵感 / 定制指令研判';
          rating = 'green';
          badge = '[已记录备忘 · 灵活融入]';
          stepsInfo = '建议行前核实该点是否有无障碍通道或电梯，避免长辈走多余阶梯。';
          dropoffInfo = '坚持“司机先在平坦路缘下客、再去地下停车场”原则。';
          itineraryAdvice = '【融入建议】已为您存入便签池！建议将其插入在【' + currentSelectedDay + '】下午午休之后，或者替换相近方位的景点。';
        }

        const borderCol = (rating === 'red') ? '#64748B' : '#2563EB';
        const bgCol = (rating === 'red') ? '#F1F5F9' : '#EFF6FF';

        const exportPrompt = \`【青岛慢游·新需求指令】\\n适用日程：\${currentSelectedDay}\\n类型分类：\${currentSelectedType}\\n需求内容：\${raw}\\n长辈关怀约束：从容慢游、酒店午休、纯平少台阶\\n研判建议：\${itineraryAdvice}\`;

        box.innerHTML = \`
          <div style="border-left: 4px solid \${borderCol}; padding-left: 10px; margin-bottom: 10px;">
            <div style="font-size: 15px; font-weight: 800; color: #0F172A;">\${title}</div>
            <div style="display:inline-block; font-size: 11px; font-weight:700; color:\${borderCol}; background:\${bgCol}; padding:2px 8px; border-radius:10px; margin-top:4px;">\${badge}</div>
          </div>
          
          <div style="display:flex; flex-direction:column; gap:6px; font-size:12px; line-height:1.5;">
            <div><strong>长辈体能与台阶:</strong> <span style="color:#475569;">\${stepsInfo}</span></div>
            <div><strong>自驾与泊车站位:</strong> <span style="color:#475569;">\${dropoffInfo}</span></div>
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:8px 10px; margin-top:4px;">
              <strong style="color:var(--brand-accent);">行程融合建议:</strong>
              <div style="color:#334155; margin-top:3px;">\${itineraryAdvice}</div>
            </div>
          </div>

          <button onclick="copyIdeaToClipboard('\${exportPrompt.replace(/\\\\/g, '\\\\\\\\').replace(/'/g, "\\\\'")}')" style="margin-top:10px; width:100%; height:36px; background:#FFFFFF; border:1px solid #CBD5E1; border-radius:10px; font-size:12px; font-weight:600; color:#0F172A; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
            <span>复制结构化指令 (发给 AI / 微信群) ↗</span>
          </button>
        \`;
      }, 250);
    }

    function renderSavedIdeasList() {
      const container = document.getElementById('savedIdeasList');
      const countEl = document.getElementById('savedIdeasCount');
      if (!container) return;

      const ideas = getSavedIdeas();
      if (countEl) countEl.innerText = ideas.length;

      if (!ideas.length) {
        container.innerHTML = '<div style="text-align:center; padding:16px 0; color:var(--text-muted); font-size:12px;">暂无保存的便签，粘贴上方内容后点击“保存便签”即可留存。</div>';
        return;
      }

      let html = '';
      ideas.forEach(item => {
        const safeText = item.text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const exportText = \`【青岛慢游·便签】\${item.day} · \${item.type}：\${item.text}\`;
        html += \`
          <div class="idea-saved-item">
            <div class="isi-top">
              <div class="isi-meta">
                <span class="isi-day">\${item.day}</span>
                <span class="isi-type">\${item.type}</span>
                <span class="isi-time">\${item.createdAt || ''}</span>
              </div>
              <button class="isi-del" onclick="deleteSavedIdea('\${item.id}')" title="删除便签">&times;</button>
            </div>
            <div class="isi-text">\${safeText}</div>
            <div class="isi-actions">
              <button class="isi-btn-copy" onclick="copyIdeaToClipboard('\${exportText.replace(/\\\\/g, '\\\\\\\\').replace(/'/g, "\\\\'")}')">复制内容 ↗</button>
            </div>
          </div>
        \`;
      });
      container.innerHTML = html;
    }

    function deleteSavedIdea(id) {
      const ideas = getSavedIdeas().filter(item => item.id !== id);
      setSavedIdeas(ideas);
      renderSavedIdeasList();
      showToast('便签已删除');
    }

    function clearAllIdeas() {
      if (!confirm('确定清空所有已保存的灵感便签吗？')) return;
      setSavedIdeas([]);
      renderSavedIdeasList();
      showToast('已清空全部便签');
    }

    function copyIdeaToClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('已复制到剪贴板，可直接发送给 AI 或微信群！');
        }).catch(() => {
          prompt('请长按复制内容：', text);
        });
      } else {
        prompt('请长按复制内容：', text);
      }
    }`;

content = content.replace(oldJsRegex, newPortalJs);

// Ensure saved ideas list is rendered on DOMContentLoaded
content = content.replace(
  "initQdMiniMap('day1');",
  "initQdMiniMap('day1');\n        renderSavedIdeasList();"
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully written reconstructed idea portal in source_qingdao.html');
console.log('New content length:', content.length);
