import { attachGameSettingsControlListeners } from "./ui";
attachGameSettingsControlListeners();
// // From source
// const moves = document.getElementById("move-count")!;
// const timeValue = document.getElementById("time")!;
// const startButton = document.getElementById("start")!;
// const reStartButton = document.getElementById("restart-btn")!;
// const newGameButton = document.getElementById("new-game");
// const startScreen = document.querySelector(".start-screen")!;
// const gameContainer = document.querySelector(".game-container")!;
// const gameBoard = document.querySelector(".game-board" as any)!;
// const controls = document.querySelector(".game-controls");

// let cards;
// let interval;
// let firstCardValue: any = null;
// let secondCardValue: any = null;
// let firstCard: any = null;
// let secondCard: any = null;

// // Items array
// const items = [
//   { name: "football", icon: "football" },
//   { name: "anchor", icon: "anchor" },
//   { name: "flask", icon: "flask" },
//   { name: "sun", icon: "sun" },
//   { name: "hand-spock", icon: "hand-spock" },
//   { name: "bug", icon: "bug" },
//   { name: "moon", icon: "moon" },
//   { name: "snow-flake", icon: "snow-flake" },
//   { name: "lira-sign", icon: "lira-sign" },
//   { name: "car", icon: "car" },
// ];

// // Initial Time
// let seconds = 0,
//   minutes = 0;

// // Initial moves and win count

// let movesCount = 0,
//   winCount = 0;

// // For timer
// const timeGenerator = () => {
//   seconds += 1;

//   // minutes logic
//   if (seconds >= 60) {
//     minutes += 1;
//     seconds = 0;
//   }

//   // format time before displaying
//   let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
//   let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
//   timeValue.innerHTML = `<span>${minutesValue}:${secondsValue}</span>`;
// };

// // For calculating moves

// const movesCounter = () => {
//   movesCount += 1;
//   moves.innerHTML = `<span>${movesCount}</span>`;
// };

// // Pick random objects from the items array
// const generateRandom = (size = 4) => {
//   let tempArray = [...items];

//   let cardValues = [];
//   // size should be double (4 * 4 matrix) / 2 since pairs of objects would exist
//   size = (size * size) / 2;

//   for (let i = 0; i < size; i++) {
//     const randomIndex = Math.floor(Math.random() * tempArray.length);
//     cardValues.push(tempArray[randomIndex]);

//     // Once selected remove the object from temp Array
//     tempArray.splice(randomIndex, 1);
//   }
//   return cardValues;
// };

// const matrixGenerator = (cardValues: any, size = 4) => {
//   gameBoard.innerHTML = "";
//   cardValues = [...cardValues, ...cardValues];

//   // simple shuffle
//   cardValues.sort(() => Math.random() - 0.5);
//   for (let i = 0; i < size * size; i++) {
//     gameBoard.innerHTML += `
//                           <div class="card-container" data-card-value="${cardValues[i].name}">
//                             <div class="card-back"></div>
//                             <div class="card-front">
//                               <div class="icon ${cardValues[i].icon}"></div>
//                             </div>
//                           </div>
//                         `;
//   }

//   // Grid
//   gameBoard.style.gridTemplateColumns = `repeat(${size}, auto)`;

//   // Cards
//   cards = document.querySelectorAll(".card-container" as any);
//   cards.forEach((card) => {
//     card.addEventListener("click", () => {
//       if (!card.classList.contains("matched")) {
//         card.classList.add("flipped");

//         if (!firstCard) {
//           firstCard = card;
//           firstCardValue = card.getAttribute("data-card-value");
//         } else {
//           movesCounter();
//           secondCard = card;

//           secondCardValue = card.getAttribute("data-card-value");
//           if (firstCardValue == secondCardValue) {
//             firstCard.classList.add("matched");
//             secondCard.classList.add("matched");
//           }
//           if (winCount == Math.floor(cardValues.length / 2)) {
//             // where we handle the win UI
//             //stopGame();
//           } else {
//             let [tempFirst, tempSecond] = [firstCard, secondCard];
//             let tempFirstValue = tempFirst.getAttribute("data-card-value");
//             let tempSecondValue = tempSecond.getAttribute("data-card-value");
//             console.log(tempFirst, tempSecond);
//             if (tempFirstValue !== tempSecondValue) {
//               setTimeout(() => {
//                 tempFirst.classList.remove("flipped");
//                 tempSecond.classList.remove("flipped");
//               }, 900);
//             } else {
//               tempFirst.classList.add("flipped");
//               tempSecond.classList.add("flipped");
//             }
//             firstCard = null;
//           }
//         }
//       }
//     });
//   });
// };

// // Start game
// startButton.addEventListener("click", () => {
//   movesCount = 0;
//   //time = 0;
//   // controls and buttons visibility
//   startScreen.classList.add("hide");
//   gameContainer.classList.remove("hide");

//   // start timer
//   interval = setInterval(timeGenerator, 1000);
//   // initial moves
//   moves.innerHTML = `<span>${movesCount}</span> `;
//   initializer();
// });

// // Initialize values and func calls

// const initializer = () => {
//   winCount = 0;
//   let cardValues = generateRandom();
//   matrixGenerator(cardValues);
// };

// // Stop game

// // Modal windows

// const openModalButton = document.querySelector("[data-modal-target]" as any)!;
// const closeModalButton = document.querySelector("[data-close-button]" as any)!;
// const overlay = document.getElementById("overlay")!;

// openModalButton.addEventListener("click", () => {
//   const modal = document.querySelector(openModalButton.dataset.modalTarget);
//   openModal(modal);
// });

// closeModalButton.addEventListener("click", () => {
//   const modal = closeModalButton.closest(".btn-modal-mobile");
//   closeModal(modal);
// });

// function openModal(modal: any) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }

// function closeModal(modal: any) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }
