const router = require("express").Router()
const productController = require("../controllers/ProductController")
router.get("/products",productController.getAllProducts)
router.get("/product/:id",productController.getProductByID)
router.post("/product",productController.addProduct);
router.delete("/product/:id",productController.deleteProduct)
router.put("/product/:id",productController.updateProduct)
router.get("/searchproduct",productController.searchProduct)
router.put("/addcolor/:id",productController.addColors)
router.put("/removecolor/:id",productController.removeColors)
module.exports = router