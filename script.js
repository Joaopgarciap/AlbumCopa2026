/* ════════════════════════════════════════════
   Álbum Copa 2026 — script.js
════════════════════════════════════════════ */

const SK = 'copa26-v6';

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

const SPECIALS = [
  { id:'intro',   label:'Página Inicial',      icon:'🌟', eyebrow:'ABERTURA',
    stickers: Array.from({length:9},(_,i)=>({id:`FWC0${i}`,lbl:`FWC ${i}`,type:'fwc'})) },
  { id:'history', label:'World Cup History',   icon:'🏆', eyebrow:'FIFA WORLD CUP HISTORY',
    stickers: Array.from({length:11},(_,i)=>({id:`FWC${i+9}`,lbl:`FWC ${i+9}`,type:'fwc'})) },
  { id:'coca',    label:'Coca-Cola',            icon:'🥤', eyebrow:'FIGURINHAS COCA-COLA',
    stickers: Array.from({length:14},(_,i)=>({id:`CC${String(i+1).padStart(2,'0')}`,lbl:`CC ${i+1}`,type:'coca'})) },
];

const PAGES = [
  SPECIALS[0],
  ...TEAMS.map(t=>({id:t.code, type:'team', team:t})),
  SPECIALS[1],
  SPECIALS[2],
];

function pageStickerIds(page) {
  if(page.type==='team') return Array.from({length:20},(_,i)=>`${page.team.code}${String(i+1).padStart(2,'0')}`);
  return page.stickers.map(s=>s.id);
}

const TOTAL = PAGES.reduce((s,p)=>s+pageStickerIds(p).length,0);

/* ── State ──────────────────────────────── */
let obtained    = new Set();
let duplicates  = new Set(); // ids marked as duplicate
let curPage     = PAGES.findIndex(p=>p.id==='BRA');
let dropOpen    = false;
let profile     = { name:'', city:'' };
let userLat     = null;
let userLng     = null;

/* ── Persist ─────────────────────────────── */
function save() {
  try {
    localStorage.setItem(SK, JSON.stringify({
      obtained: [...obtained],
      duplicates: [...duplicates],
      profile,
    }));
  } catch(e){}
}

function load() {
  try {
    const raw = localStorage.getItem(SK);
    if(!raw) return;
    const d = JSON.parse(raw);
    if(Array.isArray(d.obtained))   obtained   = new Set(d.obtained);
    if(Array.isArray(d.duplicates)) duplicates = new Set(d.duplicates);
    if(d.profile) profile = d.profile;
  } catch(e){}
}

/* ── Flag helper ─────────────────────────── */
function mkFlag(fi, cls) {
  const s = document.createElement('span');
  s.className = `fi fi-${fi}${cls?' '+cls:''}`;
  return s;
}

/* ── Toggle sticker ─────────────────────── */
function toggle(id) {
  if(obtained.has(id)) {
    obtained.delete(id);
    duplicates.delete(id); // can't be dup if not obtained
  } else {
    obtained.add(id);
  }
  save(); renderAlbum(); updateBadges(); renderTrocas(); renderVendas();
}

/* ── Toggle duplicate ────────────────────── */
function toggleDup(id) {
  if(!obtained.has(id)) return; // must be obtained first
  if(duplicates.has(id)) duplicates.delete(id);
  else duplicates.add(id);
  save(); renderAlbum(); updateBadges(); renderTrocas(); renderVendas();
}

/* ─────────────────────────────────────────
   ALBUM RENDERING
───────────────────────────────────────────*/
function mkSlot(id, numLabel, extraClass, iconType, slotLabel, col, area) {
  const got = obtained.has(id);
  const dup = duplicates.has(id);

  const div = document.createElement('div');
  div.className = 'slot'+(extraClass?' '+extraClass:'')+(got?' got':'')+(dup?' dup':'');
  if(area) div.style.gridArea = area;
  if(col) div.style.setProperty('--tc', col);

  const num = document.createElement('div');
  num.className = 'slot-num';
  num.textContent = numLabel;

  let icon;
  if(!got) {
    if(iconType==='badge') {
      icon = document.createElement('div'); icon.className='slot-shield';
    } else if(iconType==='photo') {
      icon = document.createElement('div'); icon.className='slot-cam'; icon.textContent='📷';
    } else if(iconType==='fwc') {
      icon = document.createElement('div'); icon.className='slot-star'; icon.textContent='⭐';
    } else if(iconType==='coca') {
      icon = document.createElement('div'); icon.className='slot-cola'; icon.textContent='🥤';
    } else {
      icon = document.createElement('div'); icon.className='slot-sil';
      const h=document.createElement('div'); h.className='slot-sil-h';
      const b=document.createElement('div'); b.className='slot-sil-b';
      icon.append(h,b);
    }
  } else {
    const pg = PAGES[curPage];
    if(iconType==='badge' && pg.type==='team') {
      icon = mkFlag(pg.team.fi, 'fi-slot');
    } else if(iconType==='photo') {
      icon = document.createElement('div');
      icon.style.cssText='font-size:14px;position:relative;z-index:3';
      icon.textContent='📸';
    } else if(iconType==='fwc') {
      icon = document.createElement('div');
      icon.style.cssText='font-size:18px;position:relative;z-index:3';
      icon.textContent='⭐';
    } else if(iconType==='coca') {
      icon = document.createElement('div');
      icon.style.cssText='font-size:16px;position:relative;z-index:3';
      icon.textContent='🥤';
    } else {
      icon = document.createElement('div'); icon.className='slot-sil';
      const h=document.createElement('div'); h.className='slot-sil-h';
      const b=document.createElement('div'); b.className='slot-sil-b';
      icon.append(h,b);
    }
  }

  const lbl = document.createElement('div');
  lbl.className = 'slot-lbl';
  lbl.style.cssText='font-family:var(--font-c);font-size:6.5px;font-weight:600;letter-spacing:.03em;text-align:center;position:relative;z-index:3;';
  lbl.style.color = got ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.2)';
  if(iconType==='fwc')  { lbl.style.color = got ? 'rgba(255,255,255,0.7)' : 'rgba(160,110,0,0.5)'; }
  if(iconType==='coca') { lbl.style.color = got ? 'rgba(255,255,255,0.7)' : 'rgba(180,0,0,0.4)'; }
  lbl.textContent = slotLabel;

  div.append(num, icon, lbl);

  if(got) {
    const chk = document.createElement('div'); chk.className='slot-check'; chk.textContent='✓'; div.appendChild(chk);
  }

  div.addEventListener('click', ()=>toggle(id));
  div.addEventListener('contextmenu', e=>{ e.preventDefault(); toggleDup(id); });
  div.title = got ? (dup ? 'Repetida (clique direito para remover)' : 'Obtida — clique direito para marcar como repetida') : 'Clique para marcar como obtida';

  return div;
}

