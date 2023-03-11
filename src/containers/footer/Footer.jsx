import React from 'react';
import logo from '../../assets/logo.png';
import app from '../../assets/app.png';
import app1 from '../../assets/app1.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>CredPal is a revolutionary credit solution geared towards providing seamless credit access for businesses and individuals across developing economies.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Product</h4>
        <p>CredPal Personal</p>
        <p>CredPal Business</p>
        <p>CredPal Lifestyle</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Legal</h4>
        <p>Customer Terms of use </p>
        <p>Merchant Terms of service</p>
        <p>Privacy Notice</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Support</h4>
        <p>FAQs</p>
        <p>Blog</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get App</h4>
        <img src={app}/>
        <img src={app1}/>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>CredPal financial services are offered by BishopGate Microfinance Bank, fully licensed and regulated by the Central bank of Nigeria. CredPal offers innovative financial solutions including payment, savings and credit services. Our credit solution allows businesses and individuals to buy anything and pay for it in instalments across online and offline Merchants by providing them with instant access to credit at the point of checkout.</p>
    </div>
  </div>
);

export default Footer;