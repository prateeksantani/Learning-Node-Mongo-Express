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


 The code initializes an Express application and listens on port 8080 for incoming HTTP requests. Express is a web application framework for Node.js, and it simplifies the process of creating web servers and handling HTTP requests.

Here's what the code does:

It imports the Express library/module.
It creates an Express application instance called app.
It defines two routes using the app.get() method. One route handles requests to the root URL ("/") and the other handles requests to the "/about" URL.
Each route responds with a string. For the root ("/") route, it includes the value of the age query parameter in the response. For the "/about" route, it includes the value of the name query parameter in the response.
Finally, it starts the server and listens on port 8080. When the server starts successfully, it prints "Server Started" to the console.
However, it seems there's a small error in the code inside the /about route's response string. It should be:

javascript

return res.send(`Hello From About Page. Hey! ${req.query.name}`);






