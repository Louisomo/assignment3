import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
  <h1>More benefits with CredPal Pay</h1>
  <p>We have even more in stock for you apart from what we have told you.</p>
  <div className="gpt3__features-container">
    <div className="row">
      <div className="col-md-3">
        <h2>01. Quick onboarding</h2>
        <p>Become a CredPal merchant in less than 24 hours and enjoy a seamless merchant experience.</p>
      </div>
      <div className="col-md-3">
        <h2>02. Business exposure</h2>
        <p>Get access to existing CredPal customers as a CredPal merchant upon sign up.</p>
      </div>
      <div className="col-md-3">
        <h2>03. Real-time dashboard</h2>
        <p>Get access to a standard merchant dashboard and keep track of all orders in your store.</p>
      </div>
      <div className="col-md-3">
        <h2>04. Fraud detection</h2>
        <p>Detect suspicious purchases when they happen before any damage is done at all.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <h2>05. Increased sales</h2>
        <p>Customers with insufficient funds have more purchasing power with CredPal card.</p>
      </div>
      <div className="col-md-3">
        <h2>06. 1 million Naira business credit</h2>
        <p>We give you the capital you need to grow and build your business into a profit-making venture.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <h2>07. Payment cards for employees</h2>
        <p>Generate virtual CredPal cards for all your employees for seamless transactions.</p>
      </div>
      <div className="col-md-3">
        <h2>08. Seamless processing</h2>
        <p>All orders are approved within 24 hours.</p>
      </div>
    </div>
  </div>
</div>
);

export default Features;
