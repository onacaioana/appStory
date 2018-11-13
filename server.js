const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use("/ass", express.static("files"));

app.get("/ass", function(req, res) {
  var fileName1 = req.query.fileName;
  var filePath = fileName1;
  fs.readFile(filePath, "base64", function(err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/ping", function(req, res) {
  return res.send("pong");
});

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// }
//);

app.listen(process.env.PORT || 8080);
