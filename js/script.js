const countdown = document.getElementById(`countdown`);
const instructions = document.getElementById(`instructions`);

const numbersList = document.getElementById(`numbers-list`);

const answersForm = document.getElementById(`answers-form`);
const inputGroup = document.getElementById(`input-group`);

// # Countdown
let remainingMs = 5000;
let countdownIntervalId;

// Creo il primo countdown e una volta terminato parte immediatamente il secondo

const firstCountdown = () => {
    remainingMs -= 1000;

    if(remainingMs > 0) {
        countdown.innerText = `${remainingMs / 1000}`
    } else {
        clearInterval(countdownIntervalId);
        countdownIntervalId = null;
        countdown.classList.add(`d-none`);

        setTimeout(() => {
            generateNumbersList();
            remainingMs = 10000;
            countdown.classList.remove(`d-none`);
            viewingCountdown();
        }, 0);
    }
}

const counterCountdown = () => {
    if(!countdownIntervalId) countdownIntervalId = setInterval(firstCountdown, 1000);
}

const secondCountdown = () => {
    remainingMs -= 1000;

    if(remainingMs > 0) {
        countdown.innerText= `${remainingMs / 1000}`;
    } else {
        clearInterval(countdownIntervalId);
        countdown.classList.add(`d-none`);
        numbersList.classList.add(`d-none`);
        answersForm.classList.remove(`d-none`);
        instructions.innerText = `Indovina più numeri possibili!`;
    }
}

const viewingCountdown = () => {
    if(!countdownIntervalId) countdownIntervalId = setInterval(secondCountdown, 1000);
}

counterCountdown();


// # Stampo i 5 numeri casuali

// Dichiaro la funzione che mi genera un numero casuale
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Dichiaro l'array in cui si inseriscono i numeri random
let randomNumbers = [];

// Dichiaro la funzione che genera 5 numeri casuali 
// che vengono inseriti nell'array random e stampati
const generateNumbersList = () => {
    for(i = 0; i < 5; i++) {
        randomNumbers.push(generateRandomNumber(1, 50));
        const currentNumber = randomNumbers[i];
        const li = document.createElement(`li`);
        li.innerText = `${currentNumber}`;
        numbersList.append(li)
    }
    console.log(randomNumbers);
}

const number1Input = document.getElementById(`number1`);
const number2Input = document.getElementById(`number2`);
const number3Input = document.getElementById(`number3`);
const number4Input = document.getElementById(`number4`);
const number5Input = document.getElementById(`number5`);

// Dichiaro l'array in cui si inseriscono i numeri digitati dall'utente

let userNumbersList = [];

// Al click controllo quanti numeri inseriti dall'utente 
// corrispondono a quelli dell'array random

answersForm.addEventListener(`submit`, function (event) {
    event.preventDefault();

    const number1 = parseInt(number1Input.value);
    const number2 = parseInt(number2Input.value);
    const number3 = parseInt(number3Input.value);
    const number4 = parseInt(number4Input.value);
    const number5 = parseInt(number5Input.value);

    userNumbersList.push(number1);
    userNumbersList.push(number2);
    userNumbersList.push(number3);
    userNumbersList.push(number4);
    userNumbersList.push(number5);

    console.log(userNumbersList);

    let counterGuessedNumber = 0;
    let guessedNumbers = ``;

    // Itero l'array per controllare se il numero corrente è incluso nell'array random
    for(i = 0; i < userNumbersList.length; i++) {
        const currentNumber = userNumbersList[i];
        if(randomNumbers.includes(currentNumber)){
            counterGuessedNumber += 1;
            guessedNumbers += ` ` + currentNumber + ` `;
        }
    }
    instructions.innerText = `Hai indovinato ${counterGuessedNumber} numeri! (${guessedNumbers})`;
})