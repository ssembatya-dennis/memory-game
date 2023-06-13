type DivElement = HTMLDivElement | null;
type ButtonElement = HTMLButtonElement | null;

const moveContainerEl: DivElement = document.getElementById(
  "move-count"
) as HTMLDivElement;
const timeContainerEl: DivElement = document.getElementById(
  "time"
) as HTMLDivElement;
const startButtonEl: ButtonElement = document.getElementById(
  "start"
) as HTMLButtonElement;
const reStartButtonEl: ButtonElement = document.getElementById(
  "restart-btn"
) as HTMLButtonElement;
const newGameButtonEl: ButtonElement = document.getElementById(
  "new-game"
) as HTMLButtonElement;
const startScreenContainerEl: DivElement = document.querySelector(
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
const numberThemeButtonEl: ButtonElement = document.getElementById(
  "number_theme"
) as HTMLButtonElement;
const iconThemeButtonEl: ButtonElement = document.getElementById(
  "icon_theme"
) as HTMLButtonElement;
const playerOptionButton1El: ButtonElement = document.getElementById(
  "player_Opt_1"
) as HTMLButtonElement;
const playerOptionButton2El: ButtonElement = document.getElementById(
  "player_Opt_2"
) as HTMLButtonElement;
const playerOptionButton3El: ButtonElement = document.getElementById(
  "player_Opt_3"
) as HTMLButtonElement;
const playerOptionButton4El: ButtonElement = document.getElementById(
  "player_Opt_4"
) as HTMLButtonElement;
const gridSize4ButtonEl: ButtonElement = document.getElementById(
  "grid_size_4"
) as HTMLButtonElement;
const gridSize6ButtonEl: ButtonElement = document.getElementById(
  "grid_size_6"
) as HTMLButtonElement;
export {
  moveContainerEl,
  timeContainerEl,
  startButtonEl,
  reStartButtonEl,
  newGameButtonEl,
  startScreenContainerEl,
  gameContainerEl,
  gameBoardContainerEl,
  controlsContainerEl,
  numberThemeButtonEl,
  iconThemeButtonEl,
  playerOptionButton1El,
  playerOptionButton2El,
  playerOptionButton3El,
  playerOptionButton4El,
  gridSize4ButtonEl,
  gridSize6ButtonEl,
};
