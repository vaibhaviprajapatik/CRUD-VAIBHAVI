const { Jewellery } = require("../model")

const create_jewellery = (data)=>{
    return Jewellery.create(data)
}

const get_jewellery = ()=>{
    return Jewellery.find()
}

const delete_jewellery = (id) => {
    return Jewellery.findByIdAndDelete(id)
}

const update_jewellery = (id,data) => {
    return Jewellery.findByIdAndUpdate(id,data)
}

module.exports = {
    create_jewellery,
    get_jewellery,
    delete_jewellery,
    update_jewellery
}