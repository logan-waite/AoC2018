var aoc = require('../run.js')

function getSleepingTimes(entries) {
  let timeSpentAsleep = {}
  let currentGuard = 0;
  let timeStart = 0;
  for (let e in entries) {
    let entry = entries[e]
    if (entry.indexOf("Guard") > -1) {
      currentGuard = /#(\d+)/.exec(entry)[1];
    } else {
      if (timeSpentAsleep[currentGuard] === undefined) {
        timeSpentAsleep[currentGuard] = [];
      }
      if (entry.indexOf("falls asleep") > -1) {
        timeStart = parseInt(/:(\d+)/.exec(entry)[1])
      }
      if (entry.indexOf("wakes up") > -1) {
        let timeEnd = parseInt(/:(\d+)/.exec(entry)[1])
        let minuteArray = []
        for(let i = 0; i < timeEnd - timeStart; i++) {
          minuteArray.push(timeStart + i)
        }
        timeSpentAsleep[currentGuard].push(minuteArray)
      }
    }
  }

  return timeSpentAsleep
}

function calculateMinutesAsleep(times) {
  let minutesAsleep = {}
  for (let g in times) {
    let guard = times[g]
    for (let m in guard) {
      if (minutesAsleep[g] === undefined) minutesAsleep[g] = 0
      minutesAsleep[g] += guard[m].length
    }
  }
  return minutesAsleep
}

function getHighest(object) {
  let highest = '';
  for (let a in object) {
    if (highest === '') highest = a
    if (object[a] > object[highest]) highest = a
  }
  return highest;
}

function getMinuteCounts(guard) {
  let minuteCount = {}
  for (let d in guard) {
    let day = guard[d]
    for (let m in day) {
      let minute = day[m]
      if (minuteCount[minute] === undefined) {
        minuteCount[minute] = 1
      } else {
        minuteCount[minute] += 1
      }
    }
  }
  return minuteCount
}

function getBestMinute(guard) {
  return getHighest(getMinuteCounts());
}

function getPropertyByValue(object, value) {
  // console.log(object);
  let keys = Object.keys(object)
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] == value) return keys[i]
  }
}

function part1(data) {
  let entries = data.split('\n');
  entries.sort();

  let times = getSleepingTimes(entries);
  let minutesAsleep = calculateMinutesAsleep(times)
  let sleepiest = getHighest(minutesAsleep)
  let bestMinute = getBestMinute(times[sleepiest])

  return parseInt(sleepiest) * parseInt(bestMinute);
}

function part2(data) {
  let entries = data.split('\n');
  entries.sort();

  let times = getSleepingTimes(entries);
  let bestMinutes = {}
  let sleepiest = 0;
  for (let g in times) {
    bestMinutes[g] = getMinuteCounts(times[g])
  }
  let best = [0,0,0]
  for (let g in bestMinutes) {
    let minute = getHighest(bestMinutes[g])
    if (bestMinutes[g][minute] > best[1]) {
      best[0] = parseInt(g)
      best[1] = parseInt(minute);
      best[2] = bestMinutes[g][minute]
    }
  }

  return best[0] * best[1]
}

aoc.run(4, part1, part2);