var request = require('request');
var parseString = require('xml2js').parseString;

request('http://www.boardgamegeek.com/xmlapi2/thing?id=120677&stats=1', function (error, response, body) {
    if (!error){
        parseString(body, function (err, result) {
            parsedResult=JSON.parse(JSON.stringify(result));
            console.log('Game Description = ' + parsedResult.items.item[0].description[0]);
            console.log('Game Rating = ' + parsedResult.items.item[0].statistics[0].ratings[0].average[0].$.value); //well ugly
        });
    }
});
