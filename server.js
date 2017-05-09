// Requires etc
var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    emailController = require('./server/controllers/emailController.js'),
//    https = require('https'),
    mysql = require('mysql'),
    app = express();

// config
app.use(bodyParser.json());
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'node',
  password: 'node',
  database: 'markward_site'
});
connection.connect();
console.log("Connected to DB.");

// Routes
app.use('/client', express.static(__dirname + '/client'));

app.get('/home*', function(req, res) {
  // Send the webpage. Angular will handle all other routing.
  res.sendFile(__dirname + '/index.html');
  // Keep a hit counter of unique visitors
  var ip;
  if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(',')[0];
  } else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.ip;
  }
  var update = 'INSERT INTO hit_table (ip, hits) VALUES (\'' + ip + '\', 1) ON DUPLICATE KEY UPDATE hits=hits+1;';
  connection.query(update, function(err) {
    if(err) {
      console.log(err);
    }
  });
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
