const mongoose = require("mongoose")

const moblie_schema = mongoose.Schema(
    {
        moblie_model:{
            type:String,
            trim:true
        },
        moblie_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Moblie = mongoose.model("Moblie",moblie_schema)

module.exports = Moblie