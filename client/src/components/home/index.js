import React from 'react';

import styles from './index.scss';

import aboutImage from '../images/home_shop/about-text.png';
import stockistsImage from '../images/home_shop/stockists-text.png';
import collectionImage from '../images/home_shop/collection-text.png';
import contactImage from '../images/home_shop/contact-text.png';
import shopImage from '../images/home_shop/lot_4_sale_inc_text.jpg';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.columnOne}>
      <div className={styles.heading}>
        <a href="../index.html">
          <h1 className={styles.headingText}>
            kristine <br /> peñafiel <br /> salviejo
          </h1>
        </a>
      </div>
      <div className={styles.columnOneBody}>
        <a href="about.html" className={styles.about} id="about">
          <img
            src={aboutImage}
            className={styles.columnOneImage}
            alt="about menu"
          />
        </a>
        <a href="stockists.html" className={styles.stockists} id="stockists">
          <img
            src={stockistsImage}
            className={styles.columnOneImage}
            alt="stockists menu"
          />
        </a>
        <a href="lookbook.html" className={styles.collection} id="collection">
          <img
            src={collectionImage}
            className={styles.columnOneImage}
            alt="collection menu"
          />
        </a>
        <a href="contact.html" className={styles.contact} id="contact">
          <img
            src={contactImage}
            className={styles.columnOneImage}
            alt="contact menu"
          />
        </a>
      </div>
    </div>
    <div className={styles.columnTwo}>
      <a href="shop-collection.html">
        <img
          src={shopImage}
          className={styles.columnTwoImage}
          alt="shop menu"
        />
      </a>
    </div>
  </div>
);

export default Home;
