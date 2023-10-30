// Cases
const cases = document.querySelectorAll(".case");

// Timer flashing
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Flashing
function flashColor(cas) {
  cas.classList.add("active");
  sleep(150).then(() => {
    cas.classList.remove("active");
  });
}

// Flashing click
cases.forEach(cas => {
  cas.addEventListener("click", () => {
    flashColor(cas);
  });
});
