import React, { Component } from 'react';
import { connect } from 'react-redux';
import { subtractQuantityCart } from '../../../actions';

class DecreaseQuantityButton extends Component {
  handleClick() {
    // console.log(cartObject);

    this.props.subtractQuantityCart(this.props.cartItem);
    // console.log(this.props);
  }
  render() {
    return (
      <div>
        + Quantity Button
        <div>This is the content.</div>
        <div>
          <button onClick={this.handleClick.bind(this)}>Cart Item -</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, { subtractQuantityCart })(
  DecreaseQuantityButton,
);
