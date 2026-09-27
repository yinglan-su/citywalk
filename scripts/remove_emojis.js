const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'source_qingdao.html');
let content = fs.readFileSync(targetFile, 'utf8');

const replacements = [
  // Schedule highlights & badges
  ['<span class="sh-tag">⏰ 09:30后自然出发</span>', '<span class="sh-tag">09:30后自然出发</span>'],
  ['<span class="sh-tag">🚗 跨海大桥高空赏海</span>', '<span class="sh-tag">跨海大桥高空赏海</span>'],
  ['<span class="sh-tag">🌿 纯平缓木栈道</span>', '<span class="sh-tag">纯平缓木栈道</span>'],
  ['<span class="sh-tag">🛏️ 13:00-15:30 充足午休</span>', '<span class="sh-tag">13:00-15:30 充足午休</span>'],
  ['<span class="cb-title">⚙️ 当日自驾动线与体验定制</span>', '<span class="cb-title">当日动线与体验定制</span>'],
  ['<span class="act-intensity intensity-flat">🍲 适老养胃晚宴</span>', '<span class="act-intensity intensity-flat">适老养胃晚宴</span>'],
  ['<span class="as-item-label">🍲 适老必点:</span>', '<span class="as-item-label">适老必点:</span>'],
  ['<span class="sh-tag">⏰ 09:30 慢享出发</span>', '<span class="sh-tag">09:30 慢享出发</span>'],
  ['<span class="sh-tag">🏰 百年别墅风貌</span>', '<span class="sh-tag">百年别墅风貌</span>'],
  ['<span class="sh-tag">🏔️ 5分钟平缓俯瞰</span>', '<span class="sh-tag">5分钟平缓俯瞰</span>'],
  ['<span class="sh-tag">🍗 百年春和楼鲁菜包厢</span>', '<span class="sh-tag">百年春和楼鲁菜包厢</span>'],
  ['<span class="cb-title">⚙️ 当日老城动线与落客定制</span>', '<span class="cb-title">老城动线与落客定制</span>'],
  ['<span class="act-intensity intensity-flat">🍲 适老午宴</span>', '<span class="act-intensity intensity-flat">适老午宴</span>'],
  ['<span class="sh-tag">⏰ 09:30 睡饱启程</span>', '<span class="sh-tag">09:30 睡饱启程</span>'],
  ['<span class="sh-tag">🔄 崂山去/留自由选</span>', '<span class="sh-tag">崂山去/留自由选</span>'],
  ['<span class="sh-tag">🦆 凯悦东海8号烤鸭</span>', '<span class="sh-tag">凯悦东海8号烤鸭</span>'],
  ['<span class="sh-tag">☕ 一线海景云端茶歇</span>', '<span class="sh-tag">一线海景云端茶歇</span>'],
  ['<span class="cb-title">⚙️ 崂山专属日核心抉择控制器</span>', '<span class="cb-title">崂山专属日核心抉择</span>'],
  ['<span class="sh-tag">⏰ 09:30 从容出发</span>', '<span class="sh-tag">09:30 从容出发</span>'],
  ['<span class="as-item-label">🅿️ 停车充裕:</span>', '<span class="as-item-label">停车充裕:</span>'],
  ['<span class="sh-tag">🍻 原浆鲜啤冷链装车</span>', '<span class="sh-tag">原浆鲜啤冷链装车</span>'],
  ['<span class="sh-tag">🚗 错峰自驾顺畅返程</span>', '<span class="sh-tag">错峰自驾顺畅返程</span>'],
  // Parking tips in dining cards
  ['<div class="dc-park-tip">🅿️ ', '<div class="dc-park-tip">泊车提示：'],
  // Drawer close icon
  ['<button class="xhs-dr-close" onclick="toggleXhsDrawer(false)">✕</button>', '<button class="xhs-dr-close" onclick="toggleXhsDrawer(false)">&times;</button>'],
  // Weather code map
  ["48: { text: '薄雾漫海', icon: '🌫️' }", "48: { text: '薄雾漫海', icon: '' }"],
  ["61: { text: '轻度小雨', icon: '🌧️' }", "61: { text: '轻度小雨', icon: '' }"],
  ["WEATHER_CODE_MAP[cur.weather_code] || { text: '秋高气爽', icon: '🌤️' }", "WEATHER_CODE_MAP[cur.weather_code] || { text: '秋高气爽', icon: '' }"]
];

for (const [from, to] of replacements) {
  if (!content.includes(from)) {
    console.warn(`Warning: Could not find target pattern: "${from}"`);
  }
  content = content.replaceAll(from, to);
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Complete emoji removal executed successfully.');
