import React, { Component } from 'react';
// import '../styles/header.css';

class TopNav extends Component {

  render () {
    return (
      <nav className="d-none d-lg-flex justify-content-end nav top-nav">
        <a className="d-inline-block nav-link" href="">Dealers and Distributors</a>
        <a className="d-inline-block nav-link"href="">Commercial Service <i className="fa fa-external-link" aria-hidden="true"></i></a>
      </nav>

    );
  }
}

export default TopNav;
