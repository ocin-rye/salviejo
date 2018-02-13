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
      signedIn: '...loading',
    };
  }

  // componentDidMount() {
  //   this.setState({ signedIn: this.props.auth });
  // }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.auth, nextProps.auth);
    if (JSON.stringify(this.props.auth) !== JSON.stringify(nextProps.auth)) {
      // console.log(nextProps.auth, this.props.auth);
      this.setState({ signedIn: nextProps.auth });
    }
  }

  // loginState() {
  //   this.setState({ signedIn: true });
  //   return null;
  // }

  renderContent() {
    // console.log(this.props.auth);
    // console.log(this.props.form);
    // console.log(this.state.signedIn);
    if (this.state.signedIn === false) {
      return (
        <div>
          <SignUp />
          <Login />
          <Logout />
        </div>
      );
    }
    if (this.state.signedIn) {
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
        {/* <SignUp /> */}
        {/* <Login /> */}
        {/* <Logout /> */}
        {this.renderContent()}
        <button onClick={() => this.setState({ signedIn: true })}>true</button>
        <button onClick={() => this.setState({ signedIn: false })}>false</button>
        <button onClick={() => this.setState({ signedIn: '...loading' })}>...loading</button>
        {/* {console.log(this.props.auth)} */}
      </div>
    );
  }
}

AdminAuth.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]).isRequired,
};

function mapStateToProps({ auth, form }) {
  return { auth, form };
}

export default connect(mapStateToProps)(AdminAuth);
