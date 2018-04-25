import React, { Component } from 'react';

import styles from './index.scss';

class ColLookbook extends Component {
  componentDidMount() {
    document.title = 'Collection Lookbook - Salviejo';
  }

  lookbookImages() {
    let images = [];

    for (let i = 0; i < 17; i++) {
      images.push(
        <div className={styles.image}>
          {/* <img src="images/lookbook/' + (i+1) + '.jpg" /> */}
          <img
            src={`http://res.cloudinary.com/salviejo/image/upload/v1524575028/shop/lookbook/${i +
              1}.jpg`}
            alt={`Lookbook ${i + 1}`}
          />
        </div>,
      );
    }

    return images;
  }

  render() {
    return (
      <div className={styles.lookbook}>
        <div className={styles.images}>{this.lookbookImages()}</div>
      </div>
    );
  }
}
export default ColLookbook;
