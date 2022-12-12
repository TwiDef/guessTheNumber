'use strict';


const question = document.querySelector('.question');
const currentScore = document.querySelector('.score');
const currentHighScore = document.querySelector('.highscore');
const input = document.querySelector('.number-input');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayGuessMessage = function(message) {
    document.querySelector('.guess-message').textContent = message;
};

// default settings
againBtn.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    currentScore.textContent = score;
    displayGuessMessage('Начни угадывать!');
    input.value = '';
    body.style.backgroundColor = '#000000';
    question.textContent = '???';
    question.style.width = '25rem';
});

checkBtn.addEventListener('click', () => {
    const guessingNumber = Number(input.value);

    // no input
    if (!guessingNumber) {
        displayGuessMessage('Введите число!');

        // player won
    } else if (guessingNumber === secretNumber) {
        displayGuessMessage('Правильно!');
        question.textContent = secretNumber;
        body.style.backgroundColor = '#09fa15';
        question.style.width = '50rem';

        if (score > highScore) {
            highScore = score;
            currentHighScore.textContent = highScore;
        }

        // num is wrong
    } else if (guessingNumber !== secretNumber) {
        if (score > 1) {
            displayGuessMessage(guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!');
            score--;
            currentScore.textContent = score;
        } else {
            displayGuessMessage('Ты проиграл!');
            currentScore.textContent = 0;
        }
    }
});