var express = require('express');
var request = require('request');
var app = express();
var port = (process.env.PORT || 3000);

app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/views/index.html');
});

// proxy to realtime traffic from Performance
/*app.get('/realtime', function(req, res) {
  request('https://www.performance.service.gov.uk/data/government/realtime?sort_by=_timestamp%3Adescending&limit=1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  });
});*/


// start the app

app.listen(port);

console.log('');
console.log('Listening on port ' + port);
console.log('');