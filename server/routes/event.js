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

    // Fetch all donations for the organization
    const allDonations = await Donation.find({
      eventBy: { $in: myevents.map(event => event._id) },
    });

    // Constants for each category
    const CATEGORY_FOOD = 'food';
    const CATEGORY_MONEY = 'money';
    const CATEGORY_CLOTH = 'cloth';
    const CATEGORY_BOOKS = 'books';

    // Initialize counts for each category
    let countFood = 0;
    let countMoney = 0;
    let countCloth = 0;
    let countBooks = 0;

    // Aggregate data for each day (from the second code)
    const eventsWithDonationCount = await Promise.all(
      myevents.map(async (event) => {
        const donations = await Donation.find({
          eventBy: event._id,
        });

        console.log(`Donations for event ${event.name}:`, donations);

        // Increment counts based on category
        donations.forEach((donation) => {
          if (donation.category === CATEGORY_FOOD) {
            countFood++;
          } else if (donation.category === CATEGORY_MONEY) {
            countMoney++;
          } else if (donation.category === CATEGORY_CLOTH) {
            countCloth++;
          } else if (donation.category === CATEGORY_BOOKS) {
            countBooks++;
          }
        });

        const donationCount = donations.length;
        const moneyAmount = donations
          .filter((donation) => donation.category === CATEGORY_MONEY)
          .reduce((acc, donation) => acc + donation.amount, 0);

        const donationDatesSet = new Set(donations.map((donation) => donation.date));
        const donationDates = Array.from(donationDatesSet);

        // Return an object for each event with its specific donation dates
        return { ...event.toObject(), donationCount, moneyAmount, donationDates };
      })
    );

    // Calculate totals for each category
    const totalFood = countFood;
    const totalMoney = countMoney;
    const totalCloth = countCloth;
    const totalBooks = countBooks;

    // Aggregate data for each organization (from the first code)
    const dateToDonationCountMap = {};
    allDonations.forEach((donation) => {
      const date = new Date(donation.date).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
      });
      if (dateToDonationCountMap[date]) {
        dateToDonationCountMap[date]++;
      } else {
        dateToDonationCountMap[date] = 1;
      }
    });

    const aggregatedData = Object.keys(dateToDonationCountMap).map((date) => {
      const donationCount = dateToDonationCountMap[date];
      return { orgId: req.org._id, donationCount, moneyAmount: 0, donationDates: [date] };
    });

    res.json({
      myevents: eventsWithDonationCount,
      aggregatedData,
      categoryTotals: {
        totalFood,
        totalMoney,
        totalCloth,
        totalBooks,
      },
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




  
  


module.exports = router 