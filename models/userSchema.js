const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is must"]
    },
    password:{
        type:String,
        required:[true,"Password is must"]
    },
    wishList:[String],
    cart:[String],
    orders:[String]
})


module.exports = mongoose.model("User",userSchema)