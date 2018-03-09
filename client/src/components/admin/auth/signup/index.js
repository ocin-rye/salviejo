import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signUpSubmit } from '../../../../actions';

// const signupClick = () => {
//   const userInfo = {
//     email: 'email@email.com',
//     username: 'username',
//     password: 'password',
//   };
//
//   async function signup() {
//     await axios.post('/api/signup', userInfo);
//   }
//
//   signup();
// };

class SignUp extends Component {
  onSubmitHandle() {
    const userInfo = {
      email: this.props.signUpForm.values.email,
      username: this.props.signUpForm.values.username,
      password: this.props.signUpForm.values.password,
      signUpKey: this.props.signUpForm.values.signUpKey,
    };

    this.props.signUpSubmit(userInfo);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.props.handleSubmit(() => this.onSubmitHandle())}>
            <h4>Sign Up</h4>
            <div>
              <label>Email</label>
              <Field type="text" name="email" component="input" />
            </div>
            <div>
              <label>Username</label>
              <Field type="text" name="username" component="input" />
            </div>
            <div>
              <label>Password</label>
              <Field type="text" name="password" component="input" />
            </div>
            <div>
              <label>Sign Up Key</label>
              <Field type="text" name="signUpKey" component="input" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div>
          <a href="/api/checkuser">Check User</a>
        </div>
      </div>
    );
  }
}

// export default SignUp;

function mapStateToProps(state) {
  return {
    signUpForm: state.form.signUpAuth,
    initialValues: {
      email: '',
      username: '',
      password: '',
      signUpKey: '',
    },
  };
}

export default compose(
  connect(mapStateToProps, { signUpSubmit }),
  reduxForm({
    form: 'signUpAuth',
  }),
)(SignUp);
