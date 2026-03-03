const categorySchema = require("../models/CategoryModel")

const createCategory = async (req,res) => {
    const categories = await categorySchema.create(req.body)
    res.status(201).json({
        message: "Category Created Successfully",
        data: categories
    })
}

const getAllCategories = async (req,res) => {
    const categories = await categorySchema.find();
    res.json({
        message: "All categories fetched",
        data: categories
    })
}

const getCategoryByID = async (req,res) => {
    const foundCategory = await categorySchema.findById(req.params.id)
    if(foundCategory){
        res.json({
            message: "Category found",
            data: foundCategory
        })
    }else{
        res.json({
            message: "Category not found"
        })
    }
}

const deleteCategory = async (req,res) => {
    const deletedCategory = await categorySchema.findByIdAndDelete(req.params.id)
    if(deletedCategory){
        res.json({
            message: "Category deleted successfully",
            data: deletedCategory
        })
    }else{
        res.json({
            message: "Category not found"
        })
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByID,
    deleteCategory
}