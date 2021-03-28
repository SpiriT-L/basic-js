const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  table = [[]];
  reverse = false;
  constructor(encrypt) {
    for (let j = 0; j < 26; j++) {
      for (
        let i = String.fromCharCode('A'.charCodeAt(0) + j);
        this.table[j].length < 26;
        i = String.fromCharCode(i.charCodeAt(0) + 1)
      ) {
        this.table[j].push(i);
        if (i == 'Z') i = '@';
      }
      this.table.push([]);
    }
    if (encrypt == false) this.reverse = true;
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    let n = 0;
    let code = '';
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let col = message[i].charCodeAt(0) - 65;
        let row = key.charCodeAt(n % key.length) - 65;
        code += this.table[row][col];
        n++;
      } else code += message[i];
    }
    return this.reverse ? code.split('').reverse().join('') : code;
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) throw new Error();
    let result = '';
    let n = 0;
    key = key.toUpperCase();
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].match(/[A-Z]/)) {
        let row = key.charCodeAt(n % key.length) - 65;
        let col = this.table[row].indexOf(encryptedMessage[i]);
        result += this.table[0][col];
        n++;
      } else result += encryptedMessage[i];
    }
    return this.reverse ? result.split('').reverse().join('') : result;
  }
}

module.exports = VigenereCipheringMachine;
