const mongoose = require("mongoose")

const cloth_schema = mongoose.Schema(
    {
        cloth_name:{
            type:String,
            trim:true
        },
        cloth_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Cloth = mongoose.model("Cloth",cloth_schema)

module.exports = Cloth