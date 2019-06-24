const userOrm = require("../config/userOrm");

// Defining methods for the booksController
module.exports = {
  saveUser: function(req, res) {
    userOrm.someTestFunction(req.body);
  }
};
