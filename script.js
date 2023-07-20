function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b){
    switch(operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            if (b === 0) return "ERROR";
            return divide(a, b);
        default: 
            return;
    }
}

function updateNumber(event) {
    let number = event.target.innerText;
    if (newInput) {
        displayNumber = Number(number);
        newInput = false;
        updateScreen();
    } else if (number === '.' && screen.innerText.includes('.')) {
        return;
    } else {
        displayNumber = Number(screen.innerText += number);
        updateScreen();
    }
}

function setOperator(event) {
    if (firstNumber) {
        secondNumber = displayNumber;
        evaluate();
    }
    operator = event.target.id;
    newInput = true;
    firstNumber = displayNumber;
    secondNumber = null;
    updateScreen();
}

function evaluate() {
    if (!secondNumber) secondNumber = displayNumber;
    if (!firstNumber) firstNumber = displayNumber;
    let result = operate(operator, firstNumber, secondNumber);
    if (!result) return;
    displayNumber = result;
    firstNumber = null;
    newInput = true;
    updateScreen();
}

function clearScreen() {
    displayNumber = 0;
    newInput = true;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    updateScreen();
}

function updateScreen() {
    screen.innerText = parseFloat(displayNumber.toFixed(6));
    console.log(operator, firstNumber, secondNumber);
}

let firstNumber = null;
let secondNumber = null;
let operator = null;
let newInput = true;
let displayNumber = 0;
let screen = document.querySelector('.screen');

let numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', updateNumber));

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearScreen);

let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', setOperator));

let equalButton = document.querySelector('.evaluate');
equalButton.addEventListener('click', evaluate);
