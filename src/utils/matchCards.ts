import { setState, state } from "../state";
import { startMovesCounter } from "./manageMoves";
import { displayWinnerScreen } from "./winnerLogic";

let firstCardValue: any = null;
let firstCardId: any;
let secondCardValue: any = null;
let secondCardId: any;
let firstCard: any = null;
let secondCard: any = null;
let time = localStorage.getItem("time")!;
let move = localStorage.getItem("moves")!;

export const matchCards = (card: any, cardsArray: []) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("matched")) {
      card.classList.add("flipped");

      if (!firstCard) {
        firstCard = card;
        firstCardValue = card.getAttribute("data-card-value");
        firstCardId = card.getAttribute("id");
      } else {
        startMovesCounter();
        secondCard = card;

        secondCardValue = card.getAttribute("data-card-value");
        secondCardId = card.getAttribute("id");

        if (firstCardValue == secondCardValue && firstCardId != secondCardId) {
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          state.winner = state.winner + 1;
          setState({
            winner: state.winner,
          });
        }
        if (state.winner == Math.floor(cardsArray.length / 2)) {
          // winner screen Logic
          displayWinnerScreen(time, move);
        } else {
          let [tempFirst, tempSecond] = [firstCard, secondCard];
          let tempFirstValue = tempFirst.getAttribute("data-card-value");
          let tempSecondValue = tempSecond.getAttribute("data-card-value");
          let tempFirstCardId = tempFirst.getAttribute("id");
          let tempSecondCardId = tempSecond.getAttribute("id");
          if (
            tempFirstCardId == tempSecondCardId ||
            tempFirstValue != tempSecondValue
          ) {
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
