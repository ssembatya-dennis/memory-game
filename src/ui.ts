import {
  startButtonEl,
  startScreenContainerEl,
  gameContainerEl,
} from "./elements";
import { setState } from "./state";

function startGame() {
  setState({
    gameState: "ongoing",
  });
}

export function buildUI() {
  if (setState({ gameState: "ongoing" })) {
    startScreenContainerEl?.classList.add("hide");
    gameContainerEl?.classList.remove("hide");
  } else {
    startScreenContainerEl?.classList.remove("hide");
    gameContainerEl?.classList.add("hide");
  }
}

export function attachEventListeners() {
  // add start Btn event listeners
  startButtonEl?.addEventListener("click", () => {
    startGame();
  });
}
