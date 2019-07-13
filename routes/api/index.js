const router = require("express").Router();
const userRoutes = require("./user");
const agencyRoutes = require("./agencies");

// Users routes
router.use("/users", userRoutes);
router.use("/agencies", agencyRoutes);

module.exports = router;
