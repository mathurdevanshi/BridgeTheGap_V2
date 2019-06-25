///////////////////////////////////////////////////GETTING NEEDED PACKGES AND SAVING THEM
var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var mysql = require("mysql");
const path = require("path");
const router = express.Router();

app.use(express.json());
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(
  bodyParser.json({
    type: "application/*+json"
  })
);
app.use(express.static("public"));

/////////////////////////////////////////////////////// CONNECTING TO SQL
var connection = mysql.createConnection({
  host: "localhost",
  user: "webuser",
  password: "UCR",
  database: "bridgeTheGapDB"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
/////////////////////////////////////////////////////// AGENCY DISPLAY ALL ITEMS
app.post("/api/agencySupplyAddItem", function(req, res) {
  res.json({ Hello: "World" });
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
