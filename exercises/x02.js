//2
var sum = 0; 

for (var i=2; i < process.argv.length; i++) {
    sum = sum + (process.argv[i] * 1);
}

console.log(sum); 