type DivElement = HTMLDivElement;
type ButtonElement = HTMLButtonElement;

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

const openModalButton: ButtonElement | any = document.querySelector(
  "[data-modal-target]"
) as HTMLButtonElement;
const closeModalButton: ButtonElement = document.querySelector(
  "[data-close-button]"
) as HTMLButtonElement;
const overlay: DivElement = document.getElementById(
  "overlay"
) as HTMLDivElement;

// Items array
const items = [
  { name: "football", icon: "football" },
  { name: "anchor", icon: "anchor" },
  { name: "flask", icon: "flask" },
  { name: "sun", icon: "sun" },
  { name: "hand-spock", icon: "hand-spock" },
  { name: "bug", icon: "bug" },
  { name: "moon", icon: "moon" },
  { name: "snow-flake", icon: "snow-flake" },
  { name: "lira-sign", icon: "lira-sign" },
  { name: "car", icon: "car" },
];

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
  openModalButton,
  closeModalButton,
  overlay,
};
