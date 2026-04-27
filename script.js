/* ════════════════════════════════════════════════════════
   Álbum Copa do Mundo 2026 — script.js
   ════════════════════════════════════════════════════════ */

const STORAGE_KEY = 'album-copa-2026';
const STICKERS_PER_TEAM = 20;

/* ─── Teams ──────────────────────────────────────────── */
const TEAMS = [
  /* Grupo A */
  { code:'MEX', name:'México',           grp:'A', flag:'🇲🇽', col:'#006847' },
  { code:'RSA', name:'África do Sul',    grp:'A', flag:'🇿🇦', col:'#007749' },
  { code:'KOR', name:'Coreia do Sul',    grp:'A', flag:'🇰🇷', col:'#C60C30' },
  { code:'CZE', name:'Tchéquia',         grp:'A', flag:'🇨🇿', col:'#D7141A' },
  /* Grupo B */
  { code:'CAN', name:'Canadá',           grp:'B', flag:'🇨🇦', col:'#CC0000' },
  { code:'BIH', name:'Bósnia e Herz.',   grp:'B', flag:'🇧🇦', col:'#002395' },
  { code:'QAT', name:'Catar',            grp:'B', flag:'🇶🇦', col:'#8D1B3D' },
  { code:'SUI', name:'Suíça',            grp:'B', flag:'🇨🇭', col:'#D52B1E' },
  /* Grupo C */
  { code:'BRA', name:'Brasil',           grp:'C', flag:'🇧🇷', col:'#009C3B' },
  { code:'MAR', name:'Marrocos',         grp:'C', flag:'🇲🇦', col:'#C1272D' },
  { code:'HAI', name:'Haiti',            grp:'C', flag:'🇭🇹', col:'#00209F' },
  { code:'SCO', name:'Escócia',          grp:'C', flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', col:'#003DA5' },
  /* Grupo D */
  { code:'USA', name:'EUA',              grp:'D', flag:'🇺🇸', col:'#002868' },
  { code:'PAR', name:'Paraguai',         grp:'D', flag:'🇵🇾', col:'#D52B1E' },
  { code:'AUS', name:'Austrália',        grp:'D', flag:'🇦🇺', col:'#003580' },
  { code:'TUR', name:'Turquia',          grp:'D', flag:'🇹🇷', col:'#E30A17' },
  /* Grupo E */
  { code:'GER', name:'Alemanha',         grp:'E', flag:'🇩🇪', col:'#2B2B2B' },
  { code:'CUW', name:'Curaçao',          grp:'E', flag:'🇨🇼', col:'#003DA5' },
  { code:'CIV', name:'Costa do Marfim',  grp:'E', flag:'🇨🇮', col:'#E07000' },
  { code:'ECU', name:'Equador',          grp:'E', flag:'🇪🇨', col:'#0038A8' },
  /* Grupo F */
  { code:'NED', name:'Países Baixos',    grp:'F', flag:'🇳🇱', col:'#AE1C28' },
  { code:'JPN', name:'Japão',            grp:'F', flag:'🇯🇵', col:'#BC002D' },
  { code:'SWE', name:'Suécia',           grp:'F', flag:'🇸🇪', col:'#006AA7' },
  { code:'TUN', name:'Tunísia',          grp:'F', flag:'🇹🇳', col:'#E70013' },
  /* Grupo G */
  { code:'BEL', name:'Bélgica',          grp:'G', flag:'🇧🇪', col:'#2B2B2B' },
  { code:'EGY', name:'Egito',            grp:'G', flag:'🇪🇬', col:'#CE1126' },
  { code:'IRN', name:'Irã',              grp:'G', flag:'🇮🇷', col:'#239F40' },
  { code:'NZL', name:'Nova Zelândia',    grp:'G', flag:'🇳🇿', col:'#00247D' },
  /* Grupo H */
  { code:'ESP', name:'Espanha',          grp:'H', flag:'🇪🇸', col:'#AA151B' },
  { code:'CPV', name:'Cabo Verde',       grp:'H', flag:'🇨🇻', col:'#003893' },
  { code:'KSA', name:'Arábia Saudita',   grp:'H', flag:'🇸🇦', col:'#006C35' },
  { code:'URU', name:'Uruguai',          grp:'H', flag:'🇺🇾', col:'#5B9BD5' },
  /* Grupo I */
  { code:'FRA', name:'França',           grp:'I', flag:'🇫🇷', col:'#002395' },
  { code:'SEN', name:'Senegal',          grp:'I', flag:'🇸🇳', col:'#00853F' },
  { code:'NOR', name:'Noruega',          grp:'I', flag:'🇳🇴', col:'#EF2B2D' },
  { code:'IRQ', name:'Iraque',           grp:'I', flag:'🇮🇶', col:'#CE1126' },
  /* Grupo J */
  { code:'ARG', name:'Argentina',        grp:'J', flag:'🇦🇷', col:'#6A9FD0' },
  { code:'ALG', name:'Argélia',          grp:'J', flag:'🇩🇿', col:'#006233' },
  { code:'AUT', name:'Áustria',          grp:'J', flag:'🇦🇹', col:'#ED2939' },
  { code:'JOR', name:'Jordânia',         grp:'J', flag:'🇯🇴', col:'#007A3D' },
  /* Grupo K */
  { code:'POR', name:'Portugal',         grp:'K', flag:'🇵🇹', col:'#006600' },
  { code:'COD', name:'RD Congo',         grp:'K', flag:'🇨🇩', col:'#007FFF' },
  { code:'UZB', name:'Uzbequistão',      grp:'K', flag:'🇺🇿', col:'#1EB53A' },
  { code:'COL', name:'Colômbia',         grp:'K', flag:'🇨🇴', col:'#B08800' },
  /* Grupo L */
  { code:'ENG', name:'Inglaterra',       grp:'L', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', col:'#CF081F' },
  { code:'CRO', name:'Croácia',          grp:'L', flag:'🇭🇷', col:'#CC0000' },
  { code:'GHA', name:'Gana',             grp:'L', flag:'🇬🇭', col:'#006B3F' },
  { code:'PAN', name:'Panamá',           grp:'L', flag:'🇵🇦', col:'#005293' },
];

const TOTAL = TEAMS.length * STICKERS_PER_TEAM; // 960

/* ─── State ──────────────────────────────────────────── */
let obtained    = new Set();
let currentIdx  = TEAMS.findIndex(t => t.code === 'BRA'); // default: Brasil
let selectorOpen = false;
let confirmingReset = false;

/* ─── Helpers ────────────────────────────────────────── */
function stickerId(code, n) {
  return `${code}${String(n).padStart(2, '0')}`;
}

function teamStickers(code) {
  return Array.from({ length: STICKERS_PER_TEAM }, (_, i) => stickerId(code, i + 1));
}

function teamObtainedCount(code) {
  return teamStickers(code).filter(id => obtained.has(id)).length;
}

/* ─── Persistence ────────────────────────────────────── */
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...obtained]));
  } catch (e) {
    console.warn('Não foi possível salvar:', e);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) obtained = new Set(parsed);
  } catch (e) {
    console.warn('Não foi possível carregar:', e);
  }
}

