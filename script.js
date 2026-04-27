/* ════════════════════════════════════════════
   Álbum Copa do Mundo 2026 — script.js
════════════════════════════════════════════ */

const SK = 'copa26-album-v5';

/* ── Teams ──────────────────────────────── */
const TEAMS = [
  { code:'MEX', name:'México',          grp:'A', fi:'mx', col:'#006847' },
  { code:'RSA', name:'África do Sul',   grp:'A', fi:'za', col:'#007749' },
  { code:'KOR', name:'Coreia do Sul',   grp:'A', fi:'kr', col:'#C60C30' },
  { code:'CZE', name:'Tchéquia',        grp:'A', fi:'cz', col:'#B0252A' },
  { code:'CAN', name:'Canadá',          grp:'B', fi:'ca', col:'#CC0000' },
  { code:'BIH', name:'Bósnia e Herz.',  grp:'B', fi:'ba', col:'#002395' },
  { code:'QAT', name:'Catar',           grp:'B', fi:'qa', col:'#8D1B3D' },
  { code:'SUI', name:'Suíça',           grp:'B', fi:'ch', col:'#C8242C' },
  { code:'BRA', name:'Brasil',          grp:'C', fi:'br', col:'#009C3B' },
  { code:'MAR', name:'Marrocos',        grp:'C', fi:'ma', col:'#C1272D' },
  { code:'HAI', name:'Haiti',           grp:'C', fi:'ht', col:'#00209F' },
  { code:'SCO', name:'Escócia',         grp:'C', fi:'gb-sct', col:'#003DA5' },
  { code:'USA', name:'EUA',             grp:'D', fi:'us', col:'#1B3A6B' },
  { code:'PAR', name:'Paraguai',        grp:'D', fi:'py', col:'#C8242C' },
  { code:'AUS', name:'Austrália',       grp:'D', fi:'au', col:'#003580' },
  { code:'TUR', name:'Turquia',         grp:'D', fi:'tr', col:'#E30A17' },
  { code:'GER', name:'Alemanha',        grp:'E', fi:'de', col:'#2B2B2B' },
  { code:'CUW', name:'Curaçao',         grp:'E', fi:'cw', col:'#003DA5' },
  { code:'CIV', name:'Costa do Marfim', grp:'E', fi:'ci', col:'#D07000' },
  { code:'ECU', name:'Equador',         grp:'E', fi:'ec', col:'#0038A8' },
  { code:'NED', name:'Países Baixos',   grp:'F', fi:'nl', col:'#AE1C28' },
  { code:'JPN', name:'Japão',           grp:'F', fi:'jp', col:'#BC002D' },
  { code:'SWE', name:'Suécia',          grp:'F', fi:'se', col:'#006AA7' },
  { code:'TUN', name:'Tunísia',         grp:'F', fi:'tn', col:'#C8010E' },
  { code:'BEL', name:'Bélgica',         grp:'G', fi:'be', col:'#2B2B2B' },
  { code:'EGY', name:'Egito',           grp:'G', fi:'eg', col:'#CE1126' },
  { code:'IRN', name:'Irã',             grp:'G', fi:'ir', col:'#239F40' },
  { code:'NZL', name:'Nova Zelândia',   grp:'G', fi:'nz', col:'#00247D' },
  { code:'ESP', name:'Espanha',         grp:'H', fi:'es', col:'#AA151B' },
  { code:'CPV', name:'Cabo Verde',      grp:'H', fi:'cv', col:'#003893' },
  { code:'KSA', name:'Arábia Saudita',  grp:'H', fi:'sa', col:'#006C35' },
  { code:'URU', name:'Uruguai',         grp:'H', fi:'uy', col:'#4A8FC0' },
  { code:'FRA', name:'França',          grp:'I', fi:'fr', col:'#002395' },
  { code:'SEN', name:'Senegal',         grp:'I', fi:'sn', col:'#00853F' },
  { code:'NOR', name:'Noruega',         grp:'I', fi:'no', col:'#EF2B2D' },
  { code:'IRQ', name:'Iraque',          grp:'I', fi:'iq', col:'#CE1126' },
  { code:'ARG', name:'Argentina',       grp:'J', fi:'ar', col:'#5A9ED5' },
  { code:'ALG', name:'Argélia',         grp:'J', fi:'dz', col:'#006233' },
  { code:'AUT', name:'Áustria',         grp:'J', fi:'at', col:'#ED2939' },
  { code:'JOR', name:'Jordânia',        grp:'J', fi:'jo', col:'#007A3D' },
  { code:'POR', name:'Portugal',        grp:'K', fi:'pt', col:'#006600' },
  { code:'COD', name:'RD Congo',        grp:'K', fi:'cd', col:'#007FCF' },
  { code:'UZB', name:'Uzbequistão',     grp:'K', fi:'uz', col:'#1EB53A' },
  { code:'COL', name:'Colômbia',        grp:'K', fi:'co', col:'#A07800' },
  { code:'ENG', name:'Inglaterra',      grp:'L', fi:'gb-eng', col:'#CF081F' },
  { code:'CRO', name:'Croácia',         grp:'L', fi:'hr', col:'#B01020' },
  { code:'GHA', name:'Gana',            grp:'L', fi:'gh', col:'#006B3F' },
  { code:'PAN', name:'Panamá',          grp:'L', fi:'pa', col:'#005293' },
];

