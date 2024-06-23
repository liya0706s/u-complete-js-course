'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='Correct Number! 🙌';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=
    message;
}

// define again btn function
document.querySelector('.again').addEventListener
    ('click', function () {
        score=20;
        secretNumber=Math.trunc(Math.random()*20)+1;
        // document.querySelector('.message').textContent='Start guessing...';
        displayMessage('Start guessing....');
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';

        // CSS style part 
        document.querySelector('body').style.backgroundColor='black';
        document.querySelector('.number').style.width = '15rem';
    });

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        // 如果沒有放上Number(),通常會是string

        // When there is no input
        if (!guess) {
            // document.querySelector('.message').textContent = 'No number! 🫥';
            displayMessage('No number! 🫥');

        // When player wins
        } else if (guess === secretNumber) {
            // document.querySelector('.message').textContent = 'Correct Number! 🙌';
            displayMessage('Correct Number! 🙌');
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            // 目前分數大於最高分數
            if(score>highscore){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
        // When guess is wrong
        }else if(guess!== secretNumber){
            if (score > 1) {
                // document.querySelector('.message').textContent = guess>secretNumber ?'🎈 Too high!' : '😶‍🌫️ Too low!';
                displayMessage(guess>secretNumber ?'🎈 Too high!' : '😶‍🌫️ Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = 'You lost the game!';
                displayMessage('You lost the game!');
                document.querySelector('.score').textContent = 0;
            }
        }

        // When guess is too high
        // } else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '🎈 Too high!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = 'You lost the game!';
        //         document.querySelector('.score').textContent = 0;
        //     }

            // When guess is too low
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '😶‍🌫️ Too low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = 'You lost the game!';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
    });

