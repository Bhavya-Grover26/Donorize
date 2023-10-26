import React, { useState } from 'react';
//import './Donation.css';

const Donation = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    company: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    amount: '',
    donateType: 'once',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvCode: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here
    console.log('Form submitted with values:', formValues);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Personal Information</h3>
            </div>
            <div className="panel-body">
              <div className="bodyTest">
                <form onSubmit={handleSubmit}>
                  {/* Personal information inputs */}
                  {/* Example: */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="firstName" className="control-label">
                        First Name
                      </label>
                      <div>
                        <input
                          id="first-name"
                          name="firstName"
                          type="text"
                          autoComplete="first-name"
                          placeholder="First Name"
                          className="form-control"
                          value={formValues.firstName}
                          onChange={handleInputChange}
                        />
                        <p className="help-block"></p>
                      </div>
                    </div>
                  </div>
                  {/* Repeat similar structure for other inputs */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Donation Details and Payment Details sections */}
      {/* ... (Similar structure as above with inputs and handlers) */}
    </div>
  );
};

export default Donation;
