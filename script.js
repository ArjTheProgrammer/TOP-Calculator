//Basic math operators
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let firstNum = '';
let operator = '';
let secondNum = '';
let displayValue = "";

function operate(operator, firstNum, secondNum){
    switch(operator){
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum,secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}

const displayContainer = document.querySelector(".display");
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
        button.addEventListener('click', () => display(button));
});

function display(button){
        displayValue += button.value;
        if (operator == "" && button.className == "number"){
            firstNum += button.value;
            console.log(`first num value ${firstNum}`)
        }
        if (button.className == "operator"){
            operator = button.value;
            console.log(`operator clicked ${operator}`)
        }

    if (operator != '' && button.className == "number"){
        secondNum += button.value;
        console.log(`second num value ${secondNum}`)
    }
        displayContainer.textContent = displayValue;    
}