function buildTeam(team) {
  const col = team.col, code = team.code;
  const ids = Array.from({length:20},(_,i)=>`${code}${String(i+1).padStart(2,'0')}`);
  const got = ids.filter(id=>obtained.has(id)).length;
  const done = got===20;
  const pn = PAGES.findIndex(p=>p.id===code);

  /* LEFT PAGE */
  const L = document.createElement('div');
  L.className = 'book-page book-page-l';

  const hdr = document.createElement('div');
  hdr.className = 'phdr';
  hdr.style.background = col;
  const hflag = mkFlag(team.fi, 'fi fi-hdr phdr-flag');
  const htxt = document.createElement('div'); htxt.className='phdr-text';
  htxt.innerHTML=`<div class="phdr-we">WE ARE</div><div class="phdr-name">${team.name.toUpperCase()}</div>`;
  const hbadge = document.createElement('div'); hbadge.className='phdr-badge';
  hbadge.innerHTML=`<span class="phdr-grp">GRP ${team.grp}</span><span class="phdr-prog" style="color:${done?'#b2ffb8':'rgba(255,255,255,0.9)'}">${got}/20</span>`;
  hdr.append(hflag, htxt, hbadge);

  const gl = document.createElement('div'); gl.className='sgrid sgrid-tl';
  const leftDef=[
    [1,'s1','badge','Brasão'],[2,'s2','player','Jog. 2'],[3,'s3','player','Jog. 3'],
    [4,'s4','player','Jog. 4'],[5,'s5','player','Jog. 5'],[6,'s6','player','Jog. 6'],
    [7,'s7','player','Jog. 7'],[8,'s8','player','Jog. 8'],[9,'s9','player','Jog. 9'],
    [10,'s10','player','Jog. 10'],
  ];
  leftDef.forEach(([n,area,it,lbl])=>gl.appendChild(mkSlot(`${code}${String(n).padStart(2,'0')}`,`${code} ${n}`,'',it,lbl,col,area)));

  const pnL = document.createElement('div'); pnL.className='page-num page-num-l'; pnL.textContent=pn*2-1;
  L.append(hdr,gl,pnL);

  /* RIGHT PAGE */
  const R = document.createElement('div'); R.className='book-page book-page-r';
  const spacer = document.createElement('div'); spacer.className='phdr-spacer';
  const gr = document.createElement('div'); gr.className='sgrid sgrid-tr';
  const rightDef=[
    [11,'s11','player','Jog. 11'],[12,'s12','player','Jog. 12'],[13,'s13','photo','Foto Equipe'],
    [14,'s14','player','Jog. 14'],[15,'s15','player','Jog. 15'],[16,'s16','player','Jog. 16'],
    [17,'s17','player','Jog. 17'],[18,'s18','player','Jog. 18'],[19,'s19','player','Jog. 19'],
    [20,'s20','player','Jog. 20'],
  ];
  rightDef.forEach(([n,area,it,lbl])=>gr.appendChild(mkSlot(`${code}${String(n).padStart(2,'0')}`,`${code} ${n}`,'',it,lbl,col,area)));

  // Group card
  const gc = document.createElement('div'); gc.className='grp-card'; gc.style.gridArea='grp';
  const gcl = document.createElement('div'); gcl.className='grp-card-lbl'; gcl.textContent=`GRUPO ${team.grp}`;
  const gcf = document.createElement('div'); gcf.className='grp-flags';
  TEAMS.filter(t=>t.grp===team.grp).forEach(t=>{
    const f = mkFlag(t.fi, `fi grp-flag fi-grp${t.code===code?' active':''}`);
    f.title = t.name; gcf.appendChild(f);
  });
  gc.append(gcl,gcf); gr.appendChild(gc);

  const pnR = document.createElement('div'); pnR.className='page-num page-num-r'; pnR.textContent=pn*2;
  R.append(spacer,gr,pnR);

  return [L,R];
}

function buildSpecial(sp) {
  const ids = sp.stickers.map(s=>s.id);
  const got = ids.filter(id=>obtained.has(id)).length;
  const half = Math.ceil(sp.stickers.length/2);

  function makeHalf(stickers, isLeft) {
    const P = document.createElement('div');
    P.className='book-page '+(isLeft?'book-page-l':'book-page-r');
    if(isLeft){
      const hdr=document.createElement('div'); hdr.className='phdr-special';
      hdr.innerHTML=`<div class="phdr-sp-eyebrow">${sp.eyebrow}</div><div class="phdr-sp-title">${sp.icon} ${sp.label.toUpperCase()}</div><div class="phdr-sp-sub"><span>FIFA World Cup 2026™</span><span>${got}/${sp.stickers.length}</span></div>`;
      P.appendChild(hdr);
    } else {
      const s=document.createElement('div'); s.className='phdr-spacer'; P.appendChild(s);
    }
    const grid=document.createElement('div'); grid.className='sgrid sgrid-sp';
    stickers.forEach(s=>grid.appendChild(mkSlot(s.id,s.lbl,s.type,s.type,s.type==='fwc'?'Especial':'Coca-Cola',null,null)));
    P.appendChild(grid);
    return P;
  }

  return [makeHalf(sp.stickers.slice(0,half),true), makeHalf(sp.stickers.slice(half),false)];
}

