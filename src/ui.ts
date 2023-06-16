import {
  startScreenDisplayEl,
  gameContainerEl,
  timeContainerEl,
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
} from "./elements";
import { state, setState, resetState } from "./state";

let seconds = 0,
  minutes = 0;

const ICON_CARD_TEMPLATE = `
                          <div class="card-container" id="{{CARD_ID}}" data-card-value="{{CARD_ID}}">
                            <div class="card-back"></div>
                            <div class="card-front">
                              <div class="icon {{CARD_ICON_NAME}}"></div>
                            </div>
                          </div>
                        `;

export function startGame() {
  setState({
    gameState: "ongoing",
  });
}

function newGame() {
  resetState();
}

function restartGame() {
  setState({
    flippedCards: [],
    elapsedTimeInMilliseconds: 0,
    winner: null,
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
  });

  // Add reStart Button listeners
  reStartButton?.addEventListener("click", () => {
    restartGame();
  });

  // Add newGame button listeners
  newGameButton?.addEventListener("click", () => {
    newGame();
  });
}

export function buildUI() {
  updateGameScreen();
  if (state.gameState === "start") {
    updateThemeButtons();
    updatePlayerNumberButtons();
    updateGridSizeButtons();
  }
}

function updateGameScreen() {
  if (state.gameState === "ongoing") {
    startScreenDisplayEl?.classList.add("hide");
    gameContainerEl?.classList.remove("hide");
    setInterval(timeGenerator, 1000);
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

function timeGenerator() {
  seconds += 1;

  // minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  // format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  return (timeContainerEl.innerHTML = `<span>${minutesValue}:${secondsValue}</span>`);
}
