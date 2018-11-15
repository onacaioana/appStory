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

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// }
//);

app.listen(process.env.PORT || 8080);
