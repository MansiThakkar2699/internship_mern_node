const router = require("express").Router()
const categoryController = require("../controllers/CategoryController")
router.get("/categories",categoryController.getAllCategories)
router.get("/category/:id",categoryController.getCategoryByID)
router.post("/category",categoryController.createCategory);
router.delete("/category/:id",categoryController.deleteCategory)
router.put("/category/:id",categoryController.updateCategory)
module.exports = router