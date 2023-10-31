const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const donationSchema = new mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    doneBy:{
        type:ObjectId,
        ref:"User"
    },
    date: {
        type: Date,
        required: true,
    },
    eventBy:{
        type:ObjectId,
        ref:"Event"
    },
    eventName:{
        type:String,
        ref:"Event"
    },
})

mongoose.model("Donation",donationSchema)