/* ── Special pages ───────────────────────── */
const SPECIALS = [
  {
    id:'intro', label:'Página Inicial', icon:'🌟', eyebrow:'ABERTURA',
    stickers: Array.from({length:9},(_,i)=>({ id:`FWC0${i}`, lbl:`FWC ${i}`, type:'fwc' }))
  },
  {
    id:'history', label:'World Cup History', icon:'🏆', eyebrow:'FIFA WORLD CUP HISTORY',
    stickers: Array.from({length:11},(_,i)=>({ id:`FWC${i+9}`, lbl:`FWC ${i+9}`, type:'fwc' }))
  },
  {
    id:'coca', label:'Coca-Cola', icon:'🥤', eyebrow:'FIGURINHAS COCA-COLA',
    stickers: Array.from({length:14},(_,i)=>({ id:`CC${String(i+1).padStart(2,'0')}`, lbl:`CC ${i+1}`, type:'coca' }))
  }
];

/* Build page list: intro → teams → history → coca */
const PAGES = [
  SPECIALS[0],
  ...TEAMS.map(t => ({ id:t.code, type:'team', team:t })),
  SPECIALS[1],
  SPECIALS[2],
];

function pageStickerIds(page) {
  if (page.type === 'team') return Array.from({length:20},(_,i)=>`${page.team.code}${String(i+1).padStart(2,'0')}`);
  return page.stickers.map(s=>s.id);
}

const TOTAL = PAGES.reduce((s,p)=>s+pageStickerIds(p).length, 0);

/* ── Flag helper ─────────────────────────── */
function mkFlag(fi, cls) {
  const s = document.createElement('span');
  s.className = `fi fi-${fi} ${cls||''}`;
  return s;
}
let obtained = new Set();
let curPage  = PAGES.findIndex(p=>p.id==='BRA');
let selOpen  = false;

/* ── Persist ─────────────────────────────── */
function save() { try { localStorage.setItem(SK, JSON.stringify([...obtained])); } catch(e){} }
function load() {
  try {
    const r = localStorage.getItem(SK);
    if(r){ const p=JSON.parse(r); if(Array.isArray(p)) obtained=new Set(p); }
  } catch(e){}
}

/* ── Toggle ──────────────────────────────── */
function toggle(id) {
  if(obtained.has(id)) obtained.delete(id); else obtained.add(id);
  save(); render();
}

