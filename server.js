// var express = require('express'),
//     fs = require('fs'),
//     bodyParser = require('body-parser');

// app = express();

// var options = {
//     key: fs.readFileSync('./ssl/key.pem'),
//     cert: fs.readFileSync('./ssl/cert.pem')
// };

// app.use(express.static(__dirname + '/public'))
//     .use(bodyParser.json());

// serverhttps = require('https')
//     .createServer(options, app);

// // Redirect http(80) to https(443)
// // http = express();
// // http.get('*', function(req, res) {
// //     res.redirect('https://tharris7.lab.novell.com' + req.url)
// // });
// // http.listen(80);
// asdfas
// serverhttps.listen(443);
// console.log(new Date() + ' Express server is listening securely on port ' + '443');


var path = require('path'),
    express = require('express');

var app =  express();

app.set('env', process.env.NODE_ENV || 'development');
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.engine('jade', require('jade').__express);

app.use(express.compress());

// static middleware - can be multiple dirs
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31536000000 /* 1 year - only do this if you version assets */ }));


app.use(express.logger({ format: 'dev' }));