const { movie_Services } = require("../services");

const create_movie = async(req,res) => {
    try {
       //services  
       const new_movie = await movie_Services.create_movie(req.body)
       if(!new_movie){
        throw new Error("Not created.")
       }
       res.status(200).json({
        success:true,
        message:"created",
        data:new_movie
       })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

const get_movie=async(req,res)=>{
    try {
        //srevices
        const new_movie = await movie_Services.get_movie(req.body)
        if(!new_movie){
            throw new Error("not geted")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:new_movie
        })
    } catch (error) {
    //error        
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

const delete_movie =async (req,res) => {
    try {
        //services
        const id = req.params.movieid

        // const id = req.body.id
        const new_movie = await movie_Services.delete_movie(id)
        if(!new_movie){
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

const update_movie = async (req,res) => {
    try {
        //services 
        const id = req.params.movieid
        const data =req.body

        const result = await movie_Services.update_movie(id,data)
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
    create_movie,
    get_movie,
    delete_movie,
    update_movie
}