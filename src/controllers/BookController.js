const bookSchema = require("../models/BookModel")

const createBook = async (req,res) => {
    try {
        const books = await bookSchema.create(req.body)
        res.status(201).json({
            message: "Book Created Successfully",
            data: books
        })
    } catch (error) {
        res.json({
            message: "error while creating book",
            data: error
        })
    }
}

const getAllBooks = async (req,res) => {
    try {
        const books = await bookSchema.find();
        res.json({
            message: "All books fetched",
            data: books
        })   
    } catch (error) {
        res.json({
            message: "error while fetching books",
            data: error
        })
    }
}

const getBookByID = async (req,res) => {
    try {
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
    } catch (error) {
        res.json({
            message: "error while fetching book",
            data: error
        })
    }
}

const deleteBook = async (req,res) => {
    try {
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
    } catch (error) {
        res.json({
            message: "error while deleting book",
            data: error
        })
    }
}

const updateBook = async (req,res) => {
    try {
        const updatedBook = await bookSchema.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.json({
            message: "Book Updated Successfully",
            data: updatedBook
        })   
    } catch (error) {
        res.json({
            message: "getting error while updating book",
            data: error
        })
    }
}

module.exports = {
    getAllBooks,
    createBook,
    getBookByID,
    deleteBook,
    updateBook
}