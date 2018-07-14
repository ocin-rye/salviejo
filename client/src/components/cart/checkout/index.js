import React, { Component } from 'react';
// import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import _ from 'lodash';

import styles from './index.scss';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // payPalDiv: false,
    };
  }
  transactionAmount() {
    let subtotal = [];
    let tax = [];
    const shipping = 20;

    this.props.cart.map(cartItem =>
      subtotal.push(cartItem.price * cartItem.quantity),
    );

    this.props.cart.map(cartItem => tax.push('0.30' * cartItem.quantity));

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
      total: total,
      currency: 'USD',
      details: {
        subtotal: subtotal.toFixed(2).toString(),
        tax: tax.toFixed(2).toString(),
        shipping: shipping.toFixed(2).toString(),
      },
    };
  }

  cartItems() {
    this.props.cart.map((cartItem, index) => ({
      name: cartItem.name,
      description: cartItem.description[0],
      quantity: cartItem.quantity.toString(),
      price: cartItem.price.toString(),
      tax: '0.01',
      sku: index.toString(),
      currency: 'USD',
    }));
  }

  render() {
    return (
      <div className={styles.checkout}>
        <div className={styles.fixedContainer}>
          <p>cart total</p>
          <p>order subtotal: ${this.transactionAmount().details.subtotal}</p>
          <p>tax: ${this.transactionAmount().details.tax}</p>
          <p>shipping: ${this.transactionAmount().details.shipping}</p>
          <p>
            total: ${this.transactionAmount()
              .total.toFixed(2)
              .toString()}
          </p>
          <StripeCheckout
            name="Kristine Peñafiel Salviejo"
            image="https://res.cloudinary.com/salviejo/image/upload/v1524574712/shop/home/home-bg-left.jpg"
            amount={this.transactionAmount().total * 100}
            currency="USD"
            token={this.props.onToken}
            allowRememberMe={false}
            billingAddress
            shippingAddress
            stripeKey="pk_test_XTHRlRhCIFvNSEzuWo9G0qUr"
          >
            <button className={styles.button}>pay with card</button>
          </StripeCheckout>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Checkout);
