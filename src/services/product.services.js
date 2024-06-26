const { Product } = require("../model")

const create_product = (data)=>{
    return Product.create(data)
}

const get_product = ()=>{
    return Product.find()
}

const delete_product = (id) => {
    return Product.findByIdAndDelete(id)
}

const update_product = (id,data) => {
    return Product.findByIdAndUpdate(id,data)
}

module.exports = {
    create_product,
    get_product,
    delete_product,
    update_product
}