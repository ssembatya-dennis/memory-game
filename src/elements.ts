type DivElement = HTMLDivElement | null;
type ButtonElement = HTMLButtonElement | null;

const moveContainerEl: DivElement = document.getElementById(
  "move-count"
) as HTMLDivElement;
const timeContainerEl: DivElement = document.getElementById(
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
const startScreenDisplayEl: DivElement = document.querySelector(
  ".start-screen"
) as HTMLDivElement;
const gameContainerEl: DivElement = document.querySelector(
  ".game-container"
) as HTMLDivElement;
const gameBoardContainerEl: DivElement = document.querySelector(
  ".game-board"
) as HTMLDivElement;
const controlsContainerEl: DivElement = document.querySelector(
  ".game-controls"
) as HTMLDivElement;
const numberThemeButton: ButtonElement = document.getElementById(
  "number_theme"
) as HTMLButtonElement;
const iconThemeButton: ButtonElement = document.getElementById(
  "icon_theme"
) as HTMLButtonElement;
const playerButtonOption1: ButtonElement = document.getElementById(
  "player_Opt_1"
) as HTMLButtonElement;
const playerButtonOption2: ButtonElement = document.getElementById(
  "player_Opt_2"
) as HTMLButtonElement;
const playerButtonOption3: ButtonElement = document.getElementById(
  "player_Opt_3"
) as HTMLButtonElement;
const playerButtonOption4: ButtonElement = document.getElementById(
  "player_Opt_4"
) as HTMLButtonElement;
const gridBtnOption1: ButtonElement = document.getElementById(
  "grid_size_4"
) as HTMLButtonElement;
const gridBtnOption2: ButtonElement = document.getElementById(
  "grid_size_6"
) as HTMLButtonElement;
export {
  moveContainerEl,
  timeContainerEl,
  startButton,
  reStartButton,
  newGameButton,
  startScreenDisplayEl,
  gameContainerEl,
  gameBoardContainerEl,
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
