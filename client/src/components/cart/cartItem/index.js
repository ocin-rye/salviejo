import React, { Component } from 'react';

import styles from './index.scss';

import IncreaseQuantityButton from '../increaseQuantityButton';
import DecreaseQuantityButton from '../decreaseQuantityButton';
import RemoveFromCartButton from '../removeFromCartButton';

class CartItem extends Component {
  render() {
    return (
      <div className={styles.cartItem}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={this.props.itemInfo.images[0]}
            alt="cart item"
          />
        </div>
        <div className={styles.status}>
          <div className={styles.info}>
            <p>
              {this.props.itemInfo.name.toLowerCase()} -{' '}
              {this.props.itemInfo.style.toLowerCase()}
            </p>
            <p>quantity: {this.props.itemInfo.quantity}</p>
            <p>price: ${this.props.itemInfo.price}</p>
            <p>category: {this.props.itemInfo.type.toLowerCase()}</p>
            <p>style: {this.props.itemInfo.style.toLowerCase()}</p>
            <p>
              subtotal: ${(
                this.props.itemInfo.price * this.props.itemInfo.quantity
              ).toFixed(2)}
            </p>
          </div>
          <div className={styles.buttons}>
            <IncreaseQuantityButton cartItemInfo={this.props.itemInfo} />
            <DecreaseQuantityButton cartItemInfo={this.props.itemInfo} />
            <RemoveFromCartButton cartItemInfo={this.props.itemInfo} />
            {/*
            <IncreaseQuantityButton />
            <DecreaseQuantityButton cartItemInfo={this.props.itemInfo} />
            <RemoveFromCartButton />
            */}
          </div>
        </div>
      </div>
    );
  }
}
export default CartItem;
