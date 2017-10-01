import React, { Component } from 'react';
import water from '../assets/water-image.jpg'
// import '../styles/header.css';

class WaterImg extends Component {

  render () {
    return (
      <div >
        <img id="water-image" className="img-fluid" source={water} alt="" />
      </div>
    );
  }
}

export default WaterImg;
