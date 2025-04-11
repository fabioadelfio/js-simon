const countdown = document.getElementById(`countdown`);
const instructions = document.getElementById(`instructions`);

const numbersList = document.getElementById(`numbers-list`);

const answersForm = document.getElementById(`answers-form`);
const inputGroup = document.getElementById(`input-group`);

// # Countdown
let remainingMs = 3000;
let countdownIntervalId;

const handleCountdown = () => {
    remainingMs -= 1000;

    if(remainingMs > 0) {
        countdown.innerText= `${remainingMs / 1000}`
    } else {
        clearInterval(countdownIntervalId);
        countdown.classList.add(`d-none`);
        generateNumbersList();
    }
}

const counterCountdown = () => {
    if(!countdownIntervalId) {
        countdownIntervalId = setInterval(handleCountdown, 1000);
    }
}

counterCountdown();

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateNumbersList = () => {
    let randomNumbers = [];
    for(i = 0; i < 5; i++) {
        randomNumbers.push(generateRandomNumber(1, 50));
        const currentNumber = randomNumbers[i];
        const li = document.createElement(`li`);
        li.innerText = `${currentNumber}`;
        numbersList.append(li)
    }
    console.log(randomNumbers);
}






