import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Blog />
    <Brand />
    <Features />
    <CTA />
    <Possibility />
    <Footer />
  </div>
);

export default App;