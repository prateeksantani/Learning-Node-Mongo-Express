 Learned about V8 engine in Chrome
 Node is a runtime enivironment made with V8 engine and C++ so we can run javascript outside the browser

 With the help of Node we can perform Server Side functionalaties 

Some Broswer functionalaties are not available in Node like Window objects (DOM) and alert and prompt

Learned about NPM(node package module)

npm init  //creates a json package to run scripts

*npm install nodemon  //Restart server whenever a change is detected 
                    //Also change the script to "start" : "nodemon index.js"

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

Request --> Event Queue --> Event Loop -->if(blocking operation) ---> Thread pool -- > Response

Request --> Event Queue --> Event Loop -->if(non -blocking operation) ---- > Response

Synchronus  or Blocking Operation goes from event loop to thread pool

In Asynchronus or Non Blocking they exexution is independent 

In Assynchronus does not return anything but it takes callback as argument

API which follows industry standard and conventions are know as RESTfull API

REST : Representaion State Transfter it is not a protocl or standard it is architecture style

API that follows REST conventions are know as RESTfull API

REST principal:

1. Statelesness
2. Sepration of Client and Server
3. Uniformity of the Interface
4. Code on Demannd (it means API can return executable code insted of response in JSON like HTML if we making cross platform application its better to use JSON if we building just for Web we can return HTML are reder it in client side know as CSR (Client Side Scripting))
5. Caching (response can be cached to avoid overloading of server)
6. Layered Architecture ( client connected to a REST Api cannot distinguish between wether it is communication with the end server or intermediate serever).


Benefit of REST API

1. Scalability
2. Platform Independent
3. Seperation of Concern
4. Flexibility (multiple return type like JSON and HTML)
5. Security (follows standard security mechanism like SSL and TLS)
6. Interoperability
7. Simplicity and Easy of Use (by following standard http method like GET, POST,PUT,DELETE)

Middelwear

Functions that have access to request object and response object(req,res) and necxt middelwear function in the application request response cycle


HEADERS :  HTTP Headers are and important part of API request and response as the represnt the meta-data asscoiated with the API request and response.

Headers carry information for the The request abd the response body.

res.setHeader("myNmae": "Prateek");

Express.js is a minimal and felxible web application framework . It is based on Node.js

Express functionalities are

-> File Handalaing
-> Connecting with  Database
-> Making REST APIs
-> Templating

Mongo DB

Mongo-DB is a No-SQL Document Based Database like SQL Database works on relations and table NO-SQL Database runs on Document and Collections

Works on BSON format

Best for Node.js Application

Strong Support for Aggregation Pipes

In Mongo- DB we have Collections  insted of Tables

How to connect Mongo-Db 

*   npm install mongoose

*  const mongoose = require("mongoose");  //use mongoose

mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")  //returns a promise

.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error",err));


//Create  Schema 

const userSchema = new mongoose.Schema({
  firtName :{
    type : String,
    required: true
  },
  lastName : {
    type : String,
    required: true
  },
   email : {
    type : String,
    required: true,
    unique : true
   },
   jobTitle : {
    type : String
   },
   gender : {
    type : String
   
   }
})

const User = mongoose.model("user", userSchema);



Commands in Mongo-DB 

show dbs  ==>     show all Databases

use db__name  ==>    select Databse

show collections==>   Show All Collection in selected database

db.coll.find()

db.coll.insert()


Schema - Define the structure
  With the help of Schema we define - Model
   USing Model  we do CRUD operations

   
