const productSchema = require("../models/ProductModel")

const getAllProducts = async (req,res) => {
    try {
        const allProducts  = await productSchema.find()
        res.json({
            message: "all products",
            data: allProducts
        })   
    } catch (error) {
        res.json({
            message: "getting error while fetching products",
            data: error
        }) 
    }
}

const getProductByID = async (req,res) => {
    try {
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
    } catch (error) {
        res.json({
            message: "getting error while fetching product",
            data: error
        }) 
    }
}

const addProduct = async (req,res) => {
    try {
        const createdProduct = await productSchema.create(req.body)
        res.status(201).json({
            message: "Product Created",
            data: createdProduct
        })   
    } catch (error) {
        res.json({
            message: "getting error while creating product",
            data: error
        })
    }
}

const deleteProduct = async (req,res) => {
    try {
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
    } catch (error) {
        res.json({
            message: "getting error while deleting product",
            data: error
        })
    }
}

const updateProduct = async (req,res) => {
    try {
        const updatedProduct = await productSchema.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.json({
            message: "Product Updated Successfully",
            data: updatedProduct
        })   
    } catch (error) {
        res.json({
            message: "getting error while updating product",
            data: error
        })
    }
}

const searchProduct = async (req,res) => {
    try {
        const foundProduct = await productSchema.find({productName: req.query.name})
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
    } catch (error) {
        res.json({
            message: "getting error while searching product",
            data: error
        })
    }
}

const addColors = async (req,res) => {
    try {
        const changedProduct = await productSchema.findByIdAndUpdate(req.params.id,{$push:{productColors:req.body.productColors}},{new: true})
        res.json({
            message: "Product Updated Successfully",
            data: changedProduct
        })
    } catch (error) {
        res.json({
            message: "getting error while adding colors to product",
            data: error
        })
    }
}

const removeColors = async (req,res) => {
    try {
        const changedProduct = await productSchema.findByIdAndUpdate(req.params.id,{$pull:{productColors:{$in:req.body.productColors}}},{new: true})
        res.json({
            message: "Product Updated Successfully",
            data: changedProduct
        })
    } catch (error) {
        res.json({
            message: "getting error while removing colors from product",
            data: error
        })
    }
}

module.exports = {
    getAllProducts,
    getProductByID,
    addProduct,
    deleteProduct,
    updateProduct,
    searchProduct,
    addColors,
    removeColors
}