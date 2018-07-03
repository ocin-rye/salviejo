import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';

import CartItem from './cartItem';
import Checkout from './checkout';

class Cart extends Component {
  componentDidMount() {
    document.title = 'Cart - Salviejo';
  }
  render() {
    return (
      <div className={styles.cart}>
        {console.log(this.props)}
        <div className={styles.cartTitle}>checkout</div>
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
          <Checkout />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
