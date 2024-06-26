const express = require("express")
const { toy_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-toy",
    //controller
    toy_Controller.create_toy
)

router.get("/toy-list",
    //controller
    toy_Controller.get_toy
)

router.delete(
    "/toy-delete/:toyid",
    //controller
    toy_Controller.delete_toy
)

router.put("/toy-update/:toyid",
    //controller
    toy_Controller.update_toy
)

module.exports = router