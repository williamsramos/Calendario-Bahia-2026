Aqui está o código completo do seu arquivo main.js totalmente unificado e pronto para uso.
Esta versão já inclui os novos escudos mapeados, a inserção dos 11 jogos do Campeonato Estadual dentro da listaAtualizadaDeGames e as regras de filtragem combinadas atualizadas para isolar o estadual sem interferir no cálculo de pontos e estatísticas das demais rodadas do campeonato principal.
// 🛡️ ESCUDOS (Mapeamento completo dos times da temporada e do estadual)
const shields = {
  "bahia": "img/bahia.png",
  "flamengo": "img/flamengo.png",
  "palmeiras": "img/palmeiras.png",
  "corinthians": "img/corinthians.png",
  "sao-paulo": "img/sao-paulo.jpg",
  "gremio": "img/gremio.png",
  "internacional": "img/internacional.png",
  "atletico-mg": "img/atletico-mg.png",
  "cruzeiro": "img/cruzeiro.svg",
  "botafogo": "img/botafogo.png",
  "fluminense": "img/fluminense.png",
  "athletico-pr": "img/athletico-pr.png",
  "santos": "img/santos.png",
  "bragantino": "img/bragantino.png",
  "vasco": "img/vasco.png",
  "vitoria": "img/vitoria.png",
  "coritiba": "img/coritiba.png",
  "chapecoense": "img/chapecoense.png",
  "remo": "img/remo.png",
  "mirassol": "img/mirassol.jpg",
  "o-higgins": "img/o-higgins.png",
  // Times do estadual
  "barcelona-ba": "img/barcelona-ba.png",
  "galicia-ba": "img/galicia-ba.png",
  "bahia-de-feira": "img/bahia-de-feira.png",
  "jequie-ba": "img/jequie.png",
  "porto-ba": "img/porto-ba.png",
  "juazeirense": "img/juazeirense.png",
  "jacuipense": "img/jacuipense.png",
  "alagoinhas": "img/alagoinhas.png"
};

// 📦 Armazenamento e persistência de dados
let games = JSON.parse(localStorage.getItem("games")) || [];

