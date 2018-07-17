import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styles from './index.scss';

class Checkout extends Component {
  render() {
    return (
      <div className={styles.checkout}>
        <div className={styles.fixedContainer}>
          <p>cart total</p>
          <p>order subtotal: ${this.props.checkoutValues.subtotal}</p>
          <p>tax: ${this.props.checkoutValues.tax}</p>
          <p>shipping: ${this.props.checkoutValues.shipping}</p>
          <p>total: ${this.props.checkoutValues.total}</p>
          <StripeCheckout
            name="Kristine Peñafiel Salviejo"
            image="https://res.cloudinary.com/salviejo/image/upload/v1524574712/shop/home/home-bg-left.jpg"
            amount={this.props.checkoutValues.total * 100}
            currency="USD"
            token={this.props.onToken}
            allowRememberMe={false}
            shippingAddress
            billingAddress
            stripeKey="pk_test_XTHRlRhCIFvNSEzuWo9G0qUr"
          >
            <button className={styles.button}>pay with card</button>
          </StripeCheckout>
        </div>
      </div>
    );
  }
}

export default Checkout;
