import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

import ScrollToTop from './scrollToTop';

import About from './about';
import AddProduct from './admin/product/addProduct';
import AuthAdmin from './admin/auth/adminAuth';
import CollectionDescription from './collection/description';
import CollectionLookbook from './collection/lookbook';
import CollectionTripPhotos from './collection/tripPhotos';
import Contact from './contact';
import Home from './home';
import Navigation from './navigation';
import NotFound from './notFound';
import PayPalButton from './cart/payPalButton';
import Products from './product/products';
import ProductItem from './product/productItem';
import ShopCollection from './shop/collection';
import ShopOther from './shop/other';
import ShopSouvenirs from './shop/souvenirs';
import Stockists from './stockists';

import styles from './app.scss';
console.log(styles);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Switch>
              <Route exact path="/" />
              <Route path="/:withNavigation" component={Navigation} />
            </Switch>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/addproduct" component={AddProduct} />
              <Route exact path="/admin" component={AuthAdmin} />
              <Route exact path="/cart" component={PayPalButton} />
              <Route
                exact
                path="/collection/description"
                component={CollectionDescription}
              />
              <Route
                exact
                path="/collection/lookbook"
                component={CollectionLookbook}
              />
              <Route
                exact
                path="/collection/trip-photos"
                component={CollectionTripPhotos}
              />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/shop/collection" component={ShopCollection} />
              <Route exact path="/shop/other" component={ShopOther} />
              <Route exact path="/shop/souvenirs" component={ShopSouvenirs} />
              <Route exact path="/stockists" component={Stockists} />
              <Route path="/notfound" component={NotFound} />
              <Route
                path="/:products/:productItem/:other"
                component={NotFound}
              />
              <Route path="/:products/:productItem" component={ProductItem} />
              <Route path="/:products" component={Products} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
