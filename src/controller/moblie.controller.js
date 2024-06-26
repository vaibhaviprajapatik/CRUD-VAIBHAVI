const { moblie_Services } = require("../services");

const create_moblie = async(req,res) => {
    try {
       //services  
       const new_moblie = await moblie_Services.create_moblie(req.body)
       if(!new_moblie){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_moblie
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_moblie=async(req,res)=>{
    try {
        //srevices
        const new_moblie = await moblie_Services.get_moblie(req.body)
        if(!new_moblie){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_moblie
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_moblie =async (req,res) => {
    try {
        //services
        const id = req.params.moblieid

        // const id = req.body.id
        const new_moblie = await moblie_Services.delete_moblie(id)
        if(!new_moblie){
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

const update_moblie = async (req,res) => {
    try {
        //services 
        const id = req.params.moblieid
        const data =req.body

        const result = await moblie_Services.update_moblie(id,data)
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
    create_moblie,
    get_moblie,
    delete_moblie,
    update_moblie
}