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
            return divide(a, b);
        default: 
            return;
    }
}

function updateNumber(event) {
    let number = event.target.innerText;
    if (newInput) {
        screen.innerText = number;
        newInput = false;
    } else if (number === '.' && screen.innerText.includes('.')) {
        return;
    } else {
        screen.innerText += number;
    }
}

function setOperator(event) {
    if (firstNumber) {
        evaluate();
        operator = event.target.id;
        newInput = true;
        return;
    }
    operator = event.target.id;
    newInput = true;
    firstNumber = Number(screen.innerText);
}

function evaluate() {
    if (!operator || !firstNumber) return;
    secondNumber = Number(screen.innerText);
    console.log(operator, firstNumber, secondNumber);
    let result = operate(operator, firstNumber, secondNumber);
    screen.innerText = result;
    firstNumber = result;
    operator = null;
    newInput = true;
}

function clearScreen() {
    let screen = document.querySelector('.screen');
    screen.innerText = '0';
    newInput = true;
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

let firstNumber = null;
let secondNumber = null;
let operator = null;
let newInput = true;
let screen = document.querySelector('.screen');

let numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', updateNumber);
});

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearScreen);

let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', setOperator);
});

let equalButton = document.querySelector('.evaluate');
equalButton.addEventListener('click', evaluate);
