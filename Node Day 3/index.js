const http = require("http");
const fs  =  require("fs");
const url = require("url");

const myServer = http.createServer((req , res) => {
  // console.log(req.headers);
  // console.log("New Request");
  const log = `${Date.now()}: ${req.url} New Request Received\n`;
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);

  fs.appendFile("log.txt",log,(err,data) => {
      switch(myUrl.pathname){
        case "/" : res.end("HomePage");
        break;
        case "/about" : res.end("Dev Prateek Santani");
        break;
        default :res.end("404 Not found");
      }
  });
  
});


myServer.listen(8080, () => console.log("Server Started"));
