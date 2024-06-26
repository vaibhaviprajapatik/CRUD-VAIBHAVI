const mongoose = require("mongoose")

const jewellery_schema = mongoose.Schema(
    {
        jewellery_name:{
            type:String,
            trim:true
        },
        jewellery_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Jewellery = mongoose.model("Jewellery",jewellery_schema)

module.exports = Jewellery