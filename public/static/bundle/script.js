(()=>{"use strict";document.getElementById("move-count"),document.getElementById("time");var e=document.getElementById("start"),t=(document.getElementById("restart-btn"),document.getElementById("new-game"),document.querySelector(".start-screen")),n=document.querySelector(".game-container"),l=(document.querySelector(".game-board"),document.querySelector(".game-controls"),document.getElementById("number_theme")),u=document.getElementById("icons_theme"),i=document.getElementById("player_option-1"),c=document.getElementById("player_option-2"),o=document.getElementById("player_option-3"),r=document.getElementById("player_option-4"),a=document.getElementById("grid_option-1"),s=document.getElementById("grid_option-2"),m=function(){return m=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e},m.apply(this,arguments)},d={elapsedTimeInMilliseconds:0,numberOfMoves:0,currentPlayer:1,numberOfPlayers:1,gameTheme:"icons",gridSize:4,flippedCards:[],gameState:"start",winner:null};function g(e){var g,y=m(m({},d),e);return JSON.stringify(d)!==JSON.stringify(y)&&("ongoing"===(d=y).gameState?(null==t||t.classList.add("hide"),null==n||n.classList.remove("hide")):"start"===d.gameState&&(null==t||t.classList.remove("hide"),null==n||n.classList.add("hide")),"start"===d.gameState&&("icons"===d.gameTheme?(null==l||l.classList.remove("menu-button-active"),null==u||u.classList.add("menu-button-active")):"numbers"===d.gameTheme&&(null==l||l.classList.add("menu-button-active"),null==u||u.classList.remove("menu-button-active")),g=d.numberOfPlayers-1,[i,c,o,r].forEach((function(e,t){t===g?null==e||e.classList.add("menu-button-active"):null==e||e.classList.remove("menu-button-active")})),4===d.gridSize?(null==a||a.classList.add("menu-button-active"),null==s||s.classList.remove("menu-button-active")):6===d.gridSize&&(null==a||a.classList.remove("menu-button-active"),null==s||s.classList.add("menu-button-active"))),!0)}function y(e){g({gameTheme:e})}function v(e){g({gridSize:e})}[i,c,o,r].forEach((function(e,t){null==e||e.addEventListener("click",(function(){g({numberOfPlayers:t+1})}))})),null==a||a.addEventListener("click",(function(){return v(4)})),null==s||s.addEventListener("click",(function(){return v(6)})),null==l||l.addEventListener("click",(function(){return y("numbers")})),null==u||u.addEventListener("click",(function(){return y("icons")})),null==e||e.addEventListener("click",(function(){g({gameState:"ongoing"})}))})();