const citySchema = require("../models/CityModel")

const createCity = async (req,res) => {
    try {
        const cities = await citySchema.create(req.body)
        res.status(201).json({
            message: "City Created Successfully",
            data: cities
        })
    } catch (error) {
        res.json({
            message: "getting error while creating city",
            data: error
        })
    }
}

const getAllCities = async (req,res) => {
    try {
        const cities = await citySchema.find();
        res.json({
            message: "All cities fetched",
            data: cities
        })   
    } catch (error) {
        res.json({
            message: "getting error while fetching cities",
            data: error
        })
    }
}

const getCityByID = async (req,res) => {
    try {
        const foundCity = await citySchema.findById(req.params.id)
        if(foundCity){
            res.json({
                message: "City found",
                data: foundCity
            })
        }else{
            res.json({
                message: "City not found"
            })
        }
    } catch (error) {
        res.json({
            message: "getting error while fetching city",
            data: error
        })
    }
}

const deleteCity = async (req,res) => {
    try {
        const deletedCity = await citySchema.findByIdAndDelete(req.params.id)
        if(deletedCity){
            res.json({
                message: "City deleted successfully",
                data: deletedCity
            })
        }else{
            res.json({
                message: "City not found"
            })
        }
    } catch (error) {
        res.json({
            message: "getting error while deleting city",
            data: error
        })
    }
}

const updateCity = async (req,res) => {
    try {
        const updatedCity = await citySchema.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.json({
            message: "City Updated Successfully",
            data: updatedCity
        })   
    } catch (error) {
        res.json({
            message: "getting error while updating city",
            data: error
        })
    }
}

module.exports = {
    createCity,
    getAllCities,
    getCityByID,
    deleteCity,
    updateCity
}