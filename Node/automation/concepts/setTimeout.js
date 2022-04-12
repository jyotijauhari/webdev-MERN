// {
// function yolo(){
//     var a = 10;
//     function cb(err, res, body){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("hello there, heyyaaaa");
//         }
//     }

//     // function to be executed(callback fun) , time(ms) after which cb to be executed
//     // 1 second =1000 milli second
//     //its a async function
//     //goes to web api stack for execution
//     setTimeout(cb, 5000);
//     console.log(a);
        
// }


// yolo();
// let b = 100;
// console.log(b);
// }


const request = require("request");
let url ="https://www.worldometers.info/coronavirus/";
function yolo() {
    var a = 10;
    function cb(err, res,body) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("hello how are you ?");
            console.log("statusCode is ",res.statusCode);
        }
    }
    request(url,cb);
    console.log(a);

}

yolo();
let b = 100;
console.log(b);