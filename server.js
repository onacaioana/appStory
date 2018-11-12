const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const fs = require("fs");
app.use(express.static(path.join(__dirname, 'build')));
app.use('/pdf', express.static(__dirname + '/1.pdf'));

app.get('/ass', function (req, res) {
  var filePath = "/files/1.pdf";

  fs.readFile(__dirname + filePath ,"base64", function (err,data){
      res.contentType("application/pdf");
      res.send(data);
  });
});

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);