const express = require("express")
const app = express()
const router = require("./router/productsRouter")
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(router)
module.exports = app