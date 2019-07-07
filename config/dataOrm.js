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
    },

    insertDataIntoInventory: (data, callback) => {
        console.log(data);

        let queryString = "INSERT INTO agencyInventoryManagementDB ";
        queryString += "(id, requestOrSupply, category, descriptionOfItem, originalQuantityPlaced, currentQuantity) "
        queryString += "VALUES ";
        queryString += "(?,?,?,?,?,?);";

        connection.query(queryString,
            [
                data.userId,
                data.action,
                data.category,
                data.itemName,
                data.quantity,
                data.quantity,

            ],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);

                }
            }
        );
    }
}

module.exports = ormObject;