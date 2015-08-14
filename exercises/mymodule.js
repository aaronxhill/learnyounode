module.exports = function(dirName, ext, cb) {

    var fs = require("fs");
    var listToExp = []; 
    fs.readdir(dirName, function(err, list) {
        if (err) return cb(err);
        for (var i = 0; i < list.length; i++) {
            if (list[i].lastIndexOf('.') != -1) {
                if (list[i].substring(list[i].lastIndexOf('.') + 1, list[i].length) === ext) {
                    listToExp.push(list[i]);
                }
            }
        }
        cb(err, listToExp);
    });
};
