const express = require("express")
const { admin_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-admin",
    //controller
    admin_Controller.create_admin
)

router.get("/admin-list",
    //controller
    admin_Controller.get_admin
)

router.delete(
    "/admin-delete/:adminid",
    //controller
    admin_Controller.delete_admin
)

router.put("/admin-update/:adminid",
    //controller
    admin_Controller.update_admin
)

module.exports = router