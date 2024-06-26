const { Tree } = require("../model")

const create_tree = (data)=>{
    return Tree.create(data)
}

const get_tree = ()=>{
    return Tree.find()
}

const delete_tree = (id) => {
    return Tree.findByIdAndDelete(id)
}

const update_tree = (id,data) => {
    return Tree.findByIdAndUpdate(id,data)
}

module.exports = {
    create_tree,
    get_tree,
    delete_tree,
    update_tree
}