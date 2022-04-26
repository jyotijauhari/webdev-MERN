// // read three files f1, f2, f3 parallely
// const fs  = require("fs");

// fs.readFile("f1.txt", cb);
// fs.readFile("f2.txt", cb);
// fs.readFile("f3.txt", cb);


// function cb(err, res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res+ " ");
//     }
// }

// // read three files f1, f2, f3 parallely using promises
const fs = require("fs");

let f1p = fs.promises.readFile("f1.txt");
let f2p = fs.promises.readFile("f2.txt");
let f3p = fs.promises.readFile("f3.txt");

f1p.then(cb);
f2p.then(cb);
f3p.then(cb);

function cb(data){
    console.log(data + "");
}

// const { log } = require("console");
// const fs  = require("fs");

// fs.readFile("f1.txt", 
//     function(err, res){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(res+ " ");
//         }
//     }
// );

// fs.readFile("f2.txt", 
//     function(err, res){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(res+ " ");
//         }
//     }
// );


// fs.readFile("f3.txt", 
//     function(err, res){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(res+ " ");
//         }
//     }
// );

