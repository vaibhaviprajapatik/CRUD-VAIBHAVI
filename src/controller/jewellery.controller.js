const { jewellery_Services } = require("../services");

const create_jewellery = async(req,res) => {
    try {
       //services  
       const new_jewellery = await jewellery_Services.create_jewellery(req.body)
       if(!new_jewellery){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_jewellery
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_jewellery=async(req,res)=>{
    try {
        //srevices
        const new_jewellery = await jewellery_Services.get_jewellery(req.body)
        if(!new_jewellery){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_jewellery
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_jewellery =async (req,res) => {
    try {
        //services
        const id = req.params.jewelleryid

        // const id = req.body.id
        const new_jewellery = await jewellery_Services.delete_jewellery(id)
        if(!new_jewellery){
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

const update_jewellery = async (req,res) => {
    try {
        //services 
        const id = req.params.jewelleryid
        const data =req.body

        const result = await jewellery_Services.update_jewellery(id,data)
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
    create_jewellery,
    get_jewellery,
    delete_jewellery,
    update_jewellery
}