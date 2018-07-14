import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from './index.scss';

import CartItem from './cartItem';
import Checkout from './checkout';
import Confirmation from './confirmation';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payConfirmation: false,
      confirmationInfo: null,
    };
  }
  componentDidMount() {
    document.title = 'Cart - Salviejo';
  }
  onToken = token => {
    axios
      .post('/api/charge', JSON.stringify(token), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response);
        // alert(`We are in business, ${response.data.receipt_email}`);
        this.setState({ payConfirmation: true });
        // response.json().then(data => {
        //   alert(`We are in business, ${data.email}`);
        // });
      });
  };
  cart() {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.cartItems}>
          {this.props.cart.map(cartItem => {
            return (
              <CartItem
                key={`${cartItem._id} ${cartItem.style}`}
                itemInfo={cartItem}
              />
            );
          })}
        </div>
        <Checkout onToken={this.onToken.bind(this)} />
      </div>
    );
  }
  render() {
    return (
      <div className={styles.cart}>
        {console.log(this.props)}
        <div className={styles.cartTitle}>cart</div>
        {this.state.payConfirmation ? <Confirmation /> : this.cart()}
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
