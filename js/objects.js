// Objects consists of properties and methods
// JS objects are always key value pair

//creating empty object
let obj = {};
console.log(obj);

//creating object with properties
let person = {
    // key : value
    name : "Jack",
    age: 20,
    gender: "Male",
    height: "170cm"
};

console.log(person);

//accessing properties of object -> two ways
console.log(person.name);
console.log(person["name"]);

//everything is object in js -> like string, number . they have property and method
var str = "heyaaa";
console.log(str.length); //dot notation
console.log(str["length"]); //square bracket notation

//nesting of objects, functions in object
let captainAmerica = {
    firstName: "Steve",
    friends: ["Bucky", "Tony Stark", "Brue Banner"],
    isAvenger: true,
    address:{
        state:"Manhattan",
        city: "New York"
    },
    sayHi: function(){
        console.log(`heyaa my name is ${this.firstName}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.firstName);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log(captainAmerica.address.state);
captainAmerica.sayHi();

//accessing key value of objects using for loop
for(let ele in captainAmerica){
    //key
    console.log(ele);

    //value
    console.log(captainAmerica[ele]);
}

// Array is also object 
let arr = ["a", "b", 1, true];

let arrr = {
    0: "a",
    1: "b",
    2: 1,
    3:true
}
