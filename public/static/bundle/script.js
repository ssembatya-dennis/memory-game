(()=>{"use strict";var e=document.getElementById("move-count"),n=document.getElementById("time"),t=document.getElementById("start"),a=document.getElementById("restart-btn"),l=document.getElementById("restart-btn--mobile"),c=document.getElementById("restart-btn--winner"),i=document.getElementById("new-game"),o=document.getElementById("new-game--mobile"),r=document.getElementById("new-game--winner"),s=document.querySelector(".start-screen"),u=document.querySelector(".game-container"),d=document.querySelector(".game-board"),m=(document.querySelector(".game-controls"),document.getElementById("number_theme")),v=document.getElementById("icon_theme"),g=document.getElementById("player_Opt_1"),f=document.getElementById("player_Opt_2"),p=document.getElementById("player_Opt_3"),h=document.getElementById("player_Opt_4"),y=document.getElementById("grid_size_4"),L=document.getElementById("grid_size_6"),E=document.querySelector("[data-modal-target]"),b=document.getElementById("overlay"),I=document.getElementById("modal-mobile"),w=document.getElementById("resume"),B=document.getElementById("winner-screen"),S=document.getElementById("winner-screen_time"),k=document.getElementById("winner-screen_move"),T=document.getElementById("winner-title"),M=document.getElementById("high-score"),_=document.getElementById("solo-stats"),O=document.getElementById("multiple-stats"),z=function(){return z=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var l in n=arguments[t])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e},z.apply(this,arguments)},A={elapsedTimeInMilliseconds:0,numberOfMoves:0,currentPlayer:1,numberOfPlayers:1,gameTheme:"icons",gridSize:4,flippedCards:[],gameState:"start",winner:0},x=A;function C(e){var n,t=z(z({},x),e);return JSON.stringify(x)!==JSON.stringify(t)&&("ongoing"===(x=t).gameState?(null==s||s.classList.add("hide"),null==u||u.classList.remove("hide")):"start"===x.gameState&&(null==s||s.classList.remove("hide"),null==u||u.classList.add("hide")),"start"===x.gameState&&("icons"===x.gameTheme?(null==m||m.classList.remove("menu-button-active"),null==v||v.classList.add("menu-button-active")):"numbers"===x.gameTheme&&(null==m||m.classList.add("menu-button-active"),null==v||v.classList.remove("menu-button-active")),n=x.numberOfPlayers-1,[g,f,p,h].forEach((function(e,t){t===n?null==e||e.classList.add("menu-button-active"):null==e||e.classList.remove("menu-button-active")})),4===x.gridSize?(null==y||y.classList.add("menu-button-active"),null==L||L.classList.remove("menu-button-active")):6===x.gridSize&&(null==y||y.classList.remove("menu-button-active"),null==L||L.classList.add("menu-button-active")),1===x.numberOfPlayers?(null==_||_.classList.remove("hide"),null==O||O.classList.add("hide")):(null==_||_.classList.add("hide"),null==O||O.classList.remove("hide"))),!0)}var H,P,q=0,N=function(){q=0,e.innerHTML="<span>".concat(q,"</span>")},D=!1,R=0;function j(){var e,t,a,l,c,i=Date.now(),o=(e=R=i-H,t=Math.floor(e%36e5/6e4),l=(a=Math.floor(e%6e4/1e3))<10?"0".concat(a):a,c=t<10?"0".concat(t):t,"".concat(c,":").concat(l));localStorage.setItem("time",o),n.innerHTML="<span>".concat(o,"</span>")}function J(){D?(clearInterval(P),D=!1):(H=0===R?Date.now():Date.now()-R,P=setInterval(j,10),D=!0)}function U(){clearInterval(P),n.innerHTML="00:00",D=!1,R=0,J()}function Y(){clearInterval(P),n.innerHTML="00:00",D=!1,R=0}function F(e){null!=e&&(e.classList.add("active"),b.classList.add("active"))}function G(e){null!=e&&(e.classList.remove("active"),b.classList.remove("active"))}var K,Q,V=null,W=null,X=null,Z=null,$=localStorage.getItem("time"),ee=localStorage.getItem("moves"),ne=function(n,t){n.addEventListener("click",(function(){if(!n.classList.contains("matched"))if(n.classList.add("flipped"),X)if(q+=1,localStorage.setItem("moves","".concat(q," Moves")),e.innerHTML="<span>".concat(q,"</span>"),Z=n,W=n.getAttribute("data-card-value"),Q=n.getAttribute("id"),V==W&&K!=Q&&(X.classList.add("matched"),Z.classList.add("matched"),x.winner=x.winner+1,C({winner:x.winner})),x.winner==Math.floor(t.length/2))!function(e,n){F(B),J();var t=[e,n],a=t[0],l=t[1];e=localStorage.getItem("time"),n=localStorage.getItem("moves");var c=e.split(":"),i=c[0],o=c[1],r=a.split(":"),s=r[0],u=r[1],d=n.split(" ")[0],m=l.split(" ")[0];s>i||u>o&&m<d?(T.textContent="Congragulations 🥳",M.textContent="".concat(l," in ").concat(a)):(T.textContent="You did it",M.textContent="".concat(l," in ").concat(a)),S.innerText=e,k.innerText=n}($,ee);else{var a=[X,Z],l=a[0],c=a[1],i=l.getAttribute("data-card-value"),o=c.getAttribute("data-card-value");l.getAttribute("id")==c.getAttribute("id")||i!=o?setTimeout((function(){l.classList.remove("flipped"),c.classList.remove("flipped")}),900):(l.classList.add("flipped"),c.classList.add("flipped")),X=null}else X=n,V=n.getAttribute("data-card-value"),K=n.getAttribute("id")}))},te=function(e,n,t){if(t||2===arguments.length)for(var a,l=0,c=n.length;l<c;l++)!a&&l in n||(a||(a=Array.prototype.slice.call(n,0,l)),a[l]=n[l]);return e.concat(a||Array.prototype.slice.call(n))},ae=[{name:"football",value:"football"},{name:"anchor",value:"anchor"},{name:"flask",value:"flask"},{name:"sun",value:"sun"},{name:"hand-spock",value:"hand-spock"},{name:"bug",value:"bug"},{name:"moon",value:"moon"},{name:"snow-flake",value:"snow-flake"},{name:"lira-sign",value:"lira-sign"},{name:"heart",value:"heart"},{name:"shield-halved",value:"shield-halved"},{name:"diamond",value:"diamond"},{name:"ring",value:"ring"},{name:"puzzle-piece",value:"puzzle-piece"},{name:"hat-cowboy",value:"hat-cowboy"},{name:"chess-knight",value:"chess-knight"},{name:"scroll",value:"scroll"},{name:"leaf",value:"leaf"}],le=[{name:"one",value:1},{name:"two",value:2},{name:"three",value:3},{name:"four",value:4},{name:"five",value:5},{name:"six",value:6},{name:"seven",value:7},{name:"eight",value:8},{name:"nine",value:9},{name:"ten",value:10},{name:"eleven",value:11},{name:"twelve",value:12},{name:"thirteen",value:13},{name:"fourteen",value:14},{name:"fifteen",value:15},{name:"sixteen",value:16},{name:"seventeen",value:17},{name:"eighteen",value:18}];function ce(){C(A)}function ie(){C({flippedCards:[],elapsedTimeInMilliseconds:0,winner:0,gameState:"ongoing"})}function oe(e){C({gameTheme:e})}function re(e){C({gridSize:e})}function se(){!function(e,n){d.innerHTML="",(e=te(te([],e,!0),e,!0)).sort((function(){return Math.random()-.5}));for(var t=0;t<n*n;t++)d.innerHTML+='\n                              <div class="card-container '.concat(4==x.gridSize?"card-container--4":"card-container--6",'" id="').concat(t,'" data-card-value="').concat(e[t].name,'">\n                                <div class="card-back"></div>\n                                <div class="card-front">\n                                  ').concat("icons"===x.gameTheme?'<div class="icon '.concat(e[t].value,'"></div>'):'<span class="numeral">'.concat(e[t].value,"</span>"),"\n                                </div>\n                              </div>\n                            ");d.style.gridTemplateColumns="repeat(".concat(n,", auto)"),document.querySelectorAll(".card-container").forEach((function(n){return ne(n,e)}))}(function(e){var n="numbers"===x.gameTheme?te([],le,!0):te([],ae,!0),t=[];e=e*e/2;for(var a=0;a<e;a++){var l=Math.floor(Math.random()*n.length);t.push(n[l]),n.splice(l,1)}return t}(x.gridSize),x.gridSize)}[g,f,p,h].forEach((function(e,n){null==e||e.addEventListener("click",(function(){C({numberOfPlayers:n+1})}))})),null==y||y.addEventListener("click",(function(){return re(4)})),null==L||L.addEventListener("click",(function(){return re(6)})),null==m||m.addEventListener("click",(function(){return oe("numbers")})),null==v||v.addEventListener("click",(function(){return oe("icons")})),null==t||t.addEventListener("click",(function(){C({gameState:"ongoing"}),J(),se(),function(){O.innerHTML="";for(var e=0;e<x.numberOfPlayers;e++)O.innerHTML+='  <div class="stats-wrapper" id="multi-player--'.concat(e,'"}>\n                                    <div class="stats-card">\n                                      <span class="stats-text">\n                                        Player ').concat(e+1,'\n                                      </span>\n                                      <div class="stats-num" id="move-count--').concat(e,'">0</div>\n                                    </div>\n                                    <span class="stats-current">CURRENT TURN</span>\n                                  </div>\n                                ')}()})),null==a||a.addEventListener("click",(function(){ie(),U(),N(),se()})),null==i||i.addEventListener("click",(function(){ce(),Y(),N()})),E.addEventListener("click",(function(){F(I),J()})),null==l||l.addEventListener("click",(function(){ie(),U(),N(),se(),G(I)})),null==o||o.addEventListener("click",(function(){ce(),Y(),N(),G(I)})),null==w||w.addEventListener("click",(function(){J(),G(I)})),null==c||c.addEventListener("click",(function(){ie(),U(),N(),se(),G(B)})),null==r||r.addEventListener("click",(function(){ce(),Y(),N(),G(B)}))})();