'use strict';

let cookie = document.getElementById('cookie');

let counter = document.getElementById('clicker__counter');

function countClicks() {
  counter.textContent++;
  if (counter.textContent % 2 > 0) {
    this.width = 220;
  } else {
    this.width = 170;
  }
}
cookie.onclick = countClicks;