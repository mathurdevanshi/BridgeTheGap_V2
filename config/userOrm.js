const connection = require("./connection");

//Final end to the chain of callback functions

let ormObject = {
    saveClient: (req,res) => {
        let query= "INSERT INTO homelessinformationdb ";
        query += "(id, fullname, accountType, email, phoneNumber, zipCode, stateName, username, userPassword) ";
        query += "VALUES ";
        query += "(?,?,?,?,?,?,?,?,?);";
        
        let fullName = req.firstname + " " + req.lastname;

        connection.query(
            query, 
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
                } else {
                    console.log(result);
                }
            }
        )
    },

    saveUser: (req, res) => {
        let query= "INSERT INTO ";
        console.log(req);

        if (req.category === "agency") {

            query += "agencyinformationdb ";

        } else if (req.category === "volunteer") {

            query += "volunteerinformationdb"

        };

        query += "(id, fullName, accountType, email, phoneNumber, streetName, city, zipCode, stateName, username, userPassword) ";
        query +="VALUES (?,?,?,?,?,?,?,?,?,?,?);";
        
        connection.query(query,
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

        });
    },

    findUser: (req, callback) => {
        let query = "SELECT id FROM user WHERE username = ?;"

        connection.query(query, [req], function(err, result) {
            if (err) {
                console.log(err);
            }   else {
                callback(result);
            }

        })
    }
};

module.exports = ormObject;

