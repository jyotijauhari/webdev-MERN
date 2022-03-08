const fs = require("fs");

let inputArr = process.argv.slice(2);

let filesArr = [];

// pushing file path in filesArr 
for(let i=0; i<inputArr.length; i++){
    filesArr.push(inputArr[i]);
}

// console.log("file to be read are "+ filesArr);

// check if all files are present 
for(let i=0; i<inputArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    
    if(!doesExist){
        console.log(" file doesn't exists");
        return;
    }
}

// reading content of file and appending 
let content = " ";
for(let i=0; i<filesArr.length;i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\n";
}

console.log(content);


