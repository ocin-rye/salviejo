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

  closeMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <div className={styles.menu}>
        <div
          className={`${styles.menuTopBar} ${
            this.state.showMenu ? styles.hide : styles.show
          }`}
          onClick={() =>
            this.setState({
              showMenu: !this.state.showMenu,
            })
          }
        >
          <div className={styles.nameRow}>
            <div className={styles.nameColumn}>
              <span className={styles.nameLink}>
                kristine peñafiel salviejo
              </span>
            </div>
          </div>
          <div className={styles.menuRow}>
            <div className={styles.menuContainer}>
              <div className={styles.menuColumn}>
                <span className={styles.menuItem}>- menu -</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.menuOverlay} ${
            this.state.showMenu ? styles.show : styles.hide
          }`}
        >
          <div
            className={`${styles.menuOverlayTopBar} ${
              this.state.showMenu ? styles.show : styles.hide
            }`}
            onClick={() =>
              this.setState({
                showMenu: !this.state.showMenu,
              })
            }
          >
            <div className={styles.menuOverlayNameRow}>
              kristine peñafiel salviejo
            </div>
            <div className={styles.menuOverlayCloseRow}>- close menu -</div>
          </div>
          {/* <div className={styles.menuOverlayRow}>
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
          </div> */}
          <div className={styles.menuOverlayLinks}>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/"
            >
              home
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/about"
            >
              about
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/collection/description"
            >
              description
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/collection/lookbook"
            >
              lookbook
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/collection/trip-photos"
            >
              trip photos
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/collection"
            >
              collection
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/souvenirs"
            >
              souvenirs
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/other"
            >
              other
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/"
            >
              cart
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/stockists"
            >
              stockist
            </Link>
            <Link
              className={styles.menuOverlayRow}
              onClick={this.closeMenu.bind(this)}
              to="/contact"
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NaviMobile;
