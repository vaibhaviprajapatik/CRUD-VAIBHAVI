const express = require("express")
const { subject_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-subject",
    //controller
    subject_Controller.create_subject
)

router.get("/subject-list",
    //controller
    subject_Controller.get_subject
)

router.delete(
    "/subject-delete/:subjectid",
    //controller
    subject_Controller.delete_subject
)

router.put("/subject-update/:subjectid",
    //controller
    subject_Controller.update_subject
)

module.exports = router