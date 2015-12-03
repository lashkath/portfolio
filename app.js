var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('app'));

app.get('/', function(request, response) {
  response.sendFile( __dirname + '/app/index.html' );
});

app.listen(app.get('port'), function() {
  console.log('Running on port', app.get('port'));
});