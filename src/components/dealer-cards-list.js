import React, { Component } from 'react';
import DealerCard from './dealer-card';

import '../styles/dealer-cards.css';

export default class DealerCardsList extends Component {

  render () {

    const dealerCards = this.props.dealers.map((dealer) => {
      let data = dealer.data;
      console.log(data);
      return (
        <DealerCard
          key={data.companyID}
          {...dealer}
          value={dealer}
        />
      );
    })

    return (
      <div className="d-flex flex-wrap card-deck ">
        {dealerCards}
      </div>
    );
  }
}
