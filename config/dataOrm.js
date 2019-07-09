const connection = require("./connection");

// 

let ormObject = {
    grabData: (authorizedId, callback) => {
        // console.log(req);
        console.log("grabbing the data");
        let queryString = "SELECT category, descriptionOfItem, currentQuantity ";
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
                data.descriptionOfItem,
                data.currrentQuantity,
                data.currentQuantity,

            ],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("no error");
                    callback(result);

                }
            }
        );
    },

    getAllAgencyData: (callback) => {
        // console.log("dataOrm is reached");
        let queryString = "SELECT * FROM agencyinformationdb ";
        queryString += "LEFT JOIN agencyinventorymanagementdb ";
        queryString += "ON agencyinformationdb.id = agencyinventorymanagementdb.id;";
        
        connection.query(queryString, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                // console.log(result);
                callback(result);
            }
        })
    }   
}

module.exports = ormObject;