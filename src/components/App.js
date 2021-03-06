import React, { Component } from 'react';
import TopNav from './top-nav'
import Navbar from './navbar';
import WaterImg from './water-img';
import Filter from './filter';
import DealerCards from './dealer-cards';
import Footer from './footer';
import Modal from './modal';

import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Navbar />
        <WaterImg />
        <Filter />
        <DealerCards />
        <Modal />
        <Footer />
      </div>
    );
  }
}
