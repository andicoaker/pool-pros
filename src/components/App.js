import React, { Component } from 'react';
import Header from './header.js';
import water from '../assets/water-image.jpg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img className="img-fluid" source={water} alt="" />
      </div>
    );
  }
}

export default App;
