import { AITurn } from "./game.js";
import { flashColor } from "./color.js";

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
let countScore = 0;
scoreDiv.innerHTML = "Score: " + countScore;
// AI pattern
let AIPattern = [];

// Play function
playButton.addEventListener("click", (event) => {
  event.target.remove();
  gameInterface.appendChild(scoreDiv);
  AIPattern = AITurn(AIPattern);
});
