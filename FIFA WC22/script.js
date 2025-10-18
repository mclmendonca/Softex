/* ===================== DADOS ===================== */

/** Grupos da Copa 2022 (A–H) */
const GRUPOS = [
  { nome: 'Grupo A', times: ['Qatar','Ecuador','Senegal','Netherlands'] },
  { nome: 'Grupo B', times: ['England','Iran','USA','Wales'] },
  { nome: 'Grupo C', times: ['Argentina','Saudi Arabia','Mexico','Poland'] },
  { nome: 'Grupo D', times: ['France','Australia','Denmark','Tunisia'] },
  { nome: 'Grupo E', times: ['Spain','Costa Rica','Germany','Japan'] },
  { nome: 'Grupo F', times: ['Belgium','Canada','Morocco','Croatia'] },
  { nome: 'Grupo G', times: ['Brazil','Serbia','Switzerland','Cameroon'] },
  { nome: 'Grupo H', times: ['Portugal','Ghana','Uruguay','South Korea'] },
];

/** Gera o nome de arquivo da bandeira */
function flagFile(team){
  const map = {
    'Saudi Arabia':'saudi-arabia',
    'Costa Rica':'costa-rica',
    'South Korea':'south-korea',
    'Netherlands':'netherlands',
    'USA':'usa'
  };
  const normalized = map[team] || team.toLowerCase().replaceAll(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  return `assets/images/flags/${normalized}.png`;
}

/** Primeiros jogos (fase de grupos) – ordem cronológica simplificada */
const JOGOS = [
  { data:'2022-11-20', hora:'13:00', pais1:'Qatar', pais2:'Ecuador', grupo:'A' },
  { data:'2022-11-21', hora:'10:00', pais1:'England', pais2:'Iran', grupo:'B' },
  { data:'2022-11-21', hora:'13:00', pais1:'Senegal', pais2:'Netherlands', grupo:'A' },
  { data:'2022-11-21', hora:'16:00', pais1:'USA', pais2:'Wales', grupo:'B' },
  { data:'2022-11-22', hora:'07:00', pais1:'Argentina', pais2:'Saudi Arabia', grupo:'C' },
  { data:'2022-11-22', hora:'10:00', pais1:'Denmark', pais2:'Tunisia', grupo:'D' },
  { data:'2022-11-22', hora:'13:00', pais1:'Mexico', pais2:'Poland', grupo:'C' },
  { data:'2022-11-22', hora:'16:00', pais1:'France', pais2:'Australia', grupo:'D' },
  { data:'2022-11-23', hora:'10:00', pais1:'Germany', pais2:'Japan', grupo:'E' },
  { data:'2022-11-23', hora:'13:00', pais1:'Spain', pais2:'Costa Rica', grupo:'E' },
  { data:'2022-11-23', hora:'16:00', pais1:'Belgium', pais2:'Canada', grupo:'F' },
  { data:'2022-11-24', hora:'07:00', pais1:'Switzerland', pais2:'Cameroon', grupo:'G' },
  { data:'2022-11-24', hora:'10:00', pais1:'Uruguay', pais2:'South Korea', grupo:'H' },
  { data:'2022-11-24', hora:'13:00', pais1:'Portugal', pais2:'Ghana', grupo:'H' },
  { data:'2022-11-24', hora:'16:00', pais1:'Brazil', pais2:'Serbia', grupo:'G' },
  { data:'2022-11-25', hora:'10:00', pais1:'Wales', pais2:'Iran', grupo:'B' },
  { data:'2022-11-25', hora:'13:00', pais1:'Qatar', pais2:'Senegal', grupo:'A' },
  { data:'2022-11-25', hora:'16:00', pais1:'Netherlands', pais2:'Ecuador', grupo:'A' },
];

/* ===================== GRUPOS – Paginação (3 por página) ===================== */
const gruposListEl = document.getElementById('grupos-list');
const btnPrevGrupos = document.getElementById('btn-prev-grupos');
const btnNextGrupos = document.getElementById('btn-next-grupos');
const GRUPOS_POR_PAGINA = 3;
let paginaGrupos = 0;

function renderGrupos(){
  if(!gruposListEl) return;
  gruposListEl.innerHTML = '';
  const start = paginaGrupos * GRUPOS_POR_PAGINA;
  const slice = GRUPOS.slice(start, start + GRUPOS_POR_PAGINA);

  slice.forEach(grupo=>{
    const card = document.createElement('article');
    card.className = 'card-grupo';
    card.innerHTML = `
      <h3>${grupo.nome}</h3>
      <div class="lista-times">
        ${grupo.times.map(t=>`
          <div class="item-time">
            <img src="${flagFile(t)}" alt="Bandeira de ${t}">
            <span>${t}</span>
          </div>
        `).join('')}
      </div>
    `;
    gruposListEl.appendChild(card);
  });

  btnPrevGrupos.disabled = (paginaGrupos === 0);
  btnNextGrupos.disabled = ((paginaGrupos+1) * GRUPOS_POR_PAGINA >= GRUPOS.length);
}

if(btnPrevGrupos && btnNextGrupos){
  btnPrevGrupos.addEventListener('click', ()=>{ paginaGrupos = Math.max(0, paginaGrupos-1); renderGrupos(); });
  btnNextGrupos.addEventListener('click', ()=>{ 
    const maxPage = Math.ceil(GRUPOS.length/GRUPOS_POR_PAGINA)-1;
    paginaGrupos = Math.min(maxPage, paginaGrupos+1); 
    renderGrupos(); 
  });
}

/* ===================== JOGOS – Lista com “ver mais” (+5) ===================== */
const listaJogosEl = document.getElementById('lista-jogos');
const btnVerMais = document.getElementById('btn-ver-mais');
const LOTE_JOGOS_INICIAL = 3;
const LOTE_JOGOS_INCREMENTO = 5;
let jogosVisiveis = 0;

function ordenarJogos(){
  return [...JOGOS].sort((a,b)=>{
    const ad = a.data.localeCompare(b.data);
    if(ad!==0) return ad;
    return a.hora.localeCompare(b.hora);
  });
}

function jogoParaLink(j){
  const params = new URLSearchParams({
    pais1: j.pais1, pais2: j.pais2, data: j.data, hora: j.hora, grupo: j.grupo
  });
  return `assistir.html?${params.toString()}`;
}

function renderJogos(){
  if(!listaJogosEl) return;
  const ordenados = ordenarJogos();
  const qtd = Math.min(jogosVisiveis, ordenados.length);
  listaJogosEl.innerHTML = '';

  for(let i=0;i<qtd;i++){
    const j = ordenados[i];
    const item = document.createElement('a');
    item.className = 'jogo-link';
    item.href = jogoParaLink(j);
    item.innerHTML = `
      <article class="jogo-detalhe box-spec" role="listitem">
        <div class="jogo-content">
          <div class="pais">
            <img src="${flagFile(j.pais1)}" alt="Bandeira de ${j.pais1}">
            <span class="nome">${j.pais1}</span>
          </div>
          <div class="jogo-centro">${formatarDataHora(j.data, j.hora)}</div>
          <div class="pais" style="justify-content:flex-end">
            <span class="nome">${j.pais2}</span>
            <img src="${flagFile(j.pais2)}" alt="Bandeira de ${j.pais2}">
          </div>
        </div>
      </article>
    `;
    listaJogosEl.appendChild(item);
  }

  if(btnVerMais){
    btnVerMais.style.display = (qtd < ordenados.length) ? 'inline-block' : 'none';
  }
}

function formatarDataHora(dataISO, hora){
  const [y,m,d] = dataISO.split('-');
  return `${d}/${m} ${hora}`;
}

// Inicialização da Home
if(listaJogosEl){
  jogosVisiveis = LOTE_JOGOS_INICIAL;
  renderJogos();
  if(btnVerMais){
    btnVerMais.addEventListener('click', ()=>{
      jogosVisiveis += LOTE_JOGOS_INCREMENTO;
      renderJogos();
    });
  }
}

// Inicialização dos Grupos
if(gruposListEl){
  renderGrupos();
}

/* ===================== Página ASSISTIR – ler query params ===================== */
function initAssistir(){
  const container = document.getElementById('jogo-head');
  if(!container) return;

  const params = new URLSearchParams(window.location.search);
  const pais1 = params.get('pais1') || 'Time A';
  const pais2 = params.get('pais2') || 'Time B';
  const data = params.get('data') || '2022-11-20';
  const hora = params.get('hora') || '13:00';
  const grupo = params.get('grupo') || '';

  container.innerHTML = `
    <div class="pais">
      <img src="${flagFile(pais1)}" alt="Bandeira de ${pais1}">
      <span class="nome">${pais1}</span>
    </div>
    <div class="jogo-centro">${formatarDataHora(data, hora)} ${grupo ? `&middot; Grupo ${grupo}` : ''}</div>
    <div class="pais" style="justify-content:flex-end">
      <span class="nome">${pais2}</span>
      <img src="${flagFile(pais2)}" alt="Bandeira de ${pais2}">
    </div>
  `;
}
initAssistir();

/* ===================== Menu mobile simples ===================== */
const menuBtn = document.querySelector('.menu-mobile');
if(menuBtn){
  menuBtn.addEventListener('click', ()=>{
    const nav = document.querySelector('.menu-desktop');
    if(!nav) return;
    nav.style.display = (nav.style.display === 'flex' ? 'none' : 'flex');
  });
}
