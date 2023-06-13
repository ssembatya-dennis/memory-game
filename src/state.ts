// import { buildUI } from "./ui";

type GameState = {
  elapsedTimeInMilliseconds: number;
  numberOfMoves: number;
  currentPlayer: number;
  numberOfPlayers: number;
  gameTheme: "icons" | "numbers";
  gridSize: number;
  flippedCards: string[];
  gameState: "start" | "ongoing" | "paused" | "completed";
  winner: number | null;
};

const DEFAULT_STATE: GameState = {
  elapsedTimeInMilliseconds: 0,
  numberOfMoves: 0,
  currentPlayer: 1,
  numberOfPlayers: 1,
  gameTheme: "icons",
  gridSize: 4,
  flippedCards: [],
  gameState: "start",
  winner: null,
};

let state: GameState = DEFAULT_STATE;

function setState(newStateSlice: Partial<GameState>) {
  const newState: GameState = {
    ...state,
    ...newStateSlice,
  };

  if (JSON.stringify(state) === JSON.stringify(newState)) {
    // nothing has changed.
    return false;
  }

  state = newState;
  // buildUI();
  return true;
}

function resetState() {
  setState(DEFAULT_STATE);
}

export { state, setState, resetState };
