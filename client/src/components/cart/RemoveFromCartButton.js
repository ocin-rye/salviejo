import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';

class RemoveFromCartButton extends Component {
  handleClick() {
    this.props.removeFromCart(this.props.cartItem);
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Remove From Cart Button</h1>
        <div>
          <button onClick={this.handleClick.bind(this)}>Remove From Cart</button>
        </div>
        <div>{console.log(this.props)}</div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, { removeFromCart })(RemoveFromCartButton);
