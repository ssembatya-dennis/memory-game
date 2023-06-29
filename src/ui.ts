import {
  startScreenDisplayEl,
  gameContainerEl,
  newGameButton,
  startButton,
  reStartButton,
  numberThemeButton,
  iconThemeButton,
  playerButtonOption1,
  playerButtonOption2,
  playerButtonOption3,
  playerButtonOption4,
  gridBtnOption1,
  gridBtnOption2,
  menuMobileButton,
  mobileModal,
  reStartBtnMobile,
  newGameBtnMobile,
  resume,
  winnerScreen,
  reStartBtnWinner,
  newGameBtnWinner,
  soloStats,
  multipleStats,
} from "./elements";
import { state, setState, resetState } from "./state";
import { generateRandom, matrixGenerator } from "./game";
import { startTimer, resetTimer, stopTimer } from "./utils/manageTime";
import { resetMovesCounter } from "./utils/manageMoves";
import { closeModal, openModal } from "./utils/modal";

export function startGame() {
  setState({
    gameState: "ongoing",
  });
}

export function newGame() {
  resetState();
}

export function restartGame() {
  setState({
    flippedCards: [],
    elapsedTimeInMilliseconds: 0,
    winner: 0,
    gameState: "ongoing",
  });
}

function toggleTheme(newTheme: "icons" | "numbers") {
  setState({
    gameTheme: newTheme,
  });
}

function setGridSize(newGridSize: number) {
  setState({
    gridSize: newGridSize,
  });
}

function setNumberOfPlayers(newNumber: number) {
  setState({
    numberOfPlayers: newNumber,
  });
}

function boardConstructor() {
  let cardValues = generateRandom(state.gridSize);
  matrixGenerator(cardValues, state.gridSize);
}

export function attachGameSettingsControlListeners() {
  // Add Player Button Listeners
  [
    playerButtonOption1,
    playerButtonOption2,
    playerButtonOption3,
    playerButtonOption4,
  ].forEach((playerButton, index) => {
    playerButton?.addEventListener("click", () =>
      setNumberOfPlayers(index + 1)
    );
  });

  // Add Grid Button Listeners
  gridBtnOption1?.addEventListener("click", () => setGridSize(4));
  gridBtnOption2?.addEventListener("click", () => setGridSize(6));

  // Add Theme Button Listeners
  numberThemeButton?.addEventListener("click", () => toggleTheme("numbers"));
  iconThemeButton?.addEventListener("click", () => toggleTheme("icons"));

  // Add Start Button listeners
  startButton?.addEventListener("click", () => {
    startGame();
    startTimer();
    boardConstructor();
    console.log(state.numberOfPlayers);
  });

  // Add reStart Button listeners
  reStartButton?.addEventListener("click", () => {
    restartGame();
    resetTimer();
    resetMovesCounter();
    boardConstructor();
  });

  // Add newGame button listeners
  newGameButton?.addEventListener("click", () => {
    newGame();
    stopTimer();
    resetMovesCounter();
  });

  ///////////////////////////////////////////////////////
  ///// Mobile controls
  menuMobileButton.addEventListener("click", () => {
    openModal(mobileModal);
    startTimer();
  });

  reStartBtnMobile?.addEventListener("click", () => {
    restartGame();
    resetTimer();
    resetMovesCounter();
    boardConstructor();
    closeModal(mobileModal);
  });

  newGameBtnMobile?.addEventListener("click", () => {
    newGame();
    stopTimer();
    resetMovesCounter();
    closeModal(mobileModal);
  });

  resume?.addEventListener("click", () => {
    startTimer();
    closeModal(mobileModal);
  });

  //////////////////////////////////////////////////
  ////////// Winner Screen

  reStartBtnWinner?.addEventListener("click", () => {
    restartGame();
    resetTimer();
    resetMovesCounter();
    boardConstructor();
    closeModal(winnerScreen);
  });

  newGameBtnWinner?.addEventListener("click", () => {
    newGame();
    stopTimer();
    resetMovesCounter();
    closeModal(winnerScreen);
  });
}

export function buildUI() {
  updateGameScreen();
  if (state.gameState === "start") {
    updateThemeButtons();
    updatePlayerNumberButtons();
    updateGridSizeButtons();
    updatePlayerStats();
  }
}

function updateGameScreen() {
  if (state.gameState === "ongoing") {
    startScreenDisplayEl?.classList.add("hide");
    gameContainerEl?.classList.remove("hide");
  } else if (state.gameState === "start") {
    startScreenDisplayEl?.classList.remove("hide");
    gameContainerEl?.classList.add("hide");
  }
}

function updateThemeButtons() {
  if (state.gameTheme === "icons") {
    numberThemeButton?.classList.remove("menu-button-active");
    iconThemeButton?.classList.add("menu-button-active");
  } else if (state.gameTheme === "numbers") {
    numberThemeButton?.classList.add("menu-button-active");
    iconThemeButton?.classList.remove("menu-button-active");
  }
}

function updatePlayerNumberButtons() {
  const activeCardNumber = state.numberOfPlayers;

  const cards = [
    playerButtonOption1,
    playerButtonOption2,
    playerButtonOption3,
    playerButtonOption4,
  ];

  const activeCardIndex = activeCardNumber - 1;
  cards.forEach((card, index) => {
    if (index === activeCardIndex) {
      card?.classList.add("menu-button-active");
    } else {
      card?.classList.remove("menu-button-active");
    }
  });
}

function updateGridSizeButtons() {
  if (state.gridSize === 4) {
    gridBtnOption1?.classList.add("menu-button-active");
    gridBtnOption2?.classList.remove("menu-button-active");
  } else if (state.gridSize === 6) {
    gridBtnOption1?.classList.remove("menu-button-active");
    gridBtnOption2?.classList.add("menu-button-active");
  }
}

function updatePlayerStats() {
  if (state.numberOfPlayers === 1) {
    soloStats?.classList.remove("hide");
    multipleStats?.classList.add("hide");
  } else {
    soloStats?.classList.add("hide");
    multipleStats?.classList.remove("hide");
  }
}
