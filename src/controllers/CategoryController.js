const categorySchema = require("../models/CategoryModel")

const createCategory = async (req,res) => {
    try {
        const categories = await categorySchema.create(req.body)
        res.status(201).json({
            message: "Category Created Successfully",
            data: categories
        })
    } catch (error) {
        res.json({
            message: "getting error while creating category",
            data: error
        })
    }
}

const getAllCategories = async (req,res) => {
    try {
        const categories = await categorySchema.find();
        res.json({
            message: "All categories fetched",
            data: categories
        })
    } catch (error) {
        res.json({
            message: "getting error while fetching categories",
            data: error
        })
    }
}

const getCategoryByID = async (req,res) => {
    try {
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
    } catch (error) {
        res.json({
            message: "getting error while fetching category",
            data: error
        })
    }
}

const deleteCategory = async (req,res) => {
    try {
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
    } catch (error) {
        res.json({
            message: "getting error while deleting category",
            data: error
        })
    }
}

const updateCategory = async (req,res) => {
    try {
        const updatedCategory = await categorySchema.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.json({
            message: "Category Updated Successfully",
            data: updatedCategory
        })   
    } catch (error) {
        res.json({
            message: "getting error while updating category",
            data: error
        })
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByID,
    deleteCategory,
    updateCategory
}