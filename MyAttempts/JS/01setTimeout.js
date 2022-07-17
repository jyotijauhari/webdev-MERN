function yolo(){
    var a = 10;
    let d = 80;
    console.log("in yolo  fun");
    function cb(){
        console.log("hello ereht" + a + " " + d + " " + b + " " + c);
    }
    setTimeout(cb, 2000);
}

yolo();
var b = 102;
let c = 50;
console.log(b + "" + c);