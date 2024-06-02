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
let answer='';
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
const dot = document.getElementById('dot');
dot.disabled = false;

buttons.forEach(button => {
        button.addEventListener('click', () => display(button));
});

function display(button){
        if (button.value == 'c'){
            clear();
        }
        if (operator == "" && button.className == "number"){
            if (button.value === '.'){
                firstNum += button.value;
                dot.disabled = true;
            }
            firstNum += button.value;
            displayValue += button.value;
            console.log(`first num value ${firstNum}`)
        }
        if (button.className == "operator" && operator === ''){
            operator = button.value;
            displayValue += button.value;
            dot.disabled = false;
            console.log(`operator clicked ${operator}`)
        }

        if (operator != '' && button.className == "number"){
            if (button.value === '.'){
                firstNum += button.value;
                dot.disabled = true;
            }
            secondNum += button.value;
            displayValue += button.value;
            console.log(`second num value ${secondNum}`)
        }

        if(button.className == 'operator' && 
        (firstNum != '' && secondNum != '' && operator !='') ||
        button.className == 'equal' && (firstNum != '' && secondNum != '' && operator !='')
        ){
            dot.disabled = false;
            let parsedFirstNum = parseInt(firstNum);
            let parsedSecondNum = parseInt(secondNum);

            if (button.className == 'operator'){
                answer = operate(operator, parsedFirstNum, parsedSecondNum);
                firstNum = answer;
                answer = '';
                secondNum = '';
                operator = button.value;
                displayValue = `${firstNum} ${operator}`;
            }

            if (button.className == 'equal'){
                answer = operate(operator, parsedFirstNum, parsedSecondNum);
                firstNum = answer;
                answer = '';
                displayValue = `${firstNum}`;
                console.log(`answer: ${firstNum}`);
                operator = '';
                secondNum = '';
            }
            console.log('------------------')
            console.log(`firstNum: ${firstNum}`);
            console.log(`operator: ${operator}`);
            console.log(`secondNum: ${secondNum}`);
        }

        displayContainer.textContent = displayValue;    
}

function clear(){
    if(firstNum != '' || secondNum != '' || operator !='' || answer != ""){
        firstNum = '';
        operator = '';
        secondNum = '';
        answer='';
        displayValue = "";
        console.log("cleared");
    }
}