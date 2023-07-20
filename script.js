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

function updateDisplay(event) {
    let screen = document.querySelector('.screen');
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

function clearScreen() {
    let screen = document.querySelector('.screen');
    screen.innerText = '0';
    newInput = true;
}


let firstNumber, secondNumber, operator;
let newInput = true;

let numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', updateDisplay);
});

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearScreen);
