const { product_Services } = require("../services");

const create_product = async(req,res) => {
    try {
       //services  
       const new_product = await product_Services.create_product(req.body)
       if(!new_product){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_product
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_product=async(req,res)=>{
    try {
        //srevices
        const new_product = await product_Services.get_product(req.body)
        if(!new_product){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_product
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_product =async (req,res) => {
    try {
        //services
        const id = req.params.productid

        // const id = req.body.id
        const new_product = await product_Services.delete_product(id)
        if(!new_product){
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

const update_product = async (req,res) => {
    try {
        //services 
        const id = req.params.productid
        const data =req.body

        const result = await product_Services.update_product(id,data)
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
    create_product,
    get_product,
    delete_product,
    update_product
}