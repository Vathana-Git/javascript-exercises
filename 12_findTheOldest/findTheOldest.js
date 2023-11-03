const findTheOldest = function(people) {

  // const sorted = people.slice().sort((a, b) => {
  //   let aAge = getAge(a.yearOfBirth, a.yearOfDeath);
  //   let bAge = getAge(b.yearOfBirth, b.yearOfDeath);
  //   return bAge - aAge;
  // });

  // return sorted[0];

  return people.reduce((oldest, item) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(item.yearOfBirth, item.yearOfDeath);
    return currentAge > oldestAge ? item : oldest;
  });

};

function getAge(birth, death) {
  return !death ? new Date().getFullYear() - birth : death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
