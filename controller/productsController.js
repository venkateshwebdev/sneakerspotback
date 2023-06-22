const Product = require("../models/productsSchema")
const axios = require('axios')
exports.addProducts = async(req,res)=>{
    // const response = await axios.get('https://www.shopstyle.com/api/v2/products?abbreviatedCategoryHistogram=true&allowParamScriptScore=true&autodrill=0&b=puma&cat=mens-sneakers&device=desktop&expandedPriceTitle=true&generatedSnippet=false&includeProducts=true&includeSavedQueryId=true&includeSponsoredProducts=true&limit=40&locales=all&max-price=500&maxNumFilters=1000&min-price=50&offset=40&onModel=retailer&pca=true&pid=shopstyle&prevCat=men&productScore=LessPopularityHighEPC&rankFactors=epc%2Cpop1%2Cclk&rankMultipliers=0.324%2C0.0027%2C9.0&segment=contemporary&smartSearch=0&t=new&url=%2Fbrowse%2Fmens-sneakers%2Fpuma&view=angular');
    // const data = response.data;
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