const userOrm = require("../config/userOrm");
const bcrypt = require("bcrypt");

// jwt token configuration
const fs = require("fs");
const jwt = require("jsonwebtoken");
const privateKey = fs.readFileSync("private.key");

// Defining methods for the userController
module.exports = {
  registerClient: (req, res) => {
    let newUser = req.body;
    newUser.id = parseInt(Math.random() * 10000000);
    console.log(newUser);

    let saltRounds = 10;
    
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) {
        console.log(err);
      } else {
        
        bcrypt.hash(newUser.password, salt, function(err, hash) {

          if (err) {
            console.log(err);
          } else {
              newUser.password = hash;

              let userId = {
                userId: newUser.id,
              };
              // Save user 
              userOrm.saveUser(newUser, (err, result) => {
                if (err) {
                  res.send(err);
                } else if(result) {
                  jwt.sign({ userId }, privateKey, { expiresIn: "2h" }, (error, token) => {
                    console.log("token is being created and sent");
                    res.json({
                      token: token
                    });
                  });
                }
              });
              
            };
        });
      };
    });
  },

  registerUser: function(req, res) {
    let newUser = req.body;
    newUser.id = parseInt(Math.random() * 10000000);
    console.log(newUser);

    let saltRounds = 10;
    
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) {
        console.log(err);
      } else {
        
        bcrypt.hash(newUser.password, salt, function(err, hash) {

          if (err) {
            console.log(err);
          } else {
              newUser.password = hash;

              let userId = {
                userId: newUser.id,
              };
              // Save user 
              userOrm.saveUser(newUser);

              jwt.sign({ userId }, privateKey, { expiresIn: "2h" }, (error, token) => {
                console.log("token is being created and sent");
                res.json({
                  token: token
                });
              });
              
            };
        });
      };
    });
  },

  loginUser: function(req, res) {

    let username = req.body.username;
    let password = req.body.password;

    userOrm.findUser(username, (authUser) => {

      bcrypt.compare(password, authUser[0].userPassword, function(err, samepasword) {        
        if (err) {
          console.log(err);
        } else if (samepasword) {
          console.log("User has been authorized");
          console.log(authUser[0].id);

          let userId = {
            userId : authUser[0].id
          };

          jwt.sign({userId}, privateKey, { expiresIn: "2h" }, (error, token) => {
            console.log("token is being created");

            res.json({
              token: token
            });
            
          });
          
        } else {
          console.log("Users creds don't match");
        };
      });
    });
  }
};
