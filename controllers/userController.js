const userOrm = require("../config/userOrm");

// Defining methods for the booksController
module.exports = {
  tester: function() {
    userOrm.someTestFunction();
  }
};
