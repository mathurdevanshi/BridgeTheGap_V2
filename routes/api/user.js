const router = require("express").Router();
const user = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/client")
.post(user.registerClient);

router.route("/register")
.post(user.registerUser);

router.route("/login")
.post(user.loginUser);



module.exports = router;
