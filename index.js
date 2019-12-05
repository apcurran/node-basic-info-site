const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/home" || req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(`${__dirname}/pages/index.html`).pipe(res);
    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(`${__dirname}/pages/contact-me.html`).pipe(res);
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(`${__dirname}/pages/about.html`).pipe(res);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        fs.createReadStream(`${__dirname}/pages/404.html`).pipe(res);
    }
});

server.listen(8080);