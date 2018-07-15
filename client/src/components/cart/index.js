import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { emptyCart, calculateCheckout } from '../../actions';

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
    this.props.calculateCheckout(this.props.cart);
    console.log('Props', this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cart !== nextProps.cart) {
      this.props.calculateCheckout(nextProps.cart);
      console.log('Props Update', nextProps);
    }
  }

  onToken = token => {
    axios
      .post('/api/charge', JSON.stringify(token), {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => {
        console.log(response);
        // alert(`We are in business, ${response.data.receipt_email}`);
        // this.props.emptyCart();
        this.setState({
          payConfirmation: true,
          confirmationInfo: response.data,
        });
        console.log('Data', this.state.confirmationInfo);
        // response.json().then(data => {
        //   alert(`We are in business, ${data.email}`);
        // });
      });
  };

  renderCart() {
    if (this.props.cart.length === 0) {
      return <div>your cart is empty</div>;
    }
    if (this.state.payConfirmation === true) {
      return <Confirmation />;
    }
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
        <Checkout
          onToken={this.onToken.bind(this)}
          checkoutValues={this.props.checkout}
        />
      </div>
    );
  }

  render() {
    return (
      <div className={styles.cart}>
        <div className={styles.cartTitle}>cart</div>
        {this.renderCart()}
      </div>
    );
  }
}

function mapStateToProps({ cart, checkout }) {
  return { cart, checkout };
}

export default connect(
  mapStateToProps,
  { emptyCart, calculateCheckout },
)(Cart);
