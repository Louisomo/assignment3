import React from 'react';
import frame from '../../assets/frame.png';
import frame1 from '../../assets/frame1.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <div className="gpt3__header-title">
        <h1> Join several fast-growing businesses and watch your sales increase by over 32%</h1>
      </div>
      <div className="gpt3__header-image">
        <img src={frame} />
        <img src={frame1} />
      </div>
    </div>
  </div>
);

export default Header;
