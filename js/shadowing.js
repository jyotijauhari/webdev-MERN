var a = 100;
//block scope -> {}
{
    var a = 10; //value of a in global scope changed from 100 to 10 and will pertain even if block scope (block object) get destroyed
    //b and c are in block scope
    let b = 20;
    const c = 30;

    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(a); //shadowing // 10
console.log(b); // refernce error b is not defined