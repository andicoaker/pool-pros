import React, { Component } from 'react';
import TopNav from './top-nav'
import Navbar from './navbar';
import WaterImg from './water-img';
import Filter from './filter';

import '../styles/App.css';
// import '../styles/header.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Navbar />
        <WaterImg />
        <Filter />
      </div>
    );
  }
}
