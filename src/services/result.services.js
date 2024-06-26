const { Result } = require("../model")

const create_result = (data)=>{
    return Result.create(data)
}

const get_result = ()=>{
    return Result.find()
}

const delete_result = (id) => {
    return Result.findByIdAndDelete(id)
}

const update_result = (id,data) => {
    return Result.findByIdAndUpdate(id,data)
}

module.exports = {
    create_result,
    get_result,
    delete_result,
    update_result
}