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



const cases = document.querySelectorAll('.case');


// function test(){
//   this.className += ' active';
// }

// setTimeout("test()", 2000);

cases.forEach(cas => {
  cas.addEventListener('click', function() {
    this.className += ' active';
  });
});






// document.getElementsByClassName("case").addEventListener("click", function() {
//   alert("Hello World!");
// });









// Play
playButton.addEventListener("click", (e) => {
  e.target.remove();
  interface.appendChild(scoreDiv);
});
