import { moveContainerEl } from "./elements";

// For calculating moves
let movesCount = 0;

const movesCounter = () => {
  movesCount += 1;
  moveContainerEl.innerHTML = `<span>${movesCount}</span>`;
};
