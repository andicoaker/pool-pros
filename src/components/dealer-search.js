import React, { Component } from 'react';
import Filter from './filter';
import DealerCardsList from './dealer-cards-list';
import dealers from '../dealers.json';


export default class DealerSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      dealers: dealers.dealers
    };

  }

  handleIsCheckedChange(isChecked) {
    this.setState({
      isChecked: isChecked
    })
  }

  render () {
    return (
      <div className="">
        <Filter
          isChecked={this.state.isChecked}
          onIsCheckedChange={this.handleIsCheckedChange}
        />
        <DealerCardsList
          dealers={this.state.dealers}
          isChecked={this.state.isChecked}
        />
      </div>
    );
  }
}
