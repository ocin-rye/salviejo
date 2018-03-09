import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginSubmit } from '../../../../actions';

class Login extends Component {
  onSubmitHandle() {
    const userInfo = {
      email: this.props.loginForm.values.email,
      username: this.props.loginForm.values.username,
      password: this.props.loginForm.values.password,
    };

    this.props.loginSubmit(userInfo);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.props.handleSubmit(() => this.onSubmitHandle())}>
            <h4>Login</h4>
            <div>
              <label>email</label>
              <Field type="text" name="email" component="input" />
            </div>
            <div>
              <label>username</label>
              <Field type="text" name="username" component="input" />
            </div>
            <div>
              <label>password</label>
              <Field type="text" name="password" component="input" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div>
          <a href="/api/checkuser">Check User</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginForm: state.form.loginAuth,
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
  };
}

export default compose(
  connect(mapStateToProps, { loginSubmit }),
  reduxForm({
    form: 'loginAuth',
  }),
)(Login);
