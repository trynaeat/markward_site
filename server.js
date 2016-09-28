// Requires etc
var express = require('express'),
    http = require('http'),
//    https = require('https'),
    app = express();


// Routes
app.use(express.static(__dirname + '/client/public'));

http.createServer(app).listen(3000, function() {
  console.log("Listening on port 3000.");
});
//var options = null;
//https.createServer(options, app).listen(443);
