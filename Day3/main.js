var aoc = require('../run.js')

const claimRegex = /#(\d+)\s@\s(\d+),(\d+):\s(\d+)x(\d+)/

function getInfo(claim) {
  let claimInfo = claimRegex.exec(claim)

  return {
    id: parseInt(claimInfo[1]),
    left: parseInt(claimInfo[2]),
    top: parseInt(claimInfo[3]),
    width: parseInt(claimInfo[4]),
    height: parseInt(claimInfo[5])
  }
}

function createCloth() {
  let cloth = []
  for (let i = 0; i < 1000; i++) {
    cloth.push([])
    for (let j = 0; j < 1000; j++) {
      cloth[i].push(0)
    }
  }
  return cloth
}

function removeFromArray(array, value) {

  return array
}

function part1(data) {
  let claims = data.split('\n').map(getInfo)
  let overlapping = 0

  // create 1000x1000 cloth array
  let cloth = createCloth()

  // determine fabric for each claim
  for (c in claims) {
    let claim = claims[c];

    for (let i = 0; i < claim.height; i++) {
      for (let j = 0; j < claim.width; j++) {
        cloth[claim.top + i][claim.left + j] += 1
      }
    }
  }
 // count up all overlapping elements (greater than 1)
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      if (cloth[i][j] > 1) {
        overlapping += 1
      }
    }
  }

  return overlapping
}

function part2(data) {
  let cloth = createCloth()
  let claims = data.split('\n').map(getInfo)
  let validIds = new Set()

  for (c in claims) {
    let claim = claims[c];
    let overlaps = false;

    for (let i = 0; i < claim.height; i++) {
      for (let j = 0; j < claim.width; j++) {
        let pos = { x: claim.left + j, y: claim.top + i }

        if (cloth[pos.y][pos.x] !== 0) {
          if (cloth[pos.y][pos.x] !== "x") {
            validIds.delete(cloth[pos.y][pos.x])
            cloth[pos.y][pos.x] = "x"
          }
          overlaps = true;
        } else {
          cloth[pos.y][pos.x] = claim.id
          validIds.add(claim.id)
        }
      }
    }
    if (overlaps) {
      validIds.delete(claim.id)
    }
  }
  return validIds
}

aoc.run(3, part1, part2)