const { Movie } = require("../model")

const create_movie = (data)=>{
    return Movie.create(data)
}

const get_movie = ()=>{
    return Movie.find()
}

const delete_movie = (id) => {
    return Movie.findByIdAndDelete(id)
}

const update_movie = (id,data) => {
    return Movie.findByIdAndUpdate(id,data)
}

module.exports = {
    create_movie,
    get_movie,
    delete_movie,
    update_movie
}