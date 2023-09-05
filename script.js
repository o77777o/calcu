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
  if (event.target.classList.contains('ac')) return;
  if (!event.target.classList.contains("btn")) return;

  screen.textContent = "";
  const key = event.target.textContent;

  if (numbers.includes(key)) {
    a += key;
    console.log(a, b, operator);
  }

  screen.textContent = a
};