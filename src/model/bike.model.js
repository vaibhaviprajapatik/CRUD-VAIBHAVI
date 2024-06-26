const mongoose = require("mongoose")

const bike_schema = mongoose.Schema(
    {
        bike_name:{
            type:String,
            trim:true
        },
        bike_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Bike = mongoose.model("Bike",bike_schema)

module.exports = Bike