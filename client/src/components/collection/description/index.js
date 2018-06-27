import React, { Component } from 'react';

import styles from './index.scss';

class ColDescription extends Component {
  componentDidMount() {
    document.title = 'Collection Description - Salviejo';
  }

  render() {
    return (
      <div className={styles.description}>
        <div className={styles.rowOne}>
          <p className={styles.title}>collection description</p>
          <p>
            this seemingly op-art inspired collection focuses on a hypnotizing
            textile motif dating back to the 1400’s pre colonial philippines.
          </p>
          <p>
            the mathematical pattern is native to ilocos norte and ilocos sur in
            the northern philippines. located on the coast, the traditional
            motif, called “kusikus”, or whirlpool, was used to protect ships and
            confuse and ward off evil spirits.
          </p>
          <p>
            for centuries, the filipinos and spanish used these textiles as
            currency for trade and labor. they were understandably treasured for
            their sturdy quality and distinctive appearance.
          </p>
          <p>
            the name of the woven cloth itself is called “abel” and the weaving
            technique is called “binakol”. these textiles, these pieces are
            woven in local cotton, just as they were back then.
          </p>
          <p>
            the collection aims to highlight the history and quality of filipino
            crafts and support the local artisans their communities.
          </p>
          <p>
            all other pieces within the collections are also handwoven by a
            collective of weavers near la union, philippines.
          </p>
        </div>
      </div>
    );
  }
}
export default ColDescription;
