// Requires etc
var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    emailController = require('./server/controllers/emailController.js'),
//    https = require('https'),
    app = express();

// config
app.use(bodyParser.json());

// Routes
app.use('/client', express.static(__dirname + '/client'));

app.get('/home*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res) {
  res.redirect('/home');
});

app.post('/api/email', emailController.send);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/404.html');
});

http.createServer(app).listen(3000, function() {
  console.log("Listening on port 3000.");
});
//var options = null;
//https.createServer(options, app).listen(443);
