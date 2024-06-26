const { Event } = require("../model")

const create_event = (data)=>{
    return Event.create(data)
}

const get_event = ()=>{
    return Event.find()
}

const delete_event = (id) => {
    return Event.findByIdAndDelete(id)
}

const update_event = (id,data) => {
    return Event.findByIdAndUpdate(id,data)
}

module.exports = {
    create_event,
    get_event,
    delete_event,
    update_event
}