const connection = require("./connection");

//Final end to the chain of callback functions

let ormObject = {
    saveUser: (req, res) => {
        let query = "INSERT INTO user (username, password) VALUES (?, ?);"

        connection.query(query, [ req.username, req.password ], function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }

        })
    },

    findUser: (req, callback) => {
        let query = "SELECT * FROM user WHERE username = ?;"

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

