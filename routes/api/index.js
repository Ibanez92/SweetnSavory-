const router = require("express").Router();
const cupcakesRoutes = require("./cupcakes");

// Book routes
router.use("/cupcakes", cupcakesRoutes);

module.exports = router;
