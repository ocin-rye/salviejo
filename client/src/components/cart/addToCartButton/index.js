import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions';

import styles from './index.scss';

class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = { styleChoice: true, addedToCart: false };
  }

  handleClick() {
    const cartObject = Object.assign({}, this.props.cartItem, { quantity: 1 });

    // cartObject.style = this.props.productItemForm.style

    console.log(cartObject.style);

    console.log(this.props.styleChoice.values.style);

    // this.props.addToCart(cartObject);

    if (this.props.styleChoice.values.style === '') {
      console.log('Style is empty. Must provide style.');
      return this.setState({ styleChoice: false });
    }

    this.setState({ styleChoice: true, addedToCart: true });

    cartObject.style = this.props.styleChoice.values.style;

    this.props.addToCart(cartObject);
  }

  render() {
    return (
      <div className={styles.addToCart}>
        {/* <h1>Add To Cart Button</h1> */}
        <button onClick={this.handleClick.bind(this)} className={styles.button}>
          add to cart
        </button>
        {this.state.addedToCart ? (
          <div className={styles.confirmation}>added to cart</div>
        ) : null}
        {this.state.styleChoice ? null : (
          <div className={styles.prompt}>please select a style option</div>
        )}
        {/* <div>
          <button onClick={this.handleClick.bind(this)}>add to cart</button>
        </div> */}
        {/* <div>{console.log(this.props)}</div> */}
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(
  mapStateToProps,
  { addToCart },
)(AddToCartButton);
