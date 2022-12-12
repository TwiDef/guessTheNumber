'use strict';

const message = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const input = document.querySelector('.number-input');
const checkBtn = document.querySelector('.check');


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let points = 20;
question.textContent = secretNumber;

checkBtn.addEventListener('click', () => {
    const guessingNumber = Number(input.value);

    if (!guessingNumber) {
        message.textContent = 'Введите число!';
    } else if (guessingNumber === secretNumber) {
        message.textContent = 'Правильно!';
    } else if (guessingNumber > secretNumber) {
        if (points > 1) {
            message.textContent = 'Слишком много!';
            points--;
            score.textContent = points;
        } else {
            message.textContent = 'Ты проиграл!';
            score.textContent = 0;
        }
    } else if (guessingNumber < secretNumber) {
        if (points > 1) {
            message.textContent = 'Слишком мало!';
            points--;
            score.textContent = points;
        } else {
            message.textContent = 'Ты проиграл!';
            score.textContent = 0;
        }
    }
});