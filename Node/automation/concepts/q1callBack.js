// raed two files f1 and f2
//callback hell

const { log } = require("console");
const fs  = require("fs");

fs.readFile("f1.txt", cb1);

function cb1(err, res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+ " ");
        fs.readFile("f2.txt", cb2);
    }
}
function cb2(err, res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+ " ");
        console.log("data printed");
    }
}