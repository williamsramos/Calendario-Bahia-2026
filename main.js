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

// 📦 jogos
let games = JSON.parse(localStorage.getItem("games")) || [
  // 1º turno do Brasileirão 2026  - Copa do Brasil
  {
    date: "28/01",
    info: "Rodada 1ª • terça",
    team1: "corinthians",
    team2: "bahia",
    stadium: "Vila Belmiro",
    time: "20:00",
    score: "1 x 2"
  },
  {
    date: "05/02",
    info: "Rodada 2ª • quarta",
    team1: "bahia",
    team2: "fluminense",
    stadium: "Arena Fonte Nova",
    time: "19:00",
    score: "1 x 1"
  },
  {
    date: "11/02",
    info: "Rodada 3ª • terça",
    team1: "vasco",
    team2: "bahia",
    stadium: "São Januário",
    time: "21:30",
    score: "0 x 1"
  },
  {
    date: "18/02",
    info: "Libertadores • 2ª fase • ida",
    team1: "o-higgins",
    team2: "bahia",
    stadium: "El Teniente",
    time: "19:00",
    score: "1 x 0"
  },
  {
    date: "25/02",
    info: "Libertadores • 2ª fase • volta",
    team1: "bahia",
    team2: "o-higgins",
    stadium: "Arena Fonte Nova",
    time: "19:00",
    score: "2 x 1 (3 x 4 pênaltis)"
  },
  {
    date: "11/03",
    info: "Rodada 5ª • terça",
    team1: "bahia",
    team2: "vitoria",
    stadium: "Arena Fonte Nova",
    time: "20:00",
    score: "1 x 1"
  },
  {
    date: "15/03",
    info: "Rodada 6ª • sábado",
    team1: "internacional",
    team2: "bahia",
    stadium: "Beira-Rio",
    time: "16:00",
    score: "0 x 1"
  },
  {
    date: "18/03",
    info: "Rodada 7ª • terça",
    team1: "bahia",
    team2: "bragantino",
    stadium: "Arena Fonte Nova",
    time: "19:00",
    score: "2 x 0"
  },
  {
    date: "22/03",
    info: "Rodada 8ª • sábado",
    team1: "remo",
    team2: "bahia",
    stadium: "Mangueirão",
    time: "16:00",
    score: "4 x 1"
  },
  {
    date: "01/04",
    info: "Rodada 9ª • quarta",
    team1: "bahia",
    team2: "athletico-pr",
    stadium: "Arena Fonte Nova",
    time: "20:00",
    score: "3 x 0"
  },
  {
    date: "05/04",
    info: "Rodada 10ª • sábado",
    team1: "bahia",
    team2: "palmeiras",
    stadium: "Arena Fonte Nova",
    time: "19:30",
    score: "1x2"
  },
  {
    date: "11/04",
    info: "Rodada 11ª • sábado",
    team1: "mirassol",
    team2: "bahia",
    stadium: "Maião",
    time: "18:30",
    score: "1x2"
  },
  {
    date: "19/04",
    info: "Rodada 12ª • domingo",
    team1: "flamengo",
    team2: "bahia",
    stadium: "Maracanã",
    time: "19:30",
    score: "x"
  },
  {
  date: "22/04",
  info: "Copa do Brasil • 5ª fase • quarta",
  team1: "bahia",
  team2: "remo",
  stadium: "Arena Fonte Nova",
  time: "19:00",
  score: "x"
},
  {
    date: "25/04",
    info: "Rodada 13ª • sábado",
    team1: "bahia",
    team2: "santos",
    stadium: "Arena Fonte Nova",
    time: "18:30",
    score: "x"
  },

    {
    date: "03/05",
    info: "Rodada 14ª • domingo",
    team1: "sao-paulo",
    team2: "bahia",
    stadium: "MorumBis",
    time: "16:00",
    score: "x"
  }

  // 2º turno do Brasileirão 2026  - Copa do Brasil
];

// 💾 salvar placar
function saveScore(id, value) {
  localStorage.setItem(id, value);
}

// 📥 pegar placar
function getScore(id) {
  return localStorage.getItem(id) || "";
}

// 🔧 normalizar nomes
function normalizeTeam(name) {
  return name
    .toLowerCase()
    .trim()
    .replaceAll(" ", "-")
    .replaceAll("ã", "a")
    .replaceAll("ç", "c");
}

// ⚽ criar jogo
function createGame(id, team1, score, team2) {
  return `
  <li class="game">

    <input type="checkbox" class="select-game" data-id="${id}">

    <div class="team">
      <img src="${shields[team1]}">
      <span>${team1.replace("-", " ")}</span>
    </div>

    <div class="info">
      <input value="${getScore(id) || score}"
      oninput="saveScore('${id}', this.value)">
    </div>

    <div class="team">
      <img src="${shields[team2]}">
      <span>${team2.replace("-", " ")}</span>
    </div>

  </li>
  `;
}

// 📅 card
function createCard(date, info, stadium, time, gamesHTML) {
  return `
  <div class="card">
    <h2>${date} <span>${info} • ${stadium} • ${time}</span></h2>
    <ul>${gamesHTML}</ul>
  </div>
  `;
}

// 🚫 duplicado
function isDuplicate(newGame) {
  return games.some(g =>
    g.date === newGame.date &&
    g.team1 === newGame.team1 &&
    g.team2 === newGame.team2
  );
}

// ➕ adicionar jogo
function addGame() {
  const game = {
    date: document.getElementById("date").value,
    info: document.getElementById("info").value,
    team1: normalizeTeam(document.getElementById("team1").value),
    team2: normalizeTeam(document.getElementById("team2").value),
    stadium: document.getElementById("stadium").value,
    time: document.getElementById("time").value,
    score: document.getElementById("score").value
  };

  if (isDuplicate(game)) {
    alert("⚠️ Esse jogo já existe!");
    return;
  }

  games.push(game);
  localStorage.setItem("games", JSON.stringify(games));
  renderGames();
}







// 🗑 excluir selecionados
function deleteSelectedGames() {
  const checkboxes = document.querySelectorAll(".select-game:checked");

  if (checkboxes.length === 0) {
    alert("⚠️ Nenhum jogo selecionado!");
    return;
  }

  const confirmacao = confirm("Tem certeza que deseja excluir os jogos selecionados?");

  if (!confirmacao) return;

  const idsToDelete = Array.from(checkboxes).map(cb => cb.dataset.id);

  games = games.filter((_, index) => !idsToDelete.includes("g" + index));

  localStorage.setItem("games", JSON.stringify(games));
  renderGames();
}


// 📊 renderizar
function renderGames() {
  let content = "";

  games.forEach((g, i) => {
    content += createCard(
      g.date,
      g.info,
      g.stadium,
      g.time,
      createGame("g" + i, g.team1, g.score, g.team2)
    );
  });

  document.querySelector("#cards").innerHTML = content;
}

// 🚀 iniciar
renderGames();

