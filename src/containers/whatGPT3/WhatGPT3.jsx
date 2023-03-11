import React from 'react';
import Feature from '../../components/feature/Feature';
import imgUrl1 from '../../assets/imgUrl1.png';
import imgUrl2 from '../../assets/imgUrl2.png';
import imgUrl3 from '../../assets/imgUrl3.png';
import imgUrl4 from '../../assets/imgUrl4.png';
import './whatGPT3.css';

const WhatGPT3 = () => (
<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
  <div className="gpt3__whatgpt3-feature">
    <h1>Increase conversion for your business</h1>
  </div>
  <div className="gpt3__whatgpt3-heading">
    <p>Expand your payment options to include CredPal Pay. This way, your customers no longer abandon cart. You get full payment at the point of sale, while customers pay us later. It's a win-win for all.</p>
  </div>
  <div className="gpt3__whatgpt3-container">
    <div>
      <Feature
        style={{ backgroundImage: `url(${imgUrl1})` }}
        title={<><img src={imgUrl1} alt="icon" /><br />Active Shoppers</>}
        text="Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you."
      />
    </div>
    <div>
      <Feature
        style={{ backgroundImage: `url(${imgUrl2})` }}
        title={<><img src={imgUrl2} alt="icon" /><br />Increased Sales</>}
        text="With CredPal Pay customers transacting daily from their favourite merchants, you're sure to get a significant boost in revenue."
      />
    </div>
    <div>
      <Feature
        style={{ backgroundImage: `url(${imgUrl3})` }}
        title={<><img src={imgUrl3} alt="icon" /><br />Full Payments</>}
        text="Whether it's online or offline shopping, you're guaranteed full payment on all CredPal buy now pay later purchases."
      />
    </div>
    <div>
      <Feature
        style={{ backgroundImage: `url(${imgUrl4})` }}
        title={<><img src={imgUrl4} alt="icon" /><br />Business Credit</>}
        text="As a CredPal merchant, you are qualified for a business credit up to 1 million Naira to increase the cash flow of your business."
      />
    </div>
  </div>
</div>
);

export default WhatGPT3;