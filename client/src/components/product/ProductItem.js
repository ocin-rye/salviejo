import React, { Component } from 'react';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { fetchProductItem } from '../../actions';
import AddToCartButton from '../cart/addToCartButton';
import RemoveFromCartButton from '../cart/removeFromCartButton';
import IncreaseQuantityButton from '../cart/increaseQuantityButton';
import DecreaseQuantityButton from '../cart/decreaseQuantityButton';

class ProductItem extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.productItem);

    // console.log(this.props.productItem);

    // console.log();

    const productItemQuery = this.props.match.params.productItem
      .toLowerCase()
      .replace(/-/g, ' ');

    // console.log(productItemQuery);

    this.props.fetchProductItem({ productItemQuery });

    const productTypes = ['collection', 'souvenirs', 'other'];

    if (
      !_.includes(productTypes, this.props.match.params.products.toLowerCase())
    ) {
      // console.log('this is a valid product type page.');
      this.props.history.replace('/notfound');
    }

    console.log(this.props.productItem);

    if (this.props.productItem === false) {
      return this.props.history.replace('/notfound');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.productItem !== nextProps.match.params.productItem
    ) {
      const productItemQuery = nextProps.match.params.productItem
        .toLowerCase()
        .replace(/-/g, ' ');
      this.props.fetchProductItem({ productItemQuery });
    }

    if (
      JSON.stringify(this.props.productItem) !==
      JSON.stringify(nextProps.productItem)
    ) {
      if (nextProps.productItem === false) {
        return this.props.history.replace('/notfound');
      }
    }
  }

  renderContent() {
    console.log(this.props);
    if (this.props.productItem === false) {
      return null;
    }
    return this.props.productItem.map(product => (
      <div key={product._id}>
        <div>
          <h1>{product.name}</h1>
        </div>
        <div>
          <form>
            {product.style.map((style, index) => (
              <div key={style}>
                <label>{style}</label>
                <Field
                  name="style"
                  type="radio"
                  value={style}
                  component="input"
                />
              </div>
            ))}
          </form>
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
        {/* {console.log(this.props.productItemForm.map(x => x.values))} */}
        <h1>Product Item</h1>
        <div>
          <Link to="/collection/sample-product-10">Product Item 10</Link>
        </div>
        <div>
          <Link to="/collection/sample-product-11">Product Item 11</Link>
        </div>
        {/* <div>{console.log(this.props.productItem[0])}</div> */}
        <AddToCartButton
          cartItem={this.props.productItem[0]}
          styleChoice={this.props.productItemForm}
        />
        <RemoveFromCartButton cartItem={this.props.productItem[0]} />
        <IncreaseQuantityButton cartItem={this.props.productItem[0]} />
        <DecreaseQuantityButton cartItem={this.props.productItem[0]} />
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

function mapStateToProps(state) {
  return {
    productItem: state.products,
    productItemForm: state.form.productItemForm,
    initialValues: {
      style: '',
    },
  };
}

// export default connect(mapStateToProps, { fetchProductItem })(withRouter(ProductItem));

export default compose(
  connect(mapStateToProps, { fetchProductItem }),
  reduxForm({
    form: 'productItemForm',
  }),
)(withRouter(ProductItem));
