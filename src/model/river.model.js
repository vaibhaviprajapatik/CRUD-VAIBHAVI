const mongoose = require("mongoose")

const river_schema = mongoose.Schema(
    {
        river_name:{
            type:String,
            trim:true
        },
        river_length:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const River = mongoose.model("River",river_schema)

module.exports = River