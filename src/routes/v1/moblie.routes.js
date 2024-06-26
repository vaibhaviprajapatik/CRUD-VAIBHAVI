const express = require("express")
const { moblie_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-moblie",
    //controller
    moblie_Controller.create_moblie
)

router.get("/moblie-list",
    //controller
    moblie_Controller.get_moblie
)

router.delete(
    "/moblie-delete/:moblieid",
    //controller
    moblie_Controller.delete_moblie
)

router.put("/moblie-update/:moblieid",
    //controller
    moblie_Controller.update_moblie
)

module.exports = router