/* ── Build sticker slot ──────────────────── */
function mkSlot(id, numLabel, extraClass, iconType, slotLabel, col, area) {
  const got = obtained.has(id);

  const div = document.createElement('div');
  div.className = 'slot' + (extraClass?' '+extraClass:'') + (got?' got':'');
  if(area) div.style.gridArea = area;
  if(col && got) div.style.setProperty('--tc', col);
  else if(col) div.style.setProperty('--tc', col);

  /* Number label */
  const num = document.createElement('div');
  num.className = 'slot-num';
  num.textContent = numLabel;

  /* Icon */
  let iconEl;
  if(!got) {
    if(iconType==='badge') {
      iconEl = document.createElement('div');
      iconEl.className = 'slot-shield';
    } else if(iconType==='photo') {
      iconEl = document.createElement('div');
      iconEl.className = 'slot-cam';
      iconEl.textContent = '📷';
    } else if(iconType==='fwc') {
      iconEl = document.createElement('div');
      iconEl.className = 'slot-star';
      iconEl.textContent = '⭐';
    } else if(iconType==='coca') {
      iconEl = document.createElement('div');
      iconEl.className = 'slot-cola';
      iconEl.textContent = '🥤';
    } else {
      iconEl = document.createElement('div');
      iconEl.className = 'slot-silhouette';
      const h = document.createElement('div'); h.className='slot-sil-head';
      const b = document.createElement('div'); b.className='slot-sil-body';
      iconEl.append(h,b);
    }
  } else {
    // Obtained: show flag or icon
    if(iconType==='badge') {
      const pg = PAGES[curPage];
      iconEl = pg.type==='team'
        ? mkFlag(pg.team.fi, 'fi-md')
        : document.createElement('span');
      iconEl.style.cssText = 'border-radius:3px;position:relative;z-index:3;display:block;';
    } else if(iconType==='photo') {
      iconEl = document.createElement('div');
      iconEl.style.cssText = 'font-size:16px;position:relative;z-index:3';
      iconEl.textContent = '📸';
    } else if(iconType==='fwc') {
      iconEl = document.createElement('div');
      iconEl.style.cssText = 'font-size:20px;position:relative;z-index:3';
      iconEl.textContent = '⭐';
    } else if(iconType==='coca') {
      iconEl = document.createElement('div');
      iconEl.style.cssText = 'font-size:18px;position:relative;z-index:3';
      iconEl.textContent = '🥤';
    } else {
      iconEl = document.createElement('div');
      iconEl.className = 'slot-silhouette';
      const h = document.createElement('div'); h.className='slot-sil-head';
      const b = document.createElement('div'); b.className='slot-sil-body';
      iconEl.append(h,b);
    }
  }

  /* Label */
  const lbl = document.createElement('div');
  lbl.className = 'slot-label'; // uses .slot-lbl but let's use consistent name
  lbl.style.cssText = 'font-family:var(--font-cond);font-size:7px;font-weight:600;color:rgba(0,0,0,0.22);text-align:center;letter-spacing:.03em;position:relative;z-index:3';
  if(got) lbl.style.color = 'rgba(255,255,255,0.65)';
  lbl.textContent = slotLabel;

  div.append(num, iconEl, lbl);

  if(got) {
    const chk = document.createElement('div');
    chk.className = 'slot-check';
    chk.textContent = '✓';
    div.appendChild(chk);
  }

  div.addEventListener('click', ()=>toggle(id));
  return div;
}

