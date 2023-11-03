const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => (total + item), 0)
};

const multiply = function(arr) {
  return arr.reduce((total, item) => (total * item), 1)
};

const power = function(n, pow) {
  // return pow <= 1 ? n : n * power(n, pow - 1);
  return Math.pow(n, pow);
};

const factorial = function(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
