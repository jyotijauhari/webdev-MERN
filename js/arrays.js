let alphabets = ['b','c','d', 1];
console.log(alphabets);

// accessing Elements 
console.log(alphabets[0]);

// replacing elements
alphabets[3] = 'e';
console.log(alphabets);

// adding elements in arr 
alphabets[4] = 'f';
console.log(alphabets);

// methods in array 
alphabets.pop();
console.log(alphabets);

alphabets.push('g');

alphabets.unshift('a');
console.log(alphabets);

alphabets.shift();
console.log(alphabets);

console.log(alphabets.length);

// 2D Arrays
let arr2d = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2d);

console.table(arr2d);

console.log(arr2d[1][2]);