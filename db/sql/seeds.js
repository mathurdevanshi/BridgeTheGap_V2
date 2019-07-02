//CONNECTIONS AND NEEDED PACKAGED
const faker = require("faker");
var mysql = require("mysql");

//VARIABLES
var id;
var fullName;
var accountType;
var email;
var phoneNumber;
var streetName;
var city;
var zipCode;
var stateName;
var username;
var userPassword;

var connection = mysql.createConnection({
  host: "localhost",
  user: "webuser",
  password: "UCR",
  database: "bridgeTheGapDB"
});

///////////////////////////////////////////////////////////////////////// CREATING FAKE DATA FOR AGENCY INFORMATION DB
connection.connect(function(err) {
  //connecting to SQL
  if (err) throw err;
  console.log("Connected!");

  for (let index = 0; index < 50; index++) {
    //generating fake data for agency
    id = parseInt(Math.random() * 1000000000000);
    fullName = faker.company.companyName();
    accountType = "agency";
    email = faker.internet.email();
    phoneNumber = faker.phone.phoneNumber();
    streetName = faker.address.streetAddress();
    city = faker.address.city();
    zipCode = faker.address.zipCode();
    stateName = faker.address.state();
    username = email;
    userPassword = faker.company.catchPhrase();

    var sql =
      "INSERT INTO agencyInformationDB " +
      "(id, fullName, accountType, email, phoneNumber, streetName, city, zipCode, stateName, username, userPassword) " +
      "VALUES " +
      "(?,?,?,?,?,?,?,?,?,?,?);";
    // console.log("Here is the sql query: ", sql);
    connection.query(sql, [
      id,
      fullName,
      accountType,
      email,
      phoneNumber,
      streetName,
      city,
      zipCode,
      stateName,
      username,
      userPassword
    ]),
      function(err, sqlResult) {
        if (err) {
          console.log(
            "ummmm....I don't know how to tell this to you, but something has gone very wrong."
          );
          throw err;
        }
      };
  }
  ///////////////////////////////////////////////////////////////////////// CREATING FAKE DATA FOR HOMELESS INFORMATION DB
  for (let index = 0; index < 50; index++) {
    //generating fake data for agency
    id = parseInt(Math.random() * 10000000);
    fullName = faker.name.findName();
    accountType = "homeless";
    email = faker.internet.email();
    phoneNumber = faker.phone.phoneNumber();
    zipCode = faker.address.zipCode();
    stateName = faker.address.state();
    username = email;
    userPassword = faker.company.catchPhrase();

    var sql =
      "INSERT INTO homelessInformationDB " +
      "(id, fullName, accountType, email, phoneNumber, zipCode, stateName, username, userPassword) " +
      "VALUES " +
      "(?,?,?,?,?,?,?,?,?);";
    // console.log("Here is the sql query: ", sql);
    connection.query(sql, [
      id,
      fullName,
      accountType,
      email,
      phoneNumber,
      zipCode,
      stateName,
      username,
      userPassword
    ]),
      function(err, sqlResult) {
        if (err) {
          console.log(
            "ummmm....I don't know how to tell this to you, but something has gone very wrong."
          );
          throw err;
        }
      };
  }
  ///////////////////////////////////////////////////////////////////////// CREATING FAKE DATA FOR VOLUNTEER INFORMATION DB
  for (let index = 0; index < 50; index++) {
    //generating fake data for agency
    id = parseInt(Math.random() * 10000000);
    fullName = faker.company.companyName();
    accountType = "volunteer";
    email = faker.internet.email();
    phoneNumber = faker.phone.phoneNumber();
    streetName = faker.address.streetAddress();
    city = faker.address.city();
    zipCode = faker.address.zipCode();
    stateName = faker.address.state();
    username = email;
    userPassword = faker.company.catchPhrase();

    var sql =
      "INSERT INTO volunteerInformationDB " +
      "(id, fullName, accountType, email, phoneNumber, streetName, city, zipCode, stateName, username, userPassword) " +
      "VALUES " +
      "(?,?,?,?,?,?,?,?,?,?,?);";
    // console.log("Here is the sql query: ", sql);
    connection.query(sql, [
      id,
      fullName,
      accountType,
      email,
      phoneNumber,
      streetName,
      city,
      zipCode,
      stateName,
      username,
      userPassword
    ]),
      function(err, sqlResult) {
        if (err) {
          console.log(
            "ummmm....I don't know how to tell this to you, but something has gone very wrong."
          );
          throw err;
        }
      };
  }
});
