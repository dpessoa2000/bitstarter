var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buf = new Buffer("This is a string", "utf-8");

app.get('/', function(request, response) {
    buf = fs.readFileSync('index.html');
//    response.send(buf.toString('utf-8'));
//    console.log(buf.toString('utf-8'));
    response.send('Hello world 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
