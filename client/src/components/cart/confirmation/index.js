import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';

class Confirmation extends Component {
  render() {
    return (
      <div className={styles.confirmation}>
        <div className={styles.title}>order confirmed!</div>
        <div className={styles.body}>
          <p>your order has been recieved.</p>
          <p>you will recieve a reciept and order details by email.</p>
          <p>order # 726267181</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Confirmation);
