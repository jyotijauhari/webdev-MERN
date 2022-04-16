// Q. read two files f1 and f2

//callback hell

// fs.readFile("f1.txt", function cb1(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res + "");
//     fs.readFile("f2.txt", function cb2(err, res) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(res + "");
//         fs.readFile("f3.txt", function cb3(err, res) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(res + "");
//             console.log("read all files");
//           }
//         })
//       }
//     });
//   }
// });


// 1st way to overcome callback hell is to separate the callabck functions 
// const { log } = require("console");
// const fs  = require("fs");

// fs.readFile("f1.txt", cb1);

// function cb1(err, res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res+ " ");
//         fs.readFile("f2.txt", cb2);
//     }
// }
// function cb2(err, res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res+ " ");
//         console.log("data printed");
//     }
// }


//2nd way is to use promises
const fs = require("fs");

let f1readPromise = fs.promises.readFile("f1.txt");

function readf2file(data) {
  console.log(data + "");
  let f2readPromise = fs.promises.readFile("f2.txt");
  return f2readPromise;
}

function readf3File(data) {
  console.log(data + "");
  let f3readPromise = fs.promises.readFile("f3.txt");
  return f3readPromise;
}

function alldone(data) {
  console.log(data + "");
  console.log("read all files serially ");
}

f1readPromise
  .then(readf2file)
  .then(readf3File)
  .then(alldone)
    .catch(function (err) {
        console.log(err)
    });