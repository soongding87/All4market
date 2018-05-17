import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends Component {
  render() {

    return (
      <StripeCheckout
        name="Buskers"
        description="$10 for 10 credits"
        amount={1000}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
       >
       <button className="waves-effect indigo btn">add Credit</button>
     </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments);
