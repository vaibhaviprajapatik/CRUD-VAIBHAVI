const mongoose = require("mongoose")

const product_schema = mongoose.Schema(
    {
        product_name:{
            type:String,
            trim:true
        },
        product_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Product = mongoose.model("Product",product_schema)

module.exports = Product