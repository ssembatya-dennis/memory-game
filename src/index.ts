// 1. Player
interface Player {
  id: number;
  name: string;
  score: number;
}

// 2. Card
interface Card {
  id: number;
  value: string;
  isFaceUp: boolean;
}

// 3. Grid
interface Grid {
  rows: number;
  columns: number;
  cards: Card[][];
}

// 4. Pair
interface Pair {
  card1: Card;
  card2: Card;
}

// 5. Turn
interface Turn {
  player: Player;
  selectedCards: Card[];
}

// 6. Score
type Score = { [playerId: number]: number };

// Optional: Game state
interface GameState {
  players: Player[];
  grid: Grid;
  currentPlayerIndex: number;
  turns: Turn[];
  scores: Score;
}

abstract class MemoryGame {
  protected gameState: GameState;

  constructor(players: Player[], rows: number, columns: number) {
    this.gameState = {
      players,
      grid: this.createGrid(rows, columns),
      currentPlayerIndex: 0,
      turns: [],
      scores: players.reduce((acc, player) => ({ ...acc, [player.id]: 0 }), {}),
    };
  }

  protected abstract createGrid(rows: number, columns: number): Grid;

  protected abstract isPair(card1: Card, card2: Card): boolean;

  protected abstract updateScore(playerId: number): void;

  // Public methods to interact with the game state, such as flipping cards, getting the current player, etc.
  flipCard(row: number, column: number): void {
    // ...
  }

  getCurrentPlayer(): Player {
    return this.gameState.players[this.gameState.currentPlayerIndex];
  }

  getScores(): Score {
    return this.gameState.scores;
  }

  isGameOver(): any {
    return this.gameState.scores;
  }
}
