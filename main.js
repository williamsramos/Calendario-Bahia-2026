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

  // 1º turno do Brasileirão 2026
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
    score: "2 x 1 (3 x 4)",
    result: "loser"
  },

  {
    date: "11/03",
    info: "Rodada 5ª • quarta",
    team1: "bahia",
    team2: "vitoria",
    stadium: "Arena Fonte Nova",
    time: "20:00",
    score: "1 x 1"
  },

  {
    date: "15/03",
    info: "Rodada 6ª • domingo",
    team1: "internacional",
    team2: "bahia",
    stadium: "Beira-Rio",
    time: "16:00",
    score: "0 x 1"
  },

  {
    date: "18/03",
    info: "Rodada 7ª • quarta",
    team1: "bahia",
    team2: "bragantino",
    stadium: "Arena Fonte Nova",
    time: "19:00",
    score: "2 x 0"
  },

  {
    date: "22/03",
    info: "Rodada 8ª • domingo",
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
    info: "Rodada 10ª • domingo",
    team1: "bahia",
    team2: "palmeiras",
    stadium: "Arena Fonte Nova",
    time: "19:30",
    score: "1 x 2"
  },

  {
    date: "11/04",
    info: "Rodada 11ª • sábado",
    team1: "mirassol",
    team2: "bahia",
    stadium: "Maião",
    time: "18:30",
    score: "1 x 2"
  },

  {
    date: "19/04",
    info: "Rodada 12ª • domingo",
    team1: "flamengo",
    team2: "bahia",
    stadium: "Maracanã",
    time: "19:30",
    score: "2 x 0"
  },

  {
    date: "22/04",
    info: "Copa do Brasil • 5ª fase • quarta",
    team1: "bahia",
    team2: "remo",
    stadium: "Arena Fonte Nova",
    time: "19:00",
    score: "1 x 3"
  },

  {
    date: "25/04",
    info: "Rodada 13ª • sábado",
    team1: "bahia",
    team2: "santos",
    stadium: "Arena Fonte Nova",
    time: "18:30",
    score: "2 x 2"
  },

  {
    date: "03/05",
    info: "Rodada 14ª • domingo",
    team1: "sao-paulo",
    team2: "bahia",
    stadium: "Estadio Cicero Sousa de Marques",
    time: "16:00",
    score: "2 x 2"
  },

  {
    date: "09/05",
    info: "Rodada 15ª • sábado",
    team1: "bahia",
    team2: "cruzeiro",
    stadium: "Arena Fonte Nova",
    time: "21:00",
    score: "1 x 2"
  },

  {
    date: "13/05",
    info: "Copa do Brasil • 5ª fase • volta",
    team1: "remo",
    team2: "bahia",
    stadium: "Mangueirão",
    time: "21:30",
    score: "2 x 1"
  },

  {
    date: "17/05",
    info: "Rodada 16ª • domingo",
    team1: "bahia",
    team2: "gremio",
    stadium: "Arena Fonte Nova",
    time: "16:00",
    score: "1 x 1"
  },

  {
    date: "25/05",
    info: "Rodada 17ª • segunda",
    team1: "coritiba",
    team2: "bahia",
    stadium: "Couto Pereira",
    time: "20:00",
    score: "3 x 2"
  },

  {
    date: "30/05",
    info: "Rodada 18ª • sábado",
    team1: "bahia",
    team2: "botafogo",
    stadium: "Arena Fonte Nova",
    time: "17:30",
    score: "2x1"
  },

  {
    date: "22/07",
    info: "Rodada 19ª • -",
    team1: "atletico-mg",
    team2: "bahia",
    stadium: "Arena MRV",
    time: "-",
    score: "x"
  },

  // 🔁 2º turno
  {
    date: "25/07",
    info: "Rodada 20ª • -",
    team1: "bahia",
    team2: "corinthians",
    stadium: "Arena Fonte Nova",
    time: "-",
    score: "x"
  }
];

