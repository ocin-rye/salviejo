import React, { Component } from 'react';

import styles from './index.scss';

class Stockists extends Component {
  componentDidMount() {
    document.title = 'Stockists - Salviejo';
  }

  render() {
    return (
      <div className={styles.stockists}>
        <p className={styles.title}>stockists</p>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.region}>
              <div className={styles.regionTitle}>north america</div>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <a
                    href="https://estudiolosfeliz.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sectionTitleLink}
                  >
                    estudio los feliz
                  </a>
                </div>
                <div className={styles.sectionDetail}>
                  4311 kingswell avenue
                </div>
                <div className={styles.sectionDetail}>
                  los angeles, ca 20027
                </div>
              </div>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <a
                    href="http://www.shopjudith.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sectionTitleLink}
                  >
                    judith
                  </a>
                </div>
                <div className={styles.sectionDetail}>3 market street</div>
                <div className={styles.sectionDetail}>portland, me 04101</div>
              </div>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <a
                    href="http://www.foragemodernworkshop.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sectionTitleLink}
                  >
                    forage modern workshop
                  </a>
                </div>
                <div className={styles.sectionDetail}>
                  4023 east lake street
                </div>
                <div className={styles.sectionDetail}>
                  minneapolis, mn 55406
                </div>
              </div>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <a
                    href="https://home-coming.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sectionTitleLink}
                  >
                    homecoming
                  </a>
                </div>
                <div className={styles.sectionDetail}>107 franklin street</div>
                <div className={styles.sectionDetail}>brooklyn, ny 11222</div>
              </div>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <a
                    href="https://www.kindredblack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sectionTitleLink}
                  >
                    kindred black
                  </a>
                </div>
                <div className={styles.sectionDetail}>*online</div>
              </div>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <a
                    href="https://maaari.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sectionTitleLink}
                  >
                    maaari
                  </a>
                </div>
                <div className={styles.sectionDetail}>*online</div>
              </div>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <a
                    href="https://www.gloria-grace.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sectionTitleLink}
                  >
                    gloria grace
                  </a>
                </div>
                <div className={styles.sectionDetail}>*online</div>
              </div>
            </div>
            <div className={styles.region}>
              <div className={styles.regionTitle}>europe</div>
              <div className={styles.section}>
                <div className={styles.sectionDetail}>small / shy projects</div>
                <div className={styles.sectionDetail}>
                  19 rue notre dame de nazareth
                </div>
                <div className={styles.sectionDetail}>paris, france 75003</div>
                <div className={styles.sectionDetail}>*thru october 28</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Stockists;
