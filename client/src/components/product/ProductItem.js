import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchProductItem } from '../../actions';

import AddToCartButton from '../cart/AddToCartButton';

class ProductItem extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.productItem);

    // console.log(this.props);

    // console.log();

    const productItemQuery = this.props.match.params.productItem.toLowerCase().replace(/-/g, ' ');

    // console.log(productItemQuery);

    this.props.fetchProductItem({ productItemQuery });

    // console.log(this.props);

    const productTypes = ['collection', 'souvenirs', 'other'];

    if (!_.includes(productTypes, this.props.match.params.products.toLowerCase())) {
      // console.log('this is a valid product type page.');
      this.props.history.push('/notfound');
    }

    if (this.props.productItem === false) {
      return this.props.history.push('/notfound');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.productItem) !== JSON.stringify(nextProps.productItem)) {
      if (nextProps.productItem === false) {
        return this.props.history.push('/notfound');
      }
    }
  }

  renderContent() {
    console.log(this.props.productItem);
    return this.props.productItem.map(product => (
      <div key={product._id}>
        <div>
          <h1>{product.name}</h1>
        </div>
        <div>
          {product.images.map((image, index) => (
            <span key={`${product.name} ${index}`}>
              <img src={image} alt={`${product.name} ${Number(index) + 1}`} />
            </span>
          ))}
        </div>
      </div>
    ));
    // return this.props.products.map(product => <div>{product.name}</div>);
  }

  render() {
    return (
      <div>
        <h1>Product Item</h1>
        <AddToCartButton cartItem={this.props.productItem} />
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

// AdminAuth.propTypes = {
//   auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]).isRequired,
// };

// function mapStateToProps({ auth }) {
//   return { auth };
// }
//
// export default connect(mapStateToProps)(ProductItem);

function mapStateToProps({ products }) {
  return { productItem: products };
}

export default connect(mapStateToProps, { fetchProductItem })(withRouter(ProductItem));
