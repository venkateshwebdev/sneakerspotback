const express = require("express")
const {addProducts,getProducts,getAbout} = require("../controller/productsController")
const router = express.Router()


router.route("/").post(addProducts).get(getProducts)
router.route("/getabout").get(getAbout)
module.exports = router