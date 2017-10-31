var fs = require("fs");

// Reads file synchronously
var greet = fs.readFileSync(`${__dirname}/greet.txt`, "utf8");

// Reads file asyncrhonously
var greetAsync = fs.readFile(`${__dirname}/greet.txt`, (err, data) => {
  if (err) throw err;
  console.log(`Asynchronous: ${data}`);
});

console.log(`Synchronous: ${greet}`);
