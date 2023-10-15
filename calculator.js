function add (a, b){
    return a + b;
}

function subtract (a,b){
    return a - b;
}

function multiply (a,b){
    return a * b;
}

function divide (a,b){
    return a / b;
}

function operate(firstNumber, operator, secondNumber){
    if (operator === "plus") {
        let newProduct = add(firstNumber, secondNumber);
    }
    else if (operator === "minus") {
        let newProduct = subtract(firstNumber, secondNumber);
    }
    else if (operator === "multiply") {
        let newProduct = multiply(firstNumber, secondNumber);
    }
    else if (operator === "divide") {
        let newProduct = divide(firstNumber, secondNumber);
    }
}

var firstNumber;
var operator;
var secondNumber;

const body = document.querySelector("body")
const container = document.createElement("div")
const display = document.createElement('div');
display.textContent = 9746395;
body.appendChild(display);
body.appendChild(container)
const numbersAndClearBackSpaceContainer = document.createElement('div');
const clearBackspaceContainer = document.createElement('div');
const numberContainer = document.createElement('div');
const operatorContainer = document.createElement('div');

container.appendChild(numbersAndClearBackSpaceContainer);
numbersAndClearBackSpaceContainer.appendChild(clearBackspaceContainer);
numbersAndClearBackSpaceContainer.appendChild(numberContainer);
container.appendChild(operatorContainer);


for (let i = 0; i < 10; i++){
    let numberButton = document.createElement("button");
    numberButton.textContent = i;
    numberContainer.appendChild(numberButton)
}
const operations = ['+', '-', '/', 'x', '='];
for (operator in operations){
    let operatorButton = document.createElement('button');
    operatorButton.textContent = operations[operator];
    operatorButton.setAttribute('id', operations[operator]);
    operatorContainer.appendChild(operatorButton)
}

const backspace = document.createElement('button');
backspace.textContent = 'backspace';
backspace.setAttribute('id','backspace');
clearBackspaceContainer.appendChild(backspace);

const clear = document.createElement('button');
clear.textContent = 'C';
clear.setAttribute('id','clear');
clearBackspaceContainer.appendChild(clear);