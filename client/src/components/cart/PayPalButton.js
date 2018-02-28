import React, { Component } from 'react';
import paypal from 'paypal-checkout';
import { connect } from 'react-redux';
// import scriptLoader from 'react-async-script-loader';

/* eslint-disable no-unused-vars */

const renderPayPalButton = () => {
  paypal.Button.render(
    {
      env: 'sandbox', // Or 'sandbox'

      client: {
        sandbox: 'AWdr6v5LTghGkA58OdS0HSvoi2DisbN1mZrU4HPv6ADa8xrWYv-KSUssTeYOSv9S363az1sCxAO31z-m',
        production: 'xxxxxxxxx',
      },

      commit: true, // Show a 'Pay Now' button

      payment(data, actions) {
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: {
                  total: '30.11',
                  currency: 'USD',
                  details: {
                    subtotal: '30.00',
                    tax: '0.07',
                    shipping: '0.03',
                    handling_fee: '1.00',
                    shipping_discount: '-1.00',
                    insurance: '0.01',
                  },
                },
                item_list: {
                  items: [
                    {
                      name: 'hat',
                      description: 'Brown hat.',
                      quantity: '5',
                      price: '3',
                      tax: '0.01',
                      sku: '1',
                      currency: 'USD',
                    },
                    {
                      name: 'handbag',
                      description: 'Black handbag.',
                      quantity: '1',
                      price: '15',
                      tax: '0.02',
                      sku: 'product34',
                      currency: 'USD',
                    },
                  ],
                },
              },
            ],
          },
        });
      },

      onAuthorize(data, actions) {
        return actions.payment.execute().then((payment) => {
          // The payment is complete!
          // You can now show a confirmation message to the customer
        });
      },
    },
    '#paypal-button',
  );
};

/* eslint-disable no-unused-vars */

class PayPalButton extends Component {
  render() {
    return (
      <div>
        <p>PayPal Button Component</p>
        {renderPayPalButton()}
        {console.log(this.props)}
        <div id="paypal-button" />
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(PayPalButton);
