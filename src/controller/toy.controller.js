const { toy_Services } = require("../services");

const create_toy = async(req,res) => {
    try {
       //services  
       const new_toy = await toy_Services.create_toy(req.body)
       if(!new_toy){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_toy
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_toy=async(req,res)=>{
    try {
        //srevices
        const new_toy = await toy_Services.get_toy(req.body)
        if(!new_toy){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_toy
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_toy =async (req,res) => {
    try {
        //services
        const id = req.params.toyid

        // const id = req.body.id
        const new_toy = await toy_Services.delete_toy(id)
        if(!new_toy){
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

const update_toy = async (req,res) => {
    try {
        //services 
        const id = req.params.toyid
        const data =req.body

        const result = await toy_Services.update_toy(id,data)
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
    create_toy,
    get_toy,
    delete_toy,
    update_toy
}