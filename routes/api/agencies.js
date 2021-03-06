const router = require("express").Router();
const data = require("../../controllers/dataController");

// Matches with "/api/agencies"
router.route("/authorize")
.post(data.checkIfAuthorizedGrabData);

router.route("/insertData")
.post(data.insertData);

router.route("/getAllData")
.post(data.getAllAgencyData);

router.route("/shot")
.post(data.insertDataWish);

module.exports = router;