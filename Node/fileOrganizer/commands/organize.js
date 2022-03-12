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

    //step 4: traverse all files and classify them on basic of their extension
    
    for(let i=0; i<allFiles.length; i++){
        let ext = path.extname(allFiles[i]) ; //can use split to split by "."
        console.log(ext);
    }


}

let srcPath = "D:\\Programming\\FJP-webdev\\Node\\fileOrganizer\\downloads";
organize(srcPath);
