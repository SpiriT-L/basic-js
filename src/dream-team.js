const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let anagram = [];
  members.forEach((i) => {
    if (typeof i === 'string') {
      anagram.push(i.trim()[0].toUpperCase());
    }
  });
  return anagram.sort().join('');
};
