const request = require("request");
console.log(request);
let url = "https://blockchain.info/ticker"
request({url: url}, (error, response)=>{
    let data = JSON.parse(response.body)
    console.log(data.USD, "this data")
    console.log(error, "error due to heheh")
});

