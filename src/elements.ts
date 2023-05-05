type ContainerElement = HTMLDivElement | null;
type ButtonElement = HTMLButtonElement | null;

const movesDisplayEl: ContainerElement = document.getElementById(
  "move-count"
) as HTMLDivElement;
const timeDisplayEl: ContainerElement = document.getElementById(
  "time"
) as HTMLDivElement;
const startButton: ButtonElement = document.getElementById(
  "start"
) as HTMLButtonElement;
const reStartButton: ButtonElement = document.getElementById(
  "restart-btn"
) as HTMLButtonElement;
const newGameButton: ButtonElement = document.getElementById(
  "new-game"
) as HTMLButtonElement;
const startScreenDisplayEl: ContainerElement = document.querySelector(
  ".start-screen"
) as HTMLDivElement;
const gameContainerEl: ContainerElement = document.querySelector(
  ".game-container"
) as HTMLDivElement;
const gameBoardEl: ContainerElement = document.querySelector(
  ".game-board"
) as HTMLDivElement;
const controlsContainerEl: ContainerElement = document.querySelector(
  ".game-controls"
) as HTMLDivElement;

export {
  movesDisplayEl,
  timeDisplayEl,
  startButton,
  reStartButton,
  newGameButton,
  startScreenDisplayEl,
  gameContainerEl,
  gameBoardEl,
  controlsContainerEl,
};
