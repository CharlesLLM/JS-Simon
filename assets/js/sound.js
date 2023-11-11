// Sound
export function playSound(soundFileName) {
    const audio = new Audio(`./assets/sound/${soundFileName}.mp3`);
    audio.play();
}

export function clickSound() {
    const colorCases = document.querySelectorAll('.case');
    colorCases.forEach(colorCase => {
        colorCase.addEventListener('click', () => {
            const soundClass = colorCase.getAttribute('data-sound');
            playSound(soundClass);
        });
    });
}
