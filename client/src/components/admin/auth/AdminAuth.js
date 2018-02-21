import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUp from './SignUp';
import Login from './Login';
import Logout from './Logout';

class AdminAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: '',
    };
  }

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
    return (
      <div>
        {this.renderContent()}
        <button onClick={() => this.setState({ signedIn: true })}>true</button>
        <button onClick={() => this.setState({ signedIn: false })}>false</button>
        <button onClick={() => this.setState({ signedIn: '...loading' })}>...loading</button>
      </div>
    );
  }
}

AdminAuth.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]).isRequired,
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(AdminAuth);
