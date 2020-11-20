const router = require("express").Router();
const cupcakesController = require("../../controllers/cupcakesController");

// Matches with "/api/cupcakes"
router
  .route("/")
  .get(cupcakesController.findAll)
  .post(cupcakesController.create);

// Matches with "/api/cupcakes/:id"
router
  .route("/:id")
  .get(cupcakesController.findById)
  .put(cupcakesController.update)
  .delete(cupcakesController.remove);

module.exports = router;
