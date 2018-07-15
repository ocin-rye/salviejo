import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../actions';

import styles from './index.scss';

class RemoveFromCartButton extends Component {
  handleClick() {
    this.props.removeFromCart(this.props.cartItemInfo);
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)} className={styles.button}>
        remove item
      </button>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(
  mapStateToProps,
  { removeFromCart },
)(RemoveFromCartButton);
