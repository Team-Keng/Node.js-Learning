var express = require('express');
var utility = require('utility');

var app = express();

app.get ('/', function (request, response) {
	//这里添加content对应的内容，打印出来更好看
	var content = request.query.content;
	var md5Value = utility.md5(content);
	
	response.send(content + '的MD5值是: ' +  md5Value);
});

app.listen (3000, function (request, response) {
	console.log('应用在监听3000端口！');
});
