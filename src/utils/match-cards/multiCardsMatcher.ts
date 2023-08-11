import { setState, state } from "../../state";
import { startMovesCounter } from "../manageMoves";
import { displayWinnerScreen } from "../winnerLogic";

let firstCardValue: any = null;
let firstCardId: any;
let secondCardValue: any = null;
let secondCardId: any;
let firstCard: any = null;
let secondCard: any = null;
let firstPlayer: any = null;
let secondPlayer: any = null;
let time = localStorage.getItem("time")!;
let move = localStorage.getItem("moves")!;

export const multiCardsMatcher = (
  card: any,
  cardsArray: [],
  multiplayerStats: []
) => {
  multiplayerStats.forEach((multiplayerStat: HTMLElement) => {
    const statsContainer: HTMLDivElement = document.querySelector(
      ".stats-wrapper"
    ) as HTMLDivElement;
    const statsCard: HTMLDivElement = document.querySelector(
      ".stats-card"
    ) as HTMLDivElement;
    const startsCount: HTMLDivElement = document.querySelector(
      ".move-count"
    ) as HTMLDivElement;
    const activeStatsCard: HTMLSpanElement = document.querySelector(
      ".stats-current"
    ) as HTMLSpanElement;
    let movesCount = 0;

    card.addEventListener("click", () => {
      if (!card.classList.contains("matched")) {
        card.classList.add("flipped");
        activeStatsCard.classList.add("match-multiple--span");

        if (!(firstCard && firstPlayer)) {
          firstCard = card;
          firstCardValue = card.getAttribute("data-card-value");
          firstCardId = card.getAttribute("id");
          firstPlayer = multiplayerStat.getAttribute("id");
          console.log(firstPlayer);
        } else {
          startMovesCounter();
          secondCard = card;
          secondCardValue = card.getAttribute("data-card-value");
          secondCardId = card.getAttribute("id");

          secondPlayer = multiplayerStat.getAttribute("id");
          console.log(secondPlayer);

          if (
            firstCardValue == secondCardValue &&
            firstCardId != secondCardId
          ) {
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
  });
};
