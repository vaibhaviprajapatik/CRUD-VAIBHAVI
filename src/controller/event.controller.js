const { event_Services } = require("../services");

const create_event = async(req,res) => {
    try {
       //services  
       const new_event = await event_Services.create_event(req.body)
       if(!new_event){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_event
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_event=async(req,res)=>{
    try {
        //srevices
        const new_event = await event_Services.get_event(req.body)
        if(!new_event){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_event
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_event =async (req,res) => {
    try {
        //services
        const id = req.params.eventid

        // const id = req.body.id
        const new_event = await event_Services.delete_event(id)
        if(!new_event){
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

const update_event = async (req,res) => {
    try {
        //services 
        const id = req.params.eventid
        const data =req.body

        const result = await event_Services.update_event(id,data)
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
    create_event,
    get_event,
    delete_event,
    update_event
}