const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Event =  mongoose.model("Event")

router.get('/allevent',(req,res)=>{
    Event.find()
    .populate("postedBy","_id orgname address")
    .then(events=>{
        res.json(events)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createevent',requireLogin,(req,res)=>{
    const{name,shortdesc,longdesc,photo} = req.body
    if(!name || !shortdesc || !longdesc){
        res.status(422).json({error:"Please add all the fields"})
    }
    req.org.orgpassword = undefined
    const event = new Event({
        name,
        shortdesc,
        longdesc,
        postedBy:req.org
    })
    event.save().then(result=>{
        res.json({event:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/myevent',requireLogin,(req,res)=>{
    Event.find({postedBy:req.org._id})
    .populate("postedBy","_id orgname address")
    .then(myevent=>{
        res.json({myevent})
    })
    .catch(err=>{
        console.log(err)
    })
})



module.exports = router 