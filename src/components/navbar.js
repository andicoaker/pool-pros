import React, { Component } from 'react';
import Logo from '../assets/pool-pros-logo.png';

import '../styles/navbar.css';

export default class Navbar extends Component {

  render () {
    return (
      <nav className="navbar d-flex justify-content-around p-0 navbar-light navbar-expand-lg">
        <img className="p-0 order-lg-1" src={Logo} alt="Logo" />
        <button type="button" className="btn btn-outline-primary btn-sm order-lg-3">
          <i className="fa fa-map-marker pr-1" aria-hidden="true"></i>
          Find A <span className="d-none d-lg-inline-block pool-span"> Pool </span> Pro
        </button>
        <button className="navbar-toggler rounded-circle m-1 p-1" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse order-lg-2 bg-light" id="navbarContent">
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item d-lg-none py-15 menu-title">MENU</li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pools & Spas
                <i className="fa fa-chevron-right d-lg-none" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Supplies
                <i className="fa fa-chevron-right d-lg-none" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
                <i className="fa fa-chevron-right d-lg-none" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item nav-item-bottom ">
              <a className="nav-link" href="#">
                Services
                <i className="fa fa-chevron-right d-lg-none" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
}
