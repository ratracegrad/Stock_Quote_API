$(document).ready(function() {

    $('.getStock').submit(function(event) {
        event.preventDefault();

        var stockSymbol = $('#stockSymbol').val();

        $.ajax({
                   url: '/api/stock',
                   type: 'POST',
                   data: {stockSymbol: stockSymbol},
                   success: function(data) {
                       var stock = JSON.parse(data);
                       if (!stock.Message) {
                           $('#stockName').text(stock.Name);
                           $('#symbol').text(stock.Symbol);
                           $('#stockLastPrice').text(stock.LastPrice);
                           $('#stockHigh').text(stock.High);
                           $('#stockLow').text(stock.Low);
                           $('#stockVolume').text(stock.Volume);
                       } else {
                           $('#stockName').text('');
                           $('#symbol').text('');
                           $('#stockLastPrice').text('');
                           $('#stockHigh').text('');
                           $('#stockLow').text('');
                           $('#stockVolume').text('');
                           alert(stock.Message);
                       }
                       $('#stockSymbol').val('');

                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                       console.log('error from error', textStatus);
                   }
               });
    });

});