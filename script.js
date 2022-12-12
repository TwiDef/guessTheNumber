'use strict';

const message = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const input = document.querySelector('.number-input');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let points = 20;

againBtn.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    points = 20;
    score.textContent = points;
    message.textContent = 'Начни угадывать!';
    input.value = '';
    body.style.backgroundColor = '#000000';
    question.textContent = '???';
    question.style.width = '25rem';

});

checkBtn.addEventListener('click', () => {
    const guessingNumber = Number(input.value);

    // no input
    if (!guessingNumber) {
        message.textContent = 'Введите число!';
        // player won
    } else if (guessingNumber === secretNumber) {
        message.textContent = 'Правильно!';
        question.textContent = secretNumber;
        body.style.backgroundColor = '#09fa15';
        question.style.width = '50rem';
        // too high
    } else if (guessingNumber > secretNumber) {
        if (points > 1) {
            message.textContent = 'Слишком много!';
            points--;
            score.textContent = points;
        } else {
            message.textContent = 'Ты проиграл!';
            score.textContent = 0;
        }
        // too low
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