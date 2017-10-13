import React, { Component } from 'react';
import TopNav from './top-nav'
import Navbar from './navbar';
import WaterImg from './water-img';
import DealerSearch from './dealer-search';
import Footer from './footer';


import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App container-fluid m-0 p-0 pt-lg-4">
        <TopNav />
        <Navbar />
        <WaterImg />
        <DealerSearch />
        <Footer />
      </div>
    );
  }
}