/* ── Build team spread ───────────────────── */
function buildTeam(team) {
  const col  = team.col;
  const code = team.code;
  const ids  = Array.from({length:20},(_,i)=>`${code}${String(i+1).padStart(2,'0')}`);
  const got  = ids.filter(id=>obtained.has(id)).length;
  const done = got===20;
  const pn   = PAGES.findIndex(p=>p.id===code); // 1-based page number relative

  /* LEFT PAGE */
  const L = document.createElement('div');
  L.className = 'page page-l';

  // Header
  const hdr = document.createElement('div');
  hdr.className = 'phdr-team';
  hdr.style.background = col;

  const hdrFlag = mkFlag(team.fi, 'phdr-team-flag fi-lg');
  const hdrText = document.createElement('div');
  hdrText.className = 'phdr-team-text';
  hdrText.innerHTML = `<div class="phdr-team-we">WE ARE</div><div class="phdr-team-name">${team.name.toUpperCase()}</div>`;
  const hdrBadge = document.createElement('div');
  hdrBadge.className = 'phdr-team-badge';
  hdrBadge.innerHTML = `<span class="phdr-team-grp">GRP ${team.grp}</span><span class="phdr-team-prog" style="color:${done?'#b2ffb8':'rgba(255,255,255,0.85)'}">${got}/20</span>`;
  hdr.append(hdrFlag, hdrText, hdrBadge);

  // Left grid: S1–S10
  const gl = document.createElement('div');
  gl.className = 'sgrid sgrid-tl';

  const leftDef = [
    [1,'s1','badge','Brasão'],
    [2,'s2','player',`Jog. 2`],
    [3,'s3','player',`Jog. 3`],
    [4,'s4','player',`Jog. 4`],
    [5,'s5','player',`Jog. 5`],
    [6,'s6','player',`Jog. 6`],
    [7,'s7','player',`Jog. 7`],
    [8,'s8','player',`Jog. 8`],
    [9,'s9','player',`Jog. 9`],
    [10,'s10','player',`Jog. 10`],
  ];

  leftDef.forEach(([n,area,itype,slbl])=>{
    const id = `${code}${String(n).padStart(2,'0')}`;
    const slot = mkSlot(id, `${code} ${n}`, '', itype, slbl, col, area);
    gl.appendChild(slot);
  });

  // Page number
  const pnL = document.createElement('div');
  pnL.className = 'page-num page-num-l';
  pnL.textContent = `${pn*2-1}`;

  L.append(hdr, gl, pnL);

  /* RIGHT PAGE */
  const R = document.createElement('div');
  R.className = 'page page-r';

  const spacer = document.createElement('div');
  spacer.className = 'phdr-spacer';

  const gr = document.createElement('div');
  gr.className = 'sgrid sgrid-tr';

  const rightDef = [
    [11,'s11','player',`Jog. 11`],
    [12,'s12','player',`Jog. 12`],
    [13,'s13','photo','Foto Equipe'],
    [14,'s14','player',`Jog. 14`],
    [15,'s15','player',`Jog. 15`],
    [16,'s16','player',`Jog. 16`],
    [17,'s17','player',`Jog. 17`],
    [18,'s18','player',`Jog. 18`],
    [19,'s19','player',`Jog. 19`],
    [20,'s20','player',`Jog. 20`],
  ];

  rightDef.forEach(([n,area,itype,slbl])=>{
    const id = `${code}${String(n).padStart(2,'0')}`;
    const slot = mkSlot(id, `${code} ${n}`, '', itype, slbl, col, area);
    gr.appendChild(slot);
  });

  const grpTeams = TEAMS.filter(t=>t.grp===team.grp);
  const gc = document.createElement('div');
  gc.className = 'grp-card';
  gc.style.gridArea = 'grp';

  const gcLbl = document.createElement('div');
  gcLbl.className = 'grp-card-label';
  gcLbl.textContent = `GRUPO ${team.grp}`;

  const gcFlags = document.createElement('div');
  gcFlags.className = 'grp-flags';
  grpTeams.forEach(t=>{
    const f = mkFlag(t.fi, 'grp-flag fi' + (t.code===code?' active':''));
    f.title = t.name;
    gcFlags.appendChild(f);
  });

  gc.append(gcLbl, gcFlags);
  gr.appendChild(gc);

  const pnR = document.createElement('div');
  pnR.className = 'page-num page-num-r';
  pnR.textContent = `${pn*2}`;

  R.append(spacer, gr, pnR);

  return [L, R];
}

