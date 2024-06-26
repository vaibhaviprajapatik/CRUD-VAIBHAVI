const express = require("express")
const { blog_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-blog",
    //controller
    blog_Controller.create_blog
)

router.get("/blog-list",
    //controller
    blog_Controller.get_blog
)

router.delete(
    "/blog-delete/:blogid",
    //controller
    blog_Controller.delete_blog
)

router.put("/blog-update/:blogid",
    //controller
    blog_Controller.update_blog
)

module.exports = router