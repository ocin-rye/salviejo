import React, { Component } from 'react';

import styles from './index.scss';

class ColTripPhotos extends Component {
  componentDidMount() {
    document.title = 'Collection Trip Photos - Salviejo';
  }

  tripImages() {
    let images = [];

    for (let i = 0; i < 16; i++) {
      images.push(
        <div className={styles.imageContainer} key={`Trip Photo ${i + 1}`}>
          {/* <img src="images/lookbook/' + (i+1) + '.jpg" /> */}
          <img
            className={styles.image}
            src={`https://res.cloudinary.com/salviejo/image/upload/v1524575028/shop/trip-photos/${i +
              1}.jpg`}
            alt={`Trip ${i + 1}`}
          />
        </div>,
      );
    }

    return images;
  }

  render() {
    return (
      <div className={styles.trip}>
        <p className={styles.title}>trip photos</p>
        <div className={styles.images}>{this.tripImages()}</div>
      </div>
    );
  }
}
export default ColTripPhotos;
