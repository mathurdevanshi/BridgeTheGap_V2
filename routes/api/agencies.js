const router = require("express").Router();
const data = require("../../controllers/dataController");

// Matches with "/api/agencies"
router.route("/dashboard")
.post(data.checkToken);

module.exports = router;