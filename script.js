'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore0 = 0;
let currentScore1 = 0;
let mainScore0 = 0;
let mainScore1 = 0;
let player0 = true;
let player1 = false;

const switchPlayer = function () {
  if (player1) {
    player1 = false;
    player0 = true;
    currentScore0 = 0;
    // mainScore0 = 0;
    console.log(currentScore0);
    current0El.textContent = currentScore0;
    playerActive0.classList.add('player--active');
    playerActive1.classList.remove('player--active');
  } else {
    currentScore1 = 0;
    current1El.textContent = currentScore1;
    player0 = false;
    player1 = true;
    // mainScore1 = 0;
    playerActive1.classList.add('player--active');
    playerActive0.classList.remove('player--active');
  }
};

btnNew.addEventListener('click', function () {
  playerActive0.classList.add('player--active');
  playerActive1.classList.remove('player--active');
  currentScore0 = 0;
  currentScore1 = 0;
  mainScore0 = 0;
  mainScore1 = 0;
  player0 = true;
  player1 = false;
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
});

btnHold.addEventListener('click', function () {
  if (player0) {
    console.log('p1');
    mainScore0 += currentScore0;
    score0El.textContent = mainScore0;
    current0El.textContent = 0;

    switchPlayer();
  } else {
    console.log('p2');
    mainScore1 += currentScore1;
    score1El.textContent = mainScore1;
    current1El.textContent = 0;
    switchPlayer();
  }
});

btnRoll.addEventListener('click', function () {
  //1 generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2 display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3 check for roled 1
  if (dice !== 1) {
    //add to current core of active player
    if (player0) {
      currentScore0 += dice;
      current0El.textContent = currentScore0;
    } else {
      currentScore1 += dice;
      current1El.textContent = currentScore1;
    }
  } else {
    if (player0) {
      current0El.textContent = 0;
      mainScore0 = 0;
      score0El.textContent = 0;
    } else {
      current1El.textContent = 0;
      mainScore1 = 0;
      score1El.textContent = 0;
    }

    switchPlayer();
  }
});
