const mongoose = require("mongoose")

const subject_schema = mongoose.Schema(
    {
        subject_name:{
            type:String,
            trim:true
        },
        subject_teacher:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true   
    }
)

const Subject = mongoose.model("Subject",subject_schema)

module.exports = Subject