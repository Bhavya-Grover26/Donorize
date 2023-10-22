const mongoose = require('mongoose')

const orgSchema = new mongoose.Schema({
    orgname:{
        type:String,
        required:true
    },
    orgemail:{
        type:String,
        required:true
    },
    orgpassword:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    
})

mongoose.model("Org",orgSchema)