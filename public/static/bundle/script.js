(()=>{"use strict";document.getElementById("move-count"),document.getElementById("time");var e=document.getElementById("start"),t=(document.getElementById("restart-btn"),document.getElementById("new-game"),document.querySelector(".start-screen")),n=document.querySelector(".game-container"),r=(document.querySelector(".game-board"),document.querySelector(".game-controls"),document.getElementById("number_theme")),l=document.getElementById("icon_theme"),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},u.apply(this,arguments)},c={elapsedTimeInMilliseconds:0,numberOfMoves:0,currentPlayer:1,numberOfPlayers:1,gameTheme:"icons",gridSize:4,flippedCards:[],gameState:"start",winner:null};function i(e){var i=u(u({},c),e);return JSON.stringify(c)!==JSON.stringify(i)&&("ongoing"===(c=i).gameState?(null==t||t.classList.add("hide"),null==n||n.classList.remove("hide")):(null==t||t.classList.remove("hide"),null==n||n.classList.add("hide")),"numbers"===c.gameTheme&&(null==r||r.classList.add("menu-button-active"),null==l||l.classList.remove("menu-button-active")),"icons"===c.gameTheme&&(null==r||r.classList.remove("menu-button-active"),null==l||l.classList.add("menu-button-active")),!0)}function s(e){i({gameTheme:e})}null==r||r.addEventListener("click",(function(){return s("numbers")})),null==l||l.addEventListener("click",(function(){return s("icons")})),null==e||e.addEventListener("click",(function(){i({gameState:"ongoing"})}))})();