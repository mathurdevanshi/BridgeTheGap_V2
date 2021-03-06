const connection = require("./connection");

//Final end to the chain of callback functions

let ormObject = {
    saveClient: (req,res) => {
        let queryString= "INSERT INTO homelessinformationdb ";
        queryString += "(id, fullname, accountType, email, phoneNumber, zipCode, stateName, username, userPassword) ";
        queryString += "VALUES ";
        queryString += "(?,?,?,?,?,?,?,?,?);";
        
        let fullName = req.firstname + " " + req.lastname;

        connection.query(
            queryString, 
            [
                req.id,
                fullName,
                req.category,
                req.email,
                req.phoneNumber,
                req.zip,
                req.state,
                req.username,
                req.password
            ],
            function (err, result) {
                if (err) {
                    console.log(err);
                } 
            }
        )
    },

    saveUser: (req) => {
        console.log();
        
        let queryString= "INSERT INTO agencyInformationDB ";
        queryString += "(id, fullName, accountType, email, phoneNumber, streetName, city, zipCode, stateName, username, userPassword) ";
        queryString +="VALUES (?,?,?,?,?,?,?,?,?,?,?);";
        
        connection.query(queryString,
            [ 
              req.id,
              req.name,
              req.category,
              req.email,
              req.phoneNumber,
              req.address,
              req.city,
              req.zip,
              req.state,
              req.username,
              req.password
            ], 
            
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result); 
                }
            }
        );
    },

    findUser: (req, callback) => {
        let queryString = "SELECT * FROM agencyInformationDB WHERE username = ?;"

        connection.query(queryString, [req], function(err, result) {
            callback(result);

        })
    }
};

module.exports = ormObject;

