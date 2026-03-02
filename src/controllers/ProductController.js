const productSchema = require("../models/ProductModel")

const getAllProducts = async (req,res) => {
    const allProducts  = await productSchema.find()
    res.json({
        message: "all products",
        data: allProducts
    })
}

module.exports = {
    getAllProducts
}