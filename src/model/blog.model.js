const mongoose = require("mongoose")

const blog_schema = mongoose.Schema(
    {
        blog_name:{
            type:String,
            trim:true
        },
        blog_author:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true   
    }
)

const Blog = mongoose.model("Blog",blog_schema)

module.exports = Blog