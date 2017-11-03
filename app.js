// builtin fs library
var fs = require("fs");

// Reads file synchronously
var greet = fs.readFileSync(`${__dirname}/greet.txt`, "utf8");

// Reads file asyncrhonously
var greetAsync = fs.readFile(`${__dirname}/greet.txt`, (err, data) => {
  if (err) throw err;
  //   console.log(`Asynchronous: ${data}`);
});

// console.log(`Synchronous: ${greet}`);

// ================

/*
    Read contents of loremIpsum.txt via a readable stream.

    loremIpsum >>>> Readable Stream >>>> NodeJS

    Buffer can hold up to 32 kb at one time.
*/

var readable = fs.createReadStream(`${__dirname}/loremIpsum.txt`, {
  encoding: "utf-8",
  highWaterMark: 16 * 1024
});

var writable = fs.createWriteStream(`${__dirname}/greet.txt`);

/*
    .on() and .emit() inherited from Events object down prototype chain
    "data" event emitted when data is received
*/

/*
  This code is equivalent to:
  readable.on('data', chunk => writable.write(chunk))
*/
readable.pipe(writable);
