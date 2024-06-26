const { Bike } = require("../model")

const create_bike = (data)=>{
    return Bike.create(data)
}

const get_bike = ()=>{
    return Bike.find()
}

const delete_bike = (id) => {
    return Bike.findByIdAndDelete(id)
}

const update_bike = (id,data) => {
    return Bike.findByIdAndUpdate(id,data)
}

module.exports = {
    create_bike,
    get_bike,
    delete_bike,
    update_bike
}