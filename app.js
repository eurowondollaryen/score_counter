var express = require('express');
const app = express();
var fs = require('fs');
var path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, function() {
	console.log("Server start.");
});
app.get('/', function(req, res) {
	fs.readFile('index.html', function(err, data) {
		if(err) {
			console.log(err);
		}
		else {
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(data);
		}
	});
});