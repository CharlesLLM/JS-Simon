import { flashColor } from './color.js';
import { AITurn, userCheck } from "./game.js";

// Game interface where play button and score are displayed
const gameInterface = document.getElementById("interface");

// Color cases
const cases = [...document.getElementsByClassName("case")];

// Play button to start the game
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

// Start function
playButton.addEventListener("click", (event) => {
  // First turn initialization
  event.target.remove();
  gameInterface.appendChild(scoreDiv);
  AIPattern = AITurn(AIPattern);
  userPattern = [];

  // Game start
  cases.forEach((colorCase) => colorCase.addEventListener("click", userTurn));
});

const userTurn = (e) => {
  let valid = true;
  flashColor(e.target);
  userPattern.push(e.target.getAttribute("value"));
  valid = userCheck(userPattern, AIPattern);
  // If the user entered a wrong pattern
  if (valid === false) {
    alert(`Perdu !\nScore : ${score}`);
    reset();
  }

  // If the user entered the right pattern
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
