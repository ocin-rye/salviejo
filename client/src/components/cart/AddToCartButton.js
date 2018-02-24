import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';

class AddToCartButton extends Component {
  handleClick() {
    this.props.addToCart(this.props.cartItem[0]);
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Add To Cart Button</h1>
        <div>
          <button onClick={this.handleClick.bind(this)}>Add To Cart</button>
        </div>
        <div>{console.log(this.props)}</div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, { addToCart })(AddToCartButton);
