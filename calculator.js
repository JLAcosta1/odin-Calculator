let calcCurrentDisplayContainer = document.querySelector('.calculator-display-current');
let calcCurrentDisplayStr = "";

let calcPrevDisplayContainer = document.querySelector('.calculator-display-prev');
let calcPrevDisplayStr = "";

let calcAbsValueContainer = document.querySelector('.abs-value-status');

let operandOne = undefined;
let operandTwo = undefined;
let operator = undefined;
let negativeBool = false;

let solution = undefined;

function printOne() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "1";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "1";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function printTwo() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "2";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "2";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function printThree() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "3";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "3";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function printFour() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "4";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "4";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function printFive() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "5";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "5";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function printSix() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "6";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "6";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function printSeven() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "7";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "7";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function printEight() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "8";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "8";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function printNine() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "9";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "9";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function printZero() {
    if (calcCurrentDisplayStr.length < 9) {
        calcCurrentDisplayStr = calcCurrentDisplayStr + "0";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
    else {
        calcCurrentDisplayStr = calcCurrentDisplayStr.substring(1, 9) + "0";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
    }
}
function Add() {
    setOperator("+");
}

function Subtract () {
    setOperator("-");
}

function Multiply() {
    setOperator("x");
}

function Divide() {
    setOperator("/");
}

function Equal() {
    if (calcCurrentDisplayStr !== "") {
        setOperand();
        evaluate();
    }
}

function printDecimal() {
    calcCurrentDisplayStr = calcCurrentDisplayStr + ".";
    calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
}

function Negative() {
    negativeBool = !(negativeBool);

    if (negativeBool) {
        calcAbsValueContainer.textContent = "Neg.";
    }
    else {
        calcAbsValueContainer.textContent = "";
    }
}

function clearCalcStr() {
    if (calcCurrentDisplayStr !== "") {
        calcCurrentDisplayContainer.textContent = "0";
        calcCurrentDisplayStr = "";
    }

    else {
        calcCurrentDisplayStr = "0";
        calcCurrentDisplayContainer.textContent = calcCurrentDisplayStr;
        calcPrevDisplayContainer.textContent = "";
        solution = 0;
        operandOne = undefined;
        operandTwo = undefined;
        calcCurrentDisplayStr = "";
    }

    negativeBool = false;
    calcAbsValueContainer.textContent = "";
}

function setOperand() {
    if(operandOne == undefined) {
        operandOne = Number(calcCurrentDisplayStr);
        if (negativeBool) {
            operandOne = operandOne * -1;
            negativeBool = false;
            calcAbsValueContainer.textContent = "";
        }
        calcCurrentDisplayStr = "";

    }

    else {
        operandTwo = Number(calcCurrentDisplayStr);
        if (negativeBool) {
            operandTwo = operandTwo * -1;
            negativeBool = false;
            calcAbsValueContainer.textContent = "";
        }
    }
}

function setOperator(val) {
    if (calcCurrentDisplayStr !== "") {
        setOperand();
    }
    if (operandOne !== undefined && operandTwo !== undefined) {
        evaluate();
    }

    if (operandOne !== undefined) {
        operator = val;
        calcPrevDisplayContainer.textContent = operandOne.toString() + operator;
    }
}


function evaluate() {

    if (operandTwo == undefined || operator == undefined || operandTwo == undefined) {}

    else if(operator == "+") {
        solution = operandOne + operandTwo;
    }

    else if(operator == '-') {
        solution = operandOne - operandTwo;
    }

    else if(operator == 'x') {
        solution = operandOne * operandTwo;
    }

    else if(operator == '/') {
        if (operandTwo == 0) {
            calcPrevDisplayContainer.textContent = "";
            calcCurrentDisplayContainer.textContent = "Shame on you.";
            operandOne = undefined;
        } 
        else {
            solution = operandOne / operandTwo;
        }
    }

    if (solution !== undefined) {
        if (solution.toString().length < 12) {
            calcPrevDisplayContainer.textContent = operandOne.toString() + operator + operandTwo.toString();
            calcCurrentDisplayContainer.textContent = operandOne = solution;
        }
        else {
            if (solution.toString().indexOf('.') > -1) {
                calcPrevDisplayContainer.textContent = operandOne.toString() + operator + operandTwo.toString();
                calcCurrentDisplayContainer.textContent = operandOne = solution.toFixed(3);
            }
            else {
                calcPrevDisplayContainer.textContent = "";
                calcCurrentDisplayContainer.textContent = "Err: Overflow";
                operandOne = undefined;
            }
        }
    }

    operandTwo = undefined;
    solution = undefined;
    calcCurrentDisplayStr = "";
}

one.addEventListener("click", printOne);
two.addEventListener("click", printTwo);
three.addEventListener("click", printThree);
four.addEventListener("click", printFour);
five.addEventListener("click", printFive);
six.addEventListener("click", printSix);
seven.addEventListener("click", printSeven);
eight.addEventListener("click", printEight);
nine.addEventListener("click", printNine);
zero.addEventListener("click", printZero);
add.addEventListener("click", Add);
subtract.addEventListener("click", Subtract);
multiply.addEventListener("click", Multiply);
divide.addEventListener("click", Divide);
equal.addEventListener("click", Equal);
decimal.addEventListener("click", printDecimal);
negative.addEventListener("click", Negative);
clear.addEventListener("click", clearCalcStr);