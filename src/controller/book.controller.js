const { book_Services } = require("../services");

const create_book = async(req,res) => {
    try {
       //services  
       const new_book = await book_Services.create_book(req.body)
       if(!new_book){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_book
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_book=async(req,res)=>{
    try {
        //srevices
        const new_book = await book_Services.get_book(req.body)
        if(!new_book){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_book
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_book =async (req,res) => {
    try {
        //services
        const id = req.params.bookid

        // const id = req.body.id
        const new_book = await book_Services.delete_book(id)
        if(!new_book){
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

const update_book = async (req,res) => {
    try {
        //services 
        const id = req.params.bookid
        const data =req.body

        const result = await book_Services.update_book(id,data)
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
    create_book,
    get_book,
    delete_book,
    update_book
}