(()=>{"use strict";document.getElementById("move-count"),document.getElementById("time");var e=document.getElementById("start"),t=(document.getElementById("restart-btn"),document.getElementById("new-game"),document.querySelector(".start-screen")),n=document.querySelector(".game-container"),r=(document.querySelector(".game-board"),document.querySelector(".game-controls"),document.getElementById("number_theme")),l=document.getElementById("icon_theme"),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},s.apply(this,arguments)},o={elapsedTimeInMilliseconds:0,numberOfMoves:0,currentPlayer:1,numberOfPlayers:1,gameTheme:"icons",gridSize:4,flippedCards:[],gameState:"start",winner:null};function u(e){var u=s(s({},o),e);return JSON.stringify(o)!==JSON.stringify(u)&&("ongoing"===(o=u).gameState?(null==t||t.classList.add("hide"),null==n||n.classList.remove("hide")):(null==t||t.classList.remove("hide"),null==n||n.classList.add("hide")),"numbers"===o.gameTheme&&(null==r||r.classList.add("menu-button-select:hover"),null==l||l.classList.remove("menu-button-select:hover")),"icons"===o.gameTheme&&(null==r||r.classList.remove("menu-button-select:hover"),null==l||l.classList.add("menu-button-select:hover")),!0)}function c(e){u({gameTheme:e})}null==r||r.addEventListener("click",(function(){return c("numbers")})),null==l||l.addEventListener("click",(function(){return c("icons")})),null==e||e.addEventListener("click",(function(){u({gameState:"ongoing"})}))})();