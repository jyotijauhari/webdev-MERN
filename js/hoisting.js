console.log(x);
greet();
var x = 10;
function greet(){
    console.log("Hello");
}

// we can access the variables and functions even before we have declared its value 
//(mdn) defn - JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

 //works differently with function expression

 console.log(hello);  //undefined
//  hello(); //error hello is not function because var hello contains uundefined (js execution context)
 var hello = function(){
     console.log("heyaa");
 }
 hello(); // heyaa