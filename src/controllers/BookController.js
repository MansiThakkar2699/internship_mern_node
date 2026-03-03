const bookSchema = require("../models/BookModel")

const createBook = async (req,res) => {
    const books = await bookSchema.create(req.body)
    res.status(201).json({
        message: "Book Created Successfully",
        data: books
    })
}

const getAllBooks = async (req,res) => {
    const books = await bookSchema.find();
    res.json({
        message: "All books fetched",
        data: books
    })
}

const getBookByID = async (req,res) => {
    const foundBook = await bookSchema.findById(req.params.id)
    if(foundBook){
        res.json({
            message: "Book found",
            data: foundBook
        })
    }else{
        res.json({
            message: "Book not found"
        })
    }
}

const deleteBook = async (req,res) => {
    const deletedBook = await bookSchema.findByIdAndDelete(req.params.id)
    if(deletedBook){
        res.json({
            message: "Book deleted successfully",
            data: deletedBook
        })
    }else{
        res.json({
            message: "Book not found"
        })
    }
}

module.exports = {
    getAllBooks,
    createBook,
    getBookByID,
    deleteBook
}