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


// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// }
//);

app.listen(process.env.PORT || 8080);
