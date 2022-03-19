//entry point of my command line
let helpFunc = require("./commands/help");

let orgFunc = require("./commands/organize");

let treeFunc = require("./commands/tree");

// const fs = require("fs");


//node main.js organize folder-path
let inputArr = process.argv.slice(2); //[organize, folder-path]

let command = inputArr[0];

let path = inputArr[1];

switch(command){
    case "tree":
        treeFunc.tree(path);
        // console.log("tree");
        break;
    
    case "organize":
        console.log("organize");
        orgFunc.organize(path);
        break;

    case "help":
        helpFunc.help();
        break;

    default:
        console.log("command not found");
}

// sir Node.js is js runtime environment, so it isnt a technology. so why we call it node js project and not js project
// because we r not running the project on client side/ browser. we are running on local system/server side.

