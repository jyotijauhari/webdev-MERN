var str = "hello";
console.log(str);

console.log(str[2]);

console.log(str.length);

// String Methods
// 1. Extraction method 
// string slicing -> slice(start, end) // end is exclusive
let slicedstr = str.slice(0,3);
console.log(slicedstr); //hel

let slicedstr1 = str.slice(2,);// index 2 to end
console.log(slicedstr1);  // llo

let str2  = "genius";
console.log(str2.slice(0,-1));//last 1 char excluded
console.log(str2.slice(0,-2));//last 2 char excluded

// Substring 
str3 = "GennieGem";
strop = str3.substr(2,5); //(start, length) (from index 2 choose next 5 element)
console.log(strop); //nnieG

//string is immutable
// var str4 = "neon";
// str4[1] = "k"; 
// console.log(str4);

var str4 = "HELLO";
console.log(str4.toLowerCase()); //hello

str5 = "okayfine";
console.log(str5.toUpperCase());//OKAYFINE

//Concatenation
let s1 = "Hey ";
let s2 = "Bud!";
let s3 = s1 + s2;
console.log(s3);//Hey Bud!

console.log(s1.concat(s2)); //Hey Bud!
console.log(s1.concat(s2, " How you doin?")); //Hey Bud! How you doin?

//Trim method
let s4 = "     I dont think it will    remove spaces      "; //I dont think it will    remove spaces
console.log(s4.trim());


