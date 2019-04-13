const http = require("http");
const fs = require("fs");
const path = require("path");

module.exports = function() {
    const server = http.createServer(function(req, res) {
        // fs.readFile(path.join(__dirname, "sample.txt"), function(err, data) {
        //     if (err) throw err;
        //     res.end(data);
        // });

        const stream = fs.createReadStream(path.join(__dirname, "sample.txt"));
        stream.pipe(res);
    });

    server.listen(process.env.PORT || 5000, function() {
        console.log(`Now listenting to port: ${process.env.PORT || 5000}`);
    });
};
