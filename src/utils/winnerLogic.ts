import {
  highScore,
  winnerScreen,
  winnerScreenMoves,
  winnerScreenTime,
  winnerTitle,
} from "../elements";
import { startTimer } from "./manageTime";
import { openModal } from "./modal";

///////////////////////////////////
/// Winner Logic (Solo Player)

export function displayWinnerScreen(time: string, move: string) {
  openModal(winnerScreen);
  startTimer();

  let [tempTime, tempMove] = [time, move];

  time = localStorage.getItem("time")!;
  move = localStorage.getItem("moves")!;

  let [minutes, seconds] = time.split(":");
  let [tempMinutes, tempSeconds] = tempTime.split(":");

  let [moves] = move.split(" ");
  let [tempMoves] = tempMove.split(" ");

  if (tempMinutes > minutes || (tempSeconds > seconds && tempMoves < moves)) {
    winnerTitle.textContent = "Congragulations 🥳";
    highScore.textContent = `${tempMove} in ${tempTime}`;
  } else {
    winnerTitle.textContent = "You did it";
    highScore.textContent = `${tempMove} in ${tempTime}`;
  }

  winnerScreenTime.innerText = time;
  winnerScreenMoves.innerText = move;
}
