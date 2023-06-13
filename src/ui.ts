import {
  startButtonEl,
  startScreenContainerEl,
  gameContainerEl,
  numberThemeButtonEl,
  iconThemeButtonEl,
  playerOptionButton1El,
  playerOptionButton2El,
  playerOptionButton3El,
  playerOptionButton4El,
  gridSize4ButtonEl,
  gridSize6ButtonEl,
} from "./elements";
import { setState, state } from "./state";

function startGame() {
  setState({
    gameState: "ongoing",
  });
}

function setTheme(theme: "icons" | "numbers") {
  setState({ gameTheme: theme });
}

function setNumberOfPlayers(numberOfPlayers: number) {
  setState({ numberOfPlayers: numberOfPlayers });
}

function setGridSize(gridSize: number) {
  setState({ gridSize: gridSize });
}

export function buildUI() {
  updateGameScreen();
  if (state.gameState === "start") {
    updateGameTheme();
    updateNumberOfPlayers();
    updateGridSize();
  }
}

function updateGameScreen() {
  if (state.gameState === "ongoing") {
    startScreenContainerEl?.classList.add("hide");
    gameContainerEl?.classList.remove("hide");
  } else {
    startScreenContainerEl?.classList.remove("hide");
    gameContainerEl?.classList.add("hide");
  }
}

function updateGameTheme() {
  if (state.gameTheme === "numbers") {
    numberThemeButtonEl?.classList.add("menu-button-active");
    iconThemeButtonEl?.classList.remove("menu-button-active");
  }

  if (state.gameTheme === "icons") {
    numberThemeButtonEl?.classList.remove("menu-button-active");
    iconThemeButtonEl?.classList.add("menu-button-active");
  }
}

function updateGridSize() {
  if (state.gridSize === 4) {
    gridSize4ButtonEl?.classList.add("menu-button-active");
    gridSize6ButtonEl?.classList.remove("menu-button-active");
  }

  if (state.gridSize === 6) {
    gridSize4ButtonEl?.classList.remove("menu-button-active");
    gridSize6ButtonEl?.classList.add("menu-button-active");
  }
}

function updateNumberOfPlayers() {
  const activeNumberOfPlayer = state.numberOfPlayers;

  const playerOptions = [
    playerOptionButton1El,
    playerOptionButton2El,
    playerOptionButton3El,
    playerOptionButton4El,
  ];

  playerOptions.forEach((playerOption, playerIndex) => {
    let activeNumberOfPlayerIndex = activeNumberOfPlayer - 1;
    if (playerIndex === activeNumberOfPlayerIndex) {
      playerOption?.classList.add("menu-button-active");
    } else {
      playerOption?.classList.remove("menu-button-active");
    }
  });
}

export function attachEventListeners() {
  // add theme Btns event listeners
  numberThemeButtonEl?.addEventListener("click", () => setTheme("numbers"));
  iconThemeButtonEl?.addEventListener("click", () => setTheme("icons"));

  // add numberOfPlayers event listerners
  [
    playerOptionButton1El,
    playerOptionButton2El,
    playerOptionButton3El,
    playerOptionButton4El,
  ].forEach((player, index) => {
    player?.addEventListener("click", () => setNumberOfPlayers(index + 1));
  });

  // add gridSize Btns event listerners
  gridSize4ButtonEl?.addEventListener("click", () => setGridSize(4));
  gridSize6ButtonEl?.addEventListener("click", () => setGridSize(6));

  // add start Btn event listeners
  startButtonEl?.addEventListener("click", () => {
    startGame();
  });
}
