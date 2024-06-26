const { Cloth } = require("../model")

const create_cloth = (data)=>{
    return Cloth.create(data)
}

const get_cloth = ()=>{
    return Cloth.find()
}

const delete_cloth = (id) => {
    return Cloth.findByIdAndDelete(id)
}

const update_cloth = (id,data) => {
    return Cloth.findByIdAndUpdate(id,data)
}

module.exports = {
    create_cloth,
    get_cloth,
    delete_cloth,
    update_cloth
}