function renderAlbum() {
  const page  = PAGES[curPage];
  const isTeam = page.type==='team';
  const sids  = pageStickerIds(page);
  const got   = sids.filter(id=>obtained.has(id)).length;
  const tot   = sids.length;
  const pct   = Math.round(obtained.size/TOTAL*100);

  // HUD
  document.getElementById('hudGot').textContent  = obtained.size;
  document.getElementById('hudTotal').textContent = TOTAL;
  document.getElementById('hudFill').style.width  = pct+'%';
  document.getElementById('hudPct').textContent   = pct+'%';

  // Prev/Next
  document.getElementById('btnPrev').disabled = curPage===0;
  document.getElementById('btnNext').disabled = curPage===PAGES.length-1;

  // Picker button
  const fw = document.getElementById('pickerFlagWrap');
  fw.innerHTML='';
  if(isTeam){
    fw.appendChild(mkFlag(page.team.fi, 'fi fi-pick'));
    document.getElementById('pickerName').textContent = page.team.name;
    document.getElementById('pickerMeta').textContent = `Grupo ${page.team.grp} · ${got}/${tot}`;
  } else {
    const sp=document.createElement('span'); sp.style.cssText='font-size:22px;'; sp.textContent=page.icon;
    fw.appendChild(sp);
    document.getElementById('pickerName').textContent = page.label;
    document.getElementById('pickerMeta').textContent = `${got}/${tot} figurinhas`;
  }
  document.getElementById('pickerProg').textContent = `${got}/${tot}`;
  document.getElementById('pickerChevron').textContent = dropOpen?'▲':'▼';
  document.getElementById('pickerBtn').classList.toggle('open', dropOpen);
  document.getElementById('pickerDropdown').classList.toggle('open', dropOpen);
  if(dropOpen) buildDropdown();

  // Book pages
  const book = document.getElementById('book');
  const oldL = document.getElementById('pageL');
  const oldR = document.getElementById('pageR');
  let newL, newR;
  if(isTeam) [newL,newR] = buildTeam(page.team);
  else [newL,newR] = buildSpecial(page);
  newL.id='pageL'; newR.id='pageR';
  oldL.replaceWith(newL); oldR.replaceWith(newR);
}

/* ─── Dropdown ───────────────────────────── */
function buildDropdown() {
  const inner = document.createElement('div');
  inner.className = 'pd-inner';

  // Specials
  const sh = document.createElement('div'); sh.className='pd-section-hd'; sh.textContent='ESPECIAIS';
  const sr = document.createElement('div'); sr.className='pd-specials';
  PAGES.forEach((p,i)=>{
    if(p.type==='team') return;
    const g=pageStickerIds(p).filter(id=>obtained.has(id)).length;
    const t=pageStickerIds(p).length;
    const btn=document.createElement('button');
    btn.className='pd-sp-btn'+(i===curPage?' active':'');
    const pr=document.createElement('span'); pr.className='pd-sp-prog'; pr.textContent=`${g}/${t}`;
    btn.innerHTML=`${p.icon} ${p.label} `; btn.appendChild(pr);
    btn.addEventListener('click',()=>{ curPage=i; dropOpen=false; renderAlbum(); });
    sr.appendChild(btn);
  });
  inner.append(sh,sr);

  // Teams
  const th=document.createElement('div'); th.className='pd-section-hd'; th.textContent='SELEÇÕES';
  inner.appendChild(th);

  'ABCDEFGHIJKL'.split('').forEach(g=>{
    const row=document.createElement('div'); row.className='pd-grp-row';
    const lbl=document.createElement('div'); lbl.className='pd-grp-lbl'; lbl.textContent='GRP '+g;
    const wrap=document.createElement('div'); wrap.className='pd-teams';
    TEAMS.filter(t=>t.grp===g).forEach(t=>{
      const pi=PAGES.findIndex(p=>p.id===t.code);
      const got=pageStickerIds(PAGES[pi]).filter(id=>obtained.has(id)).length;
      const done=got===20;
      const btn=document.createElement('button');
      btn.className='pd-team'+(pi===curPage?' active':'');
      btn.title=t.name;
      const f=mkFlag(t.fi,'fi fi-sel pd-team-flag');
      const p2=document.createElement('div');
      p2.className='pd-team-prog'+(done?' done':'');
      p2.textContent=`${got}/20`;
      btn.append(f,p2);
      btn.addEventListener('click',()=>{ curPage=pi; dropOpen=false; renderAlbum(); });
      wrap.appendChild(btn);
    });
    row.append(lbl,wrap); inner.appendChild(row);
  });

  const dd=document.getElementById('pickerDropdown');
  dd.innerHTML='';
  dd.appendChild(inner);
}

/* ─── Trocas ─────────────────────────────── */
function renderTrocas() {
  const dupIds  = [...duplicates];
  const wantIds = PAGES.filter(p=>p.type==='team').flatMap(p=>pageStickerIds(p)).filter(id=>!obtained.has(id)).slice(0,60);

  document.getElementById('dupCount').textContent  = dupIds.length + ' figurinhas';
  document.getElementById('wantCount').textContent = wantIds.length + ' figurinhas';

  function buildChips(ids, cls) {
    const frag = document.createDocumentFragment();
    if(!ids.length) {
      const e=document.createElement('div'); e.className='empty-state';
      e.innerHTML='<span>📭</span><p>Nenhuma figurinha aqui ainda</p>';
      frag.appendChild(e); return frag;
    }
    ids.slice(0,80).forEach(id=>{
      const code = id.slice(0,-2);
      const t = TEAMS.find(t=>t.code===code);
      if(!t) return;
      const chip=document.createElement('div');
      chip.className='tc-chip '+cls;
      const f=mkFlag(t.fi,'fi tc-chip-flag'); f.style.cssText='width:18px;height:13px;border-radius:2px;';
      const txt=document.createElement('span'); txt.textContent=id;
      chip.append(f,txt);
      chip.title = cls==='tc-chip-dup' ? 'Clique para remover das repetidas' : t.name;
      if(cls==='tc-chip-dup') chip.addEventListener('click',()=>toggleDup(id));
      frag.appendChild(chip);
    });
    return frag;
  }

  const dl=document.getElementById('dupList');
  const wl=document.getElementById('wantList');
  dl.innerHTML=''; wl.innerHTML='';
  dl.appendChild(buildChips(dupIds,'tc-chip-dup'));
  wl.appendChild(buildChips(wantIds,'tc-chip-want'));
}

