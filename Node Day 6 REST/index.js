const express = require('express');
const mongoose = require('mongoose');
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

//Databse Connection

mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")  //returns a promise

.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error",err));


//Schema 

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

//middlewear plugin

app.use(express.urlencoded({ extended: false}));

// app.use((req,res , next) => {
//          console.log("Hello  from middleware 1");
// next();
// });

//Routes
app.get("/api/users", (req,res) => {
  return res.json(users);
});

app.get("/users", (req,res) => {
    const html =
    ` <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul> `;
        res.send(html);
});

app.get("/api/users/:id",(req,res) =>{
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      res.setHeader("myName","Prateek"); // set custom header
      return res.json(user);
});

app.post("/api/users", (req,res) => {
  const body = req.body;
  users.push({...body, id: users.length + 1});                           //create
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data) => {
    return res.status(201).json({status:"success", id: users.length });
  })
});

app.patch("/api/users/:id", (req,res) =>{       //edit user with id
    return res.json()
});


// app.delete("/api/users/:id", (req,res) =>{    //delete user with id
      
// });


app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id); // Extract ID from the request URL
    const index = users.findIndex(user => user.id === id); // Find the index of the user with the specified ID

    if (index !== -1) { // If the user exists
        users.splice(index, 1); // Remove the user from the array
        res.json({ message: "User deleted successfully" });
    } else {
        res.status(404).json({ message: "User not found" }); // User with the given ID not found
    }
});



app.listen(PORT, () => console.log(`Server Started at Port : ${PORT}`));

