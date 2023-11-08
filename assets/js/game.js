import { flashColor } from './color.js';

// Update AI Pattern function
export const updateAIPattern = (AIPattern) => {
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
  let interval = setInterval(() => {
    const cas = document.querySelector(`[value="${AIPattern[i]}"]`);
    flashColor(cas);
    if (i === AIPattern.length-1) {
      clearInterval(interval);
    }
    i++;
  }, 750);

  return AIPattern;
}

// User turn function
export const userTurn = (AIPattern) => {
  const cases = [...document.getElementsByClassName("case")];
  let userPattern = [];
  let valid;
  cases.forEach((colorCase) => {
    colorCase.addEventListener("click", (e) => {
      flashColor(e.target);
      userPattern.push(e.target.getAttribute("value"));
      valid = userCheck(userPattern, AIPattern);
      if (valid === false) {
        return alert("Perdu !");
        // restart();
      }
      if (userPattern.length === AIPattern.length && valid === true) {
        userPattern = [];
        AIPattern = turn(AIPattern);
      }
    });
  });
}

// Check user pattern function
const userCheck = (userPattern, AIPattern) => {
  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] !== AIPattern[i]) {
      return false;
    }
  }

  return true;
}

// Full turn function
export const turn = (AIPattern) => {
  AIPattern = AITurn(AIPattern);
  userTurn(AIPattern);

  return AIPattern;
}
