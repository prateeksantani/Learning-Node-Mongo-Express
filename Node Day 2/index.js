// Step 1: initialise the local repo by npm init to create a json file

const http = require("http");
const fs = require("fs");
 // step 2  when you need to make a request over the hyper text transfer protocol.

// step 3 create a request handler

const myServer = http.createServer((req,res) =>{

  //console.log(req.headers);
  console.log("New Request");

  res.end("Hello from Server! Lets get Started");
});

myServer.listen(8000,() => console.log("Server Started")); 
//asign port number

