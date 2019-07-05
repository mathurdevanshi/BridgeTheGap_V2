const router = require("express").Router();
const data = require("../../controllers/dataController");

// Matches with "/api/agencies"
router.route("/test")
.post(data.checkIfAuthorizedGrabData);

module.exports = router;