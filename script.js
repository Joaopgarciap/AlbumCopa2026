/* ═══════════════════════════════════════════════
   Álbum Copa do Mundo 2026 — script.js
   ═══════════════════════════════════════════════ */

const STORAGE_KEY = 'album-copa-2026-v4';

/* ── Teams (48 selections) ─────────────────────── */
const TEAMS = [
  /* Grupo A */
  { code:'MEX', name:'México',          grp:'A', flag:'🇲🇽', col:'#006847' },
  { code:'RSA', name:'África do Sul',   grp:'A', flag:'🇿🇦', col:'#007749' },
  { code:'KOR', name:'Coreia do Sul',   grp:'A', flag:'🇰🇷', col:'#C60C30' },
  { code:'CZE', name:'Tchéquia',        grp:'A', flag:'🇨🇿', col:'#D7141A' },
  /* Grupo B */
  { code:'CAN', name:'Canadá',          grp:'B', flag:'🇨🇦', col:'#CC0000' },
  { code:'BIH', name:'Bósnia e Herz.',  grp:'B', flag:'🇧🇦', col:'#002395' },
  { code:'QAT', name:'Catar',           grp:'B', flag:'🇶🇦', col:'#8D1B3D' },
  { code:'SUI', name:'Suíça',           grp:'B', flag:'🇨🇭', col:'#D52B1E' },
  /* Grupo C */
  { code:'BRA', name:'Brasil',          grp:'C', flag:'🇧🇷', col:'#009C3B' },
  { code:'MAR', name:'Marrocos',        grp:'C', flag:'🇲🇦', col:'#C1272D' },
  { code:'HAI', name:'Haiti',           grp:'C', flag:'🇭🇹', col:'#00209F' },
  { code:'SCO', name:'Escócia',         grp:'C', flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', col:'#003DA5' },
  /* Grupo D */
  { code:'USA', name:'EUA',             grp:'D', flag:'🇺🇸', col:'#002868' },
  { code:'PAR', name:'Paraguai',        grp:'D', flag:'🇵🇾', col:'#D52B1E' },
  { code:'AUS', name:'Austrália',       grp:'D', flag:'🇦🇺', col:'#003580' },
  { code:'TUR', name:'Turquia',         grp:'D', flag:'🇹🇷', col:'#E30A17' },
  /* Grupo E */
  { code:'GER', name:'Alemanha',        grp:'E', flag:'🇩🇪', col:'#2B2B2B' },
  { code:'CUW', name:'Curaçao',         grp:'E', flag:'🇨🇼', col:'#003DA5' },
  { code:'CIV', name:'Costa do Marfim', grp:'E', flag:'🇨🇮', col:'#E07000' },
  { code:'ECU', name:'Equador',         grp:'E', flag:'🇪🇨', col:'#0038A8' },
  /* Grupo F */
  { code:'NED', name:'Países Baixos',   grp:'F', flag:'🇳🇱', col:'#AE1C28' },
  { code:'JPN', name:'Japão',           grp:'F', flag:'🇯🇵', col:'#BC002D' },
  { code:'SWE', name:'Suécia',          grp:'F', flag:'🇸🇪', col:'#006AA7' },
  { code:'TUN', name:'Tunísia',         grp:'F', flag:'🇹🇳', col:'#E70013' },
  /* Grupo G */
  { code:'BEL', name:'Bélgica',         grp:'G', flag:'🇧🇪', col:'#2B2B2B' },
  { code:'EGY', name:'Egito',           grp:'G', flag:'🇪🇬', col:'#CE1126' },
  { code:'IRN', name:'Irã',             grp:'G', flag:'🇮🇷', col:'#239F40' },
  { code:'NZL', name:'Nova Zelândia',   grp:'G', flag:'🇳🇿', col:'#00247D' },
  /* Grupo H */
  { code:'ESP', name:'Espanha',         grp:'H', flag:'🇪🇸', col:'#AA151B' },
  { code:'CPV', name:'Cabo Verde',      grp:'H', flag:'🇨🇻', col:'#003893' },
  { code:'KSA', name:'Arábia Saudita',  grp:'H', flag:'🇸🇦', col:'#006C35' },
  { code:'URU', name:'Uruguai',         grp:'H', flag:'🇺🇾', col:'#5B9BD5' },
  /* Grupo I */
  { code:'FRA', name:'França',          grp:'I', flag:'🇫🇷', col:'#002395' },
  { code:'SEN', name:'Senegal',         grp:'I', flag:'🇸🇳', col:'#00853F' },
  { code:'NOR', name:'Noruega',         grp:'I', flag:'🇳🇴', col:'#EF2B2D' },
  { code:'IRQ', name:'Iraque',          grp:'I', flag:'🇮🇶', col:'#CE1126' },
  /* Grupo J */
  { code:'ARG', name:'Argentina',       grp:'J', flag:'🇦🇷', col:'#74ACDF' },
  { code:'ALG', name:'Argélia',         grp:'J', flag:'🇩🇿', col:'#006233' },
  { code:'AUT', name:'Áustria',         grp:'J', flag:'🇦🇹', col:'#ED2939' },
  { code:'JOR', name:'Jordânia',        grp:'J', flag:'🇯🇴', col:'#007A3D' },
  /* Grupo K */
  { code:'POR', name:'Portugal',        grp:'K', flag:'🇵🇹', col:'#006600' },
  { code:'COD', name:'RD Congo',        grp:'K', flag:'🇨🇩', col:'#007FFF' },
  { code:'UZB', name:'Uzbequistão',     grp:'K', flag:'🇺🇿', col:'#1EB53A' },
  { code:'COL', name:'Colômbia',        grp:'K', flag:'🇨🇴', col:'#B08800' },
  /* Grupo L */
  { code:'ENG', name:'Inglaterra',      grp:'L', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', col:'#CF081F' },
  { code:'CRO', name:'Croácia',         grp:'L', flag:'🇭🇷', col:'#CC0000' },
  { code:'GHA', name:'Gana',            grp:'L', flag:'🇬🇭', col:'#006B3F' },
  { code:'PAN', name:'Panamá',          grp:'L', flag:'🇵🇦', col:'#005293' },
];

/* ── Special pages ─────────────────────────────── */
const SPECIAL_PAGES = [
  {
    id: 'intro',
    type: 'special',
    title: 'Página Inicial',
    subtitle: 'FIFA World Cup 2026™',
    icon: '🌟',
    stickers: [
      { id:'FWC00', label:'FWC 00', type:'fwc' },
      { id:'FWC01', label:'FWC 1',  type:'fwc' },
      { id:'FWC02', label:'FWC 2',  type:'fwc' },
      { id:'FWC03', label:'FWC 3',  type:'fwc' },
      { id:'FWC04', label:'FWC 4',  type:'fwc' },
      { id:'FWC05', label:'FWC 5',  type:'fwc' },
      { id:'FWC06', label:'FWC 6',  type:'fwc' },
      { id:'FWC07', label:'FWC 7',  type:'fwc' },
      { id:'FWC08', label:'FWC 8',  type:'fwc' },
    ]
  },
  {
    id: 'history',
    type: 'special',
    title: 'FIFA World Cup History',
    subtitle: 'Momentos históricos da Copa',
    icon: '🏆',
    stickers: [
      { id:'FWC09', label:'FWC 9',  type:'fwc' },
      { id:'FWC10', label:'FWC 10', type:'fwc' },
      { id:'FWC11', label:'FWC 11', type:'fwc' },
      { id:'FWC12', label:'FWC 12', type:'fwc' },
      { id:'FWC13', label:'FWC 13', type:'fwc' },
      { id:'FWC14', label:'FWC 14', type:'fwc' },
      { id:'FWC15', label:'FWC 15', type:'fwc' },
      { id:'FWC16', label:'FWC 16', type:'fwc' },
      { id:'FWC17', label:'FWC 17', type:'fwc' },
      { id:'FWC18', label:'FWC 18', type:'fwc' },
      { id:'FWC19', label:'FWC 19', type:'fwc' },
    ]
  },
  {
    id: 'coca',
    type: 'special',
    title: 'Figurinhas Coca-Cola',
    subtitle: 'Coleção especial Coca-Cola',
    icon: '🥤',
    stickers: Array.from({ length: 14 }, (_, i) => ({
      id: `CC${String(i+1).padStart(2,'0')}`,
      label: `CC ${i+1}`,
      type: 'coca'
    }))
  }
];

/* ── Build page list ───────────────────────────── */
// Order: intro, all teams by group, history, coca
const PAGES = [
  SPECIAL_PAGES[0],                // intro FWC
  ...TEAMS.map(t => ({ id: t.code, type: 'team', team: t })),
  SPECIAL_PAGES[1],                // history FWC
  SPECIAL_PAGES[2],                // coca-cola
];

const TOTAL_STICKERS =
  TEAMS.reduce((s) => s + 20, 0) +
  SPECIAL_PAGES.reduce((s, p) => s + p.stickers.length, 0);

/* ── State ─────────────────────────────────────── */
let obtained    = new Set();
let curPage     = PAGES.findIndex(p => p.id === 'BRA');
let selOpen     = false;
let confirmRst  = false;

/* ── Persistence ───────────────────────────────── */
function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...obtained])); } catch(e) {}
}
function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) { const p = JSON.parse(raw); if (Array.isArray(p)) obtained = new Set(p); }
  } catch(e) {}
}

