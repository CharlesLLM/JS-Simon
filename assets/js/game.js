export const AIStart = (colors) => {
  const AIPattern = [];
  for (let i = 0; i < 3; i++) {
    AIPattern.push(colors[Math.floor(Math.random() * colors.length)]);
  }
}
