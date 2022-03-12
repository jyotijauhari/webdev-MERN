const fs = require("fs");

// taking input in node while running file 
//eg: node wcat.js hello beautiful people welcome to node js class
let inputArr = process.argv.slice(2);

let filesArr = [];

let optionsArr = [];

// pushing file path in filesArr 
for(let i=0; i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == '-'){
        optionsArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
    
}
// console.log("files:"+filesArr);
// console.log("options:"+optionsArr);
// console.log("file to be read are "+ filesArr);

// check if all files are present 
for(let i=0; i<filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log(" file doesn't exists");
        // return;
        process.exit();
    }
}

// reading content of file and appending 
let content = " ";
for(let i=0; i<filesArr.length;i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\r\n"; //in mac -> \n
}

console.log(content);

//in windows \r\n is there (maybe be because of enter 'r', just remember \r\n is there instead of \n for new line)
let contentArr = content.split("\r\n"); //in mac -> \n
// console.table(contentArr);

//check if -s is present or not
let tempArr = [];
let isSPresent = optionsArr.includes("-s");
if (isSPresent) {
    for (let i = 1; i < contentArr.length; i++){
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        }
        else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    // arr with multiple '' replaced by null 
    // console.table(contentArr);

    //push everything in tempArr except null
    for (let i = 0; i < contentArr.length; i++){
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    // console.log("data after removing extra line (-s option)" + tempArr);
    console.log(tempArr);
}
contentArr = tempArr;



//getting idx of -n and -b
let indexofN = optionsArr.indexOf("-n");
let indexofB = optionsArr.indexOf("-b");
//of -n or -b is not found, -1 is returned

//deciding final option
let finalOption = "";
if(indexofN != -1 && indexofB != -1){
    if(indexofN < indexofB){
        finalOption = "-n";
    }
    else{
        finalOption = "-b";
    }
}
else{
    if(indexofN != -1){
        finalOption = "-n";
    }
    else if(indexofB != -1){
        finalOption = "-b";
    }
}


//evaluating -b or -n depending upon final option
if(finalOption == "-n"){
    modifyContentByN();
}
else if(finalOption == "-b"){
    modifyContentByB();
}

function modifyContentByN(){
    let index = 1;
    for(let i=0; i<contentArr.length;i++){
        contentArr[i] = index + ")"+ contentArr[i];
        index += 1;
    }
}

function modifyContentByB(){
    let index = 1;
    for(let i=0; i<contentArr.length;i++){
        if (contentArr[i] == "" ) {
            contentArr[i] = contentArr[i];
        }
        else{
            contentArr[i] = index + ")" + contentArr[i];
            index += 1;
        }
    }
}

//printing final output
 console.log(contentArr);
