const mongoose = require("mongoose")

const beauty_schema = mongoose.Schema(
    {
        beauty_name:{
            type:String,
            trim:true
        },
        beauty_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Beauty = mongoose.model("Beauty",beauty_schema)

module.exports = Beauty