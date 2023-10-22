const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT=5000
const {MONGOURI} = require('./keys')


require('./models/user')
require('./models/org')
require('./models/event')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/event'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoooooooo")
})

mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})