// 🔧 normalizar nomes
function normalizeTeam(name) {
  return name
    .toLowerCase()
    .trim()
    .replaceAll(" ", "-")
    .replaceAll("ã", "a")
    .replaceAll("ç", "c");
}

// 💾 salvar placar
function saveScore(index, value) {

  games[index].score = value;

  localStorage.setItem("games", JSON.stringify(games));

  renderGames();
}

// ⚽ criar jogo
function createGame(index, team1, score, team2) {

  return `
    <li class="game">

      <input
        type="checkbox"
        class="select-game"
        data-index="${index}"
      >

      <div class="team">
        <img src="${shields[team1]}">
        <span>${team1.replace("-", " ")}</span>
      </div>

      <div class="info">

        <input
          value="${score}"
          oninput="saveScore(${index}, this.value)"
        >

      </div>

      <div class="team">
        <img src="${shields[team2]}">
        <span>${team2.replace("-", " ")}</span>
      </div>

    </li>
  `;
}

// 📅 card
function createCard(date, info, stadium, time, gamesHTML, team1, team2, score, result) {

  let extraClass = "";

  // 🟢 Libertadores
  if (info.toLowerCase().includes("libertadores")) {
    extraClass += " libertadores";
  }

  // 🟡 Copa do Brasil
  if (info.toLowerCase().includes("copa do brasil")) {
    extraClass += " copa-brasil";
  }

  // 🔥 resultado manual
  if (result) {
    extraClass += ` ${result}`;
  }

  // 🔥 resultado automático
  else if (
    score &&
    score !== "x" &&
    score.includes(" x ") &&
    !score.includes("(")
  ) {

    const placar = score.split(" x ");

    const gols1 = parseInt(placar[0]);
    const gols2 = parseInt(placar[1]);

    if (!isNaN(gols1) && !isNaN(gols2)) {

      // Bahia mandante
      if (team1 === "bahia") {

        if (gols1 > gols2) {
          extraClass += " win";
        }

        else if (gols1 < gols2) {
          extraClass += " loser";
        }

        else {
          extraClass += " draw";
        }
      }

      // Bahia visitante
      if (team2 === "bahia") {

        if (gols2 > gols1) {
          extraClass += " win";
        }

        else if (gols2 < gols1) {
          extraClass += " loser";
        }

        else {
          extraClass += " draw";
        }
      }
    }
  }

  return `
    <div class="card ${extraClass}">

      <h2>
        ${date}
        <span>${info} • ${stadium} • ${time}</span>
      </h2>

      <ul>
        ${gamesHTML}
      </ul>

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

// 🗑 excluir jogos
function deleteSelectedGames() {

  const checkboxes = document.querySelectorAll(".select-game:checked");

  if (checkboxes.length === 0) {
    alert("⚠️ Nenhum jogo selecionado!");
    return;
  }

  const confirmacao = confirm(
    "Tem certeza que deseja excluir os jogos selecionados?"
  );

  if (!confirmacao) return;

  const indexesToDelete = Array
    .from(checkboxes)
    .map(cb => Number(cb.dataset.index));

  games = games.filter(
    (_, index) => !indexesToDelete.includes(index)
  );

  localStorage.setItem("games", JSON.stringify(games));

  renderGames();
}

// 🎨 renderizar jogos
function renderGames() {

  let content = "";

  // 🔵 1º turno
  content += `
    <div class="turno-title">
      🔵 1º TURNO
    </div>
  `;

  games.forEach((g, index) => {

    // 🔁 início do 2º turno
    if (g.info.includes("20ª")) {

      content += `
        <div class="turno-title">
          🔁 2º TURNO
        </div>
      `;
    }

    content += createCard(
      g.date,
      g.info,
      g.stadium,
      g.time,

      createGame(
        index,
        g.team1,
        g.score,
        g.team2
      ),

      g.team1,
      g.team2,
      g.score,
      g.result
    );
  });

  document.querySelector("#cards").innerHTML = content;
}

// 🚀 iniciar
renderGames();