// Readable streams produce data that can be fed into a writable, transform, or duplex stream by calling .pipe():

module.exports = function() {
    const Readable = require("stream").Readable;

    const rs = new Readable();
    rs.push("readable stream text ");
    rs.push("boop\n");
    rs.push(null);
    rs.pipe(process.stdout);

    //     var Readable = require('stream').Readable;
    // var rs = new Readable;
    // rs.push('beep ');
    // rs.push('boop\n');
    // rs.push(null);
    // rs.pipe(process.stdout);
};
