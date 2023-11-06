import { flashColor, sleep } from './color.js';

// Update AI Pattern function
export const updateAIPattern = (AIPattern) => {
  const colorCases = document.getElementsByClassName("case");
  const colors = [...colorCases].map((colorCase) => colorCase.getAttribute("value"));
  const toAddNumber = AIPattern.length > 0 ? 1 : 3;
  for (let i=0; i<toAddNumber; i++) {
    AIPattern.push(colors[Math.floor(Math.random() * colors.length)]);
  }

  return AIPattern;
}

// AI Turn function
export const AITurn = async (AIPattern) => {
  AIPattern = updateAIPattern(AIPattern);
  await sleep(300);
  for (let i=0; i<AIPattern.length; i++) {
    const cas = document.querySelector(`[value="${AIPattern[i]}"]`);
    flashColor(cas);
    await sleep(750);
  }

  return AIPattern;
}
