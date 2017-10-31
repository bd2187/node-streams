var fs = require("fs");

// Reads file synchronously
var greet = fs.readFileSync(`${__dirname}/greet.txt`, "utf8");

console.log(greet);
