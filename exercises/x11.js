//11
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
    var reading = fs.createReadStream(process.argv[3])
    reading.on('data', function (chunk) {
        res.end(chunk)
    })
})
server.listen(process.argv[2])