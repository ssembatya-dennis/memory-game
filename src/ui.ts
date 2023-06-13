import {
  startButtonEl,
  startScreenContainerEl,
  gameContainerEl,
} from "./elements";
import { setState, state } from "./state";

function startGame() {
  setState({
    gameState: "ongoing",
  });
}

export function buildUI() {
  updateGameScreen();
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

function toggleTheme(theme: string) {
  if (theme === "number") {
    setState({ gameTheme: "numbers" });
  }

  if (theme === "icon") {
    setState({ gameTheme: "icons" });
  }
}

export function attachEventListeners() {
  // add theme Btns event listeners

  // add start Btn event listeners
  startButtonEl?.addEventListener("click", () => {
    startGame();
  });
}
