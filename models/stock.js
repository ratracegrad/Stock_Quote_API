var mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
    Name:               String,
    Symbol:             String,
    LastPrice:          Number,
    Change:             Number,
    ChangePercent:      Number,
    MarketCap:          Number,
    Volume:             Number,
    ChangeYTD:          Number,
    ChangePercentYTD:   Number,
    High:               Number,
    Low:                Number,
    Open:               Number
});

var Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;