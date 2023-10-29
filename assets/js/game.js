// Update AI Pattern function
export const updateAIPattern = (colors, AIPattern) => {
  const toAddNumber = AIPattern.length > 0 ? 1 : 3;
  for (let i=0; i<toAddNumber; i++) {
    AIPattern.push(colors[Math.floor(Math.random() * colors.length)]);
  }

  return AIPattern;
}
