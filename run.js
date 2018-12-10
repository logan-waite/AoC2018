module.exports = {
  run: function(day, part1, part2) {
    var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, './Day' + day + '/input.txt');

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
      if (part1 === undefined && part2 === undefined) {
        console.error("We need at least one function to work");
      }
      console.log("**************")
      if (part1 !== undefined) {
        console.log("\nDay " + day + " Part 1 result:")
        console.log(part1(data))
      }
      if (part2 !== undefined) {
        console.log("\nDay " + day + " Part 2 result:")
        console.log(part2(data))
      }
      console.log("\n")
      console.log("**************")
    } else {
        console.log(err);
    }
  });
  }
}