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
/////////////////////////////////////////////////////// AGENCY INSERT ITEM
app.post("/api/agencyAddItem/:fullName/:id/:requestOrSupply", function(
  req,
  res
) {
  var sql = "INSERT INTO agencyInventoryManagementDB ";
  sql +=
    "(id, fullName, requestOrSupply, category, descriptionOfItem, originalQuantityPlaced, currentQuantity,actionZipCode) ";
  sql += "VALUES ";
  sql += "(?,?,?,?,?,?,?,?);";
  connection.query(
    sql,
    [
      req.params.id,
      req.params.fullName,
      req.params.requestOrSupply,
      req.body.category,
      req.body.descriptionOfItem,
      req.body.originalQuantityPlaced,
      req.body.originalQuantityPlaced,
      req.body.actionZipCode
    ],
    function(err, sqlResult) {
      if (err) {
        console.log("THERE IS AN ERROR! WARN THE TROOPS!");
        throw errl;
      }
      var sql = "SELECT * FROM agencyInventoryManagementDB;";
      connection.query(sql, function(err, sqlResult) {
        if (err) {
          console.log("AAAAAHHHH!!! SO. MANY. MISTAKES.");
          throw err;
        }
        res.json(sqlResult);
      });
    }
  );
});

/////////////////////////////////////////////////////// AGENCY SHOW ALL ITEMS

app.post("/api/agencyShowItems/:fullName/:id/:requestOrSupply", function(
  req,
  res
) {
  var sql =
    "SELECT actionCreatedAt, category, descriptionOfItem, currentQuantity, actionZipCode ";
  sql += "FROM agencyInventoryManagementDB ";
  sql +=
    "WHERE id = " +
    req.params.id +
    ", fullName= '" +
    req.params.fullName +
    "', requestOrSupply= " +
    req.params.requestOrSupply +
    ",";
  sql += "ORDER BY actionCreatedAt, category;";
  console.log("Here is the sql statement: ", sql);
  connection.query(sql, function(err, sqlResult) {
    if (err) {
      console.log("THERE IS AN ERROR! WARN THE TROOPS!");
      throw err;
    }
    var sql = "SELECT * FROM agencyInventoryManagementDB;";
    connection.query(sql, function(err, sqlResult) {
      if (err) {
        console.log("AAAAAHHHH!!! SO. MANY. MISTAKES.");
        throw err;
      }
      res.json(sqlResult);
    });
  });
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
