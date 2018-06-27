import React, { Component } from 'react';
import Navi from './navi';
import NaviMobile from './naviMobile';

import styles from './index.scss';

class Navigation extends Component {
  render() {
    return (
      <div className={styles.naviContainer}>
        {/* <div>This is Navigation</div> */}
        <Navi />
        <NaviMobile />
      </div>
    );
  }
}

export default Navigation;
