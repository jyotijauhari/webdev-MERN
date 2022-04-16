// // read three files f1, f2, f3 parallely
const fs  = require("fs");

fs.readFile("f1.txt", cb);
fs.readFile("f2.txt", cb);
fs.readFile("f3.txt", cb);


function cb(err, res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+ " ");
    }
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

