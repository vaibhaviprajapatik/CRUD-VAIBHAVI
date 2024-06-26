const { Music } = require("../model")

const create_music = (data)=>{
    return Music.create(data)
}

const get_music = ()=>{
    return Music.find()
}

const delete_music = (id) => {
    return Music.findByIdAndDelete(id)
}

const update_music = (id,data) => {
    return Music.findByIdAndUpdate(id,data)
}

module.exports = {
    create_music,
    get_music,
    delete_music,
    update_music
}