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

      if (valor.value == "pedra" && computador == "papel") {
        derrotas += 1;
        looses.innerText = derrotas;
        player.innerHTML = `<img src='Assets/pedra.png' width = 65px/>`;
        pc.innerHTML = `<img src='Assets/arquivo.png' width = 65px/>`;
        resultado.innerHTML = `<img src='Assets/robot.png' width = 65px/>`;
      } else if (valor.value == "pedra" && computador == "tesoura") {
        vitorias += 1;
        wins.innerText = vitorias + " :";
        player.innerHTML = `<img src='Assets/pedra.png' width = 65px/>`;
        pc.innerHTML = `<img src='Assets/tesoura.png' width = 65px/>`;
        resultado.innerHTML = `<img src='Assets/nerd.png' width = 65px/>`;
      } else if (valor.value == "papel" && computador == "tesoura") {
        derrotas += 1;
        looses.innerText = derrotas;
        player.innerHTML = `<img src='Assets/arquivo.png' width = 65px/>`;
        pc.innerHTML = `<img src='Assets/tesoura.png' width = 65px/>`;
        resultado.innerHTML = `<img src='Assets/robot.png' width = 65px/>`;
      } else if (valor.value == "papel" && computador == "pedra") {
        vitorias += 1;
        wins.innerText = vitorias + " :";
        player.innerHTML = `<img src='Assets/arquivo.png' width = 65px/>`;
        pc.innerHTML = `<img src='Assets/pedra.png' width = 65px/>`;
        resultado.innerHTML = `<img src='Assets/nerd.png' width = 65px/>`;
      } else if (valor.value == "tesoura" && computador == "pedra") {
        derrotas += 1;
        looses.innerText = derrotas;
        player.innerHTML = `<img src='Assets/tesoura.png' width = 65px/>`;
        pc.innerHTML = `<img src='Assets/pedra.png' width = 65px/>`;
        resultado.innerHTML = `<img src='Assets/robot.png' width = 65px/>`;
      } else if (valor.value == "tesoura" && computador == "papel") {
        vitorias += 1;
        wins.innerText = vitorias + " :";
        player.innerHTML = `<img src='Assets/tesoura.png' width = 65px/>`;
        pc.innerHTML = `<img src='Assets/arquivo.png' width = 65px/>`;
        resultado.innerHTML = `<img src='Assets/nerd.png' width = 65px/>`;
      } else if (valor.value == computador) {
        resultado.innerHTML = `<img src='Assets/draw.png' width = 65px/>`;
        player.innerHTML = `<img src='Assets/draw.png' width = 65px/>`;
        pc.innerHTML = `<img src='Assets/draw.png' width = 65px/>`;
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
  player.innerHTML = "";
  pc.innerHTML = "";
}
