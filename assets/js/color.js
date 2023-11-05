// Timer
export const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Flashing
export const flashColor = (cas) => {
  cas.classList.add('active');
  sleep(200).then(() => {
    cas.classList.remove('active');
  });
}
