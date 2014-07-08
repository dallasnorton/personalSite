var express = require('express'),
	fs = require('fs'),
	bodyParser = require('body-parser');

app = express();

var options = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
};

app.use(express.static(__dirname + '/public'))
   .use(bodyParser.json());

serverhttps = require('https')
    .createServer(options, app);

// Redirect http(80) to https(443)
// http = express();
// http.get('*', function(req, res) {
//     res.redirect('https://tharris7.lab.novell.com' + req.url)
// });
// http.listen(80);

serverhttps.listen(443);
console.log(new Date() + ' Express server is listening securely on port ' + '443');