//3
var fs = require('fs');

var fileContent = fs.readFileSync(process.argv[2]).toString();

var num = fileContent.split('\n');
console.log(num.length - 1);