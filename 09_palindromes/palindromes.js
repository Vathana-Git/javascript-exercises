const palindromes = function (text) {
  // let stripped = text.replace(/[\s.,!]+/g, "").toLowerCase();
  let stripped = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return stripped === stripped.split("").reverse().join("");
};

palindromes('ZZZZ car, a man, a maracaz.')

// Do not edit below this line
module.exports = palindromes;