/* ─── Vendas ─────────────────────────────── */
function renderVendas() {
  const price = parseFloat(document.getElementById('defaultPrice').value)||2;
  const dupIds = [...duplicates];

  const saleList = document.getElementById('saleList');
  const totalRow = document.getElementById('saleTotalRow');
  const totalEl  = document.getElementById('saleTotal');

  saleList.innerHTML='';
  if(!dupIds.length) {
    saleList.innerHTML='<div class="empty-state"><span>💸</span><p>Marque figurinhas como repetidas na seção de Trocas para listá-las aqui</p></div>';
    totalRow.style.display='none';
    return;
  }

  const frag=document.createDocumentFragment();
  dupIds.forEach(id=>{
    const code=id.slice(0,-2);
    const t=TEAMS.find(t=>t.code===code);
    if(!t) return;
    const chip=document.createElement('div'); chip.className='sale-chip';
    const f=mkFlag(t.fi,'fi'); f.style.cssText='width:18px;height:13px;border-radius:2px;';
    const txt=document.createElement('span'); txt.textContent=id;
    const pr=document.createElement('span'); pr.style.cssText='margin-left:4px;opacity:.7;font-size:10px;'; pr.textContent=`R$${price.toFixed(2)}`;
    chip.append(f,txt,pr);
    frag.appendChild(chip);
  });
  saleList.appendChild(frag);

  totalRow.style.display='flex';
  totalEl.textContent=`R$ ${(dupIds.length*price).toFixed(2)}`;

  // Mock market
  renderMarket();
}

function renderMarket() {
  const ml=document.getElementById('marketList');
  const demoSellers=[
    { name:'Carlos M.', city:'São Paulo, SP', fi:'br', stickers:['BRA05','BRA11','ARG03','ARG07'], price:3.0 },
    { name:'João R.',   city:'Rio de Janeiro, RJ', fi:'br', stickers:['MEX01','MEX13','BRA15'], price:2.5 },
    { name:'Lucas S.',  city:'Belo Horizonte, MG', fi:'br', stickers:['ARG01','ARG20','FRA08','FRA12'], price:4.0 },
    { name:'Gabriel F.',city:'Curitiba, PR',        fi:'br', stickers:['ENG01','ENG13','POR07'], price:3.5 },
  ];
  ml.innerHTML='';
  demoSellers.forEach(s=>{
    const item=document.createElement('div'); item.className='market-item';
    const mh=document.createElement('div'); mh.className='mi-header';
    const mf=mkFlag(s.fi,'fi'); mf.style.cssText='width:20px;height:15px;border-radius:2px;flex-shrink:0;';
    const mn=document.createElement('div'); mn.className='mi-name'; mn.textContent=s.name;
    const mp=document.createElement('div'); mp.className='mi-price'; mp.textContent=`R$${s.price.toFixed(2)} /fig`;
    mh.append(mf,mn,mp);
    const ms=document.createElement('div'); ms.className='mi-stickers';
    s.stickers.forEach(st=>{ const c=document.createElement('div'); c.className='mi-stk'; c.textContent=st; ms.appendChild(c); });
    const mc=document.createElement('div'); mc.className='mi-contact';
    const mu=document.createElement('div'); mu.className='mi-user'; mu.textContent=`📍 ${s.city}`;
    const mb=document.createElement('button'); mb.className='mi-btn'; mb.textContent='Contatar';
    mb.addEventListener('click',()=>alert(`Contato com ${s.name} (demo — sem backend)`));
    mc.append(mu,mb);
    item.append(mh,ms,mc);
    ml.appendChild(item);
  });
}

/* ─── Inner Circle ───────────────────────── */
const DEMO_NEARBY = [
  { name:'Carlos M.',  city:'São Paulo, SP',         dist:1.2,  has:['BRA05','BRA11','ARG03'],  wants:['BRA01','FRA07'], match:'gold'  },
  { name:'Fernanda L.',city:'São Paulo, SP',          dist:2.8,  has:['MEX01','ESP13'],           wants:['ARG01','BRA20'], match:'green' },
  { name:'Rafael T.',  city:'Santo André, SP',        dist:5.5,  has:['ARG01','ARG20','FRA08'],   wants:['BRA11','ESP03'], match:'blue'  },
  { name:'Ana P.',     city:'São Bernardo do Campo',  dist:7.1,  has:['BRA07','BRA14'],           wants:['MEX13'],        match:'green' },
  { name:'Lucas S.',   city:'Osasco, SP',             dist:3.3,  has:['ENG01','POR07'],           wants:['BRA05','BRA06'],match:'blue'  },
  { name:'Julia M.',   city:'Guarulhos, SP',          dist:8.4,  has:['FRA01','FRA13','BRA19'],   wants:['ARG07','ESP08'],match:'gold'  },
  { name:'Thiago B.',  city:'São Paulo, SP',          dist:0.9,  has:['MEX05','MEX11'],           wants:['BRA13'],        match:'green' },
  { name:'Camila R.',  city:'Diadema, SP',            dist:9.8,  has:['BRA03','ARG11'],           wants:['FRA01','FRA20'],match:'blue'  },
];

