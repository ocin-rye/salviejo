import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions';

import styles from './index.scss';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentLoaded: false,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const productTypes = ['collection', 'souvenirs', 'other'];

    if (_.includes(productTypes, params.products.toLowerCase())) {
      console.log('this is a valid product type page.');
      this.props.fetchProducts(params.products.toLowerCase());
      this.setState({
        componentLoaded: true,
      });
    } else {
      console.log('this is NOT a valid product type page.');
      this.setState({
        componentLoaded: false,
      });
      this.props.history.replace('/notfound');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.products !== nextProps.match.params.products) {
      this.props.fetchProducts(nextProps.match.params.products.toLowerCase());
    }
  }

  renderContent() {
    console.log(this.props);
    return this.props.products.map(product => (
      <div key={product._id}>
        <div>
          <h2>{product.name}</h2>
          <h2>
            <Link
              to={`/${this.props.match.params.products}/${product.name
                .replace(/\s+/g, '-')
                .toLowerCase()}`}
            >
              {product.name}
            </Link>
          </h2>
          <p>{product.name.replace(/\s+/g, '-').toLowerCase()}</p>
          <p>{product.type}</p>
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
            {product.images.map((image, index) => (
              <p key={`Item Image ${index + 1}`}>{image}</p>
            ))}
          </h2>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.products}>
        <h1>Products Page</h1>
        <div>{console.log(this.state.componentLoaded)}</div>
        <div>
          {this.state.componentLoaded ? this.renderContent() : '...Loading'}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { fetchProducts })(
  withRouter(Products),
);
