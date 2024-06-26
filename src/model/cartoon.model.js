const mongoose = require("mongoose")

const cartoon_schema = mongoose.Schema(
    {
        cartoon_name:{
            type:String,
            trim:true
        },
        cartoon_rating:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Cartoon = mongoose.model("Cartoon",cartoon_schema)

module.exports = Cartoon