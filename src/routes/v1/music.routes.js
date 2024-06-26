const express = require("express")
const { music_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-music",
    //controller
    music_Controller.create_music
)

router.get("/music-list",
    //controller
    music_Controller.get_music
)

router.delete(
    "/music-delete/:musicid",
    //controller
    music_Controller.delete_music
)

router.put("/music-update/:musicid",
    //controller
    music_Controller.update_music
)

module.exports = router