const express = require("express")
const { cartoon_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-cartoon",
    //controller
    cartoon_Controller.create_cartoon
)

router.get("/list-cartoon",
    //controller
    cartoon_Controller.get_cartoon
)

router.delete(
    "/cartoon-delete/:cartoonid",
    //controller
    cartoon_Controller.delete_cartoon
)

router.put("/cartoon-update/:cartoonid",
    //controller
    cartoon_Controller.update_cartoon
)

module.exports = router