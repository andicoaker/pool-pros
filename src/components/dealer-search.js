import React, { Component } from 'react';
import Filter from './filter';
import DealerCards from './dealer-cards';
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
      <div className="App">
        <Filter
          isChecked={this.state.isChecked}
          onIsCheckedChange={this.handleIsCheckedChange}
        />
        <DealerCards
          isChecked={this.state.isChecked}
        />
      </div>
    );
  }
}