const listaAtualizadaDeGames = [
  // 🏆 CAMPEONATO ESTADUAL
  { date: "11/01", info: "Estadual • Rodada 1ª", team1: "bahia", team2: "jequie-ba", stadium: "Fonte Nova", time: "16:00", score: "4 x 2" },
  { date: "14/01", info: "Estadual • Rodada 2ª", team1: "bahia-de-feira", team2: "bahia", stadium: "Jóia da Princesa", time: "21:45", score: "0 x 3" },
  { date: "17/01", info: "Estadual • Rodada 3ª", team1: "bahia", team2: "galicia-ba", stadium: "Fonte Nova", time: "16:00", score: "3 x 0" },
  { date: "20/01", info: "Estadual • Rodada 4ª", team1: "bahia", team2: "barcelona-ba", stadium: "Fonte Nova", time: "20:30", score: "5 x 1" },
  { date: "25/01", info: "Estadual • Rodada 5ª", team1: "vitoria", team2: "bahia", stadium: "Barradão", time: "16:00", score: "0 x 1" },
  { date: "01/02", info: "Estadual • Rodada 6ª", team1: "bahia", team2: "porto-ba", stadium: "Fonte Nova", time: "16:00", score: "3 x 1" },
  { date: "08/02", info: "Estadual • Rodada 7ª", team1: "juazeirense", team2: "bahia", stadium: "Adauto Moraes", time: "16:00", score: "1 x 1" },
  { date: "14/02", info: "Estadual • Rodada 8ª", team1: "bahia", team2: "jacuipense", stadium: "Fonte Nova", time: "16:00", score: "2 x 2" },
  { date: "21/02", info: "Estadual • Rodada 9ª", team1: "alagoinhas", team2: "bahia", stadium: "Carneirão", time: "16:00", score: "2 x 4" },
  { date: "28/02", info: "Estadual • Semifinal", team1: "bahia", team2: "juazeirense", stadium: "Fonte Nova", time: "16:00", score: "4 x 2" },
  { date: "07/03", info: "🏆 Final • Estadual", team1: "bahia", team2: "vitoria", stadium: "Fonte Nova", time: "16:00", score: "2 x 1" },

  // 🇧🇷 DEMAIS JOGOS DA TEMPORADA
  { date: "28/01", info: "Rodada 1ª • terça", team1: "corinthians", team2: "bahia", stadium: "Vila Belmiro", time: "20:00", score: "1 x 2" },
  { date: "05/02", info: "Rodada 2ª • quarta", team1: "bahia", team2: "fluminense", stadium: "Arena Fonte Nova", time: "19:00", score: "1 x 1" },
  { date: "11/02", info: "Rodada 3ª • terça", team1: "vasco", team2: "bahia", stadium: "São Januário", time: "21:30", score: "0 x 1" },
  { date: "18/02", info: "Libertadores • 2ª fase • ida", team1: "o-higgins", team2: "bahia", stadium: "El Teniente", time: "19:00", score: "1 x 0" },
  { date: "25/02", info: "Libertadores • 2ª fase • volta", team1: "bahia", team2: "o-higgins", stadium: "Arena Fonte Nova", time: "19:00", score: "2 x 1 (3 x 4 )", result: "loser" },
  { date: "11/03", info: "Rodada 5ª • quarta", team1: "bahia", team2: "vitoria", stadium: "Arena Fonte Nova", time: "20:00", score: "1 x 1" },
  { date: "15/03", info: "Rodada 6ª • domingo", team1: "internacional", team2: "bahia", stadium: "Beira-Rio", time: "16:00", score: "0 x 1" },
  { date: "18/03", info: "Rodada 7ª • quarta", team1: "bahia", team2: "bragantino", stadium: "Arena Fonte Nova", time: "19:00", score: "2 x 0" },
  { date: "22/03", info: "Rodada 8ª • domingo", team1: "remo", team2: "bahia", stadium: "Mangueirão", time: "16:00", score: "4 x 1" },
  { date: "01/04", info: "Rodada 9ª • quarta", team1: "bahia", team2: "athletico-pr", stadium: "Arena Fonte Nova", time: "20:00", score: "3 x 0" },
  { date: "05/04", info: "Rodada 10ª • domingo", team1: "bahia", team2: "palmeiras", stadium: "Arena Fonte Nova", time: "19:30", score: "1 x 2" },
  { date: "11/04", info: "Rodada 11ª • sábado", team1: "mirassol", team2: "bahia", stadium: "Maião", time: "18:30", score: "1 x 2" },
  { date: "19/04", info: "Rodada 12ª • domingo", team1: "flamengo", team2: "bahia", stadium: "Maracanã", time: "19:30", score: "2 x 0" },
  { date: "22/04", info: "Copa do Brasil • 5ª fase • quarta", team1: "bahia", team2: "remo", stadium: "Arena Fonte Nova", time: "19:00", score: "1 x 3" },
  { date: "25/04", info: "Rodada 13ª • sábado", team1: "bahia", team2: "santos", stadium: "Arena Fonte Nova", time: "18:30", score: "2 x 2" },
  { date: "03/05", info: "Rodada 14ª • domingo", team1: "sao-paulo", team2: "bahia", stadium: "Estadio Cicero Sousa de Marques", time: "16:00", score: "2 x 2" },
  { date: "09/05", info: "Rodada 15ª • sábado", team1: "bahia", team2: "cruzeiro", stadium: "Arena Fonte Nova", time: "21:00", score: "1 x 2" },
  { date: "13/05", info: "Copa do Brasil • 5ª fase • volta", team1: "remo", team2: "bahia", stadium: "Mangueirão", time: "21:30", score: "2 x 1" },
  { date: "17/05", info: "Rodada 16ª • domingo", team1: "bahia", team2: "gremio", stadium: "Arena Fonte Nova", time: "16:00", score: "1 x 1" },
  { date: "25/05", info: "Rodada 17ª • segunda", team1: "coritiba", team2: "bahia", stadium: "Couto Pereira", time: "20:00", score: "3 x 2" },
  { date: "30/05", info: "Rodada 18ª • sábado", team1: "bahia", team2: "botafogo", stadium: "Arena Fonte Nova", time: "17:30", score: "2 x 1" },
  { date: "17/07", info: "Rodada 4ª • sexta", team1: "bahia", team2: "chapecoense", stadium: "Arena Fonte Nova", time: "19:30", score: "2x0" },
  { date: "21/07", info: "Rodada 19ª • terça", team1: "atletico-mg", team2: "bahia", stadium: "Arena MRV", time: "19:30", score: "x" },
  { date: "26/07", info: "Rodada 20ª • domingo", team1: "bahia", team2: "corinthians", stadium: "Arena Fonte Nova", time: "16:00", score: "x" },
  { date: "29/07", info: "Rodada 21ª • quarta", team1: "fluminense", team2: "bahia", stadium: "Maracnã", time: "21:30", score: "x" },
  { date: "09/08", info: "Rodada 22ª • domingo", team1: "bahia", team2: "vasco", stadium: "Arena Fonte Nova", time: "16:00", score: "x" },
  { date: "16/08", info: "Rodada 23ª • domingo", team1: "chapecoense", team2: "bahia", stadium: "Arena Condá", time: "11:00", score: "x" },
  { date: "23/08", info: "Rodada 24ª • domingo", team1: "vitoria", team2: "bahia", stadium: "Barradão", time: "16:00", score: "x" }
];

