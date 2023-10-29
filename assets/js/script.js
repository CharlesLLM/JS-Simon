import { AIStart } from "./game.js";

// Game interface
const gameInterface = document.getElementById("interface");
// Play putton
const playButton = document.createElement("button");
playButton.innerText = "Jouer";
playButton.classList.add("play-button");
gameInterface.appendChild(playButton);
// Colors
const colorCases = document.getElementsByClassName("case");
const colors = [...colorCases].map((colorCase) => colorCase.getAttribute("value"));
// Score
const scoreDiv = document.createElement("div");
scoreDiv.classList.add("score");
let countScore = 0;
scoreDiv.innerHTML = "Score: " + countScore;

// Play
playButton.addEventListener("click", (event) => {
  event.target.remove();
  gameInterface.appendChild(scoreDiv);
  AIStart(colors);
});