/* ─── Toggle sticker ─────────────────────────────────── */
function toggleSticker(id) {
  if (obtained.has(id)) obtained.delete(id);
  else obtained.add(id);
  saveState();
  render();
}

/* ─── Build sticker slot DOM ─────────────────────────── */
function buildSlot(team, n, gridArea) {
  const id  = stickerId(team.code, n);
  const got = obtained.has(id);
  const isBadge = n === 1;
  const isPhoto = n === 13;

  const div = document.createElement('div');
  div.className = 'slot' + (got ? ' obtained' : '');
  div.style.gridArea = gridArea;
  if (got) div.style.setProperty('--team-color', team.col);
  div.title = isBadge
    ? `${team.code} 1 — Brasão`
    : isPhoto
      ? `${team.code} 13 — Foto da Equipe`
      : `${team.code} ${n} — Jogador ${n}`;

  /* Code label */
  const codeEl = document.createElement('div');
  codeEl.className = 'slot-code';
  codeEl.textContent = `${team.code} ${n}`;

  /* Icon */
  let iconEl;
  if (isBadge) {
    iconEl = document.createElement('div');
    iconEl.className = 'slot-badge-icon';
    iconEl.textContent = team.flag;
  } else if (isPhoto) {
    iconEl = document.createElement('div');
    iconEl.className = 'slot-photo-box';
    iconEl.textContent = got ? '📸' : '⬛';
  } else {
    iconEl = document.createElement('div');
    iconEl.className = 'slot-player';
  }

  /* Type label */
  const lblEl = document.createElement('div');
  lblEl.className = 'slot-label';
  lblEl.textContent = isBadge ? 'Brasão' : isPhoto ? 'Foto Equipe' : `Jog. ${n}`;

  div.append(codeEl, iconEl, lblEl);

  /* Check mark when obtained */
  if (got) {
    const chk = document.createElement('div');
    chk.className = 'slot-check';
    chk.textContent = '✓';
    div.appendChild(chk);
  }

  div.addEventListener('click', () => toggleSticker(id));
  return div;
}

