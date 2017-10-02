import React, { Component } from 'react';
import Water from '../assets/water-image.png'
// import '../styles/header.css';

export default class WaterImg extends Component {

  render () {
    return (
      <div >
        <img id="water-image"  src={Water} alt="" />
      </div>
    );
  }
}
