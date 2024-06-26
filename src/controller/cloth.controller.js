const { cloth_Services } = require("../services");

const create_cloth = async(req,res) => {
    try {
       //services  
       const new_cloth = await cloth_Services.create_cloth(req.body)
       if(!new_cloth){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_cloth
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_cloth=async(req,res)=>{
    try {
        //srevices
        const new_cloth = await cloth_Services.get_cloth(req.body)
        if(!new_cloth){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_cloth
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_cloth =async (req,res) => {
    try {
        //services
        const id = req.params.clothid

        // const id = req.body.id
        const new_cloth = await cloth_Services.delete_cloth(id)
        if(!new_cloth){
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

const update_cloth = async (req,res) => {
    try {
        //services 
        const id = req.params.clothid
        const data =req.body

        const result = await cloth_Services.update_cloth(id,data)
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
    create_cloth,
    get_cloth,
    delete_cloth,
    update_cloth
}