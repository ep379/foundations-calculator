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
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    }
    else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    }
    else if (operator === "x") {
        return multiply(firstNumber, secondNumber);
    }
    else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

var firstNumber;
var operator;
var secondNumber;

const body = document.querySelector("body")
const container = document.createElement("div")
const display = document.createElement('div');
// display.textContent = 9746395;
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
    numberButton.setAttribute('class', 'number');
    numberButton.addEventListener('click', () => {
        display.textContent += i;
    });
    numberContainer.appendChild(numberButton);
}
const operations = ['+', '-', '/', 'x', '='];
for (operator in operations){
    let operatorButton = document.createElement('button');
    operatorButton.textContent = operations[operator];
    operatorButton.setAttribute('id', operations[operator]);
    operatorButton.addEventListener('click', () => {
        let currentlyDisplayed = display.textContent
        if(currentlyDisplayed.split(" ").length == 1){
            display.textContent += " " + operatorButton.textContent + " ";
        }
        else {
            let splitCurrentlyDisplayed = currentlyDisplayed.split(" ");
            if (operatorButton.textContent == "=") {
                display.textContent = operate(Number(splitCurrentlyDisplayed[0]),splitCurrentlyDisplayed[1],Number(splitCurrentlyDisplayed[2]))
            }
            else {
                display.textContent = operate(Number(splitCurrentlyDisplayed[0]),splitCurrentlyDisplayed[1],Number(splitCurrentlyDisplayed[2])) + " " + operatorButton.textContent + " ";
            }
        }
    });
    
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

//Event Listener to display numbers when the numbers are clicked
//Event Listener to display a operator
//Store the entire string,
//keep a count to see if there's already an operator 
//once an operator has been pressed, check the expresson, if only one number do nothing
//if there are two numbers, operate and then input the next operator, i.e. waiting for second number again 

//separate the string by spaces, if the length is 1, add the operator " + " with the spaces, unless operator was =
//once the operator is pressed, store the first value, now display that number, and the plus
// if the plus is pressed again and first value is already set, operate and then replace the stored value with the new one
