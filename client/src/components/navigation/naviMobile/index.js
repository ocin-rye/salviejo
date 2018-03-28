import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

import menuIconOpen from '../../images/icons/menu_icon.svg';
import menuIconClose from '../../images/icons/x_icon.svg';

class NaviMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  render() {
    return (
      <div className={styles.menu}>
        <div
          className={`${styles.menuTopBar} ${
            this.state.showMenu ? styles.hide : styles.show
          }`}
        >
          <div className={styles.menuColumn}>
            <Link className={styles.menuLogo} to="/">
              kristine<br />peñafiel<br />salviejo
            </Link>
          </div>
          <div className={styles.menuColumn}>
            <img
              src={menuIconOpen}
              onClick={() =>
                this.setState({
                  showMenu: !this.state.showMenu,
                })
              }
            />
          </div>
        </div>
        <div
          className={`${styles.menuOverlay} ${
            this.state.showMenu ? styles.show : styles.hide
          }`}
        >
          <div className="mobile-menu-items">
            <img
              className={styles.icon}
              src={menuIconClose}
              onClick={() =>
                this.setState({
                  showMenu: !this.state.showMenu,
                })
              }
            />
            <ul>
              <li>
                <span className="selected">
                  <Link to="../../index">home</Link>
                </span>
              </li>
              <li>
                <span className="not-selected">
                  <Link to="about">about</Link>
                </span>
              </li>
              <li>
                <span className="selected">
                  <Link to="description">description</Link>
                </span>
              </li>
              <li>
                <span className="not-selected">
                  <Link to="lookbook">lookbook</Link>
                </span>
              </li>
              <li>
                <span className="not-selected">
                  <Link to="trip-photos">trip photos</Link>
                </span>
              </li>
              <li>
                <span className="selected">
                  <Link to="shop-collection">collection</Link>
                </span>
              </li>
              <li>
                <span className="not-selected">
                  <Link to="shop-souvenirs">souvenirs</Link>
                </span>
              </li>
              <li>
                <span className="not-selected">
                  <Link to="shop-other">other</Link>
                </span>
              </li>
              <li>
                <span className="not-selected">
                  <Link to="shop-other">cart</Link>
                </span>
              </li>
              <li>
                <span className="not-selected">
                  <Link to="stockists">stockist</Link>
                </span>
              </li>
              <li>
                <span className="not-selected">
                  <Link to="contact">contact</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NaviMobile;
