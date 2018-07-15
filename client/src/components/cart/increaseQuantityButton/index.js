import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuantityCart } from '../../../actions';

import styles from './index.scss';

class IncreaseQuantityButton extends Component {
  handleClick() {
    this.props.addQuantityCart(this.props.cartItemInfo);
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)} className={styles.button}>
        item +1
      </button>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(
  mapStateToProps,
  { addQuantityCart },
)(IncreaseQuantityButton);
