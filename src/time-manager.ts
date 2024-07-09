import { timeContainerEl } from "./elements";

// Initial Time
let seconds = 0,
  minutes = 0;

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
  timeContainerEl.innerHTML = `<span>${minutesValue}:${secondsValue}</span>`;
};
