import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

class About extends Component {
  componentDidMount() {
    document.title = 'About - Salviejo';
  }

  render() {
    return (
      <div className={styles.about}>
        <div className={styles.row_1}>
          <p>
            inspired by the way traditional crafts and materials represent the
            history of a culture, kristine peñafiel salviejo collaborates with
            local craftspeople in various places in the world. the collections
            are meant to support the artisans and local communities while also
            highlighting their level of craftsmanship.
          </p>
          <p>
            currently, her focus is on the philippines, where her family is
            from.
          </p>
          <p>
            kristine is influenced by her own nomadic lifestyle and how that can
            limit and enhance her everyday - not to be less attached but to have
            fewer possessions of greater meaning, quality and versatility.
          </p>
          <p>
            the webshop sells pieces from the collections as well as souvenirs
            from trips and personal items looking for a new home.
          </p>
        </div>
        <div className={styles.row_2}>
          <div className={styles.cell_1}>
            {/* <img src="https://res.cloudinary.com/salviejo/image/upload/v1524574989/shop/about/about_image.jpg" /> */}
          </div>
          <div className={styles.cell_2}>
            <div className={styles.cell_content}>
              <a href="http://kristinesalviejo.com/">
                <img src="https://res.cloudinary.com/salviejo/image/upload/v1524574960/shop/about/click_here.png" />
              </a>
            </div>
          </div>
          <div className={styles.cell_3}>
            <div className={styles.cell_content}>
              <a href="http://www.para-dys.com/">
                <img src="https://res.cloudinary.com/salviejo/image/upload/v1524574960/shop/about/and_here.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
