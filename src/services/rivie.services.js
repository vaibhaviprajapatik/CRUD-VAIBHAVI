const { River } = require("../model")

const create_river = (data)=>{
    return River.create(data)
}

const get_river = ()=>{
    return River.find()
}

const delete_river = (id) => {
    return River.findByIdAndDelete(id)
}

const update_river = (id,data) => {
    return River.findByIdAndUpdate(id,data)
}

module.exports = {
    create_river,
    get_river,
    delete_river,
    update_river
}