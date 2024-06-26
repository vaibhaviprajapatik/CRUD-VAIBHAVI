const express = require("express")
const { book_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-book",
    //controller
    book_Controller.create_book
)

router.get("/list-book",
    //controller
    book_Controller.get_book
)

router.delete(
    "/book-delete/:bookid",
    //controller
    book_Controller.delete_book
)

router.put("/book-update/:bookid",
    //controller
    book_Controller.update_book
)

module.exports = router