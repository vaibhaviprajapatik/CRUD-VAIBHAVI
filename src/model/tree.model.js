const mongoose = require("mongoose")

const tree_schema = mongoose.Schema(
    {
        tree_name:{
            type:String,
            trim:true
        },
        tree_life:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true   
    }
)

const Tree = mongoose.model("Tree",tree_schema)

module.exports = Tree