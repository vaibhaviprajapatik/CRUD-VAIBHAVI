const { blog_Services } = require("../services");

const create_blog = async(req,res) => {
    try {
       //services  
       const new_blog = await blog_Services.create_blog(req.body)
       if(!new_blog){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_blog
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_blog=async(req,res)=>{
    try {
        //srevices
        const new_blog = await blog_Services.get_blog(req.body)
        if(!new_blog){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_blog
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_blog =async (req,res) => {
    try {
        //services
        const id = req.params.blogid

        // const id = req.body.id
        const new_blog = await blog_Services.delete_blog(id)
        if(!new_blog){
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

const update_blog = async (req,res) => {
    try {
        //services 
        const id = req.params.blogid
        const data =req.body

        const result = await blog_Services.update_blog(id,data)
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
    create_blog,
    get_blog,
    delete_blog,
    update_blog
}