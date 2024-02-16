Studied about RESTApi API


Made Some REST APIs and used middelwearnpm start

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

* Connect Mongo-DB

* npm install mongoose

const mongoose = require("mongoose");   //use mongoose to connect with MongoDB

Schema - Define the structure
  With the help of Schema we define - Model
   USing Model  we do CRUD operations