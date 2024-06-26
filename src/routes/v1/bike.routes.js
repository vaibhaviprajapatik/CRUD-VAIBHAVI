const express = require("express")
const { bike_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-bike",
    //controller
    bike_Controller.create_bike
)

router.get("/bike-list",
    //controller
    bike_Controller.get_bike
)

router.delete(
    "/bike-delete/:bikeid",
    //controller
    bike_Controller.delete_bike
)

router.put("/bike-update/:bikeid",
    //controller
    bike_Controller.update_bike
)

module.exports = router