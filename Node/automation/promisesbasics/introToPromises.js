const fs = require('fs');

console.log("before");

// promises working
let promiseThatFileWillBeRead = fs.promises.readFile("f1.txt");

console.log(promiseThatFileWillBeRead);

promiseThatFileWillBeRead.then(printData);
promiseThatFileWillBeRead.catch(printError);
console.log("after");


function printData(data) {
    console.log("promise is fulfilled");
    console.log(data+"");
}

function printError(err) {
  console.log(err);
}
