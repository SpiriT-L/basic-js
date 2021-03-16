const CustomError = require('../extensions/custom-error');

module.exports = function countCats(backyard) {
  let cat = 0;
  for (let i = 0; i < backyard.length; i++) {
    let elem = backyard[i];
    for (let j = 0; j < elem.length; j++) {
      if (elem[j] === '^^') {
        cat++;
      }
    }
  }
  return cat;
};