/* ── Sticker helpers ───────────────────────────── */
function teamStickerIds(code) {
  return Array.from({ length: 20 }, (_, i) => `${code}${String(i+1).padStart(2,'0')}`);
}
function pageStickerIds(page) {
  if (page.type === 'team') return teamStickerIds(page.team.code);
  return page.stickers.map(s => s.id);
}
function pageObtained(page) {
  return pageStickerIds(page).filter(id => obtained.has(id)).length;
}
function toggle(id) {
  if (obtained.has(id)) obtained.delete(id);
  else obtained.add(id);
  save(); render();
}

/* ── Slot builder ──────────────────────────────── */
function makeSlot(id, label, icon, iconType, slotLabel, cssClass, area, col) {
  const got = obtained.has(id);
  const div = document.createElement('div');
  div.className = 'slot' + (cssClass ? ' '+cssClass : '') + (got ? ' got' : '');
  if (area) div.style.gridArea = area;
  if (col) div.style.setProperty('--tc', col);

  const codeEl = document.createElement('div');
  codeEl.className = 'slot-code';
  codeEl.textContent = label;

  let iconEl;
  if (iconType === 'flag') {
    iconEl = document.createElement('div');
    iconEl.className = 'slot-icon';
    iconEl.textContent = icon;
  } else if (iconType === 'flag-sm') {
    iconEl = document.createElement('div');
    iconEl.className = 'slot-icon sm';
    iconEl.textContent = icon;
  } else if (iconType === 'photo') {
    iconEl = document.createElement('div');
    iconEl.className = 'slot-photo';
    iconEl.textContent = got ? '📸' : '⬛';
  } else if (iconType === 'fwc') {
    iconEl = document.createElement('div');
    iconEl.className = 'slot-icon sm';
    iconEl.textContent = '⭐';
  } else if (iconType === 'coca') {
    iconEl = document.createElement('div');
    iconEl.className = 'slot-icon sm';
    iconEl.textContent = '🥤';
  } else {
    iconEl = document.createElement('div');
    iconEl.className = 'slot-player';
  }

  const lblEl = document.createElement('div');
  lblEl.className = 'slot-label';
  lblEl.textContent = slotLabel;

  div.append(codeEl, iconEl, lblEl);

  if (got) {
    const chk = document.createElement('div');
    chk.className = 'slot-check';
    chk.textContent = '✓';
    div.appendChild(chk);
  }

  div.addEventListener('click', () => toggle(id));
  return div;
}

