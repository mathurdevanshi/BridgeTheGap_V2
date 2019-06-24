const connection = require("./connection");

//Final end to the chain of callback functions

let ormObject = {
    someTestFunction: (req, res) => {
        // console.log("ormObject", res);
        let query = "INSERT INTO users (username, password) VALUES (?, ?);"

        connection.query(query, [req.username, req.password], function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }

        })
    }
};

module.exports = ormObject;

