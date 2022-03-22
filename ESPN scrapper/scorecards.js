const request=require("request")
const cheerio=require("cheerio")

function getInfoFromScorecard(url){
    console.log("from scorecard.js",url)
    //we have url of a scoecard, we wnat to get html of that scorecard
    request(url,cb)
}

function cb(err,res,body){
    if(err)
        console.log(err)
    else
        getMatchDetails(body)
}

function getMatchDetails(html){
    // selectool contains html of ith scorecard
    let selectool=cheerio.load(html)
    //get venue, 
    let desc=selectool(".match-header-info.match-info-MATCH")
    // console.log(descArr.text())
    // Match (N), Abu Dhabi, Oct 16 2020, Indian Premier League

    let descArr=desc.text().split(",")
    console.log(descArr)
    
    //date
    let dateofmatch=descArr[2]
    console.log(dateofmatch)
    //venue
    let venueofmatch=descArr[1]
    console.log(venueofmatch)
    //result
    let resultofmatch=selectool(".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text")
    console.log(resultofmatch.text())
    //team name

}

//visit every scorecard and get info
module.exports={
    gifs:getInfoFromScorecard
}