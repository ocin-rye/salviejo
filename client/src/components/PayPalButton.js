import React, { Component } from 'react';
import paypal from 'paypal-checkout';
// import scriptLoader from 'react-async-script-loader';

class PayPalButton extends Component {

  renderPayPalButton(){
    paypal.Button.render({

        env: 'sandbox', // Or 'sandbox'

        client: {
            sandbox:    'AdjknLCClFEx2h5QG-MwmFTo0C3WM6SZQ0MwYARlPWOU8fOYVF7FKh12xrmDp_GVJgx6o7A4TD-BGh6d',
            production: 'xxxxxxxxx'
        },

        commit: true, // Show a 'Pay Now' button

        payment: function(data, actions) {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '1.00', currency: 'USD' }
                        }
                    ]
                }
            });
        },

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function(payment) {

                // The payment is complete!
                // You can now show a confirmation message to the customer
            });
        }

    }, '#paypal-button');
  }

  render() {
    return (
      <div>
        <p>PayPal Button Component</p>
        {this.renderPayPalButton()}
        <div id="paypal-button"></div>
      </div>
    );
  }
}

export default PayPalButton;
