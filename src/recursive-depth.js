const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.forEach((i) => {
      if (Array.isArray(i)) {
        depth = Math.max(this.calculateDepth(i) + 1, depth);
      }
    });
    return depth;
  }
};
