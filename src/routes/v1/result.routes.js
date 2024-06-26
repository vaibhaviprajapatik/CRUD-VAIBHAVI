const express = require("express")
const { result_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-result",
    //controller
    result_Controller.create_result
)

router.get("/result-list",
    //controller
    result_Controller.get_result
)

router.delete(
    "/result-delete/:resultid",
    //controller
    result_Controller.delete_result
)

router.put("/result-update/:resultid",
    //controller
    result_Controller.update_result
)

module.exports = router