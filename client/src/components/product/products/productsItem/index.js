import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

class ProductsItem extends Component {
  render() {
    return (
      <div className={styles.productsItem}>
        <Link
          className={styles.productLink}
          to={`/${
            this.props.productsType
          }/${this.props.productsItemInfo.name
            .replace(/\s+/g, '-')
            .toLowerCase()}`}
        >
          <div className={styles.productsItemImageContainer}>
            {this.props.productsItemInfo.images
              .slice(0, 1)
              .map((image, index) => (
                <img
                  className={styles.productsItemImage}
                  src={image}
                  alt={`${this.props.productsItemInfo.name} ${Number(index) +
                    1}`}
                  key={`${this.props.productsItemInfo.name} ${index}`}
                />
              ))}
          </div>
          <div className={styles.productName}>
            {this.props.productsItemInfo.name.toLowerCase()}
          </div>
          <div className={styles.styleContainer}>
            {this.props.productsItemInfo.style.map((styleItem, index) => (
              <div key={`Style Item ${index + 1}`} className={styles.style}>
                {styleItem.toLowerCase()}
              </div>
            ))}
          </div>
          <div>{this.props.productsItemInfo.price}</div>
        </Link>
      </div>
    );
  }
}

export default ProductsItem;
