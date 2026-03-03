const citySchema = require("../models/CityModel")

const createCity = async (req,res) => {
    const cities = await citySchema.create(req.body)
    res.status(201).json({
        message: "City Created Successfully",
        data: cities
    })
}

const getAllCities = async (req,res) => {
    const cities = await citySchema.find();
    res.json({
        message: "All cities fetched",
        data: cities
    })
}

const getCityByID = async (req,res) => {
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
}

const deleteCity = async (req,res) => {
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
}

module.exports = {
    createCity,
    getAllCities,
    getCityByID,
    deleteCity
}