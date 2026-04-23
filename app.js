let currentQuestion = 0;
const scores = {};
const totalQuestions = 60;

Object.keys(personalities).forEach(key => { scores[key] = 0; });

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function startQuiz() {
  currentQuestion = 0;
  Object.keys(scores).forEach(key => { scores[key] = 0; });
  showPage('quiz-page');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question-text').textContent = q.q;
  document.getElementById('progress-text').textContent = (currentQuestion + 1) + ' / ' + totalQuestions;
  document.getElementById('progress-fill').style.width = ((currentQuestion + 1) / totalQuestions * 100) + '%';
  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = '';
  const shuffled = q.opts.map((opt, i) => ({ ...opt, idx: i }));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  shuffled.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(opt.scores);
    optionsEl.appendChild(btn);
  });

  // 跳过按钮
  const skipBtn = document.createElement('button');
  skipBtn.className = 'option-btn skip-btn';
  skipBtn.textContent = '⏭ 以上都不符合，跳过此题';
  skipBtn.onclick = () => selectOption({});
  optionsEl.appendChild(skipBtn);
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'slideIn 0.4s ease';
}

function selectOption(optScores) {
  Object.entries(optScores).forEach(([key, val]) => {
    if (scores[key] !== undefined) scores[key] += val;
  });
  currentQuestion++;
  if (currentQuestion < totalQuestions) renderQuestion();
  else showResult(getResultKey());
}

function getResultKey() {
  let maxScore = -1, resultKey = '';
  Object.entries(scores).forEach(([key, val]) => {
    if (val > maxScore) { maxScore = val; resultKey = key; }
  });
  return resultKey;
}

function showResult(key) {
  const p = personalities[key];
  // 更新URL hash用于分享
  window.location.hash = 'result=' + key;

  // 设置卡片头部渐变色
  const header = document.querySelector('.card-header');
  header.style.background = 'linear-gradient(135deg, ' + p.color[0] + ', ' + p.color[1] + ')';

  // 设置SVG头像
  document.getElementById('card-avatar').innerHTML = avatars[key] || '';
  document.getElementById('card-emoji').textContent = p.emoji;
  document.getElementById('card-name').textContent = p.name;
  document.getElementById('card-subtitle').textContent = p.subtitle;
  document.querySelector('.card-tag').style.background = p.color[1];
  document.getElementById('card-desc').textContent = p.desc;
  document.getElementById('card-pros').textContent = p.pros;
  document.getElementById('card-cons').textContent = p.cons;
  document.getElementById('card-match').textContent = p.match;
  document.getElementById('card-clash').textContent = p.clash;

  showPage('result-page');
}

function restartQuiz() {
  window.location.hash = '';
  showPage('start-page');
}

function copyShareLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    const toast = document.getElementById('share-toast');
    toast.textContent = '链接已复制，快去分享给朋友吧！';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }).catch(() => {
    // fallback
    const input = document.createElement('input');
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    const toast = document.getElementById('share-toast');
    toast.textContent = '链接已复制！';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  });
}

