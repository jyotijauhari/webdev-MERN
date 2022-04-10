let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const fs = require("fs");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");
const allMatchObj = require("./allMatch");

request(url, cb);

function cb(err, res, body) {
    if(err){
        console.error("error", err);
    }
    else {
        handleHtml(body);
    }
}

//getting curr directory path
let iplPath = path.join(__dirname, "IPL");
if (!fs.existsSync(iplPath)) {
    fs.mkdirSync(iplPath);
}


function handleHtml(html) {
    
    let selecTool = cheerio.load(html);
    // let anchorElem = selecTool('a[data-hover="View All Results"]');
    let anchorElem = selecTool('span[class = "ds-inline-flex ds-items-center ds-leading-none"]>a[class="ds-block ds-text-center ds-uppercase ds-text-ui-typo-primary ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block"]')
    // console.log(anchorElem);
    // attr methods -> method for getting all attributes and their values
    let relativeLink = anchorElem.attr("href");
    // console.log(relativeLink);
    let fullLink = "https://www.espncricinfo.com" + relativeLink;
    // console.log(fullLink);
    
    allMatchObj.getAllMatch(fullLink);
}
