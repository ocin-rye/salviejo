import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';

class Confirmation extends Component {
  render() {
    return (
      <div className={styles.confirmation}>
        <div className={styles.title}>order confirmed!</div>
        <div className={styles.body}>
          <p>you will recieve a reciept with order details by email.</p>
          <p>
            If you have any questions regarding your order feel free to reach
            out to me at kristine.penafiel.salviejo@gmail.com
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Confirmation);
