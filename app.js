'use strict';

// ================================================================
// get all the tools we need
// ================================================================
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes/index.js');
var port = process.env.PORT || 3000;

var app = express();


// ================================================================
// setup our express application
// ================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');


// ================================================================
// setup routes
// ================================================================
routes(app);


// ================================================================
// start our server
// ================================================================
app.listen(port, function(err) {
    console.log('Server running on port: ' + port);
});
