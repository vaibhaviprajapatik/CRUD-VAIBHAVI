const express = require("express")
const { movie_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-movie",
    //controller
    movie_Controller.create_movie
)

router.get("/movie-list",
    //controller
    movie_Controller.get_movie
)

router.delete(
    "/movie-delete/:movieid",
    //controller
    movie_Controller.delete_movie
)

router.put("/movie-update/:movieid",
    //controller
    movie_Controller.update_movie
)

module.exports = router