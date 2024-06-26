const express = require("express");
const dbConnection = require("./db/dbConnection");
const router = require("./routes/v1");

const app = express()

const port = 8000

app.listen(port,
    ()=>{
        console.log("server runing.......!");
    }
)

app.use(express.json())

app.use("/v1",router)

dbConnection()



