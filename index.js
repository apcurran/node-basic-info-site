const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/pages/index.html`);
});

app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/pages/about.html`);
});

app.get("/contact", (req, res) => {
    res.sendFile(`${__dirname}/pages/contact-me.html`);
});

// Last route, redirect missing to 404
app.get("*", (req, res) => {
    res.sendFile(`${__dirname}/pages/404.html`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
});

app.listen(8080);