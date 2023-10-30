// Timer
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Flashing
export const flashColor = (cas) => {
  cas.classList.add('active');
  sleep(150).then(() => {
    cas.classList.remove('active');
  });
}
