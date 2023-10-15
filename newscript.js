let a = ""; //память 1 числа
let b = ""; //память 2 числа
let operator = ""; //знак

//разделяем цифры от знаков
const numbers = document.querySelectorAll(".numbers");
const action = document.querySelectorAll(".operators");
//
const screen = document.querySelector(".screen");

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
    if (a !== "") {
      operator = this.innerText;
      screen.textContent = operator;
      console.log(a, b, operator);
    }
  });
}

//

document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Находим кнопку на калькуляторе, соответствующую нажатой клавише
  const button = document
    .querySelectorAll(".numbers, .operators, .result")
    .find((element) => element.textContent === key);

  console.log(button);

  if (button) {
    button.click(); // Имитируем клик на кнопку
  }
});

//

let calculate = () => {
  switch (operator) {
    case "+":
      a = +a + +b;
      break;
    case "-":
      a = +a - +b;
      break;
    case "/":
      a = +a / +b;
      break;
    case "X":
      a = +a * +b;
      break;
  }
  b = "";
  screen.textContent = a;
  console.log(a, b, operator);

  switch (a) {
    case Infinity:
      a = "";
      b = "";
      operator = "";
      screen.textContent = "Ошибка";
      console.log("Поле очищено");
      break;
  }
};

document.querySelector(".result").onclick = calculate;
