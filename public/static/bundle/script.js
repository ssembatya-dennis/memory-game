(()=>{"use strict";({607:function(){var e=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,c=0,o=t.length;c<o;c++)!a&&c in t||(a||(a=Array.prototype.slice.call(t,0,c)),a[c]=t[c]);return e.concat(a||Array.prototype.slice.call(t))},t=document.getElementById("move-count"),n=document.getElementById("time"),a=document.getElementById("start"),c=(document.getElementById("restart-btn"),document.getElementById("new-game"),document.querySelector(".start-screen")),o=document.querySelector(".game-container"),r=document.querySelector(".game-board"),l=(document.querySelector(".game-controls"),null),i=null,s=null,d=null,u=[{name:"football",icon:"football"},{name:"anchor",icon:"anchor"},{name:"flask",icon:"flask"},{name:"sun",icon:"sun"},{name:"hand-spock",icon:"hand-spock"},{name:"bug",icon:"bug"},{name:"moon",icon:"moon"},{name:"snow-flake",icon:"snow-flake"},{name:"lira-sign",icon:"lira-sign"},{name:"car",icon:"car"}],m=0,v=0,f=0,p=0,g=function(){(m+=1)>=60&&(v+=1,m=0);var e=m<10?"0".concat(m):m,t=v<10?"0".concat(v):v;n.innerHTML="<span>".concat(t,":").concat(e,"</span>")};a.addEventListener("click",(function(){f=0,c.classList.add("hide"),o.classList.remove("hide"),setInterval(g,1e3),t.innerHTML="<span>".concat(f,"</span> "),L()}));var L=function(){p=0,function(n,a){void 0===a&&(a=4),r.innerHTML="",(n=e(e([],n,!0),n,!0)).sort((function(){return Math.random()-.5}));for(var c=0;c<a*a;c++)r.innerHTML+='\n                          <div class="card-container" data-card-value="'.concat(n[c].name,'">\n                            <div class="card-back"></div>\n                            <div class="card-front">\n                              <div class="icon ').concat(n[c].icon,'"></div>\n                            </div>\n                          </div>\n                        ');r.style.gridTemplateColumns="repeat(".concat(a,", auto)"),document.querySelectorAll(".card-container").forEach((function(e){e.addEventListener("click",(function(){if(!e.classList.contains("matched"))if(e.classList.add("flipped"),s)if(f+=1,t.innerHTML="<span>".concat(f,"</span>"),d=e,i=e.getAttribute("data-card-value"),l==i&&(s.classList.add("matched"),d.classList.add("matched")),p==Math.floor(n.length/2));else{var a=[s,d],c=a[0],o=a[1],r=c.getAttribute("data-card-value"),u=o.getAttribute("data-card-value");console.log(c,o),r!==u?setTimeout((function(){c.classList.remove("flipped"),o.classList.remove("flipped")}),900):(c.classList.add("flipped"),o.classList.add("flipped")),s=null}else s=e,l=e.getAttribute("data-card-value")}))}))}(function(t){void 0===t&&(t=4);var n=e([],u,!0),a=[];t=t*t/2;for(var c=0;c<t;c++){var o=Math.floor(Math.random()*n.length);a.push(n[o]),n.splice(o,1)}return a}())},h=document.querySelector("[data-modal-target]"),y=document.querySelector("[data-close-button]"),b=document.getElementById("overlay");h.addEventListener("click",(function(){var e;null!=(e=document.querySelector(h.dataset.modalTarget))&&(e.classList.add("active"),b.classList.add("active"))})),y.addEventListener("click",(function(){var e;null!=(e=y.closest(".btn-modal-mobile"))&&(e.classList.remove("active"),b.classList.remove("active"))}))}})[607]()})();