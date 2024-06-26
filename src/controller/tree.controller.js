const { tree_Services } = require("../services");

const create_tree = async(req,res) => {
    try {
       //services  
       const new_tree = await tree_Services.create_tree(req.body)
       if(!new_tree){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_tree
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_tree=async(req,res)=>{
    try {
        //srevices
        const new_tree = await tree_Services.get_tree(req.body)
        if(!new_tree){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_tree
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_tree =async (req,res) => {
    try {
        //services
        const id = req.params.treeid

        // const id = req.body.id
        const new_tree = await tree_Services.delete_tree(id)
        if(!new_tree){
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

const update_tree = async (req,res) => {
    try {
        //services 
        const id = req.params.treeid
        const data =req.body

        const result = await tree_Services.update_tree(id,data)
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
    create_tree,
    get_tree,
    delete_tree,
    update_tree
}