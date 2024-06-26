const express = require("express")
const { tree_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-tree",
    //controller
    tree_Controller.create_tree
)

router.get("/tree-list",
    //controller
    tree_Controller.get_tree
)

router.delete(
    "/tree-delete/:treeid",
    //controller
    tree_Controller.delete_tree
)

router.put("/tree-update/:treeid",
    //controller
    tree_Controller.update_tree
)

module.exports = router