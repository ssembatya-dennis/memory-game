type GameState = {
  theme: "icons" | "numbers";
  playerOptions: number;
  gridSize: number;
  time: number;
  moves: number;
  winner: "winner" | null;
  gameState: "start" | "ongoing" | "paused" | "end";
};

const DEFAULT_STATE: GameState = {
  theme: "icons",
  playerOptions: 1,
  gridSize: 6,
  time: 0,
  moves: 0,
  winner: null,
  gameState: "start",
};

let state: Partial<GameState> = DEFAULT_STATE;

function setState(newState: Partial<GameState>) {
  if (newState == state) {
    // Do nothing
    return false;
  } else {
    state = newState;
    return true;
  }
}
