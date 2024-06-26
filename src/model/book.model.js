const mongoose = require("mongoose")

const book_schema = mongoose.Schema(
    {
        book_name:{
            type:String,
            trim:true
        },
        book_author:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true   
    }
)

const Book = mongoose.model("Book",book_schema)

module.exports = Book