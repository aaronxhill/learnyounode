//9
var http = require("http");
var bl = require('bl');

var resultsArray = [];

var cb = function (arr) {
    if (arr[0] != undefined && arr[1] != undefined && arr[2] != undefined) {
        for (var j = 0; j < 3; j++) {
            console.log(arr[j]);
        }
    }
}

var iC = 0; 
// for (var i = 0; i < 3; i++) {
var getThree = function () {
    http.get(process.argv[2 + iC], function(res) {
        res.pipe(bl(function(err, data) {
            if (err) throw err;
            resultsArray[iC] = data.toString();
            // cb(resultsArray);
            // console.log(resultsArray)
            if (iC < 2) {
                iC = iC + 1; 
                getThree()
            }
            else if (iC === 2) {
                for (var i=0; i < 3; i++)
                console.log(resultsArray[i])
            }
        }));
    });
}

getThree()