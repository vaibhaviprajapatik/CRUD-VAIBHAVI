const { user_Services } = require("../services")

const create_user = async(req,res)=>{
    try {
        //services
        const New_user = await user_Services.create_admin(req.body)
        if(!New_user){
            throw new Error("not found")
        }
        res.status(200).json({
            sccuess:true,
            message:"created",
            data:New_user
        })
    } catch (error) {
        //error
        res.status(400).json({
            sccuess:false,
            message:error.message
        })
    }
}

const get_user = async (req,res) => {
    try {
        //services
        const New_user = await user_Services.get_user(req.body)
        if(!New_user){
            throw new Error("not found")
        }
        res.status(200).json({
            sccuess:true,
            message:"created",
            data:New_user
        })
    } catch (error) {
        //error
        res.status(400).json({
            sccuess:false,
            message:error.message,
        })
    }
}

const delete_user =async (req,res) => {
    try {
        //services
        const id = req.body.id
        const New_user = await user_Services.delete_user(id)
        if(!New_user){
            throw new Error("not found")
        }
        res.status(200).json({
            sccuess:true,
            message:"created",
            data:New_user
        })
    } catch (error) {
        //error 
        res.status(400).json({
            sccuess:false,
            message:error.message,
        })  
    }
}

const update_user =async (req,res) => {
    try {
        //services
        const id = req.body.id
        const data= req.body
        const New_user = await user_Services.update_user(id,data)
        res.status(200).json({
            sccuess:true,
            message:"created",
            data:data
        })
    } catch (error) {
        //error
        res.status(400).json({
            sccuess:false,
            message:error.message,
        })
    }
}

module.exports = {
    create_user,
    get_user,
    delete_user,
    update_user
}