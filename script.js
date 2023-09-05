let a = ""; //память 1 числа
let b = ""; //память 2 числа
let operator = ""; //знак
let stop = false;

//разделяем цифры от знаков
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ","];
const action = ["+", "-", "/", "X"];
//Экран
const screen = document.querySelector(".screen");

function AC() {
  a = "";
  b = "";
  operator = "";
  stop = false;
  screen.textContent = 0;
  console.log(a, b, operator, stop);
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

  if (numbers.includes(key) && a !== "" && operator !== "") {
    b += key;
    console.log(a, b, operator);
    screen.textContent = b;
  }

  if (key === "=") {
    switch (operator) {
      case "+":
        a = +a + +b;
        return;
      case "-":
        a = +a - +b;
        return;
      case "X":
        a = +a * +b;
        return;
      case "/":
        a = +a / +b;
        return;
    }
    screen.textContent = a;
    console.log(a, b, operator);
  }
};

// function calculate(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return +a + +b;
//     case "-":
//       return +a - +b;
//     case "X":
//       return +a * +b;
//     case "/":
//       return +a / +b;
//     default:
//       return undefined;
//   }
// }
