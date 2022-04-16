// Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol 
// used for automation testing as well

// When you install Puppeteer, it downloads a recent version of Chromium
//  (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API.

const puppeteer = require("puppeteer");

const browserOpenPromise = puppeteer.launch({
    //headless is true by default
    //headless true means - chromium will do work in bg, wont open browser for you to see whats happening
    headless: false,
    defaultViewport:null,
    args: ["--start-maximized"]
  });

  browserOpenPromise.then(function(){
      console.log("browser is open");
  })