const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const eventSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    shortdesc:{
        type:String,
        required:true
    },
    objective:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"Org"
    },
    recieved:{
        type:String,
        ref:"Donation"
    }
})

mongoose.model("Event",eventSchema)