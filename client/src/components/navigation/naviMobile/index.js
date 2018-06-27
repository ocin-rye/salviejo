import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

import menuIconOpen from '../../icons/menuOpen.svg';
import menuIconClose from '../../icons/menuClose.svg';

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
          <div className={styles.nameRow}>
            <div className={styles.nameColumn}>
              <Link className={styles.nameLink} to="/">
                kristine peñafiel salviejo
              </Link>
            </div>
          </div>
          <div className={styles.menuRow}>
            <div className={styles.menuContainer}>
              <div
                className={styles.menuColumn}
                onClick={() =>
                  this.setState({
                    showMenu: !this.state.showMenu,
                  })
                }
              >
                <span className={styles.menuItem}>- menu -</span>
              </div>
            </div>
          </div>
          {/* <div className={styles.menuColumn}>
            <img
              className={styles.icon}
              src={menuIconOpen}
              alt="open mobile menu icon"
              onClick={() =>
                this.setState({
                  showMenu: !this.state.showMenu,
                })
              }
            />
          </div> */}
        </div>
        <div
          className={`${styles.menuOverlay} ${
            this.state.showMenu ? styles.show : styles.hide
          }`}
        >
          <div className={styles.menuOverlayRow}>
            <img
              className={styles.icon}
              src={menuIconClose}
              alt="close mobile menu icon"
              onClick={() =>
                this.setState({
                  showMenu: !this.state.showMenu,
                })
              }
            />
          </div>
          <div>
            <Link className={styles.menuOverlayRow} to="/">
              home
            </Link>
            <Link className={styles.menuOverlayRow} to="/about">
              about
            </Link>
            <Link
              className={styles.menuOverlayRow}
              to="/collection/description"
            >
              description
            </Link>
            <Link className={styles.menuOverlayRow} to="/collection/lookbook">
              lookbook
            </Link>
            <Link
              className={styles.menuOverlayRow}
              to="/collection/trip-photos"
            >
              trip photos
            </Link>
            <Link className={styles.menuOverlayRow} to="/collection">
              collection
            </Link>
            <Link className={styles.menuOverlayRow} to="/souvenirs">
              souvenirs
            </Link>
            <Link className={styles.menuOverlayRow} to="/other">
              other
            </Link>
            <Link className={styles.menuOverlayRow} to="/">
              cart
            </Link>
            <Link className={styles.menuOverlayRow} to="/stockists">
              stockist
            </Link>
            <Link className={styles.menuOverlayRow} to="/contact">
              contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NaviMobile;
