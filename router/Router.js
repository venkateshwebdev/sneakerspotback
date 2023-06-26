const express = require("express")
const {addProducts,getProducts,getAbout,getProduct} = require("../controller/productsController")
const { checkUser, addUser } = require("../controller/userController")
const router = express.Router()


router.route("/").post(addProducts).get(getProducts)
router.route("/getabout").get(getAbout)
router.route("/checkuser").post(checkUser)
router.route("/adduser").post(addUser)
router.route("/:id").get(getProduct)
 
module.exports = router