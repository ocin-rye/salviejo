import React, { Component } from 'react';
import paypal from 'paypal-checkout';
import { connect } from 'react-redux';
import _ from 'lodash';

class PayPalButton extends Component {
  renderPayPalButton() {
    console.log(this.props);

    const cartItems = () =>
      this.props.cart.map((cartItem, index) => ({
        name: cartItem.name,
        description: cartItem.description[0],
        quantity: cartItem.quantity.toString(),
        price: cartItem.price.toString(),
        tax: '0.01',
        sku: index.toString(),
        currency: 'USD',
      }));

    const transactionAmount = () => {
      let subtotal = [];
      let tax = [];
      const shipping = 20;

      this.props.cart.map(cartItem =>
        subtotal.push(cartItem.price * cartItem.quantity),
      );

      this.props.cart.map(cartItem => tax.push('0.01' * cartItem.quantity));

      console.log('subtotal', subtotal);
      console.log('tax', tax);

      subtotal = _.sum(subtotal);
      tax = _.sum(tax);

      const total = subtotal + tax + shipping;

      console.log(
        'subtotal:',
        subtotal,
        ' tax:',
        tax,
        ' shipping:',
        shipping,
        ' total:',
        total,
      );

      return {
        total: total.toString(),
        currency: 'USD',
        details: {
          subtotal: subtotal.toString(),
          tax: tax.toString(),
          shipping: shipping.toString(),
        },
      };
    };

    console.log(transactionAmount());

    paypal.Button.render(
      {
        env: 'sandbox', // Or 'sandbox'

        client: {
          sandbox:
            'AWdr6v5LTghGkA58OdS0HSvoi2DisbN1mZrU4HPv6ADa8xrWYv-KSUssTeYOSv9S363az1sCxAO31z-m',
          production: 'xxxxxxxxx',
        },

        commit: true, // Show a 'Pay Now' button

        payment(data, actions) {
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: transactionAmount(),
                  item_list: {
                    items: cartItems(),
                  },
                },
              ],
            },
          });
        },

        onAuthorize(data, actions) {
          return actions.payment.execute().then(payment => {
            // The payment is complete!
            // You can now show a confirmation message to the customer
          });
        },
      },
      '#paypal-button',
    );
  }

  /* eslint-disable no-unused-vars */

  render() {
    return (
      <div>
        <p>PayPal Button Component</p>
        {this.renderPayPalButton()}
        {/* <p>{transactionAmount()}</p> */}
        {/* {console.log(this.props)} */}
        {/* {console.log(this.cartItems())} */}
        <div id="paypal-button" />
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(PayPalButton);
