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
const numberThemeButton: ButtonElement = document.getElementById(
  "number_theme"
) as HTMLButtonElement;
const iconThemeButton: ButtonElement = document.getElementById(
  "icons_theme"
) as HTMLButtonElement;
const playerButtonOption1: ButtonElement = document.getElementById(
  "player_option-1"
) as HTMLButtonElement;
const playerButtonOption2: ButtonElement = document.getElementById(
  "player_option-2"
) as HTMLButtonElement;
const playerButtonOption3: ButtonElement = document.getElementById(
  "player_option-3"
) as HTMLButtonElement;
const playerButtonOption4: ButtonElement = document.getElementById(
  "player_option-4"
) as HTMLButtonElement;
const gridBtnOption1: ButtonElement = document.getElementById(
  "grid_option-1"
) as HTMLButtonElement;
const gridBtnOption2: ButtonElement = document.getElementById(
  "grid_option-2"
) as HTMLButtonElement;

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
  numberThemeButton,
  iconThemeButton,
  playerButtonOption1,
  playerButtonOption2,
  playerButtonOption3,
  playerButtonOption4,
  gridBtnOption1,
  gridBtnOption2,
};
