import React from 'react';
import Modal from './modal';

import PhoneMobile from '../assets/phone-icon-mobile.png';
import '../styles/dealer-cards.css';


    // add turnary if weekHours.sat = "" then return Closed, otherwise return self?

const DealerCard = (props) => {
  const { certifications, weekHours, name, phone1, companyID, city } = props.data
  return (
    <div className="card mx-3 text-center">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text mx-4 px-1 phone-number">
          <img className="my-1" src={PhoneMobile} alt="Phone Icon" />
          <span className="mx-1">Tap to call</span>
          {phone1}
        </div>
        <p className="card-text font-italic my-3">Cant talk now? Click below to send an email.</p>

        <Modal
          key={companyID}
          name={name}
          city={city}
        />

        <div className="my-3 biz-hours">
          <p className="card-text my-1 heading">Business Hours</p>
          <p className="card-text my-1">Weekdays {weekHours.mon}</p>
          <p className="card-text my-1">Saturdays {weekHours.sat}</p>
          <p className="card-text my-1">Sundays {weekHours.sun}</p>
        </div>
      </div>
      <div className="card-footer">
       <p className="text-muted mx-2">{certifications}</p>
      </div>
    </div>
  )
}
export default DealerCard
