const express = require("express")
const { user_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-user",
    //controller
    user_Controller.create_user
)

router.get("/list",
    //controller
    user_Controller.get_user
)

router.delete("/delete-user",
    //controller
    user_Controller.delete_user
)

router.put("/update-user",
    //conatroller
    user_Controller.update_user
)

module.exports = router