//4
var fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err;
  var num = data.toString('utf8');
  num = num.split('\n');
  console.log(num.length - 1);
});