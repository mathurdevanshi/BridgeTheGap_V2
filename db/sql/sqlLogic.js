///////////////////////////////////////////////////GETTING NEEDED PACKGES AND SAVING THEM
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var mysql = require("mysql");
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
    "WHERE (id = " +
    req.params.id +
    " AND fullName= '" +
    req.params.fullName +
    "' AND requestOrSupply= '" +
    req.params.requestOrSupply +
    "')";
  sql += "ORDER BY actionCreatedAt, category;";
  connection.query(sql, function(err, sqlResult) {
    if (err) {
      console.log("THERE IS AN ERROR! WARN THE TROOPS!");
      throw err;
    }
    res.json(sqlResult);
  });
});

/////////////////////////////////////////////////////// AGENCY SHOW ALL ITEMS FOR HOMELESS AND VOLUNTEER (CURRENTQUANTITY>0)

app.post("/api/agencyShowItemsClient/:fullName/:id/:requestOrSupply", function(
  req,
  res
) {
  var sql =
    "SELECT actionCreatedAt, category, descriptionOfItem, currentQuantity, actionZipCode ";
  sql += "FROM agencyInventoryManagementDB ";
  sql +=
    "WHERE (id = " +
    req.params.id +
    " AND fullName= '" +
    req.params.fullName +
    "' AND currentQuantity>0 " +
    " AND requestOrSupply= '" +
    req.params.requestOrSupply +
    "')";
  sql += "ORDER BY actionCreatedAt, category;";
  console.log("HERE IS THE SQL STATEMENT: ", sql);
  connection.query(sql, function(err, sqlResult) {
    if (err) {
      console.log("THERE IS AN ERROR! WARN THE TROOPS!");
      throw err;
    }
    res.json(sqlResult);
  });
});

/////////////////////////////////////////////////////// INCREMENT/DECREMENT BUTTON
app.post(
  "/api/updateAgency/:operator/:agencyActionId/:id/:requestOrSupply",
  function(req, res) {
    if (req.params.operator == "increase") {
      var sql = "UPDATE agencyInventoryManagementDB ";
      sql += "SET currentQuantity =  (currentQuantity+1) ";
      sql += "WHERE (agencyActionId = " + req.params.agencyActionId;
      sql +=
        " AND id =" +
        req.params.id +
        " AND requestOrSupply='" +
        req.params.requestOrSupply +
        "');";
    }
    if (req.params.operator == "decrease") {
      var sql = "UPDATE agencyInventoryManagementDB ";
      sql += "SET currentQuantity =  (currentQuantity-1) ";
      sql += "WHERE (agencyActionId = " + req.params.agencyActionId;
      sql +=
        " AND id =" +
        req.params.id +
        " AND requestOrSupply='" +
        req.params.requestOrSupply +
        "');";
    }
    console.log("HERE IS THE SQL STATEMENT: ", sql);
    connection.query(sql, function(err, sqlResult) {
      if (err) {
        console.log("THERE IS AN ERROR! WARN THE TROOPS!");
        throw err;
      }
      res.json(sqlResult);
    });
  }
);
/////////////////////////////////////////////////////// PERSON ASSIGNED TO AGENCY ACTION
app.post(
  "/api/assignToAgencyAction/:personAssignedID/:personAssignedQuantity/:agencyActionID/:/:requestOrSupply",
  function(req, res) {
    sql = "UPDATE agencyInventoryManagementDB ";
    sql += "SET personAssignedID = " + req.params.personAssignedID + ", ";
    sql += " personAssignedTimeOfAction= UTC_TIMESTAMP(), ";
    sql +=
      "personAssignedQuantity = " + req.params.personAssignedQuantity + ", ";
    sql += " currentQuantity = (currentQuantity-personAssignedQuantity) ";
    sql +=
      "WHERE agencyActionID = " +
      req.params.agencyActionID +
      " AND requestOrSupply = '" +
      req.params.requestOrSupply +
      "';";
    console.log(sql);
    connection.query(sql, function(err, sqlResult) {
      if (err) {
        console.log("THERE IS AN ERROR! WARN THE TROOPS!");
        throw err;
      }
      res.json(sqlResult);
    });
  }
);

