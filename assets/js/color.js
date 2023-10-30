// Timer
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Flashing
function flashColor(cas) {
  cas.classList.add('active');
  sleep(150).then(() => {
    cas.classList.remove('active');
  });
}
