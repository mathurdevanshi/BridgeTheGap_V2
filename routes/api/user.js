const router = require("express").Router();
const user = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .get(user.tester)


module.exports = router;
