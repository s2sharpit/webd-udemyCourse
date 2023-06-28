const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, World!</h1>")
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: tusharpitkapoor@gmail.com")
})

app.get("/about", function(req, res) {
    res.send("My name is Tushar Saini.")
})

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Coffe</li><li>Code</li><li>Tea</li></ul>")
})

app.listen(3000, function() {
    console.log('Server started on port 3000');
});