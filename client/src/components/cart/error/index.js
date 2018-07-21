import React, { Component } from 'react';
import styles from './index.scss';

class Error extends Component {
  paymentError() {
    return (
      <div className={styles.body}>
        <p>your payment could not be processed</p>
        <p>reason: {this.props.errorMessage.toLowerCase()}</p>
      </div>
    );
  }

  emailError() {
    return (
      <div className={styles.body}>
        <p>
          Your email receipt failed to send, but your order was succesfully
          received.
        </p>
        <p>{this.props.errorMessage.toLowerCase()}</p>
        <p>
          If you have any questions regarding your order feel free to reach out
          to me at kristine.penafiel.salviejo@gmail.com
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.error}>
        <div className={styles.title}>error occurrence</div>
        {this.props.errorType === 'payment'
          ? this.paymentError()
          : this.emailError()}
      </div>
    );
  }
}

export default Error;
