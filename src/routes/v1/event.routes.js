const express = require("express")
const { event_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-event",
    //controller
    event_Controller.create_event
)

router.get("/event-list",
    //controller
    event_Controller.get_event
)

router.delete(
    "/event-delete/:eventid",
    //controller
    event_Controller.delete_event
)

router.put("/event-update/:eventid",
    //controller
    event_Controller.update_event
)

module.exports = router