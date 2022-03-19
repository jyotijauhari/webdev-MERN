const fs = require("fs"); //fs module
const path = require("path"); //path module

function tree(srcPath){
    if(srcPath==undefined){
        console.log("please provide the path.");
    } 
    else{
        treeHelper(srcPath, "");
    }

}

function treeHelper(srcPath, spacing){
    let baseName = path.basename(srcPath);
    if(fs.lstatSync(srcPath).isFile()){
        console.log(spacing + "-->" + baseName );
        return;
    }
    else{
        console.log(spacing + "|__" + baseName );
        let allFiles = fs.readdirSync(srcPath);
        for(let i=0; i<allFiles.length; i++){
            let newsrcPath = path.join(srcPath, allFiles[i]);
            treeHelper(newsrcPath, spacing + "   ");
        }

    }
}

module.exports = {
    tree:tree
  }

// let srcPath = "D:\\Programming\\FJP-webdev\\Node\\fileOrganizer\\downloads"; // double slash windows problm 
// tree(srcPath);