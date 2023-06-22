const app = require("./app")
require("./utils/db").connect()
app.listen(8000,()=>{
    console.log("server is running at port 8000")
})