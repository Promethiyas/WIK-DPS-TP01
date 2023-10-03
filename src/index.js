"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use(function (req, res, next) {
    if (req.originalUrl != "/ping") {
        res.send('ERROR 404');
    }
    else {
        var headers = req.headers;
        res.json(headers);
    }
});
app.get('/', function (req, res) {
    res.send('ERROR 404');
});
app.get('/ping', function (req, res) {
    var headers = req.headers;
    res.json(headers);
});
app.listen(3000, function () {
    console.log('The application is listening on port 3000!');
});
