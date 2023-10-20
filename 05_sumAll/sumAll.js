const sumAll = function(start, end) {
  
  if (typeof start != "number" || typeof end != "number") {
    return "ERROR";
  } else if (start < 0 || end < 0) {
    return "ERROR";
  }

  let result = 0;

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  // [start, end] = [end, start];

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;

};

// Do not edit below this line
module.exports = sumAll;
