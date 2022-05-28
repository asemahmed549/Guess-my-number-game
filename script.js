'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Hi Asem';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;
let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = "🏆 you're win";
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score < 1) {
    document.querySelector('.message').textContent = 'You lose the game';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // const number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';

  // console.log(number);
});
