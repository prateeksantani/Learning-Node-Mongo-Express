const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();    //handler function


app.get("/", (req, res) => {
  return res.send(`Hello from Homepage. Your Age: ${req.query.age}`)
});


app.get("/about", (req,res) =>{
  return res.send("Hello From About Page " + "Hey! " + req.query.name);
});

// const myServer = http.createServer(app);

// myServer.listen(8080, () => console.log("Server Started"));

app.listen(8080, () => console.log("Server Started"));