function renderInnerCircle(radiusKm) {
  const list = DEMO_NEARBY.filter(u=>u.dist<=radiusKm).sort((a,b)=>a.dist-b.dist);

  // Radar dots
  const dotsEl = document.getElementById('radarDots');
  dotsEl.innerHTML='';
  list.forEach(u=>{
    const angle = Math.random()*360 * (Math.PI/180);
    const r = (u.dist/radiusKm)*45; // % from center
    const x = 50 + r*Math.cos(angle);
    const y = 50 + r*Math.sin(angle);
    const dot=document.createElement('div');
    dot.className=`radar-dot radar-dot-${u.match==='gold'?'gold':u.match==='green'?'green':'blue'}`;
    dot.style.left=x+'%'; dot.style.top=y+'%';
    dot.title=u.name;
    dotsEl.appendChild(dot);
  });

  // Nearby cards
  const listEl=document.getElementById('icNearbyList');
  listEl.innerHTML='';

  if(!list.length){
    listEl.innerHTML='<div class="empty-state"><span>🔍</span><p>Nenhum colecionador encontrado neste raio. Aumente o raio.</p></div>';
    return;
  }

  list.forEach(u=>{
    const card=document.createElement('div');
    card.className=`nearby-card match-${u.match}`;

    const av=document.createElement('div');
    av.className=`nc-avatar ${u.match}`;
    av.textContent=u.name[0];

    const info=document.createElement('div'); info.className='nc-info';
    const nm=document.createElement('div'); nm.className='nc-name'; nm.textContent=u.name;
    const cy=document.createElement('div'); cy.className='nc-city'; cy.textContent=`📍 ${u.city}`;

    const badges=document.createElement('div'); badges.className='nc-match-row';
    if(u.has.length){
      const b=document.createElement('span'); b.className='nc-badge nc-badge-green';
      b.textContent=`✓ Tem ${u.has.length} das suas faltantes`; badges.appendChild(b);
    }
    if(u.wants.length){
      const b=document.createElement('span'); b.className='nc-badge nc-badge-blue';
      b.textContent=`⭐ Quer ${u.wants.length} das suas repetidas`; badges.appendChild(b);
    }
    if(u.match==='gold'){
      const b=document.createElement('span'); b.className='nc-badge nc-badge-gold';
      b.textContent='🔥 Troca Perfeita!'; badges.appendChild(b);
    }

    const act=document.createElement('div'); act.className='nc-action';
    const btn=document.createElement('button'); btn.className='nc-contact-btn';
    btn.textContent='💬 Solicitar Troca';
    btn.addEventListener('click',()=>alert(`Enviando solicitação de troca para ${u.name}...\n(Funcionalidade com backend necessária para envio real)`));
    act.appendChild(btn);

    info.append(nm,cy,badges,act);

    const dist=document.createElement('div'); dist.className='nc-dist'; dist.textContent=`${u.dist.toFixed(1)} km`;

    card.append(av,info,dist);
    listEl.appendChild(card);
  });
}

/* ─── Nav badges ─────────────────────────── */
function updateBadges() {
  const pct = Math.round(obtained.size/TOTAL*100);
  document.getElementById('navAlbumBadge').textContent  = pct+'%';
  document.getElementById('navTrocasBadge').textContent = duplicates.size;
  document.getElementById('navVendasBadge').textContent = duplicates.size;
}

/* ─── Section switching ─────────────────── */
function switchSection(id) {
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.snav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(`section${id.charAt(0).toUpperCase()+id.slice(1)}`).classList.add('active');
  document.querySelector(`[data-section="${id}"]`).classList.add('active');

  if(id==='trocas') renderTrocas();
  if(id==='vendas') renderVendas();
  if(id==='circle') {
    const r=parseInt(document.getElementById('radiusSlider').value)||10;
    document.getElementById('icRadius').textContent=`raio: ${r} km`;
    renderInnerCircle(r);
    if(profile.name) {
      document.getElementById('icName').value=profile.name;
      document.getElementById('icCity').value=profile.city;
    }
  }
}

/* ─── Profile ────────────────────────────── */
function updateProfileUI() {
  if(profile.name) {
    document.getElementById('spName').textContent = profile.name;
    document.getElementById('spCity').textContent = profile.city||'Sem cidade';
    document.getElementById('spAvatar').textContent = profile.name[0].toUpperCase();
  }
}

