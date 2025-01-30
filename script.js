const numButtons = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const enterButton = document.querySelector(".enterButton");
const clearButton = document.querySelector(".clearButton");
const numDisplay = document.querySelector("p");
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        numDisplay.innerHTML = '';
        numDisplay.innerText += button.innerText;
        if (operator === "") {
            num1 += button.innerText;
        } else {
            num2 += button.innerText;
        }
        console.log(num1, num2, operator);
    });
});

operators.forEach((op) => {
    op.addEventListener("click", () => {
        operator = op.innerText;
        numDisplay.innerHTML = "";
        console.log(operator + "q");
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

});
