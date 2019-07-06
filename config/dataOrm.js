const connection = require("./connection");

// 

let ormObject = {
    grabData: (authorizedId, callback) => {
        // console.log(req);
        console.log("grabbing the data");
        let queryString = "SELECT actionCreatedAt, descriptionOfItem, currentQuantity, actionZipCode ";
        queryString += " FROM agencyInventoryManagementDB ";
        queryString += "WHERE (id = ?) ORDER BY actionCreatedAt, category;"

        connection.query(queryString,[authorizedId], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                callback(result);
            }
        });
    }
}

module.exports = ormObject;