const request =require("request");
console.log("Before")
request("https://www.worldometers.info/coronavirus/?msclkid=32e46ddda7a811ec91bbbf11e29e5363",cb)
console.log("After")
//call back function: when any response got from site, function will be called
function cb(err, res, body){
    console.error("error",err);
    // console.log(res);
    // console.log(body);
    console.log(typeof body)
}