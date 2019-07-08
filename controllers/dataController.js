const dataOrm = require("../config/dataOrm");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("private.key");
let authorizedId;

function checkToken(uncheckedToken) {
    console.log("token is being passed into check function\n", uncheckedToken);
    if (typeof uncheckedToken !== undefined) {
        console.log("token has been checked");
        let checkedToken = uncheckedToken.authorized;

        return checkedToken;
    } else {
        return 403;
    }

};

module.exports = {
    checkIfAuthorizedGrabData: (req, res) => {

        let token = checkToken(req.body);
        // console.log(token);
        
        jwt.verify(token, privateKey, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                // console.log(authData.userId.userId);
                authorizedId = authData.userId.userId;
                
                // Here is where we would make the call to grab data and send to front end
                dataOrm.grabData(authorizedId, (result) => {
                    console.log(result);
                    res.send(result);
                });
            }
        })
    },

    insertData: (req, res) => {
        console.log(req.body);
        let inventoryData = req.body;

        inventoryData.action = "supply";
        inventoryData.userId = authorizedId;

        dataOrm.insertDataIntoInventory(inventoryData, (result) => {
            if (result) {
                console.log("noerror in data controller");
                res.sendStatus(200);
            } else {
                console.log(result);
            }
        })
    }
}

