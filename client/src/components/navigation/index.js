import React from 'react';

const Navigation = () => (
  <div class="menu">
    <div class="menu-item">
        <p><a href="about.html">about</a></p>
    </div>
    <div class="menu-item">
        <a id="works-toggle-3">collection</a>
        <div class="drop-down">
            <p><a href="description.html">description</a></p>
            <p><a href="lookbook.html">lookbook</a></p>
            <p><a href="trip-photos.html">trip photos</a></p>
        </div>
    </div>
    <div class="menu-item">
        <a id="works-toggle-4">shop</a>
        <div class="drop-down">
            <p><a href="shop-collection.html">collection</a></p>
            <p><a href="shop-souvenirs.html">souvenirs</a></p>
            <p><a href="shop-other.html">other</a></p>
        </div>
    </div>
    <div class="menu-item">
      <p><a href="stockists.html">cart</a></p>
    </div>
    <div class="menu-item">
        <p><a href="stockists.html">stockists</a></p>
    </div>
    <div class="menu-item">
        <p><a href="contact.html">contact</a></p>
    </div>
  </div>
);

export default Navigation;
