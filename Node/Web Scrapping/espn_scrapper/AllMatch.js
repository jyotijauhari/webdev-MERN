const request = require("request");
const cheerio = require("cheerio");
const {gifs} = require("./scorecard");

function getAllMatch(url){
    // console.log("from allMatch.js ",url);
    request(url, cb);  
}

function cb(err, res, body) {
    if(err){
        console.error("error", err);
    }
    else {
        // console.log("in callback");
        extractAllMatchLink(body);
    }
}

function extractAllMatchLink(html){
    let selecTool = cheerio.load(html);
    // let scorecardElemArr = selecTool('a[data-hover="Scorecard"]');
    // let scoreCardLinkAnchorArr => scorecardElemArr 
    //website structure changed so new selector ->
    let scorecardElemArr = selecTool('div[class="ds-flex ds-flex-wrap"] span[class="ds-inline-flex ds-items-center ds-leading-none"]>a[class="ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block"]');
    // console.log(scorecardElemArr.length);
    //attr methods -> Method for getting all attributes and their values
    //score card at 3rd anchor [ Report, Summary, Scorecard, SeriesHome] and comes after 4 elements again
    for (let i = 2; i < scorecardElemArr.length; i+=4){
        // let text = selecTool(scorecardElemArr[i]).text();
        // console.log(text);
        let scorecardLink = selecTool(scorecardElemArr[i]).attr("href");
        // console.log(i + 1 + ") " + scorecardLink);
        let fullLink = "https://www.espncricinfo.com" + scorecardLink;
        // console.log(fullLink)
        // gifs(fullLink);
        // break; // to make call for 1st link only

    }
}
module.exports = {
getAllMatch: getAllMatch
};