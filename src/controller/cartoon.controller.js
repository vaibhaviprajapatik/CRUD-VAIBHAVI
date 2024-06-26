const { cartoon_Services } = require("../services");

const create_cartoon = async(req,res) => {
    try {
       //services  
       const new_cartoon = await cartoon_Services.create_cartoon(req.body)
       if(!new_cartoon){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_cartoon
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_cartoon=async(req,res)=>{
    try {
        //srevices
        const new_cartoon = await cartoon_Services.get_cartoon(req.body)
        if(!new_cartoon){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_cartoon
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_cartoon =async (req,res) => {
    try {
        //services
        const id = req.params.cartoonid

        // const id = req.body.id
        const new_cartoon = await cartoon_Services.delete_cartoon(id)
        if(!new_cartoon){
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

const update_cartoon = async (req,res) => {
    try {
        //services 
        const id = req.params.cartoonid
        const data =req.body

        const result = await cartoon_Services.update_cartoon(id,data)
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
    create_cartoon,
    get_cartoon,
    delete_cartoon,
    update_cartoon
}