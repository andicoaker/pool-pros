import React, { Component } from 'react';
import TopNav from './top-nav.js'
import Navbar from './navbar.js';
import WaterImg from './water-img.js';

import '../styles/App.css';
// import '../styles/header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Navbar />
        <WaterImg />
      </div>
    );
  }
}

export default App;
