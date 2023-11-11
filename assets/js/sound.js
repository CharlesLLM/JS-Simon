// Sound
export default function playSound(soundFileName) {
    const audio = new Audio(`./assets/song/${soundFileName}.mp3`);
    audio.play();
}
