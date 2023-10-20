const reverseString = function(text) {
  
  // return text.split("").reverse().join("");

  let reversedText = "";

  for (let i = text.length -1; i >= 0; i--) {
    reversedText += text[i];
  }

  return reversedText;

};

// Do not edit below this line
module.exports = reverseString;
