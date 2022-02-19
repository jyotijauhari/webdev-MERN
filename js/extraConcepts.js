function cube(num){
    var res = num*num*num;
    return res;
}

var num = 2;
var cube1 = cube(num);
var cube2 = cube(10);
var cube3 = cube(); //wont give error like other prog lang

console.log(cube1); //8
console.log(cube2); // 1000
console.log(cube3); // NaN 
