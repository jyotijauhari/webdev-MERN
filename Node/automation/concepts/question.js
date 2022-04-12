//print 1 to 10 , each after 2 sec
// this will print from 1 to 10 with interval of 2sec
for(let i=0; i<=10; i++){
    setTimeout(
        function () {
            console.log(i);
        }
    ,2000*i);
}

//challenge : for loop and using var print 1-10 with interval of 2sec

// this will print from 1 to 10 with interval of 2sec
// var i = 1;
// function cb(){
//     console.log(i);
//     if(i==10){
//         return;
//     }
//     i++;
//     setTimeout(cb,2000);
// }

// setTimeout(cb,2000);




// 11 will be printed 10 times by this
// for(var i=0; i<=10; i++){
//     setTimeout(
//         function () {
//             console.log(i);
//         }
//     ,2000);
// }


