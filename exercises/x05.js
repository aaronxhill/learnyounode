//5
var fs = require("fs");
fs.readdir(process.argv[2], function (err, list) {
    if (err) throw err; 
    for (var i=0; i < list.length; i++) {
        // console.log(list[i].substring(list[i].lastIndexOf('.'), list[i].length));
        if (list[i].lastIndexOf('.') != -1) {
        if (list[i].substring(list[i].lastIndexOf('.') + 1, list[i].length) === process.argv[3]) {
            console.log(list[i]);
        }}
    }

    // console.log(list)
})