/* ── Team spread ───────────────────────────────── */
function buildTeamSpread(team) {
  const code = team.code;
  const col  = team.col;
  const got  = pageObtained(PAGES[curPage]);
  const done = got === 20;

  // Left page
  const left = document.createElement('div');
  left.className = 'page page-left';

  const hdr = document.createElement('div');
  hdr.className = 'page-hdr';
  hdr.style.background = col;
  hdr.innerHTML = `
    <div class="page-hdr-we">WE ARE</div>
    <div class="page-hdr-name">${team.name.toUpperCase()}</div>
    <div class="page-hdr-sub">
      <span>FIFA World Cup 2026™</span>
      <span class="page-hdr-grp">GRP ${team.grp}</span>
      <span class="page-hdr-prog" style="color:${done?'#a5d6a7':'rgba(255,255,255,0.6)'}">${got}/20</span>
    </div>`;

  const gl = document.createElement('div');
  gl.className = 'sticker-grid grid-team-left';
  gl.style.setProperty('--tc', col);

  const leftSlots = [
    [1,'s1','Brasão','flag'],
    [2,'s2',`Jog. 2`,'player'],
    [3,'s3',`Jog. 3`,'player'],
    [4,'s4',`Jog. 4`,'player'],
    [5,'s5',`Jog. 5`,'player'],
    [6,'s6',`Jog. 6`,'player'],
    [7,'s7',`Jog. 7`,'player'],
    [8,'s8',`Jog. 8`,'player'],
    [9,'s9',`Jog. 9`,'player'],
    [10,'s10',`Jog. 10`,'player'],
  ];
  leftSlots.forEach(([n, area, lbl, itype]) => {
    const id = `${code}${String(n).padStart(2,'0')}`;
    const iconType = itype === 'flag' ? 'flag' : 'player';
    gl.appendChild(makeSlot(id, `${code} ${n}`, team.flag, iconType, lbl, '', area, col));
  });

  left.append(hdr, gl);

  // Right page
  const right = document.createElement('div');
  right.className = 'page page-right';

  const spacer = document.createElement('div');
  spacer.className = 'page-spacer';

  const gr = document.createElement('div');
  gr.className = 'sticker-grid grid-team-right';
  gr.style.setProperty('--tc', col);

  const rightSlots = [
    [11,'s11',`Jog. 11`,'player'],
    [12,'s12',`Jog. 12`,'player'],
    [13,'s13','Foto Equipe','photo'],
    [14,'s14',`Jog. 14`,'player'],
    [15,'s15',`Jog. 15`,'player'],
    [16,'s16',`Jog. 16`,'player'],
    [17,'s17',`Jog. 17`,'player'],
    [18,'s18',`Jog. 18`,'player'],
    [19,'s19',`Jog. 19`,'player'],
    [20,'s20',`Jog. 20`,'player'],
  ];
  rightSlots.forEach(([n, area, lbl, itype]) => {
    const id = `${code}${String(n).padStart(2,'0')}`;
    gr.appendChild(makeSlot(id, `${code} ${n}`, team.flag, itype, lbl, '', area, col));
  });

  // Group card
  const grpTeams = TEAMS.filter(t => t.grp === team.grp);
  const gc = document.createElement('div');
  gc.className = 'grp-card';
  gc.style.gridArea = 'grp';
  const gt = document.createElement('div');
  gt.className = 'grp-card-title';
  gt.textContent = `GRUPO ${team.grp}`;
  const gf = document.createElement('div');
  gf.className = 'grp-flags';
  grpTeams.forEach(t => {
    const fi = document.createElement('div');
    fi.className = 'grp-flag-item' + (t.code === code ? ' me' : '');
    fi.textContent = t.flag;
    fi.title = t.name;
    gf.appendChild(fi);
  });
  gc.append(gt, gf);
  gr.appendChild(gc);

  right.append(spacer, gr);

  return [left, right];
}

