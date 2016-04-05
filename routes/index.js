'use strict';

var request = require('request');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {stockDetails: {}} );
    });

    app.post('/api/stock', function(req, res) {

        var query = {
            'symbol': req.body.stockSymbol
        };

        var options = {
            url: 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json',
            method: 'POST',
            //headers: {
            //    'Content-Type': 'application/json'
            //},
            qs: query
        }

        request(options, function(err, request, body) {
            res.json(body);
        });
    });

};