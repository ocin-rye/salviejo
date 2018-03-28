import React, { Component } from 'react';
import Navi from './navi';
import NaviMobile from './naviMobile';

class Navigation extends Component {
  render() {
    return (
      <div>
        {/* <div>This is Navigation</div> */}
        <Navi />
        <NaviMobile />
      </div>
    );
  }
}

export default Navigation;
