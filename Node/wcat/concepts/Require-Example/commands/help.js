function help() {
    console.log(`
        These are some myCLI commands used in various situations:
            1. node main.js tree <path>
            2. node main.js organize <path>
            3. node main.js help
    `);
}

function abc() {
    console.log("in help.js");
}

module.exports = {
    //key value
    // key ki help se access krna , value point to that function/variable present in this file 
    //abc function is exported as haathi, so if we want to call abc from some other file , we would use haathi
    // help: help,
    haathi:help,
    ghoda:abc
} 