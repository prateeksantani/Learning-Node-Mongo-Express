 Learned about V8 engine in Chrome
 Node is a runtime enivironment made with V8 engine and C++ so we can run javascript outside the browser

 With the help of Node we can perform Server Side functionalaties 

Some Broswer functionalaties are not available in Node like Window objects (DOM) and alert and prompt

Learned about NPM(node package module)

npm init  //creates a json package to run scripts

Module((Use to Split code in differnt files))

 1. To import another js file to index js file we use

    const math = require("./math");

2.  To export  js file to index we use

    module.exports = {a,b};  // a and b is a function

File Handling

const fs = require("fs");   //fs is used allows you to work with the file system on your computer.

fs.mkdirSync("Package");    // creates a directory

fs.writeFileSync("./text.txt", "Hello world!");      //Synchronus operation also know as Blocking Operation

fs.writeFile("./text.txt", "Lets get started with node",(err) => {"ok"});     //Asynchronous operation or Non-Blocking Operation

const result = fs.readFileSync("./contacts.txt", "utf8");  //sync  returns a value
console.log(result);

fs.readFile("./contacts.txt", "utf8", (err, result) => {
  if(err) {
    console.log("Error",err);
  }else {
    console.log(result);
  }
});                       //async does ot return anything but it takes callback as argumnent

