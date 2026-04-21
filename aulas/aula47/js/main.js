import { setClass, removeClass } from "./helpers.js";
import { getSecond } from "./logic.js";

const timerDisplay = document.querySelector('#timer');
let second = 0;
let timer;

function startTimer () {
    timer = setInterval(function () {
        second++;
        timerDisplay.textContent = getSecond(second);
    }, 1000);
}

function pauseTimer () {
    clearInterval(timer);
}

function resetTimer () {
    clearInterval(timer);
    second = 0;
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.id === 'start') {
        startTimer();
        removeClass('#timer', 'text-error');
    }

    if (el.id === 'pause') {
        pauseTimer();
        if (second > 0) {
        setClass('#timer', 'text-error');
        }
    }

    if (el.id === 'reset') {
        resetTimer();
        timerDisplay.innerHTML = '00:00:00';
        removeClass('#timer', 'text-error');
    }
})