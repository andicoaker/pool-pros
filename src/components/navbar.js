import React, { Component } from 'react';
import Logo from '../assets/pool-pros-logo.png';

import '../styles/navbar.css';

export default class Navbar extends Component {

  render () {
    return (
      <div className="nav-bar">
        <nav className="navbar navbar-light navbar-expand-lg" >
          <img src={Logo} alt="Logo" />
          <button type="button" className="btn btn-outline-primary btn-sm float-right">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            Find A <span className="d-none d-lg-inline-block pool-span"> Pool </span> Pro
          </button>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item menu-title">MENU</li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pools & Spas
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Supplies
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item nav-item-bottom">
                <a className="nav-link" href="#">
                  Services
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    );
  }
}
