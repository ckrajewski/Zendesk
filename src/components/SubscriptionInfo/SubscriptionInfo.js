import React from 'react';
import './SubscriptionInfo.css';

export default class SubscriptionInfo extends React.Component {
  render() {
    const {
      plan, name, seats, price,
    } = this.props;
    debugger;
    return (
      <div>
        <div styleName="row">
          <div>
            Plan
          </div>
          <div>
            {name}
          </div>
        </div>
        <div styleName="row">
          <div>
            Seats
          </div>
          <div>
            {seats}
          </div>
        </div>
        <div styleName="row">
          <div>
            Price
          </div>
          <div>
            {price}
          </div>
        </div>
      </div>
    );
  }
}
