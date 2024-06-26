const { Cartoon } = require("../model")

const create_cartoon = (data)=>{
    return Cartoon.create(data)
}

const get_cartoon = ()=>{
    return Cartoon.find()
}

const delete_cartoon = (id) => {
    return Cartoon.findByIdAndDelete(id)
}

const update_cartoon = (id,data) => {
    return Cartoon.findByIdAndUpdate(id,data)
}

module.exports = {
    create_cartoon,
    get_cartoon,
    delete_cartoon,
    update_cartoon
}