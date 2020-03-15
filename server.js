"use strict";
exports.__esModule = true;
var express_1 = require("express");
var port = 300;
var app = express_1["default"]();
app.get('/', function (req, res) {
    app.send("hello");
});
app.get('/dogs', function (req, res) {
    app.send("this is a dog");
});
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
