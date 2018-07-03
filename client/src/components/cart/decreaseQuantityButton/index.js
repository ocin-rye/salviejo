import React, { Component } from 'react';
import { connect } from 'react-redux';
import { subtractQuantityCart } from '../../../actions';

import styles from './index.scss';

class DecreaseQuantityButton extends Component {
  handleClick() {
    this.props.subtractQuantityCart(this.props.cartItemInfo);
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this)} className={styles.button}>
        item -1
      </button>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, { subtractQuantityCart })(
  DecreaseQuantityButton,
);
