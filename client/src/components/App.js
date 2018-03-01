import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

import AddProduct from './admin/product/AddProduct';
import AuthAdmin from './admin/auth/AdminAuth';
import PayPalButton from './cart/PayPalButton';
import Products from './product/Products';
import ProductItem from './product/ProductItem';
import NotFound from './NotFound';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <div>
          React is working!
          {/* <AuthAdmin /> */}
          <Switch>
            <Route exact path="/admin" component={AuthAdmin} />
            <Route exact path="/cart" component={PayPalButton} />
            <Route exact path="/addproduct" component={AddProduct} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/:products/:productItem" component={ProductItem} />
            <Route path="/:products" component={Products} />
            {/* <Route path="/:products/:product-item" component={ProductItem} /> */}
            {/* <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
