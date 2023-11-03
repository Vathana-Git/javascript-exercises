const fibonacci = function(n) {

  if(n <= 0) return "OOPS";

  let preOne = preTwo = 1;
  let current;

  if (n <= 2) return 1;

  for (let i = 3; i <= n; i++) {
    
    current = preOne + preTwo;
    preTwo = preOne;
    preOne = current;

  }

  return current;

};

// Do not edit below this line
module.exports = fibonacci;
