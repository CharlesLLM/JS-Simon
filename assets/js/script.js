// BUTTON PLAY
const button = document.createElement("button");
button.innerText = "Jouer";
const buttonInterface = document.getElementById("interface");
buttonInterface.appendChild(button);

//EVENT BUTTON
button.addEventListener("click", function() {
    alert("JOUE");
});
