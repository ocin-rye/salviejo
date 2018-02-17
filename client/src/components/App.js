import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

import AddProduct from './admin/product/AddProduct';
import AuthAdmin from './admin/auth/AdminAuth';
import PayPalButton from './cart/PayPalButton';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          React is working!
          {/* <AuthAdmin /> */}
          <Route exact path="/" component={AuthAdmin} />
          <Route exact path="/cart" component={PayPalButton} />
          <Route exact path="/addproduct" component={AddProduct} />
          {/* <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
