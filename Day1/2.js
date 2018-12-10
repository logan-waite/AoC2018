function main() {
  var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'input.txt');

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
      console.log(computeFrequency(data))
    } else {
        console.log(err);
    }
  });
}

// Solution from reddit user valtism

function computeFrequency(data) {
  var nums = data.split("\n").map(Number)
  var frequencies = new Set();
  var sum = 0;
  
  while (true) {
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      sum += num;
      if (frequencies.has(sum)) {
          return sum;
      }
      frequencies.add(sum);
    }
  }
}


main()