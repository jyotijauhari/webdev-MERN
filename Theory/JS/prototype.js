var arr = [];
var obj = {};

function abc(){
    console.log("yolo");
}

//same op of these 2
console.log(arr.__proto__ );
console.log(Array.prototype);

//same op of these  3
console.log(arr.__proto__.__proto__);
console.log(obj.__proto__);
console.log(Object.prototype);

//{}
console.log(abc.__proto__);

//same op
console.log(obj.__proto__);
console.log(abc.__proto__.__proto__);

console.log(obj.__proto__.__proto__);//null

// prototypal inheritance
// run on browser console
 
let user = {
    name: "Jack",
    sayHi: function () {
      console.log(this.name);
    },
  };
  
  let admin = {
    role: "admin",
    age: 30,
  };
  
  admin.name;
  
  Array.prototype.calculate = 34;
  
  let arr = [];
  arr.__proto__;
  
  admin.__proto__ = user;
  admin.name;
  admin.sayHi();
  
  admin.name = "Jim";
  admin.name;
  admin.sayHi();
  
  user.name; 