const mongoose = require("mongoose")
const Schema = mongoose.Schema

const stateSchema = new Schema({
    stateName:{
        type:String
    }
})

module.exports = mongoose.model("states",stateSchema)