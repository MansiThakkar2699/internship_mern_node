const mongoose = require("mongoose")
const Schema = mongoose.Schema

const citySchema = new Schema({
    cityName:{
        type:String
    }
})

module.exports = mongoose.model("cities",citySchema)