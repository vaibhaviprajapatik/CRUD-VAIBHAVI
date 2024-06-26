const mongoose = require("mongoose")

const result_schema = mongoose.Schema(
    {
        student_name:{
            type:String,
            trim:true
        },
        student_roll:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Result = mongoose.model("Result",result_schema)

module.exports = Result