/* ─── Events ─────────────────────────────── */
function bindEvents() {
  document.getElementById('btnPrev').addEventListener('click',()=>{ if(curPage>0){curPage--;dropOpen=false;renderAlbum();} });
  document.getElementById('btnNext').addEventListener('click',()=>{ if(curPage<PAGES.length-1){curPage++;dropOpen=false;renderAlbum();} });
  document.getElementById('pickerBtn').addEventListener('click',()=>{ dropOpen=!dropOpen; renderAlbum(); });

  document.getElementById('btnMark').addEventListener('click',()=>{
    pageStickerIds(PAGES[curPage]).forEach(id=>obtained.add(id));
    save(); renderAlbum(); updateBadges(); renderTrocas(); renderVendas();
  });
  document.getElementById('btnUnmark').addEventListener('click',()=>{
    pageStickerIds(PAGES[curPage]).forEach(id=>{ obtained.delete(id); duplicates.delete(id); });
    save(); renderAlbum(); updateBadges(); renderTrocas(); renderVendas();
  });

  document.getElementById('resetBtn').addEventListener('click',()=>{
    document.getElementById('confirmModal').style.display='flex';
  });
  document.getElementById('confirmYes').addEventListener('click',()=>{
    obtained.clear(); duplicates.clear(); save();
    document.getElementById('confirmModal').style.display='none';
    renderAlbum(); updateBadges(); renderTrocas(); renderVendas();
  });
  document.getElementById('confirmNo').addEventListener('click',()=>{
    document.getElementById('confirmModal').style.display='none';
  });

  // Nav
  document.querySelectorAll('.snav-btn').forEach(btn=>{
    btn.addEventListener('click',()=>switchSection(btn.dataset.section));
  });

  // Profile sidebar click
  document.getElementById('sidebarProfile').addEventListener('click',()=>{
    document.getElementById('modalName').value = profile.name||'';
    document.getElementById('modalCity').value = profile.city||'';
    document.getElementById('profileModal').style.display='flex';
  });
  document.getElementById('modalSave').addEventListener('click',()=>{
    profile.name = document.getElementById('modalName').value.trim();
    profile.city = document.getElementById('modalCity').value.trim();
    save(); updateProfileUI();
    document.getElementById('profileModal').style.display='none';
  });
  document.getElementById('modalCancel').addEventListener('click',()=>{
    document.getElementById('profileModal').style.display='none';
  });

  // Close dropdown on outside click
  document.addEventListener('click',e=>{
    const pw=document.getElementById('pickerWrap');
    if(dropOpen && !pw.contains(e.target)){ dropOpen=false; renderAlbum(); }
  });

  // Keyboard nav
  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft'  && curPage>0)             { curPage--; dropOpen=false; renderAlbum(); }
    if(e.key==='ArrowRight' && curPage<PAGES.length-1){ curPage++; dropOpen=false; renderAlbum(); }
    if(e.key==='Escape'){ dropOpen=false; renderAlbum(); }
  });

  // Price change
  document.getElementById('defaultPrice').addEventListener('change',()=>renderVendas());

  // Radius slider
  document.getElementById('radiusSlider').addEventListener('input',e=>{
    const r=parseInt(e.target.value);
    document.getElementById('icRadius').textContent=`raio: ${r} km`;
    renderInnerCircle(r);
  });

  // IC save profile
  document.getElementById('icSaveProfile').addEventListener('click',()=>{
    const nm=document.getElementById('icName').value.trim();
    const cy=document.getElementById('icCity').value.trim();
    if(!nm){ alert('Digite seu nome'); return; }
    profile.name=nm; profile.city=cy; save(); updateProfileUI();
    document.getElementById('icLocStatus').textContent='⏳ Obtendo localização...';
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        pos=>{ userLat=pos.coords.latitude; userLng=pos.coords.longitude;
          document.getElementById('icLocStatus').textContent=`✅ Localização ativa — ${cy||'sua cidade'}`;
          renderInnerCircle(parseInt(document.getElementById('radiusSlider').value)||10);
        },
        ()=>{ document.getElementById('icLocStatus').textContent='⚠️ Localização negada — usando dados demo'; }
      );
    } else {
      document.getElementById('icLocStatus').textContent='⚠️ Geolocalização não suportada — usando dados demo';
    }
  });
}

/* ═══════════════════════════════════════════
   CENTRAL DO VENDEDOR
═══════════════════════════════════════════ */

/* ── Price state ─────────────────────────── */
let categoryPrices = { brasil:8, fwc:12, coca:5, other:3 };
let teamPriceOverrides = {}; // code → price

function getStickerPrice(id) {
  if(id.startsWith('FWC')) return categoryPrices.fwc;
  if(id.startsWith('CC'))  return categoryPrices.coca;
  const code = id.replace(/\d+$/, '');
  if(teamPriceOverrides[code] !== undefined) return teamPriceOverrides[code];
  if(code === 'BRA') return categoryPrices.brasil;
  return categoryPrices.other;
}

function getStickerCat(id) {
  if(id.startsWith('FWC')) return 'fwc';
  if(id.startsWith('CC'))  return 'coca';
  const code = id.replace(/\d+$/, '');
  if(code === 'BRA') return 'br';
  return 'other';
}

function getStickerLabel(id) {
  if(id.startsWith('FWC')) return `Cromo Especial ${id}`;
  if(id.startsWith('CC'))  return `Coca-Cola ${id.replace('CC','')}`;
  const code = id.replace(/\d+$/, '');
  const num  = parseInt(id.replace(/^\D+/,''));
  if(num === 1)  return 'Brasão';
  if(num === 13) return 'Foto da Equipe';
  return `Jogador ${num}`;
}

/* ── Name → Code mapping ─────────────────── */
const NAME_TO_CODE = (()=>{
  const m = {};
  // Exact 3-letter codes
  const codes = ['MEX','RSA','KOR','CZE','CAN','BIH','QAT','SUI','BRA','MAR','HAI','SCO',
    'USA','PAR','AUS','TUR','GER','CUW','CIV','ECU','NED','JPN','SWE','TUN','BEL','EGY',
    'IRN','NZL','ESP','CPV','KSA','URU','FRA','SEN','NOR','IRQ','ARG','ALG','AUT','JOR',
    'POR','COD','UZB','COL','ENG','CRO','GHA','PAN'];
  codes.forEach(c => m[c.toLowerCase()] = c);

  // Portuguese / common names (no accents)
  const aliases = {
    'mexico':'MEX','africa do sul':'RSA','africa sul':'RSA','africa':'RSA',
    'coreia do sul':'KOR','coreia':'KOR','korea':'KOR',
    'tchequia':'CZE','chequia':'CZE','republica tcheca':'CZE','tcheca':'CZE','czech':'CZE',
    'canada':'CAN',
    'bosnia':'BIH','bosnia e herzegovina':'BIH','bosnia herzegovina':'BIH',
    'catar':'QAT','qatar':'QAT',
    'suica':'SUI','suissa':'SUI','switzerland':'SUI',
    'brasil':'BRA','brazil':'BRA',
    'marrocos':'MAR','morocco':'MAR',
    'haiti':'HAI',
    'escocia':'SCO','escoccia':'SCO','scotland':'SCO',
    'estados unidos':'USA','eua':'USA','united states':'USA',
    'paraguai':'PAR','paraguay':'PAR',
    'australia':'AUS',
    'turquia':'TUR','turkey':'TUR',
    'alemanha':'GER','germany':'GER','alemanna':'GER',
    'curacao':'CUW','curazao':'CUW',
    'costa do marfim':'CIV','marfim':'CIV','ivory coast':'CIV','costa marfim':'CIV',
    'equador':'ECU','ecuador':'ECU',
    'paises baixos':'NED','holanda':'NED','netherlands':'NED','holand':'NED','holland':'NED',
    'japao':'JPN','japan':'JPN',
    'suecia':'SWE','sweden':'SWE',
    'tunisia':'TUN','tunizia':'TUN',
    'belgica':'BEL','belgium':'BEL',
    'egito':'EGY','egypt':'EGY',
    'ira':'IRN','iran':'IRN',
    'nova zelandia':'NZL','new zealand':'NZL','zelandia':'NZL','nova zeland':'NZL',
    'espanha':'ESP','spain':'ESP',
    'cabo verde':'CPV','caboverde':'CPV',
    'arabia saudita':'KSA','arabia':'KSA','saudi':'KSA','saudi arabia':'KSA','arabia saudi':'KSA',
    'uruguai':'URU','uruguay':'URU',
    'franca':'FRA','france':'FRA','franca do norte':'FRA',
    'senegal':'SEN',
    'noruega':'NOR','norway':'NOR',
    'iraque':'IRQ','iraq':'IRQ',
    'argentina':'ARG',
    'argelia':'ALG','algeria':'ALG',
    'austria':'AUT',
    'jordania':'JOR','jordan':'JOR',
    'portugal':'POR',
    'rd congo':'COD','congo':'COD','rdc':'COD','republica democratica congo':'COD',
    'uzbequistao':'UZB','uzbekistao':'UZB','uzbekistan':'UZB','uzbequistan':'UZB',
    'colombia':'COL',
    'inglaterra':'ENG','england':'ENG',
    'croacia':'CRO','croatia':'CRO',
    'gana':'GHA','ghana':'GHA',
    'panama':'PAN',
  };
  Object.assign(m, aliases);
  return m;
})();

