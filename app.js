// builtin fs library
const fs = require("fs");
const zlib = require("zlib");

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

var compressed = fs.createWriteStream(`${__dirname}/greet.txt.gz`);

/*
    .on() and .emit() inherited from Events object down prototype chain
    "data" event emitted when data is received
*/

/*
  This code is equivalent to:
  readable.on('data', chunk => writable.write(chunk))
*/
readable.pipe(writable);

/*
  gzip creates a transform stream which compresses chunks
  from another stream
 */
const gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);
