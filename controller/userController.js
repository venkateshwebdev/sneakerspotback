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