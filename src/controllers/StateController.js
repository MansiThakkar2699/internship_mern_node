const stateSchema = require("../models/StateModel")

const createState = async (req,res) => {
    try {
        const states = await stateSchema.create(req.body)
        res.status(201).json({
            message: "State Created Successfully",
            data: states
        })   
    } catch (error) {
        res.json({
            message: "error while creating state",
            data: error
        })  
    }
}

const getAllStates = async (req,res) => {
    try {
        const states = await stateSchema.find();
        res.json({
            message: "All states fetched",
            data: states
        })
    } catch (error) {
        res.status(201).json({
            message: "error while getting states",
            data: error
        })  
    }
}

const getStateByID = async (req,res) => {
    try {
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
    } catch (error) {
        res.json({
            message: "error while getting state",
            data: error
        }) 
    }
}

const deleteState = async (req,res) => {
    try {
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
    } catch (error) {
        res.json({
            message: "error while deleting state",
            data: error
        }) 
    }
}

const updateState = async (req,res) => {
    try {
        const updatedState = await stateSchema.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.json({
            message: "State Updated Successfully",
            data: updatedState
        })   
    } catch (error) {
        res.json({
            message: "getting error while updating state",
            data: error
        })
    }
}

module.exports = {
    createState,
    getAllStates,
    getStateByID,
    deleteState,
    updateState
}