const productSchema = require("../models/ProductModel")

const getAllProducts = async (req,res) => {
    const allProducts  = await productSchema.find()
    res.json({
        message: "all products",
        data: allProducts
    })
}

const getProductByID = async (req,res) => {
    const foundProduct = await productSchema.findById(req.params.id)
    if(foundProduct){
        res.json({
            message: "Product found",
            data: foundProduct
        })
    }else {
        res.json({
            message: "Product not found"
        })
    }
}

const addProduct = async (req,res) => {
    const createdProduct = await productSchema.create(req.body)
    res.status(201).json({
        message: "Product Created",
        data: createdProduct
    })
}

const deleteProduct = async (req,res) => {
    const deletedProduct = await productSchema.findByIdAndDelete(req.params.id)
    if(deletedProduct){
        res.json({
            message: "Product deleted",
            data: deletedProduct
        })
    }else {
        res.json({
            message: "Product not found"
        })
    }
}

module.exports = {
    getAllProducts,
    getProductByID,
    addProduct,
    deleteProduct
}