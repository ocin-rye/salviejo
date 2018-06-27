import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';

import CartItem from './cartItem';
import PayPalButton from './payPalButton';

class Cart extends Component {
  componentDidMount() {
    document.title = 'Cart - Salviejo';
  }
  render() {
    return (
      <div className={styles.cart}>
        <div>
          {console.log(this.props)}
          <p>cart page</p>
          {/* {this.props.cart.map(cartItem => {
            return <CartItem key={cartItem._id} itemInfo={cartItem} />;
          })} */}
          <PayPalButton />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
