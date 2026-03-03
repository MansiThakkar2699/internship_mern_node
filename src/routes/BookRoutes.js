const router = require("express").Router()
const bookController = require("../controllers/BookController")
router.get("/books",bookController.getAllBooks)
router.get("/book/:id",bookController.getBookByID)
router.post("/book",bookController.createBook);
router.delete("/book/:id",bookController.deleteBook)
module.exports = router