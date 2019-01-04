const message = document.querySelector('.message');
const cursor = document.querySelector('.cursor');

const text = 'Hello, world!';

const timeCursorAnimation = 700;
const timeTextAnimation = 200;

let indexText = 0;

const textAnimation = () => {
    message.textContent += text[indexText];
    indexText++;
    if (indexText == text.length) {
        clearInterval(indexTimeout);
    }
}

let indexTimeout = setInterval(textAnimation, timeTextAnimation);


const cursorAnimation = () => {
    cursor.classList.toggle('active');
}

setInterval(cursorAnimation, timeCursorAnimation);