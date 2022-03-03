console.log(x); // undefined
console.log(b); // ReferenceError: Cannot access 'b' before initialization
//error - > because variable b is in temporal deadzone, same for const
//we cant print/access let, const before initialisation (strictly)
var x = 10;
let b = 100;

// -----------------------------------


// console.log(x); // undefined
// var x = 10;
// let b = 100;
// console.log(b); // 100

// --------------------------------------

//let, const, var all three are hoisted
// hoisting -> in js memory is allocated to variables and funct even eithout executing a single line of code

// let, const get attached to Script object
// var get attached to Global object 

//temporal deadzone -> (Time betwn a variable is allocated memory and it is initialised) (applicable for let,const)