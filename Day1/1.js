var tools = require('../run.js')

function computeFrequency(data) {
  return data.split("\n").map(Number).reduce((acc, curr) => acc + curr);
}

tools.run(1, computeFrequency)