function saveCardImage() {
  const canvas = document.getElementById('share-canvas');
  const ctx = canvas.getContext('2d');
  const scale = 2;
  const w = 440, h = 700;
  canvas.width = w * scale;
  canvas.height = h * scale;
  ctx.scale(scale, scale);

  const key = window.location.hash.replace('#result=', '');
  const p = personalities[key];
  if (!p) return;

  // 兼容的圆角矩形
  function roundRect(ctx, x, y, w, h, r) {
    if (typeof r === 'number') r = [r, r, r, r];
    ctx.beginPath();
    ctx.moveTo(x + r[0], y);
    ctx.lineTo(x + w - r[1], y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r[1]);
    ctx.lineTo(x + w, y + h - r[2]);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r[2], y + h);
    ctx.lineTo(x + r[3], y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r[3]);
    ctx.lineTo(x, y + r[0]);
    ctx.quadraticCurveTo(x, y, x + r[0], y);
    ctx.closePath();
  }

  // 背景
  ctx.fillStyle = '#fff';
  roundRect(ctx, 0, 0, w, h, 24);
  ctx.fill();

  // 头部渐变
  const grad = ctx.createLinearGradient(0, 0, w, 180);
  grad.addColorStop(0, p.color[0]);
  grad.addColorStop(1, p.color[1]);
  ctx.fillStyle = grad;
  roundRect(ctx, 0, 0, w, 180, [24, 24, 0, 0]);
  ctx.fill();

  // Emoji
  ctx.font = '60px serif';
  ctx.textAlign = 'center';
  ctx.fillText(p.emoji, w / 2, 100);

  // 名称
  ctx.fillStyle = '#333';
  ctx.font = 'bold 22px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText(p.name, w / 2, 220);

  // 标签
  ctx.fillStyle = p.color[1];
  const tagW = ctx.measureText(p.subtitle).width + 24;
  roundRect(ctx, (w - tagW) / 2, 232, tagW, 26, 13);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = '13px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText(p.subtitle, w / 2, 250);

  // 描述
  ctx.fillStyle = '#666';
  ctx.font = '13px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.textAlign = 'left';
  wrapText(ctx, p.desc, 30, 285, w - 60, 20);

  // 优势
  ctx.fillStyle = '#333';
  ctx.font = 'bold 13px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText('✅ 恋爱优势', 30, 470);
  ctx.fillStyle = '#888';
  ctx.font = '12px "PingFang SC", "Microsoft YaHei", sans-serif';
  wrapText(ctx, p.pros, 30, 490, w - 60, 18);

  // 雷区
  ctx.fillStyle = '#333';
  ctx.font = 'bold 13px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText('⚠️ 踩雷预警', 30, 545);
  ctx.fillStyle = '#888';
  ctx.font = '12px "PingFang SC", "Microsoft YaHei", sans-serif';
  wrapText(ctx, p.cons, 30, 565, w - 60, 18);

  // CP和冤家
  ctx.fillStyle = '#333';
  ctx.font = 'bold 13px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText('💕 最佳CP: ' + p.match, 30, 625);
  ctx.fillText('💔 冤家: ' + p.clash, 30, 650);

  // 水印
  ctx.fillStyle = '#ccc';
  ctx.font = '11px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('恋爱人格测试', w / 2, h - 15);

  // 下载 - 兼容方案
  try {
    canvas.toBlob(function(blob) {
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.download = '恋爱人格-' + p.name + '.png';
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(function() { URL.revokeObjectURL(url); }, 100);
    }, 'image/png');
  } catch(e) {
    // fallback
    var link = document.createElement('a');
    link.download = '恋爱人格-' + p.name + '.png';
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

function wrapText(ctx, text, x, y, maxW, lineH) {
  let line = '';
  for (let i = 0; i < text.length; i++) {
    const test = line + text[i];
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, y);
      line = text[i];
      y += lineH;
    } else {
      line = test;
    }
  }
  ctx.fillText(line, x, y);
}

// 页面加载时检查URL hash，支持分享链接直接查看结果
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#result=')) {
    const key = hash.replace('#result=', '');
    if (personalities[key]) {
      showResult(key);
      return;
    }
  }
  showPage('start-page');
});

// === 图鉴功能 ===
let previousPage = 'start-page';

function showGallery() {
  previousPage = 'result-page';
  renderGallery();
  showPage('gallery-page');
}

function goBackFromGallery() {
  showPage(previousPage);
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (grid.children.length > 0) return; // 已渲染过
  Object.entries(personalities).forEach(([key, p]) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.onclick = () => openModal(key);
    card.innerHTML = `
      <div class="gallery-card-header" style="background:linear-gradient(135deg,${p.color[0]}22,${p.color[1]}22)">
        <div class="gallery-card-avatar">${avatars[key] || ''}</div>
        <div class="gallery-card-info">
          <div class="gallery-card-name">${p.emoji} ${p.name}</div>
          <span class="gallery-card-tag" style="background:${p.color[1]}">${p.subtitle}</span>
        </div>
      </div>
      <div class="gallery-card-desc">${p.desc}</div>
    `;
    grid.appendChild(card);
  });
}

function openModal(key) {
  const p = personalities[key];
  const header = document.getElementById('modal-card-header');
  header.style.background = 'linear-gradient(135deg,' + p.color[0] + ',' + p.color[1] + ')';
  header.innerHTML = '<div class="card-avatar">' + (avatars[key] || '') + '</div><div class="card-emoji">' + p.emoji + '</div>';
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-tag').textContent = p.subtitle;
  document.getElementById('modal-tag').style.background = p.color[1];
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-pros').textContent = p.pros;
  document.getElementById('modal-cons').textContent = p.cons;
  document.getElementById('modal-match').textContent = p.match;
  document.getElementById('modal-clash').textContent = p.clash;
  document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}