/* ── Special spread ───────────────────────────── */
function buildSpecialSpread(page) {
  const got  = pageObtained(page);
  const total = page.stickers.length;
  const half  = Math.ceil(total / 2);
  const leftStickers  = page.stickers.slice(0, half);
  const rightStickers = page.stickers.slice(half);

  function buildHalf(stickers, isLeft) {
    const p = document.createElement('div');
    p.className = 'page ' + (isLeft ? 'page-left' : 'page-right');

    if (isLeft) {
      const hdr = document.createElement('div');
      hdr.className = 'page-hdr-special';
      hdr.innerHTML = `
        <div class="page-hdr-special-label">FIFA WORLD CUP 2026™</div>
        <div class="page-hdr-special-title">${page.icon} ${page.title.toUpperCase()}</div>
        <div class="page-hdr-special-sub">
          <span>${page.subtitle}</span>
          <span class="page-hdr-special-prog">${got}/${total}</span>
        </div>`;
      p.appendChild(hdr);
    } else {
      const sp = document.createElement('div');
      sp.className = 'page-spacer';
      p.appendChild(sp);
    }

    const grid = document.createElement('div');
    grid.className = 'sticker-grid grid-special';

    stickers.forEach(s => {
      grid.appendChild(makeSlot(s.id, s.label, '', s.type, s.type === 'fwc' ? 'Cromo Especial' : 'Coca-Cola', s.type, null, null));
    });

    p.appendChild(grid);
    return p;
  }

  return [buildHalf(leftStickers, true), buildHalf(rightStickers, false)];
}

