const { bike_Services } = require("../services");

const create_bike = async(req,res) => {
    try {
       //services  
       const new_bike = await bike_Services.create_bike(req.body)
       if(!new_bike){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_bike
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_bike=async(req,res)=>{
    try {
        //srevices
        const new_bike = await bike_Services.get_bike(req.body)
        if(!new_bike){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_bike
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_bike =async (req,res) => {
    try {
        //services
        const id = req.params.bikeid

        // const id = req.body.id
        const new_bike = await bike_Services.delete_bike(id)
        if(!new_bike){
            throw new Error("not delete")
        }
        res.status(200).json({
            success:true,
            message:"Deleted",
            id:id
        }) 
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })        
    }
}

const update_bike = async (req,res) => {
    try {
        //services 
        const id = req.params.bikeid
        const data =req.body

        const result = await bike_Services.update_bike(id,data)
        if(!result){
            throw new Error("Not Update")
        }
        res.status(200).json({
            success:true,
            message:"Updated",
            data:data
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        }) 
    }
}


module.exports = {
    create_bike,
    get_bike,
    delete_bike,
    update_bike
}