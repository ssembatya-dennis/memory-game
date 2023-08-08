import { moveContainerEl } from "../elements";

let movesCount = 0;

export const startMovesCounter = () => {
  movesCount += 1;
  localStorage.setItem("moves", `${movesCount} Moves`);
  moveContainerEl.innerHTML = `<span>${movesCount}</span>`;
};

export const resetMovesCounter = () => {
  movesCount = 0;
  moveContainerEl.innerHTML = `<span>${movesCount}</span>`;
};

/////////////////////////////////////////////////////////////////
/////////////////////// Manage Multiple Player Moves

export const multiplayerMovesCounter = (multiStats: []) => {
  movesCount += 1;
  localStorage.setItem("moves", `${movesCount} Moves`);
  multiStats.forEach(
    (stat: HTMLDivElement) => (stat.innerText = `${movesCount}`)
  );
};
