let a = ""; //память 1 числа
let b = ""; //память 2 числа
let operator = ""; //знак

//разделяем цифры от знаков
const numbers = document.querySelectorAll(".numbers");
const action = document.querySelectorAll(".operators");
const screen = document.querySelector(".screen");

console.log(numbers.length);
console.log(action.length);

function AC() {
  a = "";
  b = "";
  operator = "";
  screen.textContent = "0";
  console.log("Поле очищено");
}

document.querySelector(".ac").onclick = AC;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (b === "" && operator === "") {
      a += this.innerText;
      screen.textContent = a;
    }
    if (operator !== "") {
      b += this.innerText;
      screen.textContent = b;
    }

    console.log(a, b, operator);
  });
}

for (let i = 0; i < action.length; i++) {
  action[i].addEventListener("click", function () {
    operator = this.innerText;
    screen.textContent = operator;
    console.log(a, b, operator);
  });
}
