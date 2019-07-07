const router = require("express").Router();
const data = require("../../controllers/dataController");

// Matches with "/api/agencies"
router.route("/authorize")
.post(data.checkIfAuthorizedGrabData);

router.route("/insertData")
.post(data.insertData)

module.exports = router;