/* ─── Build group panel ──────────────────────────────── */
function buildGroupPanel(team) {
  const groupTeams = TEAMS.filter(t => t.grp === team.grp);

  const panel = document.createElement('div');
  panel.className = 'grp-panel';
  panel.style.gridArea = 'grp';

  const title = document.createElement('div');
  title.className = 'grp-panel-title';
  title.textContent = `GRUPO ${team.grp}`;

  const flagsRow = document.createElement('div');
  flagsRow.className = 'grp-flags-row';

  groupTeams.forEach(t => {
    const flagEl = document.createElement('div');
    flagEl.className = 'grp-flag-item' + (t.code === team.code ? ' current' : '');
    flagEl.textContent = t.flag;
    flagEl.title = t.name;
    flagsRow.appendChild(flagEl);
  });

  panel.append(title, flagsRow);
  return panel;
}

/* ─── Build selector ─────────────────────────────────── */
function buildSelector() {
  const sel = document.getElementById('selector');
  sel.innerHTML = '';

  'ABCDEFGHIJKL'.split('').forEach(g => {
    const groupTeams = TEAMS.filter(t => t.grp === g);

    const row = document.createElement('div');
    row.className = 'sel-group-row';

    const lbl = document.createElement('div');
    lbl.className = 'sel-group-label';
    lbl.textContent = `GRP ${g}`;
    row.appendChild(lbl);

    const wrap = document.createElement('div');
    wrap.className = 'sel-teams';

    groupTeams.forEach(t => {
      const tIdx = TEAMS.indexOf(t);
      const cnt  = teamObtainedCount(t.code);
      const done = cnt === STICKERS_PER_TEAM;

      const btn = document.createElement('button');
      btn.className = 'sel-team-btn' + (tIdx === currentIdx ? ' active' : '');

      const flagEl = document.createElement('span');
      flagEl.className = 'sel-team-flag';
      flagEl.textContent = t.flag;

      const codeEl = document.createElement('span');
      codeEl.className = 'sel-team-code';
      codeEl.textContent = t.code;

      const progEl = document.createElement('span');
      progEl.className = 'sel-team-prog' + (done ? ' done' : '');
      progEl.textContent = `${cnt}/${STICKERS_PER_TEAM}`;

      btn.append(flagEl, codeEl, progEl);
      btn.addEventListener('click', () => {
        currentIdx   = tIdx;
        selectorOpen = false;
        render();
      });

      wrap.appendChild(btn);
    });

    row.appendChild(wrap);
    sel.appendChild(row);
  });
}

