const request =require("request");
//cheerio
const cheerio=require("cheerio")
// request("https://www.worldometers.info/coronavirus/?msclkid=32e46ddda7a811ec91bbbf11e29e5363",cb)

// let html=<ul id="fruits">
//     <li class="apple">apple</li>
//     <li class="orange">orange</li>
//     <li class="pear">pear</li>
// </ul>
// let selectool = cheerio.load(html);
// let fruitNamearr = selectool("#fruits")
// console.log(fruitNamearr.text())

// let fruitName = selectool(".pear")
// console.log(fruitName.text)

//call back function: when any response got from site, function will be called
function cb(err, res, body){
    if(err)
        console.error("error",err);
    else
        handleHtml(body)
        // console.log(res);
    // console.log(body);
}

function handleHtml(html){
    let selectool=cheerio.load(html)
    let coronastats=selecTool(".maincounter-number")

    let cases=selecTool(coronastats[0].text);
    console.log("Cases"+cases);
    
    let deaths=selecTool(coronastats[1].text);
    console.log("Deaths"+deaths);
    
    let recover=selecTool(coronastats[2].text);
    console.log("Recover"+recover);
}