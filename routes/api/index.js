const router = require("express").Router();
const userRoutes = require("./user");

// Users routes
router.use("/users", userRoutes);

module.exports = router;