/* ── Build special spread ─────────────────── */
function buildSpecial(sp) {
  const ids   = sp.stickers.map(s=>s.id);
  const got   = ids.filter(id=>obtained.has(id)).length;
  const half  = Math.ceil(sp.stickers.length / 2);
  const leftS  = sp.stickers.slice(0, half);
  const rightS = sp.stickers.slice(half);

  function makeSide(stickers, isLeft) {
    const P = document.createElement('div');
    P.className = 'page ' + (isLeft?'page-l':'page-r');

    if(isLeft) {
      const hdr = document.createElement('div');
      hdr.className = 'phdr-special';
      hdr.innerHTML = `
        <div class="phdr-special-eyebrow">${sp.eyebrow}</div>
        <div class="phdr-special-title">${sp.icon} ${sp.label.toUpperCase()}</div>
        <div class="phdr-special-sub">
          <span>FIFA World Cup 2026™</span>
          <span>${got}/${sp.stickers.length}</span>
        </div>`;
      P.appendChild(hdr);
    } else {
      const sp2 = document.createElement('div');
      sp2.className = 'phdr-spacer';
      P.appendChild(sp2);
    }

    const grid = document.createElement('div');
    grid.className = 'sgrid sgrid-sp';

    stickers.forEach(s=>{
      grid.appendChild(mkSlot(s.id, s.lbl, s.type, s.type, s.type==='fwc'?'Especial':'Coca-Cola', null, null));
    });

    P.appendChild(grid);
    return P;
  }

  return [makeSide(leftS,true), makeSide(rightS,false)];
}

/* ── Selector ────────────────────────────── */
function buildSelector() {
  const inner = document.getElementById('selInner');
  inner.innerHTML = '';

  // Special pages
  const sh = document.createElement('div');
  sh.className = 'sel-section-hd';
  sh.textContent = 'PÁGINAS ESPECIAIS';
  inner.appendChild(sh);

  const sr = document.createElement('div');
  sr.className = 'sel-specials';
  PAGES.forEach((p,i)=>{
    if(p.type==='team') return;
    const got = pageStickerIds(p).filter(id=>obtained.has(id)).length;
    const tot = pageStickerIds(p).length;
    const btn = document.createElement('button');
    btn.className = 'sel-sp-btn' + (i===curPage?' active':'');
    const pr = document.createElement('span');
    pr.className = 'sel-sp-prog';
    pr.textContent = `${got}/${tot}`;
    btn.innerHTML = `${p.icon} ${p.label} `;
    btn.appendChild(pr);
    btn.addEventListener('click',()=>{ curPage=i; selOpen=false; render(); });
    sr.appendChild(btn);
  });
  inner.appendChild(sr);

  // Teams by group
  const th = document.createElement('div');
  th.className = 'sel-section-hd';
  th.textContent = 'SELEÇÕES';
  inner.appendChild(th);

  'ABCDEFGHIJKL'.split('').forEach(g=>{
    const row = document.createElement('div');
    row.className = 'sel-grp-row';
    const lbl = document.createElement('div');
    lbl.className = 'sel-grp-lbl';
    lbl.textContent = 'GRP '+g;
    row.appendChild(lbl);

    const wrap = document.createElement('div');
    wrap.className = 'sel-teams';

    TEAMS.filter(t=>t.grp===g).forEach(t=>{
      const pi  = PAGES.findIndex(p=>p.id===t.code);
      const got = pageStickerIds(PAGES[pi]).filter(id=>obtained.has(id)).length;
      const done = got===20;

      const btn = document.createElement('button');
      btn.className = 'sel-t' + (pi===curPage?' active':'');
      btn.title = t.name;

      const f = mkFlag(t.fi, 'sel-t-flag fi');
      const p2 = document.createElement('div');
      p2.className = 'sel-t-prog' + (done?' done':'');
      p2.textContent = `${got}/20`;

      btn.append(f,p2);
      btn.addEventListener('click',()=>{ curPage=pi; selOpen=false; render(); });
      wrap.appendChild(btn);
    });

    row.appendChild(wrap);
    inner.appendChild(row);
  });
}

