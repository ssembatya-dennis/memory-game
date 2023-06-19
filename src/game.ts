import { state } from "./state";
import { gameBoardContainerEl } from "./elements";

// Items array
const iconsArray = [
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

const numbersArray = [
  { name: "one", number: 1 },
  { name: "two", number: 2 },
  { name: "three", number: 3 },
  { name: "four", number: 4 },
  { name: "five", number: 5 },
  { name: "six", number: 6 },
  { name: "seven", number: 7 },
  { name: "eight", number: 8 },
  { name: "nine", number: 9 },
  { name: "ten", number: 10 },
];

const ICON_CARD_TEMPLATE = `
                          <div class="card-container" id="{{CARD_ID}}" data-card-value="{{CARD_ID}}">
                            <div class="card-back"></div>
                            <div class="card-front">
                              <div class="icon {{CARD_ICON_NAME}}"></div>
                            </div>
                          </div>
                        `;

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
                              <div class="card-container" data-card-value="${cardValues[i].name}">
                                <div class="card-back"></div>
                                <div class="card-front">
                                  <div class="icon ${cardValues[i].icon}"></div>
                                </div>
                              </div>
                            `;
  }

  // Grid
  gameBoardContainerEl.style.gridTemplateColumns = `repeat(${size}, auto)`;
}
