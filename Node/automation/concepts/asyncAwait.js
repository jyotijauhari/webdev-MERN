//javascript.info website

const { log } = require("console");

// let's see promises first ->
function fp() { 
    return new Promise(function (resolve, reject) {
      resolve("hi");
    });
  }
  
  let promisifyFunc = fp();
  
  promisifyFunc.then(function (data) {
    console.log(data);
  });
  
  promisifyFunc.catch(function (err) {
    console.log(err);
  });


//now see how this complex syntax get simplified with async await ->

// async await is syntactical sugar for promises 
// async/await is promises with easy syntax


//write async before function to make it return promises
// async function f() {
//     return "hello";
//   }
// console.log ( f() ) ; //return Promise { 'hello' }


///using async keyword
async function f() {
    return "hello";
  }
  
  //receive promise
  let asyncf = f();
  
  //resolving promise by .then 
  asyncf.then(function (data) {
    console.log(data);
  });
  
  asyncf.then(alert); // alert the returned message -> hello


  //AWAIT
//The keyword await makes JavaScript wait until that promise settles and returns its result.
//The function execution “pauses” at the line 69 and resumes when the promise settles, with "result" variable
//await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime.
//await waits for promise settlement so, it means it takes care of both .then and .catch

  async function f(){
      //here for experimenting we are making our own promise as we want this async function to return promise
      let promise = new Promise(function(resolve, reject){
        //setTimeout is async function so need cb or promises to resolve it  
        //setTimeout(cb,timeInMilis) // syntax
        setTimeout(function(){
            resolve("done!");
          }, 5000);

        });

        let result = await promise; // wait until the promise resolves
        console.log("hello"); // this will run after 5sec because await stops everything in this function till promise get resolve/settled :) 
        alert(result); // this alert will happen just after printing hello
    
  }

f();
console.log("yeahh");  //it wont wait for await as its not in function which contain await // not present after await in that function


/**
 * output:
 * yeahh
 * hello  //after 5sec
 * done alert //eaxctly after hello printed
 */


// Day 35


//fetch - async/await
//run in browser because of fetch thing :)
async function showAvatar() {

  // read our JSON
  let response = await fetch("https://javascript.info/article/promise-chaining/user.json");
  console.log(response); 
  /*Response {type: 'cors', url: 'https://javascript.info/article/promise-chaining/user.json', redirected: false, status: 200, ok: true, …}
  body: (...)
  bodyUsed: true
  headers: Headers {}
  ok: true
  redirected: false
  status: 200
  statusText: ""
  type: "cors"
  url: "https://javascript.info/article/promise-chaining/user.json"
  [[Prototype]]: Response*/


  let user = await response.json();
  console.log(user);
  /**
{name: 'iliakan', isAdmin: true}
isAdmin: true
name: "iliakan"
[[Prototype]]: Object
   */

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();


// Try catch finally -> exception handling
try{
  console.log("in try");
}
catch(e){
  console.log(e);
}
finally{
  console.log("I am always executed");
}


try{
  throw new Error("Error! gadbad ho gayi");
}
catch(e){
  console.log(e);
}
finally{
  console.log("finally u r here in finally");
}