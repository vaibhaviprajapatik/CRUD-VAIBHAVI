const { electronic_Services } = require("../services");

const create_electronic = async(req,res) => {
    try {
       //services  
       const new_electronic = await electronic_Services.create_electronic(req.body)
       if(!new_electronic){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_electronic
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_electronic=async(req,res)=>{
    try {
        //srevices
        const new_electronic = await electronic_Services.get_electronic(req.body)
        if(!new_electronic){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_electronic
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_electronic =async (req,res) => {
    try {
        //services
        const id = req.params.electronicid

        // const id = req.body.id
        const new_electronic = await electronic_Services.delete_electronic(id)
        if(!new_electronic){
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

const update_electronic = async (req,res) => {
    try {
        //services 
        const id = req.params.electronicid
        const data =req.body

        const result = await electronic_Services.update_electronic(id,data)
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
    create_electronic,
    get_electronic,
    delete_electronic,
    update_electronic
}