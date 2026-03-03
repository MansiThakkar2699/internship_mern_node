const router = require("express").Router()
const stateController = require("../controllers/StateController")
router.get("/states",stateController.getAllStates)
router.get("/state/:id",stateController.getStateByID)
router.post("/state",stateController.createState);
router.delete("/state/:id",stateController.deleteState)
module.exports = router