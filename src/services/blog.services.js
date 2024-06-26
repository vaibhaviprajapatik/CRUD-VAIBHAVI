const { Blog } = require("../model")

const create_blog = (data)=>{
    return blog.create(data)
}

const get_blog = ()=>{
    return Blog.find()
}

const delete_blog = (id) => {
    return Blog.findByIdAndDelete(id)
}

const update_blog = (id,data) => {
    return Blog.findByIdAndUpdate(id,data)
}

module.exports = {
    create_blog,
    get_blog,
    delete_blog,
    update_blog
}