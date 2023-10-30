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

// Cases
const cases = document.querySelectorAll('.case');

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function flashColor(cas) {
  cas.classList.add('active');
  sleep(150).then(() => {
    cas.classList.remove('active');
  });
}

cases.forEach(cas => {
  cas.addEventListener('click', () => {
    flashColor(cas);
  });
});

// Play
playButton.addEventListener("click", (e) => {
  e.target.remove();
  interface.appendChild(scoreDiv);
});
