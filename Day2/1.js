var aoc = require("../run.js");

function part1(data) {
  const tags = data.split("\n")
  let counts = { two: 0, three: 0}
  
  for (let t in tags) {
    let letters = tags[t].split('')
    let tested = {}

    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];
      if (tested[letter] !== undefined) {
        tested[letter] += 1
      } else {
        tested[letter] = 1
      }
    }

    if (Object.values(tested).indexOf(2) > -1)
      counts.two += 1
    if (Object.values(tested).indexOf(3) > -1)
      counts.three += 1
  }

  return counts.two * counts.three
}

function part2 (data) {
  const tags = data.split("\n")

  for (let i = 0; i < tags.length; i++) {
    let tag1 = tags[i]
    let tag1Letters = tag1.split('')

    for (let j = 0; j < tags.length; j++) {
      let tag2 = tags[j]

      if (tag1 === tag2) continue

      let tag2Letters = tag2.split('')
      let differences = 0;
      let sameCharacters = []

      for (let k = 0; k < tag2Letters.length; k++) {
        if (tag1Letters[k] !== tag2Letters[k]) 
          differences += 1
        else
          sameCharacters.push(tag1Letters[k])
      }

      if (differences === 1)
        return sameCharacters.join('')
    }
  } 
}

aoc.run(2, part1, part2);
