// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.use(function(request, response, next) {
    var newHost = request.host.replace(/[https*:\\]*www./, '');
    if (request.host != newHost) {
        // 301 is a "Moved Permanently" redirect.
        res.redirect(301, request.protocol + "://" + newHost + request.url);
    } else {
        next();
    }
});

app.get('/', function(req, res) {
    res.send('Check it out Brad!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});