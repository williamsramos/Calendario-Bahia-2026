// 🛡️ ESCUDOS
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
  "o-higgins": "img/o-higgins.png"
};

// 📦 Jogos armazenados
let games = JSON.parse(localStorage.getItem("games")) || [
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
  { date: "17/07", info: "Rodada 4ª • sexta", team1: "bahia", team2: "chapecoense", stadium: "Arena Fonte Nova", time: "19:30", score: "x" },
  { date: "21/07", info: "Rodada 19ª • terça", team1: "atletico-mg", team2: "bahia", stadium: "Arena MRV", time: "19:30", score: "x" },
  { date: "26/07", info: "Rodada 20ª • domingo", team1: "bahia", team2: "corinthians", stadium: "Arena Fonte Nova", time: "16:00", score: "x" },
  { date: "09/08", info: "Rodada 22ª • domingo", team1: "bahia", team2: "vasco", stadium: "Arena Fonte Nova", time: "16:00", score: "x" },
  { date: "16/08", info: "Rodada 23ª • domingo", team1: "chapecoense", team2: "bahia", stadium: "Arena Condá", time: "11:00", score: "x" },
  { date: "23/08", info: "Rodada 24ª • domingo", team1: "vitoria", team2: "bahia", stadium: "Barradão", time: "16:00", score: "x" }
];

let activeTab = 'todas';
let activeMandoFilter = 'todos-jogos';

// Matriz Oficial da Classificação Atualizada (Baseada na Imagem Real) com chaves de escudos
const dadosClassificacao = [
  { pos: 1, clube: "Palmeiras", slug: "palmeiras", pts: 41, pj: 18, vit: 12, e: 5, der: 1, gm: 30, gc: 13, sg: 17, ultimas: ["E", "E", "E", "V", "V"] },
  { pos: 2, clube: "Flamengo", slug: "flamengo", pts: 34, pj: 17, vit: 10, e: 4, der: 3, gm: 31, gc: 16, sg: 15, ultimas: ["E", "V", "E", "D", "V"] },
  { pos: 3, clube: "Fluminense", slug: "fluminense", pts: 31, pj: 18, vit: 9, e: 4, der: 5, gm: 28, gc: 23, sg: 5, ultimas: ["D", "E", "V", "E", "E"] },
  { pos: 4, clube: "Athletico-PR", slug: "athletico-pr", pts: 30, pj: 18, vit: 9, e: 3, der: 6, gm: 24, gc: 18, sg: 6, ultimas: ["E", "D", "E", "V", "V"] },
  { pos: 5, clube: "Bragantino", slug: "bragantino", pts: 29, pj: 18, vit: 9, e: 2, der: 7, gm: 25, gc: 19, sg: 6, ultimas: ["V", "D", "V", "V", "V"] },
  { pos: 6, clube: "Bahia", slug: "bahia", pts: 26, pj: 17, vit: 7, e: 5, der: 5, gm: 25, gc: 23, sg: 2, ultimas: ["E", "D", "E", "D", "V"] },
  { pos: 7, clube: "Coritiba", slug: "coritiba", pts: 26, pj: 18, vit: 7, e: 5, der: 6, gm: 24, gc: 24, sg: 0, ultimas: ["D", "E", "V", "V", "D"] },
  { pos: 8, clube: "São Paulo", slug: "sao-paulo", pts: 25, pj: 18, vit: 7, e: 4, der: 7, gm: 23, gc: 20, sg: 3, ultimas: ["D", "D", "D", "E", "D"] },
  { pos: 9, clube: "Atlético-MG", slug: "atletico-mg", pts: 24, pj: 18, vit: 7, e: 3, der: 8, gm: 22, gc: 23, sg: -1, ultimas: ["V", "E", "V", "D", "V"] },
  { pos: 10, clube: "Corinthians", slug: "corinthians", pts: 24, pj: 18, vit: 6, e: 6, der: 6, gm: 18, gc: 19, sg: -1, ultimas: ["D", "V", "D", "D", "V"] },
  { pos: 11, clube: "Cruzeiro", slug: "cruzeiro", pts: 24, pj: 18, vit: 6, e: 6, der: 6, gm: 24, gc: 28, sg: -4, ultimas: ["D", "V", "E", "V", "E"] },
  { pos: 12, clube: "Botafogo", slug: "botafogo", pts: 22, pj: 17, vit: 6, e: 4, der: 7, gm: 31, gc: 31, sg: 0, ultimas: ["D", "D", "V", "E", "D"] },
  { pos: 13, clube: "EC Vitória", slug: "vitoria", pts: 22, pj: 17, vit: 6, e: 4, der: 7, gm: 21, gc: 25, sg: -4, ultimas: ["V", "E", "D", "V", "D"] },
  { pos: 14, clube: "Internacional", slug: "internacional", pts: 21, pj: 18, vit: 5, e: 6, der: 7, gm: 21, gc: 22, sg: -1, ultimas: ["V", "E", "V", "D", "D"] },
  { pos: 15, clube: "Santos", slug: "santos", pts: 21, pj: 18, vit: 5, e: 6, der: 7, gm: 28, gc: 29, sg: -3, ultimas: ["E", "V", "D", "D", "V"] },
  { pos: 16, clube: "Grêmio", slug: "gremio", pts: 21, pj: 18, vit: 5, e: 6, der: 7, gm: 20, gc: 23, sg: -3, ultimas: ["D", "D", "E", "V", "D"] },
  { pos: 17, clube: "Vasco da Gama", slug: "vasco", pts: 20, pj: 18, vit: 5, e: 5, der: 8, gm: 22, gc: 29, sg: -7, ultimas: ["E", "V", "D", "D", "D"] },
  { pos: 18, clube: "Remo", slug: "remo", pts: 18, pj: 18, vit: 4, e: 6, der: 8, gm: 21, gc: 29, sg: -8, ultimas: ["E", "E", "V", "D", "V"] },
  { pos: 19, clube: "Mirassol", slug: "mirassol", pts: 16, pj: 17, vit: 4, e: 4, der: 9, gm: 18, gc: 24, sg: -6, ultimas: ["D", "E", "V", "D", "D"] },
  { pos: 20, clube: "Chapecoense", slug: "chapecoense", pts: 9, pj: 17, vit: 1, e: 6, der: 10, gm: 17, gc: 33, sg: -16, ultimas: ["D", "E", "D", "D", "D"] }
];

