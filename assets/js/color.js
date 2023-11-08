// Flashing
export const flashColor = (cas) => {
  cas.classList.add('active');
  setTimeout(() => {
    cas.classList.remove('active');
  }, 200);
}
