
const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
let number1;
let number2;

console.log(buttons);

function sum(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

function div(number1, number2) {
    return number1 / number2;
}

function mult(number1, number2) {
    return number1 * number2;
}

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let txt = this.textContent;
        let addedText = document.createTextNode(txt);
        return input.appendChild(addedText);
    });
};