// Configura os valores iniciais reais solicitados baseados na tabela oficial
if (!localStorage.getItem('bahia_posicao')) localStorage.setItem('bahia_posicao', '6');
if (!localStorage.getItem('bahia_pontos')) localStorage.setItem('bahia_pontos', '26');

function toggleAdminPanel() {
  const panel = document.getElementById('admin-panel');
  panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
  
  if (panel.style.display === 'block') {
    document.getElementById('admin-posicao').value = localStorage.getItem('bahia_posicao') || "6";
    document.getElementById('admin-pontos').value = localStorage.getItem('bahia_pontos') || "26";
  }
}

function toggleCompetitionOptions() {
  const type = document.getElementById('competition-type').value;
  document.getElementById('rodada-select').style.display = (type === 'brasileirao') ? 'block' : 'none';
  document.getElementById('copa-fase').style.display = (type === 'copas') ? 'block' : 'none';
}

function normalizeTeam(name) {
  return name.toLowerCase().trim().replaceAll(" ", "-").replaceAll("ã", "a").replaceAll("ç", "c");
}

// ============================================================================
// 📊 MÓDULO DE GERENCIAMENTO DE JOGOS, SIMULAÇÃO E CLASSIFICAÇÃO DINÂMICA
// ============================================================================

function saveScore(index, value) {
  games[index].score = value;
  localStorage.setItem("games", JSON.stringify(games));
  
  // Recalcula os dados e atualiza a tabela dinamicamente a cada alteração de placar
  applyCombinedFilters();
  calculateSeasonProgress();
}

