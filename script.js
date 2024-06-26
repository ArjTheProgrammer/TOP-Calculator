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

        if (button.value == 'd'){
            backspace();
        }

        //for the number buttons
        if (operator == "" && button.className == "number"){
            if (button.value === '.'){
                firstNum += button.value;
                dot.disabled = true;
            }
            else {
                firstNum += button.value;
            }
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
            secondNum.includes('.') ? dot.disabled = true : dot.disabled = false;

            if (button.value === '.'){
                secondNum += button.value;
                dot.disabled = true;
            }
            else {
                secondNum += button.value;
            }
            displayValue += button.value;
            console.log(`second num value ${secondNum}`)
        }

        if(button.className == 'operator' && 
        (firstNum != '' && secondNum != '' && operator !='') ||
        button.className == 'equal' && (firstNum != '' && secondNum != '' && operator !='')
        ){
            dot.disabled = false;
            let parsedFirstNum = firstNum.includes('.') ? parseFloat(firstNum) : parseInt(firstNum);
            let parsedSecondNum = secondNum.includes('.') ? parseFloat(secondNum) : parseInt(secondNum);

            if (button.className == 'operator'){
                answer = `${operate(operator, parsedFirstNum, parsedSecondNum)}`;
                if (answer.includes('.')){
                    answer = `${Math.round(answer * 100) / 100}`;
                }
                firstNum = answer;
                answer = '';
                secondNum = '';
                operator = button.value;
                displayValue = `${firstNum} ${operator}`;
            }

            if (button.className == 'equal'){
                answer = `${operate(operator, parsedFirstNum, parsedSecondNum)}`;
                if (answer.includes('.')){
                    answer = `${Math.round(answer * 100) / 100}`;
                }

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
        dot.disabled = false;
        displayValue = "";
        console.log("cleared");
    }
}

function backspace(){
    if (secondNum !== ''){
        if (secondNum.charAt(secondNum.length - 1) == "."){
            dot.disabled = false;
            console.log("dot enabled");
        }

        secondNum = secondNum.slice(0, -1);
        console.log(`secondNum: ${secondNum}`);
        displayValue = displayValue.slice(0, -1);

    }

    else if (operator !== ''){
        if (firstNum.includes(".")){
            dot.disabled = true;
        }
        operator = operator.slice(0, -1);
        console.log(`operator: ${operator}`);
        displayValue = displayValue.slice(0, -1);
    }

    else if (firstNum !== ''){
        if (firstNum.charAt(firstNum.length - 1) == "."){
            dot.disabled = false;
            console.log("dot enabled");
        }

        firstNum = firstNum.slice(0, -1);
        console.log(`firstNum: ${firstNum}`);
        displayValue = displayValue.slice(0, -1);
    }
}