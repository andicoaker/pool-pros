import React, { Component } from 'react';
// import '../styles/header.css';

export default class TopNav extends Component {

  render () {
    return (
      <nav className="nav d-none fixed-top d-lg-flex justify-content-end  top-nav">
        <a className="d-inline-block nav-link" href="">Dealers and Distributors</a>
        <a className="d-inline-block nav-link"href="">Commercial Service <i className="fa fa-external-link" aria-hidden="true"></i></a>
      </nav>

    );
  }
}
