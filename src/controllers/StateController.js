const stateSchema = require("../models/StateModel")

const createState = async (req,res) => {
    const states = await stateSchema.create(req.body)
    res.status(201).json({
        message: "State Created Successfully",
        data: states
    })
}

const getAllStates = async (req,res) => {
    const states = await stateSchema.find();
    res.json({
        message: "All states fetched",
        data: states
    })
}

const getStateByID = async (req,res) => {
    const foundState = await stateSchema.findById(req.params.id)
    if(foundState){
        res.json({
            message: "State found",
            data: foundState
        })
    }else{
        res.json({
            message: "State not found"
        })
    }
}

const deleteState = async (req,res) => {
    const deletedState = await stateSchema.findByIdAndDelete(req.params.id)
    if(deletedState){
        res.json({
            message: "State deleted successfully",
            data: deletedState
        })
    }else{
        res.json({
            message: "State not found"
        })
    }
}

module.exports = {
    createState,
    getAllStates,
    getStateByID,
    deleteState
}