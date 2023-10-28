import React, { useState } from 'react';
import './Donation.css'

function Donation() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState('One-Time');
  const [emailReceipt, setEmailReceipt] = useState(false);
  const [giveAnonymously, setGiveAnonymously] = useState(false);
  const [addToEmailList, setAddToEmailList] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleEmailReceiptChange = () => {
    setEmailReceipt(!emailReceipt);
  };

  const handleGiveAnonymouslyChange = () => {
    setGiveAnonymously(!giveAnonymously);
  };

  const handleAddToEmailListChange = () => {
    setAddToEmailList(!addToEmailList);
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Amount:', amount);
    console.log('Donation Type:', paymentType);
    console.log('Email Receipt:', emailReceipt);
    console.log('Give Anonymously:', giveAnonymously);
    console.log('Add to Email List:', addToEmailList);
  };

  return (
    <div className="donation-container">
      <div className="donation-box">
        <div className="title">Donation Information</div>
        <div className="fields">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="amount">
          <div className={`button ${amount === 30 ? 'selected' : ''}`} onClick={() => setAmount(30)}>$30</div>
          <div className={`button ${amount === 50 ? 'selected' : ''}`} onClick={() => setAmount(50)}>$50</div>
          <div className={`button ${amount === 100 ? 'selected' : ''}`} onClick={() => setAmount(100)}>$100</div>
          <div className="button">
            $<input
              type="text"
              className="set-amount"
              placeholder=""
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>
        <div className="switch">
          <input
            type="radio"
            className="switch-input"
            name="view"
            value="One-Time"
            id="one-time"
            checked={paymentType === 'One-Time'}
            onChange={handlePaymentTypeChange}
          />
          <label htmlFor="one-time" className="switch-label switch-label-off">
            One-Time
          </label>
          <input
            type="radio"
            className="switch-input"
            name="view"
            value="Monthly"
            id="monthly"
            checked={paymentType === 'Monthly'}
            onChange={handlePaymentTypeChange}
          />
          <label htmlFor="monthly" className="switch-label switch-label-on">
            Monthly
          </label>
          <span className="switch-selection"></span>
        </div>
        <div className="checkboxes">
          <input
            type="checkbox"
            id="receipt"
            className="checkbox"
            checked={emailReceipt}
            onChange={handleEmailReceiptChange}
          />
          <label htmlFor="receipt">Email Me A Receipt</label>
          <br />
          <input
            type="checkbox"
            id="anon"
            className="checkbox"
            checked={giveAnonymously}
            onChange={handleGiveAnonymouslyChange}
          />
          <label htmlFor="anon">Give Anonymously</label>
          <br />
          <input
            type="checkbox"
            id="list"
            className="checkbox"
            checked={addToEmailList}
            onChange={handleAddToEmailListChange}
          />
          <label htmlFor="list">Add Me To Email List</label>
        </div>
        <div className="confirm"></div>
        <div className="donate-button" onClick={handleSubmit}>
          <i className="fa fa-credit-card"></i> Donate Now
        </div>
      </div>
    </div>
  );
}

export default Donation;
