const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

 const app = express();
app.use(cors());

app.use("/ass", express.static("PDFs"));

app.get("/ass", function (req, res) {
  var fileName1 = req.query.fileName;
  var filePath = '/PDFs/' + fileName1;
  fs.readFile(__dirname + filePath, "base64", function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});



function getDirectoryContent(req, res, next) {
  var imagePath = path.join(path.resolve(__dirname), req.query.folderName);
  fs.readdir(imagePath, function (err, images) {
    if (err) { return next(err); }
    res.locals.filenames = images;
    next();
  });
}

app.get('/getFiles', getDirectoryContent, function (req, res) {
  // build a response using res.locals.filenames here.
  // just sending the names is silly, and so for demonstration only
  res.send(res.locals.filenames);
});


var walk = function (dir, done) {
  var results = [];
var j=0;
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    var i = 0;
    var j=0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file1 = dir + '/' + file;
      fs.stat(file1, function (err, stat) {
        if (stat && stat.isDirectory()) {

          walk(file1, function (err, res) {
            results.push([res]);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
};

app.get("/getFilesRecursive", function (req, res) {
  var imagePath = path.join(path.resolve(__dirname), req.query.folderName);
  walk(imagePath, function (err, results) {
    if (err) throw err;
   res.send(results);
  });
});


// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// }
//);

app.listen(process.env.PORT || 8081);
