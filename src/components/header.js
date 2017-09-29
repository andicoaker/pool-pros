import React, { Component } from 'react';
import logo from '../assets/pool-pros-logo.svg';

class Header extends Component {

  render () {
    return (

        <nav className="navbar fixed-top navbar-dark" >
          <img src={logo} alt="Logo" />
          <button type="button" className="btn btn-outline-primary"><i className="fa fa-map-marker" aria-hidden="true"></i>Find A <span>Pool </span>Pro</button>
        </nav>

    );
  }
}

export default Header;
