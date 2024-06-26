const { Subject } = require("../model")

const create_subject = (data)=>{
    return Subject.create(data)
}

const get_subject = ()=>{
    return Subject.find()
}

const delete_subject = (id) => {
    return Subject.findByIdAndDelete(id)
}

const update_subject = (id,data) => {
    return Subject.findByIdAndUpdate(id,data)
}

module.exports = {
    create_subject,
    get_subject,
    delete_subject,
    update_subject
}