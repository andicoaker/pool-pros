import React, { Component } from 'react';
import DealerCard from './dealer-card';
import Modal from './modal';

import '../styles/dealer-cards.css';
import dealers from '../dealers.json';


export default class DealerCardsList extends Component {

  render () {

    const dealerCards = this.props.dealers.map((dealer) => {
      let data = dealer.data;
      console.log(data);

      <DealerCard
        key={dealer.data.companyID}
        value={dealer}
      />
    })

    return (
      <div className="card-deck">
        {dealerCards}
      </div>
    );
  }
}
