// promises returned by -> fetch
// callback returned by -> setTimeout

// fetch() api


//run in browser
console.log("before");
setTimeout(function () {
  console.log("time over");
}, 5000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response)
  {
    return response.json() // when a promise is returned, it creates a promise and then return it , which is obviously of fulfilled state 
  })
  .then(function (json) {
    console.log(json)
  });
console.log("after");