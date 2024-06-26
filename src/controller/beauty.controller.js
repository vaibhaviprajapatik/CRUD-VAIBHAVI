const { beauty_Services } = require("../services");

const create_beauty = async(req,res) => {
    try {
       //services  
       const new_beauty = await beauty_Services.create_beauty(req.body)
       if(!new_beauty){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_beauty
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_beauty=async(req,res)=>{
    try {
        //srevices
        const new_beauty = await beauty_Services.get_beauty(req.body)
        if(!new_beauty){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_beauty
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_beauty =async (req,res) => {
    try {
        //services
        const id = req.params.beautyid

        // const id = req.body.id
        const new_beauty = await beauty_Services.delete_beauty(id)
        if(!new_beauty){
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

const update_beauty = async (req,res) => {
    try {
        //services 
        const id = req.params.beautyid
        const data =req.body

        const result = await beauty_Services.update_beauty(id,data)
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
    create_beauty,
    get_beauty,
    delete_beauty,
    update_beauty
}