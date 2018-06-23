import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

class ProductsItem extends Component {
  render() {
    return (
      // <div>{console.log(this.props.productsItemInfo)}</div>
      <div className={styles.productsItem}>
        <div>{console.log('this the products item component')}</div>
        <div>
          <h2>{this.props.productsItemInfo.name}</h2>
          <h2>
            <Link
              to={`/${
                this.props.productsType
              }/${this.props.productsItemInfo.name
                .replace(/\s+/g, '-')
                .toLowerCase()}`}
            >
              {this.props.productsItemInfo.name}
            </Link>
          </h2>
          <p>
            {this.props.productsItemInfo.name
              .replace(/\s+/g, '-')
              .toLowerCase()}
          </p>
          <p>{this.props.productsItemInfo.type}</p>
        </div>
        <div>
          <h2>
            {this.props.productsItemInfo.style.map((styleItem, index) => (
              <p key={`Style Item ${index + 1}`}>{styleItem}</p>
            ))}
          </h2>
        </div>
        <div>
          <h2>{this.props.productsItemInfo.price}</h2>
        </div>
        <div>
          <h2>
            {this.props.productsItemInfo.images.map((image, index) => (
              <p key={`Item Image ${index + 1}`}>{image}</p>
            ))}
          </h2>
        </div>
      </div>
    );
  }
}

export default ProductsItem;
