const express = require("express")
const { river_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-river",
    //controller
    river_Controller.create_river
)

router.get("/river-list",
    //controller
    river_Controller.get_river
)

router.delete(
    "/river-delete/:riverid",
    //controller
    river_Controller.delete_river
)

router.put("/river-update/:riverid",
    //controller
    river_Controller.update_river
)

module.exports = router