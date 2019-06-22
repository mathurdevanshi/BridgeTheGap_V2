const router = require("express").Router();
const user = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(user.tester)


module.exports = router;
