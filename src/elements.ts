type DivElement = HTMLDivElement | null;
type ButtonElement = HTMLButtonElement | null;

const moveContainerEl: HTMLDivElement = document.getElementById(
  "move-count"
) as HTMLDivElement;
const timeContainerEl: HTMLDivElement = document.getElementById(
  "time"
) as HTMLDivElement;
const startButton: ButtonElement = document.getElementById(
  "start"
) as HTMLButtonElement;
const reStartButton: ButtonElement = document.getElementById(
  "restart-btn"
) as HTMLButtonElement;
const reStartBtnMobile: ButtonElement = document.getElementById(
  "restart-btn--mobile"
) as HTMLButtonElement;
const newGameButton: ButtonElement = document.getElementById(
  "new-game"
) as HTMLButtonElement;
const newGameBtnMobile: ButtonElement = document.getElementById(
  "new-game--mobile"
) as HTMLButtonElement;
const startScreenDisplayEl: DivElement = document.querySelector(
  ".start-screen"
) as HTMLDivElement;
const gameContainerEl: DivElement = document.querySelector(
  ".game-container"
) as HTMLDivElement;
const gameBoardContainerEl: HTMLDivElement = document.querySelector(
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
const menuMobileButton: HTMLButtonElement = document.querySelector(
  "[data-modal-target]"
) as HTMLButtonElement;
const overlay: HTMLDivElement = document.getElementById(
  "overlay"
) as HTMLDivElement;
const mobileModal: HTMLDivElement = document.getElementById(
  "modal-mobile"
) as HTMLDivElement;
const resume: ButtonElement = document.getElementById(
  "resume"
) as HTMLButtonElement;
const winnerScreen: DivElement = document.getElementById(
  "winner-screen"
) as HTMLDivElement;
export {
  moveContainerEl,
  timeContainerEl,
  startButton,
  reStartButton,
  reStartBtnMobile,
  newGameButton,
  newGameBtnMobile,
  resume,
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
  winnerScreen,
  menuMobileButton,
  overlay,
  mobileModal,
};
