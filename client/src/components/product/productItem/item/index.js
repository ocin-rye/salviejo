import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { Field } from 'redux-form';

import styles from './index.scss';

import AddToCartButton from '../../../cart/addToCartButton';
// import RemoveFromCartButton from '../../../cart/removeFromCartButton';
// import IncreaseQuantityButton from '../../../cart/increaseQuantityButton';
// import DecreaseQuantityButton from '../../../cart/decreaseQuantityButton';

class Item extends Component {
  renderProductInfo() {
    // console.log(this.props);
    if (this.props.itemInfo === false) {
      return null;
    }
    return this.props.itemInfo.map(product => (
      <div className={styles.productItem} key={product._id}>
        <div className={styles.columnOne}>
          {product.images.map((image, index) => (
            <div
              className={styles.productImageContainer}
              key={`${product.name} ${index}`}
            >
              <img
                className={styles.productImage}
                src={image}
                alt={`${product.name} ${Number(index) + 1}`}
              />
            </div>
          ))}
        </div>
        <div className={styles.columnTwo}>
          <div className={styles.fixedContainer}>
            <h1 className={styles.productName}>{product.name.toLowerCase()}</h1>
            <p className={styles.productPrice}>${product.price}</p>
            <div className={styles.productDescriptions}>
              {/* {console.log(product)} */}
              {product.description.map((description, index) => (
                <div
                  className={styles.description}
                  key={`${product.name} ${index} ${index}`}
                >
                  {description.toLowerCase()}
                </div>
              ))}
            </div>
            <form className={styles.productStylesContainer}>
              <p className={styles.productStylesTitle}>styles</p>
              {product.style.map((style, index) => (
                <div key={style} className={styles.productStyles}>
                  <label className={styles.productStyleOption}>
                    {style.toLowerCase()}
                  </label>
                  <Field
                    name="style"
                    type="radio"
                    value={style}
                    component="input"
                  />
                </div>
              ))}
            </form>
            <AddToCartButton
              cartItem={this.props.itemInfo[0]}
              styleChoice={this.props.itemInfoStyleChoice}
            />
          </div>
        </div>
      </div>
    ));
    // return this.props.products.map(product => <div>{product.name}</div>);
  }

  render() {
    return this.renderProductInfo();
  }
}

export default Item;
