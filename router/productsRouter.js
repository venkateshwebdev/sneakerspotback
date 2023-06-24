const express = require("express")
const {addProducts,getProducts,getAbout,getProduct} = require("../controller/productsController")
const router = express.Router()


router.route("/").post(addProducts).get(getProducts)
router.route("/getabout").get(getAbout)
router.route("/:id").get(getProduct)
module.exports = router