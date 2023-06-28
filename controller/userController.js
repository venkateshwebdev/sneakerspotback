const User = require("../models/userSchema");

exports.checkUser=async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email:email,password:password})
    if (user){
        console.log("data got",email,password)
        res.json({data:"Login SucessFull",code:true})
    }
    else{
        res.json({data:"Email or Password is wrong",code:false})
    }

}
exports.addUser = async(req,res)=>{
    const {email,password} = req.body;
    console.log(email, password)
    await User.create({
        email:email,
        password:password
    })
    res.json({data:"Registered SucessFully"})
}
exports.addToWhisList = async(req,res)=>{
    const {email,wishlist} = req.body;
    console.log(email,wishlist)
    await User.findOneAndUpdate({email:email},{wishList:wishlist})
    res.json({
        data:wishlist
    })
}
exports.removeFromWhisList = async(req,res)=>{
    const data = req.body;
    res.json({
        data:whislist
    })
}