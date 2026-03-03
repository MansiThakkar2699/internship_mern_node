const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title:{
        type:String
    },
    price:{
        type:Number
    },
    author:{
        type:String
    }
})

module.exports = mongoose.model("books",bookSchema)