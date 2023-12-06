let timer;
let startTime;
let isRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime();

        timer = setInterval(updateTimer, 10);

        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);

        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function resetTimer() {
    stopTimer();
    timerDisplay.textContent = '0:00:00.000';

    startBtn.disabled = false;
    resetBtn.disabled = true;
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    const minutes = Math.floor(elapsedTime / (60 * 1000));
    const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);
    const milliseconds = elapsedTime % 1000;

    timerDisplay.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
}

function pad(value, length = 2) {
    return value.toString().padStart(length, '0');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);