import { moveContainerEl } from "../elements";

let movesCount = 0;

export const startMovesCounter = () => {
  movesCount += 1;
  moveContainerEl.innerHTML = `<span>${movesCount}</span>`;
};

export const resetMovesCounter = () => {
  movesCount = 0;
  moveContainerEl.innerHTML = `<span>${movesCount}</span>`;
};
