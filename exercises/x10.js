//10
function convDate () {
var date = new Date();

var dateObj = new Object; 

dateObj.year = date.getFullYear();

var month = date.getMonth() + 1;

if (month < 10) {
    dateObj.month = "0" + month; 
}
else {dateObj.month = date.getMonth()}

if (date.getDate() < 10) {
    dateObj.date = "0" + date.getDate(); 
}
else {dateObj.date = date.getDate()}

if (date.getHours() < 10) {
    dateObj.hours = "0" + date.getHours(); 
}
else {dateObj.hours = date.getHours()}

if (date.getMinutes() < 10) {
    dateObj.minutes = "0" + date.getMinutes(); 
}
else {dateObj.minutes = date.getMinutes()}

var dateToPrint = dateObj.year + '-' + dateObj.month + '-' + dateObj.date + ' ' + dateObj.hours + ':' + dateObj.minutes + '\n';

    return dateToPrint;
}

    var net = require('net')
    var server = net.createServer(function (socket) {
      // socket handling logic
      socket.write(convDate())
      socket.end()
    })
    server.listen(process.argv[2])