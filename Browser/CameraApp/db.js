// connect to database
let db;

// The call returns openRequest object, we should listen to events(success, onupgradeneeded, error) on it 
let openRequest = indexedDB.open("myDatabase");

openRequest.addEventListener('success',()=>{
    console.log('db connected');
    db = openRequest.result;
});

// when db version upgrade or while running for first time 
openRequest.addEventListener('upgradeneeded',()=>{
    console.log('db upgraded or initialised db');
    //got database object in db (we should use it for further calls.)
    db = openRequest.result;

    //like tables, schema name : video
    db.createObjectStore('video', {keyPath:"id"});
    db.createObjectStore('image', {keyPath:"id"});
});

openRequest.addEventListener("error", ()=>{
    console.log("db error");
});