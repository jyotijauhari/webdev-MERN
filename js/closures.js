//Closure : function along with its lexical scope forms a closure

function outer(){
    var a = 10;
    // let a = 10; 
    function inner(){
        console.log(a);
    }
    return inner;
}

var z = outer();
console.log(z + " ");

z(); //function apna lexical scope(parent ki local memory) saath me lekar ata h, to var a = 10 ya let a = 10 saath me inner function ke saath ata h; 

// so output will be 10;
// z() can access var a ;