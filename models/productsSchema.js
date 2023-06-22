const { default: mongoose, model } = require("mongoose");

const productSchema = new mongoose.Schema({
    title:String,
    brand:String,
    price:String,
    descripition:String,
    images:[String],
    details:String,
    type:String
})

module.exports = model("Product",productSchema)