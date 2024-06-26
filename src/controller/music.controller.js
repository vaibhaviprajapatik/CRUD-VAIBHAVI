const { music_Services } = require("../services");

const create_music = async(req,res) => {
    try {
       //services  
       const new_music = await music_Services.create_music(req.body)
       if(!new_music){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_music
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_music=async(req,res)=>{
    try {
        //srevices
        const new_music = await music_Services.get_music(req.body)
        if(!new_music){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_music
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_music =async (req,res) => {
    try {
        //services
        const id = req.params.musicid

        // const id = req.body.id
        const new_music = await music_Services.delete_music(id)
        if(!new_music){
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

const update_music = async (req,res) => {
    try {
        //services 
        const id = req.params.musicid
        const data =req.body

        const result = await music_Services.update_music(id,data)
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
    create_music,
    get_music,
    delete_music,
    update_music
}