// Gerencia a verificação inicial do LocalStorage para carregar os novos dados do estadual
if (games.length === 0 || !games.some(jogo => jogo.team2 === "jequie-ba")) {
  games = listaAtualizadaDeGames;
  localStorage.setItem("games", JSON.stringify(games));
}

// 🎛️ CONTROLE DE ESTADOS DO FILTRO
let activeTab = 'todas';
let activeMandoFilter = 'todos-jogos';

// 🛠️ FUNÇÃO PRINCIPAL: RENDERIZAR OS JOGOS NA TELA
function renderGames() {
  const containerBrasileirao = document.getElementById("games-container-brasileirao");
  const containerCopas = document.getElementById("games-container-copas");

  if (containerBrasileirao) containerBrasileirao.innerHTML = "";
  if (containerCopas) containerCopas.innerHTML = "";

  const grupos = {};

  games.forEach((g, index) => {
    let grupoNome = "Outros Jogos";
    const infoLower = g.info.toLowerCase();

    if (infoLower.includes("rodada") && !infoLower.includes("estadual")) {
      const match = g.info.match(/\d+/);
      grupoNome = match ? `Rodada ${match[0]}` : "Brasileirão";
    } else if (infoLower.includes("libertadores")) {
      grupoNome = "Copa Libertadores";
    } else if (infoLower.includes("copa do brasil")) {
      grupoNome = "Copa do Brasil";
    } else if (infoLower.includes("estadual")) {
      grupoNome = "Campeonato Estadual";
    }

    if (!grupos[grupoNome]) grupos[grupoNome] = [];
    grupos[grupoNome].push({ ...g, originalIndex: index });
  });

  Object.keys(grupos).forEach(grupoNome => {
    const sectionContainer = document.createElement("div");
    sectionContainer.className = "rodada-container";
    
    // Normaliza id para aplicar os filtros de busca
    const idSufixo = grupoNome.toLowerCase().replace(/[^a-z0-9]/g, "-");
    sectionContainer.id = `grupo-${idSufixo}`;

    const title = document.createElement("h3");
    title.className = "round-title";
    title.innerText = grupoNome;
    sectionContainer.appendChild(title);

    grupos[grupoNome].forEach(g => {
      const card = document.createElement("div");
      card.className = "match-card";

      // Determinação de cores baseada em vitórias e derrotas
      const scores = g.score.split("x").map(s => parseInt(s.trim()));
      let classResultado = "";

      if (!isNaN(scores[0]) && !isNaN(scores[1])) {
        const isTeam1Bahia = g.team1 === "bahia";
        if (scores[0] === scores[1]) {
          classResultado = "draw";
        } else if ((scores[0] > scores[1] && isTeam1Bahia) || (scores[1] > scores[0] && !isTeam1Bahia)) {
          classResultado = "winner";
        } else {
          classResultado = "loser";
        }
      }
      if (g.result) classResultado = g.result; // Força resultado customizado se existir
      if (classResultado) card.classList.add(classResultado);

      const shield1 = shields[g.team1] || "img/default.png";
      const shield2 = shields[g.team2] || "img/default.png";

      card.innerHTML = `
        <div class="match-header">
          <span class="match-date">${g.date}</span>
          <span class="match-info">${g.info}</span>
        </div>
        <div class="match-body">
          <div class="team team-home">
            <img src="${shield1}" alt="${g.team1}" class="team-shield">
            <span class="team-name">${g.team1.toUpperCase()}</span>
          </div>
          <div class="match-score">${g.score}</div>
          <div class="team team-away">
            <img src="${shield2}" alt="${g.team2}" class="team-shield">
            <span class="team-name">${g.team2.toUpperCase()}</span>
          </div>
        </div>
        <div class="match-footer">
          <span class="match-stadium">📍 ${g.stadium}</span>
          <span class="match-time">🕒 ${g.time}</span>
          <label class="select-container">
            <input type="checkbox" class="select-game" data-index="${g.originalIndex}" ${g.selected ? 'checked' : ''}>
            👁️ Considerar
          </label>
        </div>
      `;

      // Evento para atualizar seleção e recalcular dados
      card.querySelector(".select-game").addEventListener("change", function() {
        games[this.dataset.index].selected = this.checked;
        localStorage.setItem("games", JSON.stringify(games));
        calculateStats();
      });

      sectionContainer.appendChild(card);
    });

    // Encaminha o container criado para a seção visual correta no HTML
    if (grupoNome.includes("Rodada")) {
      if (containerBrasileirao) containerBrasileirao.appendChild(sectionContainer);
    } else {
      if (containerCopas) containerCopas.appendChild(sectionContainer);
    }
  });

  applyCombinedFilters();
}

