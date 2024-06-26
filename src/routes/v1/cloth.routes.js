const express = require("express")
const { cloth_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-cloth",
    //controller
    cloth_Controller.create_cloth
)

router.get("/cloth-list",
    //controller
    cloth_Controller.get_cloth
)

router.delete(
    "/cloth-delete/:clothid",
    //controller
    cloth_Controller.delete_cloth
)

router.put("/cloth-update/:clothid",
    //controller
    cloth_Controller.update_cloth
)

module.exports = router