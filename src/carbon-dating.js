const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity == 'string' &&
    typeof Number(sampleActivity) == 'number' &&
    Number(sampleActivity) > 0 &&
    Number(sampleActivity) < 15
  ) {
    let sampleA = Number(sampleActivity);
    let t = Math.log(MODERN_ACTIVITY / sampleA) / (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(t);
  } else return false;
};
