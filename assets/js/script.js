import { flashColor } from './color.js';
import { AITurn, userCheck } from "./game.js";

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
// Patterns
let AIPattern = [];
let userPattern = [];
// Cases
const cases = [...document.getElementsByClassName("case")];

// Play function
playButton.addEventListener("click", (event) => {
  event.target.remove();
  gameInterface.appendChild(scoreDiv);
  AIPattern = AITurn(AIPattern);

  userPattern = [];
  cases.forEach((colorCase) => colorCase.addEventListener("click", userTurn));
});

const userTurn = (e) => {
  let valid = true;
  flashColor(e.target);
  userPattern.push(e.target.getAttribute("value"));
  valid = userCheck(userPattern, AIPattern);
  if (valid === false) {
    alert("Perdu !");
    reset();
  }
  if (userPattern.length === AIPattern.length && valid === true) {
    score++;
    scoreDiv.innerHTML = "Score: " + score;
    userPattern = [];
    AIPattern = AITurn(AIPattern);
  }
}

const reset = () => {
  score = 0;
  scoreDiv.innerHTML = "Score: " + score;
  AIPattern = [];
  userPattern = [];
  cases.forEach((colorCase) => colorCase.removeEventListener("click", userTurn));
  gameInterface.removeChild(scoreDiv);
  gameInterface.appendChild(playButton);
}
