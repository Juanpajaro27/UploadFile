const express = require("express")
const bodyparser = require("body-parser")
const morgan = require("morgan")
const app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(morgan("dev"))

app.use('/user/', require("./routes/user"))
//app.use('/api/sons/',require("./routes/Sons"))

app.listen(3000,()=>{
    console.log("Server 3000")
})