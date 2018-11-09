const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use('/pdf', express.static(__dirname + '/1.pdf'));

var fs = require("fs");
app.get('/asset', function(request, response){
  var tempFile=__dirname + "build/1.pdf";
  fs.readFile(tempFile, function (err,data){
     response.contentType("application/pdf");
     response.send(data);
  });
});

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);