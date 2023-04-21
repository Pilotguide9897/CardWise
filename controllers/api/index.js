const router = require("express").Router();

const cardRoutes = require("./card-routes");
const userRoutes = require("./user-routes");

router.use("/cards", cardRoutes);
router.use("/users", userRoutes);

module.exports = router;
