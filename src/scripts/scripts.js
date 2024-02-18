const btn = document.querySelector('#BtnClick');
const gameBox = document.querySelector('#GameBox');
let isStarted = false;
const gameDuration = 3000;
let score = 0;
let handler;

const startGame = () => {
    score = 0;
    isStarted = true;
    gameBox.addEventListener('click', onClick);
    handler = setTimeout(() => {
        endGame();
    }, gameDuration);
}

const endGame = () => {
    clearTimeout(handler);
    isStarted = false;
    alert(`Your score is ${score}`);
    gameBox.removeEventListener('click', onClick);
}

const onClick = () => {
    score++;
}

btn.addEventListener('click', () => {
    if (isStarted) {
        endGame();
        return;
    }

    startGame();
})