import { turn } from "./game.js";

// Game interface
const gameInterface = document.getElementById("interface");
// Play button
const playButton = document.createElement("button");
playButton.innerText = "Jouer";
playButton.classList.add("play-button");
gameInterface.appendChild(playButton);
// Score
const scoreDiv = document.createElement("div");
scoreDiv.classList.add("score");
let score = 0;
scoreDiv.innerHTML = "Score: " + score;
// AI pattern
let AIPattern = [];

// Play function
playButton.addEventListener("click", (event) => {
  event.target.remove();
  gameInterface.appendChild(scoreDiv);
  AIPattern = turn(AIPattern);
});
