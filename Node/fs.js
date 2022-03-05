// fs -> file system module -> it helps us to make files/folder append data in them, delete data, read data 
const fs = require("fs")

console.log(fs); // op -> what is inside fs -> 
console.log(typeof fs); //object

fs.appendFileSync("f1.txt", "hello i am file 1. ");
fs.appendFileSync("f1.txt", "heyaa nice to see you here");

let data = fs.readFileSync("f1.txt"); 

//data received is an object type, data is in buffer format
console.log(data); // <Buffer 68 65 6c 85 more bytes>

console.log(typeof data); // buffer object



//printing data of file normally

//1 way
console.log(data + "") // automatic type conversion

//2nd way
let data1 = fs.readFileSync("f1.txt","utf-8");
console.log(data1)


// --------------------------------------------------

//require -> behind the scene :)

// const obj = require("../js/temp") // (now as console.log written in temp.js, the obj is printed)
// console.log(obj); // {} 

//after ** code of temp.js
const obj = require("../js/temp") 
console.log(obj); // pura object print hoga 

let ans = obj.name; 
console.log(ans); //jyoti
console.log(obj.add(5,4)); //9