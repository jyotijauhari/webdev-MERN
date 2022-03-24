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
    // selectTool(".name-detail>.name-link")
    let teamNames = selecTool(".name-detail>.name-link");
    // console.log(teamNames.text());
    let team1 = selecTool(teamNames[0]).text();
    console.log(team1);
    let team2 = selecTool(teamNames[1]).text();
    console.log(team2);

    //5. get innings 

    let allBatsmenRows = selecTool(".table.batsman tbody");
    console.log(allBatsmenRows.text());
    //got two tables of both team batsman now
    // Are there any other method like .text() , .html(), .find(), .hasClass() that are commonly used with selecTool? 

    let htmlString = "";
    let count = 0;
    for (let i = 0; i < allBatsmenTable.length; i++) {
        htmlString = htmlString + selecTool(allBatsmenTable[i]).html();
        //Get the descendants(table rows ) of each element (table )
        let allRows = selecTool(allBatsmenTable[i]).find("tr"); // -> data of batsmen + empty rows 

        for (let i = 0; i < allRows.length; i++) {
            //Check to see if any of the matched elements have the given className
            let row = selecTool(allRows[i]); // selectool isliye likha qki .find() krna h aage row pe, jo ki direct nhi kr skte , isme tr agya-> jisme bohot saare td hai :)
            let firstColmnOfRow = row.find("td")[0]; //first td of tr

            //-> as we have two td , one with batsman-cell class and (other usme nahi hai) (and in the other td that doesn't have batsman-cell has no data -> and we dont want that td so ->)
            if (selecTool(firstColmnOfRow).hasClass("batsman-cell")) {
                //will be getting valid data
                // count++;
                // console.log("inside " + count);
                // name | runs | balls | 4's | 6's | sr
                // for (let i = 0; i < 8; i++) {
                //   if (i == 1 || i == 4) continue;
                //   else {
                //     console.log(selecTool(row.find("td")[i]).text());
                //   }
                // }
                let playerName = selecTool(row.find("td")[0]);
                // console.log(playerName);
                let runs = selecTool(row.find("td")[2]).text();
                let balls = selecTool(row.find("td")[3]).text();
                let numberOf4 = selecTool(row.find("td")[5]).text();
                let numberOf6 = selecTool(row.find("td")[6]).text();
                let sr = selecTool(row.find("td")[7]).text();
                
                console.log(
                    `playerName -> ${playerName} runsScored ->  ${runs} ballsPlayed ->  ${balls} numbOfFours -> ${numberOf4} numbOfSixes -> ${numberOf6}  strikeRate-> ${sr}`
                  );

            }
        }
    
    }
}


module.exports = {
    gifs:getInfoFromScorecard,
}