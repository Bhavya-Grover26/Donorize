const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Event =  mongoose.model("Event")

router.get('/allevent',requireLogin,(req,res)=>{
    Event.find()
    .select('name shortdesc photo')
    .populate("postedBy","_id orgname address")
    .then(events => {
        const formattedEvents = events.map(event => ({
          _id: event._id,
          name: event.name,
          shortdesc: event.shortdesc,
          objective: event.objective,
          photo: event.photo,
        }));
  
        res.json({ posts: formattedEvents });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

router.post('/createevent',requireLogin,(req,res)=>{
    const{name,shortdesc,pic,objective,date} = req.body
    if(!name || !shortdesc  || !pic || !objective || !date){
        res.status(422).json({error:"Please add all the fields"})
    }
    req.org.orgpassword = undefined
    const event = new Event({
        name,
        shortdesc,
        objective,
        photo:pic,
        date,
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