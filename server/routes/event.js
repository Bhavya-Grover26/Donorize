const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const requireOrgLogin = require('../middleware/requireOrgLogin')
const Event =  mongoose.model("Event")
const Donation = mongoose.model('Donation');

router.get('/allevent',(req,res)=>{
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

router.post('/createevent',requireOrgLogin,(req,res)=>{
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

router.get('/myevent', requireOrgLogin, async (req, res) => {
    try {
      const myevents = await Event.find({ postedBy: req.org._id }).populate(
        'postedBy',
        '_id orgname address'
      );
  
      // Fetch donation counts for each event
      const eventsWithDonationCount = await Promise.all(
        myevents.map(async (event) => {
          const donations = await Donation.find({
            eventBy: event._id,
          });
  
          console.log(`Donations for event ${event.name}:`, donations);
  
          const donationCount = donations.length;
          const moneyAmount = donations
            .filter((donation) => donation.category === 'money')
            .reduce((acc, donation) => acc + donation.amount, 0);
  
          // Add the donationCount and moneyAmount to the event object
          return { ...event.toObject(), donationCount, moneyAmount };
        })
      );
  
      res.json({ myevents: eventsWithDonationCount });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


module.exports = router 