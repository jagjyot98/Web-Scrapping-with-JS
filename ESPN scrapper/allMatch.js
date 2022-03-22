const request =require("request");
//cheerio
const cheerio=require("cheerio") // picks html code of page
const {gifs}=require("./scorecards")    // excessing properties in exporting object

function getAllMatch(url){
    // console.log("from allMatch.js",url)
    request(url,cb)
}
function cb(err, res, body){
    if(err)
        console.error("error",err);
    else
        extractAllMatchLink(body)
}
function extractAllMatchLink(html){
    let selectool=cheerio.load(html)
    let scorecardElmArr=selectool('a[data-hover="Scorecard"]');    // moves to loaction of given tag and here it is picking link given in that element
    console.log(scorecardElmArr.length)

    for(let i=0;i<scorecardElmArr.length;i++)
    {
        let scorecardLink=selectool(scorecardElmArr[i]).attr("href")
        // let relativeLink=anchorElm.attr("href") // picking relative link mentioned in above elements mentioned tag, here 'href'
        // console.log(relativeLink)
        let fullLink="https://www.espncricinfo.com"+scorecardLink;   // joining relative link with the major site link to move further in website
        // console.log(fullLink)
        gifs(fullLink)
        break
    }
}

// data-hover="Scorecard"

module.exports={
    getAllMatch:getAllMatch,
};