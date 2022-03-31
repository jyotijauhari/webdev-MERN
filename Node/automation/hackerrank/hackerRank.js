const puppeteer = require("puppeteer");

let email = "";
let password = "";

let currentTab;
let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]  
});

browserOpenPromise
    .then(function (browser){
        //console.log(browser);
        console.log("browser is open");
        // **an array of all open pages in inside browser 
        let allTabsPromise = browser.pages();
        return allTabsPromise;
        
    })
    .then(function (allTabsArr){
        currentTab = allTabsArr[0];
        console.log("new tab");
        let visitingLoginPagePromise = currentTab.goto("https://www.hackerrank.com/auth/login");
        return visitingLoginPagePromise;
    })
    .then(function(){
        console.log("Hackerrank login page opened");
        let emailWillBeTypedPromise = currentTab.type("input[name='username']", email);
        return emailWillBeTypedPromise;
    })
    .then(function(){
        console.log("Email has been typed");
        let passwordWillBeTypedPromise = currentTab.type("input[type='password']", password);
        return passwordWillBeTypedPromise;
    })
    .then(function(){
        console.log("password has been typed");
        let willBeLoggedInPromise = currentTab.click(
          ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
        );
        return willBeLoggedInPromise;
    })
    .then(function(){
        console.log("logged in hackerrank successfully");
    })
    .catch(function(err){
        console.log(err);
    });