/* Normalize string: lowercase + remove accents */
function norm(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

/* ── Text parser ─────────────────────────── */
function parseCustomerMessage(text) {
  // Step 1: normalize + split into candidate items
  const split = norm(text)
    .replace(/--+/g, '|')
    .replace(/[;,]/g, '|')
    .replace(/\s*\|\s*/g, '|')
    .split('|')
    .map(s => s.trim())
    .filter(Boolean);

  const found   = []; // { id, code, num, raw }
  const unknown = []; // raw strings that couldn't be parsed

  for(let chunk of split) {
    // A chunk may contain multiple items separated by spaces if they run together
    // e.g. "bra1 bra2 bra3" or "bra1" or "brasil 12"
    // Try to parse each chunk as one item first (handles "brasil 12", "bra 5")
    if(parseItem(chunk, found)) continue;

    // If failed, maybe multiple items stuck together
    // Try splitting on spaces and combine attempts
    const words = chunk.split(/\s+/);
    if(words.length > 1) {
      // Try each single word (handles "bra1")
      let consumed = 0;
      while(consumed < words.length) {
        let parsed = false;
        // Try combining 1,2,3 words
        for(let len = Math.min(3, words.length - consumed); len >= 1; len--) {
          const sub = words.slice(consumed, consumed + len).join(' ');
          if(parseItem(sub, found)) { consumed += len; parsed = true; break; }
        }
        if(!parsed) { unknown.push(words[consumed]); consumed++; }
      }
    } else {
      unknown.push(chunk);
    }
  }

  return { found, unknown };
}

function parseItem(raw, found) {
  raw = raw.trim();
  if(!raw) return false;

  // Pattern: (text)(optional space)(1 or 2 digit number)
  const m = raw.match(/^(.+?)\s*(\d{1,2})$/);
  if(!m) return false;

  const namePart = m[1].trim().replace(/\s+/g,' ');
  const num = parseInt(m[2]);

  // Try direct lookup
  let code = NAME_TO_CODE[namePart];
  // Also try without internal spaces
  if(!code) code = NAME_TO_CODE[namePart.replace(/\s/g,'')];

  if(!code) return false;
  if(num < 1 || num > 20) return false;

  const id = code + String(num).padStart(2,'0');
  found.push({ id, code, num, raw });
  return true;
}

/* ── Render vendedor section ─────────────── */
function initVendedor() {
  // Populate team select
  const sel = document.getElementById('overrideTeamSelect');
  TEAMS.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.code;
    opt.textContent = `${t.name} (${t.code})`;
    sel.appendChild(opt);
  });

  // Price summary
  updatePriceSummary();

  // Override toggle
  document.getElementById('overrideToggle').addEventListener('click', () => {
    const body = document.getElementById('overrideBody');
    const chev = document.querySelector('.vd-toggle-chevron');
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : 'block';
    chev.classList.toggle('open', !open);
  });

  // Add override
  document.getElementById('addOverrideBtn').addEventListener('click', () => {
    const code = document.getElementById('overrideTeamSelect').value;
    const price = parseFloat(document.getElementById('overridePrice').value);
    if(!code || isNaN(price)) return;
    teamPriceOverrides[code] = price;
    renderOverrides();
    updatePriceSummary();
  });

  // Category price changes
  ['Brasil','Fwc','Coca','Other'].forEach(cat => {
    document.getElementById(`prices${cat}`).addEventListener('change', e => {
      categoryPrices[cat.toLowerCase()] = parseFloat(e.target.value)||0;
      updatePriceSummary();
    });
  });

  // Parse button
  document.getElementById('parseBtn').addEventListener('click', () => {
    const txt = document.getElementById('customerMsg').value.trim();
    if(!txt) return;
    const { found, unknown } = parseCustomerMessage(txt);
    renderParserResult(found, unknown);
  });

  // Copy button
  document.getElementById('vdCopyBtn').addEventListener('click', () => {
    const txt = document.getElementById('vdResponseText').textContent;
    navigator.clipboard.writeText(txt).then(() => {
      const btn = document.getElementById('vdCopyBtn');
      btn.textContent = '✅ Copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = '📋 Copiar'; btn.classList.remove('copied'); }, 2000);
    });
  });
}

