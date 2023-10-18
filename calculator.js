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
        if (secondNumber == 0){
            return "Can't Divide By Zero"
        }
        return divide(firstNumber, secondNumber);
    }
}
const body = document.querySelector("body");
const OutermostContainerIncludingDisplay = document.createElement('div');
OutermostContainerIncludingDisplay.setAttribute('class', 'OuterMost');
body.appendChild(OutermostContainerIncludingDisplay)


const container = document.createElement("div");
container.setAttribute("class", "container");
const display = document.createElement('div');
display.setAttribute("class", "display");
// display.textContent = 9746395;
OutermostContainerIncludingDisplay.appendChild(display);
OutermostContainerIncludingDisplay.appendChild(container);
const numbersAndClearBackSpaceContainer = document.createElement('div');
const clearBackspaceContainer = document.createElement('div');
clearBackspaceContainer.setAttribute("class", "clearBackspace");
const numberContainer = document.createElement('div');
numberContainer.setAttribute("class", "numbers")
const operatorContainer = document.createElement('div');
operatorContainer.setAttribute("class", "operators")

container.appendChild(numbersAndClearBackSpaceContainer);
numbersAndClearBackSpaceContainer.appendChild(clearBackspaceContainer);
numbersAndClearBackSpaceContainer.appendChild(numberContainer);
container.appendChild(operatorContainer);


for (let i = 9; i >= 0; i--){
    let numberButton = document.createElement("button");
    numberButton.textContent = i;
    numberButton.setAttribute('class', 'number');
    numberButton.addEventListener('click', () => {
        display.textContent += i;
    });
    numberContainer.appendChild(numberButton);
}
const period = document.createElement('button');
period.textContent = ".";
period.setAttribute("class", "numbers");
period.setAttribute("id", "period");
period.addEventListener('click', () => {
    let separateToDecimalCheck = display.textContent.split(' ');
    if (((separateToDecimalCheck.length == 1 || separateToDecimalCheck.length == 2) && !separateToDecimalCheck[0].includes("."))
            || (separateToDecimalCheck.length == 3 && !separateToDecimalCheck[2].includes("."))){
        display.textContent += period.textContent;
    }
});
numberContainer.appendChild(period);

const operations = ['+', '-', '/', 'x', '='];
for (let operator in operations){
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
            if(display.textContent.slice(-1) != ' ' && !(display.textContent.includes("Can't Divide By Zero"))){
                if (operatorButton.textContent == "=") {
                    display.textContent = operate(Number(splitCurrentlyDisplayed[0]),splitCurrentlyDisplayed[1],Number(splitCurrentlyDisplayed[2]))
                }
                else {
                    display.textContent = operate(Number(splitCurrentlyDisplayed[0]),splitCurrentlyDisplayed[1],Number(splitCurrentlyDisplayed[2])) + " " + operatorButton.textContent + " ";
                }
            }
        }
    });
    
    operatorContainer.appendChild(operatorButton)
}

const backspace = document.createElement('button');
backspace.textContent = 'backspace';
backspace.setAttribute('id','backspace');
backspace.addEventListener('click', () => {
    if(display.textContent.slice(-1) != ' '){
        display.textContent = display.textContent.slice(0, -1);
    }
});
clearBackspaceContainer.appendChild(backspace);

const clear = document.createElement('button');
clear.textContent = 'C';
clear.setAttribute('id','clear');
clear.addEventListener('click', () => {
    display.textContent = "";
});
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

//make you not able to hit another operator if there is currently a space at the end
//are lines 85-87 needed
