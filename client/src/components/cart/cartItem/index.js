import React, { Component } from 'react';

import styles from './index.scss';

class CartItem extends Component {
  render() {
    return (
      <div className={styles.cartItem}>
        <div>
          {this.props.itemInfo.images[0]}
          <img src={this.props.itemInfo.images[0]} />
        </div>
        <div>
          <p>{this.props.itemInfo.name}</p>
          <p>quantity: {this.props.itemInfo.quantity}</p>
          <p>price: ${this.props.itemInfo.price}</p>
          <p>category: {this.props.itemInfo.type}</p>
          <p>style: {this.props.itemInfo.style}</p>
          <p>
            subtotal: ${(
              this.props.itemInfo.price * this.props.itemInfo.quantity
            ).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}
export default CartItem;
