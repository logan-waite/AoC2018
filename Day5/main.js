var aoc = require('../run.js')

function triggerUnits(polymer) {
  let p = polymer.split('')
  for (var i = 0; i < p.length; i++) {
    if (i + 1 == p.length) {
      break
    }
    if (sameType(p[i], p[i+1]) && oppositePolarity(p[i], p[i+1])) {
      // console.log(p[i] + " =?= " + p[i+1])
      p.splice(i+1, 1);
      p.splice(i,1);
      i = -1
    }
  }
  
  return p.length
}

function sameType(a,b) {
  return a.toLowerCase() === b.toLowerCase();
}

function oppositePolarity(a,b) {
  return a !== b
}

function part1(data) {
  return triggerUnits(data)
}

function part2(data) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  let shortest = null;
  for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i])
    let regexString = "["+alphabet[i] + alphabet[i].toUpperCase()+"]"
    let regex = new RegExp(regexString, "g")
    let newPolymer = data.replace(regex,'')
    let newPolymerLength = triggerUnits(newPolymer)
    if (shortest === null) shortest = newPolymerLength
    if (newPolymerLength < shortest) {
      shortest = newPolymerLength
    }
  }
  return shortest
}

aoc.run(5, part1, part2)