import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

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
                src={
                  'http://res.cloudinary.com/salviejo/image/upload/v1524574628/shop/home/about-text.png'
                }
                className={styles.columnOneImage}
                alt="about menu"
              />
            </Link>
            <Link to="/stockists" className={styles.stockists} id="stockists">
              <img
                src={
                  'https://res.cloudinary.com/salviejo/image/upload/v1524574628/shop/home/stockists-text.png'
                }
                className={styles.columnOneImage}
                alt="stockists menu"
              />
            </Link>
            <Link
              to="/collection/lookbook"
              className={styles.collection}
              id="collection"
            >
              <img
                src={
                  'https://res.cloudinary.com/salviejo/image/upload/v1524574628/shop/home/collection-text.png'
                }
                className={styles.columnOneImage}
                alt="collection menu"
              />
            </Link>
            <Link to="/contact" className={styles.contact} id="contact">
              <img
                src={
                  'https://res.cloudinary.com/salviejo/image/upload/v1524574628/shop/home/contact-text.png'
                }
                className={styles.columnOneImage}
                alt="contact menu"
              />
            </Link>
          </div>
        </div>
        <div className={styles.columnTwo}>
          <Link to="/shop/collection">
            <img
              src={
                'https://res.cloudinary.com/salviejo/image/upload/v1524574628/shop/home/lot_4_sale_inc_text.jpg'
              }
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
