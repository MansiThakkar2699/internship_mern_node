const router = require("express").Router()
const cityController = require("../controllers/CityController")
router.get("/cities",cityController.getAllCities)
router.get("/city/:id",cityController.getCityByID)
router.post("/city",cityController.createCity);
router.delete("/city/:id",cityController.deleteCity)
router.put("/city/:id",cityController.updateCity)
module.exports = router