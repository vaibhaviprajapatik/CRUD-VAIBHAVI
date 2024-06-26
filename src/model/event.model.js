const mongoose = require("mongoose")

const event_schema = mongoose.Schema(
    {
        event_name:{
            type:String,
            trim:true
        },
        event_location:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true   
    }
)

const Event = mongoose.model("Event",event_schema)

module.exports = Event