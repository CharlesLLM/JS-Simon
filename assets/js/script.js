// Play putton
const button = document.createElement("button");
button.innerText = "Jouer";
button.classList.add("button", "play-button");
const buttonInterface = document.getElementById("interface");
buttonInterface.appendChild(button);

button.addEventListener("click", (e) => {
  e.target.remove();
  alert("JOUE");
});
