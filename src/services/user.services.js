const { User } = require("../model")

const create_admin = (data) => {
    return User.create(data)
}

const get_user = () => {
    return User.find()
} 

const delete_user = (id) => {
    return User.findByIdAndDelete(id)
}

const update_user = (id,data) =>{
    return User.findByIdAndUpdate(id,data)
}

module.exports = {
    create_admin,
    get_user,
    delete_user,
    update_user
}