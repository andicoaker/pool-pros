import React, { Component } from 'react';
import Modal from './modal';
import PhoneMobile from '../assets/phone-icon-mobile.png';
import EmailIcon from '../assets/email-icon.png';
import '../styles/dealer-cards.css';
// import dealers from '../dealers.json';


export default class DealerCards extends Component {

  render () {

    return (

      this.props.dealers.map((dealer) => {
        let data = dealer.data;

      }),

      <div className="card-deck">

        <div className="card text-center mx-3" key="data.companyID">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <div className="card-text mx-4 px-1 phone-number">
              <img className="my-1" src={PhoneMobile} alt="Phone Icon" />
              <span className="mx-1">Tap to call</span>
              {data.phone1}
            </div>
            <p className="card-text font-italic my-3">Cant talk now? Click below to send an email.</p>
            <a href="#" className="btn btn-outline-primary border-cyan contact-btn" data-toggle="modal" data-target="#contactModal">
              <img className="mx-1 email-icon" src={EmailIcon} alt="Email Icon" />
              Contact this Pro
            </a>
            <div className="my-3 biz-hours">
              <p className="card-text my-1 heading">Business Hours</p>
              <p className="card-text my-1">Weekdays {data.weekHours.mon}</p>
              <p className="card-text my-1">Saturdays {data.weekHours.sat}</p>
              <p className="card-text my-1">Sundays {data.weekHours.sun}</p>

            </div>

          </div>
          <div className="card-footer">
           <small className="text-muted">{data.certifications}</small>
          </div>
        </div>

      </div>
    );
  }
}
