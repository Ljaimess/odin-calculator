const buttons = document.querySelectorAll("button");
const enterButton = document.querySelector(".enterButton");
const numDisplay = document.querySelector("p")
let equation = {num1: "", operator: "", num2: "2"}

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        numDisplay.innerHTML = '';
        numDisplay.innerText += button.innerText;
        equation.num1 += button.innerText;
        console.log(equation.num1);
        console.log(array[2+"2'"]);
    });
});


