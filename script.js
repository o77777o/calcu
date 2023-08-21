function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multy(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operation(a, b, operator) {
  switch (operator) {
    case "+":
      return plus(a, b);

    case "-":
      return minus(a, b);

    case "*":
      return multy(a, b);

    case "/":
      return divide(a, b);
    default:
      return "Ошибка";
  }
}

function calculate() {
  const InputNum1 = document.querySelector("#a");
  const InputOperator = document.querySelector("#operator");
  const InputNum2 = document.querySelector("#b");

  const OutputResult = document.querySelector("#result");
  const result = operation(
    +InputNum1.value,
    +InputNum2.value,
    InputOperator.value
  );
  OutputResult.value = result;
}

// Стилистический калькулятор в айфоне
// (Если есть желание, добавить анимация как в айфоне, через css)
// Кнопка стирать однцу цифру, все.
// ПРИВЯЗАТЬ КЛАВИАТУРУ, чтобы кнопки при нажатии нажимались

/**
 * много
 * строчный
 * коммент
 */
