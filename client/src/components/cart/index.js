import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { emptyCart, calculateCheckout } from '../../actions';

import styles from './index.scss';

import CartItem from './cartItem';
import Checkout from './checkout';
import Confirmation from './confirmation';
import Error from './error';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payConfirmation: false,
      confirmationInfo: null,
      error: false,
      errorType: null,
      errorMessage: null,
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

  onToken = (token, shipping) => {
    console.log('Token: ', token);
    console.log('Shipping: ', shipping);
    axios
      .post(
        '/api/charge',
        JSON.stringify({
          token,
          shipping,
          cart: this.props.cart,
          checkout: this.props.checkout,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .then(response => {
        console.log(response);
        // alert(`We are in business, ${response.data.receipt_email}`);
        // this.props.emptyCart();
        if (response.data.error === true) {
          if (response.data.errorType === 'email') {
            this.props.emptyCart();
          }
          return this.setState({
            error: true,
            errorType: response.data.errorType,
            errorMessage: response.data.message,
          });
        }
        this.props.emptyCart();
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
    if (this.state.error === true) {
      return (
        <Error
          errorType={this.state.errorType}
          errorMessage={this.state.errorMessage}
        />
      );
    }
    if (this.state.payConfirmation === true) {
      return <Confirmation />;
    }
    if (this.props.cart.length === 0) {
      return <div>your cart is empty</div>;
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
