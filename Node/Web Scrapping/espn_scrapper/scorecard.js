//its deprecated -> here for refernce of concepts -> new scorecard.js is tp.js
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
//first install using -> npm i xlsx
const xlsx = require("xlsx");
const { log } = require("console");

function getInfoFromScorecard(url) {
//   https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
//   console.log("from scorecards.js ",url);
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
//   console.log(selecTool);

//   task: 
// 1 get venue
// 2 get date
// 3 get result 
// 4 get team names

    //1. get venue
    //2. get date
    // let desc = selecTool(".match-header-info.match-info-MATCH"); ->deprecated as website structure changed
    let desc = selecTool(".ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid");
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
    // let matchResEle = selecTool( ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text");
    let matchResEle = selecTool( ".ds-text-tight-m.ds-font-regular.ds-truncate");
    // console.log(matchResEle.text());
    let matchResult = matchResEle.text();;
    console.log(matchResult);

    //   4. get team names
    //   a[class = "name-link"] for getting team name -> attribute selector 
    // selectTool(".name-detail>.name-link")
    // let teamNameArr = selecTool(".name-detail>.name-link");
    let teamNameArr = selecTool('a[class="ds-text-ui-typo hover:ds-text-ui-typo-primary ds-block"]');
    // console.log(teamNameArr.text());
    let ownTeam = selecTool(teamNameArr[0]).text();
    let opponentTeam = selecTool(teamNameArr[1]).text();
    console.log(ownTeam);
    console.log(opponentTeam);

    //5. get innings 
    console.log("Innings: ")
    // let allBatsmenTable = selecTool(".table.batsman tbody");
    let allBatsmenTable = selecTool(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table > tbody");
    // console.log(allBatsmenTable.html());
    // console.log(allBatsmenTable.length); // 2
    
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
            //ds-text-tight-s
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
                let playerName = selecTool(row.find("td")[0]).text().trim();
                // console.log(playerName);
                let runs = selecTool(row.find("td")[2]).text();
                let balls = selecTool(row.find("td")[3]).text();
                let numberOf4 = selecTool(row.find("td")[5]).text();
                let numberOf6 = selecTool(row.find("td")[6]).text();
                let sr = selecTool(row.find("td")[7]).text();
                
                // console.log(
                //     `playerName -> ${playerName} runsScored ->  ${runs} ballsPlayed ->  ${balls} numbOfFours -> ${numberOf4} numbOfSixes -> ${numberOf6}  strikeRate-> ${sr}`
                //   );

                console.log(
                    `${playerName} ->  ${runs} ->  ${balls} -> ${numberOf4} -> ${numberOf6} -> ${sr}`
                  );

                  processInformation(dateOfMatch, venueOfMatch, matchResult, ownTeam, opponentTeam, playerName, runs, balls, numberOf4, numberOf6, sr);

            }
        }
    
    }
    // console.log(htmlString); //-> for getting innings html
}

function processInformation(dateOfMatch, venueOfMatch, matchResult, ownTeam, opponentTeam, playerName, runs, balls, numberOf4, numberOf6, sr){
    let teamNamePath = path.join(__dirname, "IPL", ownTeam );
    // let teamNamePath = path.join(__dirname, "IPL", ownTeam + " vs " + opponentTeam); 
    if (!fs.existsSync(teamNamePath)) {
        fs.mkdirSync(teamNamePath);
      }

    let playerPath = path.join(teamNamePath, playerName + ".xlsx");
    let content = excelReader(playerPath, playerName);

    //es6 object syntax 
    let playerObj = {
        dateOfMatch,
        venueOfMatch,
        matchResult,
        ownTeam,
        opponentTeam,
        playerName,
        runs,
        balls,
        numberOf4,
        numberOf6,
        sr
      };

    content.push(playerObj);
    //this function writes all the content into excel sheet , and places that excel sheet data into playerPath-> rohitSharma.xlsx
    excelWriter(playerPath, content, playerName);
  
    }  

//this function reads the data from excel file
function excelReader(playerPath, sheetName) {
    if (!fs.existsSync(playerPath)) {
      //if playerPath does not exists, this means that we have never placed any data into that file , so return empty object
      return [];
    }
    //if playerPath already has some data in it 
    let workBook = xlsx.readFile(playerPath);
    //A dictionary of the worksheets in the workbook. Use SheetNames to reference these.
    let excelData = workBook.Sheets[sheetName];
    let playerObj = xlsx.utils.sheet_to_json(excelData);
    return playerObj
}

function excelWriter(playerPath, jsObject, sheetName) {
    //Creates a new workbook
    let newWorkBook = xlsx.utils.book_new();
    //Converts an array of JS objects to a worksheet.
    let newWorkSheet = xlsx.utils.json_to_sheet(jsObject);
    //it appends a worksheet to a workbook
    xlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, sheetName);
    // Attempts to write or download workbook data to file
    xlsx.writeFile(newWorkBook, playerPath);
}


module.exports = {
    gifs:getInfoFromScorecard,
}