// Sound
export function playSound(soundFileName) {
    const audio = new Audio(`./assets/sound/${soundFileName}.mp3`);
    audio.play();
}
