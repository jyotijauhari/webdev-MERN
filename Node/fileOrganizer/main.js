//entry point of my command line
let helpFunc = require("./commands/help")

const fs = require("fs");


//node main.js organize folder-path
let inputArr = process.argv.slice(2); //[organize, folder-path]

let command = inputArr[0];

switch(command){
    case "tree":
        // console.log("tree");
        break;
    
    case "organize":
        // console.log("organise");
        break;

    case "help":
        helpFunc.help();
        break;

    default:
        console.log("command not found");
}

// sir Node.js is js runtime environment, so it isnt a technology. so why we call it node js project and not js project
// because we r not running the project on client side/ browser. we are running on local system/server side.

