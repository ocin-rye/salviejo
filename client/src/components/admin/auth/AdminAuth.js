import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUp from './SignUp';
import Login from './Login';
import Logout from './Logout';

class AdminAuth extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props.auth, nextProps.auth);
  //   if (JSON.stringify(this.props.auth) !== JSON.stringify(nextProps.auth)) {
  //     // console.log(nextProps.auth, this.props.auth);
  //     this.setState({ signedIn: nextProps.auth });
  //   }
  // }

  // renderContent() {
  //
  //   if (this.state.signedIn === false) {
  //     return (
  //       <div>
  //         <SignUp />
  //         <Login />
  //       </div>
  //     );
  //   }
  //   if (typeof this.state.signedIn === 'object') {
  //     return (
  //       <div>
  //         <Logout />
  //       </div>
  //     );
  //   }
  //   return <div>...loading</div>;
  // }

  renderContent() {
    if (this.props.auth === false) {
      return (
        <div>
          <SignUp />
          <Login />
        </div>
      );
    }
    if (typeof this.props.auth === 'object') {
      return (
        <div>
          <Logout />
        </div>
      );
    }
    return <div>...loading</div>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

AdminAuth.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]).isRequired,
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(AdminAuth);
