//13
var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function(req, res) {

    var date = new Date(req.url.substr(req.url.indexOf('=')+1));
    var getUrl = req.url;
        if (url.parse(getUrl).pathname == '/api/parsetime')
        // res.end(url.parse(getUrl).query.substr(4));
        {
        var toOut = {}
        // var date = new Date();
        toOut.hour = date.getHours();
        toOut.minute = date.getMinutes();
        toOut.second = date.getSeconds();
        res.end(JSON.stringify(toOut))
        }

        else if (url.parse(getUrl).pathname == '/api/unixtime')
        {
            // var date = new Date();
        var toOutU = date.getTime();
        var gone = {}
        gone.unixtime = toOutU;
        res.end(JSON.stringify(gone));
        }
    })
server.listen(process.argv[2])
