// const userOrm = require("../config/userOrm");
// //const bcrypt = require("bcrypt");
// // jwt token configuration
// const fs = require("fs");
// const jwt = require("jsonwebtoken");
// const privateKey = fs.readFileSync("private.key");
// Defining methods for the booksController
module.exports = {
  registerUser: function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let saltRounds = 10;

    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) {
        console.log(err);
      } else {
        bcrypt.hash(password, salt, function(err, hash) {
          if (err) {
            console.log(err);
          } else {
            let newUser = {
              username: username,
              password: hash
            };

            userOrm.saveUser(newUser);

            jwt.sign(
              { user: newUser },
              privateKey,
              { expiresIn: "2h" },
              (error, token) => {
                console.log("token is being created and sent");
                res.json({
                  token: token
                });
              }
            );
          }
        });
      }
    });
    console.log(username, password);
  },
  loginUser: function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    userOrm.findUser(username, authUser => {
      console.log(authUser[0].password);
      bcrypt.compare(password, authUser[0].password, function(
        err,
        samepasword
      ) {
        if (err) {
          console.log(err);
        } else if (samepasword) {
          console.log("User has been authorized");
          jwt.sign(
            { user: authUser[0].username },
            privateKey,
            { expiresIn: "2h" },
            (error, token) => {
              console.log("token is being created");
              res.json({
                token: token
              });
            }
          );
        } else {
          console.log("Users creds don't match");
        }
      });
    });
  }
};
