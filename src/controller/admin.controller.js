const { admin_Services } = require("../services");

const create_admin = async(req,res) => {
    try {
       //services  
       const new_admin = await admin_Services.create_admin(req.body)
       if(!new_admin){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_admin
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_admin=async(req,res)=>{
    try {
        //srevices
        const new_admin = await admin_Services.get_admin(req.body)
        if(!new_admin){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_admin
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_admin =async (req,res) => {
    try {
        //services
        const id = req.params.adminid

        // const id = req.body.id
        const new_admin = await admin_Services.delete_admin(id)
        if(!new_admin){
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

const update_admin = async (req,res) => {
    try {
        //services 
        const id = req.params.adminid
        const data =req.body

        const result = await admin_Services.update_admin(id,data)
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
    create_admin,
    get_admin,
    delete_admin,
    update_admin
}