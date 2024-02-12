const http = require("http");
const fs = require("fs");
const url = require("url");

function myHandler(req, res) {
    if (req.url === "/favicon.ico") return res.end();
    // console.log(req.headers);
    // console.log("New Request");
    const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                if (req.method === "GET") res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here are your results for " + search);
                break; // Adding a break here to prevent fall-through
            case "/signup":
                if (req.method === "GET") res.end("This is a signup Form");
                else if (req.method === "POST") {
                    res.end("Success");
                }
                break; // Adding a break here to prevent fall-through
            default:
                res.end("404 Not found");
        }
    });
};

const myServer = http.createServer(myHandler);

myServer.listen(8080, () => console.log("Server Started"));
