import React, { Component } from 'react';
import '../styles/filter.css';

export default class Filter extends Component {

  render () {
    return (

      <div className="d-flex flex-column flex-lg-row filter">

        <div className="d-flex justify-content-between filter-heading">
          <div className="p-2"># Dealers in Zip Code</div>
          <div className="d-flex filter-btn">
            <div className="p-2">Filter Results</div>
            <div className="p-2 btn filter-btn" type="button"><i className="fa fa-caret-down" aria-hidden="true"></i></div>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row filter-list">
          <div className="form-check mr-4 mt-3">
            <label className="form-check-label">
              <input className="form-check-input mr-2" type="checkbox" value="option1"/>Service
            </label>
          </div>
          <div className="form-check mr-4 mt-3">
            <label className="form-check-label">
              <input className="form-check-input mr-2" type="checkbox" value="option1"/>Installation
            </label>
          </div>
          <div className="form-check mr-4 mt-3">
            <label className="form-check-label">
              <input className="form-check-input mr-2" type="checkbox" value="option1"/>Residental
            </label>
          </div>
          <div className="form-check mr-4 mt-3">
            <label className="form-check-label">
              <input className="form-check-input mr-2" type="checkbox" value="option1"/>Commercial
            </label>
          </div>

        </div>

      </div>
    );
  }
}
