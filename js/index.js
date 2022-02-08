// variable declaration
var a;

// variable initialisation
a = 10;

// print output
console.log(a);

// know type of variable
console.log(typeof a);

a = "hello";
console.log(a);
console.log(typeof a);

a = true;
console.log(a);
console.log(typeof a);

a = null;
console.log(a);
console.log(typeof a);

// string declared with -> double quotes - " "  , single quotes - ' ', backtick - ` ` 
var str = "hey hope u doing well, see you tomorrow";
console.log(str)


var str = "hey hope u doing well, \nsee you tomorrow";
console.log(str)


var str = `hey hope u doing well, 
see you tomorrow"`;
console.log(str)

var num = 100;
console.log('value of num is ${num} and its half is ${num/2}');

var num = 100;
console.log("value of num is ${num} and its half is ${num/2}");

var num = 100;
// values printed only if written in backtick ``
console.log(`value of num is ${num} and its half is ${num/2}`);

// var drawback - > it allows redeclaration of variable
var b = 100;
console.log(b);
var b = 40; //allowed
console.log(b);


// let
// let l = 100;
// console.log(l);
// let l = 40; //error - SyntaxError: Identifier 'l' has already been declared
// console.log(l);

let c = 100;
console.log(c);
c = 40; // can reinitialise
console.log(c);


//loops and conditionals
for(var i=1; i<=10; i++){
    if(i%2==0){
        console.log("num is even");
    }
    else{
        console.log("num is odd");
    }
}

// const keyword
// cant reinitialise and redeclare
const m = 5;
// m = 6;  // TypeError: Assignment to constant variable.
// const m = 8 //Identifier 'm' has already been declared