/* ── Selector ──────────────────────────────────── */
function buildSelector() {
  const sel = document.getElementById('selector');
  sel.innerHTML = '';

  // Special pages section
  const secSpecial = document.createElement('div');
  secSpecial.className = 'sel-section';
  const secTitle = document.createElement('div');
  secTitle.className = 'sel-section-title';
  secTitle.textContent = 'PÁGINAS ESPECIAIS';
  secSpecial.appendChild(secTitle);
  const specRow = document.createElement('div');
  specRow.className = 'sel-special-row';

  PAGES.forEach((p, i) => {
    if (p.type !== 'special') return;
    const got = pageObtained(p);
    const total = p.stickers.length;
    const btn = document.createElement('button');
    btn.className = 'sel-special-btn' + (i === curPage ? ' active' : '');
    const pEl = document.createElement('span');
    pEl.className = 'sel-special-btn-prog';
    pEl.textContent = `${got}/${total}`;
    btn.innerHTML = `${p.icon} ${p.title} `;
    btn.appendChild(pEl);
    btn.addEventListener('click', () => { curPage = i; selOpen = false; render(); });
    specRow.appendChild(btn);
  });

  secSpecial.appendChild(specRow);
  sel.appendChild(secSpecial);

  // Team pages by group
  const secTeams = document.createElement('div');
  secTeams.className = 'sel-section';
  const secTeamsTitle = document.createElement('div');
  secTeamsTitle.className = 'sel-section-title';
  secTeamsTitle.textContent = 'SELEÇÕES';
  secTeams.appendChild(secTeamsTitle);

  'ABCDEFGHIJKL'.split('').forEach(g => {
    const grpTeams = TEAMS.filter(t => t.grp === g);

    const row = document.createElement('div');
    row.className = 'sel-grp-row';
    const lbl = document.createElement('div');
    lbl.className = 'sel-grp-label';
    lbl.textContent = `GRP ${g}`;
    row.appendChild(lbl);

    const wrap = document.createElement('div');
    wrap.className = 'sel-teams';

    grpTeams.forEach(t => {
      const pi  = PAGES.findIndex(p => p.id === t.code);
      const got = pageObtained(PAGES[pi]);
      const done = got === 20;

      const btn = document.createElement('button');
      btn.className = 'sel-btn' + (pi === curPage ? ' active' : '');

      const flagEl = document.createElement('span');
      flagEl.className = 'sel-btn-flag';
      flagEl.textContent = t.flag;

      const progEl = document.createElement('span');
      progEl.className = 'sel-btn-prog' + (done ? ' done' : '');
      progEl.textContent = `${got}/20`;

      btn.append(flagEl, progEl);
      btn.title = t.name;
      btn.addEventListener('click', () => { curPage = pi; selOpen = false; render(); });
      wrap.appendChild(btn);
    });

    row.append(lbl, wrap);
    secTeams.appendChild(row);
  });

  sel.appendChild(secTeams);
}

