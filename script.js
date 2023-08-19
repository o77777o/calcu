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

// let operator = ["+", "-", "*", "/"];

function operation(a, b, operator) {
  if (operator === "+") {
    return plus(a, b);
  }
  if (operator === "-") {
    return minus(a, b);
  }
  if (operator === "*") {
    return multy(a, b);
  }
  if (operator === "/") {
    return divide(a, b);
  }
}

function calculate() {
  const InputNum1 = document.getElementById("a");
  const InputOperator = document.getElementById("operator");
  const InputNum2 = document.getElementById("b");
  //  --------
  const num1 = InputNum1.value;
  const operator = InputOperator.value;
  const num2 = InputNum2.value;

  const OutputResult = document.getElementById("result");
  const result = operation(+num1, +num2, operator);
  OutputResult.value = result;
}
