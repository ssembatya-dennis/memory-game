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

// From source
const moves = document.getElementById("move-count")!;
const timeValue = document.getElementById("time")!;
const startButton = document.getElementById("start")!;
const reStartButton = document.getElementById("restart-btn")!;
const newGameButton = document.getElementById("new-game");
const startScreen = document.querySelector(".start-screen")!;
const gameContainer = document.querySelector(".game-container")!;
const gameBoard = document.querySelector(".game-board" as any)!;
const controls = document.querySelector(".game-controls");

let cards;
let interval;
let firstCardValue: any;
let firstCard: any = false;
let secondCard: any = false;

// Items array
const items = [
  { name: "football", icon: "football" },
  { name: "anchor", icon: "anchor" },
  { name: "flask", icon: "flask" },
  { name: "sun", icon: "sun" },
  { name: "hand-spock", icon: "hand-spock" },
  { name: "bug", icon: "bug" },
  { name: "moon", icon: "moon" },
  { name: "snow-flake", icon: "snow-flake" },
  { name: "lira-sign", icon: "lira-sign" },
  { name: "car", icon: "car" },
];

// Initial Time
let seconds = 0,
  minutes = 0;

// Initial moves and win count

let movesCount = 0,
  winCount = 0;

// For timer
const timeGenerator = () => {
  seconds += 1;

  // minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }

  // format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>${minutesValue}:${secondsValue}</span>`;
};

// For calculating moves

const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>${movesCount}</span>`;
};

// Pick random objects from the items array
const generateRandom = (size = 4) => {
  // temporary array
  let tempArray = [...items];
  // initializes cardValues array
  let cardValues = [];
  // size should be double (4 * 4 matrix) / 2 since pairs of objects would exist
  size = (size * size) / 2;
  // Random object selection
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);

    // Once selected remove the object from temp Array
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

const matrixGenerator = (cardValues: any, size = 4) => {
  gameBoard.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];

  // simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    /* 
      Create Cards
      before => front side (contains question mark)
      after => back side (contains actual image);
      data-card-value is a custom attribute which stores
      the name of the cards to match later
    */
    gameBoard.innerHTML += `
                          <div class="card-container data-card-value="${cardValues[i]}">
                            <div class="card-back"></div>
                            <div class="card-front">
                              <div class="icon ${cardValues[i].icon} "></div
                            </div>
                          </div>
                        `;
  }

  // Grid
  gameBoard.style.gridTemplateColumns = `repeat(${size}, auto)`;

  // Cards
  cards = document.querySelectorAll(".card-container" as any);
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // If selected card is not matched yet then only
      // run (i.e already matched card when clicked would be ignored)
      if (!card.classList.contains("matched")) {
        // flip the clicked card
        card.classList.add("flipped");
        // if it's the first card (!first card since the first card is innitially false)
        if (!firstCard) {
          // so current card will become first card
          firstCard = card;
          // current card value becomes firstCardValue
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          // increment moves since user selected second card
          movesCounter();
          secondCard = card;

          let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue) {
            // if both cards match add matched class so these cards would be ignored next time
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            // set firstCard to false since next card would be first now
            firstCard = false;
            // increament win count as user found a correct match
            winCount += 1;
            // check if wincount == half of cardValues
            if (winCount == Math.floor(cardValues.length / 2)) {
              // where we handle the win UI
              //stopGame();
            } else {
              // if the cards don't match
              // flip the cards back to normal
              let [tempFirst, tempSecond] = [firstCard, secondCard];
              firstCard = false;
              secondCard = false;
              let delay = setTimeout(() => {
                tempFirst.classList.remove("flipped");
                tempSecond.classList.remove("flipped");
              }, 900);
            }
          }
        }
      }
    });
  });
};

// Start game
startButton.addEventListener("click", () => {
  movesCount = 0;
  //time = 0;
  // controls and buttons visibility
  startScreen.classList.add("hide");
  gameContainer.classList.remove("hide");

  // start timer
  interval = setInterval(timeGenerator, 1000);
  // initial moves
  moves.innerHTML = `<span>${movesCount}</span> `;
  initializer();
});

// Initialize values and func calls

const initializer = () => {
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
};

// Stop game
