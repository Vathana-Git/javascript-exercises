const repeatString = function(text, num) {
  if (num < 0) {
    return "ERROR";
  }
  return text.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
