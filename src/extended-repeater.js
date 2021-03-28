const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let sep = '';
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (options.addition + '' && options.addition !== undefined)
    sep =
      (options.addition + '' + options.additionSeparator).repeat(
        options.additionRepeatTimes - 1
      ) + options.addition;
  return (
    (str + sep + options.separator).repeat(options.repeatTimes - 1) + str + sep
  );
};
