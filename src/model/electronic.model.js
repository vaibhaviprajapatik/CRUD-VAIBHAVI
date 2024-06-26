const mongoose = require("mongoose")

const electronic_schema = mongoose.Schema(
    {
        electronic_name:{
            type:String,
            trim:true
        },
        electronic_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Electronic = mongoose.model("Electronic",electronic_schema)

module.exports = Electronic