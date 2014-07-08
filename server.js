var express = require('express');
var fs = require('fs');

app = express();
STATIC_DIR = __dirname + '/public';

var options = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
};

serverhttps = require('https')
    .createServer(options, app);

app.configure(function() {
    app.use(express.static(STATIC_DIR));
    app.use(express.bodyParser());
});


// Redirect http(80) to https(443)
http = express();
http.get('*', function(req, res) {
    res.redirect('https://tharris7.lab.novell.com' + req.url)
});
http.listen(80);

serverhttps.listen(443);
console.log(new Date() + ' Express server is listening securely on port ' + '443');