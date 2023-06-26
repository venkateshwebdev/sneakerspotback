const express = require("express")
const app = express()
const router = require("./router/Router")
const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors())

app.use(express.json())
app.use((req, res, next) => {
    console.log("req is ", req.body);
    next();
})
app.use(express.urlencoded({ extended: false }));
app.use(router)
module.exports = app