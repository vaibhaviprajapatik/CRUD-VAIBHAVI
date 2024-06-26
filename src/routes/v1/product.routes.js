const express = require("express")
const { product_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-product",
    //controller
    product_Controller.create_product
)

router.get("/product-list",
    //controller
    product_Controller.get_product
)

router.delete(
    "/product-delete/:productid",
    //controller
    product_Controller.delete_product
)

router.put("/product-update/:productid",
    //controller
    product_Controller.update_product
)

module.exports = router