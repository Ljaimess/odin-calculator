const numButtons = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const enterButton = document.querySelector(".enterButton");
const clearButton = document.querySelector(".clearButton");
const numDisplay = document.querySelector("p");
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
numDisplay.innerText = "numbers here";

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (numDisplay.innerText === "numbers here") {
            numDisplay.innerText = "";
        }
        if (operator === "") {
            num1 += button.innerText;
        } else {
            num2 += button.innerText;
        }
        numDisplay.innerText += button.innerText;
        console.log(num1, num2, operator);
    });
});

operators.forEach((op) => {
    op.addEventListener("click", () => {
        operator = op.innerText;
        numDisplay.innerHTML += operator;
    });
});

clearButton.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    numDisplay.innerHTML = "";
    console.log("cleared" + num1, num2, operator);
});

enterButton.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "" && operator !== "") {
        result = operate(num1, num2, operator);
        numDisplay.innerHTML = result;
        num1 = "";
        num2 = "";
        operator = "";
    }
});

const operate = (num1, num2, operator) => {
    if (operator === "+") {
        return parseFloat(num1) + parseFloat(num2);
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Error";
    }
};