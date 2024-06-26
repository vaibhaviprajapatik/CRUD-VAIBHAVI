const mongoose = require("mongoose")

const dbConnection = ()=>{
    mongoose.connect("mongodb+srv://hiralkunjadiya9:pZYJLkx8f1txOuCy@netflix.e9o9kve.mongodb.net/")
    .then((data)=>{
        if(data){
            console.log("Database Connected Successfullyyyyy......!");
        }
     }   
    ).catch((err)=>{
        console.log(err);
    })
}

module.exports = dbConnection