const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (date && !date.getMonth() && date.getMonth() !== 0) {
    throw Error;
  }

  try {
    date.getUTCDate();
  } catch (error) {
    throw Error;
  }

  let season;
  let month = date.getMonth();
  if (month < 2 || month > 10) {
    season = 'winter';
  } else if (month < 5) {
    season = 'spring';
  } else if (month < 8) {
    season = 'summer';
  } else {
    season = 'autumn';
  }

  return season;
};
