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
        console.log("algorithm page opened.. "); // ***how this is printed first even before prev one?? -> lol you returned wrong promise from the prev function :)
        let allQuesPromise = cTab.waitForSelector('a[data-analytics="ChallengeListChallengeName"]'); //waiting for all ques to get loaded
        return allQuesPromise;
    })
    .then(function(){
        // function which return all ques links
        function getAllQuesLinks(){
            let allElemArr = document.querySelectorAll(
                'a[data-analytics="ChallengeListChallengeName"]'
              );
            let linksArr = [];
            for(let i=0; i<allElemArr.length; i++){
                linksArr.push(allElemArr[i].getAttribute("href"));
            }
            return linksArr;
        }
        let linksArrPromise = cTab.evaluate(getAllQuesLinks); // linksArrPromise will receive promise object // .evaluate have inbuilt the resolve and reject method, as inbuilt promise it is 
        return linksArrPromise;
    })
    .then(function(linksArr){
        console.log("links to all ques received: ");
        // console.log(linksArr);

        //now solving que
        let questionsWillBeSolvedPromise = questionSolver(linksArr[0], 0);
        return questionsWillBeSolvedPromise;
    })
    .then(function(){
        console.log("Tada questiion is solved.");
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
                    resolve();
                })
                .catch(function(err){
                    console.log(err);
                });
        });
        return waitThenClickPromise;
    }

function questionSolver(url, idx){
    let questionWillBeSolvedbyFunctionPromise = new Promise(function (resolve, reject){
        let fullLink = `https://www.hackerrank.com${url}`;
        let goToQuesPagePromise = cTab.goto(fullLink);
        goToQuesPagePromise
        .then(function(){
            console.log("question opened woahoo.");
            //tick the custome input box mark
            let waitForCheckBoxAndClickPromise = waitAndClick(".checkbox-input");
            return waitForCheckBoxAndClickPromise;
        })
        .then(function(){
            console.log("tick box clicked");
            //select box where code will be typed
            let waitForTextBoxPromise = cTab.waitForSelector(".custominput");
            return waitForTextBoxPromise;
        })
        .then(function(){
            console.log("text box loaded");

            //type code in text box
            let code1 = `#include <cmath>
            #include <cstdio>
            #include <vector>
            #include <iostream>
            #include <algorithm>
            using namespace std;
            
            
            int solveMeFirst(int a, int b) {
              return a+b;
            }
            int main() {
              int num1, num2;
              int sum;
              cin>>num1>>num2;
              sum = solveMeFirst(num1,num2);
              cout<<sum;
              return 0;
            }`;

            let codeWillBeTypedPromise = cTab.type( ".custominput" ,code1);
            return codeWillBeTypedPromise;
        })
        .then(function(){
            console.log("code typed in custome text box....")
            //press ctrl 
            let controlKeyWillBePressedPromised = cTab.keyboard.down("Control");
            return controlKeyWillBePressedPromised;
        })
        .then(function(){
            console.log("ctrl key pressed...")
            //press a 
            let aKeyWillBePressedPromised = cTab.keyboard.press("a");
            return aKeyWillBePressedPromised;
        })
        .then(function(){
            console.log("a key pressed...")
            //press x 
            let xKeyWillBePressedPromised = cTab.keyboard.press("x");
            return xKeyWillBePressedPromised;
        })
        .then(function(){
            console.log("x key pressed");
            //clicking the editor promise
            let cursorInEditorPromise = cTab.click(".monaco-editor.no-user-select");
            return cursorInEditorPromise;
        })
        //pasting
        .then(function(){
            console.log("clicked editor ...")
            //press ctrl 
            let controlKeyWillBePressedPromised = cTab.keyboard.down("Control");
            return controlKeyWillBePressedPromised;
        })
        .then(function () {
            console.log("clicked ctrl ...")
            //press a
            let aKeyPressedPromise = cTab.keyboard.press("a");
            return aKeyPressedPromise;
          })
        .then(function(){
            console.log("a clicked");
            //press V
            let vKeyWillBePressedPromised = cTab.keyboard.press("v");
            return vKeyWillBePressedPromised;
        })
        .then(function () {
            console.log("v button clicked--> pasted the code");
            //click submit button
            let submitButtonClickedPromise = cTab.click(".hr-monaco-submit");
            return submitButtonClickedPromise;
        })
        .then(function(){
            console.log("submit button clicked");
            // unclick ctrl key
            let ControlDownPromise = cTab.keyboard.up("Control");
            return ControlDownPromise;
        })
        .then(function(){
            console.log("code submitted successfully");
            resolve();
        })
        .catch(function(err){
            reject(err);
        });
    });
    return questionWillBeSolvedbyFunctionPromise;
}