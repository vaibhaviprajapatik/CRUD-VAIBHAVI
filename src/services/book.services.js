const { Book } = require("../model")

const create_book = (data)=>{
    return Book.create(data)
}

const get_book = ()=>{
    return Book.find()
}

const delete_book = (id) => {
    return Book.findByIdAndDelete(id)
}

const update_book = (id,data) => {
    return Book.findByIdAndUpdate(id,data)
}

module.exports = {
    create_book,
    get_book,
    delete_book,
    update_book
}