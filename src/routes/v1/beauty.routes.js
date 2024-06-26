const express = require("express")
const { beauty_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-beauty",
    //controller
    beauty_Controller.create_beauty
)

router.get("/beauty-list",
    //controller
    beauty_Controller.get_beauty
)

router.delete(
    "/beauty-delete/:beautyid",
    //controller
    beauty_Controller.delete_beauty
)

router.put("/beauty-update/:beautyid",
    //controller
    beauty_Controller.update_beauty
)

module.exports = router