let calcDisplayContainer = document.querySelector('.calculator-display')
let calcDisplayStr = ""

function printOne() {
    calcDisplayStr = calcDisplayStr + "1"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printTwo() {
    calcDisplayStr = calcDisplayStr + "2"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printThree() {
    calcDisplayStr = calcDisplayStr + "3"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printFour() {
    calcDisplayStr = calcDisplayStr + "4"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printFive() {
    calcDisplayStr = calcDisplayStr + "5"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printSix() {
    calcDisplayStr = calcDisplayStr + "6"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printSeven() {
    calcDisplayStr = calcDisplayStr + "7"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printEight() {
    calcDisplayStr = calcDisplayStr + "8"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printNine() {
    calcDisplayStr = calcDisplayStr + "9"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printZero() {
    calcDisplayStr = calcDisplayStr + "0"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printAdd() {
    calcDisplayStr = calcDisplayStr + "+"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printSubtract () {
    calcDisplayStr = calcDisplayStr + "-"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printMultiply() {
    calcDisplayStr = calcDisplayStr + "x"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printDivide() {
    calcDisplayStr = calcDisplayStr + "/"
    calcDisplayContainer.textContent = calcDisplayStr
}
function printEqual() {
    console.log("=");
}
function printDecimal() {
    calcDisplayStr = calcDisplayStr + "."
    calcDisplayContainer.textContent = calcDisplayStr
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
add.addEventListener("click", printAdd);
subtract.addEventListener("click", printSubtract);
multiply.addEventListener("click", printMultiply);
divide.addEventListener("click", printDivide);
equal.addEventListener("click", printEqual);
decimal.addEventListener("click", printDecimal);