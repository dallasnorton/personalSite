var path = require('path'),
    express = require('express'),
    compression = require('compression'),
    serveStatic = require('serve-static'),
    logger = require('morgan');

var app =  express();

app.set('env', process.env.NODE_ENV || 'development');
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.engine('jade', require('jade').__express);

app.use(compression());

// static middleware - can be multiple dirs
app.use(serveStatic(path.join(__dirname, 'public')));


app.use(logger({ format: 'dev' }));

var port = process.env.PORT || 8080;

app.listen(port, function(err) {
    if(err) return console.error('Error starting server: ', err);

    console.log('Http server started @ http://localhost:'+port);
});
