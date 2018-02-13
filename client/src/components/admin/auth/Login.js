import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginSubmit } from '../../../actions';

// const loginSubmit = () => {
//   const userInfo = {
//     email: 'email',
//     username: 'username',
//     password: 'password',
//   };
//
//   async function login() {
//     await axios.post('/api/login', userInfo);
//   }
//
//   login();
// };

class Login extends Component {
  // onLoginSubmit(values) {
  //   // print the form values to the console
  //   // console.log(values);
  //   console.log(values.email);
  //   const userInfo = {
  //     email: values.email,
  //     username: values.username,
  //     password: values.password,
  //   };
  //
  //   // async function login() {
  //   //   await axios.post('/api/login', userInfo);
  //   // }
  //
  //   console.log(userInfo);
  //
  //   this.props.loginSubmit(userInfo);
  //
  //   // login();
  //   //
  //   // return this.props.onLogin;
  // }

  render() {
    // const { initialValues, mySubmit, handleSubmit } = this.props;
    //
    // console.log(this.props.initialValues);

    const userInfo = {
      email: 'email@email.com',
      username: 'username',
      password: 'password',
    };

    // const { loginSubmit } = this.props;

    return (
      <div>
        <div>
          {console.log(this.props)}
          {console.log(this.props.formValues)}
          <form onSubmit={this.props.handleSubmit(() => this.props.loginSubmit(userInfo))}>
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
        {/* <div>
          <button onClick={loginClick}>Login</button>
        </div> */}
        <div>
          <a href="/api/checkuser">Check User</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.loginAuth };
}

export default compose(
  connect(mapStateToProps, { loginSubmit }),
  reduxForm({
    // a unique name for the form
    form: 'loginAuth',
  }),
)(Login);

// export default compose(
//   connect(mapStateToProps, actions),
//   reduxForm({
//     form: 'synchronousValidation',
//     fields,
//     validate
//   })
// )(SynchronousValidationForm)
