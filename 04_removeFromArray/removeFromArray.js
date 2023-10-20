const removeFromArray = function(mainArray, ...args) {
  // for (let i = 0; i <= args.length; i++) {
  //   let index = mainArray.indexOf(args[i]);
  //   if (index > -1) {
  //     mainArray.splice(index, 1);
  //   }
  // }
  // return mainArray;

  let newArray = [];

  mainArray.forEach((item) => {

    if(!args.includes(item)) {
      newArray.push(item);
    }

  });

  return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
