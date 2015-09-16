var express = require('express');
var utility = require('utility');

var app = express();

app.get ('/', function (request, response) {
	var content = request.query.content;
	var md5Value = utility.md5(content);
	
	response.send('The md5 value of ' + content + ' is:\n' +  md5Value);
});

app.listen (3000, function (request, response) {
	console.log('App is listening port 3000!');
});
