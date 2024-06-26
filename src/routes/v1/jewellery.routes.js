const express = require("express")
const { jewellery_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-jewellery",
    //controller
    jewellery_Controller.create_jewellery
)

router.get("/jewellery-list",
    //controller
    jewellery_Controller.get_jewellery
)

router.delete(
    "/jewellery-delete/:jewelleryid",
    //controller
    jewellery_Controller.delete_jewellery
)

router.put("/jewellery-update/:jewelleryid",
    //controller
    jewellery_Controller.update_jewellery
)

module.exports = router