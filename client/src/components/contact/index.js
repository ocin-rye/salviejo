import React, { Component } from 'react';

import styles from './index.scss';

class Contact extends Component {
  componentDidMount() {
    document.title = 'Contact - Salviejo';
  }

  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.row_1}>
          <p>This is the contact</p>
        </div>
      </div>
    );
  }
}
export default Contact;
