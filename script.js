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

function calculate(a, b, operator) {
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
