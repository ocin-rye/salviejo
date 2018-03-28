import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCollectionMenu: false,
      showShopMenu: false,
    };
  }

  render() {
    return (
      <div className={styles.menu}>
        <div className={styles.menuColumn}>
          <Link className={styles.menuHome} to="/">
            kristine<br />peñafiel<br />salviejo
          </Link>
        </div>
        <div className={styles.menuColumn}>
          <Link to="/about" className={styles.menuItem}>
            about
          </Link>
        </div>
        <div className={styles.menuColumn}>
          <span
            className={styles.menuItem}
            onClick={() =>
              this.setState({
                showCollectionMenu: !this.state.showCollectionMenu,
                showShopMenu: false,
              })
            }
          >
            collection
          </span>
          <div
            className={
              this.state.showCollectionMenu ? styles.dropDown : styles.hide
            }
          >
            <Link to="/description" className={styles.menuItem}>
              description
            </Link>

            <Link to="/lookbook" className={styles.menuItem}>
              lookbook
            </Link>

            <Link to="/trip-photos" className={styles.menuItem}>
              trip photos
            </Link>
          </div>
        </div>
        <div className={styles.menuColumn}>
          <span
            className={styles.menuItem}
            onClick={() =>
              this.setState({
                showShopMenu: !this.state.showShopMenu,
                showCollectionMenu: false,
              })
            }
          >
            shop
          </span>
          <div
            className={this.state.showShopMenu ? styles.dropDown : styles.hide}
          >
            <Link to="/shop-collection" className={styles.menuItem}>
              collection
            </Link>

            <Link to="/shop-souvenirs" className={styles.menuItem}>
              souvenirs
            </Link>

            <Link to="/shop-other" className={styles.menuItem}>
              other
            </Link>
          </div>
        </div>
        <div className={styles.menuColumn}>
          <Link to="/stockists" className={styles.menuItem}>
            cart
          </Link>
        </div>
        <div className={styles.menuColumn}>
          <Link to="/stockists" className={styles.menuItem}>
            stockists
          </Link>
        </div>
        <div className={styles.menuColumn}>
          <Link to="/contact" className={styles.menuItem}>
            contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Navi;