// 📊 MÓDULO EXCLUSIVO: TABELA DE CLASSIFICAÇÃO FIXA COM ESCUDOS
function renderTabelaClassificacao() {
  const container = document.getElementById('classificacao-table-container');
  if (!container) return;

  let html = `
    <table class="tabela-brasileirao" style="width:100%; border-collapse:collapse; font-family:sans-serif; text-align:center; background:rgba(255,255,255,0.9); border-radius:8px; overflow:hidden;">
      <thead style="background:#00468C; color:white; font-size:13px;">
        <tr>
          <th style="padding:10px; text-align:left;">Posição</th>
          <th style="padding:10px;">P</th>
          <th style="padding:10px;">J</th>
          <th style="padding:10px;">V</th>
          <th style="padding:10px;">E</th>
          <th style="padding:10px;">D</th>
          <th style="padding:10px;">GP</th>
          <th style="padding:10px;">GC</th>
          <th style="padding:10px;">SG</th>
          <th style="padding:10px;">Últimas 5</th>
        </tr>
      </thead>
      <tbody style="font-size:14px; color:#333;">
  `;

  dadosClassificacao.forEach((t, i) => {
    const isBahia = t.clube === "Bahia";
    const rowBg = isBahia ? "background:rgba(0,70,140,0.15); font-weight:bold;" : (i % 2 === 0 ? "background:#f9f9f9;" : "background:#fff;");
    
    let posStyle = "color:#555;";
    if (t.pos <= 4) posStyle = "color:#0056f3; font-weight:bold;"; // G4
    else if (t.pos <= 6) posStyle = "color:#ff7300; font-weight:bold;"; // G6
    else if (t.pos >= 17) posStyle = "color:#dc3545; font-weight:bold;"; // Z4

    const escudoUrl = shields[t.slug] || "img/bahia.png";

    html += `
      <tr style="${rowBg} border-bottom:1px solid #ddd;">
        <td style="padding:10px; text-align:left; display:flex; align-items:center; gap:8px;">
          <span style="${posStyle} min-width:25px;">${t.pos}º</span>
          <img src="${escudoUrl}" alt="Escudo do ${t.clube}" style="width:20px; height:20px; object-fit:contain; vertical-align:middle;">
          <span style="text-transform:none;">${t.clube}</span>
        </td>
        <td style="padding:10px; font-weight:bold; color:#00468C;">${t.pts}</td>
        <td style="padding:10px;">${t.pj}</td>
        <td style="padding:10px;">${t.vit}</td>
        <td style="padding:10px;">${t.e}</td>
        <td style="padding:10px;">${t.der}</td>
        <td style="padding:10px;">${t.gm}</td>
        <td style="padding:10px;">${t.gc}</td>
        <td style="padding:10px; font-weight:bold; color:${t.sg >= 0 ? 'green' : 'red'};">${t.sg > 0 ? '+' + t.sg : t.sg}</td>
        <td style="padding:10px;">
          <div style="display: flex; gap: 4px; justify-content: center;">
            ${t.ultimas.map(res => {
                let color = '#777';
                if (res === 'V') color = '#28a745';
                if (res === 'D') color = '#dc3545';
                return `<span style="display: inline-block; width: 16px; height: 16px; border-radius: 50%; background: ${color}; color: #fff; font-size: 10px; line-height: 16px; font-weight: bold; text-align: center;">${res}</span>`;
            }).join('')}
          </div>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

function isDuplicate(newGame) {
  return games.some(g => g.date === newGame.date && g.team1 === newGame.team1 && g.team2 === newGame.team2);
}

function saveGame() {
  const compType = document.getElementById("competition-type").value;
  let infoValue = document.getElementById("info").value;

  if (compType === 'brasileirao') {
    const rNum = document.getElementById("rodada-select").value;
    infoValue = `Rodada ${rNum}ª • ${infoValue}`;
  } else {
    const cFase = document.getElementById("copa-fase").value;
    infoValue = `${cFase} • ${infoValue}`;
  }

  const game = {
    date: document.getElementById("date").value,
    info: infoValue,
    team1: normalizeTeam(document.getElementById("team1").value),
    team2: normalizeTeam(document.getElementById("team2").value),
    stadium: document.getElementById("info").value.split("•")[1]?.trim() || "", 
    time: document.getElementById("time").value,
    score: document.getElementById("score").value || "x"
  };

  if (!game.date || !game.team1 || !game.team2) {
    alert("⚠️ Preencha Data, Time Mandante e Time Visitante!");
    return;
  }

  if (isDuplicate(game)) {
    alert("⚠️ Esse jogo já existe!");
    return;
  }

  games.push(game);
  localStorage.setItem("games", JSON.stringify(games));
  renderGames();
}

function resetForm() {
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("info").value = "";
  document.getElementById("team1").value = "";
  document.getElementById("score").value = "";
  document.getElementById("team2").value = "";
  document.getElementById("copa-fase").value = "";
  document.getElementById("competition-type").value = "brasileirao";
  toggleCompetitionOptions();
}

function deleteSelectedGames() {
  const checkboxes = document.querySelectorAll(".select-game:checked");
  if (checkboxes.length === 0) {
    alert("⚠️ Nenhum jogo selecionado!");
    return;
  }

  if (!confirm("Tem certeza que deseja excluir os jogos selecionados?")) return;

  const indexesToDelete = Array.from(checkboxes).map(cb => Number(cb.dataset.index));
  games = games.filter((_, index) => !indexesToDelete.includes(index));
  
  localStorage.setItem("games", JSON.stringify(games));
  renderGames();
}

function getHeaderLabel(info) {
  if (info.toLowerCase().includes("rodada")) {
    const match = info.match(/Rodada\s+\d+ª/i);
    return match ? match[0].toUpperCase() : "BRASILEIRÃO";
  }
  const parts = info.split("•");
  return parts[0].trim().toUpperCase();
}

function filterMando(mandoId, event) {
  activeMandoFilter = mandoId;
  document.querySelectorAll('.filter-mando-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  
  applyCombinedFilters();
}

function switchTab(tabId, event) {
  activeTab = tabId;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }

  applyCombinedFilters();
}

function applyCombinedFilters() {
  const secBrasileirao = document.getElementById('sec-brasileirao');
  const secCopas = document.getElementById('sec-copas');
  const allContainers = document.querySelectorAll('.rodada-container');

  if (activeTab === 'todas') {
    secBrasileirao.style.display = 'block';
    secCopas.style.display = 'block';
  } else if (activeTab === 'copas-tab') {
    secBrasileirao.style.display = 'none';
    secCopas.style.display = 'block';
  } else {
    secBrasileirao.style.display = 'block';
    secCopas.style.display = 'none';
  }

  allContainers.forEach(container => {
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

function calculateStats() {
  let triunfos = 0;
  let empates = 0;
  let derrotas = 0;
  let golsPro = 0;
  let golsContra = 0;

  const checkboxes = document.querySelectorAll('.select-game');
  
  checkboxes.forEach(cb => {
    const card = cb.closest('.match-card');
    // Considera apenas cards visíveis que pertencem ao Brasileirão para a tabela de pontos
    if (card && card.style.display !== 'none') {
      const index = Number(cb.dataset.index);
      const g = games[index];

      if (!g.info.toLowerCase().includes("rodada")) return;

      if (g.score && g.score !== "x" && g.score.trim() !== "" && g.score.includes("x")) {
        const placarClean = g.score.split("(")[0];
        const placar = placarClean.split("x");
        const gols1 = parseInt(placar[0]);
        const gols2 = parseInt(placar[1]);

        if (!isNaN(gols1) && !isNaN(gols2)) {
          if (g.team1 === "bahia") {
            golsPro += gols1;
            golsContra += gols2;
            if (gols1 > gols2) triunfos++;
            else if (gols1 < gols2) derrotas++;
            else empates++;
          } else if (g.team2 === "bahia") {
            golsPro += gols2;
            golsContra += gols1;
            if (gols2 > gols1) triunfos++;
            else if (gols2 < gols1) derrotas++;
            else empates++;
          }
        }
      }
    }
  });

  const totalJogosComResultado = triunfos + empates + derrotas;
  const pontosGanhos = (triunfos * 3) + empates;
  let aproveitamento = 0;

  if (totalJogosComResultado > 0) {
    const pontosPossiveis = totalJogosComResultado * 3;
    aproveitamento = Math.round((pontosGanhos / pontosPossiveis) * 100);
  }

  // Atualiza os elementos dos painéis do topo
  document.getElementById('stat-vitorias').textContent = triunfos;
  document.getElementById('stat-empates').textContent = empates;
  document.getElementById('stat-derrotas').textContent = derrotas;
  document.getElementById('stat-aproveitamento').textContent = `${aproveitamento}%`;
  
  // 🔄 ATUALIZA O REGISTRO DO BAHIA EM TEMPO REAL DENTRO DO ARRAY DA TABELA
  const bahiaNaTabela = dadosClassificacao.find(t => t.slug === "bahia");
  if (bahiaNaTabela) {
    bahiaNaTabela.pts = pontosGanhos;
    bahiaNaTabela.pj = totalJogosComResultado;
    bahiaNaTabela.vit = triunfos;
    bahiaNaTabela.e = empates;
    bahiaNaTabela.der = derrotas;
    bahiaNaTabela.gm = golsPro;
    bahiaNaTabela.gc = golsContra;
    bahiaNaTabela.sg = golsPro - golsContra;
    
    // Organiza as posições de forma inteligente com base nos critérios de desempate oficiais
    dadosClassificacao.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.sg !== a.sg) return b.sg - a.sg;
      return b.vit - a.vit;
    });
    
    // Corrige a numeração sequencial das posições pós-reordenação
    dadosClassificacao.forEach((time, idx) => {
      time.pos = idx + 1;
    });
  }

  // Sincroniza a nova classificação gerada nos painéis fixos de leitura rápida
  const novaPosBahia = dadosClassificacao.findIndex(t => t.slug === "bahia") + 1;
  document.getElementById('stat-posicao').textContent = `${novaPosBahia}º`;
  document.getElementById('stat-pontos').textContent = pontosGanhos;

  // Renderiza a interface da tabela totalmente reformulada
  renderTabelaClassificacao();
}

// 🌓 LÓGICA DE ALTERNÂNCIA DE TEMA (MODO UNIFORME ALVO)
function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  document.getElementById('theme-btn').textContent = isLight ? '🔵 Uniforme Tricolor' : '⚪ Uniforme Alvo';
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    document.getElementById('theme-btn').textContent = '🔵 Uniforme Tricolor';
  }
}

// ⏳ LÓGICA DA BARRA DE PROGRESSO DA TEMPORADA
function calculateSeasonProgress() {
  const totalGames = games.length;
  let playedGames = 0;

  games.forEach(g => {
    if (g.score && g.score !== "x" && g.score.trim() !== "") {
      playedGames++;
    }
  });

  const percentage = totalGames > 0 ? Math.round((playedGames / totalGames) * 100) : 0;

  document.getElementById('progress-percentage').textContent = `${percentage}%`;
  document.getElementById('progress-count').textContent = `${playedGames}/${totalGames}`;
  document.getElementById('progress-fill').style.width = `${percentage}%`;
}

// 🔍 IDENTIFICA O PRÓXIMO JOGO DO VETOR
function getNextMatchIndex() {
  return games.findIndex(g => !g.score || g.score.toLowerCase().trim() === 'x');
}

function renderGames() {
  const brasContainer = document.getElementById("brasileirao-containers");
  const copasContainer = document.getElementById("copas-container");
  
  if (brasContainer) brasContainer.innerHTML = "";
  if (copasContainer) copasContainer.innerHTML = "";

  const nextMatchIndex = getNextMatchIndex();

  const groups = {};
  games.forEach((g, index) => {
    const headerLabel = getHeaderLabel(g.info);
    if (!groups[headerLabel]) groups[headerLabel] = [];
    groups[headerLabel].push({ g, index });
  });

  for (const [title, matchList] of Object.entries(groups)) {
    const matchDigits = title.match(/\d+/);
    let containerIdAttr = matchDigits ? `id="rodada-box-${matchDigits[0]}"` : `id="copa-box-${title.replaceAll(" ", "-").toLowerCase()}"`;

    let containerHTML = `
      <div class="rodada-container" ${containerIdAttr}>
        <div class="rodada-header">${title}</div>
        <div class="match-list">
    `;

    matchList.forEach(({ g, index }) => {
      let extraClass = "";
      let badgeHTML = "";

      if (g.info.toLowerCase().includes("libertadores")) extraClass += " libertadores";
      if (g.info.toLowerCase().includes("copa do brasil")) extraClass += " copa-brasil";
      if (g.result) extraClass += ` ${g.result}`;

      if (index === nextMatchIndex) {
        extraClass += " next-match";
        badgeHTML = `<div class="next-match-badge">⭐ PRÓXIMO JOGO</div>`;
      }

      // --- TRATAMENTO DO PLACAR ---
      let valorInput = g.score || "x"; 
      let placarExibicao = valorInput;
      let penaltisExibicao = "";

      // 1. Separa caso existam parênteses salvos
      if (valorInput.includes("(")) {
        const partes = valorInput.split("(");
        placarExibicao = partes[0].trim();
        penaltisExibicao = partes[1].replace(")", "").trim();
      } 
      // 2. Fallback caso use propriedade nativa do objeto
      else if (g.penalties && g.penalties.trim() !== "") {
        penaltisExibicao = g.penalties;
      }
      // 3. SEGUNDO CRITÉRIO: DETECÇÃO AUTOMÁTICA POR EMPATE NO AGREGADO
      else if (g.info.toLowerCase().includes("volta") && placarExibicao.includes("x") && placarExibicao.trim() !== "x") {
        const pVolta = placarExibicao.split("x");
        const golV1Raw = pVolta[0]?.trim();
        const golV2Raw = pVolta[1]?.trim();

        if (golV1Raw !== "" && golV2Raw !== "" && !isNaN(parseInt(golV1Raw)) && !isNaN(parseInt(golV2Raw))) {
          const adversario = g.team1 === "bahia" ? g.team2 : g.team1;
          const jogoIda = games.find(jogo => 
            jogo.info.toLowerCase().includes("ida") && 
            (jogo.team1 === adversario || jogo.team2 === adversario) &&
            jogo.score && jogo.score !== "x"
          );

          if (jogoIda) {
            const golsVolta1 = parseInt(golV1Raw);
            const golsVolta2 = parseInt(golV2Raw);

            const pIda = jogoIda.score.split("(")[0].split("x");
            const golsIda1 = parseInt(pIda[0]);
            const golsIda2 = parseInt(pIda[1]);

            if (!isNaN(golsIda1) && !isNaN(golsIda2)) {
              let totalBahia = 0;
              let totalAdversario = 0;

              if (jogoIda.team1 === "bahia") { totalBahia += golsIda1; totalAdversario += golsIda2; } 
              else { totalBahia += golsIda2; totalAdversario += golsIda1; }

              if (g.team1 === "bahia") { totalBahia += golsVolta1; totalAdversario += golsVolta2; } 
              else { totalBahia += golsVolta2; totalAdversario += golsVolta1; }

              if (totalBahia === totalAdversario) {
                penaltisExibicao = "0 x 0";
              }
            }
          }
        }
      }

      // Isola os gols limpos para renderizar nos inputs
      const golsNormalArray = placarExibicao.split("x");
      const golNormal1 = golsNormalArray[0]?.trim() || "";
      const golNormal2 = golsNormalArray[1]?.trim() || "";

      const golsPenaltisArray = penaltisExibicao.split("x");
      const golPenalti1 = golsPenaltisArray[0]?.trim() || "";
      const golPenalti2 = golsPenaltisArray[1]?.trim() || "";

      // --- CORREÇÃO DEFINITIVA DA LÓGICA DE CORES DOS CARDS ---
      if (golNormal1 !== "" && golNormal2 !== "") {
        const gols1 = parseInt(golNormal1);
        const gols2 = parseInt(golNormal2);

        if (!isNaN(gols1) && !isNaN(gols2)) {
          if (g.team1 === "bahia") {
            // Bahia Mandante
            if (gols1 > gols2) extraClass += " win";
            else if (gols1 < gols2) extraClass += " loser";
            else extraClass += " draw";
          } else if (g.team2 === "bahia") {
            // Bahia Visitante
            if (gols2 > gols1) extraClass += " win";
            else if (gols2 < gols1) extraClass += " loser";
            else extraClass += " draw";
          }
        }
      }
      // --------------------------------------------------------

      const t1Name = g.team1.replace("-", " ");
      const t2Name = g.team2.replace("-", " ");
      const img1 = shields[g.team1] || "img/bahia.png";
      const img2 = shields[g.team2] || "img/bahia.png";

      window.atualizarPlacarComPenaltis = function(idx, n1, n2, p1, p2) {
        let stringResultado = `${n1 || ''} x ${n2 || ''}`;
        if (p1 !== "" || p2 !== "") {
          stringResultado += ` (${p1 || '0'} x ${p2 || '0'})`;
        }
        saveScore(idx, stringResultado);
      };

      containerHTML += `
        <div class="match-card ${extraClass}">
          <input type="checkbox" class="select-game" data-index="${index}">
          ${badgeHTML}
          <div class="match-details">${g.date} • ${g.info.includes("•") ? g.info.substring(g.info.indexOf("•") + 1) : g.info} • ${g.time}</div>
          <div class="match-teams-row">
            <div class="team-box home">
              <span class="team-name">${t1Name}</span>
              <img src="${img1}" class="team-logo">
            </div>
            
            <div class="score-box" style="display: flex; align-items: center; justify-content: center; gap: 6px;">
              <input class="score-input" value="${golNormal1}" oninput="atualizarPlacarComPenaltis(${index}, this.value, '${golNormal2}', '${golPenalti1}', '${golPenalti2}')" style="text-align: center; width: 35px;">
              
              ${penaltisExibicao !== "" ? `
                <input class="pk-input" value="${golPenalti1}" placeholder="PK" oninput="atualizarPlacarComPenaltis(${index}, '${golNormal1}', '${golNormal2}', this.value, '${golPenalti2}')" style="background: #fff5f5; color: #dc3545; border: 1px solid #ffcccc; padding: 2px; border-radius: 4px; font-size: 11px; font-weight: bold; width: 25px; text-align: center;">
              ` : ''}

              <span style="font-weight: bold; color: white; margin: 0 2px;">x</span>

              ${penaltisExibicao !== "" ? `
                <input class="pk-input" value="${golPenalti2}" placeholder="PK" oninput="atualizarPlacarComPenaltis(${index}, '${golNormal1}', '${golNormal2}', '${golPenalti1}', this.value)" style="background: #fff5f5; color: #dc3545; border: 1px solid #ffcccc; padding: 2px; border-radius: 4px; font-size: 11px; font-weight: bold; width: 25px; text-align: center;">
              ` : ''}

              <input class="score-input" value="${golNormal2}" oninput="atualizarPlacarComPenaltis(${index}, '${golNormal1}', this.value, '${golPenalti1}', '${golPenalti2}')" style="text-align: center; width: 35px;">
            </div>

            <div class="team-box away">
              <img src="${img2}" class="team-logo">
              <span class="team-name">${t2Name}</span>
            </div>
          </div>
        </div>
      `;
    });

    containerHTML += `</div></div>`;

    if (title.includes("RODADA") || title.includes("BRASILEIRÃO")) {
      if (brasContainer) brasContainer.insertAdjacentHTML("beforeend", containerHTML);
    } else {
      if (copasContainer) copasContainer.insertAdjacentHTML("beforeend", containerHTML);
    }
  }

  applySavedTheme();
  calculateSeasonProgress();
  switchTab(activeTab, null);
}
// ============================================================================
// 🏃‍♂️ MÓDULO EXCLUSIVO: GERENCIAMENTO DE ELENCO & TOP ARTILHEIROS
// ============================================================================
let players = JSON.parse(localStorage.getItem("bahia_players")) || [
  { name: "Ronaldo", position: "Goleiro", goals: 0 },
  { name: "João Paulo", position: "Goleiro", goals: 0 },
  { name: "Léo Vieira", position: "Goleiro", goals: 0 },
  { name: "Iago Borduchi", position: "Lateral", goals: 0 },
  { name: "Zé Guilherme", position: "Lateral", goals: 0 },
  { name: "Román Gómez", position: "Lateral", goals: 0 },
  { name: "Luciano Juba", position: "Lateral", goals: 7 },
  { name: "David Duarte", position: "Zagueiro", goals: 2 },
  { name: "Marcos Victor", position: "Zagueiro", goals: 0 },
  { name: "Ramos Mingo", position: "Zagueiro", goals: 0 },
  { name: "Luiz Gustavo", position: "Zagueiro", goals: 0 },
  { name: "Kanu", position: "Zagueiro", goals: 0 },
  { name: "Everton Ribeiro", position: "Meio-campista", goals: 0 },
  { name: "Nicolás Acevedo", position: "Meio-campista", goals: 0 },
  { name: "Erick", position: "Meio-campista", goals: 2 },
  { name: "Nestor", position: "Meio-campista", goals: 0 },
  { name: "Michel Araújo", position: "Meio-campista", goals: 0 },
  { name: "Caio Alexandre", position: "Meio-campista", goals: 0 },
  { name: "Jean Lucas", position: "Meio-campista", goals: 2 },
  { name: "Ademir", position: "Atacante", goals: 0 },
  { name: "Erick Pulga", position: "Atacante", goals: 0 },
  { name: "Willian José", position: "Atacante", goals: 3 },
  { name: "Sanabria", position: "Atacante", goals: 2 },
  { name: "Kike Olivera", position: "Atacante", goals: 1 },
  { name: "Everaldo", position: "Atacante", goals: 4 },
  { name: "Alejo Veliz", position: "Atacante", goals: 0 }
];

let activePositionFilter = 'todos';

function filterPosition(positionId, event) {
  activePositionFilter = positionId;
  document.querySelectorAll('.filter-position-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }
  renderElenco();
}

function switchMainSection(sectionId) {
  document.querySelectorAll('.main-section').forEach(sec => sec.style.display = 'none');
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  if (sectionId === 'jogos') {
    document.getElementById('section-jogos').style.display = 'block';
    document.getElementById('nav-jogos').classList.add('active');
  } else if (sectionId === 'elenco') {
    document.getElementById('section-elenco').style.display = 'block';
    document.getElementById('nav-elenco').classList.add('active');
    renderElenco();
  } else if (sectionId === 'classificacao') {
    document.getElementById('section-classificacao').style.display = 'block';
    document.getElementById('nav-classificacao').classList.add('active');
    renderTabelaClassificacao();
  }
}

function togglePlayerModal() {
  const modal = document.getElementById('player-modal');
  modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'flex' : 'none';
}

function addPlayer() {
  const nameInput = document.getElementById('player-name');
  const posSelect = document.getElementById('player-position');
  
  const name = nameInput.value.trim();
  const position = posSelect.value;
  
  if (!name) {
    alert("⚠️ Por favor, digite o nome do jogador!");
    return;
  }
  
  if (players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    alert("⚠️ Esse atleta já consta listado no plantel!");
    return;
  }
  
  players.push({ name, position, goals: 0 });
  localStorage.setItem("bahia_players", JSON.stringify(players));
  
  nameInput.value = "";
  togglePlayerModal();
  renderElenco();
}

function updateGoals(index, increment) {
  players[index].goals = Math.max(0, players[index].goals + increment);
  localStorage.setItem("bahia_players", JSON.stringify(players));
  renderElenco();
}

function removePlayer(index) {
  if (confirm(`Remover permanentemente ${players[index].name} das listagens?`)) {
    players.splice(index, 1);
    localStorage.setItem("bahia_players", JSON.stringify(players));
    renderElenco();
  }
}

function renderElenco() {
  const grid = document.getElementById('elenco-grid');
  const topList = document.getElementById('top-scorers-list');
  
  if (grid) grid.innerHTML = "";
  if (topList) topList.innerHTML = "";
  
  players.forEach((player, index) => {
    if (activePositionFilter !== 'todos') {
      if (activePositionFilter === 'goleiros' && player.position !== 'Goleiro') return;
      if (activePositionFilter === 'laterais' && player.position !== 'Lateral') return;
      if (activePositionFilter === 'zagueiros' && player.position !== 'Zagueiro') return;
      if (activePositionFilter === 'meio-campistas' && player.position !== 'Meio-campista') return;
      if (activePositionFilter === 'atacantes' && player.position !== 'Atacante') return;
    }

    const row = document.createElement('div');
    row.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #ddd; background: rgba(255,255,255,0.7); border-radius: 4px;";
    
    row.innerHTML = `
      <div style="color: #333;">
        <strong style="font-size: 15px;">${player.name}</strong> 
        <span style="font-size: 11px; color: #555; margin-left: 8px; background: #e4e4e4; padding: 2px 8px; border-radius: 12px; font-weight: bold;">${player.position}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-weight: bold; min-width: 65px; text-align: right; color: #111; font-size: 14px;">⚽ ${player.goals} ${player.goals === 1 ? 'gol' : 'gols'}</span>
        <button onclick="updateGoals(${index}, 1)" style="padding: 4px 10px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer; font-weight: bold; font-size:14px;">+</button>
        <button onclick="updateGoals(${index}, -1)" style="padding: 4px 10px; background: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer; font-weight: bold; font-size:14px;">-</button>
        <button onclick="removePlayer(${index})" style="padding: 2px 4px; background: transparent; color: #bbb; border: none; cursor: pointer; font-size: 13px; margin-left: 5px;">❌</button>
      </div>
    `;
    if (grid) grid.appendChild(row);
  });
  
  const artilheiros = [...players]
    .filter(p => p.goals > 0)
    .sort((a, b) => b.goals - a.goals);
    
  if (topList) {
    if (artilheiros.length === 0) {
      topList.innerHTML = `<li style="list-style: none; color: #666; font-style: italic; font-size: 14px;">Nenhum gol registrado no sistema.</li>`;
    } else {
      artilheiros.forEach(player => {
        const li = document.createElement('li');
        li.style.color = "#333";
        li.innerHTML = `<strong>${player.name}</strong> — <span style="color: #00468C; font-weight: bold;">${player.goals} ${player.goals === 1 ? 'gol' : 'gols'}</span>`;
        topList.appendChild(li);
      });
    }
  }
}

// Inicialização padrão do Calendário
renderGames();