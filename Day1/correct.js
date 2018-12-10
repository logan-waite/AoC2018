function day1part2(data) {
  const nums = data.split("\n").map(Number);
  const frequencies = [0];
  var sum = 0;
  while (1) {
      for (let i = 0; i < nums.length; i++) {
          const num = nums[i];
          sum += num;
          if (frequencies.includes(sum)) {
              return sum;
          }
          frequencies.push(sum);
      }
  }
}

function main() {
  var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'input.txt');

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
      console.log(day1part2(data))
    } else {
        console.log(err);
    }
  });
}

main()