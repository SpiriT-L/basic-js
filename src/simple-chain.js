const CustomError = require('../extensions/custom-error');

const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    let arr = [...this.links];
    let obj = { ...this };
    obj.links = arr;
    obj.links.push('( ' + value + ' )');
    return obj;
  },
  removeLink(position) {
    let arr = [...this.links];
    if (position >= 1 && position <= arr.length) {
      arr.splice(position - 1, 1);
      let obj = { ...this };
      obj.links = arr;
      return obj;
    } else {
      throw Error;
    }
  },
  reverseChain() {
    let arr = [...this.links].reverse();
    let obj = { ...this };
    obj.links = arr;
    return obj;
  },
  finishChain() {
    return this.links.join('~~');
  },
};

module.exports = chainMaker;
