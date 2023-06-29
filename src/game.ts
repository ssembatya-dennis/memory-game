import { state } from "./state";
import { gameBoardContainerEl } from "./elements";
import { matchCards } from "./utils/matchCards";

// Items array
const iconsArray = [
  { name: "football", value: "football" },
  { name: "anchor", value: "anchor" },
  { name: "flask", value: "flask" },
  { name: "sun", value: "sun" },
  { name: "hand-spock", value: "hand-spock" },
  { name: "bug", value: "bug" },
  { name: "moon", value: "moon" },
  { name: "snow-flake", value: "snow-flake" },
  { name: "lira-sign", value: "lira-sign" },
  { name: "heart", value: "heart" },
  { name: "shield-halved", value: "shield-halved" },
  { name: "diamond", value: "diamond" },
  { name: "ring", value: "ring" },
  { name: "puzzle-piece", value: "puzzle-piece" },
  { name: "hat-cowboy", value: "hat-cowboy" },
  { name: "chess-knight", value: "chess-knight" },
  { name: "scroll", value: "scroll" },
  { name: "leaf", value: "leaf" },
];

const numbersArray = [
  { name: "one", value: 1 },
  { name: "two", value: 2 },
  { name: "three", value: 3 },
  { name: "four", value: 4 },
  { name: "five", value: 5 },
  { name: "six", value: 6 },
  { name: "seven", value: 7 },
  { name: "eight", value: 8 },
  { name: "nine", value: 9 },
  { name: "ten", value: 10 },
  { name: "eleven", value: 11 },
  { name: "twelve", value: 12 },
  { name: "thirteen", value: 13 },
  { name: "fourteen", value: 14 },
  { name: "fifteen", value: 15 },
  { name: "sixteen", value: 16 },
  { name: "seventeen", value: 17 },
  { name: "eighteen", value: 18 },
];

let cards;

// Pick random objects from the items array
export function generateRandom(size: number) {
  let tempArray =
    state.gameTheme === "numbers" ? [...numbersArray] : [...iconsArray];

  let cardValues = [];
  // size should be double (4 * 4 matrix) / 2 since pairs of objects would exist
  size = (size * size) / 2;

  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);

    // Once selected remove the object from temp Array
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
}

export function matrixGenerator(cardValues: any, size: number) {
  gameBoardContainerEl.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];

  // simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    gameBoardContainerEl.innerHTML += `
                              <div class="card-container ${
                                state.gridSize == 4
                                  ? "card-container--4"
                                  : "card-container--6"
                              }" id="${i}" data-card-value="${
      cardValues[i].name
    }">
                                <div class="card-back"></div>
                                <div class="card-front">
                                  ${
                                    state.gameTheme === "icons"
                                      ? `<div class="icon ${cardValues[i].value}"></div>`
                                      : `<span class="numeral">${cardValues[i].value}</span>`
                                  }
                                </div>
                              </div>
                            `;
  }

  // Grid
  gameBoardContainerEl.style.gridTemplateColumns = `repeat(${size}, auto)`;

  // Cards
  cards = document.querySelectorAll(".card-container" as any);
  cards.forEach((card) => matchCards(card, cardValues));
}
