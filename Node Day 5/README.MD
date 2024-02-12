USED EXPRESS by  npm i express

then import const express = require("express");

const app = express();

app.METHOD(PATH,HANDLER)

app.get("/", (req, res) => {
  return res.send
});

app is an instance of express

METHOD is an HTTP request method, in lowercase

PATH is a path on the server.

HANDLER is the function exexcuted when the route is matched. It takes two parameters: req and res. 
The req parameter represents the client's request, and the res parameter represents the server's response
The HANDLER function takes two parameters: req and res.