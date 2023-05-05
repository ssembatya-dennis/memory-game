type GameState = {
  elapsedTimeInMilliseconds: number;
  numberOfMoves: number;
  currentPlayer: number;
  numberOfPlayers: number;
  gameTheme: "icons" | "numbers";
  gridSize: number;
  flippedCards: string[];
};

const DEFAULT_STATE: GameState = {
  elapsedTimeInMilliseconds: 0,
  numberOfMoves: 0,
  currentPlayer: 1,
  numberOfPlayers: 1,
  gameTheme: "icons",
  gridSize: 6,
  flippedCards: [],
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
  return true;
}

export { state, setState };
