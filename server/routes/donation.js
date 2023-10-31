// Import necessary modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import the Donation model
const Donation = mongoose.model('Donation');

// Middleware to check if the user is authenticated
const requireLogin = require('../middleware/requireLogin')

// Create donation route
router.post('/createdonation', requireLogin, (req, res) => {
  const { phone, amount, date, eventBy,eventName, doneBy , category} = req.body;
  if(!phone || !amount || !category ){
    res.status(422).json({error:"Please add all the fields"})
}
  // Create a new donation object
  const donation = new Donation({
    phone,
    amount,
    category,
    date,
    doneBy: req.user._id, // Assuming you have user information in req.user after authentication
    eventBy,
    eventName,

  });

  // Save the donation to the database
  donation.save()
    .then((result) => {
      res.json({ donation: result });
    })
    .catch((error) => {
      console.error('Error saving donation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

router.get('/mydonations', requireLogin, (req, res) => {
  // Find donations associated with the authenticated user
  Donation.find({ doneBy: req.user._id })
    .then((donations) => {
      res.json({ donations });
    })
    .catch((error) => {
      console.error('Error fetching user donations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Export the router
module.exports = router;
