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
        <div className={styles.nameRow}>
          <div className={styles.nameColumn}>
            <Link
              onClick={() =>
                this.setState({
                  showCollectionMenu: false,
                  showShopMenu: false,
                })
              }
              className={styles.nameLink}
              to="/"
            >
              kristine peñafiel salviejo
            </Link>
          </div>
        </div>
        <div className={styles.menuRow}>
          <div className={styles.menuContainer}>
            <div className={styles.menuColumn}>
              <Link
                onClick={() =>
                  this.setState({
                    showCollectionMenu: false,
                    showShopMenu: false,
                  })
                }
                to="/"
                className={styles.menuItem}
              >
                home
              </Link>
            </div>
            <div className={styles.menuColumn}>
              <Link
                onClick={() =>
                  this.setState({
                    showCollectionMenu: false,
                    showShopMenu: false,
                  })
                }
                to="/about"
                className={styles.menuItem}
              >
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
                <Link
                  onClick={() =>
                    this.setState({
                      showCollectionMenu: false,
                      showShopMenu: false,
                    })
                  }
                  to="/collection/description"
                  className={styles.menuItem}
                >
                  description
                </Link>

                <Link
                  onClick={() =>
                    this.setState({
                      showCollectionMenu: false,
                      showShopMenu: false,
                    })
                  }
                  to="/collection/lookbook"
                  className={styles.menuItem}
                >
                  lookbook
                </Link>

                <Link
                  onClick={() =>
                    this.setState({
                      showCollectionMenu: false,
                      showShopMenu: false,
                    })
                  }
                  to="/collection/trip-photos"
                  className={styles.menuItem}
                >
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
                className={
                  this.state.showShopMenu ? styles.dropDown : styles.hide
                }
              >
                <Link
                  onClick={() =>
                    this.setState({
                      showCollectionMenu: false,
                      showShopMenu: false,
                    })
                  }
                  to="/collection"
                  className={styles.menuItem}
                >
                  collection
                </Link>

                <Link
                  onClick={() =>
                    this.setState({
                      showCollectionMenu: false,
                      showShopMenu: false,
                    })
                  }
                  to="/souvenirs"
                  className={styles.menuItem}
                >
                  souvenirs
                </Link>

                <Link
                  onClick={() =>
                    this.setState({
                      showCollectionMenu: false,
                      showShopMenu: false,
                    })
                  }
                  to="/other"
                  className={styles.menuItem}
                >
                  other
                </Link>
              </div>
            </div>
            <div className={styles.menuColumn}>
              <Link
                onClick={() =>
                  this.setState({
                    showCollectionMenu: false,
                    showShopMenu: false,
                  })
                }
                to="/cart"
                className={styles.menuItem}
              >
                cart
              </Link>
            </div>
            <div className={styles.menuColumn}>
              <Link
                onClick={() =>
                  this.setState({
                    showCollectionMenu: false,
                    showShopMenu: false,
                  })
                }
                to="/stockists"
                className={styles.menuItem}
              >
                stockists
              </Link>
            </div>
            <div className={styles.menuColumn}>
              <Link
                onClick={() =>
                  this.setState({
                    showCollectionMenu: false,
                    showShopMenu: false,
                  })
                }
                to="/contact"
                className={styles.menuItem}
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navi;
