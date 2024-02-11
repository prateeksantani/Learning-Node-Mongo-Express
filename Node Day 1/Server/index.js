const http = require("http");
const fs  =  require("fs");

const myServer = http.createServer((req , res) => {
  // console.log(req.headers);
  // console.log("New Request");
  const log = `${Date.now()}: New Request Received\n`;
  fs.appendFile('log.txt',log,(err,data) => {

  });
  res.end("Hello From Server");
});


myServer.listen(8080, () => console.log("Server Started"));

