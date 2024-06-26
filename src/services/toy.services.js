const { Toy } = require("../model")

const create_toy = (data)=>{
    return Toy.create(data)
}

const get_toy = ()=>{
    return Toy.find()
}

const delete_toy = (id) => {
    return Toy.findByIdAndDelete(id)
}

const update_toy = (id,data) => {
    return Toy.findByIdAndUpdate(id,data)
}

module.exports = {
    create_toy,
    get_toy,
    delete_toy,
    update_toy
}