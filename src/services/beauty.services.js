const { Beauty } = require("../model")

const create_beauty = (data)=>{
    return Beauty.create(data)
}

const get_beauty = ()=>{
    return Beauty.find()
}

const delete_beauty = (id) => {
    return Beauty.findByIdAndDelete(id)
}

const update_beauty = (id,data) => {
    return Beauty.findByIdAndUpdate(id,data)
}

module.exports = {
    create_beauty,
    get_beauty,
    delete_beauty,
    update_beauty
}