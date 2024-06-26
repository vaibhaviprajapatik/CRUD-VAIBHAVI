const { result_Services } = require("../services");

const create_result = async(req,res) => {
    try {
       //services  
       const new_result = await result_Services.create_result(req.body)
       if(!new_result){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_result
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_result=async(req,res)=>{
    try {
        //srevices
        const new_result = await result_Services.get_result(req.body)
        if(!new_result){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_result
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_result =async (req,res) => {
    try {
        //services
        const id = req.params.resultid

        // const id = req.body.id
        const new_result = await result_Services.delete_result(id)
        if(!new_result){
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

const update_result = async (req,res) => {
    try {
        //services 
        const id = req.params.resultid
        const data =req.body

        const result = await result_Services.update_result(id,data)
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
    create_result,
    get_result,
    delete_result,
    update_result
}