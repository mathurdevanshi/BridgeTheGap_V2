const dataOrm = require("../config/dataOrm");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("private.key");

function checkToken(uncheckedToken) {
    console.log("token is being passed into check function\n", uncheckedToken);
    if (typeof uncheckedToken !== undefined) {
        console.log("token has been checked");
        let checkedToken = uncheckedToken.test;

        return checkedToken;
    } else {
        return 403;
    }

}
module.exports = {
    checkIfAuthorizedGrabData: (req, res) => {

        // dataOrm.grabData();
        let token = checkToken(req.body);
        console.log(token);
        
        jwt.verify(token, privateKey, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json({
                    authData: authData
                })
            }
        })
    }
}

