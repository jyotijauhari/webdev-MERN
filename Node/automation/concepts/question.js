//QUESTION -> print 1 to 10 , each after 2 sec
// this will print from 1 to 10 with interval of 2sec

//DOESNT WORK->
// 11 will be printed 10 times by this
// for(var i=0; i<=10; i++){
//     setTimeout(
//         function () {
//             console.log(i);
//         }
//     ,2000);
// }

// way 1
// for(let i=0; i<=10; i++){
//     setTimeout(
//         function () {
//             console.log(i);
//         }
//     ,2000*i);
// }

//challenge : for loop and using var print 1-10 with interval of 2sec

// way 2
// for(var i=0; i<=10; i++){
//     print(i);
// }

// function print(i){
//     setTimeout(
//         function (){
//             console.log(i);
//         }
//         ,2000*i);
// }


// way 3
for(var i=1; i<=10; i++){
    function outer(a){
        setTimeout(
            function(){
                console.log(a);
            },2000*a
        );
    }
    outer(i);
}

//WAY 4 - USING RECURSION
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

