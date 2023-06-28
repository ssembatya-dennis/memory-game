import { timeContainerEl } from "../elements";

let isRunning = false;
let startTime: number;
let elapsedTime = 0;
let timerInterval: any;

function formatTime(milliseconds: number) {
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;

  return `${minutesValue}:${secondsValue}`;
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  timeContainerEl.innerHTML = `<span>${formattedTime}</span>`;
}

export function startTimer() {
  if (isRunning) {
    // Pause the stopwatch
    clearInterval(timerInterval);
    isRunning = false;
  } else {
    // Start or resume the stopwatch
    if (elapsedTime === 0) {
      startTime = Date.now();
    } else {
      startTime = Date.now() - elapsedTime;
    }
    timerInterval = setInterval(updateTime, 10);
    isRunning = true;
  }
}

export function resetTimer() {
  clearInterval(timerInterval);
  timeContainerEl.innerHTML = "00:00";
  isRunning = false;
  elapsedTime = 0;
  startTimer();
}

export function stopTimer() {
  clearInterval(timerInterval);
  timeContainerEl.innerHTML = "00:00";
  isRunning = false;
  elapsedTime = 0;
}
