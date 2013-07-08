var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buf = new Buffer("I'm a string", "utf8");

app.get('/', function(request, response) {
//    fs.readFileSync('index.html', function(err, data) {
//	if (err) throw err;
//	buffer = data
//	response.send(buffer.toString());

//    buffer = fs.readFileSync('index.html');

//    buffer.write(fs.readFileSync('./index.html','utf8'));

//    response.send('The buffer now is ' + buf.toString('utf8') + '\n');


//    fs.readFileSync('./index.html', function(err, buf) {
//	if (err) throw err;
//	});


    response.send('Below is from the buffer');

    response.send(buf.toString('utf8'));

    response.send('Above is from the buffer.');


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
