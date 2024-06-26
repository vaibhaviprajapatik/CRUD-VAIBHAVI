const express = require("express")
const { electronic_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-electronic",
    //controller
    electronic_Controller.create_electronic
)

router.get("/electronic-list",
    //controller
    electronic_Controller.get_electronic
)

router.delete(
    "/electronic-delete/:electronicid",
    //controller
    electronic_Controller.delete_electronic
)

router.put("/electronic-update/:electronicid",
    //controller
    electronic_Controller.update_electronic
)

module.exports = router