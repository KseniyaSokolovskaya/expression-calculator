function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
  };

  let exprNew = expr.split('').filter(item => item !== ' ');
  console.log('ssss', exprNew[0], exprNew[2])
  return (operators[exprNew[1]](+exprNew[0], +exprNew[2]));

};

module.exports = {
  expressionCalculator
}
