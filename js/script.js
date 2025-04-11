const countdown = document.getElementById(`countdown`);
const instructions = document.getElementById(`instructions`);

const numbersList = document.getElementById(`numbers-list`);

const answersForm = document.getElementById(`answers-form`);
const inputGroup = document.getElementById(`input-group`);

// # Countdown
let remainingMs = 10000;
let countdownIntervalId;

const handleCountdown = () => {
    remainingMs -= 1000;

    if(remainingMs >= 0) {
        countdown.innerText= `${remainingMs / 1000}`
    } else {
        clearInterval(countdownIntervalId);
    }
}

const counterCountdown = () => {
    if(!countdownIntervalId) {
        countdownIntervalId = setInterval(handleCountdown, 1000);
    }
}

counterCountdown();


