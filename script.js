'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const lowerScore = function () {};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  const Decrement = function (message) {
    if (score > 1) {
      document.querySelector('.message').textContent = message;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Perdedor 😢🤷‍♀️';
      document.querySelector('.score').textContent = 0;
    }
  };

  //When the number is 0 or lower
  if (guess <= 0) {
    document.querySelector('.message').textContent = 'NOT A VALID NUMBER 🐱‍👓';
  }
  //When you win
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'CORRECT YOU ARE A PRO 🐱‍🐉🎉';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //When the number is higher
  else if (guess < secretNumber) {
    Decrement('Escoge un número más alto');
  }

  //When the number is lower
  else {
    Decrement('Escoge un número más bajo');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
