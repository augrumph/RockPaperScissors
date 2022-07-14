const jogadas = ["pedra", "papel", "tesoura"];
const valores = document.querySelectorAll(".choice");

let apagador = document.getElementById("clear");
let player = document.getElementById("player");
let pc = document.getElementById("pc");
let resultado = document.getElementById("resultado");
let wins = document.getElementById("vitorias");
let looses = document.getElementById("derrotas");
let draws = document.getElementById("empates");
let vitorias = 0;
let derrotas = 0;
let empates = 0;

const jogada = () => {
  valores.forEach((valor) => {
    valor.onclick = () => {
      let computador = jogadas[Math.floor(Math.random() * jogadas.length)];
      player.innerText = valor.value;
      pc.innerText = computador;

      if (valor.value == "pedra" && computador == "papel") {
        derrotas += 1;
        looses.innerText = derrotas;
        resultado.innerText = "PC WINS";
      } else if (valor.value == "pedra" && computador == "tesoura") {
        vitorias += 1;
        wins.innerText = vitorias + " :";
        resultado.innerText = "YOU WIN";
      } else if (valor.value == "papel" && computador == "tesoura") {
        derrotas += 1;
        looses.innerText = derrotas;
        resultado.innerText = "PC WINS";
      } else if (valor.value == "papel" && computador == "pedra") {
        vitorias += 1;
        wins.innerText = vitorias + " :";
        resultado.innerText = "YOU WIN";
      } else if (valor.value == "tesoura" && computador == "pedra") {
        derrotas += 1;
        looses.innerText = derrotas;
        resultado.innerText = "PC WINS";
      } else if (valor.value == "tesoura" && computador == "papel") {
        vitorias += 1;
        wins.innerText = vitorias + " :";
        resultado.innerText = "YOU WIN";
      } else if (valor.value == computador) {
        resultado.innerText = "Draw";
      }
    };
  });
};

apagador.onclick = () => clear();
function clear() {
  vitorias = 0;
  derrotas = 0;
  wins.innerText = vitorias;
  looses.innerText = derrotas;
  resultado.innerText = "";
  pc.innerText = "";
  player.innerText = "";
}