function updatePriceSummary() {
  const overCount = Object.keys(teamPriceOverrides).length;
  document.getElementById('overrideCount').textContent = overCount ? `${overCount} override(s)` : '';

  document.getElementById('vdPriceSummary').innerHTML = `
    <div class="vd-ps-row"><span>🇧🇷 Brasil (por fig.)</span><span>R$ ${categoryPrices.brasil.toFixed(2)}</span></div>
    <div class="vd-ps-row"><span>⭐ Cromos FWC (por fig.)</span><span>R$ ${categoryPrices.fwc.toFixed(2)}</span></div>
    <div class="vd-ps-row"><span>🥤 Coca-Cola (por fig.)</span><span>R$ ${categoryPrices.coca.toFixed(2)}</span></div>
    <div class="vd-ps-row"><span>🌍 Outros Times (por fig.)</span><span>R$ ${categoryPrices.other.toFixed(2)}</span></div>
    ${overCount ? `<div class="vd-ps-row" style="margin-top:4px;padding-top:4px;border-top:1px solid rgba(255,255,255,0.08)"><span>⚙️ Overrides ativos</span><span>${overCount} times</span></div>` : ''}
  `;
}

function renderOverrides() {
  const list = document.getElementById('overridesList');
  list.innerHTML = '';
  Object.entries(teamPriceOverrides).forEach(([code, price]) => {
    const t = TEAMS.find(t => t.code === code);
    if(!t) return;
    const chip = document.createElement('div'); chip.className = 'vd-override-chip';
    const f = mkFlag(t.fi, 'fi vd-ov-flag');
    const nm = document.createElement('span'); nm.className = 'vd-ov-name'; nm.textContent = t.name;
    const pr = document.createElement('span'); pr.className = 'vd-ov-price'; pr.textContent = `R$ ${price.toFixed(2)}`;
    const rm = document.createElement('span'); rm.className = 'vd-ov-remove'; rm.textContent = '×';
    rm.title = 'Remover override';
    rm.addEventListener('click', () => { delete teamPriceOverrides[code]; renderOverrides(); updatePriceSummary(); });
    chip.append(f, nm, pr, rm);
    list.appendChild(chip);
  });
  document.getElementById('overrideCount').textContent =
    Object.keys(teamPriceOverrides).length ? `${Object.keys(teamPriceOverrides).length} override(s)` : '';
}

function renderParserResult(found, unknown) {
  const output = document.getElementById('vdOutput');
  output.style.display = 'flex';

  // Dedupe
  const seen = new Set();
  const deduped = [];
  const dupes = [];
  found.forEach(item => {
    if(seen.has(item.id)) { dupes.push(item); } else { seen.add(item.id); deduped.push(item); }
  });

  // Items list
  const listEl = document.getElementById('vdItemsList');
  listEl.innerHTML = '';
  let total = 0;

  deduped.forEach(item => {
    const t = TEAMS.find(t => t.code === item.code);
    const price = getStickerPrice(item.id);
    const cat   = getStickerCat(item.id);
    const catLabels = { br:'Brasil', fwc:'FWC ⭐', coca:'Coca-Cola', other:'Outros' };
    total += price;

    const row = document.createElement('div'); row.className = 'vd-item-row';

    const flagEl = document.createElement('span'); flagEl.className = 'vd-item-flag';
    if(t) flagEl.appendChild(mkFlag(t.fi, 'fi'+(cat==='fwc'?' vd-item-fwc':'')));
    else   flagEl.textContent = '⭐';
    flagEl.querySelector('.fi') && (flagEl.querySelector('.fi').style.cssText = 'width:20px;height:15px;border-radius:2px;');

    const idEl = document.createElement('div'); idEl.className = 'vd-item-id'; idEl.textContent = item.id;
    const lblEl = document.createElement('div'); lblEl.className = 'vd-item-label'; lblEl.textContent = getStickerLabel(item.id);
    const catEl = document.createElement('div'); catEl.className = `vd-item-cat vd-item-cat-${cat}`; catEl.textContent = catLabels[cat];
    const prEl  = document.createElement('div'); prEl.className = 'vd-item-price'; prEl.textContent = `R$ ${price.toFixed(2)}`;

    row.append(flagEl, idEl, lblEl, catEl, prEl);
    listEl.appendChild(row);
  });

  // Total
  document.getElementById('vdTotalValue').textContent = `R$ ${total.toFixed(2).replace('.',',')}`;

  // Unknown
  const unkBox  = document.getElementById('vdUnknownBox');
  const unkList = document.getElementById('vdUnknownList');
  unkList.innerHTML = '';

  const allUnknown = [...unknown, ...dupes.map(d => `${d.raw} (repetida, ignorada)`)];
  if(allUnknown.length) {
    unkBox.style.display = 'block';
    allUnknown.forEach(u => {
      const c = document.createElement('div'); c.className = 'vd-unk-chip'; c.textContent = u;
      unkList.appendChild(c);
    });
  } else {
    unkBox.style.display = 'none';
  }

  // Build response text
  let lines = ['Olá! Segue o orçamento do seu pedido 😊\n'];
  lines.push('✅ *Figurinhas disponíveis:*');

  deduped.forEach(item => {
    const price = getStickerPrice(item.id);
    const lbl   = getStickerLabel(item.id);
    const t     = TEAMS.find(t => t.code === item.code);
    const tName = t ? t.name : item.code;
    lines.push(`• ${item.id} — ${tName} (${lbl}) ........... R$ ${price.toFixed(2).replace('.',',')}`);
  });

  lines.push('');
  lines.push(`💰 *TOTAL: R$ ${total.toFixed(2).replace('.',',')}*`);
  lines.push(`📦 Total de figurinhas: ${deduped.length}`);

  if(allUnknown.filter(u => !u.includes('repetida')).length) {
    lines.push('');
    lines.push('⚠️ *Não encontrei no meu álbum:*');
    allUnknown.filter(u => !u.includes('repetida')).forEach(u => lines.push(`• "${u}" — não identificada`));
  }

  lines.push('');
  lines.push('Me confirme o pedido e combinamos a entrega! 📬');

  document.getElementById('vdResponseText').textContent = lines.join('\n');
}

/* ─── Init ───────────────────────────────── */
load();
updateProfileUI();
renderAlbum();
updateBadges();
bindEvents();
initVendedor();

// Expose for inline onclick
window.switchSection = switchSection;