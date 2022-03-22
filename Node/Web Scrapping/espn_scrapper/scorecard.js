const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard(url) {
//   https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
  console.log("from scorecards.js ",url);
  request(url, cb);
}

function cb(err,res,body) {
    if (err) {
        console.log(err);
    }
    else {
        getMatchDetails(body);
    }
}

function getMatchDetails(html){
  // selectool contains html of ith scorecrad
  let selecTool = cheerio.load(html);

//   task: 
// 1 get venue
// 2 get date
// 3 get result 
// 4 get team names

    //1. get venue
    //2. get date
    let desc = selecTool(".match-header-info.match-info-MATCH");
    // console.log(desc.text());
    let descArr = desc.text().split(",");
    //Match (N), Abu Dhabi, Oct 25 2020, Indian Premier League
    // console.log(descArr);
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];
    console.log(dateOfMatch);
    console.log(venueOfMatch);
    //3. get result
    //class selector, children selector
    let matchResEle = selecTool( ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text");
    console.log(matchResEle.text());

    //   4. get team names
    //   a[class = "name-link"] for getting team name -> attribute selector 

    
}



module.exports = {
    gifs:getInfoFromScorecard,
}