import React, { Component } from 'react';
// import DealerCard from './dealer-card';
import '../styles/filter.css';

export default class Filter extends Component {

  handleIsCheckedChange(event) {
    this.props.onIsCheckedChange(event.target.checked);
  }


  render () {
    return (

      <div className="d-flex flex-column flex-lg-row filter">

        <div className="d-flex justify-content-between filter-heading">
          <div className="p-2"># Dealers in 28205</div>
          <div className="d-flex filter-btn">
            <div className="p-2">Filter Results</div>
            <div className="p-2 btn btn-light" type="button" data-toggle="collapse" data-target="#filter-list" aria-expanded="false" aria-controls="filter-list"><i className="fa fa-caret-down" aria-hidden="true"></i></div>
          </div>
        </div>

        <div id="filter-list" className="collapse d-flex flex-column flex-lg-row ">
          <div className="form-check mr-4 mt-3">
            <label className="form-check-label">
              <input className="form-check-input mr-2" type="checkbox" value="Service Pro"/>Service
            </label>
          </div>
          <div className="form-check mr-4 mt-3">
            <label className="form-check-label">
              <input className="form-check-input mr-2" type="checkbox" value="Installation Pro"/>Installation
            </label>
          </div>
          <div className="form-check mr-4 mt-3">
            <label className="form-check-label">
              <input className="form-check-input mr-2" type="checkbox" value="Residential Pro"/>Residential
            </label>
          </div>
          <div className="form-check mr-4 mt-3">
            <label className="form-check-label">
              <input className="form-check-input mr-2" type="checkbox" value="Commercial Pro"/>Commercial
            </label>
          </div>
        </div>

      </div>
    );
  }
}