/* ── Main render ──────────────────────────── */
function render() {
  const page = PAGES[curPage];
  const isTeam = page.type==='team';
  const sids = pageStickerIds(page);
  const got  = sids.filter(id=>obtained.has(id)).length;
  const tot  = sids.length;
  const pct  = Math.round(obtained.size/TOTAL*100);

  /* HUD */
  document.getElementById('hudGot').textContent   = obtained.size;
  document.getElementById('hudTotal').textContent = TOTAL;
  document.getElementById('hudPct').textContent   = pct+'%';
  document.getElementById('hudFill').style.width  = pct+'%';

  /* Nav */
  document.getElementById('btnPrev').disabled = curPage===0;
  document.getElementById('btnNext').disabled = curPage===PAGES.length-1;

  /* Picker button */
  const cpFlagEl = document.getElementById('cpFlag');
  if(isTeam) {
    cpFlagEl.className = `fi fi-${page.team.fi} cp-flag fi-md`;
    document.getElementById('cpName').textContent = page.team.name;
    document.getElementById('cpMeta').textContent = `Grupo ${page.team.grp} · ${got}/${tot}`;
  } else {
    cpFlagEl.className = 'cp-flag';
    cpFlagEl.style.cssText = 'font-size:24px;width:auto;height:auto;box-shadow:none;background:none;';
    cpFlagEl.textContent = page.icon;
    document.getElementById('cpName').textContent = page.label;
    document.getElementById('cpMeta').textContent = `${got}/${tot} figurinhas`;
  }
  document.getElementById('cpChevron').textContent = selOpen?'▲':'▼';
  document.getElementById('btnPicker').classList.toggle('open', selOpen);
  document.getElementById('selectorPanel').classList.toggle('open', selOpen);
  if(selOpen) buildSelector();

  /* Spread */
  const album = document.getElementById('album');
  // Keep spine, rebuild left/right
  const oldL = document.getElementById('pageL');
  const oldR = document.getElementById('pageR');

  let newL, newR;
  if(isTeam) {
    [newL, newR] = buildTeam(page.team);
  } else {
    [newL, newR] = buildSpecial(page);
  }

  newL.id = 'pageL';
  newR.id = 'pageR';

  oldL.replaceWith(newL);
  oldR.replaceWith(newR);
}

/* ── Events ─────────────────────────────── */
document.getElementById('btnPrev').addEventListener('click', ()=>{
  if(curPage>0){ curPage--; selOpen=false; render(); }
});
document.getElementById('btnNext').addEventListener('click', ()=>{
  if(curPage<PAGES.length-1){ curPage++; selOpen=false; render(); }
});
document.getElementById('btnPicker').addEventListener('click', ()=>{
  selOpen=!selOpen; render();
});

document.getElementById('btnMark').addEventListener('click', ()=>{
  pageStickerIds(PAGES[curPage]).forEach(id=>obtained.add(id));
  save(); render();
});
document.getElementById('btnUnmark').addEventListener('click', ()=>{
  pageStickerIds(PAGES[curPage]).forEach(id=>obtained.delete(id));
  save(); render();
});

document.getElementById('resetBtn').addEventListener('click', ()=>{
  document.getElementById('confirmOverlay').style.display='flex';
});
document.getElementById('confirmYes').addEventListener('click', ()=>{
  obtained.clear(); save();
  document.getElementById('confirmOverlay').style.display='none';
  render();
});
document.getElementById('confirmNo').addEventListener('click', ()=>{
  document.getElementById('confirmOverlay').style.display='none';
});

document.addEventListener('click', e=>{
  const wrap = document.getElementById('pickerWrap');
  if(selOpen && !wrap.contains(e.target)){ selOpen=false; render(); }
});

document.addEventListener('keydown', e=>{
  if(e.key==='ArrowLeft'  && curPage>0){ curPage--; selOpen=false; render(); }
  if(e.key==='ArrowRight' && curPage<PAGES.length-1){ curPage++; selOpen=false; render(); }
  if(e.key==='Escape' && selOpen){ selOpen=false; render(); }
});

/* ── Init ───────────────────────────────── */
load();
render();