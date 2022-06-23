var arr = [];
var obj = {};

function abc(){
    console.log("yolo");
}

//same op of these 2
console.log(arr.__proto__ );
console.log(Array.prototype);

//same op of these 3
console.log(arr.__proto__.__proto__);
console.log(obj.__proto__);
console.log(Object.prototype);

//{}
console.log(abc.__proto__);

//same op
console.log(obj.__proto__);
console.log(abc.__proto__.__proto__);

console.log(obj.__proto__.__proto__);//null

