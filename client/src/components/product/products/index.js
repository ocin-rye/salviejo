import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions';

import styles from './index.scss';

import ProductsItem from './productsItem';

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
      <ProductsItem
        productsItemInfo={product}
        productsType={this.props.match.params.products}
        key={product._id}
      />
    ));
  }

  render() {
    return (
      <div className={styles.products}>
        <h1 className={styles.pageHeader}>
          {this.props.match.params.products}
        </h1>
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
