import React, { Component } from 'react';

import styles from './index.scss';

class Stockists extends Component {
  componentDidMount() {
    document.title = 'Stockists - Salviejo';
  }

  render() {
    return (
      <div className={styles.description}>
        <div className={styles.row_1}>
          <p>stockists coming soon</p>
        </div>
      </div>
    );
  }
}
export default Stockists;
