const fs = require("fs"); //fs module
const path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){
    //step 1: check if path is entered by user or not
    if(srcPath == undefined){
        // console.log(srcPath);
        srcPath = process.cwd(); //current working directory
        console.log("src path" + srcPath);
    }

    //step 2: create organized_file directory in srcpath
    let organizedFiles = path.join(srcPath, "organized_files");
    console.log("organized file folder path: " + organizedFiles);
    if(!fs.existsSync(organizedFiles)){
        fs.mkdirSync(organizedFiles);
    }
    else {
        console.log("folder already exists");
    }

    //step 3: scan entire path (read name of all files present in tht folder)
    let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);

    //step 4: traverse all files and classify them on basis of their extension
    
    for (let i = 0; i < allFiles.length; i++){
        // let ext = allFiles[i].;
        //extname returns the extension of the file
        let fullPathOfFile = path.join(srcPath, allFiles[i]);
        // console.log(fullPathOfFile);
        //1. check if it is a file or folder
        //lstatsync gives the information regarding the link provided ,
        let isFile = fs.lstatSync(fullPathOfFile).isFile(); //true->if isFile   
        // console.log(allFiles[i]+" is "+ isFile); -> f1.txt is true, organized_files is false
        if (isFile) {
          //1.1 get ext name (zip of .zip)
          let ext = path.extname(allFiles[i]).split(".")[1]; // extname gives .zip // this alone also works - allFiles[i].split(".")[1];
          // console.log(ext);
          //1.2 get folder name from extension
          let folderName = getFolderName(ext); //archives 
          //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
                      //copy      kya copy kro    paste 
          copyFileToDest(srcPath, fullPathOfFile, folderName);
        }
      }
}

function getFolderName(ext) {
  
    //magic 
    for(let key in types){
        for(let i=0; i<types[key].length; i++){
            if(types[key][i] == ext){
                return key;
            }
        }
    }

    //edge case -> no types matched
    return "miscellaneous";
  }
  
  function copyFileToDest(srcPath, fullPathOfFile, folderName) {
    // Goal: fs.copyFileSync(src, dest);

    let src = fullPathOfFile;

    //1. make destination folderName path
    let destFolderPath = path.join(srcPath, "organized_files", folderName); //....../downloads/organized_files/archives
    // console.log(des);

    //2 check folder if exists, if it does not, then make folder
    if (!fs.existsSync(destFolderPath)) {
      fs.mkdirSync(destFolderPath);
    }

    //3. copy file from src folder to dest folder
    // Returns the last portion of a path
    let base = path.basename(fullPathOfFile); //abc.zip
    let dest = path.join(destFolderPath, base); //Users/.../downloads/organized_files/archives/abc.zip

    fs.copyFileSync(src, dest);
    //magic
  }

// let srcPath = "D:\\Programming\\FJP-webdev\\Node\\fileOrganizer\\downloads"; // double slash windows problm :(
// organize(srcPath);

module.exports = {
    organize:organize
  }