//Unbelievable-Edition
//2015-09-06

//express组件
var express = require('express');

//express实例化
var app = express();

//例子代码写的缩略request, response对应HTTP的请求和相应
app.get('/', function (request, response) {
  response.send('Team-坑第一次提交 耶');
});

//监听3000端口的网络请求，并在Console里面打印信息
app.listen(3000, function () {
  console.log('Node.js 正在监听端口:3000!');
});