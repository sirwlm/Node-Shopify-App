var config = require('./config');
var express = require('express');
var session = require('express-session');
var app = express();

var http = require('http').Server(app);

var routes = require('./routes.js');

// session configuration
app.use(session({
    secret: config.sessions.session_secret,
    resave: false,
    saveUninitialized: false
}));

// include routes
app.use('/', routes);

// start the server
http.listen(config.port, function () {
    console.log('-> listening on port : ' + config.port);
});