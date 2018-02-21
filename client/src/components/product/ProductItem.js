import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class ProductItem extends Component {
  componentDidMount() {}

  renderContent() {}

  render() {
    return <div>Product Item</div>;
  }
}

// AdminAuth.propTypes = {
//   auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]).isRequired,
// };

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(ProductItem);
