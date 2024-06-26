const { Electronic } = require("../model")

const create_electronic = (data)=>{
    return Electronic.create(data)
}

const get_electronic = ()=>{
    return Electronic.find()
}

const delete_electronic = (id) => {
    return Electronic.findByIdAndDelete(id)
}

const update_electronic = (id,data) => {
    return Electronic.findByIdAndUpdate(id,data)
}

module.exports = {
    create_electronic,
    get_electronic,
    delete_electronic,
    update_electronic
}