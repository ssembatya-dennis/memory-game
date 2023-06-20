import { moveContainerEl } from "../elements";

let firstCardValue: any = null;
let firstCardId: any;
let secondCardValue: any = null;
let secondCardId: any;
let firstCard: any = null;
let secondCard: any = null;
let winCount = 0;
let movesCount = 0;

const movesCounter = () => {
  movesCount += 1;
  moveContainerEl.innerHTML = `<span>${movesCount}</span>`;
};

export const matchCards = (card: any, cardsArray: []) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("matched")) {
      card.classList.add("flipped");

      if (!firstCard) {
        firstCard = card;
        firstCardValue = card.getAttribute("data-card-value");
        firstCardId = card.getAttribute("id");
      } else {
        movesCounter();
        secondCard = card;

        secondCardValue = card.getAttribute("data-card-value");
        secondCardId = card.getAttribute("id");

        if (firstCardValue == secondCardValue && firstCardId != secondCardId) {
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
        }
        if (winCount == Math.floor(cardsArray.length / 2)) {
          // where we handle the win UI
          //stopGame();
        } else {
          let [tempFirst, tempSecond] = [firstCard, secondCard];
          let tempFirstValue = tempFirst.getAttribute("data-card-value");
          let tempSecondValue = tempSecond.getAttribute("data-card-value");
          let tempFirstCardId = tempFirst.getAttribute("id");
          let tempSecondCardId = tempSecond.getAttribute("id");
          console.log(tempFirst, tempSecond, tempFirstCardId, tempSecondCardId);
          if (tempFirstValue !== tempSecondValue) {
            setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          } else {
            tempFirst.classList.add("flipped");
            tempSecond.classList.add("flipped");
          }
          firstCard = null;
        }
      }
    }
  });
};
