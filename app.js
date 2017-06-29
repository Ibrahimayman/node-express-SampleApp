var express = require('express');
var app = express();

//set view engine.
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    //res.send("<h1>hello express</h1>");
    res.render("default");
});

app.get("/me", function (req, res) {
    res.send("<h1>@plain to the web</h1>");
});

app.get("/who/:name?", function (req, res) {
    var name = req.params.name;
    res.send(name + " was here");
});

app.get("/who/:name?/:title?", function (req, res) {
    var name = req.params.name;
    var title = req.params.title;
    res.send(name + " was here ... you sent title : " + title);
});

app.get("*", function (req, res) {
    res.send("bad route");
});

var server = app.listen(3000, function () {
    console.log("app running on port : 3000");
});