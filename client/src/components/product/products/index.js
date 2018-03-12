import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions';

class Products extends Component {
  componentDidMount() {
    // this.props.fetchProducts();

    const { match: { params } } = this.props;

    console.log(params.products);

    console.log(this.props);

    // this.props.fetchProducts(params.products);

    const productTypes = ['collection', 'souvenirs', 'other'];

    if (_.includes(productTypes, params.products.toLowerCase())) {
      console.log('this is a valid product type page.');
      this.props.fetchProducts(params.products.toLowerCase());
    } else {
      console.log('this is NOT a valid product type page.');
      this.props.history.replace('/notfound');
    }

    // console.log(this.props.match);
  }

  renderContent() {
    console.log(this.props.products);
    return this.props.products.map(product => (
      <div key={product._id}>
        <div>
          <h2>{product.name}</h2>
          <p>{product.name.replace(/\s+/g, '-').toLowerCase()}</p>
        </div>
        <div>
          <h2>
            {product.style.map((styleItem, index) => (
              <p key={`Style Item ${index + 1}`}>{styleItem}</p>
            ))}
          </h2>
        </div>
        <div>
          <h2>{product.price}</h2>
        </div>
        <div>
          <h2>
            {product.images.map((image, index) => <p key={`Item Image ${index + 1}`}>{image}</p>)}
          </h2>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>Products Page</h1>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

// export default connect(null, actions)(Products);

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { fetchProducts })(withRouter(Products));
