type GameState = {
  theme: "icons" | "numbers";
  playerOptions: number;
  gridSize: number;
  elapsedTimeMicroSeconds: number;
  moves: number;
  winner: "winner" | null;
  gameState: "start" | "ongoing" | "paused" | "end";
};

const DEFAULT_STATE: GameState = {
  theme: "icons",
  playerOptions: 1,
  gridSize: 6,
  elapsedTimeMicroSeconds: 0,
  moves: 0,
  winner: null,
  gameState: "start",
};

let state = DEFAULT_STATE;

function setState(newState: Partial<GameState>) {
  let newStateSlice = { ...newState, ...state };
  if (JSON.stringify(newStateSlice) === JSON.stringify(state)) {
    // Do nothing
    return false;
  } else {
    state = newStateSlice;
    return true;
  }
}
