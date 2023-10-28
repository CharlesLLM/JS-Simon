// Play putton
const playButton = document.createElement("button");
playButton.innerText = "Jouer";
playButton.classList.add("button", "play-button");
const interface = document.getElementById("interface");
interface.appendChild(playButton);

// Score
const scoreDiv = document.createElement("div");
scoreDiv.classList.add("score");
let countScore = 0;
scoreDiv.innerHTML = "Score: " + countScore;

// Play
playButton.addEventListener("click", (e) => {
  e.target.remove();
  interface.appendChild(scoreDiv);
});
