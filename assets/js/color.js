import { playSound } from "./sound.js";

// Flashing and playing sound
export const flashColor = (cas) => {
  cas.classList.add("active");
  playSound(cas.getAttribute("data-sound"));
  setTimeout(() => {
    cas.classList.remove("active");
  }, 200);
}
