var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buffer = new Buffer("I'm a string!", "utf-8");

app.get('/', function(request, response) {
//    fs.readFileSync('index.html', function(err, data) {
//	if (err) throw err;
//	buffer = data
//	response.send(buffer.toString());

//    buffer = fs.readFileSync('index.html');

    buffer.write(fs.readFileSync('./index.html','utf8'));

    response.send('Below is from the buffer');

    response.send(buffer.toString());

    response.send('Above is from the buffer.');


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
