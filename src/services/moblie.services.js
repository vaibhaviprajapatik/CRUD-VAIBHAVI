const { Moblie } = require("../model")

const create_moblie = (data)=>{
    return Moblie.create(data)
}

const get_moblie = ()=>{
    return Moblie.find()
}

const delete_moblie = (id) => {
    return Moblie.findByIdAndDelete(id)
}

const update_moblie = (id,data) => {
    return Moblie.findByIdAndUpdate(id,data)
}

module.exports = {
    create_moblie,
    get_moblie,
    delete_moblie,
    update_moblie
}