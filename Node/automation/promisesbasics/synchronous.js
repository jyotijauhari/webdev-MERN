const fs = require('fs');

console.log("before");
 let data = fs.readFileSync("f1.txt");
 console.log(data+"");

console.log("after");