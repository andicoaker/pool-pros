import React, { Component } from 'react';
import PhoneMobile from '../assets/phone-icon-mobile.png';
import EmailIcon from '../assets/email-icon.png';

export default class DealerCard extends Component {

  render () {

    return (
      <div className="card text-center mx-3">
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <div className="card-text mx-4 px-1 phone-number">
            <img className="my-1" src={PhoneMobile} alt="Phone Icon" />
            <span className="mx-1">Tap to call</span>
            {props.data.phone1}
          </div>
          <p className="card-text font-italic my-3">Cant talk now? Click below to send an email.</p>
          <a href="#" className="btn btn-outline-primary border-cyan contact-btn" data-toggle="modal" data-target="#contactModal">
            <img className="mx-1 email-icon" src={EmailIcon} alt="Email Icon" />
            Contact this Pro
          </a>
          <div className="my-3 biz-hours">
            <p className="card-text my-1 heading">Business Hours</p>
            <p className="card-text my-1">Weekdays {props.data.weekHours.mon}</p>
            <p className="card-text my-1">Saturdays {props.data.weekHours.sat}</p>
            <p className="card-text my-1">Sundays {props.data.weekHours.sun}</p>

          </div>
        </div>
        <div className="card-footer">
         <small className="text-muted">{props.data.certifications}</small>
        </div>
      </div>
    );
  }
}
