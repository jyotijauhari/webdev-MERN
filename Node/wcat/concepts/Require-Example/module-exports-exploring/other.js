function greet(){
    console.log("hey buddy welcome to js");
}

function add(a,b){
    console.log("a+b="+ (a+b));
}

var a = 10;
let b = 20;

module.exports = {
    var_a:a,
    let_b:b,
    add:add(),
    greet:greet()
}