/* ── Main render ───────────────────────────────── */
function render() {
  const page  = PAGES[curPage];
  const isTeam = page.type === 'team';
  const got   = pageObtained(page);
  const total = pageStickerIds(page).length;
  const done  = got === total;
  const pct   = Math.round(obtained.size / TOTAL_STICKERS * 100);

  // Body background
  document.body.classList.toggle('team-active', isTeam);
  document.body.classList.toggle('special-active', !isTeam);
  if (isTeam) {
    document.body.style.setProperty('--tc', page.team.col);
  }

  // Global progress
  document.getElementById('globalLabel').textContent = `${obtained.size} de ${TOTAL_STICKERS}`;
  document.getElementById('globalPct').textContent   = `${pct}%`;
  document.getElementById('progFill').style.width    = `${pct}%`;

  // Picker
  if (isTeam) {
    document.getElementById('pickerFlag').textContent = page.team.flag;
    document.getElementById('pickerName').textContent = page.team.name;
    document.getElementById('pickerSub').textContent  = `Grupo ${page.team.grp}`;
  } else {
    document.getElementById('pickerFlag').textContent = page.icon;
    document.getElementById('pickerName').textContent = page.title;
    document.getElementById('pickerSub').textContent  = page.subtitle;
  }

  const doneEl = document.getElementById('btnDone');
  if (doneEl) {
    // Dynamically show done badge in picker-info
    let existingDone = document.querySelector('.picker-done-badge');
    if (done && !existingDone) {
      const badge = document.createElement('span');
      badge.className = 'picker-done picker-done-badge';
      badge.textContent = '✓ Completo';
      document.getElementById('pickerSub').insertAdjacentElement('afterend', badge);
    } else if (!done && existingDone) {
      existingDone.remove();
    }
  }

  document.getElementById('pickerProg').textContent = `${got}/${total}`;
  document.getElementById('pickerChevron').textContent = selOpen ? '▲' : '▼';
  document.getElementById('btnPicker').classList.toggle('open', selOpen);

  document.getElementById('btnPrev').disabled = curPage === 0;
  document.getElementById('btnNext').disabled = curPage === PAGES.length - 1;

  // Spread
  const spread = document.getElementById('spread');
  spread.innerHTML = '';

  let leftPage, rightPage;
  if (isTeam) {
    [leftPage, rightPage] = buildTeamSpread(page.team);
  } else {
    [leftPage, rightPage] = buildSpecialSpread(page);
  }

  const spine = document.createElement('div');
  spine.className = 'spine';
  const spineLine = document.createElement('div');
  spineLine.className = 'spine-line';
  spine.appendChild(spineLine);

  spread.append(leftPage, spine, rightPage);

  // Selector
  const selEl = document.getElementById('selector');
  selEl.classList.toggle('open', selOpen);
  if (selOpen) buildSelector();

  // Actions
  const acts = document.getElementById('actions');
  acts.innerHTML = '';

  const markBtn = document.createElement('button');
  markBtn.className = 'act-btn act-mark';
  markBtn.textContent = '✓ Marcar página toda';
  markBtn.addEventListener('click', () => {
    pageStickerIds(page).forEach(id => obtained.add(id));
    save(); render();
  });

  const unmarkBtn = document.createElement('button');
  unmarkBtn.className = 'act-btn act-unmark';
  unmarkBtn.textContent = '✕ Desmarcar toda';
  unmarkBtn.addEventListener('click', () => {
    pageStickerIds(page).forEach(id => obtained.delete(id));
    save(); render();
  });

  acts.append(markBtn, unmarkBtn);

  if (confirmRst) {
    const row = document.createElement('div');
    row.className = 'confirm-row';

    const ok = document.createElement('button');
    ok.className = 'act-btn act-confirm';
    ok.textContent = 'Confirmar reset';
    ok.addEventListener('click', () => { obtained.clear(); save(); confirmRst = false; render(); });

    const cancel = document.createElement('button');
    cancel.className = 'act-btn act-cancel';
    cancel.textContent = '✕';
    cancel.addEventListener('click', () => { confirmRst = false; render(); });

    row.append(ok, cancel);
    acts.appendChild(row);
  } else {
    const rstBtn = document.createElement('button');
    rstBtn.className = 'act-btn act-reset';
    rstBtn.textContent = '↺ Reiniciar álbum';
    rstBtn.addEventListener('click', () => { confirmRst = true; render(); });
    acts.appendChild(rstBtn);
  }
}

/* ── Events ────────────────────────────────────── */
document.getElementById('btnPrev').addEventListener('click', () => {
  if (curPage > 0) { curPage--; selOpen = false; render(); }
});
document.getElementById('btnNext').addEventListener('click', () => {
  if (curPage < PAGES.length - 1) { curPage++; selOpen = false; render(); }
});
document.getElementById('btnPicker').addEventListener('click', () => {
  selOpen = !selOpen; render();
});

document.addEventListener('click', e => {
  const picker = document.getElementById('btnPicker');
  const sel    = document.getElementById('selector');
  if (selOpen && !picker.contains(e.target) && !sel.contains(e.target)) {
    selOpen = false; render();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft'  && curPage > 0) { curPage--; selOpen = false; render(); }
  if (e.key === 'ArrowRight' && curPage < PAGES.length - 1) { curPage++; selOpen = false; render(); }
  if (e.key === 'Escape' && selOpen) { selOpen = false; render(); }
});

/* ── Init ──────────────────────────────────────── */
load();
render();