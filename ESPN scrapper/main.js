let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595"

const request =require("request");
//cheerio
const cheerio=require("cheerio") // picks html code of page

const allMatchObj=require("./allMatch")

request(url,cb)

function cb(err, res, body){
    if(err)
        console.error("error",err);
    else
        handleHtml(body)
}

function handleHtml(html){
    let selectool=cheerio.load(html)
    let anchorElm=selectool('a[data-hover="View All Results"]');    // moves to loaction of given tag and here it is picking link given in that element
    let relativeLink=anchorElm.attr("href") // picking relative link mentioned in above elements mentioned tag, here 'href'
    // console.log(relativeLink)
    let fullLink="https://www.espncricinfo.com"+relativeLink;   // joining relative link with the major site link to move further in website
    // console.log(fullLink)
    allMatchObj.getAllMatch(fullLink);
}

// currpage link: https://www.espncricinfo.com/series/ipl-2020-21-1210595
// nextpage link: https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results

