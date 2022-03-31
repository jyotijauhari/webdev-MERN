const puppeteer = require("puppeteer");
const credentials = require("./credentials");

let email = credentials.email;
let password = credentials.password;

//currentTab
let cTab;
let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]  
});

//can use any variable name instead of browser
browserOpenPromise
    .then(function (browser){
        //console.log(browser);
        console.log("browser is open");
        // **an array of all open pages in inside browser 
        let allTabsPromise = browser.pages();
        return allTabsPromise;
        
    })
    //.then again -> promise chaining
    .then(function (allTabsArr){
        cTab = allTabsArr[0];
        console.log("new tab");
        let visitingLoginPagePromise = cTab.goto("https://www.hackerrank.com/auth/login");
        return visitingLoginPagePromise;
    })
    .then(function(){
        console.log("Hackerrank login page opened");
        let emailWillBeTypedPromise = cTab.type("input[name='username']", email);
        return emailWillBeTypedPromise;
    })
    .then(function(){
        console.log("Email has been typed");
        let passwordWillBeTypedPromise = cTab.type("input[type='password']", password);
        return passwordWillBeTypedPromise;
    })
    .then(function(){
        console.log("password has been typed");
        let willBeLoggedInPromise = cTab.click(
          ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
        );
        return willBeLoggedInPromise;
    })
    .then(function(){
        console.log("logged in hackerrank successfully");
        // waitandclick function(we created) will wait for selector to load and then click on it 
        // alogorithmTabWillBeOpenedPromise receive promise i.e store promise so its promise , right!
        let alogorithmTabWillBeOpenedPromise = waitAndClick("div[data-automation='algorithms']"); 
        return alogorithmTabWillBeOpenedPromise;
    })
    .then(function(){
        console.log("algorithm page opened.. "); // ***how this is printed first even before prev one??
    })

    .catch(function(err){
        console.log(err);
    });

    function waitAndClick(algoButtonSelector){
        let waitThenClickPromise = new Promise(function(resolve, reject){
            //waitForSelector is already present method in pupeteer
            //waitForSelector() method. Wait for the selector to appear in page. If at the moment of calling the method the selector already exists, the method will return immediately. If the selector doesn't appear after the timeout milliseconds of waiting, the function will throw

            let waitForSelectorPromise = cTab.waitForSelector(algoButtonSelector); //selector is css selector

            waitForSelectorPromise
            //then-catch promise -> burger order example :)
                .then(function(){
                    console.log("algo selector loaded");
                    let AlgoButtonWillBeClickedPromise = cTab.click(algoButtonSelector);
                    return AlgoButtonWillBeClickedPromise;
                })
                .then(function(){
                    console.log("algo button is clicked...");
                })
                .catch(function(err){
                    console.log(err);
                });
            return waitForSelectorPromise;
        })
    }