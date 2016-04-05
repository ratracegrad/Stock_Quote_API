'use strict';

// ================================================================
// get all the tools we need
// ================================================================
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes/index.js');
var mongoose = require('mongoose');
var dotenv = require('dotenv');


// ================================================================
// get environment variables and start server
// ================================================================
dotenv.load();
var port = process.env.PORT || 3000;
var dbURI = process.env.MONGODB || process.env.MONGOLAB_URI

var app = express();


// ================================================================
// Connect to database (only start server if connected)
// ================================================================
mongoose.connect(dbURI);
mongoose.connection.on('error', function() {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);

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
});