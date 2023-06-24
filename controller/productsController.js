const Product = require("../models/productsSchema")
const axios = require('axios')
exports.addProducts = async(req,res)=>{
    data.products.map(async(e)=>await Product.create({
        title:e.name,
        price:e.price*80,
        brand:"Puma",
        images:[e.alternateImages[0]?.sizes.Large.url,e.image.sizes.Best.url],
        details:"Make you feel Mount",
        type:"sneakers",
        descripition:e.description

    }))
    res.send("sucessfull")
}


exports.getAbout = async(req,res) => {
    const data = await Product.find()
    const trend = data.slice(3,8)
    const adidas = data.slice(65,70)
    const puma = data.slice(98,103)
    // console.log(data)
    const final = {trend,adidas,puma}
    res.json({data:final})
}
exports.getProducts = async(req,res)=>{
    const data = await Product.find()
    res.json({
        data:data
    })
}
exports.getProduct = async(req,res)=>{
    const param = req.params.id;
    const data = await Product.findOne({_id:param})
    res.json({
        data:data
    })
}