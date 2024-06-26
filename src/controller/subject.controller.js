const { subject_Services } = require("../services");

const create_subject = async(req,res) => {
    try {
       //services  
       const new_subject = await subject_Services.create_subject(req.body)
       if(!new_subject){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_subject
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_subject=async(req,res)=>{
    try {
        //srevices
        const new_subject = await subject_Services.get_subject(req.body)
        if(!new_subject){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_subject
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_subject =async (req,res) => {
    try {
        //services
        const id = req.params.subjectid

        // const id = req.body.id
        const new_subject = await subject_Services.delete_subject(id)
        if(!new_subject){
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

const update_subject = async (req,res) => {
    try {
        //services 
        const id = req.params.subjectid
        const data =req.body

        const result = await subject_Services.update_subject(id,data)
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
    create_subject,
    get_subject,
    delete_subject,
    update_subject
}