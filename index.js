const gameStart = document.getElementById("start");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

function updatePlayers() {
  const player1Name = document.getElementById("player1Name");
  const player2Name = document.getElementById("player2Name");

  player1Name.innerText = player1.value;
  player2Name.innerText = player2.value;
}

gameStart.addEventListener("click", function () {
  updatePlayers();
  player1.value = "";
  player2.value = "";
});
