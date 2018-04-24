import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

import aboutImage from '../images/home_shop/about-text.png';
import stockistsImage from '../images/home_shop/stockists-text.png';
import collectionImage from '../images/home_shop/collection-text.png';
import contactImage from '../images/home_shop/contact-text.png';
import shopImage from '../images/home_shop/lot_4_sale_inc_text.jpg';

// console.log(styles);

class Home extends Component {
  componentDidMount() {
    document.title = 'Home - Salviejo';
  }

  render() {
    return (
      <div className={styles.home}>
        <div className={styles.columnOne}>
          <div className={styles.heading}>
            <Link to="/">
              <h1 className={styles.headingText}>
                kristine <br /> peñafiel <br /> salviejo
              </h1>
            </Link>
          </div>
          <div className={styles.columnOneBody}>
            <Link to="/about" className={styles.about} id="about">
              <img
                src={aboutImage}
                className={styles.columnOneImage}
                alt="about menu"
              />
            </Link>
            <Link to="/stockists" className={styles.stockists} id="stockists">
              <img
                src={stockistsImage}
                className={styles.columnOneImage}
                alt="stockists menu"
              />
            </Link>
            <Link to="/collection/lookbook" className={styles.collection} id="collection">
              <img
                src={collectionImage}
                className={styles.columnOneImage}
                alt="collection menu"
              />
            </Link>
            <Link to="/contact" className={styles.contact} id="contact">
              <img
                src={contactImage}
                className={styles.columnOneImage}
                alt="contact menu"
              />
            </Link>
          </div>
        </div>
        <div className={styles.columnTwo}>
          <Link to="/shop/collection">
            <img
              src={shopImage}
              className={styles.columnTwoImage}
              alt="shop menu"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
