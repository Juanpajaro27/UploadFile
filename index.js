const express = require("express")
const bodyparser = require("body-parser")
const morgan = require("morgan")
const app = express()

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(morgan("dev"))
app.use('/', require('./routes/user.routes'))
app.use('/sons/', require('./routes/Sons.routes'))
app.use('/roles',require('./routes/Roles.routes'))
app.use('/welcome/', require('./routes/Admins.routes'))

app.listen(3000,()=>{
    console.log("Server 3000")
})