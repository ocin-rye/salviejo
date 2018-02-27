import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';

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
      <div>
        <h1>Add To Cart Button</h1>
        {this.state.addedToCart ? <div>Added to Cart</div> : <div />}
        {this.state.styleChoice ? <div /> : <div>Style is empty. Must provide style.</div>}
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