// 🎛️ FILTRAGEM COMBINADA (Abas + Mandos de Campo)
function applyCombinedFilters() {
  const secBrasileirao = document.getElementById('sec-brasileirao');
  const secCopas = document.getElementById('sec-copas');
  const allContainers = document.querySelectorAll('.rodada-container');

  if (activeTab === 'todas') {
    if (secBrasileirao) secBrasileirao.style.display = 'block';
    if (secCopas) secCopas.style.display = 'block';
  } else if (activeTab === 'copas-tab') {
    if (secBrasileirao) secBrasileirao.style.display = 'none';
    if (secCopas) secCopas.style.display = 'block';
  } else if (activeTab === 'estadual-tab') {
    if (secBrasileirao) secBrasileirao.style.display = 'none';
    if (secCopas) secCopas.style.display = 'block'; 
  } else {
    if (secBrasileirao) secBrasileirao.style.display = 'block';
    if (secCopas) secCopas.style.display = 'none';
  }

  allContainers.forEach(container => {
    // Filtros de Turnos do Brasileirão
    if (activeTab === '1-turno' || activeTab === '2-turno') {
      const match = container.id.match(/\d+/);
      const num = match ? parseInt(match[0]) : null;
      if (activeTab === '1-turno' && (num === null || num > 19)) {
        container.style.display = 'none';
        return;
      }
      if (activeTab === '2-turno' && (num === null || num < 20)) {
        container.style.display = 'none';
        return;
      }
    }

    // Filtros específicos das Abas de Copas e Estadual
    if (activeTab === 'estadual-tab' && !container.id.includes('estadual')) {
      container.style.display = 'none';
      return;
    }
    if (activeTab === 'copas-tab' && container.id.includes('estadual')) {
      container.style.display = 'none';
      return;
    }

    const cards = container.querySelectorAll('.match-card');
    let visibleCardsInContainer = 0;

    cards.forEach(card => {
      const checkbox = card.querySelector('.select-game');
      const index = Number(checkbox.dataset.index);
      const gameData = games[index];
      const isHome = gameData.team1 === "bahia";

      let showCard = false;
      if (activeMandoFilter === 'todos-jogos') showCard = true;
      else if (activeMandoFilter === 'mandante' && isHome) showCard = true;
      else if (activeMandoFilter === 'visitante' && !isHome) showCard = true;

      if (showCard) {
        card.style.display = 'flex';
        visibleCardsInContainer++;
      } else {
        card.style.display = 'none';
      }
    });

    if (visibleCardsInContainer > 0) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });

  calculateStats();
}

// 📑 GERENCIAMENTO DE MUDANÇA DE ABAS VIA INTERFACE
function switchTab(tabId, event) {
  activeTab = tabId;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  } else {
    const activeBtn = document.querySelector(`.tab-btn[onclick*="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
  }
  applyCombinedFilters();
}

function filterMando(mandoType, event) {
  activeMandoFilter = mandoType;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
  applyCombinedFilters();
}

function clicarAbaEstadual(event) {
  switchTab('estadual-tab', event);
}

// 🧮 CÁLCULO DE ESTATÍSTICAS E RENDIMENTO
function calculateStats() {
  let pts = 0, pj = 0, v = 0, e = 0, d = 0, gp = 0, gc = 0;

  games.forEach(g => {
    if (g.selected === false) return; 
    if (!g.info.toLowerCase().includes("rodada")) return;
    if (g.info.toLowerCase().includes("estadual")) return; // Evita que pontos do estadual computem no Brasileirão

    const scores = g.score.split("x").map(s => parseInt(s.trim()));
    if (isNaN(scores[0]) || !isNaN(g.score) || g.score.toLowerCase().includes("x") === false) {
      if (g.score.trim().toLowerCase() === "x") return; 
    }
    if (isNaN(scores[0]) || isNaN(scores[1])) return;

    pj++;
    const isHome = g.team1 === "bahia";
    const golsBahia = isHome ? scores[0] : scores[1];
    const golsAdversario = isHome ? scores[1] : scores[0];

    gp += golsBahia;
    gc += golsAdversario;

    if (golsBahia > golsAdversario) {
      v++; pts += 3;
    } else if (golsBahia === golsAdversario) {
      e++; pts += 1;
    } else {
      d++;
    }
  });

  const sg = gp - gc;
  const aproveitamento = pj > 0 ? ((pts / (pj * 3)) * 100).toFixed(1) : "0.0";

  // Atualização dos nós de texto na tabela/painel do DOM
  const elements = { pts, pj, v, e, d, gp, gc, sg, apr: aproveitamento + "%" };
  Object.keys(elements).forEach(key => {
    const el = document.getElementById(`stat-${key}`);
    if (el) el.innerText = elements[key];
  });
}

// 🏁 INICIALIZAÇÃO AUTOMÁTICA DA APLICAÇÃO
document.addEventListener("DOMContentLoaded", () => {
  renderGames();
});

