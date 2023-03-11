import React from 'react';
import { commerce, bcommerce, opencartt, salesforce, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <h2 className="brand__heading">Easy front-end checkout integration</h2>
    <p className="brand__description">Use a few lines of javascript code or one of our ecommerce platform plugins.</p>
    <div>
      <img src={commerce} />
    </div>
    <div>
      <img src={bcommerce} />
    </div>
    <div>
      <img src={opencartt} />
    </div>
    <div>
      <img src={salesforce} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
