import React, { Component } from 'react';

import EmailIcon from '../assets/email-icon.png';
import CircleCheck from '../assets/checkmark-circle.png'
import CircleUnchecked from '../assets/circle-form.png'

import '../styles/modal.css';

export default class Modal extends Component {

  // constructor (props) {
  //   super (props);
  // }

  render () {

    const { name, city, companyID } = this.props
    return (
      <div className="modal-container">
        <a href="#" className="btn btn-outline-primary border-cyan contact-btn" data-toggle="modal" data-target={`contactModal-${companyID}`}>
          <img className="mx-1 email-icon" src={EmailIcon} alt="Email Icon" />
          Contact this Pro
        </a>
        <div className="modal fade" id={`contactModal-${companyID}`} tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="d-flex flex-column justify-content-start p-3 header">
                <p className="m-0">EMAIL</p>
                <h5 className="">{name} of {city}</h5>
                <button type="button" className="close d-none" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Fill out the form below and {name} of {city} will get in touch with you.</p>
                <form>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="customer-name" className="form-control-label">First and last name</label>
                      <img id="circle-check"  src={CircleCheck} alt="Checkmark Icon"/>
                    </div>
                    <input type="text" className="form-control" id="customer-name" />
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="phone-number" className="form-control-label">Phone number</label>
                      <img id="circle-uncheck"  src={CircleUnchecked} alt="Unchecked Circle Icon"/>
                    </div>
                    <input type="text" className="form-control" id="customer-name" />
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="email-address" className="form-control-label">Email address</label>
                      <img id="circle-uncheck"  src={CircleUnchecked} alt="Unchecked Circle Icon"/>
                    </div>
                    <input type="text" className="form-control" id="customer-name" />
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between textarea">
                      <label htmlFor="message-text" className="form-control-label">Comments or questions</label>
                      <p className="font-italic">optional</p>
                    </div>
                    <textarea className="form-control" id="comments-text"></textarea>
                  </div>
                  <div className="form-group mb-0">

                    <p className="form-text m-0">Do you currently own a pool or spa?</p>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" id="inlineCheckbox1" value="option1" /> Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" id="inlineCheckbox2" value="option2" /> No
                      </label>
                    </div>

                  </div>
                </form>
              </div>
              <div className="modal-footer mx-2 px-0">
                <a href="#" data-dismiss="modal">Send</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
