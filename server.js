const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const fs = require("fs");
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ass', function (req, res) {
  var fileName1 = req.query.fileName;
  var filePath = fileName1;
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