/////////////////////////////////////////////////////// SHOW VOLUNTEERS COMMITED FOR AGENCY
app.post("/api/agencyVolunteerDisplayAll/:id", function(req, res) {
  sql =
    "SELECT volunteerInformationDB.fullName, volunteerInformationDB.phoneNumber, agencyInventoryManagementDB.category, agencyInventoryManagementDB.descriptionOfItem, agencyInventoryManagementDB.personAssignedQuantity ";
  sql += "FROM agencyInventoryManagementDB ";
  sql +=
    "INNER JOIN volunteerInformationDB ON agencyInventoryManagementDB.personAssignedID = volunteerInformationDB.id ";
  sql +=
    "WHERE (agencyInventoryManagementDB.requestOrSupply = 'request' AND agencyInventoryManagementDB.id =" +
    req.params.id +
    ");";
  console.log("Here is the sql statement: ", sql);
  connection.query(sql, function(err, sqlResult) {
    if (err) {
      console.log("THERE IS AN ERROR! WARN THE TROOPS!");
      throw err;
    }
    res.json(sqlResult);
  });
});

/////////////////////////////////////////////////////// SHOW VOLUNTEERS COMMITED FOR AGENCY FROM VOLUNTEER'S PERSPECTIVE
app.post("/api/volunteerAgencyDisplayAll/:personAssignedID", function(
  req,
  res
) {
  sql =
    "SELECT agencyInventoryManagementDB.fullName, agencyInformationDB.phoneNumber, agencyInventoryManagementDB.category, agencyInventoryManagementDB.descriptionOfItem, agencyInventoryManagementDB.personAssignedQuantity ";
  sql += "FROM agencyInventoryManagementDB ";
  sql +=
    "INNER JOIN volunteerInformationDB ON agencyInventoryManagementDB.personAssignedID = volunteerInformationDB.id ";
  sql +=
    "INNER JOIN agencyInventoryManagementDB ON agencyInventoryManagementDB.id = agencyInformationDB.id";
  sql +=
    "WHERE (agencyInventoryManagementDB.requestOrSupply = 'request' AND agencyInventoryManagementDB.personAssignedID =" +
    req.params.personAssignedID +
    ");";
  console.log("Here is the sql statement: ", sql);
  connection.query(sql, function(err, sqlResult) {
    if (err) {
      console.log("THERE IS AN ERROR! WARN THE TROOPS!");
      throw err;
    }
    res.json(sqlResult);
  });
});

/////////////////////////////////////////////////////// SHOW HOMELESS COMMITED FOR AGENCY
app.post("/api/agencyHomelessDisplayAll/:id", function(req, res) {
  sql =
    "SELECT homelessInformationDB.fullName, agencyInventoryManagementDB.category, agencyInventoryManagementDB.descriptionOfItem, agencyInventoryManagementDB.personAssignedQuantity, agencyInventoryManagementDB.currentQuantity ";
  sql += "FROM agencyInventoryManagementDB ";
  sql +=
    "INNER JOIN homelessInformationDB ON agencyInventoryManagementDB.personAssignedID = homelessInformationDB.id ";
  sql +=
    "WHERE (agencyInventoryManagementDB.requestOrSupply = 'supply' AND agencyInventoryManagementDB.id =" +
    req.params.id +
    ");";
  console.log("Here is the sql statement: ", sql);
  connection.query(sql, function(err, sqlResult) {
    if (err) {
      console.log("THERE IS AN ERROR! WARN THE TROOPS!");
      throw err;
    }
    res.json(sqlResult);
  });
});

///////////////////////////////////////////////////////DELETE AGENCY ITEM
app.post("/api/deleteItemAgency/:id/:actionId", function(req, res) {
  sql =
    "DELETE FROM agencyInventoryManagementDB WHERE (id = " +
    req.params.id +
    " AND agencyActionId = " +
    req.params.actionId +
    " );";
  console.log("Here is the sql statement: ", sql);
  connection.query(sql, function(err, sqlResult) {
    if (err) {
      console.log("THERE IS AN ERROR! WARN THE TROOPS!");
      throw err;
    }
    res.json(sqlResult);
  });
});

/////////////////////////////////////////////////////// RETURN TO STOCK
app.post("/api/returnToStock/:id/:agencyActionId/:personAssignedId", function(
  req,
  res
) {
  sql =
    "UPDATE agencyInventoryManagementDB SET currentQuantity = (currentQuantity + personAssignedQuantity) " +
    "WHERE (id = " +
    req.params.id +
    " AND agencyActionId = " +
    req.params.agencyActionId +
    " AND personAssignedId = " +
    req.params.personAssignedId +
    ");";
  console.log("Here is the sql statement: ", sql);
  connection.query(sql, function(err, sqlResult) {
    if (err) {
      console.log("THERE IS AN ERROR! WARN THE TROOPS!");
      throw err;
    }
    res.json(sqlResult);
  });
});

/////////////////////////////////////////////////////// LISTENING TO PORT
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
