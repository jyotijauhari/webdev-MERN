// Normal Function
function add(a,b){
    return a+b;
}

let returned2 = add(2,3);
console.log(returned2);


// Function can be returned 
function sayHi(){
    console.log("heyaa");
}

let returned = sayHi;
console.log(returned);
console.log("function printing:\n" + returned);
// console.log(sayHi()) -> printing undefined, so write sayHi() only 
sayHi();


// this behv :" ->
function calculator(str, a, b){
    if (str == "add"){
        return function add(){
            console.log(a+b);
        }
    }
}

let op = calculator('add', 1, 2)
console.log("returned function is:\n"+op);
op();



/*
Note:
if console.log me  text ni likha ->  
let returned = sayHi;
console.log(returned); 
ouput is: 
[Function: sayHi]

and if text likha ->
console.log("function  printing:\n" + returned);
output is:
function printing:
function sayHi(){
    console.log("heyaa");
}

why this differnce in output?
Type cohesion maybe like java, where when integer added with string it become string.
*/


//-----------------------------------------------------------------------------//
//Function Expression
let sayHi = function(){
    console.log("hii");
}

sayHi();

let sayBye = function(){
    console.log("bye");
}

sayBye();
console.log("saybye of fe: "+sayBye)

//-----------------------------------------------------------------------------//
// IIFE -> Immediately Invoked Function Expression

let sayBusy = (function(){
    console.log("busy..");
})();

let sayAdd = (function(a,b){
    console.log("adding.."+a+" and "+b);
})(30,20);

// console.log("printing sayadd of iife: "+sayAdd); -> undefined

// 3) IIFE-> Imediately invoke function expression

function add(a, b) {
    return a + b
}
let a = add(2, 3);
// a = 5;
console.log(a);

let additionIIFE = (function (a, b) {
  console.log(a + b);
})(20, 30);

// console.log(additionIIFE);
// console.log(additionIIFE(20, 30));