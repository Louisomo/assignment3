import React from 'react';
import mobile from '../../assets/mobile.png';
import mobile2 from '../../assets/mobile2.png';
import app from '../../assets/app.png';
import app1 from '../../assets/app1.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-content">
      <div className="gpt3__possibility-test">
        <h1>Join CredPal today</h1>
        <p>Join the millions of happy customers using CredPal to access credit, make payments, invest, and more by downloading the CredPal app.</p>
      </div>
      <div className="gpt3__possibility-images">
        <img src={app} alt="CredPal app" />
        <img src={app1} alt="CredPal app" />
      </div>
    </div>
    <div className="gpt3__possibility-image">
    <div className="gpt3__possibility-mobile">
        <img src={mobile} alt="Mobile device with CredPal app" />
      </div>
  </div>
    <div className="gpt3__possibility-mobile">
        <img src={mobile2} alt="Mobile device with CredPal app" />
      </div>
    </div>
);

export default Possibility;
