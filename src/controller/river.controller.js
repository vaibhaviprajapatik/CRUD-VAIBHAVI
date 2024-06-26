const { river_Services } = require("../services");

const create_river = async(req,res) => {
    try {
       //services  
       const new_river = await river_Services.create_river(req.body)
       if(!new_river){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_river
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_river=async(req,res)=>{
    try {
        //srevices
        const new_river = await river_Services.get_river(req.body)
        if(!new_river){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_river
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_river =async (req,res) => {
    try {
        //services
        const id = req.params.riverid

        // const id = req.body.id
        const new_river = await river_Services.delete_river(id)
        if(!new_river){
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

const update_river = async (req,res) => {
    try {
        //services 
        const id = req.params.riverid
        const data =req.body

        const result = await river_Services.update_river(id,data)
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
    create_river,
    get_river,
    delete_river,
    update_river
}