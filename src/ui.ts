import {
  startButtonEl,
  startScreenContainerEl,
  gameContainerEl,
  numberThemeButtonEl,
  iconThemeButtonEl,
} from "./elements";
import { setState, state } from "./state";

function startGame() {
  setState({
    gameState: "ongoing",
  });
}

function toggleTheme(theme: "icons" | "numbers") {
  setState({ gameTheme: theme });
}

export function buildUI() {
  updateGameScreen();
  updateGameTheme();
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
    numberThemeButtonEl?.classList.add("menu-button-select:hover");
    iconThemeButtonEl?.classList.remove("menu-button-select:hover");
  }

  if (state.gameTheme === "icons") {
    numberThemeButtonEl?.classList.remove("menu-button-select:hover");
    iconThemeButtonEl?.classList.add("menu-button-select:hover");
  }
}

export function attachEventListeners() {
  // add theme Btns event listeners
  numberThemeButtonEl?.addEventListener("click", () => toggleTheme("numbers"));
  iconThemeButtonEl?.addEventListener("click", () => toggleTheme("icons"));

  // add start Btn event listeners
  startButtonEl?.addEventListener("click", () => {
    startGame();
  });
}
