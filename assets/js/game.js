import { flashColor, sleep } from './color.js';

// Update AI Pattern function
export const updateAIPattern = (colors, AIPattern) => {
  const toAddNumber = AIPattern.length > 0 ? 1 : 3;
  for (let i=0; i<toAddNumber; i++) {
    AIPattern.push(colors[Math.floor(Math.random() * colors.length)]);
  }

  return AIPattern;
}

// AI Turn function
export const AITurn = async (colors, AIPattern) => {
  AIPattern = updateAIPattern(colors, AIPattern);
  for (let i=0; i<AIPattern.length; i++) {
    const cas = document.querySelector(`[value="${AIPattern[i]}"]`);
    flashColor(cas);
    await sleep(500);
  }

  return AIPattern;
}