/* ─── Main render ────────────────────────────────────── */
function render() {
  const team    = TEAMS[currentIdx];
  const tGot    = teamObtainedCount(team.code);
  const done    = tGot === STICKERS_PER_TEAM;
  const pct     = Math.round((obtained.size / TOTAL) * 100);

  /* Global progress */
  document.getElementById('globalLabel').textContent =
    `${obtained.size} de ${TOTAL}`;
  document.getElementById('globalPct').textContent = `${pct}%`;
  document.getElementById('pbarFill').style.width = `${pct}%`;

  /* Team picker button */
  document.getElementById('btnFlag').textContent = team.flag;
  document.getElementById('btnName').textContent = team.name;
  document.getElementById('btnGrp').textContent  = `Grupo ${team.grp}`;
  document.getElementById('btnDone').style.display = done ? 'inline-block' : 'none';
  document.getElementById('btnProg').textContent = `${tGot}/${STICKERS_PER_TEAM}`;
  document.getElementById('pickerArrow').textContent = selectorOpen ? '▲' : '▼';
  document.getElementById('btnTeam').classList.toggle('open', selectorOpen);

  /* Nav arrows */
  document.getElementById('btnPrev').disabled = currentIdx === 0;
  document.getElementById('btnNext').disabled = currentIdx === TEAMS.length - 1;

  /* Left page header */
  const hdr = document.getElementById('pageHeader');
  hdr.style.background = team.col;
  document.getElementById('hdrName').textContent = team.name.toUpperCase();
  document.getElementById('hdrGrp').textContent  = `GRP ${team.grp}`;
  const hdrProg = document.getElementById('hdrProg');
  hdrProg.textContent = `${tGot}/${STICKERS_PER_TEAM}`;
  hdrProg.style.color = done ? '#a5d6a7' : 'rgba(255,255,255,0.6)';

  /* ── Left page grid: S1–S10 ── */
  const leftAreas = {
    1:'s1', 2:'s2', 3:'s3', 4:'s4', 5:'s5',
    6:'s6', 7:'s7', 8:'s8', 9:'s9', 10:'s10'
  };

  const gl = document.getElementById('gridLeft');
  gl.innerHTML = '';
  Object.entries(leftAreas).forEach(([n, area]) => {
    gl.appendChild(buildSlot(team, Number(n), area));
  });
  const xx1 = document.createElement('div');
  xx1.className = 'grid-empty';
  gl.appendChild(xx1);

  /* ── Right page grid: S11–S20 + group panel ── */
  const rightAreas = {
    11:'s11', 12:'s12', 13:'s13', 14:'s14', 15:'s15',
    16:'s16', 17:'s17', 18:'s18', 19:'s19', 20:'s20'
  };

  const gr = document.getElementById('gridRight');
  gr.innerHTML = '';
  Object.entries(rightAreas).forEach(([n, area]) => {
    gr.appendChild(buildSlot(team, Number(n), area));
  });
  gr.appendChild(buildGroupPanel(team));
  const xx2 = document.createElement('div');
  xx2.className = 'grid-empty';
  gr.appendChild(xx2);

  /* ── Selector ── */
  const selEl = document.getElementById('selector');
  if (selectorOpen) {
    selEl.classList.add('open');
    buildSelector();
  } else {
    selEl.classList.remove('open');
  }

  /* ── Reset area ── */
  const ra = document.getElementById('resetArea');
  if (confirmingReset) {
    ra.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'reset-confirm-row';

    const ok = document.createElement('button');
    ok.className = 'action-btn action-confirm';
    ok.textContent = 'Confirmar reset';
    ok.addEventListener('click', () => {
      obtained.clear();
      saveState();
      confirmingReset = false;
      render();
    });

    const cancel = document.createElement('button');
    cancel.className = 'action-btn action-cancel';
    cancel.textContent = '✕';
    cancel.addEventListener('click', () => {
      confirmingReset = false;
      render();
    });

    row.append(ok, cancel);
    ra.appendChild(row);
  } else {
    ra.innerHTML = '';
    const rstBtn = document.createElement('button');
    rstBtn.className = 'action-btn action-reset';
    rstBtn.id = 'btnRst';
    rstBtn.textContent = '↺ Reiniciar álbum';
    rstBtn.addEventListener('click', () => {
      confirmingReset = true;
      render();
    });
    ra.appendChild(rstBtn);
  }
}

/* ─── Event listeners ────────────────────────────────── */
document.getElementById('btnPrev').addEventListener('click', () => {
  if (currentIdx > 0) {
    currentIdx--;
    selectorOpen = false;
    render();
  }
});

document.getElementById('btnNext').addEventListener('click', () => {
  if (currentIdx < TEAMS.length - 1) {
    currentIdx++;
    selectorOpen = false;
    render();
  }
});

document.getElementById('btnTeam').addEventListener('click', () => {
  selectorOpen = !selectorOpen;
  render();
});

document.getElementById('btnMark').addEventListener('click', () => {
  const team = TEAMS[currentIdx];
  teamStickers(team.code).forEach(id => obtained.add(id));
  saveState();
  render();
});

document.getElementById('btnUnmark').addEventListener('click', () => {
  const team = TEAMS[currentIdx];
  teamStickers(team.code).forEach(id => obtained.delete(id));
  saveState();
  render();
});

/* Close selector when clicking outside */
document.addEventListener('click', (e) => {
  const picker = document.getElementById('btnTeam');
  const sel    = document.getElementById('selector');
  if (selectorOpen && !picker.contains(e.target) && !sel.contains(e.target)) {
    selectorOpen = false;
    render();
  }
});

/* Keyboard: arrow keys to navigate teams */
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft'  && currentIdx > 0) {
    currentIdx--; selectorOpen = false; render();
  }
  if (e.key === 'ArrowRight' && currentIdx < TEAMS.length - 1) {
    currentIdx++; selectorOpen = false; render();
  }
  if (e.key === 'Escape' && selectorOpen) {
    selectorOpen = false; render();
  }
});

/* ─── Init ───────────────────────────────────────────── */
loadState();
render();