import { flashColor } from './color.js';

// Update AI Pattern function
const updateAIPattern = (AIPattern) => {
  const colorCases = document.getElementsByClassName("case");
  const colors = [...colorCases].map((colorCase) => colorCase.getAttribute("value"));
  if (AIPattern.length > 1) {
    AIPattern.push(colors[Math.floor(Math.random() * colors.length)]);
  } else {
    for (let i=0; i<3; i++) {
      AIPattern.push(colors[Math.floor(Math.random() * colors.length)]);
    }
  }

  return AIPattern;
}

// AI Turn function
export const AITurn = (AIPattern) => {
  AIPattern = updateAIPattern(AIPattern);
  let i = 0;
  let AIinterval = setInterval(() => {
    const colorCase = document.querySelector(`[value="${AIPattern[i]}"]`);
    flashColor(colorCase);
    if (i === AIPattern.length-1) {
      clearInterval(AIinterval);
    }
    i++;
  }, 750);

  return AIPattern;
}

// Check user pattern function
export const userCheck = (userPattern, AIPattern) => {
  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] !== AIPattern[i]) {
      return false;
    }
  }

  return true;
}
