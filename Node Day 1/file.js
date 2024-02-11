 const fs = require("fs");

fs.writeFileSync("./text.txt","Hello World!");  //sync


fs.writeFile("./text.txt", "Lets get started with node",(err) => {"ok"});

const result = fs.readFileSync("./contacts.txt", "utf8");  //sync  returns a value
console.log(result);

fs.readFile("./contacts.txt", "utf8", (err, result) => {
  if(err) {
    console.log("Error",err);
  }else {
    console.log(result);
  }
});                       //async does ot return anything but it takes callback as argumnent

const adddata = fs.appendFileSync("./text.txt",`\n Hey There\n`);

 fs.mkdirSync("Server");

