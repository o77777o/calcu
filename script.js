let a = ""; //память 1 числа
let b = ""; //память 2 числа
let operator = ""; //знак

//разделяем цифры от знаков
const numbers = document.querySelectorAll(".btn")
const action = document.querySelectorAll(".operators")
//Экран
const screen = document.querySelector(".screen");

function AC() {
  a = "";
  b = "";
  operator = "";
  screen.textContent = 0;
  console.log(a, b, operator);
}

document.querySelector(".ac").onclick = AC;

document.querySelector(".buttons").onclick = (event) => {
  if (event.target.classList.contains("ac")) return;
  if (!event.target.classList.contains("btn")) return;

  screen.textContent = "";
  const key = event.target.textContent;

  if (numbers.includes(key) && b === "" && operator === "") {
    a += key;
    console.log(a, b, operator);
    screen.textContent = a;
  }

  if (action.includes(key)) {
    operator = key;
    console.log(a, b, operator);
    screen.textContent = operator;
  }

  if (operator === "-" && a === "" && b === "") {
    a += key;
    operator = "";
    console.log(a, b, operator);
    screen.textContent = a;
  }

  if (operator === "+" && a === "-" && b === "") {
    a = "";
    operator = "";
    console.log(a, b, operator);
    screen.textContent = a;
  }

  // if (a === "-") {
  //   a = "";
  //   screen.textContent = a;
  // }

  // if (a === "" && b === "" && operator !== "") {
  //   a += key;
  //   operator = ""
  //   console.log(a, b, operator);
  //   screen.textContent = a;
  // }

  if (numbers.includes(key) && a !== "" && operator !== "") {
    b += key;
    console.log(a, b, operator);
    screen.textContent = b;
  }

  if (action.includes(key) && b !== "") {
    b = "";
  }

  if (key === "=") {
    switch (b) {
      case "":
        b = a;
        break;
    }

    switch (operator) {
      case "+":
        a = +a + +b;

        break;
      case "-":
        a = +a - +b;

        break;
      case "X":
        a = +a * +b;

        break;
      case "/":
        a = +a / +b;
        break;
    }
    screen.textContent = a;

    switch (a) {
      case Infinity:
        a = "";
        b = "";
        operator = "";
        screen.textContent = "Ошибка";
        break;
    }
    console.log(a, b, operator);
  }
};
