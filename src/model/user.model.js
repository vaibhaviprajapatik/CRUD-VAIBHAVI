const mongoose = require("mongoose")

const user_schema = mongoose.Schema(
    {
        user_name:{
            type:String,
            trim:true
        },
        user_contect:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true  
    }
)

const User = mongoose.model("User",user_schema)

module.exports = User