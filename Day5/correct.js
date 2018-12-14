var aoc = require('../run.js')

function polymerize(str) {
  let i = 0;
  while (str[i + 1] != undefined) {
      let a = str.charCodeAt(i);
      let b = str.charCodeAt(i + 1);
      if (a == b + 32 || a == b - 32) {
          str = str.substring(0, i) + str.substring(i + 2, str.length);
          i--;
      } else {
          i++;
      }
  }
  return str.length;
}

aoc.run(5, polymerize)